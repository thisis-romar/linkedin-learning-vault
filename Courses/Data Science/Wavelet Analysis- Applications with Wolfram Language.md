---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: wavelet-analysis-applications-with-wolfram-language
url: "https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language"
duration_minutes: 51
duration: 51m
level: Advanced
updated: 1/10/2024
learners: 1272
skills:
  - Wolfram Language
  - Data Analysis
  - Wavelets
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEpm8u5Dr8Pyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704745109030?e=2147483647&amp;v=beta&amp;t=MbOq0DZsQAie-Bck3b8p_ZR-Il0DNlhkN0OYmq3zYOw"
linkedin_topic: Data Science
learning_paths:
  - '[[Build Your Wolfram Language Skills]]'
prev_courses:
  - '[[Wavelet Analysis- Concepts with Wolfram Language]]'
next_courses:
  - '[[Modeling Market Prices Using Stochastic Processes with Wolfram Language]]'
path_nav: '[{"path":"Build Your Wolfram Language Skills","position":4,"total":8,"prev":"Wavelet Analysis- Concepts with Wolfram Language","next":"Modeling Market Prices Using Stochastic Processes with Wolfram Language"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/wolfram-language
  - skill/data-analysis
  - skill/wavelets
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Wavelet%20Analysis-%20Applications%20with%20Wolfram%20Language.md)

