---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: interacting-with-blockchains-in-the-wolfram-language
url: "https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language"
duration_minutes: 34
duration: 34m
level: Intermediate
updated: 1/5/2024
learners: 4190
skills:
  - Wolfram Language
  - Blockchain Analysis
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEERoS4MfXsLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704327196182?e=2147483647&amp;v=beta&amp;t=4KQoCh1u79YfCB85rWRpnk6jGoj9ktRYSu5yc7ioyRk"
linkedin_topic: Data Science
learning_paths:
  - '[[Build Your Wolfram Language Skills]]'
prev_courses:
  - '[[Modeling Market Prices Using Stochastic Processes with Wolfram Language]]'
next_courses:
  - '[[Built-in Machine Learning in the Wolfram Language]]'
path_nav: '[{"path":"Build Your Wolfram Language Skills","position":6,"total":8,"prev":"Modeling Market Prices Using Stochastic Processes with Wolfram Language","next":"Built-in Machine Learning in the Wolfram Language"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/wolfram-language
  - skill/blockchain-analysis
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Interacting%20with%20Blockchains%20in%20the%20Wolfram%20Language.md)

![Interacting with Blockchains in the Wolfram Language](https://media.licdn.com/dms/image/v2/D560DAQEERoS4MfXsLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704327196182?e=2147483647&amp;v=beta&amp;t=4KQoCh1u79YfCB85rWRpnk6jGoj9ktRYSu5yc7ioyRk)

# Interacting with Blockchains in the Wolfram Language

> This course showcases features and functions available in Wolfram Language for reading and writing data to blockchains. Examples demonstrate transactions from a real crypto wallet as well as a wide variety of external services and APIs working in tandem with Wolfram technology. Check out this course to learn how to connect to a blockchain and access information about its properties, get informatio

> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language) | 34m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Blockchain Data]]** (1 videos)
- **[[#2. Blockchain Block Data]]** (1 videos)
- **[[#3. Blockchain Transaction Data]]** (1 videos)
- **[[#4. Blockchain Address Data]]** (1 videos)
- **[[#5. Blockchain Token Data]]** (1 videos)
- **[[#6. Blockchain Contract Value]]** (1 videos)

### 1. Blockchain Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Blockchain data
> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=2)** Thank you for joining us today.
>
> **[0:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=3)** My name is Christian and I'm going to show you how to interact with different blockchains using the Wolfram Language.
>
> **[0:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=11)** All right.
>
> **[0:12](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=12)** So with the Wolfram Language, you can read and you can write the blockchain.
>
> **[0:19](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=19)** So let me start with the read-only operations to you explain the different things you can do with it.
>
> **[0:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=28)** All right.
>
> **[0:29](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=29)** So let's start with BlockchainData.
>
> **[0:32](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=32)** So BlockchainData is the most simple function we have to explore a blockchain.
>
> **[0:41](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=41)** Most of these functions return an association.
>
> **[0:45](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=45)** As you can see here.
>
> **[0:47](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=47)** So when you want to See, it's usually useful to show this as a dataset.
>
> **[0:55](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=55)** All right.
>
> **[0:55](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=55)** So for example, in this case we have the Bitcoin blockchain.
>
> **[1:01](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=61)** And here you can see some other properties about this blockchain.
>
> **[1:09](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=69)** So it's a good opportunity to show the BlockchainBase option.
>
> **[1:14](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=74)** So with the BlockchainBase option, you can specify which blockchain you want to connect with.
>
> **[1:24](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=84)** So let's say if we choose the Ethereum blockchain.
>
> **[1:33](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=93)** You'll see here the properties of this.
>
> **[1:37](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=97)** You can see they're different from the Bitcoin blockchain.
>
> **[1:41](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=101)** And we support many blockchains. And not only we support the maintenance, but also their testnet.
>
> **[1:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=112)** So that's very useful because when you are doing experiments and you are making transactions and those kind of things, you don't want to use real money, so you can use the testnet or devnet like in the case of ARK.
>
> **[2:13](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=133)** So again these are the blockchain we support, these are the Bitcoin, Ethereum, the ARK networks, both their mainnet and testnets.
>
> **[2:22](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=142)** In the case of ARK, it's the devnet.
>
> **[2:24](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=144)** And we just introduced the bloxberg blockchain.
>
> **[2:29](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=149)** They only have a mainnet.
>
> **[2:31](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=151)** So that's the thing we support.
>
> **[2:35](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=155)** So when you want to specify the network, let's say ARK, you use this list as the syntax and you get the result here.
>
> **[2:48](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=168)** Also if you go to our documentation, you'll see the details here and examples on how to use this.
>
> **[3:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=180)** All right.
>
> **[3:01](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=181)** So the BlockchainData function returns, as I was saying, general information about the different blockchains.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), this. (2)
> **Env Vars:** ark (4)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)


### 2. Blockchain Block Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Blockchain block data
> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=0)** So let's explore the blocks.
>
> **[0:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=3)** So we have the BlockchainBlockData function.
>
> **[0:07](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=7)** The BlockchainBlockData function receives and a block height or a block hash and displays information about that specific block.
>
> **[0:19](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=19)** So in this case, we are using the default blockchain, which is the Bitcoin blockchain.
>
> **[0:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=30)** If you want to see the default blockchain, remember we had this BlockchainBase option.
>
> **[0:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=38)** So the BlockchainBase option takes as default the $BlockchainBase variable.
>
> **[0:45](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=45)** So the automatic, the automatic value is a Bitcoin blockchain, as you can see here.
>
> **[0:58](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=58)** So if I change this, let's say to Ethereum.
>
> **[1:04](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=64)** Now I don't have to use the BlockchainBase option anymore because it will default to Ethereum.
>
> **[1:12](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=72)** So in this case, this is or you can, maybe you can see it here, but let's see with BlockchainData.
>
> **[1:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=80)** We have the Ethereum blockchain here.
>
> **[1:23](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=83)** But let's keep talking about blocks.
>
> **[1:26](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=86)** So let me get that to the Bitcoin blockchain.
>
> **[1:31](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=91)** And as I was saying, the BlockchainBlockData receives a block height.
>
> **[1:37](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=97)** In this case, this is just some random Bitcoin block.
>
> **[1:41](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=101)** But I can also use the BlockHash.
>
> **[1:46](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=106)** So for example you see this BlockHash here. I'll use a different one.
>
> **[1:53](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=113)** And I get the result here.
>
> **[1:58](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=118)** I can also ask for not only one block, but a list of blocks.
>
> **[2:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=125)** So if I do BlockchainBlockData of list, and you can see that in this list, I have three different values.
>
> **[2:16](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=136)** So in this case, I have two heights and I have one hash.
>
> **[2:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=140)** And this should work just fine.
>
> **[2:23](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=143)** And I will get the results here, as you can see.
>
> **[2:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=148)** Another thing is that you can ask for specific properties about a block.
>
> **[2:37](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=157)** So we had these block 123 123.
>
> **[2:42](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=162)** And if I ask for this particular property, I get it here.
>
> **[2:49](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=169)** Our documentation is very important.
>
> **[2:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=172)** And when you are experimenting with this, because it's super helpful, because of the amount of examples we have here.
>
> **[3:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=183)** But one thing I want to note about this documentation is how to navigate it.
>
> **[3:09](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=189)** So I went from this function to its reference page.
>
> **[3:16](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=196)** But if you see here, there's a link to version for specific blockchains.
>
> **[3:22](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=202)** So if you click here, you get to this guide page where we have a list of all our functions.
>
> **[3:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=210)** But this section is very important because we have a guide page for each particular blockchain.
>
> **[3:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=218)** So if I click, for example, Bitcoin, I go to the Bitcoin guide page and
>
> **[3:47](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=227)** let's say BlockchainBlockData of ref page is just for Bitcoin.
>
> **[3:56](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=236)** Same thing if I go to, let's say, if I go to the ARK blockchain and I click the BlockchainBlockData function, you can see that this page is just for ARK.
>
> **[4:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=257)** So all the examples you will find here are for the blockchain specified here.
>
> **[4:24](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=264)** All right.
>
> **[4:26](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=266)** So the properties that each function supports are fully documented here.
>
> **[4:35](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=275)** So we are exploring the Bitcoin blockchain.
>
> **[4:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=278)** And you can see all the properties we support.
>
> **[4:42](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=282)** So in this case, I was asking for the TimeMined property.
>
> **[4:48](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=288)** And you can see the description here, the time this block was mined.
>
> **[4:54](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=294)** So we tried to return computable data.
>
> **[4:58](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=298)** So in this case, when I ask for the time mined, I got this date object and now I can operate with that, like I can do some computation, like in this case, for example, I can compute the number of days since this block was mined.
>
> **[5:19](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=319)** And I can also ask for a list of properties, not just one. If I enter here a list of properties, I'll get the result.
>
> **[5:32](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=332)** And what else can I do?
>
> **[5:34](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=334)** Like I can do something fun.
>
> **[5:37](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=337)** For example, if I do something like this.
>
> **[5:42](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=342)** I'm using the TransactionList property.
>
> **[5:46](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=346)** This is a list of transactions contained in this block.
>
> **[5:49](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=349)** And then doing some funny things with the characters.
>
> **[5:53](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=353)** With this, I'll produce a sound.
>
> **[6:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=365)** Let's try the Ethereum blockchain.
>
> **[6:13](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=373)** Oops.
>
> **[6:15](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=375)** Let's try with another block.
>
> **[6:19](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=379)** Maybe this one.
>
> **[6:21](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=381)** Yeah.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (7), function (5), this, (3), super (1)
> **Analogies:** for example (4)
> **UI Navigation:** go to (3)
> **Env Vars:** ark (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)


### 3. Blockchain Transaction Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Blockchain transaction data
> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=0)** Let's talk now about transactions.
>
> **[0:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=2)** So we have the BlockchainTransactionData function.
>
> **[0:08](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=8)** So BlockchainTransactionData uses transaction ID, usually a hash, to return information about that transaction.
>
> **[0:21](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=21)** So where can we find a transaction.
>
> **[0:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=27)** I can do something like BlockchainBlockData.
>
> **[0:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=30)** Let's, I don't know, let's use the last block.
>
> **[0:36](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=36)** So -1 means the last block.
>
> **[0:40](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=40)** And from here I'm going to ask for a transaction list and do a random choice because I only need one transaction.
>
> **[0:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=52)** Okay.
>
> **[0:53](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=53)** Let's try this.
>
> **[0:54](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=54)** All right.
>
> **[0:55](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=55)** So this is just one random transaction of the latest Bitcoin block.
>
> **[1:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=62)** So let's try this.
>
> **[1:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=65)** All right.
>
> **[1:07](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=67)** So again, I have information about this transaction. Once again, every blockchain is different.
>
> **[1:14](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=74)** You can go to, for example, let's go to the Ethereum blockchain and then BlockchainTransactionData.
>
> **[1:21](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=81)** You see here this is for Ethereum.
>
> **[1:25](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=85)** And you can see the different properties you can get from this function, which are different from the Bitcoin properties or the ARK properties.
>
> **[1:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=98)** All right.
>
> **[1:39](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=99)** So as I was saying before, in the BlockchainBlockData function, we try to return a lot of computable data.
>
> **[1:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=112)** So let's say I do something like.
>
> **[1:57](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=117)** Let's ask for the total output.
>
> **[2:04](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=124)** That's the amount of Bitcoins in the outputs here.
>
> **[2:09](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=129)** And I have here a quantity that has units.
>
> **[2:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=137)** It has Bitcoins as units.
>
> **[2:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=140)** So actually, if you see this, you see the actual structure of this expression.
>
> **[2:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=148)** Right.
>
> **[2:29](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=149)** So what can I do with this?
>
> **[2:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=150)** I can do something like, let's say, CurrencyConvert this amount to, say, USDollars.
>
> **[2:43](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=163)** And I'll get the, I'll get the value using the current Bitcoin price.
>
> **[2:50](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=170)** I can try with more exotic currency.
>
> **[2:54](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=174)** Let's try something like PeruvianSoles.
>
> **[3:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=180)** Yeah, and I get the result here. Again, just as we did with the other functions, I can ask for multiple properties.
>
> **[3:14](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=194)** So let's try, in this case, with the ARK blockchain.
>
> **[3:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=197)** This is just one transaction.
>
> **[3:19](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=199)** And I get here also some computed properties.
>
> **[3:25](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=205)** And I ask for three of them and I have three results here.
>
> **[3:31](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=211)** All right.
>
> **[3:33](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=213)** So we reviewed the general information about the blockchains, the blocks, and the transactions.
>
> **[3:40](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=220)** So what else can we...

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), function (3), this. (2), this, (1), try, (1)
> **Env Vars:** ark (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)


### 4. Blockchain Address Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Blockchain address data
> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=2)** We can extract data about addresses.
>
> **[0:06](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=6)** So the addresses are handled differently in each blockchain.
>
> **[0:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=11)** But we try to have a consistent design for this to work with everything.
>
> **[0:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=17)** So where can we get an address?
>
> **[0:23](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=23)** So let's say, let's use a BlockchainTransactionData.
>
> **[0:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=27)** I have a hash here.
>
> **[0:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=30)** So this is from the Ethereum blockchain.
>
> **[0:36](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=36)** So if you see this here, you see a lot of properties, and you see that this transaction has a sender and a receiver.
>
> **[0:49](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=49)** So let's ask for these two properties and let me remove this.
>
> **[1:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=60)** All right. So let's pick one of these.
>
> **[1:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=65)** Let's say the address will be the first.
>
> **[1:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=71)** All right.
>
> **[1:13](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=73)** Now we can use BlockchainAddressData.
>
> **[1:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=77)** And for now, I'll stick to Ethereum blockchain.
>
> **[1:21](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=81)** So I'll set the $BlockchainBase variable to Ethereum so I don't have to write BlockchainBase goes to Ethereum every time.
>
> **[1:32](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=92)** All right.
>
> **[1:33](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=93)** So let's try with this address.
>
> **[1:37](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=97)** And what I get here is a summary of this address.
>
> **[1:46](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=106)** So I get the balance, I get the type.
>
> **[1:49](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=109)** In this case, it's an Ethereum address. A Bitcoin address is a bit different.
>
> **[1:54](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=114)** Once again, you can go to the documentation, go to the specific Bitcoin section, go to BlockchainAddressData and you will see here all the different properties and examples of the function working with Bitcoin.
>
> **[2:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=137)** All right.
>
> **[2:18](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=138)** So let's try with the other address.
>
> **[2:25](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=145)** So this one.
>
> **[2:32](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=152)** So we see here that... Oops, come on.
>
> **[2:39](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=159)** All right.
>
> **[2:40](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=160)** So we see here that it's a little bit different.
>
> **[2:43](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=163)** In this case, we had an address of type externally owned account which is basically just a regular address.
>
> **[2:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=172)** And in this case, this is a contract address.
>
> **[2:56](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=176)** So you have more properties here, as you can see.
>
> **[3:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=182)** Again, many of these are computed properties that you can use to do other types of computations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (3), this. (1), type. (1), function (1)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (3)
> **Documentation:** the documentation (1)


### 5. Blockchain Token Data

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Blockchain token data
> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=0)** All right.
>
> **[0:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=0)** So since we are working with Ethereum blockchain, let's try one function that currently just works with the Ethereum-type blockchains.
>
> **[0:15](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=15)** In this case, we support only two blockchains based on Ethereum.
>
> **[0:21](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=21)** So the Ethereum blockchain itself and the bloxberg blockchain.
>
> **[0:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=27)** All right.
>
> **[0:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=28)** So with the BlockchainTokenData, you get information about tokens and like why we don't support Bitcoin here, because Bitcoin doesn't support tokens.
>
> **[0:46](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=46)** So currently we only have, in the blockchains, the only ones that support tokens are the Ethereum-based blockchains.
>
> **[0:56](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=56)** All right.
>
> **[0:56](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=56)** So let's try something like, I don't know, the Tronix token.
>
> **[1:06](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=66)** And as you can see here, you get a lot of properties from this token.
>
> **[1:14](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=74)** And we not only support the ERC20 tokens, we also support ERC721.
>
> **[1:24](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=84)** So let's see the CryptoKitties token.
>
> **[1:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=87)** And there are many ways on how to call a token.
>
> **[1:35](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=95)** So in this case, I'm using the symbol that I could do something like CryptoKitties and this should work just fine.
>
> **[1:49](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=109)** I get the same result here.
>
> **[1:51](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=111)** And the BlockchainTokenData is a very complete function.
>
> **[1:58](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=118)** You can use different filters and different ways to get information.
>
> **[2:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=125)** So for example, in this case, I'm listing all the ERC20 tokens.
>
> **[2:13](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=133)** And I have a huge list here of all the tokens.
>
> **[2:19](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=139)** Let's try something like, just for you to see that we support other Ethereum-based blockchains.
>
> **[2:29](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=149)** So if I try this with the bloxberg blockchain, you see that that blockchain has its own type of tokens.
>
> **[2:43](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=163)** And, actually, let's see what happens if I do 721.
>
> **[2:48](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=168)** Well, they have at least one token here.
>
> **[2:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=172)** All right.
>
> **[2:53](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=173)** So what I suggest is that you go to the documentation, go to the Ethereum section and look for BlockchainTokenData.
>
> **[3:10](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=190)** And we have examples of all the different ways you can use this functionality.
>
> **[3:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=200)** Like if you go down here to scope, you'll see all the properties are listed and they have examples for all of these.
>
> **[3:39](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=219)** So yeah, you can not only represent a token by its symbol or its name, you can also have, as documented here.
>
> **[3:57](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=237)** You can have an association with all these elements there to specify a token and to filter the results.
>
> **[4:07](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=247)** So for example, I can do something like...
>
> **[4:16](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=256)** I can do something like this.
>
> **[4:18](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=258)** So in this case, I'm using the Tronix token, but I'm filtering the results by a time interval.
>
> **[4:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=267)** So I'm just using this.
>
> **[4:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=270)** I'm using these two date objects to filter the results I'm asking about the Tronix token.
>
> **[4:45](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=285)** I can do also stuff like, let's say, if I define something like this.
>
> **[4:55](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=295)** So this is going to ask for all the tokens.
>
> **[4:59](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=299)** See that I'm using an association and the name goes to all, but I'm asking just for two properties; the name and the transfers count, which for now, this is just a simple example.
>
> **[5:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=311)** And I'm using the TransfersCount property as a way to measure the popularity of the token.
>
> **[5:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=320)** So if I create a workload out of this result, that should show me the tokens based on the transfers count.
>
> **[5:33](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=333)** Right.
>
> **[5:33](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=333)** So I have like this Tether and CryptoKitties and you can see here different tokens and their popularity based on this property.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (4), this. (3), function (2)
> **Env Vars:** erc20 (2), erc721 (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)


### 6. Blockchain Contract Value

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Blockchain contract value
> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=1)** Another function that works just for Ethereum, well, Ethereum-based blockchains.
>
> **[0:12](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=12)** It's the BlockchainContractValue function.
>
> **[0:18](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=18)** So with this function you can call a specific function in a smart contract deployed to the Ethereum blockchain.
>
> **[0:31](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=31)** So in this case, I have this contract here.
>
> **[0:35](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=35)** And if you have seen the contract, if you have the code, you have seen that in Explorer, and you know the functions this contract has, like in this case,
>
> **[0:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=52)** I'm going to use this address for the contract and I already know that this contract has a function called name that is of a string type.
>
> **[1:08](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=68)** And if I run this function, what I'm doing is, calling that smart contract's function and returning its results.
>
> **[1:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=77)** In this case, the contract which I only knew by its address, I now know that the name is Tronix because I'm calling this function that returns a name and I can do something like symbol.
>
> **[1:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=98)** And this returns also its symbol provided by the smart contract.
>
> **[1:45](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=105)** Again, this is fully documented.
>
> **[1:48](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=108)** So I encourage you to check the documentation.
>
> **[1:51](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=111)** All right.
>
> **[1:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=112)** So we've seen here many functions to read from the blockchains and to do other computations based on the results.
>
> **[2:06](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=126)** So let's see now how you can write to a blockchain.
>
> **[2:14](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=134)** So basically what you need is a BlockchainTransaction function.
>
> **[2:22](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=142)** And again the documentation is super useful here.
>
> **[2:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=147)** Because we have examples for every type of transaction.
>
> **[2:34](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=154)** And you can see here for Bitcoin and for Ethereum and for ARK.
>
> **[2:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=158)** Again, this is just a general blockchain transaction page.
>
> **[2:44](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=164)** You can go to, let's say, the ARK blockchain, and you go to BlockchainTransaction.
>
> **[2:50](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=170)** And you see here all the different types of transactions supported by the Wolfram Language.
>
> **[2:59](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=179)** So in this case, I'm going to use the ARK blockchain because it's very fast, and I have a desktop wallet here.
>
> **[3:09](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=189)** And I can show you how I interact with it.
>
> **[3:13](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=193)** So before this, one of the, what I usually do when I want to interact with blockchains like writing to the blockchains, I usually
>
> **[3:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=208)** create an address and I send some money there.
>
> **[3:34](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=214)** So what you need for that is a pair of private and public keys.
>
> **[3:42](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=222)** So we have the GenerateAsymmetricKeyPair function, it's one of the many cryptographic functions we have.
>
> **[3:48](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=228)** We have a short form to use as an input to generate the keys that use elliptic curve appropriate for this blockchain.
>
> **[4:04](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=244)** So I can... This also works if I do something like Bitcoin.
>
> **[4:10](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=250)** Well, they use the same curve.
>
> **[4:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=251)** There may be some small details like if it's compressed or not, but you have more things to read here in documentation, and different ways to use this function.
>
> **[4:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=268)** But for our purposes, I'm just going to create these keys here.
>
> **[4:34](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=274)** And for this, there's an auxiliary function called BlockchainKeyEncode that receives, in this case, what I want is a public key.
>
> **[4:47](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=287)** And I want to encode this public key as an address.
>
> **[4:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=292)** And I'm going to use the ARK Devnet.
>
> **[4:59](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=299)** Oops.
>
> **[5:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=303)** What is wrong here?
>
> **[5:09](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=309)** Oh, okay.
>
> **[5:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=311)** All right.
>
> **[5:12](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=312)** So you can see the others I generated here.
>
> **[5:15](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=315)** I could do something like Bitcoin and I'll get the appropriate form of the address here.
>
> **[5:29](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=329)** All right.
>
> **[5:29](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=329)** So we are working with the ARK Devnet.
>
> **[5:33](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=333)** And I actually already have an address I'm going to use.
>
> **[5:36](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=336)** But I wanted to show you how you can use this.
>
> **[5:40](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=340)** And another thing that is very useful is, if you want to share this, what I usually do is do something like this.
>
> **[5:54](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=354)** So I can scan this from my cell phone and send some money to this address.
>
> **[6:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=363)** So I already have an address where I sent money before and we can check the balance of this.
>
> **[6:18](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=378)** I'm going to set the BlockchainBase to ARK Devnet.
>
> **[6:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=387)** And we can see the balance here.
>
> **[6:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=390)** All right. So I have some money here, and I have, also have my private and public key that I will need later.
>
> **[6:41](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=401)** So as I was saying before, it's super useful to just use the documentation as a sort of a template when you want to make a transaction, it's what I usually do like in this case, I'm just going to create a very simple transaction.
>
> **[7:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=423)** So I just go here, copy and paste the code and I just have to verify they are ARK Devnet That's fine.
>
> **[7:16](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=436)** And I also need the recipient for this.
>
> **[7:22](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=442)** So I have our desktop wallet here.
>
> **[7:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=447)** And if I copy this address here.
>
> **[7:35](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=455)** Oops.
>
> **[7:36](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=456)** What happened?
>
> **[7:40](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=460)** All right.
>
> **[7:44](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=464)** Okay.
>
> **[7:45](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=465)** So I'm going to send this amount.
>
> **[7:50](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=470)** So see, these are DARKtoshis, and I'm going to send this amount to my address.
>
> **[7:58](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=478)** So when I run this, what I get is just a symbolic representation of the transaction.
>
> **[8:07](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=487)** Nothing happened in the blockchain.
>
> **[8:10](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=490)** This is just in your machine.
>
> **[8:13](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=493)** And now I have to sign the transaction.
>
> **[8:17](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=497)** So I do BlockchainTransactionSign and I can use a variable, or I can even use this object here.
>
> **[8:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=510)** And I already have a pair of private and public keys that created this address here. And I can show you that I have my private key here that I'm going to use to sign this transaction.
>
> **[8:51](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=531)** So let's call this txSigned.
>
> **[8:56](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=536)** And you can see that the transaction has been signed.
>
> **[9:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=540)** This property is now true.
>
> **[9:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=542)** And just to show you that my public key is the one that creates this address, I can do something like BlockchainKeyEncode of this public key.
>
> **[9:23](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=563)** Yeah, and I get the same addresses here.
>
> **[9:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=568)** All right.
>
> **[9:30](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=570)** So once that transaction has been signed, it's this thing here.
>
> **[9:36](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=576)** I just need to do BlockchainTransactionSubmit.
>
> **[9:41](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=581)** And this is a function that actually sends that transaction to the blockchain.
>
> **[9:51](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=591)** So let's call this txSubmitted.
>
> **[9:56](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=596)** And I can ask, let's say, for the TransactionID.
>
> **[10:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=605)** And let's see if this transaction has been mined.
>
> **[10:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=611)** Remember... Well, we have to wait maybe some seconds.
>
> **[10:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=620)** Remember, I'm not using the BlockchainBase option anymore, because I already have this set to blockchain, to the ARK Devnet blockchain.
>
> **[10:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=638)** All right.
>
> **[10:39](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=639)** It's been mined.
>
> **[10:41](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=641)** And if I go to my wallet here.
>
> **[10:45](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=645)** Let's refresh.
>
> **[10:47](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=647)** Yeah.
>
> **[10:48](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=648)** And the transaction is here.
>
> **[10:50](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=650)** So you can see transaction ID.
>
> **[10:54](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=654)** It's 40... something, ends with a 4 and it's this one.
>
> **[11:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=662)** If I click this, I even get to the web-based explorer where I can see basically the same information I have in BlockchainTransactionData.
>
> **[11:16](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=676)** So yeah, the transaction is now in the blockchain.
>
> **[11:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=680)** And that was super easy.
>
> **[11:22](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=682)** So to write to the blockchain, once again, you basically just create the transaction, you have to sign it, and you have to submit it.
>
> **[11:32](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=692)** And you will see all that documented in our reference pages.
>
> **[11:44](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=704)** All right.
>
> **[11:45](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=705)** So we have seen how to read, how to write.
>
> **[11:49](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=709)** And again, let me remind you that we are supporting currently these blockchains and we plan to add more, and we plan to add more functionalities.
>
> **[12:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=723)** But for now, this is it.
>
> **[12:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=725)** And I hope you enjoyed this presentation.
>
> **[12:11](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=731)** And if you have any questions, you have any comments, you can use our Wolfram Community and we'll try to answer as many questions you have there.
>
> **[12:20](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=740)** Thank you very much.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), let (8), public (7), case, (6), this, (5)
> **Env Vars:** ark (8)
> **Definitions:** is a  (4)
> **UI Navigation:** go to (3)
> **Code Identifiers:** txsigned (1), txsubmitted (1)
> **Documentation:** the documentation (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)


## Instructor

- [[Wolfram Research]]

## Skills Covered

- Wolfram Language
- Blockchain Analysis

## Path Context

### In [[Build Your Wolfram Language Skills]]
← [[Modeling Market Prices Using Stochastic Processes with Wolfram Language]] | **6 of 8** | [[Built-in Machine Learning in the Wolfram Language]] →

## Appears In

- [[Build Your Wolfram Language Skills]]

## Related Courses

_Courses sharing skills:_

- [[Building Blocks for Deep Learning in the Wolfram Language]] — Wolfram Language
- [[Built-in Machine Learning in the Wolfram Language]] — Wolfram Language
- [[Modeling Market Prices Using Stochastic Processes with Wolfram Language]] — Wolfram Language
- [[Wavelet Analysis- Applications with Wolfram Language]] — Wolfram Language
- [[Wavelet Analysis- Concepts with Wolfram Language]] — Wolfram Language

---

[↑ Back to top](#)