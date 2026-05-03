---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp"
duration_minutes: 111
duration: 1h 51m
level: Intermediate
updated: 8/12/2021
skills:
  - Smart Contracts
  - Blockchain
  - Ethereum
  - Decentralized Applications (DApps)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQE34s60FsVeqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628618716507?e=2147483647&amp;v=beta&amp;t=ObzevZXavx_3f3MTXDIh5ip-Y8IMuGeOZZUqJNVwf5s"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 7 Smart Contracts]]'
  - '[[Building an Ethereum Blockchain App- 7 Smart Contracts]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]]'
  - '[[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":8,"total":11,"prev":"Building an Ethereum Blockchain App- 7 Smart Contracts","next":"Building an Ethereum Blockchain App- 9 Testing Ethereum Apps"},{"path":"Become a Blockchain Developer","position":8,"total":14,"prev":"Building an Ethereum Blockchain App- 7 Smart Contracts","next":"Building an Ethereum Blockchain App- 9 Testing Ethereum Apps"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/smart-contracts
  - skill/blockchain
  - skill/ethereum
  - skill/decentralized-applications-dapps
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%208%20Supply%20Chain%20Smart%20Contract%20dApp.md)

![Building an Ethereum Blockchain App: 8 Supply Chain Smart Contract dApp](https://media.licdn.com/dms/image/v2/C560DAQE34s60FsVeqg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628618716507?e=2147483647&amp;v=beta&amp;t=ObzevZXavx_3f3MTXDIh5ip-Y8IMuGeOZZUqJNVwf5s)

# Building an Ethereum Blockchain App: 8 Supply Chain Smart Contract dApp

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, eighth in a series of eleven, steps through using the smart contract code you write to create a decentralized application (dApp). This dApp uses supply chain functions. Instructor Michael Solomon explains what dApps are,

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp) | 1h 51m | Intermediate
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Your Supply Chain Smart Contract dApp**](#1-your-supply-chain-smart-contract-dapp) (18 videos)
  - [Designing your supply chain app](#designing-your-supply-chain-app)
  - [What are dApps?](#what-are-dapps)
  - [Token smart contract details](#token-smart-contract-details)
  - [Supply chain smart contract details](#supply-chain-smart-contract-details)
  - [Smart contract road map](#smart-contract-road-map)
  - [Token smart contract data, part 1](#token-smart-contract-data-part-1)
  - [Token smart contract data, part 2](#token-smart-contract-data-part-2)
  - [Supply chain smart contract data, part 1](#supply-chain-smart-contract-data-part-1)
  - [Supply chain smart contract data, part 2](#supply-chain-smart-contract-data-part-2)
  - [Token smart contract functions, part 1](#token-smart-contract-functions-part-1)
  - [Token smart contract functions, part 2](#token-smart-contract-functions-part-2)
  - [Supply chain smart contract functions, part 1](#supply-chain-smart-contract-functions-part-1)
  - [Supply chain smart contract functions, part 2](#supply-chain-smart-contract-functions-part-2)
  - [Using events](#using-events)
  - [Implementing events](#implementing-events)
  - [More on ownership](#more-on-ownership)
  - [Designing for security](#designing-for-security)
  - [Implementing minimal functionality](#implementing-minimal-functionality)

### 1. Your Supply Chain Smart Contract dApp

[↑ Back to Table of Contents](#table-of-contents)

#### [Designing your supply chain app](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=0)** - Let's make a Supply Chain and let's put it on the [[Blockchain]].
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=4)** Basically let's remember what we're doing and why we're doing it.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=9)** We're developing a Supply Chain Application, which is a framework that connects producers to consumers and manages the [[Microsoft Products|products]] and the services along that journey.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=20)** The reason we're going to the Blockchain is because we want to reduce the costs of all those middlemen, and we want to offer transparency and visibility.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=29)** Okay. So in order to do this, we've got to store some data and eventually we may be storing a lot of data.
>
> **[0:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=36)** Keep in mind our Supply Chain App is going to be very simple.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=40)** We're just going to touch on some of the core functions, but to do that, we've got to store some data.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=46)** So there are four types of data we're going to store.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=49)** We're going to store assets, an asset is the product that can be bought by the consumer.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=55)** So somebody is going to produce the product and we're going to move the product along.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=58)** We're going to call that an asset.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=60)** Then we have participants.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=62)** A participant is any entity that participates in the supply chain.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=68)** So those can be manufacturers, suppliers, shippers, and then finally consumers.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=74)** So we have assets that are being moved around by participants.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=79)** So in order to associate an asset with a participant, we need the notion of ownership, an ownership structure basically determines which participant currently owns a product or actually owns a product at a certain point in time.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=96)** That gives us the ability to track a product over time.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=101)** If you have multiple ownership records, you can tell that at a certain point in time, a particular participant owned a particular asset, and that's how we're going to be able to track the ownership changes.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=113)** And then finally, we want to be able to define this notion of a payment token participants pay each other with [[Tokens]] as the ownership changes.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=124)** So you basically have a purchase price or a transfer price.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=127)** And we're going to look at using a token to actually pay a render payment or tender payment.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=134)** So those are the data items.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=136)** Now, remember, I've talked a little bit earlier about the fact that a smart contract is made up of data items and functions or methods or capabilities.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=146)** Sometimes we refer the data items as nouns, and I like to refer to the functions as verbs stuff you do actions.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=154)** So let's talk about these capabilities, these functions now we need the ability to initialize our tokens.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=160)** So when we first bring up our supply chain, we want to initialize a pool of payment tokens.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=166)** We then need to have a function that allows us to transfer tokens among participants.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=172)** And we also want to be smart about it and authorize token payments so we can allow token transfers on behalf of another agent.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=181)** So those are some of the things we need to do for or some of the capabilities that we need for our token side, we also have supply chain capabilities or functions to manage the supply chain.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=194)** We need to be able to add and update participants.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=197)** We need to be able to move products along the supply chain.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=201)** And we also need to add an update, actual assets or products, and we need the ability to look into the supply chain and track an asset.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=210)** Tracking an asset means two things.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=212)** And it's going to be two separate functions.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=214)** One is to tell me where product is today.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=217)** And the other is look into the provenance of a product.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=221)** In other words, let's see where it came from, who used to own it.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=225)** And we trace all the way back to the point of generation.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=229)** All right. So that gives you an idea of what we're going to do, why we're going to do it, and a little bit of an insight into how we're going to lay all this out.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-your-supply-chain-app?u=76281980&t=239)** Now it's time for us to jump right in and start working on cranking that code out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4), [[Microsoft Products|Products]] (3), [[Blockchain]] (2)
> **Tools:** notion (2)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)