![Wavelet Analysis: Applications with Wolfram Language](https://media.licdn.com/dms/image/v2/D560DAQEpm8u5Dr8Pyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704745109030?e=2147483647&amp;v=beta&amp;t=MbOq0DZsQAie-Bck3b8p_ZR-Il0DNlhkN0OYmq3zYOw)

# Wavelet Analysis: Applications with Wolfram Language

> This course presents examples from a variety of wavelet analysis applications in the Wolfram Language, including financial time series, edge detection and denoising of images, thresholding, image and data compression, and image fusion. Familiarity with Fourier transforms and data smoothing methods is recommended for this class. Learn to analyze a time series using wavelets for detecting discontinu

> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language) | 51m | Advanced | 1K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Introduction: Wavelet Analysis
- [**1. Frequency Detection in a Time Series**](#1-frequency-detection-in-a-time-series) (1 videos)
  - Frequency Detection in a Time Series
- [**2. Filtering Frequencies from Time Series**](#2-filtering-frequencies-from-time-series) (1 videos)
  - Filtering Frequencies from Time Series
- [**3. Applying Wavelet Analysis to Finance**](#3-applying-wavelet-analysis-to-finance) (1 videos)
  - Applying Wavelet Analysis to Finance
- [**4. Edge Detection on Images**](#4-edge-detection-on-images) (1 videos)
  - Edge Detection on Images
- [**5. Denoising Images**](#5-denoising-images) (1 videos)
  - Denoising Images
- [**6. Wavelet Thresholding**](#6-wavelet-thresholding) (1 videos)
  - Wavelet Thresholding
- [**References**](#references) (1 videos)
  - References

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction: Wavelet Analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=0)** Hello, everyone.
>
> **[0:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=1)** Welcome to the seminar on wavelet analysis with the focus on its applications.
>
> **[0:06](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=6)** My name is Paritosh Mokhasi and I'm part of the Wolfram Kernel Technology Group.
>
> **[0:11](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=11)** In order to understand what wavelet analysis does, it's sometimes more prudent to first talk about Fourier analysis.
>
> **[0:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=19)** A Fourier transform decomposes signal into its sine and cosine components and converts the time series from a time domain into a frequency domain.
>
> **[0:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=28)** The frequency domain indicates which frequencies were present at which instances in time.
>
> **[0:34](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=34)** So for example, if you have a time series given by the signal f(t), the taking a Fourier transform of that through this formula gives us information of what frequencies were present.
>
> **[0:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=48)** As an example, let us consider the stationary data, which consists of two signals.
>
> **[0:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=54)** One at sine 20 hertz and one at 80 hertz.
>
> **[0:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=58)** When you take a Fourier transform of this data, you'll notice that there are two frequencies that show up at 40 and 80 hertz, respectively.
>
> **[1:08](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=68)** Notice that the scale is at two times the frequency.
>
> **[1:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=73)** In the above example, the Fourier transform gives us very good information about which frequencies were present in the signal.
>
> **[1:22](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=82)** But what happens when the situation is changed and the signal that you are looking at is a non-stationary signal.
>
> **[1:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=90)** So as an example, let us consider a non-stationary signal wherein from 0 to 2, you have a signal which has got a certain frequency content to it, from 2 to 4, there is a certain frequency content, and 4 to 6, a different frequency content.
>
> **[1:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=106)** When you do a Fourier transform of this signal, you'll notice that you get three peaks, which is correct.
>
> **[1:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=113)** However, you don't get any information about when these peaks occurred at what instance in time.
>
> **[1:59](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=119)** In order to overcome this problem, people generally tend to make use of windowed Fourier transform or short-time Fourier transforms.
>
> **[2:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=127)** In a short-time Fourier transform, what we generally do is we window the signal so that it captures only a certain portion of the time series, and on that certain portion of the time series, we perform a Fourier transform.
>
> **[2:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=140)** So a windowing on the first from 0 to 2 gives us a one frequency.
>
> **[2:25](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=145)** When you move the window forward to 2 to 4, you get a second frequency.
>
> **[2:29](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=149)** And when you move from 4 to 6, you get a third frequency.
>
> **[2:33](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=153)** So then the obvious question comes up is how should the window be moved, how should the window be scaled, et cetera.
>
> **[2:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=160)** In order to avoid all these ambiguity, Fourier transforms have been modified in certain ways, but in order to get a complete understanding about what the signal contains, what kind of information is present in the signal, we can make use of wavelet analysis.
>
> **[3:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=180)** So what exactly would you expect to find when you make use of wavelet analysis?
>
> **[3:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=187)** So the best way to describe that is through an example.
>
> **[3:09](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=189)** Let us consider this data, which is just a sine function but overlapping the sine function, at some instance in time, you have a very sharp event occurring.
>
> **[3:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=199)** Not only is the sharp event occurring at a random location, but the duration for which this event occurs is extremely small.
>
> **[3:29](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=209)** If you were to perform a Fourier transform on this signal with this sharp event in it, you'll notice that the sharp event is completely missed out.
>
> **[3:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=219)** This takes just a few seconds and there's the result.
>
> **[3:42](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=222)** And you can see that you have only one peak, and this peak corresponds to the sine function.
>
> **[3:47](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=227)** You see that no other peak is detected by the Fourier analysis.
>
> **[3:51](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=231)** So in essence, it has completely missed out on this short-lived anomaly.
>
> **[3:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=237)** In real-world applications, these kind of information can be of critical importance.
>
> **[4:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=241)** For example, things like earthquakes, when you're detecting some irregularity in a heartbeat, they occur at a very short instance in time, but they are extremely important in diagnosis.
>
> **[4:16](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=256)** In such cases, if that information is missed by Fourier transform, we might come to wrong conclusions.
>
> **[4:22](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=262)** So now let us look at what happens when you make use of wavelet analysis in order to analyze the same time series signal.
>
> **[4:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=270)** In this case, we are going to make use of a continuous wavelet transform using the PaulWavelets.
>
> **[4:35](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=275)** And I-m going to plot the wavelet scalogram.
>
> **[4:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=279)** And you'll notice here that the wavelet scalogram gives us a much more detailed picture about what the signal is doing.
>
> **[4:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=288)** What you're looking at here on the y-axis are called as scales, and associated with each scale is an octave and a voice.
>
> **[4:56](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=296)** As the octaves become smaller, the wavelet analysis is able to focus on the high-frequency signal or the sharp events that had happened in the signal.
>
> **[5:06](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=306)** So you can see that when the octave was large, it is able to capture just the sine function.
>
> **[5:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=313)** But as you move up and the octaves becomes smaller and smaller, then it localizes to the certain features that were present in the signal, and it's able to tell you that at this event, somewhere near 0.3, a certain event took place of certain duration.
>
> **[5:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=330)** So this makes it extremely useful to use wavelet analysis.
>
> **[5:36](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=336)** So what exactly is happening behind the scenes?
>
> **[5:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=339)** Well, wavelet analysis essentially decomposes a signal into different sets of scales using the following formula.
>
> **[5:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=348)** So when you are performing a wavelet analysis, you make use of what is called as a scaling function, denoted by a phi, and a wavelet function, denoted by psi. Associated with each one of these decompositions from the scaling function and wavelet functions, you end up with a set of coefficients.
>
> **[6:03](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=363)** For the scaling functions, we end up with coefficients c, which are called as coarse coefficients, and with the wavelet functions, we end up with what are called as detail coefficients.
>
> **[6:12](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=372)** Wavelet analysis also performs what is called as a multiresolution analysis, wherein you take a signal and you decompose it into coarse coefficients and detail coefficients, and then you take the coarse coefficients and you further perform a decomposition such that you get a level 2 coarse and detail coefficients.
>
> **[6:29](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/introduction-wavelet-analysis?u=76281980&t=389)** And this tree structure leads to what is called as a multiresolution analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (4), case, (1)
> **CLI Commands:** make (6), find (1)
> **Definitions:** is called (3), is a  (2), is an  (1)
> **Analogies:** for example (2), picture (1)
> **Versions:** 0.3 (1)


### 1. Frequency Detection in a Time Series

> [↑ Back to Table of Contents](#table-of-contents)

#### Frequency Detection in a Time Series
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=0)** So let us now look at certain examples associated with using wavelet analysis.
>
> **[0:06](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=6)** The first one is associated with detecting frequency in a time series using wavelet analysis.
>
> **[0:11](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=11)** Recall that the traditional method that we tend to make use of is Fourier transform, but we are going to show you in this example how you could relate what you see in the wavelet domain to a certain frequency.
>
> **[0:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=26)** So as an example, let us start with a single frequency example wherein we are going to take a function.
>
> **[0:32](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=32)** It's a cos(2π) frequency.
>
> **[0:34](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=34)** And we are going to vary the frequency.
>
> **[0:36](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=36)** We'll put all of this inside of a manipulate.
>
> **[0:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=38)** We are going to perform a ContinuousWaveletTransform.
>
> **[0:41](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=41)** We are going to make use of the GaborWavelet of order 6.
>
> **[0:44](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=44)** We are going to do a decomposition that consists of eight octaves and four voices.
>
> **[0:51](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=51)** When I evaluate this, you get a manipulate that looks as follows.
>
> **[0:56](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=56)** This is the signal that we are doing the decomposition on, and it consists of a certain frequency, in this case 10 hertz.
>
> **[1:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=61)** And you can see that given that this is a stationary signal, which means that the frequency occurs at all instances in time, the wavelet scalogram shows up as a band that stretches across the complete time series.
>
> **[1:14](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=74)** Furthermore, this band is associated with a location which corresponds to a certain scale, and that scale can be related to a frequency.
>
> **[1:24](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=84)** And there is an inverse relationship that exists between frequency and scale.
>
> **[1:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=88)** So for example, if I were to move this frequency bar, you see that the frequency is increasing.
>
> **[1:34](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=94)** And as the frequency increases, you can see in the wavelet scalogram, the band moves up.
>
> **[1:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=100)** And this is a good way of detecting whether you had a high-frequency or a low-frequency content in the signal.
>
> **[1:47](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=107)** Let us look at what happens when you are dealing with two frequencies.
>
> **[1:51](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=111)** In this case, we are going to have two cosine functions of different frequencies.
>
> **[1:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=118)** And we are going to superpose these two functions on top of each other and get a composite function.
>
> **[2:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=125)** Now, you'll notice that when I perform a wavelet transform on that, you'll get two distinct bands, each band corresponding to a specific frequency.
>
> **[2:14](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=134)** Depending upon how these two frequencies combine with each other, the bands can merge into a single band.
>
> **[2:22](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=142)** Or if you, in certain cases, you might end up having amplitude modulation, in which case you get these dark and light bands in a single row.
>
> **[2:33](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=153)** And so using this information, you can easily find out whether you have multiple frequencies or single frequency.
>
> **[2:44](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=164)** I'm going to go ahead and clear the variables here.
>
> **[2:51](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=171)** And now let us look at a more complicated case wherein we are dealing with multiple frequencies.
>
> **[2:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=178)** In this case, here is the data that we are going to generate.
>
> **[3:02](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=182)** It consists of four distinct frequencies occurring at different instances in time.
>
> **[3:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=187)** So one thing to note here is that we are dealing with multiple frequencies and the signal that we are dealing with is non-stationary signal.
>
> **[3:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=195)** When you plot the signal, you notice that it looks as follows, and you can clearly see that at different instances in time, you have different frequencies.
>
> **[3:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=206)** We are now going to perform a ContinuousWaveletTransform using the DGaussianWavelet of order 5.
>
> **[3:32](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=212)** We are going to automatically select the number of octaves, but we'll specify that we need 12 voices per octave.
>
> **[3:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=219)** The wavelet scalogram in this case looks as follows.
>
> **[3:42](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=222)** Wherein for each subinterval in the time series, you can see that you have certain bands that show up, and as the time progresses, you can see that the bands move up the wavelet scalogram, indicating that higher and higher frequencies were found at the latter stages of the time series.
>
> **[4:03](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=243)** And so this is a very useful way of analyzing time series using wavelets.
>
> **[4:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=250)** So now that we have talked about extracting frequency information using wavelet analysis, let's do some more analysis on time series.
>
> **[4:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=260)** And in this case, we are going to use it for, use wavelets for detecting discontinuities, isolating peaks, and recording certain interesting phenomena.
>
> **[4:29](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=269)** As a first example, I'm going to make use of the Heaviside theta function, which is nothing but a step function.
>
> **[4:35](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=275)** And I'm going to perform a ContinuousWaveletTransform on that.
>
> **[4:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=279)** So the plot looks as follows.
>
> **[4:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=283)** You can see that somewhere in the midpoint, you have a discontinuity.
>
> **[4:50](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=290)** We are going to use wavelet analysis in order to detect this discontinuity.
>
> **[4:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=294)** We perform a ContinuousWaveletTransform.
>
> **[4:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=297)** And do a wavelet scalogram.
>
> **[4:59](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=299)** And you can clearly see that the wavelet scalogram tells us at what instance in the time series did that discontinuity take place.
>
> **[5:08](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=308)** Notice once again that it is the lower scales that is able to capture when the sharp event took place. At the higher scales, it is unable to figure out anything.
>
> **[5:21](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=321)** That's because at higher scales you are looking at the entire time series, and you might not be able to isolate the signal precisely.
>
> **[5:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=330)** But as you move to lower scales, you are able to concentrate on local features.
>
> **[5:37](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=337)** You can make use of complex wavelets if you are interested in analyzing certain oscillatory behavior.
>
> **[5:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=343)** In this case, I'm going to construct an oscillatory behavior that's also non-stationary in nature.
>
> **[5:49](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=349)** And this is what the signal that I'm going to analyze looks like.
>
> **[5:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=354)** When you perform a ContinuousWaveletTransform on this signal, you get a closed-form expression from which you can extract out several pieces of information.
>
> **[6:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=365)** One of the things that you could do is plot the amplitudes of the wavelet coefficients using the wavelets scalogram.
>
> **[6:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=373)** And as you can see from this, wavelets scalogram, the information that you are getting from this is that at time t = 0, you have some very high frequency component, and as the time progresses, the frequency component goes on decreasing, which is indicated by this curve here.
>
> **[6:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=391)** You can also compute the phase of the wavelet coefficients by putting an additional argument into the wavelet scalogram.
>
> **[6:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=400)** So you set up automatic as the second argument and arg as the third argument, which is basically, it's going to apply that function to the wavelet coefficients.
>
> **[6:49](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=409)** And this is the result that you get.
>
> **[6:51](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=411)** You can clearly see how the argument behaves for this time series.
>
> **[6:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=418)** You can use ContinuousWaveletTransform to detect certain features in the domain.
>
> **[7:03](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=423)** In this case, I'm going to use our familiar example that we saw in a couple of slides before.
>
> **[7:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/frequency-detection-in-a-time-series?u=76281980&t=430)** When you perform a ContinuousWaveletTransform on that, you can clearly see that it's able to isolate when the peak occurred.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), case, (5), this, (2), for, (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 2. Filtering Frequencies from Time Series

> [↑ Back to Table of Contents](#table-of-contents)

#### Filtering Frequencies from Time Series
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=0)** So now that we have spent enough time looking at detecting frequencies, analyzing how frequencies are related in the wavelet scalogram, let's see how we can actually do some processing on the time series.
>
> **[0:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=13)** And one of the most basic processing you can do is filtering frequencies from a time series.
>
> **[0:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=18)** So we are going to start off with an example.
>
> **[0:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=20)** In this case, we are going to take an example of Sin(x) + Cos(2x) and the ArcSin[Sin[20x]].
>
> **[0:29](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=29)** That is scaled by a certain number.
>
> **[0:32](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=32)** So we have d1 and d2 and we are going to add them together.
>
> **[0:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=38)** And what you see here is a signal which has got obviously some high-frequency component in it.
>
> **[0:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=43)** So now the objective for us is to be able to extract the low-frequency component and the high-frequency component from it.
>
> **[0:51](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=51)** Let's see how we do that.
>
> **[0:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=53)** In order to do that, we are going to make use of DiscreteWaveletTransform.
>
> **[0:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=57)** We're going to make use of a SymletWavelet of order 4, and we are going to perform six levels of decomposition.
>
> **[1:04](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=64)** When you visualize the wavelet coefficients using the WaveletListPlot, they look like this.
>
> **[1:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=70)** So right off the bat, the coarse coefficients, which are the ones below, seem to be capturing the lower-order frequencies, while the detail coefficients seem to be capturing the higher-order components.
>
> **[1:23](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=83)** So in order to keep just the low-frequency content, we can then essentially only keep the coarse coefficients.
>
> **[1:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=91)** So using WaveletMapIndexed, I can then multiply all the detail coefficients with zero and basically eliminate them out.
>
> **[1:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=99)** And this results in a modified wavelet transform which when I take the inverse transform of this modified transform, gives me back the following signal.
>
> **[1:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=108)** So on the left, you see the data, on the right you see the data that was filtered.
>
> **[1:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=114)** So this is the original and this is the filtered data.
>
> **[1:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=118)** If you want to extract out the high-frequency component, then all you need to do is ensure that all the coarse coefficients are set to zero, and that can be done using WaveletMapIndexed, but now we apply a pattern saying that anything that ends with a zero, multiply that with zero.
>
> **[2:16](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=136)** And when you take a Fourier... I'm sorry.
>
> **[2:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=138)** When you take an inverse wavelet transform of this modified transform, you see that you are able to now extract out the high-component in the time series.
>
> **[2:29](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=149)** So now let's look at filtering certain frequencies, especially when you're dealing with non-stationary time series.
>
> **[2:35](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=155)** So in this case, we are going to make use of a combination of certain sinusoids.
>
> **[2:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=163)** And this is what the plot looks like.
>
> **[2:45](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=165)** So you have three bursts of energy.
>
> **[2:47](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=167)** And on the first burst, you have two sinusoidal functions that are present in this domain.
>
> **[2:55](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=175)** When you take a ContinuousWaveletTransform using the GaborWavelet and look at the wavelet scalogram associated with it, you can clearly see the frequency is showing up as the bright spots in the wavelet scalogram.
>
> **[3:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=190)** So you can see at the first instance in time, you have two frequencies, second instance, you have one frequency, and third, you have another frequency.
>
> **[3:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=198)** So now the objective for us is going to be to eliminate or extract out the higher-component frequency from the first instance in time, which corresponds to the 140-hertz component.
>
> **[3:32](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=212)** Now similar to what we had done earlier, this will be equivalent to extracting out the wavelet coefficients and setting those values equal to zero.
>
> **[3:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=220)** So we are going to define a vector.
>
> **[3:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=223)** It's just a zero vector.
>
> **[3:45](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=225)** And we are going to make use of WaveletMapIndexed to set those coefficients which are four and five and have a certain pattern.
>
> **[3:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=234)** And we are going to use that to set it equal to zero.
>
> **[3:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=238)** And now when you apply a wavelet scalogram to it, you can see that the higher-order component has been eliminated.
>
> **[4:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=245)** You perform an inverse wavelet transform on this new modified wavelet transform, and when you do a ListPlot of that, you can see that the higher-order frequency from the first instance in time has been eliminated.
>
> **[4:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=260)** Let's go ahead and clear the variables.
>
> **[4:24](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/filtering-frequencies-from-time-series?u=76281980&t=264)** I have another example here associated with speech analysis which I will not go into, but I would encourage you to, once you get hold of the notebook, to try it out on your end.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), this. (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)


### 3. Applying Wavelet Analysis to Finance

> [↑ Back to Table of Contents](#table-of-contents)

#### Applying Wavelet Analysis to Finance
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=0)** So now let us look at how wavelet analysis can be applied in the field of finance.
>
> **[0:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=5)** So as an example, we are going to look at the stock price trend of IBM since January 2000 till the current date.
>
> **[0:14](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=14)** So I'm going to extract that information out and I'm going to give it a variable price.
>
> **[0:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=19)** When you plot this, you will notice that it's got a certain trend associated with it.
>
> **[0:24](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=24)** But it's got two components to it.
>
> **[0:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=26)** One is there is a high-frequency component which basically would account for the short-term market fluctuations.
>
> **[0:34](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=34)** But more importantly, you also have a seasonal trend associated with it.
>
> **[0:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=38)** So now our objective is going to be to extract out the short-term market trend and the seasonal trend from this time series.
>
> **[0:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=46)** So in order to do that, we are going to perform a DiscreteWaveletTransform using BiorthogonalSplineWavelets.
>
> **[0:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=53)** And now let's do some analysis on the wavelet coefficients.
>
> **[0:56](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=56)** The first thing, obviously, we would like to do is to look at what the coefficients look like.
>
> **[1:02](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=62)** And we can make use of WaveletListPlot with an option of plot layout going to common y-axis, which means that all the wavelet coefficients are basically placed side by side, next to each other.
>
> **[1:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=75)** The finest one over here is associated with the level [0, 0, 0, 0], and is associated with the coarsest coefficient at the highest level.
>
> **[1:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=86)** The next level is... Let's see if we can.
>
> **[1:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=90)** There we go.
>
> **[1:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=91)** A [0, 0, 0, 1]. Okay.
>
> **[1:33](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=93)** Now, what we are going to do is extract out certain trends from the financial time series.
>
> **[1:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=98)** So we are going to first threshold all the detail coefficients and inverse the time series.
>
> **[1:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=103)** When you threshold the detail coefficients, and we are going to threshold it such that anything that's below a value of 100 will be eliminated.
>
> **[1:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=113)** And when you plot it, you'll see that this is the original time series.
>
> **[1:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=117)** And by eliminating all the components that are below 100 from the detail coefficients, you are able to extract out the seasonal trend in the time series.
>
> **[2:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=127)** So technically, now I can take this time series, subtract it with my original time series, and get the high-frequency components from it.
>
> **[2:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=135)** Which would also correspond to detrending a time series.
>
> **[2:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=140)** So in this case, let's look at the WaveletListPlot.
>
> **[2:25](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=145)** We can remove the trend by removing the coarse coefficients only, which is done by multiplying all the coarse coefficients with a value of zero, so it's basically eliminated.
>
> **[2:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/applying-wavelet-analysis-to-finance?u=76281980&t=158)** And when you plot it, you can see that this is the inverse transform of just the detail coefficients, which also corresponds to the high-frequency component.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), case, (1)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Env Vars:** ibm (1)


### 4. Edge Detection on Images

> [↑ Back to Table of Contents](#table-of-contents)

#### Edge Detection on Images
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=0)** Now let us shift our focus to the field of image processing.
>
> **[0:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=5)** In the field of image processing, one of the most common things you would tend to do is edge detection.
>
> **[0:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=10)** So let's spend a couple of minutes talking about how wavelet analysis can be used to perform edge detection on images.
>
> **[0:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=18)** Now, recall that edge detection is in some sense quite similar to detecting events and discontinuities in a time series.
>
> **[0:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=28)** And so we are going to use the same principles that we have looked at for detecting discontinuities in order to detect edges in an image.
>
> **[0:36](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=36)** So as an example, we're going to start with detecting the edges of the following image.
>
> **[0:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=43)** You're going to perform a DiscreteWaveletTransform on this image using a SymletWavelet, and we are going to perform four levels of decomposition.
>
> **[0:52](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=52)** As usual, we first want to visualize what kind of coefficient, what the coefficients look like.
>
> **[0:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=58)** And you can do that using WaveletImagePlot.
>
> **[1:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=61)** This is the variable we have given to the transformation, and we apply an image processing component to it, which is basically ImageAdjust so that it adjusts the brightness and contrast of the wavelet coefficients.
>
> **[1:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=75)** And this is what the wavelet coefficients look like.
>
> **[1:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=79)** So let me go ahead and make this bigger.
>
> **[1:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=80)** And you can see that though you can see hints of edges here, they are really not that clear.
>
> **[1:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=88)** So now, in order to completely extract out the edges of the original image, what we can do is set the coarse coefficient to zero and reconstruct the entire transformation using only the detail coefficients.
>
> **[1:41](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=101)** We do that in this case.
>
> **[1:44](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=104)** And now when you sharpen it and, first, perform an inverse wavelet transform and then sharpen it, you can see that the edges have been nicely captured.
>
> **[1:55](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=115)** Let's look at another example.
>
> **[1:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=118)** This is quite a famous mountain, and we are going to perform a LiftingWaveletTransform, again making use of SymletWavelet.
>
> **[2:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=127)** When you look at the wavelet image plot of that, you can see that the detail coefficients, they actually look quite interesting, but it's difficult to figure out which one of the coefficients should be used in order to compute the... To extract the edges.
>
> **[2:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=146)** So in this case, we are going to apply the same principle as in our first example wherein we are going to set the coarse coefficients to zero and then perform the reconstruction.
>
> **[2:34](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=154)** And when you compare that with just the wavelet coefficients, this is what the wavelet coefficients look like, this is what the edges look like after we did the transformation.
>
> **[2:45](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=165)** And so this is a very common procedure of making use of wavelets in order for edge detection.
>
> **[2:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=173)** Here is a dynamic example that gives you a much more clear picture as to what exactly are the coarse coefficients and the detail coefficients extracting when you perform a wavelet transformation on an image.
>
> **[3:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=187)** So in this case, I have a circle with a horizontal line and I can move this horizontal line.
>
> **[3:12](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=192)** And on the right, I have the wavelet coefficients as plotted using WaveletImagePlot.
>
> **[3:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=198)** You can see that certain coefficients are able to capture the horizontal line pretty well.
>
> **[3:23](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=203)** And as I move this horizontal line such that it becomes diagonal, now all the coefficients are able to compute it.
>
> **[3:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=211)** When it becomes vertical, then a certain pair of coefficients are able to capture it, which you can see is here, here, here, and here.
>
> **[3:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=220)** And when I move back, you can see that other coefficients become activated.
>
> **[3:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=226)** And this is all due to the fact that you are taking these dyadic products when you're performing the wavelet transform, and that enforces certain features.
>
> **[3:55](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=235)** Finally, let's look at an example wherein we can improve the performance of current image processing functionalities which may or may not be inside of Mathematica, and we can improve the performance using wavelet analysis.
>
> **[4:09](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=249)** So here is a very good image of train tracks.
>
> **[4:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=253)** And notice that this train track has several lines associated with them.
>
> **[4:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=259)** And we are interested in extracting these lines in a very efficient way.
>
> **[4:23](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=263)** Now, of course, you can make use of Mathematica's built-in function for perspective, using certain perspective transformations and you can get these lines.
>
> **[4:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=271)** But if you pre-process this image, you may be able to enhance the performance of the existing function.
>
> **[4:37](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=277)** So in this case, we are going to make use of LiftingWaveletTransform, making use of SymletWavelet, and doing a wavelet decomposition on it.
>
> **[4:45](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=285)** When you look at what the coefficients look like, you can see that now clearly a whole bunch of these coefficients are able to extract the lines really well.
>
> **[4:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=297)** So in order to extract the vertical and the diagonal components, we are going to perform an inverse wavelet transform on only certain components of the, only certain coefficients.
>
> **[5:09](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=309)** And we are going to give it an assignment of vertical image.
>
> **[5:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=313)** And after we have computed this inverse wavelet transform, we are going to threshold it and get a new image.
>
> **[5:22](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=322)** Here's what the modified image using wavelet transform looks like.
>
> **[5:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=328)** And you can see that the lines are much, much more clear now.
>
> **[5:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=331)** So if we take this image and now present it to whatever edge detection algorithm that image processing might have, or for detecting lines, then the processing time would be significantly reduced.
>
> **[5:45](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=345)** So in this case, we are interested in extracting the vertical components.
>
> **[5:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=348)** And we are going to make use of the Mathematica's built-in function ImageLines.
>
> **[5:52](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=352)** But we are going to provide it with the transform data.
>
> **[5:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=357)** When you plot it, take just a few seconds, you can see that based on the transformed data, it's able to capture the lines very accurately.
>
> **[6:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=370)** So this kind of preprocessing can go a long way.
>
> **[6:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=373)** Let's look at certain neat examples that are associated with wavelet transforms.
>
> **[6:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=379)** And one of the most important things that come about due to the wavelet analysis is the idea that you can use it for detecting changes in time series, you can use it for denoising, you can use it for pattern recognition.
>
> **[6:33](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=393)** And most of these can be done because for certain wavelet transforms, especially the stationary wavelet transform, it has a property of translation invariance, which means that if I were to take a certain signal and move it from left to right or right to left and look at the wavelet transform associated with it, you will see that the wavelet transform, especially for the stationary wavelet transform, it moves along with it.
>
> **[7:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=425)** So this information allows us to detect events as they are moving in time.
>
> **[7:09](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=429)** We can see if certain signal has a certain motion associated associated with it.
>
> **[7:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=435)** If you were to just perform a vanilla discrete wavelet transform, the situation is slightly different in that you will not be able to capture the motion of the original time series.
>
> **[7:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=450)** So in that sense, stationary wavelet transforms are really important in several applications.
>
> **[7:36](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=456)** Furthermore, the stationary wavelet transform are also called as undecimated wavelet transform.
>
> **[7:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=463)** So to give you an idea of what I mean by that, let's look at this image, which is the Lenna image, we're going to perform a StationaryWaveletTransform on it.
>
> **[7:52](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=472)** And when you look at the dimensions associated with the coefficients, you'll see that the coefficients all have the same dimensions, which is not the case when you perform a DiscreteWaveletTransform wherein a certain amount of down-sampling takes place, which means that as the levels go higher and higher, the dimension of the system is reduced by half.
>
> **[8:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=495)** You can extract the components of the transformation, that is, the coefficients using the following syntax, wherein you are going to give it a pattern, and you're going to say that they are all images, and that allows you to directly visualize the coefficients in the form of images.
>
> **[8:36](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=516)** You can, of course, customize your wavelet image plot as follows.
>
> **[8:45](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=525)** In this case, we are going to, for each one of the coefficients, we are going to apply certain amount of image processing to it in terms of ImageAdjust so that we can extract out certain properties.
>
> **[8:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=538)** And you can see that for different components, you are able to extract out different characteristics.
>
> **[9:03](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=543)** And you can see for this specific coefficient, which is [0, 0, 1], you are actually able to extract all the edges.
>
> **[9:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/edge-detection-on-images?u=76281980&t=550)** In other cases, a certain color is highlighted.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (5), function (3), case. (1), finally, (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** similar to (1), picture (1)


### 5. Denoising Images

> [↑ Back to Table of Contents](#table-of-contents)

#### Denoising Images
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=0)** So keeping with the theme of image processing, let us now look at how you can use wavelet analysis to denoise images.
>
> **[0:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=7)** So we're going to use examples as before in order to bring this point across.
>
> **[0:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=13)** So we're going to make use of this picture of an astronaut.
>
> **[0:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=18)** And we are going to apply a certain amount of noise onto this image so that it becomes a grainy image.
>
> **[0:25](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=25)** Now we are going to perform a discrete wavelet transform on this grainy image.
>
> **[0:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=31)** Before we do further analysis, it's important to have a look at how the image looks like, and this is what the image looks like.
>
> **[0:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=39)** It's got some colored noise to it.
>
> **[0:41](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=41)** Now in order to get rid of the noise, we are going to perform thresholding.
>
> **[0:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=46)** So we have done the DiscreteWaveletTransform.
>
> **[0:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=48)** We apply a wavelet threshold.
>
> **[0:49](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=49)** In this case, we are using the soft method, and we are going to make use of an algorithm associated with the SURE method.
>
> **[0:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=58)** And we are going to apply the threshold on certain coefficients.
>
> **[1:04](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=64)** And we are going to evaluate that.
>
> **[1:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=65)** And now when you invert this modified wavelet transform and compare it with the original image, you can see that the noise has been, rather than eliminating, I would say that it's been smoothened out.
>
> **[1:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=80)** And there on the left is the modified image, on the right is the original noisy image.
>
> **[1:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=88)** You can also change the effect of an image.
>
> **[1:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=91)** So in this case, we are going to take from our example gallery, this image of a rose, and we are going to perform a DiscreteWaveletTransform.
>
> **[1:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=100)** And we are going to strongly threshold all the horizontal and vertical detail coefficients only.
>
> **[1:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=108)** And the thresholding method we are going to use is a hard threshold.
>
> **[1:52](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=112)** We're going to set a value of 1 for it.
>
> **[1:55](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=115)** Now we modify our wavelet transform.
>
> **[1:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=118)** Perform an inverse wavelet transform on that perhaps.
>
> **[2:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=121)** But before we do that, we can look at the wavelet image plot of both of them.
>
> **[2:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=127)** In the first case, you can see that all the coefficients record some kind of information. After you threshold it, and recall that we are only thresholding the vertical and the detail coefficients.
>
> **[2:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=139)** By doing that, only the diagonal components have all the information associated with it.
>
> **[2:24](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=144)** So now when you take the inverse wavelet transform of the first one and the second one, you can see that the first one is able to recover the image as it is.
>
> **[2:35](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=155)** The second one has got some kind of an effect built into it wherein, you know, it's got a more grainy feel to it.
>
> **[2:44](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=164)** One of the most popular examples where wavelets comes into its own is associated with an inverse half-toning problem.
>
> **[2:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=174)** So what exactly is half-toning?
>
> **[2:56](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=176)** Well, half-toning is essentially a process wherein you represent an image through a series of dots.
>
> **[3:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=181)** So if you look at a certain newspaper, you can see that many of, especially in the old-school newspapers, you know, all the images are represented in terms of dots.
>
> **[3:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=190)** So we are going to construct an image.
>
> **[3:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=193)** Rather, we're going to take an image from our database and we are going to make it grainy.
>
> **[3:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=200)** And you can see that here.
>
> **[3:23](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=203)** This has got only dots in it that is used to represent the original image.
>
> **[3:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=208)** Let us take this modified image and perform a StationaryWaveletTransform on it using the DaubechiesWavelet.
>
> **[3:35](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=215)** We are going to make use of WaveletMapIndexed.
>
> **[3:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=218)** And we are going to filter out the coefficients so that they are smoothened, all the coefficients are smoothened.
>
> **[3:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=223)** And we are going to do that only for the coarse coefficients.
>
> **[3:47](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=227)** And when you perform an inverse wavelet transform on that, you can see that the image looks as follows.
>
> **[3:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=233)** Which means that it's able to perform an inverse half-toning.
>
> **[3:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=237)** So the first one is called half-toning.
>
> **[3:59](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/denoising-images?u=76281980&t=239)** We have performed an inverse half-toning.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (2)
> **CLI Commands:** make (4)
> **Definitions:** means that (1), is called (1)
> **Env Vars:** sure (1)
> **Analogies:** picture (1)


### 6. Wavelet Thresholding

> [↑ Back to Table of Contents](#table-of-contents)

#### Wavelet Thresholding
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=0)** So in the past examples, I have introduced the idea of thresholding wavelet coefficients.
>
> **[0:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=7)** So let's look into a little bit more detail as to what exactly does wavelet thresholding entail.
>
> **[0:12](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=12)** And we can do that with the use of an example.
>
> **[0:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=15)** We're going to construct a noisy time series signal.
>
> **[0:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=20)** You can see that it suggests a sine function with some kind of random noise on it.
>
> **[0:25](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=25)** We'll perform a StationaryWaveletTransform on it using the SymletWavelet.
>
> **[0:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=30)** And we're going to perform just an automatic thresholding wherein it's going to just use the default methods that are available and do a thresholding on the coefficients.
>
> **[0:42](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=42)** You can also choose which thresholding methods you want to use and what thresholding values.
>
> **[0:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=48)** In this case, you can give additional arguments of Soft and SURE, and that will also perform a certain wavelet thresholding and give you a modified wavelet transform.
>
> **[0:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=58)** And when you take an inverse wavelet transform of these two modified transforms, you'll notice that the original looks as follows.
>
> **[1:09](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=69)** By default, the thresholding makes use of the hard, universal option, and you can see that it's able to clear up the noise rather well.
>
> **[1:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=78)** If you were to give your own options of Soft and SURE, you can see that in this case also, it's able to get rid of the noise rather well.
>
> **[1:27](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=87)** So you can have a look at the performance of different thresholding methods through the similar example, but now what we're going to do is use several different methods.
>
> **[1:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=98)** And for each one of these methods, we can see how the performance is as I increase the noise in the original signal.
>
> **[1:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=106)** So in this case, as I increase the noise, you can see that the data is becoming noisier and noisier, but the wavelet threshold is able to pick out the noise rather well and is able to give us the true signal.
>
> **[1:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=118)** And you can see that almost all of them do a very good job.
>
> **[2:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=121)** The GCV tends to have a little bit more noise.
>
> **[2:04](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=124)** If you change the kind of transformation you are doing from LiftingWaveletTransform to a StationaryWaveletTransform, you can see that almost all of them work rather well.
>
> **[2:12](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=132)** Generalized Cross Validation in some cases gives you more error.
>
> **[2:17](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=137)** You can also do a comparison of the different adaptive thresholding methods using a similar analog that we just saw.
>
> **[2:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=146)** The different adaptive thresholding methods are universal level, shear level, and GCV level.
>
> **[2:32](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=152)** And when, when I increase the noise, you can see that adaptively, it's doing a thresholding on all the coefficients and it's able to keep the noise down significantly.
>
> **[2:45](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=165)** Let us now look at another ubiquitous thing associated with image processing, which is basically taking a data and compressing it while making sure that the amount of information that it loses due to the compression is minimized.
>
> **[3:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=180)** Wavelet turns out to be an excellent tool in order to perform data compression and image compression.
>
> **[3:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=187)** And the way we do that in wavelet analysis is using what is called as the best basis analysis or best tree analysis.
>
> **[3:17](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=197)** To bring this point forward, let us look at an example.
>
> **[3:21](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=201)** In this case, this is an image of a certain landscape.
>
> **[3:24](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=204)** We are going to perform a DiscreteWaveletPacketTransform.
>
> **[3:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=208)** And look at the wavelet image plot associated with it.
>
> **[3:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=211)** Now, because this is a rather large image, I had to keep the wavelet image plot a little small so that it didn't overwhelm the screen.
>
> **[3:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=218)** But you can see that each one of the vertical and the horizontal coefficients and all the details in the coarse coefficient, each one of them has certain component associated with it.
>
> **[3:47](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=227)** The obvious question is, do we have to retain all this information in order to reconstruct the original signal?
>
> **[3:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=233)** Turns out that we don't need all this information. So we can make use of Mathematica's built-in function called WaveletBestBasis, and apply Shannon entropy as our cost function in order to see which one of these coefficients from the transformation can be eliminated.
>
> **[4:11](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=251)** And so that gives us a modified transform.
>
> **[4:16](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=256)** And when you look at the wavelet image plot of this modified transform, you can see clearly that now you don't require all the highest level coarse and the detail coefficients, but rather, a combination of them. And you can see that this process in itself will be associated with a significant amount of image compression.
>
> **[4:37](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=277)** So let's backtrack a little bit and understand the concept of compression using just a simple time series.
>
> **[4:44](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=284)** In this case, I'm going to make use of just a Sin[x +x^2] function.
>
> **[4:50](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=290)** I'm going to perform a WaveletBestBasis.
>
> **[4:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=294)** First, I'll take a DiscreteWaveletPacketTransform using the DaubechiesWavelet, and then I'll take a WaveletBestBasis on that transformation that gives me, right off the bat, a modified transformation.
>
> **[5:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=307)** I will threshold it to a value such that I'll do a hard thresholding with a value of 0.1.
>
> **[5:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=313)** That again gives me back a modified transformation.
>
> **[5:18](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=318)** And then I can count the number of non-zero values that are present inside this modified transformation.
>
> **[5:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=326)** And it turns out that there are only 153 non-zero values.
>
> **[5:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=330)** So I can basically put this in some kind of a sparse structure and store this information.
>
> **[5:37](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=337)** If you were to just compare it with the original data and see how many values were non-zero, 867.
>
> **[5:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=346)** So you are seeing that there is a significant amount of compression, approximately an eight-order, seven-order compression.
>
> **[5:55](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=355)** And when you plot the original and the reconstructed data, the first one is the original data, the second one is the reconstructed data using the WaveletBestBasis and the wavelet thresholding.
>
> **[6:06](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=366)** And you can see that it does a fairly decent job.
>
> **[6:08](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=368)** In the beginning, there are some wiggles, but overall, from a compression point of view, this is doing a fairly good job.
>
> **[6:16](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=376)** You can see the effect of the compression for different threshold values.
>
> **[6:21](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=381)** So in this case, we'll take the exact same signal and we'll perform a DiscreteWaveletPacketTransform using the DaubechiesWavelet.
>
> **[6:29](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=389)** But now we will make the threshold value as a variable.
>
> **[6:33](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=393)** And we'll compute it for different thresholds.
>
> **[6:37](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=397)** And we'll put that in the form of a table.
>
> **[6:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=400)** And when you look at the plot of the inverse transform of these thresholded functions, you'll see that as the thresholds change, you can see that it gets a lot more choppy.
>
> **[6:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=418)** Okay.
>
> **[6:59](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=419)** Which means that there is a certain value below which, you know, the compressed image is not representing the original signal well.
>
> **[7:08](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=428)** And, of course, if you look at the length of the original data, you have 1,001 points, but for these different thresholded values you're looking at, for the, for a large threshold, you have 110 non-zero values, and for one that's doing a decent job, you have around 353, so you're already getting a really good compression in it.
>
> **[7:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=451)** So let's look at an example of performing what would be termed as a lossy image compression.
>
> **[7:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=458)** In this case, we are going to take this image of a car in a neighborhood.
>
> **[7:43](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=463)** We're going to take a DiscreteWaveletPacketTransform of that.
>
> **[7:47](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=467)** And we are going to perform certain wavelet thresholding using the hard threshold, and we'll change the threshold values.
>
> **[7:55](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=475)** And when you compare these four different thresholding values, you can see that for each one of these images, you have certain non-zero values.
>
> **[8:06](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=486)** So the one with the least amount of non-zero values, obviously, has a very choppy-looking image.
>
> **[8:14](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=494)** However, when you compare it with the total number of non-zero pixels or the non-zero information that's present in the original data, you see that that number is 49,152.
>
> **[8:27](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=507)** So if you were to even take the case wherein the threshold was 0.02, you are looking at a pretty decent 50 percent approximate compression, and you're getting a very decent result from the lossy compression.
>
> **[8:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=528)** So let's look into some more advanced examples from image processing.
>
> **[8:52](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=532)** In this case, we are going to perform what is called as image fusion.
>
> **[8:56](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=536)** So we are going to take, the objective is as follows.
>
> **[8:59](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=539)** We have two images.
>
> **[9:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=540)** This is image 1, image 2 is that of a grass and we are going, we are interested in extracting the texture.
>
> **[9:08](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=548)** Remember, the texture, not the color, of the grass and putting that over the first image.
>
> **[9:15](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=555)** And in order to do that, we are going to make use of wavelet transform.
>
> **[9:22](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=562)** So we are going to first initialize the two pictures and then we are going to perform a StationaryWaveletTransform on both these pictures.
>
> **[9:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=571)** Now, what we'll do is, before we start some analysis, we'll have a look at what the plots look like.
>
> **[9:37](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=577)** And you can see that for the first one, you have, certain coefficients are able to extract out certain pieces of information.
>
> **[9:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=586)** And you can see that the detail coefficients in the second image seem to be contributing to the texture associated with the image.
>
> **[9:54](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=594)** So what we're going to do is we're going to combine all the detail coefficients from both the images.
>
> **[10:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=600)** So we're going to, we extract out the detail coefficients.
>
> **[10:04](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=604)** And then we are going to just add them up in some kind of a weighted average way.
>
> **[10:09](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=609)** When we add them up, we get a new set of coefficients.
>
> **[10:16](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=616)** We can append them to our existing transformation.
>
> **[10:23](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=623)** And we can now construct a new discrete wavelet data from the combined wavelets and perform an inverse transformation on that.
>
> **[10:31](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=631)** And you can see that we get an image.
>
> **[10:34](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=634)** That's the original image with the texture of the grass superimposed on it.
>
> **[10:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=639)** Here is a slightly simpler example, wherein we are going to make use of a monochrome image in order to generate certain masks.
>
> **[10:48](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=648)** So we have our first image.
>
> **[10:53](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=653)** And we have a monochrome image and we are going to superimpose one over the other so that wherever there is a white spot that those sections in the original image will be highlighted.
>
> **[11:05](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=665)** So we perform a StationaryWaveletTransform on the original image and then we'll perform an ImageMultiply on all the detail coefficients.
>
> **[11:17](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=677)** And we get a modified transformation.
>
> **[11:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=679)** And when you perform an inverse transform of that, you'll see that the first case is the one with the mask.
>
> **[11:25](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=685)** You can see that the edges, which were the binary black have been masked, and the one that was white has not been masked.
>
> **[11:38](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=698)** And so there, it all depends on how you want to play around with the detail coefficients on the coarse coefficients, and depending upon how you manipulate them, you can perform different kinds of image processing analysis.
>
> **[11:50](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=710)** Finally, we'll look at some miscellaneous applications associated with wavelet analysis, and the most common one being numerical differentiation.
>
> **[12:01](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=721)** Let's construct a data.
>
> **[12:03](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=723)** Which has got certain trend to it, and also there's a certain amount of noise that is built into it.
>
> **[12:12](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=732)** And now what we're interested in doing is, for this noisy data, we'd like to take the differentiation of the signal.
>
> **[12:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=739)** The problem with such a situation, is that when you perform differentiation on such a noisy signal, the original structure of the signal will be completely lost due to the noise.
>
> **[12:32](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=752)** So instead of doing a naive finite difference, or doing some kind of an interpolation and then doing the differentiation on that, it's better to first preprocess the data and then perform the differentiation. So you can directly make use of wavelets in order to do the numerical differentiation.
>
> **[12:51](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=771)** So in this case, we are going to construct a function that performs differentiation on a noisy signal by taking the StationaryWaveletTransform and then take, only applying the differentiation on certain coefficients.
>
> **[13:07](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=787)** So we are going to initialize the function.
>
> **[13:11](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=791)** And when we apply the function to our noisy time series and compare it with the pure function without any noise, you can see that the differentiation is at least able to capture the basic trend of the differentiated function, which is given by the red line.
>
> **[13:28](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=808)** On the other hand, if you were to just naively make use of interpolation and allow Mathematica to compute the differentiation, you'll see that the trend is completely lost.
>
> **[13:39](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=819)** And so you can see the obvious advantage of doing some pre-processing before doing differentiation.
>
> **[13:46](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=826)** You can also make use of integer lifting.
>
> **[13:49](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=829)** Integer lifting is a very interesting concept in wavelet analysis in that it maps integers to integer wavelet coefficients.
>
> **[13:58](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=838)** It doesn't take an integer and convert it into real during the transformation.
>
> **[14:04](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=844)** This becomes really important when you're dealing with images so that, you know, there is no memory inflation when you're doing the wavelet transformation.
>
> **[14:13](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=853)** So let's look at just a very simple example wherein we are going to construct a random data from 0 to 1064 of them.
>
> **[14:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=860)** When you take a LiftingWaveletTransform, we can give a method going to integer lifting.
>
> **[14:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=866)** And that gives us a discrete wavelet transformation.
>
> **[14:30](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=870)** When you look at what the coefficients look like, you can see that each one of them are integers.
>
> **[14:36](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=876)** So this actually helps in saving memory to the end.
>
> **[14:40](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=880)** Of course, when you take the inverse wavelet transform, because everything is happening at an integer level, the results that come back from the inverse wavelet transform are going to be exact.
>
> **[14:50](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=890)** So the transformations and the math behind it remains the same.
>
> **[14:56](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=896)** It's just the algorithmic implementation that changes that makes it extremely efficient.
>
> **[15:02](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=902)** Finally, we can also look at doing function approximation of a certain function.
>
> **[15:10](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=910)** In this case, you can see the blue line... Sorry.
>
> **[15:12](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=912)** The red line is the function that we are interested in approximating.
>
> **[15:16](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=916)** And we are going to make use of HaarWavelets in order to do it.
>
> **[15:19](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=919)** So let me show you the manipulate that goes behind the scenes.
>
> **[15:21](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=921)** And you can see that I'm going to make LiftingWaveletTransform using the HaarWavelet.
>
> **[15:26](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=926)** And what we are going to do is only look at the largest coefficients and subsequently keep on adding only the largest coefficients.
>
> **[15:34](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=934)** And so right now we only have a horizontal line, but as we move forward, you can see that the lines will eventually merge and start taking the shape of the function we are trying to approximate. And notice that the choppy feel of the approximated function is due to the fact that we are making use of HaarWavelets.
>
> **[15:57](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=957)** And as I move this forward, you can see that the function approximation takes place rather well.
>
> **[16:02](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/wavelet-thresholding?u=76281980&t=962)** But we need to keep on increasing the number of coefficients we are using for the function approximation, because certain regions require more coefficients in order to approximate them, and you can see, by the time we reach 62, it's able to do an excellent job of approximation.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), let (9), case, (9), require (2), finally, (2)
> **CLI Commands:** make (10)
> **Definitions:** is a  (6), is called (2), is an  (1), means that (1)
> **Env Vars:** sure (2), gcv (2)
> **Versions:** 0.1 (1), 0.02 (1)
> **Prerequisites:** before we start (1)


### References

> [↑ Back to Table of Contents](#table-of-contents)

#### References
> [LinkedIn Learning](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/references?u=76281980&t=0)** Finally, I want to bring your attention to a number of references that are available that you can make use of in order to get acquainted with the different applications that wavelet analysis have been used for.
>
> **[0:12](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/references?u=76281980&t=12)** Here are a list of certain general references, and also a number of application references that you would find extremely helpful.
>
> **[0:20](https://www.linkedin.com/learning/wavelet-analysis-applications-with-wolfram-language/references?u=76281980&t=20)** If you have any questions, please feel free to write to us at training@[wolfram.com](https://wolfram.com), and we'd be more than happy to answer any questions that you might have.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** finally, (1), for. (1)
> **URLs:** [wolfram.com](https://wolfram.com) (1)


## Instructor

- [[Wolfram Research]]

## Skills Covered

- Wolfram Language
- Data Analysis
- Wavelets

## Path Context

### In [[Build Your Wolfram Language Skills]]
← [[Wavelet Analysis- Concepts with Wolfram Language]] | **4 of 8** | [[Modeling Market Prices Using Stochastic Processes with Wolfram Language]] →

## Appears In

- [[Build Your Wolfram Language Skills]]

## Related Courses

_Courses sharing skills:_

- [[Wavelet Analysis- Concepts with Wolfram Language]] — Data Analysis, Wolfram Language, Wavelets
- [[Quantile and Box-Whisker Plots in the Wolfram Language]] — Data Analysis, Wolfram Language
- [[Intermediate SQL- Data Reporting and Analysis]] — Data Analysis
- [[Data Analysis- Investigate with SQL]] — Data Analysis
- [[Advanced SQL for Data Scientists]] — Data Analysis

---

[↑ Back to top](#)