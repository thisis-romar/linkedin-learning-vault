---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-an-ethereum-blockchain-app-5-your-ethereum-wallet
url: "https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet"
duration_minutes: 28
duration: 28m
level: Intermediate
updated: 8/11/2021
learners: 5294
skills:
  - Cryptocurrency
  - Blockchain
  - Ethereum
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGBvDFwZAIuUw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628525289625?e=2147483647&amp;v=beta&amp;t=tGJ9L6KDmUkL2Fayo3NommePGI325C9QvppV_YAfOVA"
linkedin_topic: Data Science
learning_paths:
  - '[[Build an Ethereum Blockchain App]]'
  - '[[Become a Blockchain Developer]]'
prev_courses:
  - '[[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]]'
  - '[[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]]'
next_courses:
  - '[[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]]'
  - '[[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]]'
path_nav: '[{"path":"Build an Ethereum Blockchain App","position":5,"total":11,"prev":"Building an Ethereum Blockchain App- 4 Ethereum Development Tools","next":"Building an Ethereum Blockchain App- 6 Building Your First Ethereum App"},{"path":"Become a Blockchain Developer","position":5,"total":14,"prev":"Building an Ethereum Blockchain App- 4 Ethereum Development Tools","next":"Building an Ethereum Blockchain App- 6 Building Your First Ethereum App"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/security
  - skill/cryptocurrency
  - skill/blockchain
  - skill/ethereum
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Building%20an%20Ethereum%20Blockchain%20App-%205%20Your%20Ethereum%20Wallet.md)