#### [What are dApps?](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=1)** - As we move into actual development, we move into the development phase from the design phase.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=6)** We want to keep one thing in mind, and that is that we're not just writing [[Smart Contracts]].
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=12)** Oftentimes we focus just on the details of the smart contract code, but we have to keep in mind that we're actually developing a larger application and it`s a special type of application.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=25)** The application that we're developing is a decentralized application, often referred to as a dApp.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=32)** The decentralized application, the dApp or D app is an application that similar to writing code in other languages, but it has advantages.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=41)** First off, the decentralized nature means that this code is going to be running on many different nodes.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=49)** It's advantageous to us to know that our code has to be deterministic.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=55)** So we don't have to worry about coordinating as much as we would in other types of environments.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=60)** However, we do have to ensure that we're not using any data That's localized to a particular node that could change the deterministic nature.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=70)** In other words, don't read something that's local off a disc that allows us to cause the output to be different.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=77)** For some reason, we want to stay within our little sandbox, which is the EVM, the [[Ethereum]] Virtual Machine.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=84)** So the advantages of this decentralized environment means that we have automatic history tracking of data and code for that matter.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=93)** We also have built-in fault tolerance.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=96)** Any one node or any number of nodes in the network can fail.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=101)** And all the other nodes keep on operating.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=104)** When the failed node or nodes come back to life, they can rejoin the network, resync the [[Blockchain]], and you're rocking and rolling again.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=112)** You don't have to worry about this fault tolerance and centralizing functionality or data.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=118)** And speaking of data, we know that the data itself is trusted.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=123)** That means that data only gets added to the blockchain when it passes and satisfies the consensus mechanism.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=130)** That means that just over half as a minimum of the nodes, agree that this data is good.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=137)** You don't have to trust the other nodes.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=138)** You don't have to trust the other users of the application.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=142)** All you have to do is trust the technology and that over half of the nodes agree that data that's added is good, valid data.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=151)** Okay. So before we start cranking out code, make sure you know what your dApp does.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=157)** Now, we just talked about what we want our application to do and the functionality we want it to provide.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=163)** Make sure you're very familiar with what your goals are and how you're planning to achieve those goals.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=170)** And also understand why the Ethereum blockchain environment is best for your particular implementation.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=177)** The reason that's important is that blockchain is such a hot topic.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=181)** A lot of people want to just do blockchain, blockchain, blockchain, and they want to write all this stuff and make it look really cool when they don't really need to be on a blockchain.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=190)** So, if you are unable to clearly articulate why a blockchain is needed for a particular application and why Ethereum is the best solution for you, if you can't do that, chances are you need to back up a little bit and figure it out.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=208)** You need to be able to clearly state, you know, give me your elevator pitch. Why is it better?
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=214)** If you can do that, you're ready to move ahead.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=217)** Okay. So dApps allow users to access data stored on the blockchain.
>
> **[3:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=222)** Remember that you cannot just simply go grab data off the blockchain, but technically you can read the raw data, but the only proper way to access to write to the blockchain is through these dApps through the invocation of functions in smart contracts, in non blockchain environments, it is possible for you to short circuit, or bypass, integrity controls, and actually write data into the data store.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=252)** We know by now that in blockchain, you can't really do that and get away with it.
>
> **[4:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=257)** You can do it, but as soon as you do that, you change the hash.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=260)** You invalidate the block and then you invalidate the entire [[Representational State Transfer (REST)|rest]] of the blockchain.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=266)** One thing we didn't talk exclusively about or talk in depth about was that, remember when you change data, you change the hash.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=275)** Remember that that current blocks hash is used in the next block.
>
> **[4:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=279)** So you also break the chain and the next chain and the next link rather, and the entire rest of the blockchain is totally messed up and broken.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=288)** If you bypass the integrity controls and try to write directly to the blockchain, that way you can count on the fact that no one has written to it because it's obvious if they have.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=298)** So we know that you can't write to the blockchain without proper author authorization, but you can write to the blockchain if you do have authorization, but you have to pay for it.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=310)** So remember that as you write your applications, you`re cumulatively increasing the cost of interacting with and writing to that blockchain.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=318)** So you want to minimize that.
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=320)** And if you look at code that other developers have written for blockchain environments, you'll notice there's a lot of work being done in local variables.
>
> **[5:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=330)** And sometimes they're creating these looping structures and building stuff in memory, you think, gosh, that'd be so much more efficient if you just wrote it down to the blockchain.
>
> **[5:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=339)** Yeah, it would, but it causes problems.
>
> **[5:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=342)** It costs money and the persistence factor is an issue.
>
> **[5:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=346)** So that's why you may want to spend a lot more time thinking through how you implement each individual piece of your code.
>
> **[5:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=353)** Smart contracts that we're going to be working on as part of the bigger dApp provide that interface between the users and the blockchain.
>
> **[6:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=363)** And it makes the decentralized application possible.
>
> **[6:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/what-are-dapps?u=76281980&t=367)** The smart contracts are the glue that pull everything together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (23), [[Smart Contracts]] (4), [[Ethereum]] (3), [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** node (3), make (3)
> **Code Identifiers:** dapp (4), dapps (2)
> **Definitions:** means that (3), is an  (2), in other words (1)
> **Env Vars:** evm (1)
> **Cross-References:** in the next (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** before we start (1)

#### [Token smart contract details](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=1)** - So our first real and useful smart contract is the payment token smart contract.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=7)** So what we're going to do is in the context of this material we're covering and our supply chain application, we're going to create our own token.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=18)** The reason we do that is two-fold.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=21)** Number one, I want to show you how to create your own token.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=23)** And secondly, we want to restrict the participants to authorize supply chain participants.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=30)** In other words, you can't pay for anything on the supply chain unless you own some of the [[Tokens]].
>
> **[0:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=37)** And we only sell these tokens to people that we allow into the supply chain.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=41)** So since we're dealing with a public [[Blockchain]], we don't have as much capability to limit participation.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=50)** But if we use our own token, that means you cannot pay for the supply chain functionality unless you own some of this token.
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=57)** It's kind of like going to an arcade.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=61)** In some arcades, you walk in and they just take regular quarters.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=64)** Other arcades have switched over to specific tokens or at least it used to be.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=69)** I'm not sure how much it is these days as much as it used to be in the old and golden days.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=73)** But the idea would be that you would walk in and there's a change machine.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=78)** You would put in a dollar or hopefully more.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=80)** And you get these tokens out.
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=82)** All the games in that facility only operated on these special tokens.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=88)** So you could have all the quarters or all the dollars that you wanted, but you couldn't play the games until you converted them into tokens.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=95)** Now, if you go to the snack bar, you would spend real money, like US dollars for a hot dog and a Coke, but that's for a general product.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=103)** But to play the game, you had to use their token.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=107)** So that's why we're creating a smart token or creating an ERC-20 token in our supply chain app so that you have to come in the front door.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=117)** And get some of our special tokens in order to pay for the supply chain transfer of ownership.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=123)** Now, we've chosen to use the ERC-20 standard because that is the most common standard.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=129)** It's easy to find a wallet that is compatible with ERC-20 standards.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=134)** And so we're going to implement the most commonly used [[Ethereum]] token.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=140)** So I'm going to show you how you can do it yourself through this example.
>
> **[2:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=144)** Let's take a look at the ERC-20 token data items.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=149)** Or rather the data items we have to define for an ERC-20 compliant token.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=155)** There's six of them, that's the minimum, but we're only going to implement the minimum right now.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=160)** So let's look at those data items first.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=162)** So how do we implement our own token?
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=166)** Before we look at code, let's talk through what was going to be in the code.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=170)** First off, there are several data items that you need to define and then several functions you have to define.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=177)** The three data items we're going to define are going to be totSupply.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=180)** That is the total number of tokens that are in circulation.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=184)** Of course, that's going to be stored on the blockchain so we can find out the current value at any time.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=189)** We're also going to initialize the token with a name.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=193)** This is just a descriptive name so we can recognize it.
>
> **[3:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=196)** And then we're also going to define the decimals.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=199)** The decimals is the number of decimals or the precision that's used when displaying token amounts.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=205)** In most cases, when we deal with money, we use a decimal value of two, two decimals.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=211)** So we had dollars and cents.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=214)** Well, that works fine for US currency.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=217)** But when you start dealing with [[Cryptocurrency]], it's often common to have a need for more precision.
>
> **[3:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=224)** So you may want to have eight, or 10, or 12 decimal places after the decimal point so we can own, let's say 0000133 tokens.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=237)** And if you look at Ether or Bitcoin, you see that very common.
>
> **[4:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=241)** That it's very unusual to own an entire Bitcoin.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=244)** Well, I mean, you can, but it's worth quite a bit of money.
>
> **[4:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=247)** So you normally would own a very small fraction.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=249)** So we need more places to the right of the decimal to be able to show all those additional precision.
>
> **[4:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=257)** We also want to create the symbol, which is a short identifier.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=261)** We have the name, which is a long identifier.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=263)** The symbol is a short identifier.
>
> **[4:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=265)** We want to create and store balances, which is the current balance of each participating account which is mapped to the account address.
>
> **[4:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=274)** So this is not just one variable.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=276)** This is actually a list of balances.
>
> **[4:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=279)** So we're going to have a list of all of the account holders, and what address they have, and how much money they have, how much of the token they have.
>
> **[4:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=286)** And then finally is allowed.
>
> **[4:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=288)** It's the number of tokens authorized to transfer between accounts mapped to the sender's address.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=295)** So this is going to be a pre-approved or it's a list of pre-approved amounts.
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=299)** We're going to revisit this and talk about why that's important a little bit later.
>
> **[5:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=303)** So those are six data items that we're going to define in the header.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=307)** Then in the body of the contract we're going to define six functions.
>
> **[5:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=313)** And the functions are mandatory for an ERC-20 token.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=318)** So if you look at any other ERC-20 token out there, they'll all have these six basic functions.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=324)** And they have the same name.
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=325)** And that is how you can interact with other tokens.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=328)** And that's how the wallet is going to interact with the token because he knows he can invoke these six functions.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=335)** It is totalSupply.
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=336)** That just returns the current total number of tokens.
>
> **[5:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=340)** Balanceof returns the balance of a specific account.
>
> **[5:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=344)** Allowance returns the remaining number of tokens allowed to be transferred from one account to another account.
>
> **[5:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=351)** Transfer will transfer tokens from the owner, the message sender, whoever called it to a target account.
>
> **[5:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=359)** We can also transferFrom.
>
> **[6:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=361)** That is where we transfer from one specific account to another specific account.
>
> **[6:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=366)** And the difference between those two is transfer always assumes that it's you sending money or you're transferring tokens.
>
> **[6:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=373)** Transferfrom means that we have an agent there that's actually transferring from one account to another account.
>
> **[6:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=379)** And then finally we have approve.
>
> **[6:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=382)** That works with the allowance feature.
>
> **[6:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=384)** Approve sets a maximum allowed number of tokens that can be transferred from one specific account to another specific account.
>
> **[6:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=392)** An example of that in the real world, maybe something like a purchase order.
>
> **[6:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=396)** If you go to a company and you want to purchase some [[Microsoft Products|products]] from them, you may issue a purchase order to say, "I authorize you to ship up to $5,000 worth of goods to me.
>
> **[6:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=408)** "And I'm going to chip away at this "over the next couple of weeks."
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=411)** That basically tells the shipper they don't have to call you back every time for authorization.
>
> **[6:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=415)** They know they can ship up to $5,000 worth without having to make another phone call.
>
> **[7:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=420)** That's the same idea we have in the allowance and approve features in the ERC-20 token.
>
> **[7:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-details?u=76281980&t=427)** That covers the functionality of how an ERC-20 token and our token is going to operate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (16), [[Blockchain]] (2), [[Ethereum]] (1), [[Cryptocurrency]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** erc (9)
> **Definitions:** is a  (3), in other words (1), means that (1)
> **CLI Commands:** find (2), make (1)
> **Code Identifiers:** totsupply (1), totalsupply (1), transferfrom (1)
> **UI Navigation:** go to (2)
> **Analogies:** kind of like (1)
> **Speakers:** - so (1)

#### [Supply chain smart contract details](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=1)** - Okay. So let's take a look at what's inside our supply chain smart contract.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=7)** It contains basically the data and the functionality to manage all the [[Microsoft Products|products]], the participants, and all ownership transfers.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=15)** Because if you think about a supply chain, it's basically a collection of products that are owned by specific participants at a certain point in time.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=24)** So in order to track and to trace the change in ownership, we need that third structure.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=30)** So we need three structures basically.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=32)** In other words, it's everything that's not payment related because we already talked about the payment in the token smart contract.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=40)** Okay. So to keep track of our data, we need at least three structures.
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=45)** Now, with the token smart contract, we didn't use structures.
>
> **[0:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=49)** We just used individual scaler data or scalar variables, which is basically means it's simple.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=55)** It's just for one token or one token type, we have a specific identifier.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=62)** We have a description, we have a symbol because there's only one token.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=67)** Now we may have a lot of numbers of the token, but it's still one basic structure.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=73)** So we don't need to create like a database of records.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=76)** Supply chain is different.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=78)** We're going to have a bunch of lists.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=80)** We're going to have a list of products.
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=82)** We're going to have a list of participants and a list of ownerships.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=86)** And each one of those has their own attributes.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=89)** So basically for the product structure, it's going to have attributes such as a model number, a part number, a cost.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=97)** Maybe we have a serial number, stuff like that.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=99)** And we're going to have all the data that uniquely identifies one product.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=105)** All right. So that's a product and we put it into a structure and that way we can create a list.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=111)** So we're actually going to have a mapping, which is going to create a list of products for us.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=117)** We also have a participant structure that means that each participant will get it's on record, so to speak.
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=124)** And it has these attributes such as username, password, [[Ethereum]] address, and so on and so forth.
>
> **[2:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=131)** And we'll also have a mapping that gives us a list of this participant structure.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=136)** So you can think of it kind of like a spreadsheet in this case.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=139)** Then, and actually all of these are kind of like spreadsheet entries.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=143)** And then lastly, we have an ownership structure.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=145)** The ownership structure is going to store all the information that defines a product and who its owner is at one particular point in time.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=155)** So we're going to record the product ID, the owner ID and the transaction time as well.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=161)** So we know that at this particular time, we have a particular ownership record.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=166)** So in order to make all this work, we need three global scaler variables or simple variables.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=173)** We need a product ID, we need a participant ID and we need an owner ID.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=178)** And actually these are going to be part of the structures we'll use these as local variables from time to time.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=185)** But these last would be part of the structure so we can uniquely identify a product by its product ID, a participant by its participant ID and an owner by its owner ID.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=195)** So that covers the data.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=197)** So it's a little more complex than the token.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=199)** Then let's look at the functionality.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=201)** What are the things we need to implement?
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=204)** These are pretty straightforward.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=205)** For participant and owners, we need to provide two functions each.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=209)** AddParticipant to create a new participant and getParticipant so we can [[Fetch]] information and display it.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=216)** Same thing for product, add a new product and get a product.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=221)** Notice there's no delete product or delete participant that's because once they're there, they're always there.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=226)** Now I will point as a sidebar here in a real application, you may need to get rid of a participant.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=234)** You can't delete it, but you may be able to or you should be able to disable or to make a participant no longer on the active chain, but you're not going to ever delete data.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=246)** But for our simple environment, once you add a product or you add a participant, it's always there.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=252)** The next function, newOwner that is a transfer of ownership.
>
> **[4:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=257)** So you have a product that moves along the supply chain by being detached from one owner and being attached to a new owner.
>
> **[4:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=267)** And again, detach, that's a little bit of a misnomer because it's always attached at a point in time to a specific owner.
>
> **[4:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=276)** But to move it along the supply chain, we add a new record that says, now as of this point in time the product is owned by a new owner.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=285)** And so you have the old owner and the new owner.
>
> **[4:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=287)** And that's what gives us this chain of provenance, which is the next function.
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=292)** GetProvenance, provenance is a record of ownership that's what it means.
>
> **[4:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=297)** So getProvenance basically says, show me a product and I'm going to go fetch all of the ownership records.
>
> **[5:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=305)** And I'm going to show them to you in order.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=307)** So you can say this product moved through these iterations, and I can also tell you exactly when it occurred because we have the time date stamp on the ownership record.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=318)** Sometimes we don't want to see all the provenance.
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=320)** We only want to see the ownership record at a point in time saying, who owned this or where was the product last Thursday?
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=328)** Then we can drill in and we can find one ownership record and that's what getOwnership function does.
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=334)** The last function we have to implement is that for authorizing or rather authenticatingParticipants.
>
> **[5:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=339)** So this is a security measure.
>
> **[5:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=341)** So the participant before the participant can do anything, he or she will provide their user ID and their password and the authenticateParticipant function will either return a true it's okay or false nope.
>
> **[5:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=353)** You failed authentication.
>
> **[5:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-details?u=76281980&t=355)** So that pretty much covers all the functionality that's going to be inside our supply chain smart contract.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[Fetch]] (2), [[Ethereum]] (1)
> **Code Identifiers:** getparticipant (1), newowner (1), getprovenance (1), getownership (1), authenticatingparticipants (1)
> **Definitions:** is a  (3), in other words (1), basically means (1), means that (1)
> **Analogies:** such as (2), kind of like (2)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - okay (1)

#### [Smart contract road map](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=0)** - Okay, so we're covering lots and lots of ground here.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=4)** So let me give you a little bit of a roadmap of where we have come from and where we're headed.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=9)** Now, I could talk about each topic for several hours on end, and as much as you may love listening to me talk on and on, we've tried to break things up to make it more palatable.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=20)** So here's what we've done.
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=22)** Let's think of this as a matrix, not the matrix, but a matrix or a spreadsheet.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=29)** We basically have this table here.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=31)** The columns are our [[Smart Contracts]].
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=34)** We have a token smart contract and we have a supply chain smart contract.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=40)** So we're going to be kind of bouncing back and forth talking about the components of the smart contracts.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=46)** So our rows would be data items on the top and functions on the bottom.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=52)** So we're going to talk about, and we have talked in part about the token data items, then the supply chain data items.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=62)** We've talked about the high level design, and we're now about to go into look at actual code.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=67)** So rather than reading through a long piece of code, all at once, we're going to take a little bite sized chunks.
>
> **[1:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=74)** So we're first off going to take token data items.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=78)** Then we're going to look at supply chain data items.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=81)** So you can kind of compare the two.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=83)** Then we're going to go back and look at token function implementations, and then look at supply chain function implementations.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=91)** So even though we're kind of bouncing back and forth between the smart contracts.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=95)** We want to do the data item, data items side by side function, function side-by-side.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=100)** And hopefully that'll flow a little bit better.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/smart-contract-road-map?u=76281980&t=103)** So when we put them back together, you really will have learned a lot of [[Solidity]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Smart Contracts]] (3), [[Solidity]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - okay (1)

#### [Token smart contract data, part 1](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=0)** - All right, let's get going.
>
> **[0:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=2)** We're going to write some smart contract code.
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=4)** The first thing we're going to do, is we're going to create a brand new project, which means create a new directory.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=9)** We're going to use truffle to initialize the project, and then we're going to fire up visual studio code and crack open our first real smart contract.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=18)** Let's do it.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=20)** All right, the first thing we'll do is we'll open [[Powershell]] and I'm going to cd down to my workspace directory, and I'm going to create a new folder, and that folder is going to be "SupplyChainApp"
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=38)** So I'm going to use mkdir SupplyChainApp.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=41)** I'm going to cd down to SupplyChainApp, and I'm going to ask truffle to initialize it as a project.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=51)** So I'll just type in truffle init.
>
> **[0:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=55)** All right. That's all it takes.
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=57)** Once again, if I do a directory listing, we see that truffle creates a few things for us.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=63)** Notice it gives me a new truffle-config.js.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=67)** We've got to tweak that a little bit.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=68)** There's nothing of note in any of these folders right now.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=72)** So what I have to do is go into visual studio code and write everything, or I can pre-populate it with somebody else.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=81)** If someone would give me free code, I could just drop it right in.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=86)** Guess what? We have free code for you.
>
> **[1:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=88)** It's either going to be available via download, or you can copy it from the notes of the [[Microsoft PowerPoint|PowerPoint]] slides.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=96)** So I have it already in another directory.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=98)** I'm just going to copy it over and I'm just going to drop it right on the new folders I just created.
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=104)** All right, so I have a source code folder.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=107)** I'm going to open that up and there's my SupplyChainApp.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=110)** So I'm simply going to copy this, and navigate over to where my user is, and drop it right on top of the existing supply chain.
>
> **[2:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=126)** and I know I want to replace everything that's there because there's nothing there of note.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=130)** And now I'm ready to launch into visual studio code and there we go.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=138)** Now I'm inside my SupplyChainApp and in contracts, I see I have my contracts already there.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=145)** Before we go too far, let's crack open the truffle config or just open it, click on it and open it.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=152)** And since it's a brand new truffle config, I need to edit the development network.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=158)** So I'm just going to delete the comments in front of each line in the development section.
>
> **[2:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=171)** And I'm going to change my port to 7545, which would be the port that Ganache is using.
>
> **[3:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=182)** And if I forget that, easy.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=186)** I just launch Ganache again, choose Quickstart and there we go.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=195)** There's my port number 7545.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=197)** So it tells me that sure enough, Ganache is running on 7545.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=201)** So that's what I need to create here.
>
> **[3:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=204)** Press ctrl+S to save it.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=206)** And now we're done with my config.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=209)** Whenever you start a new project and you initialize it with truffle, don't forget that you need to edit that truffle-config.js.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=217)** It only takes a minute, but that's how we connect each truffle project to the [[Blockchain]].
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=223)** The beauty of it is if you use the other option in Ganache to create a new workspace, you can have multiple blockchains out there, maybe one for each project, and each one is going to be running on a different port.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=236)** So the truffle-config.js file gives you the ability to connect each project to a separate port, which means a separate test blockchain.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=246)** So you can have lots of things running and you can keep them all separate.
>
> **[4:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=250)** One thing too, to be aware of.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=252)** We're going to talk about later, when we talk about how to test, remember that when you do anything in Ganache, when you shut Ganache down, it basically deletes your test blockchain and creates a new one the next time.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=266)** So we'll come back and I'll remind you about that later, but be aware that everything that you did on your test blockchain goes away.
>
> **[4:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=273)** For a test, it's no big deal.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=275)** All right, so let's open up the token contracts and see what they are.
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=281)** So if we take a look here, we see two ERC20 files.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=285)** I'm going to start with the ERC20 interface.
>
> **[4:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=289)** So this was downloaded directly from [[GitHub]].
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=292)** And if you look carefully, you'll notice a couple of strange features here.
>
> **[4:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=297)** I keep calling the token, the ERC20 token or ERC20 token standard.
>
> **[5:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=304)** ERC stands for [[Ethereum]] request for comments, but the real name is actually an Ethereum improvement proposal.
>
> **[5:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=316)** So technically, this is the EIP20.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=319)** So it's the 20th improvement proposal for Ethereum [[Tokens]].
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=325)** So the bottom line is you may see this referred to as ERC20 or EIP20.
>
> **[5:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=331)** It's effectively the same thing.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=335)** So if you download this from Ethereum, from GitHub, you're going to find exactly this interface.
>
> **[5:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=342)** Now an interface is simply a definition of the minimum data and functions that you have to implement, in order to make it a standard.
>
> **[5:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=354)** In other words, your contract has to have totsupply and these six functions, as well as these two events, which we haven't talked about yet.
>
> **[6:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=364)** And as long as your own token supports these minimum functions and data items, then your function or your contract is said to be compliant or compatible.
>
> **[6:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=377)** That's how we implement a standard.
>
> **[6:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=379)** So this is the ERC20 interface.
>
> **[6:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-1?u=76281980&t=383)** So it's defined as its own contract.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (4), [[Ethereum]] (4), [[GitHub]] (2), [[Powershell]] (1), [[Microsoft PowerPoint|Powerpoint]] (1)
> **Env Vars:** erc20 (6), eip20 (2), erc (1)
> **Tools:** visual studio (3), github (2), powershell (1)
> **CLI Commands:** cd (2), mkdir (1), find (1), make (1)
> **File Paths:** truffle-config.js (3)
> **Definitions:** stands for (1), in other words (1), defined as (1)
> **UI Navigation:** open the (1), click on (1)
> **Warnings:** be aware (2)

#### [Token smart contract data, part 2](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=0)** - Now let's open up the ERC 20 token.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=5)** All right, the first thing that we see here is, again, this is just downloaded code, there's nothing new here.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=12)** We have pragma, we're going to say that I need to have a compiler that is equal to, or greater than 4.21 and less than 060.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=26)** So our current compiler of 058 fits in that range, so we're going to be fine.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=32)** Here is the import directive and I talked about this in a previous episode, but this is how we can import code that was written and stored in another file.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=44)** So we just showed you the ERC 20 interface, so I'm going to import it right here, and it's just as if I type it at line seven, the whole file.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=54)** Then we define our contract and here's where the magic happens.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=58)** Our contract is an ERC 20 token.
>
> **[1:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=61)** Okay, that's okay.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=63)** But we say our token is an ERC 20 interface.
>
> **[1:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=67)** What that means is that my token conforms to the minimum definitions that come from the ERC 20 interface.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=77)** All right, I'm going to go back to the ERC 20 interface.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=80)** Here we go.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=81)** And that means that my token is going to implement all of these functions, this data item, and these two events.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=91)** So if we read through, we're going to see that here's totSupply.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=96)** So I implement that, I define that, and then my functions are all there.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=101)** Transfer, transfer from and so on and so forth.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=105)** So what we've done with this line number nine is we've defined our token to be based on the ERC 20 interface.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=117)** So what we see see here is an honest to goodness interface.
>
> **[2:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=121)** That's what you see in other object oriented languages and interface is basically a contract, we don't like to use the [[Microsoft Word|word]] contract, 'cause we're using smart contract, but think of an interface as being an agreement.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=135)** If you want to base your smart contract on this interface, i.e, the ERC 20 interface, you must implement these functions and this data.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=146)** So that's what an interface is.
>
> **[2:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=147)** It gives you the minimum requirements to fit the standard.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=152)** In other words, we designed a new vending machine, here's what the coin slot needs to do to accept a quarter.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=159)** That's essentially what we're doing.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=161)** So, there's a lot going on here.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=163)** Once we get into the actual body of the token code, first thing we do, is we defined a UN 256.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=173)** It's a variable, but it's a variable that's never going to change.
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=176)** We just want to use it to store some value.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=179)** So we're going to call it a constant.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=181)** A constant in [[Solidity]] is a variable that won't allow us to ever change it.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=186)** So we basically just say, Hey, I'm going to assign in a value once and it'll never change.
>
> **[3:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=190)** Then we defined our mappings.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=193)** A mapping is a solidity structure that effectively creates a list of items mapped or elements mapped from a key to a value.
>
> **[3:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=206)** So in this case, we're going to create a mapping between an address and a UN 256.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=212)** It's going to be public so everybody can see it, and it's going to be called balances.
>
> **[3:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=216)** And what we're going to do here is we're going to map addresses, which are owners of [[Tokens]], to the number of tokens that they own.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=226)** So that's why we have an address mapped to a number.
>
> **[3:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=230)** And we have another mapping, which is going to be a two layer mapping.
>
> **[3:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=234)** We basically are going to have a list of tokens that are allowed to be transferred from one address to a list of other addresses, and for each address that's valid or allowed, we're going to have a number, UN 256, which is a number of tokens that the second address is allowed to transfer from the first address.
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=259)** So basically the second mapping is saying for Michael, which is the first address, Michael is allowed to transfer 100 tokens to Stacy, 50 tokens to Noah and so on and so forth.
>
> **[4:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=271)** So that's what it is.
>
> **[4:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=272)** It's a list of people and the amount that they can transfer to.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=275)** It's the POs that are currently open in the real world.
>
> **[4:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=279)** All right, the [[Representational State Transfer (REST)|rest]] of the functionality is a list of all the functions.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=284)** And actually before we even get there, we do have this special type of function we haven't talked about, which is a constructor.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=291)** Whenever we create a new object or a new data item, the constructor is a special function that fires and automatically runs, and it is the initialization code.
>
> **[5:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=304)** So the first thing that happens is when we create a new token is we give it an initial amount, a name, the number of decimals and a symbol, and so those are assigned and stored on the [[Blockchain]].
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=317)** And the rest of the functions actually carry out the functionality of how we're going to operate within our token.
>
> **[5:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=326)** We transfer from one address or from the sending address to another address.
>
> **[5:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=331)** The way we do that, notice we start off with the require function, and we say require the balances of message sender is greater than or equal to value, and notice we had a little underscore before value.
>
> **[5:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=345)** It's common to use parameters or parameter names with underscores.
>
> **[5:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=352)** It's easier to keep track of which ones are parameters, which ones are variables.
>
> **[5:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=357)** So in this case, we're going to say, before I even do anything, I want to make sure that the sender has a balance that's currently greater than the value I'm trying to transfer.
>
> **[6:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=368)** If this is false, we issue, or we return the string, insufficient funds for the transfer source, and we just return.
>
> **[6:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=376)** If we do have enough money to exchange, then we say the balances a message sender is decremented by value, in other words, we subtract value from it, and the balances of two, that's who we're actually sending the money to, is incremented by the same amount.
>
> **[6:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=394)** Once we use require to make sure we have a sufficient balance, and we decrement the senders that balances and we increment the receiver's balances, were effectively done.
>
> **[6:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=408)** But then if we just return at that point, we just silently return and everybody assumes everything was okay.
>
> **[6:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=415)** Instead what we want to do is we want to communicate out to the client.
>
> **[7:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=420)** We want to send a message to them saying, everything's good, or maybe we'll want to create some other type of communication.
>
> **[7:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=427)** That's what an event does.
>
> **[7:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=429)** What we do is we emit, or we trigger an event, which is really just sending a message out to anyone who's listening.
>
> **[7:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=437)** That's what the emit statement does.
>
> **[7:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=439)** So here we're going to emit a transfer event and we're going to send it the message sender, the message receiver, or actually the transaction receiver and the value.
>
> **[7:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=451)** So we're just sending out a notification saying, Hey, by the way, I just transferred X number of tokens from the sender to the two values.
>
> **[7:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=461)** So it just notifies the outside world what has happened.
>
> **[7:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=465)** I won't read through all of the other functions, but this is the way that we write code in smart contract programming.
>
> **[7:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=473)** It's all very language specific.
>
> **[7:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=475)** There's a lot going on here, but you can see how things are pulled together.
>
> **[8:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-data-part-2?u=76281980&t=480)** I'll spend a little bit more detailed time when we look at further [[Smart Contracts]], because I don't want to overwhelm you with too much syntax right now, 'cause I probably already have, but at least you get a good taste of how Solidity operates in a real useful smart contract.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (7), [[Solidity]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[Microsoft Word|Word]] (1), [[Blockchain]] (1)
> **Definitions:** is a  (6), is an  (3), in other words (2), means that (1)
> **Env Vars:** erc (8)
> **CLI Commands:** make (2)
> **Code Identifiers:** totsupply (1)
> **Versions:** 4.21 (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** initialization (1)

#### [Supply chain smart contract data, part 1](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=1)** - Okay, so now we've already looked at the token interface and smart contract, so let's take a look at the supply chain smart contract.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=11)** So let's take a look at Visual Studio Code and we'll look at some more [[Solidity]].
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=15)** All right, so here is our supply chain smart contract.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=18)** SupplyChain.sol.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=21)** Notice, of course, we start with pragma.
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=24)** I want a compiler version between 4.21 and 6.0, so we're good there.
>
> **[0:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=29)** Then we define the actual contract.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=31)** Notice that this is not based on an interface like the token was, it's just a contract we're defining from scratch, and we don't include anything else.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=41)** We don't really need to include anything else, so we jump right into the header of the supply chain contract.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=48)** So at the very beginning, we defined three variables and the three variables represent the IDs of the product, the participant, and the owner.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=58)** And we're going to use uint32s because we are going to use these values on the [[Blockchain]], so we don't want 'em to be too big.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=66)** Uint256 would probably take up a little bit too much space.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=69)** So we defined these three IDs.
>
> **[1:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=72)** All right, next, we define our first structure.
>
> **[1:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=76)** It is a structure we use the keyword struct to define, and we name it product.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=83)** Now, a structure is really little more than a collection of individual variables or individual values all collected together into one group, and we call that group a structure.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=98)** So we see that to define a product, we have a bunch of attributes.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=102)** We have the model number, the part number, and the serial number.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=105)** Those are all strings.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=107)** Then we have the address of the product owner, we have the cost, and we have a manufacturer timestamp.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=116)** Now there's lots more data that we could create here, but again, we're trying to keep things really, really simple just to demonstrate a basic functionality of what a supply chain may do.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=127)** So this defines a product.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=130)** Now, when you define structures, it's a good idea to name them something that matters.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=136)** Now we call this product, but it's also singular.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=140)** That means there's one product.
>
> **[2:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=142)** So if we look in the structure, we're going to find the data or the attributes for a single product.
>
> **[2:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=147)** So now that we've defined one product, that's really kind of exciting, but we can't do much with one product because as I mentioned earlier, our supply chain needs to be able to manage multiple [[Microsoft Products|products]].
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=159)** So how do we do that?
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=160)** We're going to use a mapping.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=162)** You've seen it before, but let's go back and take a look at how we can implement a mapping in Solidity.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=169)** So the next line here is the mapping keyword.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=172)** Mapping actually creates a list and it maps one item or one element to another.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=179)** So in this case, I'm going to tell Solidity, I'm going to map a uint32 value to a product structure.
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=187)** And the uint32 value that we're going to map is actually going to be the product ID.
>
> **[3:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=193)** So what we're really doing is we're creating an indexed list of product structures indexed by the product ID.
>
> **[3:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=201)** It is a public mapping, which means I want to make sure that anybody can get to it and we're going to call it products.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=209)** So here's where things start to fit together, I hope.
>
> **[3:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=213)** We create a product structure called product, singular.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=217)** It defines one product.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=218)** Then we define the mapping, which is a list and we call that products, plural.
>
> **[3:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=225)** So that implies that a product structure is for one product, but this mapping called products is for multiple products, and that's what we want to imply.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=235)** If you write your code in a way that communicates subtly and overtly, you're going to find that development goes easier and also explaining it to someone else is a whole lot easier, too.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=248)** So when I tell you this, hey, I want to get a list of products, kind of makes sense.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=253)** It flows with English and we see how it's defined.
>
> **[4:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=257)** All right, let's stop here for just a minute.
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-1?u=76281980&t=259)** We'll come back and look at the other structures in a couple minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (6), [[Solidity]] (3), [[Blockchain]] (1)
> **Definitions:** is a  (4), we call this (1)
> **CLI Commands:** find (2), make (1)
> **Versions:** 4.21 (1), 6.0 (1)
> **Tools:** visual studio (1)
> **Speakers:** - okay (1)

#### [Supply chain smart contract data, part 2](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=0)** - All right, let's get back into the code and let's look at the [[Representational State Transfer (REST)|rest]] of the data that we need to define our supply chain smart contract.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=10)** Okay, We've already talked about the three variables, the ID variables, and our product structure, along with the mapping.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=17)** So let's continue on.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=19)** We know that in addition to storing our product information, we need to store the participant information.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=27)** So we create a structure called participant.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=31)** And it only includes three strings and an address: username, password, and participant type.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=38)** And then we have the single address.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=41)** And the address is actually an address data type, which is an [[Ethereum]] address.
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=45)** So this maps to an actual Ethereum address.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=48)** And we're going to use that to track ownership of the [[Microsoft Products|products]].
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=52)** Well, just like we had a list of products, we also want a list of participants.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=58)** So we define a mapping.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=60)** And the mapping here maps from a uint32, which is going to be our participant ID, to a participant structure.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=68)** And we're going to call this participants.
>
> **[1:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=71)** Once again, it is plural.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=73)** So it implies that we have a list of participants.
>
> **[1:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=77)** Okay, so now we have product and a list of products.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=80)** We have participant and a list of participants.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=84)** Next, we need another structure.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=86)** We're going to call this ownership.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=89)** This structure relates a product and an owner.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=92)** So we're going to use a product ID and an owner ID.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=95)** And we're also going to store the transaction timestamp so that at a certain point in time, we are associating a product and an owner with an actual owner address.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=107)** Notice that we have two mappings defined because if we look at ownerships, I may want to see all the ownerships by an owner or the ownerships by a product.
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=118)** So there's two different ways to look at that.
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=120)** Let me rephrase that just a little bit.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=123)** Think about the ownerships.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=125)** I may want to ask the question, "Mr. Owner," or let's say you're the supplier, "How many products do you own today?
>
> **[2:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=133)** "What is in your warehouse or what's on your truck today?"
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=137)** Well, that would be the first mapping, the ownership mapping.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=141)** Another question I may ask is for a particular product, "Where have you been?"
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=145)** In other words, where have you been on the supply chain?
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=148)** And this is important for provenance, being able to back-trace back to the original producer.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=154)** Well, I need a different mapping for that.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=156)** And so for that mapping, I'm going to create a separate mapping which tracks the provenance or the ownerships over time.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=163)** So that's why we need the two separate mappings.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=166)** One is ownerships by owner.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=168)** The other is ownerships by product ID.
>
> **[2:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=171)** So it kind of looks at the data in two different axes.
>
> **[2:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-data-part-2?u=76281980&t=174)** So that pretty much covers the data that we need to define for our supply chain smart contract.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[Ethereum]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is an  (1), in other words (1)
> **Analogies:** just like (1)
> **Speakers:** - all (1)

#### [Token smart contract functions, part 1](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=0)** - Okay, so we've looked at both types of [[Smart Contracts]] with respect to the data that we need.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=7)** Now, let's get into the actual functional implementations.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=11)** In other words, let's look at our functions.
>
> **[0:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=13)** We've kind of done, we looked at a couple for the token but let's dig back into our token implementation for each one of the functions.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=21)** Let's go look at some more code.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=23)** All right, so here we have our ERC-20 token smart contract.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=28)** We've already talked through the first few pieces.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=30)** We know the constructor fires whenever we create the new token.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=35)** And we talked through the very first function, the transfer function.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=40)** All right, let's continue on from there.
>
> **[0:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=42)** The transfer function transfers [[Tokens]] from the message sender to a specified address.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=47)** But what if I want to transfer a token from one address to another address, and I may be operating as a delegate on behalf of someone else.
>
> **[0:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=57)** So, that's what the transfer from function will do.
>
> **[1:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=62)** So basically I'm going to use transfer from, and I'm going to pass it a from address, a to address, and of value.
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=70)** So that's pretty simple.
>
> **[1:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=71)** I just say, I want X number of dollars value to go from one address to another address, and it returns a boolean called success.
>
> **[1:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=79)** In other words, yes or no, true or false.
>
> **[1:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=82)** And by the way, when I mentioned booleans, I normally will say true or false or yes or no, it doesn't matter how you interpret it.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=89)** Technically we're going to use true and false, but you can think of it as yes or no, black or white, zero, one, however you want to, but it's always going to be either a logical yes or a logical no.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=102)** So, what do we do in our transfer from?
>
> **[1:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=104)** Well, we first off have to look at the allowance mapping.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=109)** Allowances, basically are predefined transfer amounts from a certain sender to another sender or to another a recipient.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=119)** So, the first thing we do is we say allowance is equal to the amount allowed from a specific sender.
>
> **[2:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=127)** Then we use a require function.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=130)** So now, that we know how much we're allowed to send it, keep in mind, that's kind of like a PO in the real world.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=135)** So the first thing that we would do, if we're going to sell goods is we would look up the PO and say, okay, there's still $3,500 allowed on this PO.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=145)** And I'm about to bill a $1000, so that's okay.
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=149)** So, that's what the require would do.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=151)** It would say if the balances of from is greater than or equal to the value, and the allowance is greater than the value.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=160)** So in other words, they're saying I'm about to transfer money from one address to another.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=166)** So I, the from account has to have enough value to transfer what I want to transfer.
>
> **[2:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=173)** In other words, my balance has to be high enough to transfer the money, and the allowance to be greater than of what I'm about to transfer.
>
> **[3:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=181)** If either one of those are false, then I return with the message insufficient, allowed funds for transfer source.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=191)** The && sign is used for the logical ands.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=194)** What that means is if the left side of the condition is true and the right side of the condition is true, the require is satisfied.
>
> **[3:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=203)** If either side is false, the require fails and it returns with the error message.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=211)** Okay, let's assume that require is sufficient it works, we move on.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=217)** What we do here is we increment the balance of the two account, we decrement the balances of the from account.
>
> **[3:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=227)** Then we say, if allowance is less than the max you went to 56, then we detriment the allowance that's allowed, or the open amount that's allowed.
>
> **[3:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=239)** So basically, we're verifying that the allowance has a real value and it's not set to the maximum.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=245)** And if that's the case, we update our allowance mapping and we decorate it by value.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=251)** So back to the PO example, what we would do is if we had an open PO for $3,500, and I'm going to ship a $1,000 worth of good, then I would note that and say, okay, now the PO amount open is $2,500.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=263)** So in our case, we're going to use this allowance mapping works kind of like open PO.
>
> **[4:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=268)** The next line of code is to emit an event.
>
> **[4:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=271)** Now we haven't talked about events, but this is just sending a message saying, hey, by the way, I transferred value tokens from one account to another.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-1?u=76281980&t=283)** We'll come back and talk about that a little bit later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Smart Contracts]] (1)
> **Definitions:** in other words (4)
> **Analogies:** kind of like (2), think of it as (1)
> **Warnings:** keep in mind (1), note that (1)
> **Env Vars:** erc (1)
> **Speakers:** - okay (1)

#### [Token smart contract functions, part 2](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=0)** - There are four more functions.
>
> **[0:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=2)** The balance of function is really easy.
>
> **[0:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=5)** You send it an address and it simply returns the balances of owner of that address.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=12)** And we see how mappings work, mappings basically return the value of what we give it.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=18)** So let's scroll up a little bit for balances.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=21)** I'm going to give it an owner, which is an address data type.
>
> **[0:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=25)** So let's go back to the mapping for balances.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=28)** Here's the mapping for balances.
>
> **[0:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=30)** Mapping, the balances mapping maps an address to a uint 256.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=38)** So in other words, it maps an address to a number.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=41)** So if I give it an address, it's going to give me a number back.
>
> **[0:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=45)** All right, let's scroll back down to the balance of, so I give it an address and it returns a number, which is the balance of that owner.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=54)** That's how mappings work.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=56)** The approved function is where we actually create that PO amount.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=59)** I keep going back to the PO example because it's just an ongoing running example.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=64)** Keep in mind, we're not really doing PO's here.
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=66)** It's just an analogy in the real world.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=68)** So in the very beginning, if you authorize a PO for $5,000, you've got to record that somewhere.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=75)** We record that in the allowances mapping.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=78)** So we do that in the approve function.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=81)** So in the approve function, we simply say the allowed mapping for message sender to the spender is equal to value.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=91)** So that basically says that Fred is able to spend $5,000.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=96)** to Toys R Us or whatever company would be approved.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=102)** And then we emit another event, which again, we're going to come back and talk about later, but this is just a notification of saying, Hey, this is what I just did.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=109)** And then finally returns a true Boolean success.
>
> **[1:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=113)** The next function is allowance.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=116)** This simply shows the allowance, the amount allowed for a specific account, spending money on a specific spender.
>
> **[2:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=126)** In other words, if I'm asking how much money is open on my PO to Toys R Us, it would return the allowed amount for me that I can spend at Toys R Us.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=137)** And it would return 5,000 for the new PO, and finally the last function, but not the least function is total supply.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=145)** What are the total number of [[Tokens]] in circulation?
>
> **[2:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=149)** And that does nothing more than returns the value of total supply.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=155)** So I'm going to scroll all the way back up to the top.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=158)** And if we look at total supply, there we go.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=162)** Total supply is a uint public variable.
>
> **[2:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=168)** One thing that's really important to look at here is clearly I hope it's, it's fairly clear if you think through total supply or tot supply is an actual state variable, which means it's stored in the [[Blockchain]].
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=183)** So anytime that we return its value, we're simply reading it from the blockchain and showing it to you.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=189)** And every time we update tot supply, whenever we initialize a new amount of tokens, then we're actually going to write a new block.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=198)** And so when we asked the current value of tot supply, it's always going to grab the last value of tot supply.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=205)** All right, so those are the functions that make up our ERC 20 compatible token.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=211)** And if you implement each of these functions, you can have your own ERC 20 compatible token out there on the live [[Ethereum]] network, and you can start funding it and convince people to invest in your tokens and do anything you want to, and then spend them however you want to.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/token-smart-contract-functions-part-2?u=76281980&t=226)** But that's what it takes to crank up and define your own token.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[Blockchain]] (2), [[Ethereum]] (1)
> **Definitions:** is an  (2), in other words (2), is a  (1)
> **Env Vars:** erc (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll up (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - there (1)

#### [Supply chain smart contract functions, part 1](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=0)** - All right, so now it's time for us to open up our supply chain smart contract, and let's look at the functions in there.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=7)** Remember, we've already looked at the data items.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=10)** We have some variables, we have some product structures, and that's just data that just kind of lays there and does nothing on the [[Blockchain]].
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=17)** In order to do something with the data, like add new data or [[Fetch]] the data, or maybe take the data and change it, so we're going to add more data, we need some action code to do that.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=31)** Well, that's what functions are.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=32)** So we've got data that just sits there and does nothing.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=35)** And we have action code that does something to the data.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=39)** So functions are the actions we carry out in our [[Smart Contracts]].
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=43)** So let's go look at our functions for the supply chain.
>
> **[0:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=47)** All right, so we're back in our old friend SupplyChain.sol.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=51)** If we scroll down 'cause we see the data elements that we've looked at earlier.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=56)** And I scroll down to my functions.
>
> **[0:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=58)** We're going to cover eight functions here.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=60)** And again, very, very simple.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=63)** So the very first thing we do is we have an addParticipant() function, addParticipant takes several strings or it takes several pieces of data.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=73)** It's a string called name.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=75)** And we use the memory keyword to denote that this does not go to the blockchain.
>
> **[1:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=83)** This is only in memory.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=84)** So we have a string called name, a string called password, an address called pAdd, and a string called pType.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=93)** And it returns a uint32.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=95)** So inside the function, the first thing we do is we say userId is equal to participant_id++, which means we're incrementing this global participant_id.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=108)** So participant_id is stored on the blockchain.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=111)** So what we're actually doing is we're grabbing the next participant ID every time we add a new one.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=116)** Then, we apply these values or assign these values to the attributes in our participants structure.
>
> **[2:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=125)** So we've done a lot of things here, or [[Solidity]] does a lot for us.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=129)** Notice the naming conventions.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=132)** We have this list of structures called participants.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=136)** We can reference a specific element or a specific item in that participants list by asking Solidity to give us participants[participant_id].
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=150)** So it's basically a participant of 12.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=152)** That would give us the 12th participant.
>
> **[2:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=155)** And as long as we know the participant ID, we can ask Solidity to just give it back to us.
>
> **[2:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=161)** And what he'll return to us is a structure.
>
> **[2:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=165)** So a structure is a collection of data items, a collection of variables, basically.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=170)** So to get to the value of any one of those, we take the structure, and we'd say, I want the structure.name.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=179)** And that would give me the name attribute of a particular participant.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=184)** All right, so now we have this new participant.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=188)** We have a newly incremented participant ID, which is now userId.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=192)** So I'm going to say participants[userId].userName equals the passed in name.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=202)** It doesn't like the extra space there, there we go.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=205)** So what this means now is I'm going to take the value that we passed into the function, the value we provided for the name.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=212)** And I'm going to assign that to the username attributes of the newly created participant for the new user ID.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=221)** And we'll do the same thing for password, for address and for participantType.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=226)** So it's a fairly easy function.
>
> **[3:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=228)** We just pass in the information that defines a participant, we find the next participant ID, and then we assign the values to the participant structure.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=240)** The last thing we do is we simply return the user ID.
>
> **[4:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=244)** So we tell the calling context or whoever called this function, I just created user ID, number 12 for your, whatever.
>
> **[4:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=252)** The next participant ID is.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=254)** That's how we create a new participant.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=256)** So the mirror to add participant is getParticipant.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=260)** Very simple function that does nothing more than fetches the requested participant and returns the attributes that describe that participant.
>
> **[4:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=270)** The way we do this is we pass in a participant ID.
>
> **[4:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=274)** So I would say, get participant for 12 and what that's going to do, it's going to return a string and address and a string.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=283)** So it simply says return participants[participant_id].userName, and also return participants[Participant_id].participantAddress, and it also returns the participant[Participant_id].participantType.
>
> **[5:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=306)** So it's a little wordy, but this returns the specific attributes, all in one return value.
>
> **[5:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=313)** And that's all this does.
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=315)** You provide the participant ID and it looks it up and returns it directly out to you.
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=320)** Product has the similar couple functions.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=324)** We have addProduct, which would do effectively the same thing.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=328)** We pass in a new owner ID, a model number, part number, a serial number along with, let me just scroll over here, the product cost, and it's going to return our new product ID.
>
> **[5:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=344)** There's one thing that's a little bit new here.
>
> **[5:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=346)** We want to make sure that only manufacturers can add new [[Microsoft Products|products]], because they're the ones that actually add products to the beginning of the supply chain.
>
> **[5:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=357)** Now, clearly this is for manufacturing supply chain.
>
> **[5:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=359)** If you had a supply chain for, let's say olive oil, then you wouldn't call them a manufacturer.
>
> **[6:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=365)** It would be a grower or pressor or something like that.
>
> **[6:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=368)** So this is for manufacturing, but in this case, we wanted to show how we can limit the functionality.
>
> **[6:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=373)** So what I want to do is say, if the participant type is equal to manufacturer, let's add it and that's okay.
>
> **[6:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=382)** But unfortunately in solidity, you can't do that.
>
> **[6:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=385)** You can't compare strings.
>
> **[6:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=387)** Due to the way that it works internally, you can only compare the hashes of strings.
>
> **[6:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=393)** So it seems like it's a little convoluted, but this is the way that the environment operates.
>
> **[6:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=398)** So we have to first take the hash of a string and then a hash of another string, which is the hash of the string manufacturer and see if those two match, if they do then the strings matched.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=411)** The hashing function that's most commonly used is Keccak256.
>
> **[6:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=416)** It's just the name of the hashing function.
>
> **[6:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=418)** That's what's available to us in solidity.
>
> **[7:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=420)** All right, so let's go see how we do that.
>
> **[7:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=422)** Notice we say, I want to take the participants[ownerId].participantType.
>
> **[7:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=431)** So I take the owner and I grabbed that participantType.
>
> **[7:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=437)** I use the function abi.encodedPacked to translate it into a value that I can then take the hash of which basically turns into to a string.
>
> **[7:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=449)** And then I call Keccak256, kind of a lot to do.
>
> **[7:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=455)** And I compare that to Keccak256 of the string manufacturer.
>
> **[7:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=461)** If those two are equal, then I go ahead and I run the body of the function.
>
> **[7:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=469)** And it's basically the same thing as addParticipant was going to be.
>
> **[7:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=473)** We increment the product ID, and then we assign the values to the individual product structure and it goes into the products mapping.
>
> **[8:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=483)** And at the end we return product ID.
>
> **[8:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=485)** Now, doing it this way with an if statement is only one way.
>
> **[8:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=490)** If you're really thinking through what we've talked about, you may say, well, "Wow, wouldn't that be a great place for require?"
>
> **[8:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=497)** Why not say require that the participant type is manufacturer?
>
> **[8:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=504)** Could we do that?
>
> **[8:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=505)** Sure, why not?
>
> **[8:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=506)** Just as easy.
>
> **[8:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=507)** So you can do it either way.
>
> **[8:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=508)** You can use an if statement or you could require, and of course the require fails, it would just return and return the unused gas.
>
> **[8:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=515)** All right, let's look at some more code.
>
> **[8:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=517)** All right, if we keep scrolling down, there's one more function that I want to get to.
>
> **[8:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=521)** That is the mirror of addProduct, and that is getProduct.
>
> **[8:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=524)** And it's going to look a whole lot like the getParticipant.
>
> **[8:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=529)** You simply give it a product ID.
>
> **[8:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=531)** Then Solidity looks up the data for that product ID and returns the model number, the part number, the serial number and so on and so forth.
>
> **[8:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=539)** So it's a simple one-line return and it returns it back out.
>
> **[9:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=543)** You may notice that I scrolled through this modifier only owner.
>
> **[9:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=547)** We're going to, I'll just briefly mention that, but we're going to come back and talk about that a little bit later.
>
> **[9:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=554)** That's your first batch of functions for the supply chain smart contract.
>
> **[9:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-1?u=76281980&t=559)** We'll come back later and look at a few more, but that's enough to get you started with the product and the participants.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Solidity]] (6), [[Blockchain]] (3), [[Microsoft Products|Products]] (3), [[Fetch]] (1), [[Smart Contracts]] (1)
> **Code Identifiers:** participant_id (5), participanttype (4), addparticipant (3), userid (3), username (2)
> **UI Navigation:** scroll down (2), go to (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - all (1)

#### [Supply chain smart contract functions, part 2](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=0)** - All right.
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=1)** So, we've looked at some of the first functions.
>
> **[0:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=3)** In fact, we looked at four functions for supply chain smart contract.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=8)** That's only half of 'em.
>
> **[0:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=9)** Let's go back in and take a look at the other four functions that complete all the functionality for our supply chain smart contract.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=17)** Let's continue on to a big function.
>
> **[0:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=20)** It's really not that big internally, it's just replicated code.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=27)** This is a brute force function that assigns a new owner.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=31)** This actually applies the functionality of moving along the supply chain.
>
> **[0:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=38)** In order to move a product along the supply chain, you simply move it from one owner to another owner.
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=46)** So what we're going to do is we're, first off, going to create two local variables, p1 and p2.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=54)** We're going to deliberately call these, or define them, as memory variables, or memory structures actually, so that they're not going to be stored on the [[Blockchain]].
>
> **[1:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=66)** So we're doing this, and defining these as local structures, in order to avoid being charged for blockchain interaction.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=75)** So we're going to make these of participant type, which means they're structures, stored in memory called p1, and this is equal to participants of user ID 1.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=85)** Now remember, we're going to transfer a product, prodId, from user ID 1 to user ID 2.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=92)** So, those are the three inputs for this function.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=95)** So we define p1 to be the participant structure for user ID 1, and p2 is the participant structure for user ID 2.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=105)** Then we define another local variable, ownership_id, is equal to owner_id++.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=112)** So, we're actually incrementing a new ownership ID.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=115)** Now we go into the body.
>
> **[1:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=117)** And you'll notice that the body of each of these if statements is the same.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=123)** And we do it, well, it's almost the same, effectively what we're going to do is we go into the first one and we say, if the participantType is equal to Manufacturer, and p2 participant type is equal to Supplier.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=139)** Rather than just reading through this code, what we're doing is we're basically saying, in the first case, we have three different cases, in the first case, if I am transferring from a manufacturer to a supplier, then do this.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=154)** And we do that by taking the participant type, we extract it, we doctor it a little bit, take a hash, and we compare that to the hash of the stream manufacturer.
>
> **[2:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=165)** If those match, then that means the participant type is manufacturer.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=169)** So if p1 is a manufacturer and p2 is a supplier, then great, we go ahead and make the transfer.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=177)** And the other two blocks are fairly similar.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=179)** In fact, if we look at the second block, the second block says, if p1 is a supplier and p2 is a supplier, that means we're moving somewhere in the middle of the supply chain, that's okay.
>
> **[3:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=192)** Or if p1 is a supplier and p2 is a consumer, that means we're moving to the end of the supply chain.
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=200)** This just keeps us from moving backwards in the supply chain.
>
> **[3:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=205)** That's what these are actually for.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=207)** So, let's assume that we get into the body.
>
> **[3:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=210)** If we get into the body, we basically create a new ownership value, or new ownerships structure.
>
> **[3:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=218)** We add a new ownership structure to the ownerships list in the mappings, and we assign it the values.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=226)** The productId is the product ID.
>
> **[3:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=228)** The new productOwner is p2.participantAddress.
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=232)** The ownerId is _user2Id.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=235)** The timestamp is the current timestamp.
>
> **[3:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=238)** The productOwner is now p2 participantId, So, we're going into the [[Microsoft Products|products]] mapping and we're changing the current products owner.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=249)** And we also go into the productTrack mapping, and we're going to push the ownership_id.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=256)** What that means is, just add it to the end.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=258)** Push just adds to the end of a mapping.
>
> **[4:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=261)** And then we emit an event saying, "Hey, I transferred the ownership."
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=266)** So, what happens here is we basically go into the ownership structure and we change the owner, which means I'm going to actually create a new record, or new entry, new transaction on the blockchain.
>
> **[4:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=279)** At the same time, we change the other mappings to make sure all the data aligns.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=285)** So, that has the effect of decoupling the owner of a product and adding or changing the owner of that product to a new owner.
>
> **[4:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=295)** Now keep in mind, we still have a record of the old owner because it's blockchain.
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=299)** So by changing the data, we're really adding a new record to the end of the blockchain.
>
> **[5:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=304)** All right, let's continue.
>
> **[5:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=306)** And in fact, I'm going to back up just a little bit and point out something that I skimmed over earlier.
>
> **[5:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=311)** Notice that newOwner has a modifier.
>
> **[5:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=317)** This is a predefined modifier.
>
> **[5:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=320)** It was defined a little bit above here, back on line 75.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=324)** We created a modifier called onlyOwner, and it does one thing only.
>
> **[5:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=330)** We require that the message sender is equal to the current product's owner.
>
> **[5:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=336)** A modifier has to end with a special character sequence, _; to operate as a modifier.
>
> **[5:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=342)** So it looks like a function, but it's actually intended to be added into the definition of a function.
>
> **[5:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=348)** What this basically does is it says that this function newOwner can only run if the modifier true, which basically means that only the owner of this product ID can run the newOwner.
>
> **[6:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=365)** So, nobody can grab a product away from an owner, a new owner is the only one that can transfer it to the subsequent owner.
>
> **[6:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=374)** All right, three more functions.
>
> **[6:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=376)** getProvenance simply returns the productTrack of a product ID.
>
> **[6:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=382)** getOwnership returns the current owner of a particular product.
>
> **[6:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=390)** And we do this by creating a local copy of an ownership structure.
>
> **[6:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=397)** So we say, ownership is going to exist as the variable r, which lives in memory, and we're going to assign it the ownership's entry for regId.
>
> **[6:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=408)** Once we have our hands on that data, then we simply return.
>
> **[6:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=411)** Remember, we called the variable r, so we're going to r.productId, r.ownerId, r.productOwner, and timestamp.
>
> **[7:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=420)** So these last two functions, what they do is they return provenance and ownership information.
>
> **[7:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=425)** And really all we're doing is we're reaching into the blockchain, we're fetching either a list of ownerships for the first one, or a specific ownership value, and just return that back to the caller.
>
> **[7:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=437)** All right, one last function.
>
> **[7:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=439)** That'll cover supply chain.
>
> **[7:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=441)** In this last function, this is the authenticateParticipant.
>
> **[7:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=444)** So what we can do is, before we allow a participant to do anything, we can authenticate that it's valid.
>
> **[7:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=451)** And this is a very simple and not very secure function.
>
> **[7:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=454)** It just shows that we are comparing participantType to the _utype, _uname, and password.
>
> **[7:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=463)** So, basically we look up a participant and make sure that the supplied user, password, and type all match what we have stored, and if they match, then we return the true value.
>
> **[7:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=475)** Once again, this is not very secure.
>
> **[7:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=477)** This just shows you that this is the structure for an authenticate process.
>
> **[8:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=481)** You'd really want to do something a little bit more secret and secure to determine whether there's a match or not.
>
> **[8:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/supply-chain-smart-contract-functions-part-2?u=76281980&t=488)** This pretty much covers up, or covers, all of the functions that are necessary to make a bare bones supply chain application, or at least the smart contract for the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (6), [[Microsoft Products|Products]] (2)
> **Code Identifiers:** productowner (3), newowner (3), ownership_id (2), participanttype (2), productid (2)
> **Definitions:** is a  (9), basically means (1)
> **CLI Commands:** make (5)
> **Warnings:** keep in mind (1)
> **Speakers:** - all (1)

#### [Using events](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=0)** - Okay, so when we start looking at [[Solidity]] and the way we write smart contract code.
>
> **[0:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=6)** If you're really used to traditional coding you may look at some of this stuff and go this is really weird.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=12)** Why are you doing it this way?
>
> **[0:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=14)** Hopefully there's a good answer for every one of those questions.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=18)** And one of those deals with events.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=21)** You may look at it and ask why do we need events?
>
> **[0:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=24)** I've used them other places, but I'm not really sure where they fit.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=28)** Well that's because it solves one of the several issues of [[Smart Contracts]].
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=34)** Remember this smart contract code runs on each EVM, which is on a node.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=40)** It's essentially server side code.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=43)** You have a client that interacts with the EVM, but the client is going to be on a mobile device or a web browser or somewhere else.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=52)** Smart contract code is not on the client.
>
> **[0:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=56)** So now we've got a little bit of an asynchronous jive going on here, where we have things that happen on the server side.
>
> **[1:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=64)** We have to communicate that back out to the client side.
>
> **[1:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=68)** Also keep in mind, that smart contracts don't just run willy nilly.
>
> **[1:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=75)** They are only called by a client or some other smart contract.
>
> **[1:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=81)** So, when we look at this concept of server side code.
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=84)** Server side code, as it's an operating, it just listens for requests from clients.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=91)** And really that's not entirely true.
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=94)** The EVM listens for requests from clients and based on this request from a client will then invoke the smart contract code.
>
> **[1:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=103)** So when the EVM requests or received a request, the server side code invokes the function and responds.
>
> **[1:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=110)** So all requests originate with the client.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=114)** So if something happens on the server, which is actually in the EVM.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=119)** How do you communicate that out?
>
> **[2:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=122)** For example, if I change the ownership of a product from one to another.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=129)** I need to be able to communicate that out because somebody may need to know that information.
>
> **[2:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=135)** That's where events come into play.
>
> **[2:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=137)** And we start looking at event driven programming.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=141)** Event driven programming is basically responding to things that happen somewhere else.
>
> **[2:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=147)** Here's an example.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=148)** Let's assume that we are looking at, let's say a [[Microsoft Word|Word]] processor.
>
> **[2:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=154)** If you think about it and you launch [[Microsoft Word]], once you launch the program, it just sits there.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=159)** It doesn't do anything, all right.
>
> **[2:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=160)** It waits for you to do something.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=162)** The first thing you probably going to do is you're going to start typing.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=166)** So the program basically echoes what you're typing.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=169)** Well at some point you might want to save that.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=172)** Well, how do you tell Microsoft Word to save my work?
>
> **[2:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=176)** One way is you can press the control S keys.
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=179)** If you press control S Microsoft Word saves what you've typed.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=184)** How does he do that?
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=185)** Basically he's in an event driven model.
>
> **[3:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=191)** Which basically means I'm going to listen, I being Word.
>
> **[3:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=195)** I'm going to listen to certain things from the keyboard.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=199)** And so there's a whole long list of keystrokes that he's looking for.
>
> **[3:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=203)** If you press the keystroke F, he's just going to echo that off.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=207)** But if you press control and S, he's listening to that.
>
> **[3:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=212)** And he says, ah, I see that special keystroke.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=214)** That means go run the save function.
>
> **[3:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=217)** And he saves and then comes back.
>
> **[3:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=219)** So that's the whole concept of event driven programming.
>
> **[3:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=223)** You listen or your program listens for things and waits for the events to occur.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=229)** That's what we do in a smart contract type of environment.
>
> **[3:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=233)** The clients are going to be listening for events.
>
> **[3:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=237)** And the smart contract code is going to be creating and in fact, what we do is we call it emitting events.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=245)** So we emit the event.
>
> **[4:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=246)** We basically say, hey, this happened.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=249)** So an example of how this all works, it's called the publish and subscribe model.
>
> **[4:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=254)** It's very much like old school getting a newspaper.
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=259)** When you wanted to get a newspaper, you could go to buy one every day or you could subscribe to that newspaper.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=266)** If you subscribed to the newspaper, then every day the newspaper is published it comes to your house.
>
> **[4:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=273)** But later on, if you decide I don't want it anymore, you could drop your subscription.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=277)** The newspaper still publishes the newspaper every day.
>
> **[4:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=281)** You just don't get it because you're not paying attention anymore.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=284)** That's the idea behind publish and subscribe.
>
> **[4:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=287)** The publisher always publishes whether anybody's listening or not.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=291)** Now of course in newspapers if everybody drops their subscription, then they're going to go out of business.
>
> **[4:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=296)** But you get the idea.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=298)** That's what publish and subscribe means.
>
> **[5:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=300)** So how do we do this in a smart contract environment?
>
> **[5:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=304)** It's really easy.
>
> **[5:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=305)** It's easy as one, two, three.
>
> **[5:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=307)** All you do, number one, you define the event.
>
> **[5:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=310)** So defining an event is simply a matter of giving it a name and saying what happens when this event occurs.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=318)** In reality, what you do is you give it a name and you specify what type of data is going to be sent with the event, all right.
>
> **[5:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=326)** So you get to do more than just simply saying, hey this happened, you can pass data with it.
>
> **[5:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=331)** Number two, you trigger the event.
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=334)** So this is the smart contract code that will basically say, hey, this event just occurred.
>
> **[5:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=340)** We use the statement emit to emit an event.
>
> **[5:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=345)** And that basically triggers the event.
>
> **[5:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=347)** Step number three.
>
> **[5:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=348)** Well, we don't care what happens.
>
> **[5:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=350)** Step number three, that's up to the client.
>
> **[5:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=353)** The client should be listening for specific events and when they occur, they do something with it.
>
> **[5:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=359)** So I can teach you how to do number one and number two, but step number three is client stuff.
>
> **[6:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=365)** We're going to talk about it later, but we're not going to get into it right this moment.
>
> **[6:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=369)** All right.
>
> **[6:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/using-events?u=76281980&t=370)** So, that's the basis of how we handle events in Solidity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word]] (3), [[Solidity]] (2), [[Smart Contracts]] (2), [[Microsoft Word|Word]] (2)
> **Env Vars:** evm (5)
> **CLI Commands:** node (1), go run (1)
> **UI Navigation:** go to (1)
> **Definitions:** basically means (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - okay (1)

#### [Implementing events](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=0)** - All right. So how do we implement events in [[Solidity]].
>
> **[0:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=4)** Let's go back and look at some code for both the ERC-20 token interface, and the supply chain smart contract.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=12)** Now in the ERC-20 token, we're going to see two events defined, one for transfer, one for approval.
>
> **[0:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=19)** And on the other side in supply chain, we just simply have a transfer of ownership.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=23)** So let's go take a look at each one of those.
>
> **[0:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=26)** All right, so first we see in our ERC-20 interface, smart contract, we have two events down at the bottom.
>
> **[0:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=35)** We have an event transfer and an event approval.
>
> **[0:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=39)** And we see that the data we have for the transfer, we're going to send the from, the to, and the number of [[Tokens]].
>
> **[0:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=46)** For approval, we send back, or we return to, whoever's listening, the token owners address, the spenders address, and the number of tokens.
>
> **[0:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=59)** If we look at supply chain, we have defined one event right here, it's hard to see line 36, right there, transfer ownership.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=69)** and we pass back the product ID, so that's step one.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=73)** All we have to do is define the actual events and we simply give each event a name, and we tell it what data we're going to be passing back when we trigger the event.
>
> **[1:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=86)** Step number two is to actually trigger the event in your code.
>
> **[1:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=89)** Once you set it up, then you're ready to fire it or to trigger it.
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=93)** And we use the emit statement and Solidity to trigger an event.
>
> **[1:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=98)** And it's very much like actually calling a function.
>
> **[1:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=100)** You tell Solidity what event to trigger, and provide the parameter values in line.
>
> **[1:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=106)** Let's see how that works.
>
> **[1:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=108)** So since we're still in supply chain, let's start there.
>
> **[1:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=111)** When do we care, transfer ownership.
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=114)** My bet, it's going to be in the new owner function.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=119)** And sure enough, if we scroll down to the new owner function, after we successfully transfer ownership, we emit, transfer ownership, and we pass product ID.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=134)** And notice we do it three times, because we only want to do it inside a successful match.
>
> **[2:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=140)** Only if we actually do transfer the ownership, do we emit transfer ownership.
>
> **[2:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=145)** So this means that anyone on the outside, i.e. a client that is subscribed to the transfer ownership event, will be waiting for it and listening for it, and when that fires, they say, yes, this happened, and here's the product ID where the transfer of ownership has occurred.
>
> **[2:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=163)** Then the client can do whatever they want to with it.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=166)** 'Cause it's a simple matter of passing this message, that's really all it is.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=170)** Let's take a quick look at the token code, and see how we trigger events on that side.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=177)** If we go over to the ER-20 interface, that's only the definition, we have to look into ERC-20 token to find where we trigger these.
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=188)** So if I scroll down to the first emit, there we go, here's one right here, transfer.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=194)** So after we transfer tokens from the sender to a specified address, we emit the transfer saying, hey, I sent this many tokens from the message sender to that target.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=211)** We have the same event in the transfer from.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=214)** And here we're just saying, hey, I've transferred some value from one address to another.
>
> **[3:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=221)** And if we scroll through, we're going to find here's our emit approval event.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=226)** And that pretty much covers all of the events.
>
> **[3:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=229)** So we see it's really as easy as 1, 2, 3.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=231)** In fact, on the smart contract side, it's easy as 1,2.
>
> **[3:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=236)** All we have to do is define the event, and then emit or trigger the event whenever we want to alert the outside world that something has happened.
>
> **[4:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=245)** We have no responsibility as to who receives those events.
>
> **[4:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=249)** We don't care, we're simply alerting the outside world.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=253)** And if somebody is listening, they'll respond.
>
> **[4:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=255)** If not, we still emit the event and that's okay.
>
> **[4:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=259)** So that's how Solidity handles the round trip and communication with the client side.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-events?u=76281980&t=266)** We simply send out notifications and hope that somebody on the other side is listening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Solidity]] (4), [[Tokens]] (4)
> **Env Vars:** erc (4)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (2)
> **Definitions:** means that (1)
> **Speakers:** - all (1)

#### [More on ownership](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=1)** - One of the nice features of [[Blockchain]] in general, is the fact that every action has an owner.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=7)** There is this very very clear definition of ownership of things that occur.
>
> **[0:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=12)** Ownership of actions, ownership of data.
>
> **[0:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=15)** So you can trace things back to the original account.
>
> **[0:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=18)** Now I'm sure you've heard that blockchain applications can be anonymous.
>
> **[0:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=23)** Anonymous just basically means that the account may not be easy to associate with the real world identification.
>
> **[0:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=31)** So that linkage may not be there, but within the blockchain world, everything that happens has an owner.
>
> **[0:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=40)** Every time that you invoke smart functionality or smart contract functionality, there is an owner, the owner's address is associated with that.
>
> **[0:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=50)** And so what we get in the security world is called nonrepudiation.
>
> **[0:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=54)** Nonrepudiation just simply means that every action that occurs, can be attributed with one account.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=63)** Alright, so, how does [[Ethereum]] handle this, and how can we leverage it?
>
> **[1:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=70)** In some cases, we want to provide functionality that has higher authority and more capability to data owners.
>
> **[1:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=78)** So if you think about this, who would own, let's say a product in our supply chain?
>
> **[1:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=84)** The original owner is probably going to be the producer.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=87)** Let's assume that we're in a manufacturing supply chain.
>
> **[1:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=90)** So the person or the entity that owns the product in the very beginning is the manufacturer.
>
> **[1:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=96)** If we're talking about an agricultural product or supply chain, we're dealing with the farmer, the producer.
>
> **[1:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=102)** So the initial owner is the one that creates the product to start with.
>
> **[1:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=107)** Then of course, as we move down the supply chain, we change the owner to the carrier, to the warehouser and so on and so forth.
>
> **[1:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=115)** But at each point there is this notion of who the owner is.
>
> **[1:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=119)** And the owner is the address of the calling or the person who called the function that changes the owner.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=128)** See how that works.
>
> **[2:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=129)** So if you create an object or create data such as creating a product, you have to call a function or invoke a function to do that.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=138)** Well, you're the caller.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=139)** You are the one that invoked it.
>
> **[2:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=141)** So your address becomes the owner.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=143)** Then if you choose to change to another entity, another participant in the supply chain, you have to call a function.
>
> **[2:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=151)** So when you call that function, you are the message sender or the owner, and you can then transfer ownership at that point.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=159)** So that makes it possible in the Ethereum world to restrict access to certain types of functionality, based on the ownership.
>
> **[2:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=169)** However, don't make the mistake of thinking that just restricting functionality to owners or to specific addresses makes it secure.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=178)** It's only one part of the puzzle.
>
> **[3:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=180)** A good security posture is always multi-layered.
>
> **[3:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=183)** Never depend on one particular strategy.
>
> **[3:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=186)** So how do we do this?
>
> **[3:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=188)** There's lots of ways that we can programmatically restrict functionality to the owner.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=194)** But one of the easiest ways is to use a modifier.
>
> **[3:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=197)** You've already seen this.
>
> **[3:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=199)** A modifier is kind of a lightweight function.
>
> **[3:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=202)** It is a function that doesn't operate exactly like a function, it's used as part of another function.
>
> **[3:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=209)** So a modifier is like an add-on functionality that helps us ensure certain things occur.
>
> **[3:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=214)** You've already seen it once, but let's take another look at what it might look like in real [[Solidity]] code.
>
> **[3:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=220)** Alright, let's take a look at the concept of owner first, before we look at the modifier.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=226)** So I'm looking at the erc20Token, smart contract code.
>
> **[3:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=232)** And if I scroll down just a little bit, here is our constructor.
>
> **[3:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=238)** And remember we talked about a constructor.
>
> **[4:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=240)** Whenever we create a new token, the constructor is a special function that fires or executes whenever we create this new object.
>
> **[4:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=250)** So it's basically a function that initializes everything.
>
> **[4:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=253)** And so the first thing we're going to do is when we create a new token, we're going to pass in an initial amount.
>
> **[4:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=260)** That is a number of initial token or coins we want to kind of pre-seed this token width.
>
> **[4:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=269)** So we're basically going to say, how many coins or how many [[Tokens]] are in the initial pool?
>
> **[4:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=274)** So let's say we create this with 5,000 tokens.
>
> **[4:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=278)** What happens is when we pass this in, we'd go into the actual constructor, and what our code does is it takes this initial amount that we passed in, and stores it in the balances of message.sender.
>
> **[4:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=292)** And remember message.sender, is the address of the account that invoked this function.
>
> **[4:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=299)** So in other words message.sender is the account that actually created the new token to start with.
>
> **[5:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=305)** So we're going to place all the initial tokens in that account's balances.
>
> **[5:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=311)** That way the owner can come in and then give his tokens away to somebody else by transferring them to another address.
>
> **[5:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=318)** So that's one way that we can invoke the ownership capability, by just referencing message.sender.
>
> **[5:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=325)** Alright, let's take a look at another way.
>
> **[5:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=328)** Let's go over to the supply chain solidity code, and here, if I scroll down a little bit further, here we see our modifier, line 75.
>
> **[5:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=339)** This is the modifier called onlyOwner.
>
> **[5:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=343)** OnlyOwner is a little tiny part of a function that just does one thing.
>
> **[5:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=350)** It says require message sender is equal to the current product owner.
>
> **[5:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=356)** What this does is it basically says it's only going to execute, if you're trying to do something with a product that you own, you being message sender, the one that fired this.
>
> **[6:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=367)** And this little underscore, semi-colon is necessary, and what that does is it tell solidity that this is a modifier, so execute all of the code in the beginning of the modifier, and then afterwards, go ahead and continue executing the code in the function that this is modifying.
>
> **[6:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=388)** Okay, so what does all that mean?
>
> **[6:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=390)** Well, let's move back to newOwner.
>
> **[6:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=396)** NewOwner is a function that moves a product from one owner to another.
>
> **[6:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=402)** So it reassigns the owner.
>
> **[6:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=404)** And we want to restrict this so that only the [[Microsoft Products|products]] current owner can run this.
>
> **[6:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=408)** And we do that by adding this little modifier right there in the function header.
>
> **[6:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=415)** So we basically say I'm going to do all this cool stuff, as long as onlyOwner is true.
>
> **[7:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=421)** What does onlyOwner do?
>
> **[7:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=423)** OnlyOwner fires this modifier to say, this is only valid if the current message sender is the current products owner.
>
> **[7:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=432)** And that has the effect of only allowing newOwner to execute if the current owner is the current product owner.
>
> **[7:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=444)** So that's just one way of limiting the functionality.
>
> **[7:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=448)** So those are a couple of ways in solidity code, and it's a little convoluted at first when you kind of look at the pieces together, but the point is that you can use this message.sender to know what account is executing the functionality that you're running right now in your code, and you can make decisions based on whoever is running the code.
>
> **[7:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=471)** You can either allow them to run the code, or deny them the ability to execute the code, based on whether they are the right owner or they're just trying to do something to somebody else's product.
>
> **[8:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=482)** So you get the ability to restrict functionality based on who called the function.
>
> **[8:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/more-on-ownership?u=76281980&t=487)** That's the gist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Solidity]] (4), [[Tokens]] (4), [[Blockchain]] (3), [[Ethereum]] (2), [[Microsoft Products|Products]] (2)
> **Definitions:** is a  (6), basically means (1), is an  (1), is called (1), in other words (1)
> **Code Identifiers:** onlyowner (3), newowner (2), erc20token (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (2)
> **Cross-References:** we talked about (1)
> **Tools:** notion (1)
> **Analogies:** such as (1)

#### [Designing for security](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=0)** - One of the additional many aspects of designing good smart contract code is that of security.
>
> **[0:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=8)** You've got to consider security from the very beginning.
>
> **[0:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=11)** Now we're kind of late in the game to start talking about it, but it is something that you always have to be aware of.
>
> **[0:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=16)** Because smart contract code can be just as insecure as any other software.
>
> **[0:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=21)** If you've heard that blockchains are secure, that's not entirely true.
>
> **[0:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=27)** They can be very secure, but you've got to pay attention to security.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=32)** You have to consider this security aspect of the data and the functionality and who's executing what from the very beginning.
>
> **[0:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=41)** If you try to tack it on later, it's going to be more difficult.
>
> **[0:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=44)** It's going to cost you more in time and resources.
>
> **[0:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=48)** So always consider security at the very beginning.
>
> **[0:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=51)** And as I alluded to earlier, never just use or never depend on a single security control or security mechanism.
>
> **[1:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=60)** You always want to design multi-layer security.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=63)** It's called defense in depth to make sure that your code is as secure as possible.
>
> **[1:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=69)** So always have multiple layers of controls, of software, of even external controls that help your software remain as secure as possible.
>
> **[1:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=80)** Attackers are going to try to get in to your application, to your [[Blockchain]] data.
>
> **[1:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=85)** So you want to stop them and trip them up in as many ways that you possibly can.
>
> **[1:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=91)** So, where in the world do you start?
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=93)** Here's a really good resource that kind of introduces the concept of blockchain and [[Ethereum]] security.
>
> **[1:41](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=101)** So let's take a look at this great resource and it's a good read.
>
> **[1:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=105)** It'll take you a little while, but it's a great resource to start off with.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=109)** If we go to consensys.[github.io/smart-contract](https://github.io/smart-contract)
>
> **[1:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=114)** - best practices.
>
> **[1:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=116)** This shows us a list of [[Smart Contracts]] security best practices from the very beginning.
>
> **[2:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=123)** Where do you start?
>
> **[2:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=124)** We focus with on the general philosophy of smart contract security mindset.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=130)** I'm just going to follow this one link only.
>
> **[2:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=132)** And basically you read through this little, it's almost like a white paper in a way.
>
> **[2:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=138)** But you want to prepare for failure, rollout carefully, keep them simple, stay up to date, be aware of properties and so on and so forth.
>
> **[2:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=147)** I won't read through all of these.
>
> **[2:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=148)** This is a great resource.
>
> **[2:30](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=150)** However, I would recommend that you spend some time digging through at least the general philosophy.
>
> **[2:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=157)** And then you can start digging into some of the specifics of how you develop your application to be as secure as possible.
>
> **[2:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=165)** All right, let's take a quick look at just a few of the most common security mistakes when you're developing applications as smart contracts or smart contracts to support your [[Decentralized Applications (DApps)|decentralized applications]].
>
> **[2:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=179)** First off the deal or the issue of randomness can be a little bit problematic.
>
> **[3:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=185)** If you think about this other application environments.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=189)** allow you to generate and use random numbers all the time.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=194)** And it's very common to generate random numbers.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=198)** However, remember that smart contract code is code that must run the same on all the EVMs.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=207)** They have to be deterministic.
>
> **[3:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=208)** I've alluded to this fact a little bit earlier.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=211)** But if you write code that generates a random number locally and every EVM is generating a truly random number, that means the output could be different on different EVMs if you're depending on randomness.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=226)** That is tolerable if you're dealing with just in memory values.
>
> **[3:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=231)** However, if you generate a random number and then you create blockchain data that relies or derives from that random number, that means that each EVM could theoretically be trying to update their blockchain with different data.
>
> **[4:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=247)** Which of course violates the deterministic requirement.
>
> **[4:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=251)** So you want to avoid random numbers especially for blockchain related data.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=256)** All right, what about re-entrancy.
>
> **[4:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=258)** The call function within [[Solidity]] will forward all the received gas to the called function.
>
> **[4:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=266)** If your code allows a function to run multiple times before it changes the state data.
>
> **[4:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=272)** Then what could happen is you could allow multiple changes or multiple withdrawals because you're reentering the function and it can cause lots and lots of confusion.
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=284)** What you want to end up doing is always just update the state data before you transfer control to another function.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=291)** Don't allow the state data and transfer of control to be intermingled.
>
> **[4:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=297)** It's kind of an advanced programming concept to really consider.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=301)** But just make sure that you don't allow a function to be run multiple times without separating that updated to the state data.
>
> **[5:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=308)** Another mistake is pretty much a rookie mistake in any environment.
>
> **[5:12](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=312)** But it's absolutely applicable in smart contract programming.
>
> **[5:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=315)** And that is the failure to check for overflows and under flows.
>
> **[5:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=319)** And overflow is a variable that you have basically incremented to where it's bigger than you can store in the stated variable.
>
> **[5:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=331)** For example, let's assume that we create a uint8.
>
> **[5:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=335)** Well there's an upper limit to the number that you can store in a uint8.
>
> **[5:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=340)** And if you increment, let's say you go into a loop and an increment more than the maximum of your data type.
>
> **[5:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=348)** Then you're going to end up having a failure when you execute.
>
> **[5:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=352)** It's going to be a failure that you don't find until you test that boundary condition.
>
> **[5:56](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=356)** Likewise, what if you have a uint of any size and you decrement over and over.
>
> **[6:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=363)** In other words, you subtract one from the variable and what happens when it reaches zero and you try to decrement again.
>
> **[6:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=370)** That's a negative one.
>
> **[6:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=371)** Well, negative one is not a valid value for uint.
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=375)** Cause remember U is unsigned integer.
>
> **[6:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=378)** Which means that you can't have a negative.
>
> **[6:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=380)** So in that case, if you ever get to a negative number your code is going to crash.
>
> **[6:25](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=385)** And it's not just integers.
>
> **[6:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=386)** It's any data type when you try to store data that is bigger than the maximum or for numeric data, it's smaller than the minimum.
>
> **[6:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=395)** You end up with errors.
>
> **[6:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=396)** Those are runtime errors.
>
> **[6:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=398)** So you want to do two things.
>
> **[6:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=399)** Number one, you always want to test these boundary conditions.
>
> **[6:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=403)** We call them the maximum and minimum conditions, boundary conditions.
>
> **[6:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=408)** But even better than that, you want to make sure that every time you modify a value you test it's value to ensure that you haven't overflowed or under flowed it.
>
> **[7:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=420)** So you always want to test it in your code and only proceed if you have valid data.
>
> **[7:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=425)** Then of course you test it after deployment as well, or even before deployment.
>
> **[7:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=430)** So, you write good code to protect yourself and then you test to make sure that that code is doing exactly what it's supposed to be doing.
>
> **[7:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=437)** Another subtlety in solidity is that you can use the delegate call function.
>
> **[7:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=442)** The delegate call function allows a smart contract to execute a function from another smart contract.
>
> **[7:29](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=449)** When you start doing that and you will allow external functions and external entities run your functions.
>
> **[7:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=456)** What can happen is, your function if it modifies state data and you allow that function to be public or external so that it can be run by an external entity.
>
> **[7:47](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=467)** You're allowing an external entity to run a function that modifies state data.
>
> **[7:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=473)** And you could actually have some confusion as to who actually invoked that function.
>
> **[7:59](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=479)** Because it's invoked by one account that may then be invoked in another context.
>
> **[8:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=486)** So you want to try to avoid that.
>
> **[8:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=487)** Don't allow any of your public or external functions modify state data.
>
> **[8:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=493)** A better way to do it is to have a public or external function.
>
> **[8:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=498)** If you need to modify state data, then you call another local function that's private and that function modifies the state data.
>
> **[8:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=506)** That way you maintain the chain of traceability back to the original account.
>
> **[8:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=512)** So those are just a few ideas of mistakes that are fairly common and things you want to avoid.
>
> **[8:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=517)** Obviously there's lots more.
>
> **[8:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=519)** And the resource I showed you just a bit earlier will contain many more lists and lots of more reading material.
>
> **[8:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/designing-for-security?u=76281980&t=526)** It's an fascinating topic to pursue, but as something that you really need to be aware of so that you can write secure, smart contract code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (5), [[Smart Contracts]] (3), [[Solidity]] (2), [[Ethereum]] (1), [[GitHub]] (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (2), means that (2), in other words (1)
> **Warnings:** be aware (3)
> **Env Vars:** evm (2)
> **Speakers:** - one (1), - best (1)
> **URLs:** [github.io](https://github.io) (1)
> **Tools:** github (1)

#### [Implementing minimal functionality](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=0)** - So we've been through quite a bit of [[Solidity]] code.
>
> **[0:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=3)** There's a lot more to learn about the language and the environment.
>
> **[0:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=7)** But you've seen a lot so far.
>
> **[0:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=10)** Keep in mind that these example [[Smart Contracts]] were developed for instruction.
>
> **[0:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=17)** They're not real world ready for the big bad world, to run on a real [[Blockchain]].
>
> **[0:22](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=22)** They will run and it will have some functionality, but it's very minimal functionality.
>
> **[0:28](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=28)** Just basic functionality is what we have implemented so far.
>
> **[0:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=32)** The reason behind that is twofold.
>
> **[0:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=34)** Number one, if we made this fully featured, of course, it would be really complex and very hard to use as a basic teaching tool.
>
> **[0:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=43)** And secondly, I actually like to develop this way and my philosophy has always been, make it work, then make it work well.
>
> **[0:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=52)** The idea behind that is if you, for your own smart contracts, design everything that you need, go ahead and put in the function headers for all the functions that you're going to implement.
>
> **[1:03](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=63)** Then one by one, start implementing just the basic functionality, make them do just the basics and come back and make them more functional later.
>
> **[1:13](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=73)** Because if you get the core to work where it compiles well, and you're avoiding a lot of warnings and getting rid of all the errors at that point, then you can incrementally start introducing more complex code.
>
> **[1:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=87)** What I've seen other developers do is try to write it one time with everything built in.
>
> **[1:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=92)** And when that happens, you've got errors all over the place and errors tend to hide when you have very complex code.
>
> **[1:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=99)** So keep it simple, start coding with only the minimal functionality, add more functionality once you get the basics to work.
>
> **[1:49](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=109)** So that's what we've chosen to do.
>
> **[1:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=112)** And that's why you see if you read through the code and start running it, you may scratch your head going, well, why isn't this there?
>
> **[1:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=118)** Why didn't they add it this way?
>
> **[2:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=120)** Well again, it's because we wanted to keep it as simple as possible to demonstrate the features of solidity, to get you started.
>
> **[2:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=128)** Let's take a look at our code real quick.
>
> **[2:10](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=130)** All right, so here's supply chain smart contract as well.
>
> **[2:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=134)** You've seen this multiple times.
>
> **[2:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=136)** One thing that I haven't done yet, let's go ahead and compile this.
>
> **[2:19](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=139)** We're going to be compiling and deploying and doing lots more in the future here.
>
> **[2:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=143)** But if I just press F5.
>
> **[2:26](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=146)** Let me click somewhere in the context of the editor and press F5, that calls the compiler.
>
> **[2:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=152)** Now, what I want to see, is I want to see a clean compile.
>
> **[2:36](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=156)** You'll notice that it does say problems.
>
> **[2:38](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=158)** There's six of them.
>
> **[2:39](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=159)** Of course, this reminds me that I'm compiling with 5.8.
>
> **[2:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=162)** So if I click on problems, we see several things going.
>
> **[2:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=166)** Now, the good news is every problem is a warning.
>
> **[2:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=170)** We know that because it is yellow.
>
> **[2:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=172)** And most of these have to do with avoiding using the now, all right.
>
> **[2:57](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=177)** So let's just pick one.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=178)** I'm going to click on it.
>
> **[2:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=178)** And when I click on the warning or the error, it highlights that line of code.
>
> **[3:04](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=184)** So this is basically saying that when I'm in the function new owner, I'm going to transfer a product from one owner to another.
>
> **[3:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=194)** As I do this, I'm going to keep track of the timestamps.
>
> **[3:18](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=198)** So I'm going to assign the timestamp.
>
> **[3:20](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=200)** I'm going to take the value now, which is the current timestamp of the EVM.
>
> **[3:27](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=207)** And I'm going to apply that to the ownership structure.
>
> **[3:31](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=211)** Let me explain why that's bad and why it's not bad.
>
> **[3:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=215)** It is bad because in newer versions of the compiler, version five version of the compiler, the developers realized that now is not that granular.
>
> **[3:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=226)** In fact, it can be modified.
>
> **[3:48](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=228)** It can be, not hacked, but it can be altered by hackers.
>
> **[3:55](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=235)** So miners could affect it as well.
>
> **[3:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=238)** Anytime that you need very precise timing, basically anything within the range of 90 seconds or so.
>
> **[4:08](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=248)** You shouldn't use now, you should use something else because now is just a generic time, it's kind of sort of about now.
>
> **[4:16](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=256)** But if all you care about is being within a couple minutes of accurate, then it works just fine.
>
> **[4:23](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=263)** And for our example, all we care about is knowing the date and time that a product moved from one participant to another participant on the supply chain and within 90 seconds is good enough at this level.
>
> **[4:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=275)** So we don't need more granularity.
>
> **[4:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=277)** The oldest version or the original version of this program.
>
> **[4:40](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=280)** I wrote under the version four solidity compiler, and back then it was fine.
>
> **[4:45](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=285)** He didn't care.
>
> **[4:46](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=286)** Now we're in version five, he cares and he's saying, yeah, maybe you shouldn't do that.
>
> **[4:51](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=291)** But again, this is a warning.
>
> **[4:53](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=293)** And it's one that I can ignore.
>
> **[4:54](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=294)** Those are the kinds of issues that you want to resolve.
>
> **[4:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=298)** Write your code very simply, compile it.
>
> **[5:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=301)** See what's working and what's not from a syntax standpoint.
>
> **[5:05](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=305)** Fix it now.
>
> **[5:06](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=306)** And once you get clean compiles or you get warnings that you know are really okay.
>
> **[5:11](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=311)** At that point, you can start adding more complexity.
>
> **[5:14](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=314)** So in this entire chapter, we introduce supply chain and our supply chain project.
>
> **[5:21](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=321)** We introduced and discussed Dapps.
>
> **[5:24](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=324)** We talked about the data items and the functions in both the token and the supply chain smart contracts.
>
> **[5:32](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=332)** Then we went on to talk about events.
>
> **[5:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=334)** We talked about security and we wrapped up the whole philosophy of how we should approach developing our smart contacts, our smart contracts.
>
> **[5:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=344)** Okay, so next, what we're going to do is talk about how do we test these guys, how we deploy them.
>
> **[5:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=350)** In fact, we have to deploy first and then test.
>
> **[5:52](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=352)** And then what about logging errors or logging just regular processing events.
>
> **[5:58](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=358)** How do we handle those errors and what if we run into bugs?
>
> **[6:02](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-8-supply-chain-smart-contract-dapp/implementing-minimal-functionality?u=76281980&t=362)** So we've got a lot more to talk about, but you've got a good foundation, for developing your very first suite of smart contracts in [[Ethereum]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Smart Contracts]] (5), [[Solidity]] (3), [[Blockchain]] (1), [[Ethereum]] (1)
> **CLI Commands:** make (4)
> **Warnings:** warning (3), keep in mind (1)
> **UI Navigation:** click on (3)
> **Cross-References:** we talked about (2)
> **Definitions:** is a  (2)
> **Env Vars:** evm (1)
> **Versions:** 5.8 (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Smart Contracts
- Blockchain
- Ethereum
- Decentralized Applications (DApps)

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 7 Smart Contracts]] | **8 of 11** | [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 7 Smart Contracts]] | **8 of 14** | [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Blockchain, Ethereum, Smart Contracts
- [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] — Blockchain, Ethereum

---

[↑ Back to top](#)