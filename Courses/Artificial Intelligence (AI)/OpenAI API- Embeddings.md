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
  - Develop Your Skills with the OpenAI API
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
created: 2026-04-20
---

![OpenAI API: Embeddings](https://media.licdn.com/dms/image/v2/D560DAQE9xBCnX-ribQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706053833371?e=2147483647&amp;v=beta&amp;t=PHi2llEvmWZ5FBrQUEGAg4se_z_lvEYuD_s73S4jsT4)

# OpenAI API: Embeddings

> Embeddings enable a wide range of natural language processing (NLP) and machine learning capabilities by transforming text into a format that machines can understand. In this course, join instructor Kesha Williams as she covers the basics of embeddings and their practical applications in text classification, clustering, semantic search, and more, with hands-on coding examples along the way.Learn h

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings) | 27m | Intermediate | 58K learners
> [Jump to Path Context ↓](#path-context)

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

## Table of Contents

### Introduction

#### Introduction to embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=0)** - [Kesha] Open AI's Embeddings API.
>
> **[0:03](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=3)** Makes generating embeddings or the numeric representation of text easy.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=8)** Allowing machines to understand text-based content better, and identify relationships between words more easily.
>
> **[0:16](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=16)** Word embeddings, power recommendation systems, question answering, sentiment analysis and more.
>
> **[0:23](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=23)** In this course, I'll show you how to generate embeddings and use them in real world applications.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=29)** If you're ready to learn the power of word embeddings, join me now in my LinkedIn learning course.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-embeddings/introduction-to-embeddings?u=76281980&t=36)** I'm Kesha Williams and I've helped hundreds of thousands of people harness the power of AI tools and machine learning technologies, and I'd love to help you.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - [kesha] (1)


### 1. Understanding Embeddings

