---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: built-in-machine-learning-in-the-wolfram-language
url: "https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language"
duration_minutes: 19
duration: 19m
level: Beginner
updated: 1/5/2024
learners: 36360
skills:
  - Wolfram Language
  - Machine Learning
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEQFgJ7wFPlyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704320950065?e=2147483647&amp;v=beta&amp;t=UjKqEFu_jc7UNY1rhU47dgBJ9Y1q-aWx3GUb5_qxraI"
linkedin_topic: Data Science
learning_paths:
  - '[Build Your Wolfram Language Skills](../../Paths/Data%20Science/Learning%20Paths/Build%20Your%20Wolfram%20Language%20Skills.md)'
  - '[Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)'
prev_courses:
  - '[Interacting with Blockchains in the Wolfram Language](Interacting%20with%20Blockchains%20in%20the%20Wolfram%20Language.md)'
  - '[Machine Learning Foundations- Statistics](../Artificial%20Intelligence%20(AI)/Machine%20Learning%20Foundations-%20Statistics.md)'
next_courses:
  - '[Building Blocks for Deep Learning in the Wolfram Language](Building%20Blocks%20for%20Deep%20Learning%20in%20the%20Wolfram%20Language.md)'
  - null
path_nav: '[{"path":"Build Your Wolfram Language Skills","position":7,"total":8,"prev":"Interacting with Blockchains in the Wolfram Language","next":"Building Blocks for Deep Learning in the Wolfram Language"},{"path":"Machine Learning Statistical Foundations Professional Certificate by Wolfram Research","position":6,"total":6,"prev":"Machine Learning Foundations- Statistics","next":null}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/artificial-intelligence
  - topic/security
  - skill/wolfram-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Built-in%20Machine%20Learning%20in%20the%20Wolfram%20Language.md)