![Building an Ethereum Blockchain App: 5 Your Ethereum Wallet](https://media.licdn.com/dms/image/v2/C560DAQGBvDFwZAIuUw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1628525289625?e=2147483647&amp;v=beta&amp;t=tGJ9L6KDmUkL2Fayo3NommePGI325C9QvppV_YAfOVA)

# Building an Ethereum Blockchain App: 5 Your Ethereum Wallet

> Have you wondered how blockchain can help you create applications that offer greater transparency, traceability, efficiency, and resilience while lowering your costs? This course, fifth in a series of eleven, goes in-depth on how to create an Ethereum wallet. Instructor Michael Solomon first explains what an Ethereum wallet is and how it keeps your cryptoassets safe. Then he goes over types of Eth

> [LinkedIn Learning](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet) | 28m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Your Ethereum Wallet**](#1-your-ethereum-wallet) (5 videos)
  - [What is an Ethereum wallet?](#what-is-an-ethereum-wallet)
  - [Types of Ethereum wallets](#types-of-ethereum-wallets)
  - [Web and desktop wallets](#web-and-desktop-wallets)
  - [Mobile, hardware, and paper wallets](#mobile-hardware-and-paper-wallets)
  - [Installing MetaMask](#installing-metamask)

### 1. Your Ethereum Wallet

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an Ethereum wallet?](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/what-is-an-ethereum-wallet?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/what-is-an-ethereum-wallet?u=76281980&t=1)** - In previous episodes, you've learned all about [[Blockchain]], now you know about [[Ethereum]], and you've even set up your own development environment. But we're not quite ready to start writing code. There's one more thing. We need an Ethereum account. The account is basically where you create the account and you get your keys. And it's the private key that's really the most important part. Of course, the public key's important as well. But when we get these, we can't just hold 'em in our hands. We've got to put 'em somewhere. And that place is an Ethereum wallet. Why is it important? Because the only way that you can access your crypto-assets is with your private key. So the private key, the thing that we store in our wallet, isn't the actual value of the crypto-assets but it allows us to reach down and read things from the blockchain itself. So the key actually gives us access to our digital currency or anything else that we're going to store on this blockchain. It's really important that we securely store these private keys because without the key, you really can't do anything. You can't buy crypto-assets, you can't sell crypto-assets, you can't trade 'em. And when I say crypto-assets, I mean [[Cryptocurrency]] or anything else on the blockchain. We're going to learn about lots of different crypto-assets. I mean, you can even store crypto-kitties and crypto-zombies, believe it or not. You can store lots of things on the Ethereum blockchain. But in order to interact with the blockchain, to put them on the chain and read them from the blockchain, you need access to your private keys.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/what-is-an-ethereum-wallet?u=76281980&t=97)** An Ethereum wallet is the mechanism that stores these and makes those keys available to you so then you can read from and write to the Ethereum blockchain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (8), [[Ethereum]] (6), [[Cryptocurrency]] (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### [Types of Ethereum wallets](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/types-of-ethereum-wallets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/types-of-ethereum-wallets?u=76281980&t=1)** - When you're ready to choose the type of [[Ethereum]] wallet that you want to use to store your private keys, there are two basic considerations. Number one is security, and number two is convenience. Different types of wallets are more or less convenient, but typically the more convenient they are, the less secure and vice versa. Just like a real wallet, you've got leather wallets, you've got plastic wallets, you've got fabric wallets. I mean, you can even have a duct tape wallet. I've seen those before. You have different choices for your Ethereum wallets as well. So let's take a look at several different choices. First off you can have either a hot or cold wallet. Remember the whole purpose of an Ethereum wallet is to store your private keys. You may have multiple accounts, so you might have multiple keys. A hot wallet is a wallet that stores the keys online. So typically you're going to subscribe to some service, and your keys will be stored by that service. The advantage is it's easy to access from anywhere, so you can use your mobile device, you can use a web browser, anywhere you want, you can get to your keys very easily. But it's convenient, that means it's probably a little less secure. The con is that a hacked account makes your keys available for anywhere in the world. So it could be a little bit easier for attackers to be able to compromise your keys if they're being stored online. So the alternative is a cold wallet, obviously hot and cold. A cold wallet basically says that your keys are not being stored online. They're being stored offline. The advantage is it's more secure,
>
> **[1:34](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/types-of-ethereum-wallets?u=76281980&t=94)** because what happens is you store your own keys on a device, or maybe you've got a piece of paper, but you store your own keys locally. However, it's less convenient and it's harder to protect, even though it's more secure, it may be harder to protect. Because what happens if you take your key, you put it in a text file, which you don't want to do, and you put it on a USB key? If you drop that, you lose it. Then you've lost your keys, and you can't get to your crypto assets. So you have to kind of balance the two, hot versus cold. All right, so let's assume that we want to use a software wallet because we don't have to use software, but that's one of the more convenient ways to store our keys. There's several different types of client software we can use to store our keys. First is a web wallet. A web wallet is a wallet that runs on a web browser. So that's typically going to be a centralized version. In many cases, you're going to use this as a hot wallet so that your keys will be stored on the web. Although you can have your local keys, but web access. So the web wallet is one that runs in a web browser. You also can have a desktop wallet. A desktop wallet is one that actually runs on your personal computer, and it can be, any operating system is fine. [[Linux]], Mac, [[Windows]] obviously. Any computer that you run, if you have software installed on that computer that manages your keys, that would be a desktop wallet, or you could have a mobile wallet. A mobile wallet is software that runs on a smartphone or a tablet.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/types-of-ethereum-wallets?u=76281980&t=189)** So you can actually have this software manage your keys, running on different pieces of [[Hardware]]. Speaking of hardware, you can actually have a hardware wallet. Now, a hardware wallet is basically a device. It looks kind of like a USB key in some cases, depending on what kind you get, and you store your keys securely in the chip in the actual device. So you're storing them physically on a device, which means if you lose the device, then you lose your keys. However, if you lose your device, it's very difficult for someone else to access them, because there's layers of access controls, where you can get to your keys conveniently, but no one else is supposed to be able to do that. Hopefully no one else can get to them, because you have good strong passwords to get to the keys. The way that we would use these, it's a little less convenient, but if you ever want to trade [[Cryptocurrency]] or interact with the [[Blockchain]], you would have to take the device, put it in a USB port, and let the software access your keys from the physical device. So it's very secure, but a little bit less convenient to use. The last type of wallet is the most simple type of wallet, and you would think the most secure, and that's a paper wallet. And I don't mean that you take a wallet or a piece of paper and form it into a wallet. Literally, when you create your account, you can print your key on a piece of paper at that point, fold it up, put in your pocket, and that's it. That is your wallet. That is your key that you carry with you. The advantage is that nobody can find it online. And for anyone to steal your key,
>
> **[4:44](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/types-of-ethereum-wallets?u=76281980&t=284)** they have to physically take the piece of paper away from you. The disadvantage is that if you lose the piece of paper, you lose your key. And if you lose your key, you lose access to anything on the blockchain. There's no backup. So it's very important that if you use a paper wallet, that you probably want to make two copies and store one very securely in someplace that no one else can find, but if you properly handle it, a paper wallet is the most secure, because again, no one online can grab that piece of paper. All right, so there's lots of choices there. Remember you've got a hot wallet, online keys, a cold wallet, offline keys. And then you can choose software, hardware or paper. So the choice is yours. Do you have a lot of crypto assets and you want it to be very secure, or are you more interested in the ease of use? It's your choice, but choose the right wallet that best serves your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (5), [[Ethereum]] (3), [[Blockchain]] (2), [[Linux]] (1), [[Windows]] (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** usb (3)
> **Analogies:** just like (1), kind of like (1)
> **Speakers:** - when (1)

#### [Web and desktop wallets](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/web-and-desktop-wallets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/web-and-desktop-wallets?u=76281980&t=0)** - Having a good understanding of the types of [[Ethereum]] wallets is a good start, but unfortunately that's not enough. There are multiple offerings of each type. So there's a long list of wallets that you really could look through if you want to evaluate all of them, let's take a look at a few examples of each type of Ethereum wallet. You don't have to choose just one. You can choose a [[Hardware]] wallet and a mobile wallet. If you decide to do it that way, choose the wallets that best suit your needs. So now let's take a look at each one. Remember these lists are not exhaustive. These are just a few samples to get you started. So here are three examples of popular Web wallets. First off, there's My Ether Wallet. This is an open-source wallet. So you can actually download the code and make changes if you decide to do that, it's the most popular Ethereum Web wallet, but it has been hacked before, and it may be vulnerable to [[Phishing]] attacks. So if you have a large amount of [[Cryptocurrency]] and you are security conscious, you might not want to go there. Another example is Coinbase. Now you may think Coinbase is an exchange, right? Not a wallet, well it's actually both. Coinbase is an exchange, but they also provide you a wallet capability. So you can actually store your keys there, which is really convenient. But again, convenience does not always mean security and Coinbase has a slightly limited number of different token types or coin types that you can actually exchange. Another example would be Guarda. Garda is a cold wallet,
>
> **[1:33](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/web-and-desktop-wallets?u=76281980&t=93)** that supports many different types of cryptocurrencies. So that might be an option for you as well. So those are three options. Let's take a quick look at each one of those websites, just to show you what they would look like. Here's MyEtherWallet, or an MEW. Now they recently changed to a new authentication mechanism. So when you click on create a new wallet, you have to go through the steps to securely create your wallet, and you'll have to create a passphrase and your password. So there's a whole process to it, but the idea is to be as secure as possible. Coinbase is also another option, as I mentioned, that is also an exchange. So we see on the landing page for Coinbase, we see a list of the top cryptocurrencies that they sell and you would sign in or actually get started either way to create an account. And from that, you would be able to create different types of accounts. And one of those would be a Ethereum, which would provide you the ability to store your keys on Coinbase, which would be your Ethereum wallet using Coinbase. And the last option is Guarda. Now if you plan to trade many different types of cryptocurrencies, many different types of [[Tokens]], this might be a good choice for you. Let's take a look at their website. Notice the Guarda wallet, again is a Web wallet that can be implemented both through a Web browser, and they have different platforms as well. And notice there's a Chrome Extension and you can implement this as a Desktop wallet as well. So Guarda is very flexible solution and if you,
>
> **[3:07](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/web-and-desktop-wallets?u=76281980&t=187)** you like their features might be a good choice for you. Our next type of software wallet is the Desktop Wallet. So if you like having software on your actual computer or device, then this may be the way to go. We can look at Exodus, Mist and MetaMask. And as with the previous types, there are differences and similarities with Exodus, it was the first one to offer multiple cryptocurrencies used to be you would get a wallet for a specific type of cryptocurrency, Exodus kind of leveled the playing field. And it's very visually appealing and very informative and easy to use. It is closed-source, which means you can't see the source code, but you know if you don't need to see the source code, that may be okay. The next choice is the official cold wallet from the same people that created Ethereum or wrote Ethereum in the first place and that is Mist. Now Mist is actually not only a wallet, but also a browser. It's a... a [[Blockchain]] browser. So it does a lot more than just wallet functionalities. However, it's a little bit less user-friendly than other types of wallets. And the last option is Metamask. You may not have heard of Metamask, but you soon will. We're going to come back later in the series and use Metamask as our own wallet. So obviously it's a pretty decent solution. If that's what we're choosing to use. In fact, it's partially funded by the Ethereum Foundation, which means it's part of the overall Ethereum ecosystem. One of the drawbacks, however,
>
> **[4:42](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/web-and-desktop-wallets?u=76281980&t=282)** is that it's only released as an extension to a Web browser. So it's not a full standalone desktop wallet. You actually have to have a Web browser, which almost everybody has anyway. So it shouldn't be that big of a deal. Let's go take a look at what these pages are going to look like for each one of these sample [[Microsoft Products|products]]. So first we had the Exodus product and like all the others, we're going to choose a download link. Once we download, we have to install the product and then we have desktop software to run so that we can then configure our account and store our keys. Notice that although Exodus is a Desktop wallet. It also interacts very conveniently with other Desktop Mobile and Hardware wallets. So you can have more than one type of wallet. And Exodus is nice it plays nice with other wallets as well. The official Ethereum wallet and Mist browser is a package that you can download. As I mentioned earlier, the Mist browser is a Blockchain browser, which allows you to interact with the blockchain, but it also includes this Ethereum wallet. It's a little bit less user-friendly, but it is one of the official wallets supported by Ethereum. And lastly is Metamask. We're going to come back later and install this one, but basically notice the nice little Fox that follows your mouse wherever you go. You just click on, 'Get the add on,' and it will add the 'Add on' to your browser. And then you'll have a pop-up that you can use to configure your accounts. So that's a brief sampling of software wallets. There's lots of other options we haven't touched on.
>
> **[6:17](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/web-and-desktop-wallets?u=76281980&t=377)** So look around, look at these, do some searching and see if you can find some other options and pick the one that best suits your needs. We're going to take this a little bit further, a little bit later, and we'll actually implement a couple of these to show you what it really looks like to create one of these wallets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (12), [[Blockchain]] (3), [[Hardware]] (2), [[Cryptocurrency]] (2), [[Phishing]] (1)
> **Definitions:** is a  (6), is an  (3)
> **Prerequisites:** install (2), configure (2)
> **Exercise Files:** source code (2), download the (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (2)
> **Env Vars:** mew (1)
> **Cross-References:** later in (1)

#### [Mobile, hardware, and paper wallets](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/mobile-hardware-and-paper-wallets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/mobile-hardware-and-paper-wallets?u=76281980&t=1)** - The next type of wallets is the mobile wallet. So if you like to be able to access your crypto assets using your smartphone or tablet this might be a way to go. The three that we've chosen to look at from this category are Jaxx, Coinomi, and Bread These three options are all cold wallets. Remember a cold wallet is one that stores your keys locally, or stores yours keys not online. Which basically means you're going to carry your smartphone around, you're going to have your keys with you right there, so you just pull it out of your pocket whenever you need it. You can either scan a code, or you can actually type in an address if you want to transfer something, but you've got your keys right with you. These [[Microsoft Products|products]] are very, very similar, the first two Jaxx and Coinomi use central servers whereas Bread does not use a central server, so that's really the only difference. Most of these are similar, and the way you choose between the three, or the many other ones that are available is simply looking at the user interface, what works well for you, and of course you want to look at the ratings, and make sure that other people have good experiences with it as well. Let's take a quick look at what each of these might look like. So here's Jaxx, it's actually the Jaxx Liberty product. And the first thing you would do is you would download it, and install it on your mobile device, and you can see a little bit of an idea on the screenshot. But until you actually use the product you won't really know how it feels to use it. So I'd recommend if you like the way it looks download it, and have a go at it, and see if it works well for you.
>
> **[1:37](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/mobile-hardware-and-paper-wallets?u=76281980&t=97)** Coinomi is another option, and you can get a better view here of what the user interface is going to look like. It's very clean, straightforward, and you can see one of the thing that keeps popping up here is a QR code. QR codes are very common to use when it comes to transferring cryptoassets and [[Cryptocurrency]]. So many cases what will happen is you will create a QR code that represents your key, and there it is, you can use that to transfer funds back and forth between cryptocurrency. That makes it very easy for your mobile app to simply snap a picture of that QR code, and that provides the linkage. We're going to see that later on, but just wanted to point that out since it popped up here on the screen. And then lastly is BRD or Bread. It's very simple, but it's a secure on ramp as they say to Bitcoin, [[Ethereum]] and other digital currencies. So it's a nice colorful user interface, and if you like that then try it out. The next time wallet is the [[Hardware]] wallet, and these are different than the previous wallets we've already looked at because previous wallets are all based in software of some type. A hardware wallet is actually a physical device. The most popular three that are out there are the Ledger Nano series, the Trezor series, and the KeepKey series. Each of the three have different pros and cons, and they have different price points. So what you want to do is look at each one, and determine what best suits your needs. Do you need a very, very small device?
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/mobile-hardware-and-paper-wallets?u=76281980&t=189)** Is a larger device okay? How many different types of cryptocurrency might you be trading? So lots of questions like that. Ledger Nano X is the latest version that they've released, and it's the most popular. It's very small, a very easy and clean interface. Costs depending on the model the cost can go from a low over a hundred to a little under a hundred dollars. And again it depends on which model you're looking at. It does require client software to control your crypto assets. The Trezor is another option. It's a big competitor to the Ledger series. It has a very solid reputation, and a little bit easy, not necessarily easier, but typically their user interface, or the screen that you look at has a little bit more information. But again, the models change all the time. And then lastly is the KeepKey. KeepKey is another competitor to both the Ledger and Trezor series although it tends to have a slightly larger footprint. So if you'd want something that's a little bit larger the screen is a little bit larger as well you might want to go there. Let's take a look at each one of their websites just to get a feel for what each one of these devices might look like. So here's the Ledger Nano X, and notice that if you navigate through their website there's multiple versions or multiple options, but we're going to look at the Nano X. It looks a lot like a USB key, and that's by design of course, because you're going to use it to interface with other devices through the USB port.
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/mobile-hardware-and-paper-wallets?u=76281980&t=283)** So it has a couple of buttons, and the navigation is very, very easy to make it easy for you to get to your keys, and use them when you want to. So it's on demand key access. Trezor is slightly different. You can see with this little animation here that it has a little bit of a larger screen. It also has a little tiny keyboard that allows you to navigate in a different way from the Ledger series. And it's a little bit larger as well. And notice that it connects to your device with a short cable, but again it's using a USB interface as well. And then lastly is to KeepKey, and KeepKey, again, it's a slightly larger device, has a larger screen, and just a different way of interacting. All three do the same thing it just depends on what interface, and look and feel you liked best. And last but not least is the lowly paper wallet. Now the paper wallet seems to be like old technology. Like why in the world would you create a piece of paper when we've got all this cool software and hardware out there at the store are our keys? Well the answer is it's the most secure if you're careful about it. Because no one online can reach into your pocket, and pull out a piece of paper. Of course, if you lose the piece of paper it's all over. But if you're comfortable with carrying around a piece of paper that gives you access to your cryptoassets, and you've got a good backup, in other words you have a safety deposit box somewhere, or some other place
>
> **[6:15](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/mobile-hardware-and-paper-wallets?u=76281980&t=375)** with another copy of that piece of paper, and you're comfortable that you're not going to lose, or have somebody else physically pickpocket you might be a way to go. So how in the world would you do that? Let's look at a couple of examples. First off would be ETHAddress. ETHAddress is actually not a product or a piece of paper, it's software that you download from [[GitHub]], you install, and you run the software to generate the keys, and print them out. So it's actually software you're going to run. It's not a desktop wallet because it's not the wallet that you're running, it's the generation of the keys software that you're running. In the other option is my Ether Wallet. And if you've gone through the episodes in order you may think, wait a second, you said my Ether Wallet was a web wallet. Well, it is but instead of storing your keys on the web online you actually can print it out on a piece of paper so it actually creates that paper wallet. Let's take a look at each one of those websites to see what they may look like. So here is ETHAddress, notice that ETHAddress is really nothing more than a bunch of software on a GitHub repository. And again what you'll do is you download the software, and run it to generate your keys and then print them out. And noticed if you read through here you can see the different modules, this fixed upscaling of QR codes and so on and so forth, and the README just gives you the example of what to do, or tells you what to do. And then MyEtherWallet, we've already seen this, after you create a wallet instead of storing your keys
>
> **[7:50](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/mobile-hardware-and-paper-wallets?u=76281980&t=470)** you have the option of just printing them instead of storing them online. And that's why my Ether Wallet is also a paper wallet. So that wraps up a brief overview of the different types and examples of Ethereum wallets. There's lots of options out there, pick the type or types that best suit your needs, and then look at what the offerings are. I'm giving you just a few examples but there's lots more and they're changing all the time. So do a little research, figure out what's out there, and pick the one or ones that are best for you. And a little bit later we're actually going to pick a few ourselves, and show you how to install, and actually use these different wallets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptocurrency]] (3), [[Hardware]] (3), [[Ethereum]] (2), [[GitHub]] (2), [[Microsoft Products|Products]] (1)
> **Env Vars:** usb (3), brd (1), readme (1)
> **Definitions:** is a  (3), basically means (1), in other words (1)
> **CLI Commands:** make (2), snap (1)
> **Prerequisites:** install (3)
> **Tools:** github (2)
> **Documentation:** the readme (1)
> **Exercise Files:** download the (1)

#### [Installing MetaMask](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/installing-metamask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/installing-metamask?u=76281980&t=0)** - And now it's time for us to actually install our own [[Ethereum]] wallet. We've chosen MetaMask. MetaMask is a very simple, very nice wallet. It, of course, is a web wallet and it gives us the ability to rapidly switch between different implementations of the [[Blockchain]]. So in other words, we're going to easily be able to switch between our test blockchain and Mainnet when we start developing our applications. So it's a nice package that gives us multiple layers of functionality. So let's go install MetaMask. The first thing we do is we navigate to the website [metamask.io](https://metamask.io). And from here, I'm using the Firefox browser. So I'm just going to click get Firefox add on. And this takes me to the Firefox Add-Ons. So I'm going to click Add to Firefox. And make sure you read through the permissions. Access data for websites, input data to the clipboard, display notifications, store unlimited amount of client side data. Yeah, I like all those. I'm comfortable. Choose Add. Don't ever click okay until you really are okay. And then we get a notice that MetaMask has been added to Firefox. Do I want this extension to run in private [[Windows]]? Yes or no? I'm just not going to worry about that. I don't plan to run any private windows. Got it. All right, so now we have MetaMask. And notice we have our landing page here, and we also have a little icon up in the right hand corner. Before we launch this for open that menu, let's go ahead and choose Get Started.
>
> **[1:35](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/installing-metamask?u=76281980&t=95)** All right, are you new to MetaMask? Do you already have a seed phrase? Which is a 12-[[Microsoft Word|word]] seed phrase. No, actually I don't. I could import an existing wallet using that seed phrase, which is used for our key generation, or I can just say, "Nope, I'm new." Or actually say, "Yes, I'm new." Let's set it up. So let's create a wallet. And you're going to find lots of warnings because the idea here is that this is the only way to access your crypto assets. So let's say you've got tens of thousands of dollars in Ether. You don't want to risk that by creating an insecure wallet. So that's why there's so many things to read through. One of the things they're going to ask you is improving MetaMask. So this is not one of the most important screens. Just read through here. Find out what they'll do. And you can either say yes or no. I'm going to go ahead and agree. And then we create a password. So I'm going to create some new password. All right, and confirm it. Remember this password. And also use, make sure that you read the Terms of Use. Create it, and I'm not going to save that here. And here is our Secret Backup Phrase. The Secret Backup Phrase is necessary for you to write down because this is the only way to get back to your crypto assets if you forget your password.
>
> **[3:09](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/installing-metamask?u=76281980&t=189)** This is not like regular passwords where it's easy to recover. It's not easy to recover. So these are our Secret Backup Phrase words. Make sure that you write these down for your own account. And choose Next. Now, if you get to this page and you're trying to go too fast, and you say, "Well, I did not write it down." You can go back. And that's the positive thing. But make sure that when you get to this Secret Backup Phrase, go ahead and write it down because you're going to need it next. All right, so now you have to confirm your Secret Backup Phrase to prove that you wrote it down. So let's see, it's going to be reveal, doctor, verify, and tornado. And once you get it right, you get a nice little Congratulations window. You passed the test. Make sure you keep the seed phrase safe. That's what you'll need to recover your password. And when you're all done, click All Done. And there we go. So now we see that we have an account here. And this account has zero ether. And notice that we're on the main Ethereum network. So that's also called Mainnet. One of the advantages of using MetaMask is that we can store our ether based on a specific blockchain. And if I just drop this list, notice I can just click one button and go to Ropsten, Kovan, Rinkeby. And there's actually the Goerli Test Network as well. Or I can use a custom network
>
> **[4:43](https://www.linkedin.com/learning/building-an-ethereum-blockchain-app-5-your-ethereum-wallet/installing-metamask?u=76281980&t=283)** or use the default test local network, which is at port 8545. So we get lots of options here, making development and deploying, or developing and deploying applications very easy. That's why we chose MetaMask. So now you know how to set up your own Ethereum wallet. If you follow the demo here, you have your own Ethereum wallet as well, and we're ready to roll up our sleeves and really get our hands dirty in developing an Ethereum app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethereum]] (5), [[Blockchain]] (3), [[Windows]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (5), find (2)
> **Tools:** firefox (5)
> **Definitions:** is a  (3), in other words (1)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **URLs:** [metamask.io](https://metamask.io) (1)
> **Ports:** port 8545 (1)
> **UI Navigation:** go to (1)


## Instructor

- [[Michael Solomon]]

## Resources

- Exercise files available

## Skills Covered

- Cryptocurrency
- Blockchain
- Ethereum

## Path Context

### In [[Build an Ethereum Blockchain App]]
← [[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]] | **5 of 11** | [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] →

### In [[Become a Blockchain Developer]]
← [[Building an Ethereum Blockchain App- 4 Ethereum Development Tools]] | **5 of 14** | [[Building an Ethereum Blockchain App- 6 Building Your First Ethereum App]] →

## Appears In

- [[Build an Ethereum Blockchain App]]
- [[Become a Blockchain Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building an Ethereum Blockchain App- 11 Integrating Non-Blockchain Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 10 Deployment and Maintenance]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 8 Supply Chain Smart Contract dApp]] — Blockchain, Ethereum
- [[Building an Ethereum Blockchain App- 7 Smart Contracts]] — Blockchain, Ethereum

---

[↑ Back to top](#)