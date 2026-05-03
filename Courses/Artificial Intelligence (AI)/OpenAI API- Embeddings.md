---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-embeddings
url: "https://www.linkedin.com/learning/openai-api-embeddings"
duration_minutes: 27
duration: 27m
level: Intermediate
updated: 4/11/2024
learners: 58414
skills:
  - OpenAI API
  - Embedded Software
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-embeddings-3836239"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE9xBCnX-ribQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706053833371?e=2147483647&amp;v=beta&amp;t=PHi2llEvmWZ5FBrQUEGAg4se_z_lvEYuD_s73S4jsT4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
prev_courses:
  - '[[OpenAI API- Function Calling (2023)]]'
next_courses:
  - '[[OpenAI API- Fine-Tuning]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":4,"total":10,"prev":"OpenAI API- Function Calling (2023)","next":"OpenAI API- Fine-Tuning"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/embedded-software
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Embeddings.md)

![OpenAI API: Embeddings](https://media.licdn.com/dms/image/v2/D560DAQE9xBCnX-ribQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706053833371?e=2147483647&amp;v=beta&amp;t=PHi2llEvmWZ5FBrQUEGAg4se_z_lvEYuD_s73S4jsT4)

# OpenAI API: Embeddings

> Embeddings enable a wide range of natural language processing (NLP) and machine learning capabilities by transforming text into a format that machines can understand. In this course, join instructor Kesha Williams as she covers the basics of embeddings and their practical applications in text classification, clustering, semantic search, and more, with hands-on coding examples along the way.Learn h

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings) | 27m | Intermediate | 58K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to embeddings](#introduction-to-embeddings)
- [**1. Understanding Embeddings**](#1-understanding-embeddings) (2 videos)
  - [Explore embeddings](#explore-embeddings)
  - [Leverage cosine similarity](#leverage-cosine-similarity)
- [**2. Obtaining Embeddings via the Embeddings API**](#2-obtaining-embeddings-via-the-embeddings-api) (3 videos)
  - [Explore the Embeddings API](#explore-the-embeddings-api)
  - [Estimate embeddings pricing](#estimate-embeddings-pricing)
  - [Generate embeddings for a single word](#generate-embeddings-for-a-single-word)
- [**3. Using Embeddings in the Real World**](#3-using-embeddings-in-the-real-world) (2 videos)
  - [Cluster similar words](#cluster-similar-words)
  - [Generate embeddings for sentences](#generate-embeddings-for-sentences)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your embeddings journey](#your-embeddings-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to embeddings](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=0)** - [Kesha] Open AI's Embeddings API. Makes generating embeddings or the numeric representation of text easy. Allowing machines to understand text-based content better, and identify relationships between words more easily. [[Microsoft Word|Word]] embeddings, power recommendation systems, question answering, sentiment analysis and more. In this course, I'll show you how to generate embeddings and use them in real world applications. If you're ready to learn the power of word embeddings, join me now in my [[LinkedIn]] learning course. I'm Kesha Williams and I've helped hundreds of thousands of people harness the power of AI tools and machine learning technologies, and I'd love to help you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[LinkedIn]] (1)
> **Env Vars:** api (1)
> **Speakers:** - [kesha] (1)


### 1. Understanding Embeddings

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore embeddings](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=1)** - [Instructor] Embeddings are the cornerstone of [[Natural Language Processing (NLP)|natural language processing]]. But what are they? Let's find out. And embedding is a numeric representation of text that enables machine learning models and [[Algorithms]] to comprehend the connections and associations among concepts more easily. From a technical perspective, and embedding is a vector, also known as a list of floating point numbers representing a text string. Embeddings are used to measure similarities of text strings and the distance between two vectors, measures their relatedness. Small distances suggest words are highly related, and large distances suggest low relatedness. This is a way to capture meanings and relationships between words and phrases, allowing machines to understand and process human language. Think of [[Microsoft Word|word]] embeddings in natural language processing like flavor profiles in cooking. Each word is an ingredient with a unique flavor or meaning. In cooking, chef's mix ingredients based on how their flavors work together, creating delightful dishes. Similarly, word embeddings blend words based on their semantic relationships, crafting meaningful sentences like learning new technology is fun. In essence, word embeddings work
>
> **[1:36](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=96)** like a sophisticated blending mechanism, mixing and matching word vectors in a way that mirrors language's natural use, resulting in semantically coherent and contextually meaningful sentences. Word embeddings have numerous practical applications, including [[Information Retrieval]] in search engines and recommendation systems. Word embeddings help [[Fetch]] relevant documents or items based on the similarity of their content with the search query. Word embeddings are used to determine the sentiment of text, such as classifying product reviews as positive, negative, or neutral. By understanding the context and nuances of words, these models can more accurately assess sentiments! Embeddings are widely used in categorizing text into various classes, like spam detection and emails, categorizing new articles into topics, or organizing web content into relevant categories. Embeddings also assist in identifying the most relevant and important information in text to generate concise summaries. Now that you understand embeddings, let's learn how the similarity between words is measured.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Algorithms]] (1), [[Information Retrieval]] (1), [[Fetch]] (1)
> **Definitions:** is a  (3), known as (1), is an  (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Leverage cosine similarity](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=1)** - [Instructor] Machines use numbers to measure the similarity between words. Yes, there is a mathematical formula involved. So buckle up. We talked about how an embedding is a vector of floating point numbers representing a text string, and you know that the distance between two vectors measures their relatedness. There are several ways to measure the distance between two vectors, like using cosine similarity as the distance function. As the name states, cosine similarity is when you measure the similarity between two non-zero vectors, or in mathematical terms, the cosine distance of the angle between two vectors. Mathematically, cosine similarity is calculated as the dot product of the two vectors divided by the product of their lengths. The formula is where A and B are the [[Microsoft Word|word]] vectors, A dot B is the dot product of the vectors, and the norm of A and the norm of B of the vectors. Cosine similarity ranges from -1 to 1. A value of 1 means the vectors are perfectly aligned, indicating very similar or identical words. A value of 0 indicates no relationship. And a -1 means the words are completely dissimilar or opposites. In most [[Natural Language Processing (NLP)|natural language processing]] applications,
>
> **[1:35](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=95)** the focus is on the range from 0 to 1. In practice, cosine similarity determines how similar two words are in terms of meaning. Words with a high cosine similarity are considered to be semantically closer. For example, in a well-constructed embedding space, words like king and queen would have a higher cosine similarity than king and apple. Let's test this out. The cosine similarity between king and queen is 0.8 or 80%, while the cosine similarity between king and apple is 0.3 or 30%, just as I suspected. Another practical example is using cosine similarity to compute the similarity between documents and a query. Now that you understand how cosine similarity works, let's explore the embeddings API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Versions:** 0.8 (1), 0.3 (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Obtaining Embeddings via the Embeddings API

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the Embeddings API](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=0)** - [Instructor] You know all about [[Microsoft Word|word]] embeddings, so let's see how you can use the Embeddings API to get an embedding. Start by simply sending your text string to the Embeddings API endpoint along with the ID of the embedding model you want to use. The response will contain an embedding you can extract, save, and use. There are several first-generation models, denoted by hyphen 001 in the model ID. At the time of developing this course, there's one second-generation embedding model, denoted by 002 in the model ID, and two third-generation models. The newer generation models are often better, cheaper, and simpler to use and are useful for text search, text similarity, and code search. Let's look at a sample request. Let's start with the input parameter. The input parameter has the input text to embed, in our case, "The Embeddings API is easy to use." The input text can be encoded as a string or array of [[Tokens]]. You'll want to ensure your input doesn't exceed the maximum input tokens for your chosen model. For text-embedding-ada-002, the maximum tokens allowed are 8,191. Of course, this field is required. Next, the model parameter. Model is the ID of the model to use,
>
> **[1:35](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=95)** in this example, text-embedding-ada-002. This is another required field. Next, the encoding format parameter. The encoding format is optional, and it represents the format to return the embeddings in, either float or Base64. Float is the default. Let's look at a sample response. The object field is the object type, which is always embedding. A list of embedding objects is returned from the embedding endpoint. An embedding object represents an embedding vector, which is a list of float values that represent the numeric representation of a piece of text. This is the output from our input text of, "The Embeddings API is easy to use." Index is the index of the embedding in the list of embeddings. That's how easy it is to retrieve an embedding using the Embeddings API. Now let's look at how pricing works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[Microsoft Word|Word]] (1)
> **Env Vars:** api (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Estimate embeddings pricing](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=1)** - [Instructor] Now that you know how to retrieve embeddings using the embeddings API, I bet you're wondering how much it will cost you. Well, let's see. The embedding models have different price points. I mentioned before that the text embeddings ada-002 model is better, cheaper, and simpler. So let's go there. The cost of return and embedding using text embedding ada-002 is one ten thousandths of a dollar per 1000 [[Tokens]]. The cost to turn our previous example, the Embeddings API is easy to use, into an embedding is just one ten thousandths of a dollar because it's under 1000 tokens. The model performs better or is similar to older models at a 99.8% lower price. When you generate embeddings in the real world, though, you'll rarely generate an embedding for just a single sentence. You're typically generating embeddings per page of text. With a budget of just $1, you can process approximately 12,500 pages, assuming an average of 800 tokens per page, and a cost of one ten thousandths of a dollar per 1000 tokens. Wow! The first generation models come nowhere close to this. Knowing how many tokens are in a text string can tell you whether the string is too long for a text model to process, but more importantly, it can help you estimate costs
>
> **[1:37](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=97)** since usage is priced based on the number of tokens, OpenAI has a useful tool to help you estimate the number of tokens in a piece of text. The tool, tiktoken, is a fast tokenizer for use with OpenAI models. Let's see an example. First, you would import tiktoken, and then you would define a helper function that returns the number of tokens in a text string, and then you simply pass in the string and the token count is returned. Now that you understand pricing, let's see the Embeddings API in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (8)
> **Env Vars:** api (3)
> **Versions:** 99.8 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Generate embeddings for a single word](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=1)** - [Instructor] Are you ready to see the embeddings API in action? Let's jump into our [[Python (Programming Language)|Python]] code example found in this Jupyter Notebook. I've already executed all of the cells in this notebook, so the output is ready for us. Now, before you execute this code, your first step is to generate an API key to authenticate to the API, and then configure your application code to use it. Before generating a key, you'll need to sign up for an OpenAI account, which you can do by going to [openai.com](https://openai.com) and clicking Sign up. Remember, you want to treat your API key the way you would treat a password and keep it secure. In this notebook, we are using OpenAI's Python SDK for our code examples to interact with the API. Now, the first step here is to install the necessary libraries. I've installed these libraries already, so I won't run this code again. Next, we import here in cell 84 the os and the OpenAI modules or libraries. The OpenAI module provides access to the [[OpenAI API]]. The os module provides access to operating system dependent functionality. We'll use it to access the API key stored as an environment variable and an external environment file. Here on lines 4 and 5, we're loading that environment file. Then here, cell 85, we are reading the API key from the environment variable
>
> **[1:36](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=96)** and initializing the OpenAI client with it, which will be used to authenticate to the API. Now, let's scroll down to the helper functions. We've designed the code to be modular with reusable code defined in two helper functions. Here, in cell 86, the get_embeddings function is used to call the embeddings API, passing in the [[Microsoft Word|word]] and the selected model, returning the response, which will be the embeddings. Next, in cell 87, we have this compute_cosine_similarity function, which calculates the cosine similarity for two embeddings, so we'll pass in embeddings1 and embeddings2. The function returns the calculated value. Now, let's look at generating embeddings for single words. We are going to compare the word sun to the word moon. Here in cell 88, we are calling the get_embeddings function, passing in the word sun and passing in the ID of our chosen model, which is text-embedding-ada-002. We are storing the response in this response variable. And then here, on line 89, we are pulling out the embeddings and storing them in the sun_embeddings variable. And lastly, here, we are printing out the sun_embeddings. So this is just a look at the vectors returned
>
> **[3:15](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=195)** for the word sun. Let's scroll down to cell 91. We are doing the exact same thing for moon, passing in the word moon, our chosen model, storing the response, pulling the embeddings from the response, storing them in moon_embeddings, and then printing them out. Now that we have the two word embeddings for sun and moon, we need to compare the vectors before calculating the cosine similarity. Here on line 94, printing out the length of the sun_embeddings and the length here on 95 of the moon_embeddings. These vectors need to be the exact same length, they are. So now, we can move on to calculate our cosine similarity. And remember, this is a measure of the similarity between the two vectors. The value can be between 0 and 1. The closer the value is to 1, the more similar the vectors are. Here, cell 96, calling our compute_cosine_similarity function, passing in the sun_embeddings and the moon_embeddings, storing the response in the cosine variable, and then printing it out here. Notice the cosine similarity for the words sun and moon, 0.88 or 88%. Very high similarity between sun and moon,
>
> **[4:51](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=291)** and that's to be expected, they are very similar words. Now, let's calculate the embeddings for two dissimilar words. We are going to calculate for the word cloud, shown here on 97, and the word hero, shown here in 98. And the process is the same as before, calling the get_embeddings function, passing in the word and the chosen model, storing it in the response, then pulling the embeddings, storing it in the cloud_embeddings and printing out the response. So we have the embeddings for the word cloud. We follow the exact same process for the word hero. And here on line 99, we are passing in the cloud_embeddings and the hero_embeddings to our compute_cosine_similarity function. And the value returned is 0.78 or 78%. And the similarity is slightly higher than I expected, but there you have it. Now that you've seen the embeddings API in action, let's see how to cluster similar words.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12), [[Python (Programming Language)|Python]] (2), [[OpenAI API]] (1)
> **Code Identifiers:** sun_embeddings (4), get_embeddings (3), compute_cosine_similarity (3), moon_embeddings (3), cloud_embeddings (2)
> **Env Vars:** api (11), sdk (1)
> **Prerequisites:** configure (1), you'll need (1), install (1)
> **CLI Commands:** python (2)
> **Versions:** 0.88 (1), 0.78 (1)
> **UI Navigation:** scroll down (2)
> **URLs:** [openai.com](https://openai.com) (1)


### 3. Using Embeddings in the Real World

[↑ Back to Table of Contents](#table-of-contents)

#### [Cluster similar words](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=0)** - [Instructor] Are you ready to see a common use case of [[Microsoft Word|word]] embeddings in action? Text clustering. Let's jump into our [[Python (Programming Language)|Python]] code example found in this Jupyter notebook. I do want to call out that I have executed all of the cells in this notebook already so that they are ready for us. Text clustering is widely used in many applications like recommendation systems, sentiment analysis, topic selection, and more. Word embeddings make it possible by allowing us to order and group words. You've seen the first part of this code already. I do want to point out that there is a new library here called scikit-learn. We haven't used it before and you'll need to install it. You can use pip install scikit-learn, and it's a machine learning library for Python. In the next section, we're authenticating to the [[OpenAI API]], using the API key. And then here in cell 49, we start the process of clustering similar words using their embeddings. Here in cell 49, I do want to call out, we are using the k-means algorithm from scikit-learn for clustering. We simply import it using this statement here on line one, which makes it available for use within our code. Here in line four, this is the array of words we want to cluster or group,
>
> **[1:34](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=94)** apple, banana, car, bike, grape, and truck. Here on line six, we are calling the Embeddings API, passing in the words, and the selected model, text-embedding-ada-002. Here in cell 50, we create an empty embeddings array, which is needed by k-means, and then add the embeddings for each word. Next, in cell 51, we've defined the number of clusters or groups we want k-means to produce. In this case, we want two groupings. Remember, our words could fall into either the fruit or the vehicle grouping or category. Next, on line eight, we start the clustering process by calling the k-means fit function, passing in the number of clusters, the random state, and the n_init parameter. When using k-means the results may change with each run, so to counteract varying results, we set this random state to zero, which makes our results reproducible. And here for the init we initialize it to 10, this is the number of times the k-means algorithm runs over the words or iterates over the words. Next, here on line nine,
>
> **[3:09](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=189)** we retrieve the labels for printing, it just helps us read the output better. In cell 52, we loop and print the assigned clusters for each word. So let's look at the grouping here returned by k-means. Apple is assigned cluster zero. Banana is assigned cluster zero. Car and bike are assigned cluster one. Grape is assigned cluster zero, and truck is assigned cluster one. The grouping looks accurate to me. All the fruits belong to cluster zero while all the vehicles belong to cluster one. This is a simple example of grouping like text. Now let's look at another real world use case of embeddings, generating sentence embeddings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Python (Programming Language)|Python]] (2), [[OpenAI API]] (1)
> **CLI Commands:** python (2), make (1), pip (1)
> **Env Vars:** api (3)
> **Prerequisites:** install (2), you'll need (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** n_init (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)

#### [Generate embeddings for sentences](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=1)** - [Instructor] Are you ready to see a common use case of [[Microsoft Word|word]] Embeddings in action? Textual Entailment. When one statement entails another, it implies that the second statement is a logical consequence or outcome of the first. Let's jump into our [[Python (Programming Language)|Python]] code example found in this Jupyter Notebook. Textual Entailment is from [[Natural Language Processing (NLP)|natural language processing]] and indicates the relationship between two sentences. The relationship can either be an entailment, a contradiction, or neutral, where the second text confirms, contradicts, or is unrelated to the original text. This concept is crucial for advanced language understanding, tasks-like summarization and question answering. You've seen the first part of this code to install the necessary libraries. In the next section, we are authenticating to the OpenAI, API using the API Key. Let's scroll down to the Helper functions. We've designed the code to be modular with reusable code defined in Helper functions. The get_embeddings function is used to call the embeddings API, passing in the sentences and the model, returning the response or the embeddings and the compute_cosine_similarity function calculates the cosine similarity for two embeddings, and the function returns the calculated value. Next, we determine the textual entailment
>
> **[1:34](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=94)** for similar sentences. The first sentence is, "The astronaut completed her spacewalk outside the International Space Station." The second sentence is, "The spacewalk occurred in space." Then we generate the embeddings for the two sentences. We pass in the sentences and we also pass in the model that we'd like to use, "text-embedding-ada-002." We call the get_embeddings function. We store the embeddings in the response. Notice, we are passing in both sentences at once, meaning we will get two embeddings back. Before we can calculate the cosine similarity, which is the similarity between the vectors, we need to determine the length because the length needs to be the same. Here in cell 44, I'm printing the length for the first embedding, and here I'm printing the length for the second embedding. They are both the same length. So we can move on to the cosine similarity. And remember, the cosine similarity is the measure of the similarity between the two vectors. "The value can be between 0 and 1, and the closer the value is to 1, the more similar the vectors are." Cosine similarity can play a role in textual entailment by providing a measure of semantic similarity
>
> **[3:08](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=188)** between two text snippets, which can indicate their relationship. So let's see what the cosine similarity is, between our two sentences. The value that returns is about 90%, meaning that, the second sentence is a logical outcome of the first sentence. And if you remember, our first sentence was, "The astronaut completed her spacewalk outside the International Space Station." And the second sentence was, "The spacewalk occurred in space." So 90%. Now let's look at calculating the textual entailment for dissimilar sentences. The first sentence here, on line one in cell 47, "A group of students is studying in the library." The second sentence is, "It is raining outside." We store the sentences and then we pass those sentences into the get_embeddings function using the text embedding ADA model, exactly what we did before. Here on lines 48 and 49, confirming the lengths are the same before computing the cosine similarity, here in cell 50, and the calculated value is 79 or 79%, showing the sentences are dissimilar. Now that you've seen this real world use case of embeddings, let's talk about your embeddings journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Python (Programming Language)|Python]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Code Identifiers:** get_embeddings (3), compute_cosine_similarity (1)
> **Env Vars:** api (3), ada (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **UI Navigation:** scroll down (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your embeddings journey](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=0)** - [Kesha] Congratulations on reaching the end of the course. You should feel proud about what you've accomplished. Thank you for going on this journey with me to generate embeddings using OpenAI's Embeddings API. During our time together, you learned all about the power of the Embeddings API to power recommendation systems, sentiment analysis, topic selection, text summarization, question answering, and more. If you haven't pulled down the code examples, I encourage you to deepen your understanding and retain your newfound knowledge through hands-on exploration. You can also continue learning by watching my other courses, [[Building a Project with the ChatGPT API]], [[Artificial Intelligence Foundations]], Machine Learning, and other courses in the [[OpenAI API]] series. I've enjoyed our time together, please follow me on [[LinkedIn]] so that we can stay connected. I enjoy speaking on the topic of AI and machine learning, so please consider me for your upcoming conference or event. Now go and transform the world! I'm Kesha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1), [[Artificial Intelligence Foundations]] (1), [[OpenAI API]] (1), [[LinkedIn]] (1)
> **Env Vars:** api (4)
> **Speakers:** - [kesha] (1)


## Instructor

- [[Kesha Williams]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-embeddings-3836239)

## Skills Covered

- OpenAI API
- Embedded Software
- OpenAI Products
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Function Calling (2023)]] | **4 of 10** | [[OpenAI API- Fine-Tuning]] →

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