![Built-in Machine Learning in the Wolfram Language](https://media.licdn.com/dms/image/v2/D560DAQEQFgJ7wFPlyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704320950065?e=2147483647&amp;v=beta&amp;t=UjKqEFu_jc7UNY1rhU47dgBJ9Y1q-aWx3GUb5_qxraI)

# Built-in Machine Learning in the Wolfram Language

> You can apply machine learning to diverse subject areas without expert-level knowledge with the help of Wolfram Language. While you can build complicated models from scratch, you can also use any of the existing, pre-trained models on different inputs like text, numbers, and images. This course provides an introduction to the many machine learning functions available for such wide-ranging tasks as

> [LinkedIn Learning](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language) | 19m | Beginner | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Built-in Machine Learning in the Wolfram Language**](#1-built-in-machine-learning-in-the-wolfram-language) (1 videos)
  - [Built-in machine learning in the Wolfram language](#built-in-machine-learning-in-the-wolfram-language)
- [**2. Dedicated Functions: Natural Language Processing**](#2-dedicated-functions-natural-language-processing) (1 videos)
  - [Dedicated functions: Natural language processing](#dedicated-functions-natural-language-processing)

### 1. Built-in Machine Learning in the Wolfram Language

[↑ Back to Table of Contents](#table-of-contents)

#### [Built-in machine learning in the Wolfram language](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=3)** - [Abrita] Hello, and welcome to this tutorial on built-in machine learning in the [Wolfram Language](../../Skills/Data%20Science/Wolfram%20Language.md). My name is Abrita Chakravarty, and I'm going to talk to you about some functions available in the Wolfram language that make it really easy to perform specific machine learning tasks. Let me begin by showing you three quick examples, which I hope will show you how easy it is to use the Wolfram language to do tasks like recognizing famous people from their photos. Here, I have pictures of six famous people from history, and I use the Wolfram language to identify them from their images. Another example, identifying an object from an image. So here, I have four images I found on the web when I searched for the keyword International Space Station, and I use the Wolfram language function ImageIdentify to recognize the object from these images. You will see that sometimes, the answer will be exactly what you want it to be, sometimes it might be different, and it'll depend on the image or the data that you feed into the function. And we'll talk about this in more details later on. The third quick example that I have is for identifying a language from a piece of text. So here, I have the text for hello and welcome in many different languages,
>
> **[1:39](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=99)** and I use LanguageIdentify on these pieces of text to identify what spoken language they represent. And here, I have the languages for these strings here.
>
> **[1:58](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=118)** So the Wolfram language offers a number of pre-trained classifiers. These perform specific tasks in [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md), [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) applications, and so on. These classifiers have been trained on a large amount of data, and their parameters have been tuned for optimal performance. There are two ways in which you can access the pre-trained classifiers in the Wolfram language. You can either use the Classify function and provide the name of the classifier that you would like to use, some of which are like Language, Sentiment, Spam, FacebookTopic, NotablePerson, and so on. And another way to access these pre-trained classifiers is by invoking the built-in functions. Some of these functions are ImageIdentify, LanguageIdentify, TextRecognize, TextCases, and TextStructure. There are also many different functions in the Wolfram language that perform machine learning tasks, and for that, I would like to point out the machine learning page in our documentation.
>
> **[3:11](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=191)** So if you visit this page on our documentation system, you will see that we have many different functions that are available. In this tutorial, I'm just showing you the functions that you can directly and quickly use for specific machine learning tasks without training them. These classifiers have already been trained for you, and you are ready to use them right off the shelf. So classifying with a named classifier, the main function you use for this is the Wolfram language Classify function. This is the function, and as the first option, you mention the name of the classifier you want to use. For example, for language identification, you can use the name of the classifier, Language, and then provide the text for which you want to recognize the language. To identify the sentiment from a piece of text, we use the named classifier Sentiment. So again, the first option is the name of the classifier that we are trying to use, and we provide the input data for which we want to use this classifier. For example, the text for which we want to identify the sentiment. So here, for, "I love this movie," we get a positive sentiment, "I am so sad," negative, "My phone broke again," negative. We also have a pre-trained classifier for identifying spam from regular valid text. So here, we use the classifier name Spam on text like these, which says "Sale, buy more,"
>
> **[4:47](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=287)** or something that says "Call mom now," or another that says "Send money now." And we see that the Spam classifier is correctly able to identify this as a possible spam, as well as this, whereas something like "Call mom now" is identified as not spam. We have a topic classifier that is called FacebookTopic. Of course, you can use it on any piece of text, it does not have to be a [Facebook](../../Glossary/Service/Facebook.md) post. However, it will identify the topic from that piece of text. So we use the FacebookTopic classifier on these three example texts here. So the sentence "I bought a new computer" is identified for being from the topic of Technology, "Happy birthday" is from SpecialOccasions, and "These shoes look nice" gets labeled as Fashion. We also have a programming language classifier, and you use it by specifying the name ProgrammingLanguage as a named classifier for the Classify function, and then you can provide pieces of text from different programming languages, and you will see that they can be identified as a programming language from which this syntax came from. So here, we have different programming languages, like Perl, [JavaScript](../../Skills/Software%20Development/JavaScript.md), C#, the shell script from Bourne shell, and the Wolfram language identified as the programming languages.
>
> **[6:22](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=382)** And finally, once more, the example that I showed right at the beginning of identifying notable people from their images. The name of the classifier is NotablePerson, and the way you use it is by providing the name NotablePerson as the first option for the Classify function, and then you provide the test images, and you can also provide various options to modify the results. So when we just use the classifier without these special options, we just get back the decision, like who this person is not identified as, but with these options like TopProbabilities, probabilities and so on, we get the [Probability](../../Skills/Data%20Science/Probability.md) with which the classifier has identified a particular person from this image. So let's take a look at this quick example here. So from the image of Albert Einstein, the classifier is 99% confident that it is the image of Albert Einstein, but here are two other possibilities with really low probabilities. However, for the picture of Yoda, the classifier has really been trained on images of real people, and so it's a little confused here, and it tries its best to identify the image, and provides the top three probabilities for people it has identified the image as.
>
> **[7:55](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=475)** Now let's look at the second category of prebuilt machine learning, that of dedicated functions that are available for performing certain specific machine learning tasks. And in this case, we are looking at functions that are able to do computer vision tasks. So here's our most popular function, ImageIdentify, where you just provide an image, and it's able to quickly identify that image, and it returns what this image has been identified as. This is identified as a gray wolf here, and here's another example, and this image has been identified as a key lime. You will notice the answers are returned as Wolfram language entities, and so you can, you are able to use these entities further, and extract more information from them for more downstream processing. Here's another example for computer vision-related tasks. Here, we provide an image and ask it if it is the image of something that we are expecting it to be. So in ImageIdentify, I just provided the image and I was asking for an answer, but in ImageInstanceQ, I provide an image, and I want to check if this image is really that of a cat or not. And if I was going to say, if I provided the same image,
>
> **[9:30](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=570)** and asked if this was the image of a dog, I should have the answer as false. Another useful function for computer vision tasks is that of identifying faces from images. And so here, I have an image, and I use the FindFaces function to identify the faces in the image. It returns, as you will see, the coordinates,
>
> **[10:04](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/built-in-machine-learning-in-the-wolfram-language?u=76281980&t=604)** which show the bounding box around the images, and then I can use the coordinates to actually identify the images, the faces from the images. So I use these coordinates, and I trim the image to only show the faces. And I can also use the coordinates to highlight the images using a rectangle. Finally, recognizing text from an image. So here, I have the image of this bit of text, which is the paper by Peter Higgs. And I try to identify the text from the image using the TextRecognize function. And so here, if you will see this, if I copy this out and paste it below, you will see that this is a piece of string. And so the text from the image has been correctly recognized, and has been stored as a piece of string by the TextRecognize function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wolfram Language](../../Skills/Data%20Science/Wolfram%20Language.md) (11), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (4), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Analogies:** for example (2), picture (1)
> **CLI Commands:** make (1), cat (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [abrita] (1)


### 2. Dedicated Functions: Natural Language Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Dedicated functions: Natural language processing](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980&t=1)** - [Instructor] Moving on to more dedicated functions, this time for [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md). So we already saw the language classifier used with the Classify function, but this time we used the dedicated function of LanguageIdentify. And so we provided a list of strings, and it is able to correctly identify the different strings, the language from the different strings that is provided as input to it. WordTranslation is a similar example. If you give it a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), then it'll translate it to whatever is specified by the options here. So we give it the word in German, and I ask WordTranslate to translate the word from German to English, French, and Esperanto. And this is the result that I get. So just like WordTranslation is able to translate a word from one language to another, TextTranslation is able to work on entire pieces of text. So for example here, I give TextTranslation this piece of text in German and I ask it to translate it. And here, this has been translated correctly into English. This is the title of paper by Albert Einstein, and so here we have the title in English. So now that you have looked at TextTranslation and you also saw LanguageIdentify
>
> **[1:35](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980&t=95)** and TextRecognize in the previous slides, I am going to show you a simple example using these three functions to identify a piece of text from an image, and then identifying the language and then using the language to correctly, again, to actually improve the recognition of text from image. And then finally using TextTranslate to obtain a useful translation. So here is actually the image from the paper by Albert Einstein, and I try to use TextRecognize to recognize the text from that image. And once I have the text, I use LanguageIdentify to recognize what sort of language it was. Sorry, I had already used it before, so the answer is already there. Now that I know it's German, I try to provide the language to TextRecognize to see if it improves the recognition in some way.
>
> **[2:44](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980&t=164)** And then I use TextTranslation on the German text.
>
> **[2:52](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980&t=172)** And I get this. So unfortunately, because certain characteristics of text from images, it's not doing as well as the translation from the direct string here because there's the number five coming in there, and then certain parts like here. This particular word with the little, with the cursive joining of letters of K and N, the I in there, this was incorrectly recognized as something like an X in this piece of text, and that sort of threw the translation off a little bit. But this is a quick example of how you can do something like recognizing text from images of books and then actually translating them on the fly very easily using the [Wolfram Language](../../Skills/Data%20Science/Wolfram%20Language.md). So let's move on to other functions, like TextStructure and TextCases.
>
> **[4:01](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980&t=241)** Here's a function where we can identify the structure of the text from the string. So here, we have TextStructure and we give it a string, and it is able to identify the parts of speech from this sentence. So it can show which is the noun phrase, which is the verb, and then which is the prepositional phrase, as well as the verb phrase and the entire sentence, and it also identifies things like punctuation and so on. By providing specific options, we can also get more detailed structure of the text. So here, we have the ConstituentGraphs for the same sentence where it shows the tree structure that with the sentence at the root, and then the noun phrase, the verb phrase, and the punctuation, and then the verb phrase, further broken down into the verb, the preposition, and the noun phrase of this part of the sentence. We can also use the DependencyGraphs option to actually see the DependencyGraphs of the various words in the sentence. Then finally, we move on to the TextCases function, which is incredibly useful in identifying different types of things from the text. So here, for example, we use the text from "Alice in Wonderland," which is available in the example data in the Wolfram Language itself. And then we use TextCases to identify all the sentences from this huge piece of text.
>
> **[5:36](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980&t=336)** So we use... Sentence TextCases to identify the sentences. And here's a look at five random sentences from that entire text. So we can also use the option Word to identify the words from the text. So we pick the last sentence from all these sentences that we identified in the previous step, and we break the last sentences into many different words. Okay. And then let's take a look at identifying nouns, verbs, adjectives, and adverbs from a piece of text. So we choose the longest sentence from this text. So we sort the sentences by length. And so this is the longest sentence in this piece of text, "Alice in Wonderland," and we get all the words from it. We see it has 78 words. So here, I just want to see how many words are there in this sentence. So I identify all the words and I find the length of the list of words. And then I identify all the nouns, verbs, adjectives, and adverbs from this long sentence here. And this is what it looks like. Okay? So here are all the nouns: watch, waistcoat, pocket, feet, mind, rabbit, curiosity, field, time, rabbit hole, hedge, and so on.
>
> **[7:10](https://www.linkedin.com/learning/built-in-machine-learning-in-the-wolfram-language/dedicated-functions-natural-language-processing?u=76281980&t=430)** And here are all the verbs: took, looked, hurried, and so on. Here's one adjective, large. And here are all the adverbs in the sentence. We can also get other formatting based on semantic types of words from the sentence. So for example, if you're looking for currency we use, we say CurrencyAmount, and so TextCases is able to identify the currency amount from a piece of text. Or if you are looking for a phone number, then we use the option PhoneNumber, and this gives us the phone number from this sentence. It can also identify colors if we specify the semantic object to be color. And it can also identify text in a specific language. So here, we have a mix of different languages, and so we ask TextCases to identify only the text in English, and this is what we get back. So that was a brief introduction to the built-in functions for various machine learning tasks in the Wolfram Language. We hope you'll join us again for more machine learning in the Wolfram Language. The next tutorial will be on unsupervised machine learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (6), [Wolfram Language](../../Skills/Data%20Science/Wolfram%20Language.md) (4), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1)
> **Analogies:** for example (3), just like (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Wolfram Research](../../Instructors/Data%20Science/Wolfram%20Research.md)

## Skills Covered

- Wolfram Language
- Machine Learning
- Artificial Intelligence (AI)

## Path Context

### In [Build Your Wolfram Language Skills](../../Paths/Data%20Science/Learning%20Paths/Build%20Your%20Wolfram%20Language%20Skills.md)
← [Interacting with Blockchains in the Wolfram Language](Interacting%20with%20Blockchains%20in%20the%20Wolfram%20Language.md) | **7 of 8** | [Building Blocks for Deep Learning in the Wolfram Language](Building%20Blocks%20for%20Deep%20Learning%20in%20the%20Wolfram%20Language.md) →

### In [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)
← [Machine Learning Foundations- Statistics](../Artificial%20Intelligence%20(AI)/Machine%20Learning%20Foundations-%20Statistics.md) | **6 of 6**

## Part of

- [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)

## Appears In

- [Build Your Wolfram Language Skills](../../Paths/Data%20Science/Learning%20Paths/Build%20Your%20Wolfram%20Language%20Skills.md)
- [Machine Learning Statistical Foundations Professional Certificate by Wolfram Research](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Machine%20Learning%20Statistical%20Foundations%20Professional%20Certificate%20by%20Wolfram%20Research.md)

## Related Courses

_Courses sharing skills:_

- [Machine Learning and AI Foundations- Clustering and Association](../Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI%20Foundations-%20Clustering%20and%20Association.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI- Advanced Decision Trees with SPSS](../Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Decision Trees with SPSS](../Artificial%20Intelligence%20(AI)/Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Classification Modeling](Machine%20Learning%20and%20AI%20Foundations-%20Classification%20Modeling.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning & AI Foundations- Linear Regression](../Artificial%20Intelligence%20(AI)/Machine%20Learning%20%26%20AI%20Foundations-%20Linear%20Regression.md) — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)