#### Explore embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=1)** - [Instructor] Embeddings are the cornerstone of natural language processing.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=5)** But what are they?
>
> **[0:06](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=6)** Let's find out.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=7)** And embedding is a numeric representation of text that enables machine learning models and algorithms to comprehend the connections and associations among concepts more easily.
>
> **[0:20](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=20)** From a technical perspective, and embedding is a vector, also known as a list of floating point numbers representing a text string.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=32)** Embeddings are used to measure similarities of text strings and the distance between two vectors, measures their relatedness.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=40)** Small distances suggest words are highly related, and large distances suggest low relatedness.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=49)** This is a way to capture meanings and relationships between words and phrases, allowing machines to understand and process human language.
>
> **[1:01](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=61)** Think of word embeddings in natural language processing like flavor profiles in cooking.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=68)** Each word is an ingredient with a unique flavor or meaning.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=73)** In cooking, chef's mix ingredients based on how their flavors work together, creating delightful dishes.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=81)** Similarly, word embeddings blend words based on their semantic relationships, crafting meaningful sentences like learning new technology is fun.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=94)** In essence, word embeddings work like a sophisticated blending mechanism, mixing and matching word vectors in a way that mirrors language's natural use, resulting in semantically coherent and contextually meaningful sentences.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=112)** Word embeddings have numerous practical applications, including information retrieval in search engines and recommendation systems.
>
> **[2:02](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=122)** Word embeddings help fetch relevant documents or items based on the similarity of their content with the search query.
>
> **[2:11](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=131)** Word embeddings are used to determine the sentiment of text, such as classifying product reviews as positive, negative, or neutral.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=140)** By understanding the context and nuances of words, these models can more accurately assess sentiments!
>
> **[2:28](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=148)** Embeddings are widely used in categorizing text into various classes, like spam detection and emails, categorizing new articles into topics, or organizing web content into relevant categories.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=164)** Embeddings also assist in identifying the most relevant and important information in text to generate concise summaries.
>
> **[2:54](https://www.linkedin.com/learning/openai-api-embeddings/explore-embeddings?u=76281980&t=174)** Now that you understand embeddings, let's learn how the similarity between words is measured.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), known as (1), is an  (1)
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Leverage cosine similarity
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=1)** - [Instructor] Machines use numbers to measure the similarity between words.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=5)** Yes, there is a mathematical formula involved.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=9)** So buckle up.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=10)** We talked about how an embedding is a vector of floating point numbers representing a text string, and you know that the distance between two vectors measures their relatedness.
>
> **[0:22](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=22)** There are several ways to measure the distance between two vectors, like using cosine similarity as the distance function.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=32)** As the name states, cosine similarity is when you measure the similarity between two non-zero vectors, or in mathematical terms, the cosine distance of the angle between two vectors.
>
> **[0:47](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=47)** Mathematically, cosine similarity is calculated as the dot product of the two vectors divided by the product of their lengths.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=56)** The formula is where A and B are the word vectors, A dot B is the dot product of the vectors, and the norm of A and the norm of B of the vectors.
>
> **[1:09](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=69)** Cosine similarity ranges from -1 to 1.
>
> **[1:13](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=73)** A value of 1 means the vectors are perfectly aligned, indicating very similar or identical words.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=81)** A value of 0 indicates no relationship.
>
> **[1:25](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=85)** And a -1 means the words are completely dissimilar or opposites.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=92)** In most natural language processing applications, the focus is on the range from 0 to 1.
>
> **[1:40](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=100)** In practice, cosine similarity determines how similar two words are in terms of meaning.
>
> **[1:46](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=106)** Words with a high cosine similarity are considered to be semantically closer.
>
> **[1:53](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=113)** For example, in a well-constructed embedding space, words like king and queen would have a higher cosine similarity than king and apple.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=124)** Let's test this out.
>
> **[2:06](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=126)** The cosine similarity between king and queen is 0.8 or 80%, while the cosine similarity between king and apple is 0.3 or 30%, just as I suspected.
>
> **[2:21](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=141)** Another practical example is using cosine similarity to compute the similarity between documents and a query.
>
> **[2:30](https://www.linkedin.com/learning/openai-api-embeddings/leverage-cosine-similarity?u=76281980&t=150)** Now that you understand how cosine similarity works, let's explore the embeddings API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1)
> **Versions:** 0.8 (1), 0.3 (1)
> **Definitions:** is a  (2)
> **Env Vars:** api (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Obtaining Embeddings via the Embeddings API

#### Explore the Embeddings API
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=0)** - [Instructor] You know all about word embeddings, so let's see how you can use the Embeddings API to get an embedding.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=8)** Start by simply sending your text string to the Embeddings API endpoint along with the ID of the embedding model you want to use.
>
> **[0:17](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=17)** The response will contain an embedding you can extract, save, and use.
>
> **[0:23](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=23)** There are several first-generation models, denoted by hyphen 001 in the model ID.
>
> **[0:30](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=30)** At the time of developing this course, there's one second-generation embedding model, denoted by 002 in the model ID, and two third-generation models.
>
> **[0:42](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=42)** The newer generation models are often better, cheaper, and simpler to use and are useful for text search, text similarity, and code search.
>
> **[0:53](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=53)** Let's look at a sample request.
>
> **[0:56](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=56)** Let's start with the input parameter.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=59)** The input parameter has the input text to embed, in our case, "The Embeddings API is easy to use."
>
> **[1:08](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=68)** The input text can be encoded as a string or array of tokens.
>
> **[1:12](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=72)** You'll want to ensure your input doesn't exceed the maximum input tokens for your chosen model.
>
> **[1:18](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=78)** For text-embedding-ada-002, the maximum tokens allowed are 8,191.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=86)** Of course, this field is required.
>
> **[1:29](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=89)** Next, the model parameter.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=92)** Model is the ID of the model to use, in this example, text-embedding-ada-002.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=99)** This is another required field.
>
> **[1:43](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=103)** Next, the encoding format parameter.
>
> **[1:47](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=107)** The encoding format is optional, and it represents the format to return the embeddings in, either float or Base64.
>
> **[1:56](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=116)** Float is the default.
>
> **[1:59](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=119)** Let's look at a sample response.
>
> **[2:02](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=122)** The object field is the object type, which is always embedding.
>
> **[2:08](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=128)** A list of embedding objects is returned from the embedding endpoint.
>
> **[2:12](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=132)** An embedding object represents an embedding vector, which is a list of float values that represent the numeric representation of a piece of text.
>
> **[2:22](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=142)** This is the output from our input text of, "The Embeddings API is easy to use."
>
> **[2:29](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=149)** Index is the index of the embedding in the list of embeddings.
>
> **[2:34](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=154)** That's how easy it is to retrieve an embedding using the Embeddings API.
>
> **[2:40](https://www.linkedin.com/learning/openai-api-embeddings/explore-the-embeddings-api-23754245?u=76281980&t=160)** Now let's look at how pricing works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (1), default. (1), type, (1)
> **Env Vars:** api (5)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Estimate embeddings pricing
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=1)** - [Instructor] Now that you know how to retrieve embeddings using the embeddings API, I bet you're wondering how much it will cost you.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=8)** Well, let's see.
>
> **[0:10](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=10)** The embedding models have different price points.
>
> **[0:13](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=13)** I mentioned before that the text embeddings ada-002 model is better, cheaper, and simpler.
>
> **[0:20](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=20)** So let's go there.
>
> **[0:22](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=22)** The cost of return and embedding using text embedding ada-002 is one ten thousandths of a dollar per 1000 tokens.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=32)** The cost to turn our previous example, the Embeddings API is easy to use, into an embedding is just one ten thousandths of a dollar because it's under 1000 tokens.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=44)** The model performs better or is similar to older models at a 99.8% lower price.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=52)** When you generate embeddings in the real world, though, you'll rarely generate an embedding for just a single sentence.
>
> **[1:00](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=60)** You're typically generating embeddings per page of text.
>
> **[1:05](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=65)** With a budget of just $1, you can process approximately 12,500 pages, assuming an average of 800 tokens per page, and a cost of one ten thousandths of a dollar per 1000 tokens.
>
> **[1:21](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=81)** Wow!
>
> **[1:21](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=81)** The first generation models come nowhere close to this.
>
> **[1:26](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=86)** Knowing how many tokens are in a text string can tell you whether the string is too long for a text model to process, but more importantly, it can help you estimate costs since usage is priced based on the number of tokens, OpenAI has a useful tool to help you estimate the number of tokens in a piece of text.
>
> **[1:49](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=109)** The tool, tiktoken, is a fast tokenizer for use with OpenAI models.
>
> **[1:57](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=117)** Let's see an example.
>
> **[1:59](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=119)** First, you would import tiktoken, and then you would define a helper function that returns the number of tokens in a text string, and then you simply pass in the string and the token count is returned.
>
> **[2:14](https://www.linkedin.com/learning/openai-api-embeddings/estimate-embeddings-pricing?u=76281980&t=134)** Now that you understand pricing, let's see the Embeddings API in action.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1), function (1), pass (1)
> **Env Vars:** api (3)
> **Versions:** 99.8 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Generate embeddings for a single word
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=1)** - [Instructor] Are you ready to see the embeddings API in action?
>
> **[0:05](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=5)** Let's jump into our Python code example found in this Jupyter Notebook.
>
> **[0:09](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=9)** I've already executed all of the cells in this notebook, so the output is ready for us.
>
> **[0:14](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=14)** Now, before you execute this code, your first step is to generate an API key to authenticate to the API, and then configure your application code to use it.
>
> **[0:25](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=25)** Before generating a key, you'll need to sign up for an OpenAI account, which you can do by going to [openai.com](https://openai.com) and clicking Sign up.
>
> **[0:34](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=34)** Remember, you want to treat your API key the way you would treat a password and keep it secure.
>
> **[0:40](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=40)** In this notebook, we are using OpenAI's Python SDK for our code examples to interact with the API.
>
> **[0:49](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=49)** Now, the first step here is to install the necessary libraries.
>
> **[0:54](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=54)** I've installed these libraries already, so I won't run this code again.
>
> **[0:58](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=58)** Next, we import here in cell 84 the os and the OpenAI modules or libraries.
>
> **[1:07](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=67)** The OpenAI module provides access to the OpenAI API.
>
> **[1:12](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=72)** The os module provides access to operating system dependent functionality.
>
> **[1:17](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=77)** We'll use it to access the API key stored as an environment variable and an external environment file.
>
> **[1:25](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=85)** Here on lines 4 and 5, we're loading that environment file.
>
> **[1:29](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=89)** Then here, cell 85, we are reading the API key from the environment variable and initializing the OpenAI client with it, which will be used to authenticate to the API.
>
> **[1:44](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=104)** Now, let's scroll down to the helper functions.
>
> **[1:46](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=106)** We've designed the code to be modular with reusable code defined in two helper functions.
>
> **[1:54](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=114)** Here, in cell 86, the get_embeddings function is used to call the embeddings API, passing in the word and the selected model, returning the response, which will be the embeddings.
>
> **[2:08](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=128)** Next, in cell 87, we have this compute_cosine_similarity function, which calculates the cosine similarity for two embeddings, so we'll pass in embeddings1 and embeddings2.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=143)** The function returns the calculated value.
>
> **[2:28](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=148)** Now, let's look at generating embeddings for single words.
>
> **[2:32](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=152)** We are going to compare the word sun to the word moon.
>
> **[2:38](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=158)** Here in cell 88, we are calling the get_embeddings function, passing in the word sun and passing in the ID of our chosen model, which is text-embedding-ada-002.
>
> **[2:53](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=173)** We are storing the response in this response variable.
>
> **[2:57](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=177)** And then here, on line 89, we are pulling out the embeddings and storing them in the sun_embeddings variable.
>
> **[3:06](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=186)** And lastly, here, we are printing out the sun_embeddings.
>
> **[3:10](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=190)** So this is just a look at the vectors returned for the word sun.
>
> **[3:18](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=198)** Let's scroll down to cell 91.
>
> **[3:22](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=202)** We are doing the exact same thing for moon, passing in the word moon, our chosen model, storing the response, pulling the embeddings from the response, storing them in moon_embeddings, and then printing them out.
>
> **[3:40](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=220)** Now that we have the two word embeddings for sun and moon, we need to compare the vectors before calculating the cosine similarity.
>
> **[3:51](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=231)** Here on line 94, printing out the length of the sun_embeddings and the length here on 95 of the moon_embeddings.
>
> **[4:00](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=240)** These vectors need to be the exact same length, they are.
>
> **[4:04](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=244)** So now, we can move on to calculate our cosine similarity.
>
> **[4:08](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=248)** And remember, this is a measure of the similarity between the two vectors.
>
> **[4:14](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=254)** The value can be between 0 and 1.
>
> **[4:16](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=256)** The closer the value is to 1, the more similar the vectors are.
>
> **[4:22](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=262)** Here, cell 96, calling our compute_cosine_similarity function, passing in the sun_embeddings and the moon_embeddings, storing the response in the cosine variable, and then printing it out here.
>
> **[4:40](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=280)** Notice the cosine similarity for the words sun and moon, 0.88 or 88%.
>
> **[4:48](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=288)** Very high similarity between sun and moon, and that's to be expected, they are very similar words.
>
> **[4:56](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=296)** Now, let's calculate the embeddings for two dissimilar words.
>
> **[5:01](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=301)** We are going to calculate for the word cloud, shown here on 97, and the word hero, shown here in 98.
>
> **[5:08](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=308)** And the process is the same as before, calling the get_embeddings function, passing in the word and the chosen model, storing it in the response, then pulling the embeddings, storing it in the cloud_embeddings and printing out the response.
>
> **[5:26](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=326)** So we have the embeddings for the word cloud.
>
> **[5:29](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=329)** We follow the exact same process for the word hero.
>
> **[5:34](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=334)** And here on line 99, we are passing in the cloud_embeddings and the hero_embeddings to our compute_cosine_similarity function.
>
> **[5:44](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=344)** And the value returned is 0.78 or 78%.
>
> **[5:48](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=348)** And the similarity is slightly higher than I expected, but there you have it.
>
> **[5:54](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-a-single-word?u=76281980&t=354)** Now that you've seen the embeddings API in action, let's see how to cluster similar words.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (6), module (2), pass (1)
> **Code Identifiers:** sun_embeddings (4), get_embeddings (3), compute_cosine_similarity (3), moon_embeddings (3), cloud_embeddings (2)
> **Env Vars:** api (11), sdk (1)
> **Prerequisites:** configure (1), you'll need (1), install (1)
> **CLI Commands:** python (2)
> **Versions:** 0.88 (1), 0.78 (1)
> **UI Navigation:** scroll down (2)
> **URLs:** [openai.com](https://openai.com) (1)


### 3. Using Embeddings in the Real World

#### Cluster similar words
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=0)** - [Instructor] Are you ready to see a common use case of word embeddings in action?
>
> **[0:05](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=5)** Text clustering.
>
> **[0:07](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=7)** Let's jump into our Python code example found in this Jupyter notebook.
>
> **[0:12](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=12)** I do want to call out that I have executed all of the cells in this notebook already so that they are ready for us.
>
> **[0:19](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=19)** Text clustering is widely used in many applications like recommendation systems, sentiment analysis, topic selection, and more.
>
> **[0:30](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=30)** Word embeddings make it possible by allowing us to order and group words.
>
> **[0:35](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=35)** You've seen the first part of this code already.
>
> **[0:38](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=38)** I do want to point out that there is a new library here called scikit-learn.
>
> **[0:44](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=44)** We haven't used it before and you'll need to install it.
>
> **[0:48](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=48)** You can use pip install scikit-learn, and it's a machine learning library for Python.
>
> **[0:55](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=55)** In the next section, we're authenticating to the OpenAI API, using the API key.
>
> **[1:02](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=62)** And then here in cell 49, we start the process of clustering similar words using their embeddings.
>
> **[1:11](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=71)** Here in cell 49, I do want to call out, we are using the k-means algorithm from scikit-learn for clustering.
>
> **[1:19](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=79)** We simply import it using this statement here on line one, which makes it available for use within our code.
>
> **[1:28](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=88)** Here in line four, this is the array of words we want to cluster or group, apple, banana, car, bike, grape, and truck.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=99)** Here on line six, we are calling the Embeddings API, passing in the words, and the selected model, text-embedding-ada-002.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=112)** Here in cell 50, we create an empty embeddings array, which is needed by k-means, and then add the embeddings for each word.
>
> **[2:04](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=124)** Next, in cell 51, we've defined the number of clusters or groups we want k-means to produce.
>
> **[2:13](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=133)** In this case, we want two groupings.
>
> **[2:15](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=135)** Remember, our words could fall into either the fruit or the vehicle grouping or category.
>
> **[2:23](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=143)** Next, on line eight, we start the clustering process by calling the k-means fit function, passing in the number of clusters, the random state, and the n_init parameter.
>
> **[2:39](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=159)** When using k-means the results may change with each run, so to counteract varying results, we set this random state to zero, which makes our results reproducible.
>
> **[2:54](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=174)** And here for the init we initialize it to 10, this is the number of times the k-means algorithm runs over the words or iterates over the words.
>
> **[3:06](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=186)** Next, here on line nine, we retrieve the labels for printing, it just helps us read the output better.
>
> **[3:15](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=195)** In cell 52, we loop and print the assigned clusters for each word.
>
> **[3:21](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=201)** So let's look at the grouping here returned by k-means.
>
> **[3:27](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=207)** Apple is assigned cluster zero.
>
> **[3:30](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=210)** Banana is assigned cluster zero.
>
> **[3:33](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=213)** Car and bike are assigned cluster one.
>
> **[3:36](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=216)** Grape is assigned cluster zero, and truck is assigned cluster one.
>
> **[3:42](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=222)** The grouping looks accurate to me.
>
> **[3:45](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=225)** All the fruits belong to cluster zero while all the vehicles belong to cluster one.
>
> **[3:51](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=231)** This is a simple example of grouping like text.
>
> **[3:55](https://www.linkedin.com/learning/openai-api-embeddings/cluster-similar-words?u=76281980&t=235)** Now let's look at another real world use case of embeddings, generating sentence embeddings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), function (1)
> **CLI Commands:** python (2), make (1), pip (1)
> **Env Vars:** api (3)
> **Prerequisites:** install (2), you'll need (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** n_init (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)

#### Generate embeddings for sentences
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=1)** - [Instructor] Are you ready to see a common use case of word Embeddings in action?
>
> **[0:05](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=5)** Textual Entailment.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=8)** When one statement entails another, it implies that the second statement is a logical consequence or outcome of the first.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=15)** Let's jump into our Python code example found in this Jupyter Notebook.
>
> **[0:21](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=21)** Textual Entailment is from natural language processing and indicates the relationship between two sentences.
>
> **[0:28](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=28)** The relationship can either be an entailment, a contradiction, or neutral, where the second text confirms, contradicts, or is unrelated to the original text.
>
> **[0:39](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=39)** This concept is crucial for advanced language understanding, tasks-like summarization and question answering.
>
> **[0:48](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=48)** You've seen the first part of this code to install the necessary libraries.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=52)** In the next section, we are authenticating to the OpenAI, API using the API Key.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=59)** Let's scroll down to the Helper functions.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=64)** We've designed the code to be modular with reusable code defined in Helper functions.
>
> **[1:10](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=70)** The get_embeddings function is used to call the embeddings API, passing in the sentences and the model, returning the response or the embeddings and the compute_cosine_similarity function calculates the cosine similarity for two embeddings, and the function returns the calculated value.
>
> **[1:32](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=92)** Next, we determine the textual entailment for similar sentences.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=96)** The first sentence is, "The astronaut completed her spacewalk outside the International Space Station."
>
> **[1:44](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=104)** The second sentence is, "The spacewalk occurred in space."
>
> **[1:49](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=109)** Then we generate the embeddings for the two sentences.
>
> **[1:55](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=115)** We pass in the sentences and we also pass in the model that we'd like to use, "text-embedding-ada-002."
>
> **[2:04](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=124)** We call the get_embeddings function.
>
> **[2:06](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=126)** We store the embeddings in the response.
>
> **[2:09](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=129)** Notice, we are passing in both sentences at once, meaning we will get two embeddings back.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=140)** Before we can calculate the cosine similarity, which is the similarity between the vectors, we need to determine the length because the length needs to be the same.
>
> **[2:30](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=150)** Here in cell 44, I'm printing the length for the first embedding, and here I'm printing the length for the second embedding.
>
> **[2:40](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=160)** They are both the same length.
>
> **[2:42](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=162)** So we can move on to the cosine similarity.
>
> **[2:44](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=164)** And remember, the cosine similarity is the measure of the similarity between the two vectors.
>
> **[2:51](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=171)** "The value can be between 0 and 1, and the closer the value is to 1, the more similar the vectors are."
>
> **[3:00](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=180)** Cosine similarity can play a role in textual entailment by providing a measure of semantic similarity between two text snippets, which can indicate their relationship.
>
> **[3:13](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=193)** So let's see what the cosine similarity is, between our two sentences.
>
> **[3:19](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=199)** The value that returns is about 90%, meaning that, the second sentence is a logical outcome of the first sentence.
>
> **[3:29](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=209)** And if you remember, our first sentence was, "The astronaut completed her spacewalk outside the International Space Station."
>
> **[3:37](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=217)** And the second sentence was, "The spacewalk occurred in space."
>
> **[3:40](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=220)** So 90%.
>
> **[3:43](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=223)** Now let's look at calculating the textual entailment for dissimilar sentences.
>
> **[3:51](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=231)** The first sentence here, on line one in cell 47, "A group of students is studying in the library."
>
> **[4:00](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=240)** The second sentence is, "It is raining outside."
>
> **[4:06](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=246)** We store the sentences and then we pass those sentences into the get_embeddings function using the text embedding ADA model, exactly what we did before.
>
> **[4:18](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=258)** Here on lines 48 and 49, confirming the lengths are the same before computing the cosine similarity, here in cell 50, and the calculated value is 79 or 79%, showing the sentences are dissimilar.
>
> **[4:37](https://www.linkedin.com/learning/openai-api-embeddings/generate-embeddings-for-sentences?u=76281980&t=277)** Now that you've seen this real world use case of embeddings, let's talk about your embeddings journey.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), pass (3)
> **Code Identifiers:** get_embeddings (3), compute_cosine_similarity (1)
> **Env Vars:** api (3), ada (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **UI Navigation:** scroll down (1)


### Conclusion

#### Your embeddings journey
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=0)** - [Kesha] Congratulations on reaching the end of the course.
>
> **[0:05](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=5)** You should feel proud about what you've accomplished.
>
> **[0:08](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=8)** Thank you for going on this journey with me to generate embeddings using OpenAI's Embeddings API.
>
> **[0:15](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=15)** During our time together, you learned all about the power of the Embeddings API to power recommendation systems, sentiment analysis, topic selection, text summarization, question answering, and more.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=32)** If you haven't pulled down the code examples, I encourage you to deepen your understanding and retain your newfound knowledge through hands-on exploration.
>
> **[0:43](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=43)** You can also continue learning by watching my other courses, [[Building a Project with the ChatGPT API]], Artificial Intelligence Foundations, Machine Learning, and other courses in the OpenAI API series.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=59)** I've enjoyed our time together, please follow me on LinkedIn so that we can stay connected.
>
> **[1:04](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=64)** I enjoy speaking on the topic of AI and machine learning, so please consider me for your upcoming conference or event.
>
> **[1:12](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=72)** Now go and transform the world!
>
> **[1:15](https://www.linkedin.com/learning/openai-api-embeddings/your-embeddings-journey?u=76281980&t=75)** I'm Kesha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **Code Keywords:** continue (1)
> **Speakers:** - [kesha] (1)


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