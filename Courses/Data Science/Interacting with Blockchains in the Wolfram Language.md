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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Interacting%20with%20Blockchains%20in%20the%20Wolfram%20Language.md)

![Interacting with Blockchains in the Wolfram Language](https://media.licdn.com/dms/image/v2/D560DAQEERoS4MfXsLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704327196182?e=2147483647&amp;v=beta&amp;t=4KQoCh1u79YfCB85rWRpnk6jGoj9ktRYSu5yc7ioyRk)

# Interacting with Blockchains in the Wolfram Language

> This course showcases features and functions available in Wolfram Language for reading and writing data to blockchains. Examples demonstrate transactions from a real crypto wallet as well as a wide variety of external services and APIs working in tandem with Wolfram technology. Check out this course to learn how to connect to a blockchain and access information about its properties, get informatio

> [LinkedIn Learning](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language) | 34m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Blockchain Data**](#1-blockchain-data) (1 videos)
  - [Blockchain data](#blockchain-data)
- [**2. Blockchain Block Data**](#2-blockchain-block-data) (1 videos)
  - [Blockchain block data](#blockchain-block-data)
- [**3. Blockchain Transaction Data**](#3-blockchain-transaction-data) (1 videos)
  - [Blockchain transaction data](#blockchain-transaction-data)
- [**4. Blockchain Address Data**](#4-blockchain-address-data) (1 videos)
  - [Blockchain address data](#blockchain-address-data)
- [**5. Blockchain Token Data**](#5-blockchain-token-data) (1 videos)
  - [Blockchain token data](#blockchain-token-data)
- [**6. Blockchain Contract Value**](#6-blockchain-contract-value) (1 videos)
  - [Blockchain contract value](#blockchain-contract-value)

### 1. Blockchain Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain data](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=2)** Thank you for joining us today. My name is Christian and I'm going to show you how to interact with different blockchains using the [[Wolfram Language]]. All right. So with the Wolfram Language, you can read and you can write the [[Blockchain]]. So let me start with the read-only operations to you explain the different things you can do with it. All right. So let's start with BlockchainData. So BlockchainData is the most simple function we have to explore a blockchain. Most of these functions return an association. As you can see here. So when you want to See, it's usually useful to show this as a dataset. All right. So for example, in this case we have the Bitcoin blockchain. And here you can see some other properties about this blockchain. So it's a good opportunity to show the BlockchainBase option. So with the BlockchainBase option, you can specify which blockchain you want to connect with. So let's say if we choose the [[Ethereum]] blockchain. You'll see here the properties of this.
>
> **[1:37](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=97)** You can see they're different from the Bitcoin blockchain. And we support many blockchains. And not only we support the maintenance, but also their testnet. So that's very useful because when you are doing experiments and you are making transactions and those kind of things, you don't want to use real money, so you can use the testnet or devnet like in the case of ARK. So again these are the blockchain we support, these are the Bitcoin, Ethereum, the ARK networks, both their mainnet and testnets. In the case of ARK, it's the devnet. And we just introduced the bloxberg blockchain. They only have a mainnet. So that's the thing we support. So when you want to specify the network, let's say ARK, you use this list as the syntax and you get the result here. Also if you go to our documentation, you'll see the details here and examples on how to use this.
>
> **[3:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-data?u=76281980&t=180)** All right. So the BlockchainData function returns, as I was saying, general information about the different blockchains.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (9), [[Wolfram Language]] (2), [[Ethereum]] (2)
> **Env Vars:** ark (4)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)


### 2. Blockchain Block Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain block data](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=0)** So let's explore the blocks. So we have the BlockchainBlockData function. The BlockchainBlockData function receives and a block height or a block hash and displays information about that specific block. So in this case, we are using the default [[Blockchain]], which is the Bitcoin blockchain. If you want to see the default blockchain, remember we had this BlockchainBase option. So the BlockchainBase option takes as default the $BlockchainBase variable. So the automatic, the automatic value is a Bitcoin blockchain, as you can see here. So if I change this, let's say to [[Ethereum]]. Now I don't have to use the BlockchainBase option anymore because it will default to Ethereum. So in this case, this is or you can, maybe you can see it here, but let's see with BlockchainData. We have the Ethereum blockchain here. But let's keep talking about blocks. So let me get that to the Bitcoin blockchain. And as I was saying, the BlockchainBlockData receives
>
> **[1:36](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=96)** a block height. In this case, this is just some random Bitcoin block. But I can also use the BlockHash. So for example you see this BlockHash here. I'll use a different one. And I get the result here. I can also ask for not only one block, but a list of blocks. So if I do BlockchainBlockData of list, and you can see that in this list, I have three different values. So in this case, I have two heights and I have one hash. And this should work just fine. And I will get the results here, as you can see. Another thing is that you can ask for specific properties about a block. So we had these block 123 123. And if I ask for this particular property, I get it here. Our documentation is very important. And when you are experimenting with this, because it's super helpful, because of the amount of examples we have here. But one thing I want to note about this documentation is how to navigate it.
>
> **[3:09](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=189)** So I went from this function to its reference page. But if you see here, there's a link to version for specific blockchains. So if you click here, you get to this guide page where we have a list of all our functions. But this section is very important because we have a guide page for each particular blockchain. So if I click, for example, Bitcoin, I go to the Bitcoin guide page and
>
> **[3:47](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=227)** let's say BlockchainBlockData of ref page is just for Bitcoin.
>
> **[3:56](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=236)** Same thing if I go to, let's say, if I go to the ARK blockchain and I click the BlockchainBlockData function, you can see that this page is just for ARK. So all the examples you will find here are for the blockchain specified here. All right. So the properties that each function supports are fully documented here. So we are exploring the Bitcoin blockchain. And you can see all the properties we support. So in this case, I was asking for the TimeMined property. And you can see the description here, the time this block was mined. So we tried to return computable data. So in this case, when I ask for the time mined, I got this date object and now I can operate with that, like I can do some computation, like in this case, for example, I can compute the number of days since this block was mined. And I can also ask for a list of properties, not just one. If I enter here a list of properties, I'll get the result.
>
> **[5:32](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=332)** And what else can I do? Like I can do something fun. For example, if I do something like this. I'm using the TransactionList property. This is a list of transactions contained in this block. And then doing some funny things with the characters. With this, I'll produce a sound.
>
> **[6:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-block-data?u=76281980&t=365)** Let's try the Ethereum blockchain. Oops. Let's try with another block. Maybe this one. Yeah.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (11), [[Ethereum]] (4)
> **Analogies:** for example (4)
> **UI Navigation:** go to (3)
> **Env Vars:** ark (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)


### 3. Blockchain Transaction Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain transaction data](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=0)** Let's talk now about transactions. So we have the BlockchainTransactionData function. So BlockchainTransactionData uses transaction ID, usually a hash, to return information about that transaction. So where can we find a transaction. I can do something like BlockchainBlockData. Let's, I don't know, let's use the last block. So -1 means the last block. And from here I'm going to ask for a transaction list and do a random choice because I only need one transaction. Okay. Let's try this. All right. So this is just one random transaction of the latest Bitcoin block. So let's try this. All right. So again, I have information about this transaction. Once again, every [[Blockchain]] is different. You can go to, for example, let's go to the [[Ethereum]] blockchain and then BlockchainTransactionData. You see here this is for Ethereum. And you can see the different properties you can get from this function, which are different from the Bitcoin properties or the ARK properties.
>
> **[1:38](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=98)** All right. So as I was saying before, in the BlockchainBlockData function, we try to return a lot of computable data. So let's say I do something like. Let's ask for the total output. That's the amount of Bitcoins in the outputs here. And I have here a quantity that has units. It has Bitcoins as units. So actually, if you see this, you see the actual structure of this expression. Right. So what can I do with this? I can do something like, let's say, CurrencyConvert this amount to, say, USDollars. And I'll get the, I'll get the value using the current Bitcoin price. I can try with more exotic currency. Let's try something like PeruvianSoles. Yeah, and I get the result here. Again, just as we did with the other functions, I can ask for multiple properties.
>
> **[3:14](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-transaction-data?u=76281980&t=194)** So let's try, in this case, with the ARK blockchain. This is just one transaction. And I get here also some computed properties. And I ask for three of them and I have three results here. All right. So we reviewed the general information about the blockchains, the blocks, and the transactions. So what else can we...

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (3), [[Ethereum]] (2)
> **Env Vars:** ark (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)


### 4. Blockchain Address Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain address data](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=2)** We can extract data about addresses. So the addresses are handled differently in each [[Blockchain]]. But we try to have a consistent design for this to work with everything. So where can we get an address? So let's say, let's use a BlockchainTransactionData. I have a hash here. So this is from the [[Ethereum]] blockchain. So if you see this here, you see a lot of properties, and you see that this transaction has a sender and a receiver. So let's ask for these two properties and let me remove this. All right. So let's pick one of these. Let's say the address will be the first. All right. Now we can use BlockchainAddressData. And for now, I'll stick to Ethereum blockchain. So I'll set the $BlockchainBase variable to Ethereum so I don't have to write BlockchainBase goes to Ethereum every time. All right. So let's try with this address.
>
> **[1:37](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blackchain-address-data?u=76281980&t=97)** And what I get here is a summary of this address. So I get the balance, I get the type. In this case, it's an Ethereum address. A Bitcoin address is a bit different. Once again, you can go to the documentation, go to the specific Bitcoin section, go to BlockchainAddressData and you will see here all the different properties and examples of the function working with Bitcoin. All right. So let's try with the other address. So this one. So we see here that... Oops, come on. All right. So we see here that it's a little bit different. In this case, we had an address of type externally owned account which is basically just a regular address. And in this case, this is a contract address. So you have more properties here, as you can see. Again, many of these are computed properties that you can use to do other types of computations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (5), [[Blockchain]] (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (3)
> **Documentation:** the documentation (1)


### 5. Blockchain Token Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain token data](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=0)** All right. So since we are working with [[Ethereum]] [[Blockchain]], let's try one function that currently just works with the Ethereum-type blockchains. In this case, we support only two blockchains based on Ethereum. So the Ethereum blockchain itself and the bloxberg blockchain. All right. So with the BlockchainTokenData, you get information about [[Tokens]] and like why we don't support Bitcoin here, because Bitcoin doesn't support tokens. So currently we only have, in the blockchains, the only ones that support tokens are the Ethereum-based blockchains. All right. So let's try something like, I don't know, the Tronix token.
>
> **[1:06](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=66)** And as you can see here, you get a lot of properties from this token. And we not only support the ERC20 tokens, we also support ERC721. So let's see the CryptoKitties token. And there are many ways on how to call a token. So in this case, I'm using the symbol that I could do something like CryptoKitties and this should work just fine. I get the same result here. And the BlockchainTokenData is a very complete function. You can use different filters and different ways to get information. So for example, in this case, I'm listing all the ERC20 tokens. And I have a huge list here of all the tokens. Let's try something like, just for you to see that we support other Ethereum-based blockchains. So if I try this with the bloxberg blockchain, you see that that blockchain has its own type of tokens.
>
> **[2:43](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=163)** And, actually, let's see what happens if I do 721. Well, they have at least one token here. All right. So what I suggest is that you go to the documentation, go to the Ethereum section and look for BlockchainTokenData. And we have examples of all the different ways you can use this functionality. Like if you go down here to scope, you'll see all the properties are listed and they have examples for all of these. So yeah, you can not only represent a token by its symbol or its name, you can also have, as documented here. You can have an association with all these elements there to specify a token and to filter the results. So for example, I can do something like...
>
> **[4:16](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=256)** I can do something like this. So in this case, I'm using the Tronix token, but I'm filtering the results by a time interval. So I'm just using this. I'm using these two date objects to filter the results I'm asking about the Tronix token. I can do also stuff like, let's say, if I define something like this. So this is going to ask for all the tokens. See that I'm using an association and the name goes to all, but I'm asking just for two properties; the name and the transfers count, which for now, this is just a simple example. And I'm using the TransfersCount property as a way to measure the popularity of the token. So if I create a workload out of this result, that should show me the tokens based on the transfers count.
>
> **[5:33](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-token-data?u=76281980&t=333)** Right. So I have like this Tether and CryptoKitties and you can see here different tokens and their popularity based on this property.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (10), [[Ethereum]] (7), [[Blockchain]] (5)
> **Env Vars:** erc20 (2), erc721 (1)
> **UI Navigation:** go to (2)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)


### 6. Blockchain Contract Value

[↑ Back to Table of Contents](#table-of-contents)

#### [Blockchain contract value](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=1)** Another function that works just for [[Ethereum]], well, Ethereum-based blockchains. It's the BlockchainContractValue function. So with this function you can call a specific function in a smart contract deployed to the Ethereum [[Blockchain]]. So in this case, I have this contract here. And if you have seen the contract, if you have the code, you have seen that in Explorer, and you know the functions this contract has, like in this case,
>
> **[0:52](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=52)** I'm going to use this address for the contract and I already know that this contract has a function called name that is of a string type. And if I run this function, what I'm doing is, calling that smart contract's function and returning its results. In this case, the contract which I only knew by its address, I now know that the name is Tronix because I'm calling this function that returns a name and I can do something like symbol. And this returns also its symbol provided by the smart contract. Again, this is fully documented. So I encourage you to check the documentation. All right. So we've seen here many functions to read from the blockchains and to do other computations based on the results. So let's see now how you can write to a blockchain. So basically what you need is a BlockchainTransaction function. And again the documentation is super useful here.
>
> **[2:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=147)** Because we have examples for every type of transaction. And you can see here for Bitcoin and for Ethereum and for ARK. Again, this is just a general blockchain transaction page. You can go to, let's say, the ARK blockchain, and you go to BlockchainTransaction. And you see here all the different types of transactions supported by the [[Wolfram Language]]. So in this case, I'm going to use the ARK blockchain because it's very fast, and I have a desktop wallet here. And I can show you how I interact with it. So before this, one of the, what I usually do when I want to interact with blockchains like writing to the blockchains, I usually
>
> **[3:28](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=208)** create an address and I send some money there. So what you need for that is a pair of private and public keys. So we have the GenerateAsymmetricKeyPair function, it's one of the many cryptographic functions we have. We have a short form to use as an input to generate the keys that use elliptic curve appropriate for this blockchain. So I can... This also works if I do something like Bitcoin. Well, they use the same curve. There may be some small details like if it's compressed or not, but you have more things to read here in documentation, and different ways to use this function. But for our purposes, I'm just going to create these keys here. And for this, there's an auxiliary function called BlockchainKeyEncode that receives, in this case, what I want is a public key. And I want to encode this public key as an address. And I'm going to use the ARK Devnet. Oops.
>
> **[5:03](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=303)** What is wrong here? Oh, okay. All right. So you can see the others I generated here. I could do something like Bitcoin and I'll get the appropriate form of the address here. All right. So we are working with the ARK Devnet. And I actually already have an address I'm going to use. But I wanted to show you how you can use this. And another thing that is very useful is, if you want to share this, what I usually do is do something like this. So I can scan this from my cell phone and send some money to this address. So I already have an address where I sent money before and we can check the balance of this. I'm going to set the BlockchainBase to ARK Devnet.
>
> **[6:27](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=387)** And we can see the balance here. All right. So I have some money here, and I have, also have my private and public key that I will need later. So as I was saying before, it's super useful to just use the documentation as a sort of a template when you want to make a transaction, it's what I usually do like in this case, I'm just going to create a very simple transaction. So I just go here, copy and paste the code and I just have to verify they are ARK Devnet That's fine. And I also need the recipient for this. So I have our desktop wallet here. And if I copy this address here. Oops. What happened? All right. Okay. So I'm going to send this amount. So see, these are DARKtoshis, and I'm going to send this amount to my address. So when I run this, what I get is just a symbolic
>
> **[8:04](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=484)** representation of the transaction. Nothing happened in the blockchain. This is just in your machine. And now I have to sign the transaction. So I do BlockchainTransactionSign and I can use a variable, or I can even use this object here. And I already have a pair of private and public keys that created this address here. And I can show you that I have my private key here that I'm going to use to sign this transaction. So let's call this txSigned. And you can see that the transaction has been signed. This property is now true. And just to show you that my public key is the one that creates this address, I can do something like BlockchainKeyEncode of this public key. Yeah, and I get the same addresses here. All right. So once that transaction has been signed, it's this thing here.
>
> **[9:36](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=576)** I just need to do BlockchainTransactionSubmit. And this is a function that actually sends that transaction to the blockchain. So let's call this txSubmitted. And I can ask, let's say, for the TransactionID.
>
> **[10:05](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=605)** And let's see if this transaction has been mined. Remember... Well, we have to wait maybe some seconds. Remember, I'm not using the BlockchainBase option anymore, because I already have this set to blockchain, to the ARK Devnet blockchain. All right. It's been mined. And if I go to my wallet here. Let's refresh. Yeah. And the transaction is here. So you can see transaction ID. It's 40... something, ends with a 4 and it's this one. If I click this, I even get to the web-based explorer where I can see basically the same information I have in BlockchainTransactionData. So yeah, the transaction is now in the blockchain. And that was super easy. So to write to the blockchain, once again, you basically just create the transaction, you have to sign it, and you have to submit it. And you will see all that documented in our reference pages.
>
> **[11:44](https://www.linkedin.com/learning/interacting-with-blockchains-in-the-wolfram-language/blockchain-contract-value?u=76281980&t=704)** All right. So we have seen how to read, how to write. And again, let me remind you that we are supporting currently these blockchains and we plan to add more, and we plan to add more functionalities. But for now, this is it. And I hope you enjoyed this presentation. And if you have any questions, you have any comments, you can use our Wolfram Community and we'll try to answer as many questions you have there. Thank you very much.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (12), [[Ethereum]] (4), [[Wolfram Language]] (1)
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