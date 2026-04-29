---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: electronics-foundations-semiconductor-devices
url: "https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices"
duration_minutes: 248
duration: 4h 8m
level: Intermediate
updated: 6/17/2022
learners: 132419
skills:
  - Semiconductor Engineering
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHgGnnVi805qQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665832892?e=2147483647&amp;v=beta&amp;t=Ypw2yjdums5wx5YRSL28QGOJSiofPJYLY61sfxGnHGM"
linkedin_topic: Hardware
learning_paths:
  - '[[Become an Arduino Developer]]'
prev_courses:
  - '[[Learning Arduino- Interfacing with Hardware]]'
next_courses:
  - '[[Learning Arduino- Interfacing with Analog Devices]]'
path_nav: '[{"path":"Become an Arduino Developer","position":5,"total":11,"prev":"Learning Arduino- Interfacing with Hardware","next":"Learning Arduino- Interfacing with Analog Devices"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - topic/network-and-system-administration
  - topic/software-development
  - skill/semiconductor-engineering
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Electronics%20Foundations-%20Semiconductor%20Devices.md)

![Electronics Foundations: Semiconductor Devices](https://media.licdn.com/dms/image/v2/C4E0DAQHgGnnVi805qQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665832892?e=2147483647&amp;v=beta&amp;t=Ypw2yjdums5wx5YRSL28QGOJSiofPJYLY61sfxGnHGM)

# Electronics Foundations: Semiconductor Devices

> Bolster your understanding of how to build electronic circuits by learning to work with semiconductor components. In this course, join electrical engineer Barron Stone as he walks through how to build circuits using three common types of semiconductor components: diodes, transistors, and operational amplifiers. Barron kicks off the course by explaining what diodes are, and how to use diodes to con

> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices) | 4h 8m | Intermediate | 132K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (4 videos)
- **[[#2. 1. Diodes]]** (3 videos)
- **[[#3. 2. Diode Applications]]** (7 videos)
- **[[#4. 3. Special Purpose Diodes]]** (3 videos)
- **[[#5. 4. Bipolar Junction Transistors]]** (4 videos)
- **[[#6. 5. Transistor Applications]]** (4 videos)
- **[[#7. 6. Field-Effect Transistors]]** (3 videos)
- **[[#8. 7. Operational Amplifiers]]** (3 videos)
- **[[#9. 8. Op-Amp Applications]]** (8 videos)
- **[[#10. Conclusion]]** (1 videos)

### 1. Introduction

#### Understanding semiconductor devices
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=1)** - Circuits built with basic electronic components, like resistors, capacitors, and inductors, can do a lot of things, but they can't do it all.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=9)** What if you need to amplify a small signal to make it larger, or want to use a low-powered device, like a microcontroller, to control a high-powered motor?
>
> **[0:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=18)** To do those things, you'll need to use a special type of component called a semiconductor.
>
> **[0:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=23)** In this course, I'll show you how to build circuits using three of the most common types of semiconductor components: diodes, transistors, and operational amplifiers.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=33)** I'll show you how to use diodes to control the direction that current flows through a circuit so you can convert alternating current into direct current and protect your circuits from being damaged by unwanted current that's too big or flowing in the wrong direction.
>
> **[0:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=48)** You'll see how transistors can be used to control the amount of current flowing through a circuit, to create electrically controlled switches and amplify signals.
>
> **[0:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=57)** And I'll look at the differences between two of the most common types of transistors: BJTs and MOSFETs, so you'll know when it's best to use each one.
>
> **[1:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=66)** Finally, I'll show you how to use an operational amplifier, or op-amp, which is a handy little component for a wide range of tasks.
>
> **[1:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=74)** I'll use op-amps to compare signals, buffer signals, amplify signals, filter signals, and combine signals.
>
> **[1:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=81)** I'm Barron Stone, and I'm an electrical engineer who likes to keep things as simple as possible.
>
> **[1:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/understanding-semiconductor-devices?u=76281980&t=87)** If you're ready to start, grab a handful of transistors, and let's control some current.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Best Practices:** it's best to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - circuits (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-you-should-know-14920024?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-you-should-know-14920024?u=76281980&t=0)** - Before beginning this course, you should already understand the fundamentals of electricity and how to build circuits using the three basic components of resistors, capacitors, and inductors.
>
> **[0:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-you-should-know-14920024?u=76281980&t=11)** You should know how to build simple filter circuits, how to represent signals in the time and frequency domain, and how to interpret units of decibels and logarithmic scale.
>
> **[0:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-you-should-know-14920024?u=76281980&t=22)** If you're brand-new to electronics, I recommend watching the Foundations of Electronics: Fundamentals first to learn the core concepts of voltage, current, resistance, and power.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-you-should-know-14920024?u=76281980&t=33)** If you've got a grasp on those concepts but you don't have much experience building circuits, then start with the Foundations of Electronics: Basic Circuits.
>
> **[0:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-you-should-know-14920024?u=76281980&t=41)** If you've got all that down, let's get to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - before (1)

#### Use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=0)** - [Instructor] If you want to follow along with this course to build and measure your own electronic circuits, you're going to need some hardware.
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=6)** I've included a list of the various components and tools I use throughout this course in the exercise files.
>
> **[0:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=13)** In the main directory for this course, I've included a PDF file named Hardware List that contains a list of components.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=20)** Almost all of these items are common parts that you can purchase from a number of online retailers or your local electronics store.
>
> **[0:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=28)** But for your convenience, I've also included the link to an online store page for each item.
>
> **[0:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=34)** Throughout this course I'll be using two common electrical tools to measure my circuits, a digital multi meter, and an oscilloscope.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=42)** I've included those items in the parts list as well.
>
> **[0:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=45)** And for the multimeter, I've provided two recommended options, a very simple DMM that only makes basic measurements, and a more advanced DMM with auto ranging and other capabilities.
>
> **[0:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=56)** I've also included a document with several of my favorite online resources for learning about electronics that I recommend using as references in addition to this course.
>
> **[1:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=66)** The rest of the exercise files are organized into number directories for each chapter of the course.
>
> **[1:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=72)** And then within each chapter, there are number directories for each video.
>
> **[1:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=77)** I've included things like circuit diagrams and other reference documents to help you follow along throughout the course.
>
> **[1:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=83)** When I mention one of those items in a video, just navigate to the corresponding folder in the exercise files to find it.
>
> **[1:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=90)** For some examples in this course, I'll be using in our Arduino microcontroller to demonstrate how certain circuits can be used with microcontroller devices.
>
> **[1:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=98)** And for those examples, I've included the corresponding code in the exercise files.
>
> **[1:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=104)** However, this course is not intended to teach Arduino programming.
>
> **[1:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-the-exercise-files-14914784?u=76281980&t=108)** I've simply chosen Arduino as a device to demonstrate how electronic circuits can interface with microcontroller platforms.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (4)
> **Env Vars:** dmm (2), pdf (1)
> **CLI Commands:** find (1)
> **Code Keywords:** interface (1)
> **UI Navigation:** navigate to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Safety warnings
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=0)** - Working with electronics is a ton of fun, but it can also be dangerous.
>
> **[0:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=5)** Electric shock can cause serious injuries or even death.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=9)** And at the very least, being shocked is not a pleasant feeling.
>
> **[0:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=12)** The example circuits I build in this course use relatively low voltages so you can safely follow along and build the circuits yourself.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=20)** This course will not train you to work on power distribution systems, like AC wall outlets.
>
> **[0:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=26)** If you want to make changes or repairs to the wiring in your house, don't do it yourself; hire a licensed electrician.
>
> **[0:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=32)** As you start designing and building your own circuits, please be careful, especially when working with voltages larger than around 50 volts.
>
> **[0:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=40)** Above that level, the risk of being electrocuted increases significantly.
>
> **[0:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=45)** As a safety rule, I never work alone when I'm building circuits that are somehow connected to a wall outlet.
>
> **[0:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=50)** I always have a friend nearby who can pull the plug on things and rescue me if something were to go wrong.
>
> **[0:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/safety-warnings-14915548?u=76281980&t=55)** I've also found that it's fun to share the experience of building electronics with a friend.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - working (1)


### 2. 1. Diodes

#### Semiconductor materials
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=0)** - [Presenter] The materials used in electronic devices are commonly categorized as being either an electrical conductor or an electrical insulator.
>
> **[0:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=10)** For example, metals like gold and copper are used as conductors because they allow electrons to move freely amongst their atoms.
>
> **[0:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=18)** On the other hand, in materials like glass and rubber electrons are bound more tightly to the atoms and have a harder time moving around.
>
> **[0:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=26)** So those materials make good insulators.
>
> **[0:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=29)** In this course, I'll be focusing on devices that use a third category of materials, that exist somewhere between conductors and insulators called semiconductors.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=42)** Semiconductor materials are able to conduct electricity, but only partly.
>
> **[0:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=47)** They can conduct current better than an insulator, but not as well as a conductor.
>
> **[0:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=53)** The most commonly used semiconductor material is silicon, which is used to manufacture everything from computer chips to solar panels.
>
> **[1:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=62)** Silicon is popular because it's relatively cheap, it has good electrical properties and it's easy for manufacturers to fabricate into electronic devices.
>
> **[1:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=72)** To understand why silicon acts as a semiconductor we need to look at its atomic structure.
>
> **[1:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=78)** The number of electrons in a silicon atom, how those electrons are organized and how silicon atoms are bound together.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=86)** An atom of silicon has four electrons that it can use to bond with other nearby atoms and those are called its valence electrons.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=95)** A silicon atom will form bonds with the four atoms closest to it by sharing its valence electrons with them.
>
> **[1:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=102)** And each of those four atoms will in turn form bonds with their nearest neighbors by sharing their own four valence electrons and so on which forms a crystal structure of silicon atoms.
>
> **[1:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=115)** Since all of those valence electrons are tied up in forming bonds with adjacent atoms they're not very mobile.
>
> **[2:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=121)** They can't move around easily from atom to atom to carry electrical current.
>
> **[2:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=126)** So on its own, although pure silicon qualifies as a semiconductor, electrically it's not all that interesting.
>
> **[2:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=135)** To make silicon useful for electronic devices a process called doping is used to inject other elements into the silicon structure to give it more mobile charges.
>
> **[2:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=146)** Semiconductor materials like silicon can be doped in one of two ways called N-type and P-type.
>
> **[2:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=153)** The letters N and P refer to the sign of the charge that can move around within those dope materials.
>
> **[2:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=161)** So in an N-type material, it's the negatively charged electrons which can easily move around and in a P-type material, it's the positively charged holes that move around.
>
> **[2:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=172)** Those holes represent an absence of electrons.
>
> **[2:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=177)** To make an N-type semiconductor pure silicon is injected with a small amount of another element whose atoms have one more valence electron to use for bonding than silicon atoms.
>
> **[3:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=189)** Phosphorus is commonly used for that purpose because phosphorus atoms have five valence electrons and they're about the same size as silicon atoms.
>
> **[3:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=198)** So it's easy for them to replace some of the silicon atoms in the crystal structure.
>
> **[3:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=203)** The injected phosphorus atoms use some of their electrons to bond with their four nearest neighbors, like a silicon atom would, but since the phosphorus atom has won more valence electron that spare electron doesn't get tied up in a bond.
>
> **[3:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=219)** That extra electron from the phosphorus atom can move around amongst the silicon atoms relatively easily which gives the N-type doped silicon more mobile negative charges to use for conducting current.
>
> **[3:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=233)** To help me conceptualize that movement, I like to think of the atoms in a silicon crystal like stacks of coins next to each other.
>
> **[4:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=241)** In pure silicon, each of the stacks in this row has four coins in it, representing the four valence electrons in each atom.
>
> **[4:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=250)** If I apply a voltage to the stacks by pushing on one end with my finger, I can create a current by moving coins, but it's difficult.
>
> **[4:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=258)** Moving one coin requires the entire row to shift with it.
>
> **[4:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=263)** Now, if I dope this row of silicon by replacing one of the stacks with a phosphorus atom, which has five valence electrons, with that extra coin on the stack I can easily create a current by sliding the fifth electron from the phosphorus across the other stacks.
>
> **[4:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=279)** It's not tightly bound to its neighboring atoms.
>
> **[4:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=283)** To make a P-type semiconductor, the pure silicon structure is injected with another type of element that has one less electron available to use for bonding.
>
> **[4:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=293)** Like boron, which only has three valence electrons.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=298)** That lack of an electron creates a hole amongst the bonds that other electrons can jump into to fill making it easier for electrons to move around.
>
> **[5:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=307)** So when a voltage is applied to the P-type material, which pushes on its electrons, as those electrons move through the material, by shifting into open holes, they leave behind a hole in the place they just came from.
>
> **[5:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=321)** Even though it's actually the negatively charged electrons that are moving from atom to atom to carry current through a P-type semiconductor we consider the holes that are moving in the opposite direction to represent positive charge and that flows in the direction of conventional current.
>
> **[5:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=338)** I can conceptualize that more easily using my stack of coins by removing a coin from one of the silicon stacks to replace it with a boron atom, which only has three valence electrons.
>
> **[5:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=350)** Now, because of the hole created by the boron, it's easy to move around the top layer of the electrons by shifting them into that open hole.
>
> **[5:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=359)** Shifting electrons towards the left to fill the hole causes the open hole to effectively drift towards the right, which is the direction of conventional current through this stack of coins.
>
> **[6:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=372)** One common misconception about doped semiconductor materials is that N-type materials are negatively charged and P-type materials are positively charged.
>
> **[6:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=382)** In actuality, N-type and P type semiconductors are both neutral because the individual atoms of silicon and phosphorus and boron that make up those materials are each neutrally charged because they have the same number of electrons and protons inside of them.
>
> **[6:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=398)** The terms N-type and P-type, just referred to the types of charge that easily move through the material, either negatively charged electrons or positively charged holes.
>
> **[6:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=410)** So, I've taken a semiconductor like silicon, which on its own can partially conduct electricity, and have injected it with boron or phosphorus to give it more mobile charges so it can conduct electricity better.
>
> **[7:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=424)** Why does that matter?
>
> **[7:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=425)** If I just wanted a material that could conduct electricity well, it would be a lot easier for me to use a metal, like copper or gold, than to go through all this trouble to dope a bunch of silicon.
>
> **[7:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=436)** On their own N-type and P-type silicon are not all that exciting.
>
> **[7:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=440)** They're just materials that conduct well.
>
> **[7:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=443)** The magic really happens when they're used together.
>
> **[7:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=447)** Semiconductor components, like diodes and transistors, have structures that contain both N-type and P type materials.
>
> **[7:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/semiconductor-materials-14914790?u=76281980&t=454)** Certain combinations of those materials produce components that behave in different ways when certain voltages are applied to them and can be used to control and direct the flow of current through devices to create everything from power amplifiers to digital computers.

> [!info]- Semantic Content
>
> **Tools:** atom (13)
> **CLI Commands:** make (5)
> **Code Keywords:** type. (1), from. (1), type, (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### What is a diode?
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=0)** - [Instructor] The simplest semiconductor component is called a diode, which consists of a piece of in N-Type and a piece of P-Type material joined together.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=9)** The junction between those two different types of materials behaves in a way that allows electrons to easily pass from the N-Type region to the P-Type region with just a small amount of voltage to push them.
>
> **[0:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=22)** But if the direction of that voltage is reversed, the diode makes it very difficult for electrons to flow in the other direction, from P to N.
>
> **[0:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=31)** The electrons need a lot of voltage to push them the other way.
>
> **[0:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=35)** To use a diode, you don't need to understand why the P-N junction behaves that way and the low-level physics that are going on here.
>
> **[0:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=43)** So for this course, I'm just going to focus on how to use diodes for practical applications.
>
> **[0:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=49)** I like to think of a diode like a turnstile that you might encounter at the entrance to a sports stadium or a subway.
>
> **[0:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=57)** People pass through the turnstile in the same way that electrons pass through a diode.
>
> **[1:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=62)** When somebody enters through a turnstile in the correct direction, they simply push on the arm and it moves to allow them through.
>
> **[1:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=70)** But if they try to go through the turnstile in the wrong direction, that arm locks up and blocks them.
>
> **[1:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=77)** That one-directional behavior makes diodes useful for controlling how current flows through parts of a circuit in the same way that turnstiles are used to control how people enter and exit a building.
>
> **[1:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=89)** The schematic symbol for a basic diode, looks like a triangle with a bar attached to the tip.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=95)** The side at the base of the triangle, corresponds to the P-Type section of the diode and is called the anode.
>
> **[1:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=102)** And the side with the bar is called the cathode and corresponds to the N-Type material.
>
> **[1:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=108)** The triangle acts like an arrow that points in the direction that current can flow through the diode from anode to cathode.
>
> **[1:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=115)** When building a diode circuit, it's important to pay close attention to the polarity or direction of the diode to make sure it's inserted in the correct orientation.
>
> **[2:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=127)** Diodes often come in small axial packages with two metal leads like this one.
>
> **[2:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=133)** There's usually a small marking on the package to indicate which side of the diode is the cathode.
>
> **[2:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=138)** Now, I will admit, I tend to get the terms cathode and anode mixed up in my head all the time and I can never seem to remember which one is the positive one and which one is negative.
>
> **[2:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=149)** So instead of remembering that the marking on a diode corresponds to the cathode, I think of that marker line as representing the bar on the diode symbol because I can easily remember which way current flows through the diode.
>
> **[2:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=164)** A diode has two basic modes of operation called forward biased and reverse biased, which basically mean that the diode is on or off.
>
> **[2:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=174)** Whether a diode is forward or reverse biased, will depend on the voltage across it and the current through it.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=181)** It's common to plot the relationship between a diodes voltage and current to characterize its performance on what's known as an IV curve.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=190)** On an IV curve, the voltage across the diode is represented on the horizontal axis and the amount of current passing through it is represented on the vertical axis.
>
> **[3:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=201)** A diode will become forward biased or turned on, when a positive voltage is applied to push current through the diode in its forward direction.
>
> **[3:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=210)** In an ideal world, a forward-biased diode should act like a short circuit and allow current to flow through it completely unrestricted.
>
> **[3:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=220)** Since an ideal diode does not put up any resistance to that forward current, there won't be any voltage across it.
>
> **[3:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=226)** It's just acting as a pass through for the current.
>
> **[3:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=229)** So on the IV curve, the forward-biased region is represented by a vertical line when the voltage is equal to zero.
>
> **[3:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=238)** No matter how much forward current flows through that diode, the voltage across it will never be greater than 0 volts.
>
> **[4:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=247)** If I flip the diode around to apply a negative voltage across it, which tries to push current through the diode in the other direction, then the diode will become reverse biased.
>
> **[4:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=258)** It basically turns off and acts like an open circuit to prevent any reverse current from passing through it.
>
> **[4:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=265)** On the IV curve for an ideal diode, that reversed-biased region is represented by this horizontal line.
>
> **[4:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=272)** No matter how much negative voltage I apply to the diode, it will not allow any current to pass through it.
>
> **[4:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=279)** This plot represents the ideal behavior for a diode, but in reality, the relationship between voltage and current through a diode looks more like this.
>
> **[4:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=288)** On the IV curve for an actual diode, the forward and reverse regions of operation look similar to the ideal diode regions.
>
> **[4:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=296)** They're just slightly off.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=298)** But there's also a new third distinct region of operation to the left called the breakdown region.
>
> **[5:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=305)** Focusing in on the forward region, which represents a diodes behavior when a positive voltage is applied across it, unlike the ideal diode model, which allows forward current to flow completely unrestricted, an actual diode requires a small amount of voltage to be applied to it before it really opens up and allows current to flow through.
>
> **[5:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=326)** The forward voltage labeled as VF, is the voltage at which the diode will become forward biased and turn on.
>
> **[5:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=334)** And for basic silicon diodes, VF is usually around 0.7 volts.
>
> **[5:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=340)** You can relate the forward voltage of a diode to how hard you need to push on a turnstile to get through.
>
> **[5:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=346)** The arm on a turnstile is spring loaded so it puts up a small amount of resistance, so you have to give it a little push or voltage to move it aside so you can pass through in the forward direction.
>
> **[5:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=358)** When voltage is applied in the other direction, the diode becomes reverse biased, where it turns off and prevents current from passing through.
>
> **[6:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=367)** That's similar to when you try to go the wrong way through a turnstile.
>
> **[6:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=370)** The arm locks up.
>
> **[6:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=372)** Even if you push really hard on it, it won't budge.
>
> **[6:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=375)** The turnstile is reverse biased.
>
> **[6:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=378)** But if you push really, really, really hard on the turnstile, eventually you will break the arm and then you can pass through the turnstile in the wrong direction.
>
> **[6:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=388)** And that corresponds to the breakdown region of the IV curve.
>
> **[6:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=392)** If a large enough voltage is applied to the diode in the reverse direction, the diode will eventually turn on and allow reverse current to flow through it.
>
> **[6:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=401)** This breakdown voltage abbreviated as VBR, can be as low as -100 volts or more for standard silicon diodes.
>
> **[6:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=411)** Now, unlike the turnstile arm example, when a diode enters the breakdown region, it's not necessarily broken.
>
> **[6:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=419)** Operating in the breakdown region itself, does not damage the diode.
>
> **[7:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=424)** However, under breakdown conditions, the diode won't be limiting the amount of current through it.
>
> **[7:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=429)** That means, unless there's something else in the circuit to limit current through the diode, it can easily overheat and burn up.
>
> **[7:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=436)** The same thing can happen to the diode when it's operating in the forward-biased mode.
>
> **[7:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-diode-14918151?u=76281980&t=441)** For that reason, it's important to design your circuits in a way that will limit the current through the diodes operating in the forward-biased or breakdown modes to prevent them from overheating.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (7), this. (1)
> **Definitions:** is called (3), known as (1)
> **CLI Commands:** make (1)
> **Env Vars:** vbr (1)
> **Versions:** 0.7 (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Diode characteristics
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=0)** - There are three primary characteristics that I consider when choosing which diode to use in my circuit.
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=6)** Forward voltage which is the voltage at which the diode turns on and allows forward current to flow through it.
>
> **[0:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=13)** The breakdown voltage, which is the negative voltage at which the diode fails to stop current from flowing backwards through it.
>
> **[0:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=21)** And the maximum forward current which is the amount of forward current, the diode can handle before it will overheat and burn up.
>
> **[0:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=29)** To show you how to find and interpret these diode characteristics, I'll look at the data sheet for a common 1N4148 Small Signal Diode.
>
> **[0:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=38)** The 1N4148 diode is designed for general purpose usage.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=42)** It has a moderate forward voltage drop but it's not designed to handle much forward current.
>
> **[0:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=48)** To find the data sheet for that diode, I'll go to my search engine and type in the part number, "1N4148" and the word "datasheet".
>
> **[0:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=59)** I see that there are several data sheets available for the 1N4148 diode from different manufacturers, and for this video, I'll look at the data sheet from Vishay.
>
> **[1:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=69)** The top part of the first page lists some general information about this diode.
>
> **[1:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=74)** What it's typically used for and the types of packages it comes in.
>
> **[1:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=79)** Below that is a table labeled "absolute maximum ratings".
>
> **[1:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=83)** Like all other electronic components diodes have physical limitations and these are the values you need to pay attention to to avoid destroying your components.
>
> **[1:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=93)** The most important of these to worry about is the maximum forward continuous current abbreviated as "IF" which describes the average amount of current the diode can safely conduct in the forward biased mode.
>
> **[1:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=106)** Ideally a diode will be able to conduct an infinite amount of current when it's forward biased.
>
> **[1:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=112)** But in reality, as the amount of forward current through this diode increases, the diode produces more heat which it will need to dissipate.
>
> **[2:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=121)** So this maximum forward continuous current rating is based on the thermal limitation of how much heat the diode can handle.
>
> **[2:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=129)** If I try to maintain a forward current of more than 300 milliAmps through this diode for too long that will cause it to overheat and it'll burn up.
>
> **[2:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=138)** However, this diode can handle more than 300 milliAmps if it's only for a short period of time.
>
> **[2:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=145)** The peak forward surge current is the maximum amount of current the diode can handle during a surge.
>
> **[2:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=152)** I like to relate the maximum continuous current and surge current ratings to how long I can hold my hand over a hot stove.
>
> **[2:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=159)** If I pass my hand over the stove quickly that represents a surge of current.
>
> **[2:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=164)** Even if the stove is really hot it's not going to burn me because of the short exposure time.
>
> **[2:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=169)** However, if I hold my hand over the stove representing a continuous current, even if the stove is only moderately hot it will eventually burn my due to the long exposure.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=181)** According to the data sheet this diode can survive up to two amps of current for a surge lasting up to one microsecond.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=190)** If I ever exceed that two amp peak forward surge current even momentarily, then there's a pretty good chance my diode will overheat.
>
> **[3:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=199)** Moving on down the page to the electrical characteristic section, there are two main parameters to pay attention to.
>
> **[3:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=205)** The forward voltage and the breakdown voltage.
>
> **[3:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=211)** The forward voltage is the amount of positive voltage between the anode and cathode that will cause the diode to turn on allowing forward current to easily flow through it.
>
> **[3:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=221)** For silicon diodes, the forward voltage is typically somewhere between 0.6 to one volt.
>
> **[3:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=228)** The breakdown voltage is the amount of reverse voltage the diode can withstand before it fails to stop reverse current from flowing backwards.
>
> **[3:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=236)** And for silicon diodes, the breakdown voltage is typically anywhere from 50 to 100 volts or even more.
>
> **[4:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=244)** for this particular 1N4148 diode from Vishay, the forward voltage is listed as having a maximum value of one volt, meaning that one of these diodes should never require more than one volt to become forward biased.
>
> **[4:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=259)** A little bit lower in the table, the breakdown voltage for this diode is listed as being a minimum of 100 volts.
>
> **[4:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=267)** So I can expect that one of these diodes will withstand at least 100 volts in the reverse bias direction before it allows reverse current to flow freely.
>
> **[4:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=276)** These minimum and maximum breakdown and forward voltage values in the data sheet are extremes that you can expect from this part.
>
> **[4:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=284)** But, like all electronic components, that will vary from part to part due to variations in the specific design and manufacturing process.
>
> **[4:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=293)** When I'm building a circuit with one of these diodes sometimes I like to know the actual forward voltage that I can expect the diode to turn on at, rather than just the worst case maximum that's listed in the data sheet.
>
> **[5:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=306)** And I can find that out using my digital multi meter.
>
> **[5:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=310)** To do that I'll turn the knob on my DMM to the diode test mode which is indicated by the diode symbol.
>
> **[5:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=317)** This is the same DMM setting that you can use to check for electrical continuity to find short circuits.
>
> **[5:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=323)** So if I touch the probe tips together, (DMM beeps) the DMM will beep at me to let me know that there's a short circuit between them.
>
> **[5:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=331)** To measure the diodes forward voltage, I'll touch the black probe to the cathode terminal, which is the side of the diode with the little black stripe and I'll connect the red probe to the anode terminal.
>
> **[5:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=341)** I can see that the forward voltage of this diode is actually closer to 0.6 volts than the one volt maximum that was listed in the data sheet.
>
> **[5:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=350)** That's a good thing because I generally want my diode to switch into the forward biased on mode at the lowest positive voltage it can.
>
> **[5:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/diode-characteristics-14918136?u=76281980&t=358)** So that the diode acts as close to a real short circuit as possible to forward current.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Keywords:** pass (1), require (1), let (1), switch (1)
> **Env Vars:** dmm (4)
> **Code Identifiers:** milliamps (2)
> **Versions:** 0.6 (2)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 3. 2. Diode Applications

#### Rectify a signal
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=0)** - [Instructor] One common application of diodes is to build a rectifier.
>
> **[0:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=4)** Which is an electronic device that converts from alternating current to direct current.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=9)** If you've ever broken apart a wall wart power adapter, you've probably seen a set of diodes inside.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=15)** Those diodes are converting the 120 volts AC, that comes from a wall outlet, into a DC voltage for a device to use.
>
> **[0:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=24)** Since an AC signal periodically reverses direction, it consists of both positive and negative voltages at different times.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=33)** The goal of a rectifier circuit is to remove all of the negative voltages so that the output signal is entirely positive.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=42)** Now, that can mean simply eliminating the negative voltages by making the output voltage zero during that time.
>
> **[0:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=49)** Or, it can mean converting those negative voltage swings into positive output voltages.
>
> **[0:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=55)** The simplest type of rectifier circuit is called a half-wave rectifier.
>
> **[1:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=60)** It consists of a single diode placed in series between an electric load and the AC voltage source.
>
> **[1:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=68)** When the input voltage from the AC source swings in the positive direction, the diode will act like a short circuit and allow current to pass through.
>
> **[1:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=77)** So, the voltage across the load, which is the output of the half-wave rectifier, will be similar to the input voltage.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=86)** Now, when the input voltage changes direction and swings to the negative side, the diode will act like an open circuit to block current from passing through it.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=96)** Since the circuit has been effectively broken open, no current flows through the load.
>
> **[1:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=101)** So the output voltage across the load will be 0 volts.
>
> **[1:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=105)** These two plots illustrate the relationship between an AC input voltage and the corresponding output voltage from a half-wave of rectifier.
>
> **[1:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=114)** When the input is positive, so is the output.
>
> **[1:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=117)** But when the input is negative, the output goes to zero because no current flows through the load.
>
> **[2:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=125)** Although it's common to think of the term DC as referring to a constant voltage, even though the rectifier's output is constantly changing, it is still technically direct current because the voltage is always positive, so the current will only ever flow in one direction.
>
> **[2:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=143)** Now, that explanation of the half-wave rectifier is a bit of a simplification because the diode will not actually turn on and allow current to flow through it until the input voltage from the AC source is greater than the forward voltage of the diode.
>
> **[2:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=159)** Also, due to the forward voltage drop across the diode, the output voltage from the half-wave rectifier will be slightly less than the input voltage.
>
> **[2:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=168)** We lose some of that input voltage to the forward voltage drop across the diode.
>
> **[2:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=174)** To demonstrate that, I've built the half-wave rectifier circuit on my breadboard using my function generator to provide a sine wave as the AC input voltage, and using a 10 kilo ohm resistor to serve as the electrical load.
>
> **[3:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=188)** I've connected channel 1 of my oscilloscope to display the input voltage in yellow and channel 2 to display the output from the half-wave rectifier, which is the voltage across the load resistor, in blue.
>
> **[3:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=201)** Looking at the scope, I can see that the output signal only contains the positive parts of the input signal.
>
> **[3:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=208)** Additionally, the positive humps of the output waveform are slightly smaller than the input signal because I lose about 0.6 volts of the input voltage as the forward voltage drop across the diode.
>
> **[3:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=221)** Although the half-wave rectifier circuit is simple to use, it's not very efficient for converting from AC to DC.
>
> **[3:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=228)** Because I lose all of the energy from the negative half of my AC signal to the diode.
>
> **[3:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=234)** If I want to preserve more of the energy from the input signal, then I should use a full-wave rectifier, which converts both the positive and the negative parts of the input AC signal into a pulsating DC output.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=249)** The most common full-wave rectifier circuit consists of four diodes in a Wheatstone bridge configuration.
>
> **[4:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=255)** The diodes are oriented so that when the input signal is positive, current will flow from the source through this diode and into the top of the load.
>
> **[4:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=265)** And then current coming out of the load takes that path through the diode on its return back to the voltage source.
>
> **[4:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=272)** When the AC signal switches polarity and turns negative, the current will take a different route through this diode into the top of the load, and then the return current from the load will pass through the bottom left diode back to the source.
>
> **[4:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=286)** Regardless of whether the input voltage is positive or negative, the output of the full-wave rectifier is always positive and pushes current in the same direction through the load.
>
> **[4:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=297)** This breadboard circuit is a full-wave rectifier that uses four diodes to convert the AC signal from my function generator into a DC voltage across a 10 kilo ohm load resistor.
>
> **[5:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=310)** On the oscilloscope, I see that the output signal looks like a completely positive version of the input signal.
>
> **[5:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=317)** And just like with the half-wave rectifier, the humps of the output waveform are smaller than the input signal due to the forward voltage drop across the diodes.
>
> **[5:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=328)** Although the pulsating output of the rectifier circuit is technically a direct current signal, since the voltage is always positive, most of the time when we're converting from AC to DC, we really want a constant output voltage.
>
> **[5:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=343)** So, to achieve that, most power supplies that convert from AC to DC, use a low-pass filter on the output of the rectifier to smooth out the bumps and make the output more steady.
>
> **[5:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=355)** When building rectifier circuits, we need to consider the amount of power that will be dissipated by the diodes to choose sturdy enough components.
>
> **[6:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=363)** For the example circuits in this video, I chose the common 1N4148 signal diode because I was rectifying relatively small signals, so the diodes wouldn't need to dissipate much power.
>
> **[6:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=375)** However, if I needed my rectifier circuit to handle more power, then I should use power diodes, like the 1N4001, which have a much higher maximum current rating than basic signal diodes.
>
> **[6:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=388)** The 1N4001 power diode is designed to handle up to 1 amp of current, operating as a rectifier.
>
> **[6:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/rectify-a-signal-14915549?u=76281980&t=395)** But with that capability comes the downside that it requires a larger forward voltage drop of about 1 volt.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), function (2)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **Versions:** 0.6 (1)
> **Speakers:** - [instructor] (1)

#### Detect the signal peak
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=0)** - [Instructor] A peak detector is a circuit that measures the peak amplitude of a signal to determine the highest voltage that a signal reaches.
>
> **[0:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=8)** One common use for peak detectors is in audio processing systems.
>
> **[0:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=13)** Since the volume of an audio signal will vary depending on its voltage levels, by monitoring the audio signal with a peak detector to determine its maximum value, a sound system can appropriately scale its output.
>
> **[0:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=26)** I can build a simple peak detector circuit by connecting a diode in series with a capacitor.
>
> **[0:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=32)** When a positive input voltage is applied to this circuit, current will pass forward through the diode and charge the capacitor up to that value.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=42)** If the input voltage is then reduced, that charge stored in the capacitor doesn't have anywhere to go since current can't pass backwards through the diode.
>
> **[0:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=51)** If the input voltage is then reduced, that charge stored in the capacitor doesn't have anywhere to go since current can't pass backwards through the diode.
>
> **[1:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=60)** So the capacitor remains charged and holds that higher voltage from before.
>
> **[1:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=65)** So the output voltage across the capacitor will correspond to the maximum input voltage that the circuit has seen.
>
> **[1:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=73)** This is a bit of a simplification.
>
> **[1:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=75)** The output voltage won't be exactly the same as the peak input voltage, because the circuit will lose about 0.6 volts to the forward voltage drop across that diode.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=86)** So to determine the actual peak input voltage, I'll need to account for that lost voltage from the diode by adding it back to the value I measure at the output.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=96)** To demonstrate that, I've built a simple peak detector circuit on my breadboard using a 1N4148 diode and a 100 microfarad capacitor.
>
> **[1:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=106)** I'm using an adjustable DC power supply to provide the input voltage for the circuit, and I'm measuring that with channel one of my oscilloscope.
>
> **[1:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=114)** Channel two is measuring the output voltage across the capacitor.
>
> **[1:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=119)** When I turn the input voltage, shown in yellow, up to two volts, I see that the output voltage, in blue, rises to around 1.4 volts, as I expected due to that forward voltage drop of the diode.
>
> **[2:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=132)** Now, if I lower my input voltage back down to one volt, I see that the output voltage remains at that peak value.
>
> **[2:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=140)** The components in the circuit are not perfect, so over time, it will leak a small amount of current, and the output voltage will slowly drift down towards zero.
>
> **[2:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=148)** And so because of that, I don't want to wait too long before measuring the output of the peak detector or else I'll get a slightly lower value.
>
> **[2:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=156)** I'm not going to wait for that now, so I'll crank the voltage back up to three volts, which is higher than the previous maximum voltage, and when I drop that signal back down again, the output voltage remains near 2.4 volts, which corresponds to the higher three volt peak input voltage.
>
> **[2:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=174)** Now, what if I want the peak detector circuit to reset its output back down to zero after a specific amount of time?
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=181)** Maybe I only care about the peak value that occurred within the past five seconds.
>
> **[3:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=187)** To accomplish that, I can insert a resistor in parallel with the capacitor to provide an escape route for the capacitor's stored charge.
>
> **[3:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=196)** When the input voltage drops below the peak, current will flow through the resistor to more quickly discharge the capacitor.
>
> **[3:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=204)** The amount of time it takes to discharge will depend on the resistor and capacitor values.
>
> **[3:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=209)** To determine which component values I need, I often use the rule of thumb that the amount of time in seconds that it takes for a charged capacitor to discharge through a resistor is roughly five times the resistance times the capacitance values.
>
> **[3:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=226)** Let's say I want my peak detector to reset itself within about five seconds after seeing a peak.
>
> **[3:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=232)** Since I'm only using a 100 microfarad capacitor, I'll rearrange that equation to solve for the necessary resistor value to achieve my desired discharge time.
>
> **[4:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=243)** Five seconds divided by five times 100 microfarads gives me a resistor value of 10 kiloohms.
>
> **[4:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=251)** This is the same peak detector circuit I demonstrated before, but now I've added a 10 kiloohm resistor in parallel with the capacitor.
>
> **[4:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/detect-the-signal-peak-14917128?u=76281980&t=260)** If I create a short spike on the input voltage by quickly raising it and then dropping it back down, I can see that the output voltage, in blue, quickly rises up to the corresponding peak and then slowly decays, as the capacitor discharges through the resistor.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (1)
> **Versions:** 0.6 (1), 1.4 (1), 2.4 (1)
> **Definitions:** is a  (2)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Protect against large signals
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=1)** - Some electronic circuits are sensitive and their components can be easily damaged if they receive too large of an input signal, much like how loud noises can hurt my sensitive ears.
>
> **[0:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=11)** If somebody is speaking to me at a reasonable volume,
>
> **[0:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=14)** - Hey, Baron, how are you?
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=15)** - I'm doing fine, Ray, thanks.
>
> **[0:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=18)** That's fine.
>
> **[0:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=19)** But if Ray's yelling in my ears,
>
> **[0:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=21)** - Who are you talking to?
>
> **[0:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=23)** - that's too loud and it can damage my ears.
>
> **[0:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=25)** So I need a way to protect myself from those loud noises, like earmuffs.
>
> **[0:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=31)** - I still don't know who you're talking to.
>
> **[0:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=34)** - [Baron] When working with electronics, a clipper circuit can be used to protect sensitive equipment by limiting the amplitude of input signals.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=42)** The clipper will remove any parts of a signal that are above or below a certain threshold voltage.
>
> **[0:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=48)** For example, the equipment I'm using right now to record this video uses an amplifier to boost the audio signal coming from a microphone, and then it sends that amplified signal to an analog-to-digital converter connected to my computer.
>
> **[1:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=62)** If for some reason the output voltage from the amplifier was too powerful, maybe I talk too loud into the microphone, I could potentially damage the analog-to-digital converter chip.
>
> **[1:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=73)** So to protect the sensitive converter chip from the amplifier, I can insert a clipper circuit between them.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=80)** The clipper will limit the signal from the amplifier to keep it within a safe voltage range.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=86)** If I was only concerned about protecting my circuit against negative voltages, then I could use this simple circuit with a diode and a resistor to clip out negative voltages below a certain threshold.
>
> **[1:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=98)** When the input voltage from the signal source is positive, the diode will act like an open circuit, so current will flow past it and the output voltage will basically be unchanged.
>
> **[1:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=110)** But if the input voltage turns negative and drops below the forward voltage of the diode, which is around 0.6 volts, then current will flow through the diode and back through the resistor, to the signal source.
>
> **[2:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=124)** At the output of the clipper circuit the voltage will only drop as low as that forward voltage of the diode, so the output will never drop below negative 0.6 volts.
>
> **[2:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=136)** To demonstrate that, I've built the clipper circuit to remove negative voltage on my breadboard using a one in 4148 diode and a one kilo ohm resistor, and I've configured my function generator to provide a 10-volt peak-to-peak sine wave as the input signal.
>
> **[2:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=152)** My oscilloscope is displaying the input signal from the function generator on channel one, in yellow, and the output signal from the clipper circuit on channel two, in blue.
>
> **[2:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=162)** I can see that this circuit allows the positive parts of the AC signal to pass through more or less undisturbed, but it limits the output voltage from ever dropping below negative 0.6 volts, which is the forward voltage of the diode.
>
> **[2:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=177)** If instead of clipping off the negative parts of the input signal, I want to keep those and cut out the positive parts, all I need to do is switch the direction of the diode by turning it around.
>
> **[3:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=189)** Now the clipper circuit is limiting the voltage from ever rising above 0.6 volts, but it allows the negative part of the AC signal to pass through it freely.
>
> **[3:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=199)** If I wanted to limit the positive and the negative output voltage from my clipper circuit from ever going above or below certain thresholds, I can do that by using two diodes, one in each direction.
>
> **[3:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=212)** In this arrangement, if the input voltage ever goes above the forward voltage of the diode on the left, that diode will turn on and drain current to ground, thus limiting the output to always be less than 0.6 volts.
>
> **[3:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=228)** And a similar thing will happen in the negative direction.
>
> **[3:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=231)** If the input voltage ever drops below negative 0.6 volts, the diode on the right will turn on, allowing current to flow through it and ensuring that the output voltage remains above negative 0.6.
>
> **[4:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=246)** When I send a small input signal, shown in yellow, through the dual direction clipper, the output voltage, shown in blue, will be more or less that small.
>
> **[4:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=255)** But if I increase the amplitude of the input signal to be much larger, the clipper circuit will restrict the output to stay within plus or minus 0.6 volts.
>
> **[4:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=267)** The range of my clipper circuit doesn't have to be limited by the forward voltage of the diodes I'm using.
>
> **[4:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=273)** I can adjust the range of the clipper circuit by incorporating other circuit elements to provide reference voltages to bias those diodes.
>
> **[4:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=281)** In the example shown here, the 1.4 volt source on the left branch, combined with the diode's forward voltage of 0.6 volts, will prevent the output voltage of this clipper circuit from ever rising above two volts.
>
> **[4:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=297)** And on the other branch, a negative 2.4 volt source, along with the upward pointing diode, will prevent the output voltage from ever dropping below negative three volts.
>
> **[5:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=308)** Keep in mind that the circuit shown here is simplified by showing three different voltage sources to illustrate the concept.
>
> **[5:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-large-signals-14919084?u=76281980&t=316)** In practice, those reference voltages would be generated using some combination of other circuit elements that act as a voltage regulator.

> [!info]- Semantic Content
>
> **Versions:** 0.6 (9), 1.4 (1), 2.4 (1)
> **Speakers:** - i (2), - some (1), - hey (1), - who (1), - that (1)
> **Code Keywords:** function (2), pass (2), switch (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### Protect against reverse current
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=0)** - One of the quickest ways to accidentally destroy an electronic device is to connect it to the power supply backwards.
>
> **[0:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=8)** It's an easy mistake to make.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=9)** If the power connector is not polarized if you're not paying attention you might accidentally mix up the red and black power wires or maybe you somehow stick batteries into a device backwards.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=20)** Those are all mistakes that I've personally made at some point in time in the past.
>
> **[0:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=24)** It's a good idea to include protection against reverse current if it could potentially damage your device.
>
> **[0:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=31)** Fortunately, that's easy to do by connecting a diode in series with the positive side of a DC power source.
>
> **[0:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=39)** This reverse protection diode ensures that the current will only flow in the forward direction.
>
> **[0:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=45)** So the DC power source will only ever apply a positive voltage to the circuit.
>
> **[0:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=50)** If the power source is connected in the correct orientation current will flow through the diode to the device and everything works like it's supposed to.
>
> **[0:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=59)** But if for some reason that power source gets connected backwards, or has some sort of malfunction, the diode will become reverse biased and act like an open circuit.
>
> **[1:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=69)** That keeps current from flowing through the circuit in the wrong direction.
>
> **[1:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=73)** So, the circuit is still protected.
>
> **[1:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=76)** One drawback of using a reverse protection diode is that you do lose some of the voltage from the DC power source to the forward voltage drop across the diode.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=86)** For example, if I was connecting my circuit to a five volt power source and used a reverse protection diode whose forward voltage was 0.6 volts, my circuit would only actually get 4.4 volts at its input voltage.
>
> **[1:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=101)** To minimize that forward voltage loss, many circuit designs use a special type of diode called a Schottky diode, whose unique semiconductor composition gives it a much smaller forward voltage drop than standard silicon diodes.
>
> **[1:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=116)** The forward voltage for a Schottky diode is usually somewhere between 0.15 to 0.45 volts.
>
> **[2:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=124)** But, the reverse breakdown voltage is still large enough to make them useful for protecting against reverse currents.
>
> **[2:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=131)** Schottky diodes are special enough that they get their own schematic symbol, which looks like the standard diode symbol, but with two 90 degree bins added to each side of the cathode line.
>
> **[2:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=142)** Physically, the package for a Schottky diode looks very similar to a standard rectifier diode.
>
> **[2:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=148)** It's possible to tell them apart, if you look closely at the tiny little print on them.
>
> **[2:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=153)** I find that hard to read.
>
> **[2:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=154)** So I usually check the forward voltage of my diodes using my DMM.
>
> **[2:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=159)** To do that, I'll set the selector knob to the diode mode.
>
> **[2:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=163)** When I probe a standard rectifier diode, I can see that it has a forward voltage of around 0.6 volts which is what I would expect from a regular diode.
>
> **[2:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=173)** However, when I measure the forward voltage of a Schottky diode, I see that it's much smaller than the regular diodes forward voltage.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=181)** Now you might be wondering why we don't just always use Schottky diodes in place of regular diodes since they have better characteristics.
>
> **[3:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=189)** And the main reason is cost.
>
> **[3:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=191)** Schottky diodes will usually cost several times more than their general purpose counterparts.
>
> **[3:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=196)** Now, that's not a big deal if you're only buying a handful of parts for a hobby project but when engineers are designing electronic devices to be mass produced, those small differences in cost really start to add up.
>
> **[3:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=208)** One other thing to consider when selecting a diode to protect against reverse current is the amount of current that the circuit will draw.
>
> **[3:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=216)** All of the current flowing into the protected circuit is first passing through this diode.
>
> **[3:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=222)** So, it's critical that the diode can handle all of that current without burning up.
>
> **[3:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=226)** I also need to be prepared for the unexpected.
>
> **[3:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=230)** If something were to suddenly changed in the load circuit that caused it to draw more current than intended, that could potentially melt the diode causing it to fail as a short circuit.
>
> **[4:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=240)** So my circuit's no longer protected.
>
> **[4:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=242)** To be extra careful and defend against that possibility, I can insert a fuse in series with the protection diode.
>
> **[4:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=251)** A fuse is a safety component that protects electronic devices from drawing too much current and basically consists of a strip of wire.
>
> **[4:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=259)** When the amount of current through the fuse is less than a certain threshold, the fuse simply acts like a wire.
>
> **[4:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=265)** But, when the current exceeds the fuses threshold, the fuse wire will melt causing it to act like an open circuit.
>
> **[4:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=274)** So, if something changes in the load and it tries to draw too much current, the fuse will break and cut off the power.
>
> **[4:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=281)** I'll need to replace or reset the fuse to get the circuit working again.
>
> **[4:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-reverse-current-14913890?u=76281980&t=285)** But, at least my circuit will be protected from whatever was going wrong.

> [!info]- Semantic Content
>
> **Versions:** 0.6 (2), 4.4 (1), 0.15 (1), 0.45 (1)
> **Code Keywords:** protected (4)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (1), similar to (1)
> **Env Vars:** dmm (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### Protect against flyback voltage
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=0)** - [Instructor] An inductor is an electrical component that stores energy in a magnetic field when current flows through it.
>
> **[0:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=7)** And the inductor will oppose any changes to the amount of current passing through it by very rapidly absorbing or releasing that energy.
>
> **[0:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=14)** An inductor wants the current through it to remain constant.
>
> **[0:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=18)** Now, it's not just inductors that do that.
>
> **[0:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=21)** There are lots of electrical components that exhibit inductive behavior, such as motors.
>
> **[0:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=27)** An electric motor contains a bunch of tightly ground coils of wire, much like an inductor.
>
> **[0:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=32)** And it stores and releases energy in a similar way.
>
> **[0:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=36)** From an electrical standpoint, a motor looks similar to a resistor and an inductor in series with each other.
>
> **[0:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=43)** Now, that's not saying that if you stick a resistor and an inductor together you suddenly have a motor, they're very different components.
>
> **[0:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=51)** But when a motor is used in a circuit, electrically to the rest of the circuit, it behaves similar to a resistor and an inductor.
>
> **[1:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=61)** As long as the current from the power supply remains constant, the inductive aspect of the motor will be storing energy.
>
> **[1:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=67)** But it basically acts like a wire, allowing electrons to pass through it without interference.
>
> **[1:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=73)** If I suddenly open a switch that cuts off current to the motor, the motor will very rapidly release its stored energy by inducing a current to counteract that change.
>
> **[1:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=83)** That induced current will continue to push electrons from one side of the motor to the other in the direction that they were previously going.
>
> **[1:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=90)** But with that switch open, those electrons can't continue on the loop around the circuit.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=96)** So for a very brief period of time we end up with a higher density of electrons on one side of the motor than on the other.
>
> **[1:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=104)** And that uneven distribution of electrical charge means there will be a voltage across the motor, which is known as flyback.
>
> **[1:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=112)** The flyback is a voltage spike that occurs when the source of current to an inductive component is suddenly reduced or removed.
>
> **[2:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=120)** As the inductor rapidly unloads its stored energy to counteract that change in current, it creates a brief but significant voltage spike across it.
>
> **[2:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=128)** Flyback can be dangerous and potentially damage other components in the circuit.
>
> **[2:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=133)** Fortunately, that voltage spike is usually very short lived and will dissipate over time as the electrons find their way back through the inductor to even out their distribution.
>
> **[2:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=145)** To demonstrate what flyback from a motor looks like, I'll be measuring the voltage across the motor for a computer fan.
>
> **[2:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=151)** I've chosen to use this fan because it only operates at five volts and has a relatively small inductance, so it won't create a dangerously large voltage spike.
>
> **[2:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=161)** The fan is currently connected to a five volt power source.
>
> **[2:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=164)** And on the oscilloscope I can see that the voltage between its two terminals is around positive five volts.
>
> **[2:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=170)** There's a lot of noise and ripples in this signal due to the way the fan operates.
>
> **[2:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=174)** Now I'll set my oscilloscope trigger to capture a single acquisition when it detects the falling edge of a negative voltage spike, and I'll adjust the horizontal and vertical scale a bit to capture a good view of it.
>
> **[3:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=187)** When I disconnect power to the fan, the voltage suddenly drops.
>
> **[3:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=191)** And due to the inductive flyback, the motor generates a negative voltage spike of around minus 13 volts, which is much greater in magnitude than the original five volts across the motor.
>
> **[3:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=203)** Since the flyback volted spike can potentially damage the motor and other components that are connected to the circuit, to protect the circuit, I need to provide a path for the surge of current created by the motor's inductance to take when that circuit is opened.
>
> **[3:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=219)** I can create that path by inserting a diode in parallel with the inductive load as shown here.
>
> **[3:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=225)** This is often called a flyback diode, though you may also hear it referred to as a snubber diode, a suppressor diode, or a clamp diode.
>
> **[3:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=233)** The flyback diode is oriented so that when the circuit is closed, it'll be reverse biased, acting like an open circuit so that all of the current will flow through the motor.
>
> **[4:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=243)** When the switch to the motor is opened, the motor will create a surge of current, but rather than creating a huge voltage spike, this current will travel around the loop created by the diode.
>
> **[4:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=256)** The path through the diode allows the inductive motor to draw current from itself.
>
> **[4:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=260)** And the discharging current will loop around and around over and over, until the power is eventually dissipated due to the resistance of the wires and the diode.
>
> **[4:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=269)** The amount of time that it takes for the inductive load to fully discharge through the diode will vary depending on the inductance and other factors.
>
> **[4:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=277)** But it's typically only a few milliseconds.
>
> **[4:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=280)** This is the same setup as before with the computer fan, except now I've added a flyback diode to the circuit.
>
> **[4:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=287)** When I open the switch to disconnect power, I see that the voltage across the fan stops.
>
> **[4:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/protect-against-flyback-voltage-14918148?u=76281980&t=292)** However, now I don't get that large, potentially damaging negative voltage spike, thanks to my flyback diode.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), continue (2), pass (1)
> **UI Navigation:** switch to (2), open the (1)
> **Definitions:** is an  (1), known as (1), is a  (1)
> **Analogies:** similar to (2), such as (1)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Circuit protection
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=0)** - [Instructor] All right, folks, it's time for a challenge problem.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=9)** This is your chance to practice using diodes to protect a circuit.
>
> **[0:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=13)** For this challenge, I want you to determine how to use diodes to ensure that the thermostat in my house remains powered.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=20)** I'm going to be going on vacation for a few days and I'll be leaving my pet hamster at home alone.
>
> **[0:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=25)** So I want to guarantee that the temperature in the house will be comfortable for him while I'm gone.
>
> **[0:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=31)** In this scenario, it's critical that my thermostat always has uninterrupted DC power.
>
> **[0:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=37)** So, for redundancy, I've connected two DC power supplies in parallel.
>
> **[0:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=43)** Each of these can individually power the thermostat.
>
> **[0:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=46)** So if one supply fails, the other will pick up the slack and my thermostat will never notice.
>
> **[0:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=53)** All electronic components have the potential to fail and stop working.
>
> **[0:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=56)** And with my luck, it usually happens at the worst possible time.
>
> **[1:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=60)** So for critical applications like this, I need to consider how my power supplies can possibly fail.
>
> **[1:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=67)** In general, they could fail in one of two ways.
>
> **[1:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=70)** The components inside the power supply might break in a way that disconnects the power supply so it acts like an open circuit.
>
> **[1:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=78)** That's usually the safest way for a device to fail.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=80)** Or, if I'm really unlucky, the components inside might overheat and melt together to create a short circuit.
>
> **[1:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=88)** That short circuit scenario is the one I'm most worried about.
>
> **[1:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=91)** If one of my DC power supplies failed and turned into a short circuit, current from the surviving supply would go through that short circuit instead of to the thermostat.
>
> **[1:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=102)** So, I lose power.
>
> **[1:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=104)** And even worse, the high current draw from the short circuit would likely overload that second power supply and cause it to break as well.
>
> **[1:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=112)** So I need a way to protect my system from that potential disaster.
>
> **[1:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=117)** Your goal for this challenge is to determine how to use diodes to protect my system in case either of the DC power supplies fails and internally short circuits.
>
> **[2:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=128)** You'll need to determine the type of diodes to use and where they should be placed in the system.
>
> **[2:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-circuit-protection?u=76281980&t=133)** Take some time to think through this challenge and when you're done, be sure to watch my solution video to see how I approach the problem.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Tools:** slack (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Circuit protection
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=0)** - [Instructor] Let's take a look at my solution for the challenge to protect my thermostat from a short circuiting power supply.
>
> **[0:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=12)** If one of the supplies failed and turns into a short circuit, current from the other supply would flow backwards through it.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=20)** That's a reverse current, which I can easily stop with a diode.
>
> **[0:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=24)** If I place a reverse current protection diode between the two power supplies like this, it'll block that reverse current coming from the right supply from flowing through the short circuit on the left to keep my thermostat running.
>
> **[0:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=37)** However, if it was the power supply on the right that failed instead of the one on the left, that diode wouldn't help because current from the working supply on the left would flow straight through the broken supply on the right.
>
> **[0:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=50)** To fully protect this system from short circuiting power supplies, I need two diodes to protect against reverse current, one for each supply.
>
> **[0:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=59)** When the supplies are functioning correctly, both of these diodes will be forward biased so current will flow from the power supplies to my device more or less freely.
>
> **[1:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=69)** If either one of the supplies fails and internally short circuits, the diode protecting it will become reversed bias and block current from flowing backwards through the short.
>
> **[1:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=79)** The other power supply can fully support the thermostat so the system continues to function.
>
> **[1:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-circuit-protection?u=76281980&t=85)** Since I'm placing these protection diodes in series with the power sources, I want to minimize the amount of supply voltage that I lose to the forward voltage drop across the diode, which makes this a good time to use Schottky diodes, which have a low forward voltage and a large reverse breakdown voltage.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), function (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Special Purpose Diodes

#### Light emitting diodes
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=0)** - [Instructor] Light emitting diodes, or LEDs, are the flashiest member of the diode family.
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=6)** Like normal diodes, they consist of a semiconductor junction that only allows current to pass through it in one direction.
>
> **[0:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=13)** But, that junction is specially designed so that when current does pass through it, it'll convert some of the energy into light by giving off photons.
>
> **[0:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=23)** The schematic symbol for an LED looks like the symbol for a regular diode with the addition of two little arrows pointing away from it to represent the light that's given off by the diode.
>
> **[0:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=35)** Physically, LEDs come in a variety of shapes and sizes.
>
> **[0:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=39)** Many consumer electronic devices use compact surface mount LEDs on printed circuit boards to indicate the operating status of a device.
>
> **[0:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=48)** Those surface mount LEDs look like small rectangular prisms.
>
> **[0:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=52)** For prototyping circuits on a breadboard, it's more common to use through hole LEDs like this, which consists of a plastic bulb with two long metal leads on one side.
>
> **[1:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=63)** The plastic bulb will either be clear or tinted to indicate the color of the light it produces.
>
> **[1:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=69)** Since LEDs are a type of diode, they're polarized, which means the direction of the current passing through them matters.
>
> **[1:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=76)** So you can tell which side is which, on most through hole LEDs, the metal lead connected to the positive anode terminal will be longer than the lead that's connected to the negative cathode.
>
> **[1:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=89)** Additionally, there's usually a flat section on the cathode side of the bulb.
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=94)** And, since I tend to get the terms anode and cathode mixed up in my head, I usually just remember that the flat section on the side of the LED bulb represents the flat bar on the diode symbol.
>
> **[1:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=107)** If I ever build a circuit using an LED and it doesn't light up, the first step I always take to try troubleshooting the problem is turning the LED around because there's a pretty good chance I put it in backwards.
>
> **[2:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=120)** Just like all other types of diodes, LEDs require a certain amount of forward voltage across their junction before they allow current to flow through them to generate light.
>
> **[2:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=131)** LEDs generally require a larger forward voltage than normal diodes and it'll vary depending on the LED's color and intensity.
>
> **[2:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=140)** For example, this table shows how the forward voltage, maximum current and luminous intensity ratings compare for two different colored LEDs.
>
> **[2:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=151)** The red LED will require a forward voltage drop somewhere between two to 2.4 volts.
>
> **[2:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=157)** Whereas the blue LED requires a higher forward voltage drop between three to 3.4 volts.
>
> **[2:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=164)** Generally, LEDs that have a higher forward voltage will also be able to handle more current.
>
> **[2:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=170)** And on this table, I can see that the blue LED can handle a maximum current of 30 milliamps, whereas the red LED can only handle up to 20 milliamps.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=181)** The higher voltage and current ratings of the blue LED mean it can dissipate more power than the red LED, which allows it to produce a brighter light.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=190)** The blue LED has a luminous intensity of 400 milli canula versus 200 millicandela for the red LED.
>
> **[3:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=200)** Millicandela, or mcd, is a standard unit for measuring the intensity of a light source that's commonly used to describe the brightness of LEDs.
>
> **[3:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=209)** As a point of reference, an LED with 50 to 100 millicandela is good to use for a low intensity indicator light.
>
> **[3:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=217)** But, if you wanted to build an LED flashlight, you would need to use one of the ultra-bright LEDs which have intensities of over 10,000 millicandela.
>
> **[3:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=227)** You can control the brightness of an LED by controlling the amount of current through it.
>
> **[3:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=232)** Since the forward voltage remains constant when an LED is on, sending more current through an LED will increase the amount of power it dissipates and light it generates.
>
> **[4:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=242)** More current makes the LED shine brighter.
>
> **[4:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=245)** However, there is such a thing as too much current.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=249)** When an LED is turned on, it allows current to pass through it, more or less unrestricted.
>
> **[4:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=253)** So the LED needs something else to limit the amount of current passing through it or else it'll try to dissipate too much power and it'll quickly be burned up and destroyed.
>
> **[4:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=264)** The simplest way to prevent that is to put a resistor in series with the LED to restrict the amount of current flowing through the circuit.
>
> **[4:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=272)** And that raises an important question.
>
> **[4:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=274)** What size resistor should I use?
>
> **[4:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=277)** As a simple rule of thumb, for most small-scale hobbyist projects which commonly use through hole LEDs and are powered by 3.3 or five volt sources, a 330 ohm resistor is generally a safe limiting resistor value to use to keep LEDs from burning up.
>
> **[4:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=295)** However, if I want to make sure my LED is as bright as possible, I'll need to use Ohm's law to calculate the smallest resistor value I can use that will give the LED the maximum amount of current within its limitations.
>
> **[5:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=309)** For example, if I plan to connect my red LED to a five volt source, which is a common voltage for micro-controller devices, I know that, since the red LED has a forward voltage drop of two volts, there will be three volts left across the limiting resistor.
>
> **[5:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=326)** My red LED is rated to handle a maximum current of 20 milliamps.
>
> **[5:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=332)** So, to find the resistor value that will create the maximum amount of current, I'll divide three volts by 20 milliamps which gives me 150 ohms.
>
> **[5:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=342)** Now, 150 ohms is not a common resistor value that I have in my parts kit so I'll round up to the nearest value that I do have, which is 220 ohms.
>
> **[5:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=351)** I always round this resistance value up rather than down, because a higher resistance will restrict the current more so that there's less current than the maximum of 20 milliamps.
>
> **[6:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=365)** With a 220 limiting resistor, my LED only gets about 13 1/2 milliamps of current, which it can safely handle.
>
> **[6:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=374)** If I had rounded my calculated resistor value down, instead of up, that would've allowed more current to flow through the LED and exceed its 20 milliamp rating, which would quickly burn it out.
>
> **[6:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=388)** Once I've determined the smallest resistor value that I can safely use, which will make my LED as bright as possible, I can still play around with using larger limiting resistor values to tweak the brightness and make my LED dimmer to meet the needs of a specific project.
>
> **[6:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=404)** For example, here are three identical red LEDs connected to the same five volt power source but with different current limiting resistors.
>
> **[6:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=414)** The LED on the left is the brightest because it has the smallest resistor value that I can safely use with these LEDs, which is 220 ohms.
>
> **[7:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=423)** The LED in the middle is slightly dimmer because it's connected to a much larger 10 kilohm resistor.
>
> **[7:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/light-emitting-diodes-14915547?u=76281980&t=429)** And the LED on the far right is the dimmest because it has a 100 kilohm resistor, which limits the current through it down to about 44 microamps.

> [!info]- Semantic Content
>
> **Env Vars:** led (34)
> **Code Keywords:** pass (3), require (3), this, (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** for example (3), just like (1)
> **Versions:** 2.4 (1), 3.4 (1), 3.3 (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Best Practices:** rule of thumb (1)

#### Photodiodes
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=0)** - [Instructor] A photodiode is basically the opposite of a light emitting diode.
>
> **[0:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=5)** Unlike an LED which converts electrical current passing through it into light, when light shines on the semiconductor junction in a photodiode, the photodiode absorbs energy from the light and converts it into electrical current.
>
> **[0:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=21)** The schematic symbol for a photodiode is similar to the symbol for an LED, except that the arrow points in the other direction to represent light shining onto the photodiode.
>
> **[0:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=32)** Physically, photodiodes come in a variety of shapes and sizes for different applications ranging from small photo cells that can be used to build light detector circuits to large solar panels that can be used to power devices.
>
> **[0:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=45)** Some through hole photodiode components come in a package that looks very similar to an LED.
>
> **[0:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=51)** So be careful not to get them mixed up in your parts scape.
>
> **[0:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=55)** Like LEDs, photodiodes are polarized components, so their orientation in the circuit matters.
>
> **[1:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=61)** The through hole photodiodes that look similar to LEDs use similar features to indicate orientation.
>
> **[1:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=68)** The lead connected to the anode will be longer than the cathode lead and there's usually a flat section on the cathode side of the photodiode's body.
>
> **[1:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=77)** When light shines on the photodiode, the current it produces will flow from the cathode to the anode, which is the opposite of the direction that current flows through a normal forward biased diode.
>
> **[1:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=90)** Remember, photodiodes are just the opposite of LEDs.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=95)** The amount of current generated by a photodiode will depend on the amount of light shining on it.
>
> **[1:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=101)** The more light it gets, the more current it will produce.
>
> **[1:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=105)** I can actually measure the current produced by a photodiode using just my DMM.
>
> **[1:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=109)** It'll be a tiny amount of current, so I'll set this DMM to its smallest current measurement range which is 20 microamps.
>
> **[1:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=117)** When I connect the DMM probes to the terminals of this photodiode, I can see that it's producing about 4.5 microamps from the light that's currently shining on it.
>
> **[2:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=126)** If I move my hand to cast a shadow over the photodiode, the output current drops down to less than a microamp because the photodiode is getting less light energy that it can convert into electricity.
>
> **[2:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=139)** And if I shine a flashlight on the photodiode to give it more light, the current it produces will increase to around 10 microamps.
>
> **[2:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=148)** Photodiodes are commonly used in photodetector circuits that sense the amount of light shining on them.
>
> **[2:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=154)** These photodetectors show up in a wide range of consumer electronic devices, including CD players, smoke detectors, and infrared TV remotes.
>
> **[2:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=162)** I can build a very simple photodetector circuit with just a photodiode and a resistor in series connected to a DC voltage source.
>
> **[2:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=171)** In this configuration, the diode's cathode is connected to the positive side of the voltage source, so it will be reverse biased.
>
> **[3:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=180)** As a reverse biased diode, it blocks current from the voltage source from passing through it.
>
> **[3:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=185)** But as light shines on the diode, it'll allow some of those electrons to flow through and generate a small amount of current that flows out of the anode down through the resistor.
>
> **[3:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=196)** According to Ohm's Law, when current flows through a resistor, it'll create a voltage across the resistor which we can easily measure with a multi-meter or using the analog to digital converter on a microcontroller system like the Arduino Platform.
>
> **[3:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=211)** So to demonstrate that, I'll use the five volt source from an Arduino Uno microcontroller board to reverse bias a photodiode connected in series with a 330 kiloohm resistor and I'll measure the output voltage across that resistor using analog input channel zero.
>
> **[3:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=229)** I've chosen to use a 330 kiloohm resistor here because the amount of current produced by the photodiode is so small and I need that large of a resistance to produce a large enough voltage for the Arduino to measure it.
>
> **[4:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=242)** You may need to use a different resistor value based on the photodiode you're using and the light conditions in your room.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=249)** I've written a simple Arduino program that repeatedly reads the voltage on analog input channel zero and prints the voltage value to the serial port.
>
> **[4:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=258)** I've also included a conditional if/else statement within the program to determine whether the detector circuit is in the light or the dark based on whether the measured voltage is above or below a certain threshold value, which I configured in the program.
>
> **[4:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=273)** I've included the code for this program in the exercise files as Photodiode_Arduino_Demo.ino.
>
> **[4:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=281)** With my Arduino program running, I can see that the light detector circuit produces around 2.9 volts from the ambient light in this room.
>
> **[4:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=289)** And the program says that there is light.
>
> **[4:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=292)** When I cover it with my hand to cast a shadow, I can see how much the voltage drops and the program says that it's dark.
>
> **[4:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=299)** It took a bit of testing for me to determine the voltages that my circuit would produce in these two conditions so I could set the voltage values in my software to easily distinguish between light and dark.
>
> **[5:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=310)** It's possible to build a light detector circuit with similar functionality using other types of light sensitive components, such as a photoresistor.
>
> **[5:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=318)** And the fact that photodiodes and photoresistors can both be used for similar purposes often leads to confusion between them, but they are different components that work in different ways.
>
> **[5:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=329)** Photodiodes produce a current that is proportional to the amount of light shining on them, whereas photoresistors change their resistance depending on the amount of light shining on them.
>
> **[5:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=341)** There are lots of other light sensitive components that can be used to build specialized light detectors, such as phototransistors and photomultiplier tubes, but deciding which one of those many options is best for a specific application is beyond the scope of this course.
>
> **[5:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=356)** To keep things simple, when you need a photodetector, I recommend sticking with either a photoresistor or a photodiode because they're easy to use and can create light detector circuits that are good enough for most hobbyist projects.
>
> **[6:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=370)** Photoresistors can usually give you a more sensitive measurement than photodiodes, but the downside is that photoresistors react much more slowly to changes.
>
> **[6:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=380)** So if you need to measure something that changes slowly like the ambient light in a room, a photoresistor would be good for that.
>
> **[6:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/photodiodes-14913895?u=76281980&t=387)** On the other hand, if you want to measure something that changes quickly like a fast blinking LED, you would be better off using a photodiode because they're able to react to changes in light much more quickly than photoresistors.

> [!info]- Semantic Content
>
> **Env Vars:** led (4), dmm (3)
> **Analogies:** similar to (3), such as (2)
> **Versions:** 4.5 (1), 2.9 (1)
> **CLI Commands:** cd (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Zener diodes
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=0)** - Unlike normal diodes, which are used to block current in the reverse direction, Zener diodes are intentionally used to conduct reverse current in the breakdown mode.
>
> **[0:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=10)** They're a special type of diode that's designed to very precise breakdown voltage called the Zener breakdown or Zener voltage.
>
> **[0:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=19)** When the reverse voltage across the Zener diode is increased to that Zener voltage, the Zener diode will enter the breakdown mode and allow current to flow through it in the reverse direction.
>
> **[0:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=29)** So the reverse voltage drop across the Zener diode will never exceed that constant breakdown voltage.
>
> **[0:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=37)** Since the Zener diodes are used in such a unique way, they get their own unique symbol, which looks like a standard diode symbol but the cathode lines are slightly crooked at the ends.
>
> **[0:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=47)** Knowing the Zener voltage of a specific diode is critical to using it, so the breakdown voltage value is usually printed next to the symbol on a schematic diagram.
>
> **[0:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=57)** The value 5V1 put in next to this Zener diode means it has a Zener breakdown voltage of 5.1 volts.
>
> **[1:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=65)** Be careful not to confuse the symbol for a Zener diode with the symbol for a Schottky diode which has curly ends on the cathode bar.
>
> **[1:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=73)** Although the two symbols look somewhat similar, they are very different types of diodes that are used for very different purposes.
>
> **[1:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=81)** The fact that Zener diodes break down to allow reverse current at a very specific voltage, means they can be used to create a constant reference voltage from a higher and potentially changing voltage source.
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=94)** In this simple voltage regulator circuit, as long as the input voltage is higher than the Zener breakdown of 5.1 volts, the Zener diode will enter into its breakdown mode and allow reverse current to flow through it, maintaining a steady 5.1 volts as the output voltage from the circuit.
>
> **[1:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=114)** To demonstrate that, I've built the voltage regulator circuit on my breadboard, and I'm using a variable power supply to provide the input voltage to the circuit.
>
> **[2:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=123)** Channel one of my oscilloscope is displaying the input voltage in yellow and channel two is displaying the regulated output voltage in blue.
>
> **[2:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=131)** When the input voltage is below the Zener breakdown point of 5.1 volts, the diode acts like an open circuit to block current.
>
> **[2:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=140)** So the output voltage is basically the same as the input.
>
> **[2:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=144)** However, when the input voltage increases above the Zener breakdown point of 5.1 volts, the diode breaks down to let enough current through it to maintain a constant 5.1 volt output.
>
> **[2:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=156)** I can vary that input voltage and as long as it's greater than 5.1 volts the Zener diode will hold the output steady.
>
> **[2:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=163)** The resistor plays an important role on this circuit because it limits the amount of reverse current that'll flow through the diode, when it's in the breakdown mode, to prevent the diode from conducting too much reverse current and burning itself up.
>
> **[2:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=178)** However, that resistor creates a few limitations when using this circuit.
>
> **[3:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=182)** Since the output voltage across the Zener diode remains constant at 5.1 volts, any extra input voltage will have to be dropped across that resistor.
>
> **[3:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=193)** For example, if the input voltage was six volts, 0.9 of those volts would be dropped across the resistor because the output voltage is held constant at 5.1 volts.
>
> **[3:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=204)** If the limiting resistor was say 100 ohms, according to ohm's law, a 0.9 volt drop across a 100 ohm resistor means nine milliamps will flow through the resistor.
>
> **[3:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=217)** So this simple regulator circuit can provide up to nine milliamps of current at 5.1 volts to whatever load is attached to the output.
>
> **[3:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=226)** Any of that nine milliamps that doesn't go to the load will pass through the Zener diode to ground instead.
>
> **[3:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=233)** Extra current drains through the Zener diode to maintain the 5.1 volt output to the load.
>
> **[3:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=238)** Now, if this load tries to draw more than the nine milliamps of current at 5.1 volts, due to ohm's law, that will require a larger voltage drop across the resistor, because all of that current going to the load has to first pass through the resistor.
>
> **[4:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=255)** Increasing the voltage across the resistor, to provide that additional current, would in turn decrease the voltage across the Zener diode.
>
> **[4:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=263)** And with less than 5.1 volts across the Zener diode, it'll no longer be in the breakdown region; The diode will become reverse-biased and act like an open circuit to block current.
>
> **[4:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=273)** So at this point, the load is basically just connected to a six volt supply with a hundred ohm resistor in the way, and the voltage being supplied to the load would be something less than the desired 5.1 volts.
>
> **[4:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=285)** As that example demonstrates, Zener diodes do not work well for regulating the voltage to loads that draw large amounts of current.
>
> **[4:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=294)** I could modify the circuit from earlier to provide more current to the load by lowering the resistance of the limiting resistor, but that would require my limiting resistor to dissipate more power, which leads to another problem to consider.
>
> **[5:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=307)** Since the resistor's role in this circuit is to drop the input voltage down to the Zener voltage, which it does by dissipating energy as heat, this circuit does not work well to regulate down input voltages that are significantly higher than the Zener voltage.
>
> **[5:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=325)** For example, if the input voltage was 24 volts, that would create an 18.9 volt drop across the 100 ohm resistor.
>
> **[5:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=334)** And, according to ohm's law, that produces 189 milliamps of current.
>
> **[5:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=340)** That much voltage and current would require the resistor to dissipate several watts of power, and that would quickly burn up one of the standard little quarter watt resistors I usually keep in my parts kit.
>
> **[5:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=351)** Now, all of these limitations about not drawing too much current, and don't try to bring down too high of an input voltage may sound incredibly restrictive.
>
> **[6:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=360)** But the point is Zener diodes are not intended to regulate the voltage that supplies power to a device.
>
> **[6:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=366)** There are other components and circuits that exist to do that.
>
> **[6:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=370)** The voltage produced by a Zener diode should just be used as a reference voltage for other circuit elements that need it.
>
> **[6:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=377)** For example, when working with micro controllers and other digital devices, it's common to need to produce a 3.3 reference voltage when you only have a five volt power supply.
>
> **[6:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=387)** And this is a great use case for a Zener diode because all you need is a 3.3 volt Zener diode and a resistor.
>
> **[6:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=394)** As long as you keep those limitations in mind, and don't try to draw too much current, and don't try to bring down too high of a voltage, this Zener diode based regulator circuit should work just fine.
>
> **[6:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=405)** Another type of diode that's very closely related to the Zener diode is a Transient Voltage Suppression diode, or TVS diode.
>
> **[6:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=414)** The purpose of a TVS diode is to protect a circuit from voltage spikes, or electrostatic discharge, by diverting that energy to ground.
>
> **[7:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=423)** A TVS diode is like a Zener diode, except that it doesn't conduct in either direction until its breakdown voltage is reached.
>
> **[7:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=433)** For that reason, you can think of a TVS diode as two Zener diodes facing each other with their cathodes connected together, which is what a common symbol for TVS diodes looks like.
>
> **[7:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=445)** If the voltage in either direction exceeds the breakdown voltage, the TVS diode will allow reverse current to flow through it.
>
> **[7:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=454)** You'll often see this TVS symbol show up on schematics near a device's power supply.
>
> **[7:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=460)** For example, on the schematic for revision 2.1 of the Raspberry Pi Micro Controller Board, there's a five volt TVS located near the board's five volt USB power supply.
>
> **[7:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=472)** That TVS is there to protect the board from any unwanted power surges on the USB cable, providing power to it.
>
> **[7:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=478)** It's not being used to regulate down a higher input voltage to provide power to the device.
>
> **[8:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=484)** It's just there to protect against unexpected voltage spikes.
>
> **[8:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/zener-diodes-14916247?u=76281980&t=488)** Although the schematic symbol for the TVS looks like two Zener diodes stuck together on the actual raspberry pie board, the TVS diode is really a special purpose TVS chip which is how the TVS is usually implemented in real devices.

> [!info]- Semantic Content
>
> **Versions:** 5.1 (14), 0.9 (2), 3.3 (2), 18.9 (1), 2.1 (1)
> **Env Vars:** tvs (13), usb (2)
> **Code Keywords:** require (3), pass (2), let (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1)
> **Warnings:** be careful (1)
> **Speakers:** - unlike (1)


### 5. 4. Bipolar Junction Transistors

#### What is a transistor?
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=1)** - A transistor is an electronic component that acts like a valve to control the amount of current passing through it.
>
> **[0:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=7)** Much like how this valve on the faucet controls the amount of water flowing through the hose.
>
> **[0:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=13)** A transistor has three terminals.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=15)** One terminal brings current into the transistor.
>
> **[0:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=18)** And a second terminal carries that current out.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=20)** The third terminal is like this handle and it's used to control the amount of current passing through those other two terminals.
>
> **[0:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=27)** Now, unlike this handle, which I adjust by physically moving, we control the current through a transistor by using an electrical signal.
>
> **[0:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=35)** Based on that electrical signal, I can have the transistor operating in one of three modes.
>
> **[0:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=41)** I could turn the transistor so that the valve is completely open, and the current passes through it, more or less unrestricted.
>
> **[0:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=48)** This is known as the saturation mode and the transistor is basically acting like a short circuit.
>
> **[0:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=54)** On the other extreme, I could close that valve all the way to completely block the flow of current through the transistor.
>
> **[1:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=61)** Now the transistor is operating in the cutoff mode, like an open circuit.
>
> **[1:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=66)** When I use a transistor to select between one of these two modes, either completely open or completely closed, I can use the transistor to switch on or off parts of a circuit.
>
> **[1:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=77)** And computers are built of millions or even billions of tiny little transistors doing just that, switching on and off to represent ones and zeros of digital information.
>
> **[1:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=87)** But a transistor doesn't just have to be used in either on or off modes.
>
> **[1:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=92)** It can also operate in the third mode known as the active region.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=96)** When it's in the active region, it's as if the handle was somewhere in the middle.
>
> **[1:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=100)** And in the active region, small changes to the amount of current at that input control terminal make much larger changes to the amount of current passing through the transistor.
>
> **[1:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=110)** This allows the transistor to be used as an amplifier to take small input signals and make them much larger output signals.
>
> **[1:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=118)** There are two main types of transistors that you'll encounter.
>
> **[2:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=121)** Bipolar junction transistors, which are referred to as BJTs.
>
> **[2:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=126)** And field effect transistors, or FETs.
>
> **[2:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=129)** Although both types of transistors have three terminals, those terminals are given different names in BJTs and FETs because those two types of transistors have different physical structures.
>
> **[2:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=142)** On a BJT, the terminals are called the base, emitter, and collector.
>
> **[2:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=147)** And on FET, they're called the gate, source, and drain.
>
> **[2:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=151)** Conceptually though, both types of transistors perform a similar function.
>
> **[2:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=157)** The base terminal on a BJT and the gate terminal on a FET act like the valve handle on my faucet.
>
> **[2:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=163)** They're used to control the flow of current between the other two transistor terminals.
>
> **[2:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=168)** Now, the way that those two types of transistors are controlled is different.
>
> **[2:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=173)** The amount of current that a BJTs lets through is controlled by the amount of current into its base terminal.
>
> **[3:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=180)** Whereas FETs are controlled by voltage at the gate.
>
> **[3:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=183)** But from a high level, they're both just electrically controlled valves that are used to regulate an external source of current.
>
> **[3:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=192)** Since transistors have the ability to control the flow of current through them, based on another electrical signal, they fall into a category of devices known as active components, which includes transistors as well as the more complex integrated circuit components like operational amplifiers, which are built using transistors.
>
> **[3:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=211)** Active components require an external source of power to operate.
>
> **[3:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=216)** And because they draw power from an external source, they can be used to amplify a signal, which means they can produce an output signal with more power in it than the original input signal.
>
> **[3:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=228)** The opposite of active components are a category of devices called passive components, which includes resistors, capacitors, inductors, and even diodes.
>
> **[4:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=240)** Passive components cannot be controlled by another electrical signal.
>
> **[4:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=244)** They only respond to the voltage across them and the current through them.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=249)** But unlike active components, passive components can operate without an external power source.
>
> **[4:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=256)** Although it's possible to build passive circuits containing only passive components that provide a voltage gain, meaning they increase or decrease the voltage of a signal, passive components cannot produce a power gain.
>
> **[4:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=270)** The power out of a passive circuit will always be less than or at the very best equal to the input power.
>
> **[4:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=278)** Almost all circuits will include some combination of passive components, but they need to have at least one active component to be considered an active circuit.
>
> **[4:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=288)** According to some definitions for a circuit to be properly called electronic it has to contain active components, controlling the flow of electricity.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-a-transistor-14920032?u=76281980&t=298)** I tend to throw around the term electronic somewhat generously to describe both active and passive circuits, but active circuits really are what make electronics exciting.

> [!info]- Semantic Content
>
> **Tools:** terminal (7)
> **Code Keywords:** switch (1), function (1), require (1), throw (1)
> **Env Vars:** bjt (2), fet (2)
> **Definitions:** known as (3), is an  (1)
> **CLI Commands:** make (3)
> **Speakers:** - a (1)

#### NPN bipolar junction transistors
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=0)** - [Teacher] A bipolar junction transistor, or BJT, consists of three alternating layers of doped N-type and P-type semiconductor material joined together.
>
> **[0:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=11)** And there were two ways that those three layers of material can be stacked.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=15)** The BJT on the left is called an NPN transistor because it contains a section of P-type material sandwiched between two N-type sections.
>
> **[0:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=24)** And its counterpart on the right is a PNP transistor because it has two P-type sections with a region of N-type material in the middle.
>
> **[0:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=34)** For now, I'll just focus on how an NPN transistor works.
>
> **[0:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=39)** From a physical standpoint, the three alternating layers of material create two P-N junctions.
>
> **[0:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=45)** Now at first glance, those back to back P-N junctions might look somewhat like a pair of diodes with their cathodes connected together pointing away from each other.
>
> **[0:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=55)** This is a common simplification that many people like to use when explaining BJTs, but it's important to recognize that this is a major simplification.
>
> **[1:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=65)** If you try to understand how a transistor can behave like two diodes, you'll just end up confusing yourself because it doesn't.
>
> **[1:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=72)** You cannot replicate a transistor on your breadboard by connecting two diodes together, they are physically different things.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=80)** There are several important aspects of the N and P layers that give the BJT its unique behavior.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=86)** For one, the middle layer of a BJT between the two junctions is designed to be as thin as possible which affects how the holes in electrons shift around amongst the BJT layers as it operates in different modes.
>
> **[1:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=100)** Additionally, the top and bottom layers will have different amounts of doping concentrations.
>
> **[1:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=106)** So each of the two P-N junctions will behave slightly differently.
>
> **[1:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=110)** A bipolar junction transistor is not symmetrical.
>
> **[1:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=115)** Each of the N and P-type regions is connected to one of the three BJT terminals called the collector, the base, and the emitter.
>
> **[2:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=125)** You can think of the base terminal like the handle of a valve.
>
> **[2:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=128)** I'll be applying a signal to the base terminal to control the transistor, turning it on or off.
>
> **[2:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=135)** The amount of voltage and current that I provide at the base will control the amount of current that can pass between the other two terminals.
>
> **[2:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=143)** The emitter and collector were given their respective names because in an NPN transistor, when it's turned on, electrons begin their journey through the transistor at the emitter.
>
> **[2:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=154)** They flow up through the base, and then pass through the collector on their way out.
>
> **[2:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=159)** However, since by convention we say that electrical current is the flow of holes, which represent the absence of electrons and those holes move in the opposite direction of the electrons, the conventional current through an NPN transistor, flows from the collector terminal to the emitter terminal.
>
> **[2:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=179)** - The schematic symbol for an NPN has an arrow that indicates the direction of conventional current flow through the transistor.
>
> **[3:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=186)** On the symbol shown here, the top terminal is the collector, the bottom terminal with the arrow is the emitter, and the base terminal is connected to the flat bar on the left.
>
> **[3:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=196)** Now, before diving into how the BJT operates, it's important to go over some common notation that's used to describe the various voltages involved.
>
> **[3:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=206)** The voltage at each of the transistor terminals relative to ground, is labeled using a single subscript.
>
> **[3:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=213)** VC is the collector voltage, VB is the base voltage, and VE is the emitter voltage.
>
> **[3:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=222)** A double subscript is used to indicate the voltage between two transistor terminals.
>
> **[3:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=227)** So VBE is the voltage drop between the base and the emitter, and VCE is the voltage drop from the collector to the emitter.
>
> **[3:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=239)** When using an NPN transistor, the voltage at the collector has to be higher than the emitter.
>
> **[4:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=245)** So VCE will always be positive.
>
> **[4:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=248)** That's a requirement because the current through an NPN always flows from the collector to the emitter.
>
> **[4:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=256)** I'll use a similar set of subscripts to refer to the current flowing in and out of each of the terminals.
>
> **[4:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=261)** IB indicates the current entering the base terminal, IC is the current flowing into the collector, and IE is the current exiting the emitter.
>
> **[4:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=272)** When the same letter is repeated in the subscript for a voltage, that indicates a power supply voltage.
>
> **[4:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=278)** VCC is the positive power supply voltage associated with the collector, and VEE is the negative supply voltage associated with the emitter.
>
> **[4:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=290)** It's the relationship between all of those voltages and currents at the transistors terminals that determines its operating mode.
>
> **[4:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=297)** And it's the responsibility of the circuit designer to build up an appropriate network of other components surrounding the transistor to control those voltages and currents to meet their needs.
>
> **[5:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=308)** Now that's a task easier said than done, and designing transistor circuits really is its own art form.
>
> **[5:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=314)** For simplicity, as I dive into the transistors operating modes, I'll focus on just the transistor and the voltages and currents directly at its terminals.
>
> **[5:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=324)** But keep in mind that those input voltages and currents are coming from a network of other components surrounding the transistor that I'm just not showing.
>
> **[5:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=334)** When that transistor is operating in the cutoff mode, it's considered to be fully off.
>
> **[5:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=339)** It acts like a closed valve on a faucet and prevents any current from passing through.
>
> **[5:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=345)** My NPN will be in the cutoff mode when the voltage drop from the base to the emitter is less than a certain threshold voltage, referred to here as VTH.
>
> **[5:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=357)** Now to understand where that threshold voltage comes from, remember, that inside of an NPN transistor there are two P-N junctions which kind of look like diodes.
>
> **[6:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=368)** Although as a whole the BJT doesn't behave like two connected diodes, if I focus on just the bottom P-N junction between the base and the emitter terminals, I'll see that it does behave similar to a diode which means it will require a certain amount of forward voltage to turn on.
>
> **[6:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=387)** For most common BJT transistors, that threshold to turn on the base emitter junction is usually somewhere around 0.7 volts, which corresponds to the forward voltage that's necessary to turn on the bottom diode-like junction.
>
> **[6:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=402)** When the base to emitter voltage is less than 0.7 volts, the bottom diode will be in the cutoff region which means no current flows into the base, and therefore no current flows between the collector and the emitter.
>
> **[6:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=415)** The transistor is basically acting like an open circuit between its three terminals.
>
> **[7:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=420)** Now, if I raise that base voltage up to the 0.7 volt threshold, the base to emitter junction will become forward biased and allow current to flow into the base.
>
> **[7:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=432)** The voltage between the base and emitter will not rise above that threshold for the same reason that the voltage across a forward bias diode doesn't increase above its forward voltage threshold.
>
> **[7:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=443)** At this point, it's acting like a short circuit.
>
> **[7:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=446)** Under this condition, the transistor is said to be biased or turned on and it will not limit the amount of current that flows into its base.
>
> **[7:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=455)** So it's very important that whatever circuit is connected to the base terminal is designed to control and limit the current into the base.
>
> **[7:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=463)** That usually involves having a resistor in series with the base terminal.
>
> **[7:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=468)** Now that the transistor is biased, the amount of current that flows into the base will control whether the transistor is operating in the active mode or the saturation mode.
>
> **[7:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=479)** When the amount of current into the base is relatively small, the transistor will be in the active mode where it acts like a partially opened valve to control the current flowing into the collector terminal.
>
> **[8:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=491)** The active mode is often called the linear region because when the transistor is operating in the active mode, the current into the base and collector terminals have a linear relationship with the collector current being equal to the base current times a factor called a current gain.
>
> **[8:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=510)** The transistors current gain or amplification factor is a unit-less value that describes the ratio between the collector and base currents when the transistor is operating in the active mode.
>
> **[8:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=522)** Current gain is usually represented with a capital letter beta, though you'll also see it represented as a lowercase H with the subscript FE.
>
> **[8:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=532)** This beta value is dependent on the transistors physical characteristics, and it will differ from transistor to transistor due to variations in the manufacturing process.
>
> **[9:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=543)** It's rare to encounter two transistors that have the exact same beta characteristics.
>
> **[9:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=548)** To make things even more confusing, the beta ratio doesn't remain stable for all operating conditions.
>
> **[9:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=554)** It can change based on the amount of collector current, the transistors temperature, the frequency of the input signal, and other factors.
>
> **[9:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=563)** Because of all that variability, good transistor circuits will be designed so that their behavior is independent of that transistor's unique beta value.
>
> **[9:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=573)** For simplicity in my examples, I'll assume that my transistors have a beta of 100.
>
> **[9:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=579)** This is a common rule of thumb to use when designing circuits because most basic small signal transistors have beta values around a 100.
>
> **[9:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=588)** If the transistor is operating in the active mode with one milliamp of current flowing into its base, the current flowing into the collector terminal will be 100 times that, which is 100 milliamps.
>
> **[10:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=600)** Now, according to Kirchhoff's Current Law, the amount of current entering any circuit node has to be equal to the amount of current exiting that node because electrons are neither created nor destroyed.
>
> **[10:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=612)** Therefore, all of the current that's entering the transistor through the base and collector terminals, must be exiting through the emitter terminal.
>
> **[10:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=621)** The emitter current will be equal to the sum of the base and collector currents.
>
> **[10:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=627)** So if the base current is one milliamp and the collector current is 100 milliamps, the emitter current will be 101 milliamps out of this NPN transistor.
>
> **[10:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=639)** As the current into the base terminal is increased or decreased, the current through the collector and emitter will change accordingly.
>
> **[10:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=646)** If the base current increases to two milliamps, the collector current will be 100 times that or 200 milliamps, and the emitter current will be 202 milliamps.
>
> **[10:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=657)** In the other direction, if the base current was lowered down to half a milliamp, the collector current would decrease to 50 milliamps so the emitter current would only be 50.5 milliamps.
>
> **[11:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=672)** One of my favorite ways to understand the transistors behavior is using a simple model known as the Transistor Man which was made famous by the book, "The Art of Electronics."
>
> **[11:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=682)** Imagine that inside of every transistor, there's a tiny little man.
>
> **[11:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=686)** His job is to look at the amount of current flowing into the base terminal, which behaves like a forward biased diode connected to the emitter.
>
> **[11:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=694)** And then based on what he sees, he adjusts the resistance of a rheostat on the other side between the collector and emitter to control the amount of current flowing into the collector.
>
> **[11:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=705)** The transistor man's entire goal in life is to maintain that beta relationship between the base and collector current.
>
> **[11:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=712)** When he sees the base current decrease, he'll raise the rheostat's resistance to reduce the collector current.
>
> **[11:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=719)** And when he sees the base current increase, he'll lower the rheostat's resistance to let in more collector current.
>
> **[12:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=726)** Now, if the base current increases too much, the transistor man will lower the rheostat as much as he can until it basically acts like a short circuit between the collector and the emitter.
>
> **[12:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=738)** At this point, the transistor man runs into a problem.
>
> **[12:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=741)** Because he can no longer maintain the relationship between the base and collector, he's letting as much current as possible into the collector.
>
> **[12:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=749)** If the base current continues to rise, there's nothing he can do to increase the collector current more.
>
> **[12:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=756)** When that happens, the transistor is operating in the saturation mode.
>
> **[12:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=760)** The transistor is considered to be fully on and acts like an open valve on a faucet or a short circuit, letting current flow freely from the emitter to the collector.
>
> **[12:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=771)** Since the transistor is acting like a short circuit, ideally, the voltage drop between the collector and emitter should be zero.
>
> **[13:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=780)** In reality, there will be a small voltage drop between the saturated transistors, collector and emitter.
>
> **[13:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=786)** That drop is usually around 0.2 volts or less, and it's a special enough value that it gets its own subscript indicating that it's the saturated collector emitter voltage.
>
> **[13:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=798)** It's important to note that in this condition, the base voltage, VB, will actually be higher than the collector voltage.
>
> **[13:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=806)** And both the base and collector will be higher than the emitter.
>
> **[13:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=811)** Since the saturated transistor lets current flow freely between the collector and emitter, it'll be up to whatever circuits are connected to those two terminals to limit the current through the transistor.
>
> **[13:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=822)** For example, if the circuit connected to the collector terminal only provides 200 milliamps of current in the saturated state, if the base current was five milliamps, then the output from the emitter would be 205 milliamps.
>
> **[13:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=837)** Even though the transistor is saturated, it can never violate Kirchhoff's Current Law.
>
> **[14:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=842)** The relationship that the emitter current equals the base plus collector current will always hold true.
>
> **[14:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/npn-bipolar-junction-transistors-14915550?u=76281980&t=849)** If the base current increased from five to 10 milliamps, the collector current would remain the same at 200 milliamps because the circuit's saturated, but the emitter current would increase to 210 milliamps in accordance with Kirchhoff's law.

> [!info]- Semantic Content
>
> **Env Vars:** npn (10), bjt (9), vce (2), pnp (1), vbe (1)
> **Tools:** terminal (16)
> **Code Keywords:** pass (2), raise (2), from, (1), require (1), let (1)
> **Definitions:** is a  (5), is called (1), known as (1)
> **Versions:** 0.7 (3), 50.5 (1), 0.2 (1)
> **CLI Commands:** node (2), make (1)
> **Analogies:** similar to (1), imagine (1), for example (1)
> **Warnings:** keep in mind (1), note that (1)

#### PNP bipolar junction transistors
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=0)** - [Instructor] A PNP bipolar junction transistor is the counterpart to an NPN transistor, working in basically the same, but opposite fashion.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=9)** So the easiest way to understand how a PNP works is to compare it to the NPN.
>
> **[0:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=16)** Structurally, where the NPN transistor consists of a section of P-type material sandwiched between two N-type sections, the PNP transistor has two P-type sections with a region of N-type material in the middle.
>
> **[0:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=32)** In terms of usage, both transistors use the same amount of current at their base terminals to regulate the current flowing between the other two terminals.
>
> **[0:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=41)** However, the direction of those currents is different between the two types of transistors.
>
> **[0:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=47)** The control current for an NPN flows into the base terminal, and the larger regulated current flows from the collector to the emitter.
>
> **[0:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=58)** In a PNP, on the other hand, current flows out of the base terminal, and the regulated current through the transistor flows in the opposite direction, from the emitter to the collector.
>
> **[1:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=70)** One key difference between the two types of transistors is that in NPN transistor, electrons are treated as the important carriers, but in PNP transistors, the important carriers are the holes, which are the absence of electrons, and represent positive charge.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=86)** So, unlike the emitter in a NPN transistor, which emits electrons, the emitter in a PNP transistor emits holes.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=96)** Those holes travel from the PNP's emitter to its collector terminal.
>
> **[1:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=100)** And since by convention we say that electric current flows in the direction of the holes instead of the direction of electrons, the conventional current through a PNP flows from its emitter to the collector, along with the holes.
>
> **[1:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=115)** The schematic symbol for a PNP looks similar to the symbol for an NPN, except the arrow is pointing in the opposite direction, to indicate that the current through a PNP flows into the emitter.
>
> **[2:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=129)** Since the current through a PNP flows from the emitter to the collector, the voltage at its emitter terminal will always need to be higher, or more positive, than the collector terminal.
>
> **[2:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=141)** That's the opposite of an NPN transistor, whose collector voltage is always higher than the emitter.
>
> **[2:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=148)** Since it's common practice to organize schematic drawings such that the circuit nodes near the top of the page are at a higher voltage than nodes near the bottom of the page, you'll usually see PNP transistors drawn with their emitter terminal at the top, because it's at the higher potential.
>
> **[2:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=164)** Whereas NPN transistors will have their emitter terminal at the bottom, because it's lower.
>
> **[2:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=170)** In both cases, the arrow on the symbol is always connected to the emitter.
>
> **[2:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=175)** Now, I have a hard time remembering which symbol is the PNP and which is NPN, so to keep things straight, I like to use the mnemonic "not pointing in" to remember that the arrow on an NPN transistor is pointing away from the bar.
>
> **[3:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=191)** It's a slightly odd-sounding negated statement, but it works.
>
> **[3:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=195)** I don't have a similar mnemonic to describe the PNP, so if the not-pointing-in statement doesn't apply, you're looking at a PNP.
>
> **[3:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=203)** A PNP transistor has the same three operating modes as an NPN.
>
> **[3:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=209)** In cutoff mode, it acts like an open circuit to block current between the emitter and collector.
>
> **[3:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=215)** In the active mode, it lets some amount of current through, proportional to the base current.
>
> **[3:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=221)** And in the saturation mode, it acts like a short circuit, allowing current to freely flow between the emitter and collector.
>
> **[3:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=228)** The conditions that cause PNP transistors to behave in these three operating modes are basically the opposite of an NPN transistor.
>
> **[3:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=237)** For that top diode-like junction between the base and emitter to become forward-biased, the voltage at the transistor's base needs to drop below the emitter voltage by a certain threshold, which is usually around negative 0.7 volts.
>
> **[4:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=253)** I've chosen to describe that value in terms of the base voltage minus the emitter voltage.
>
> **[4:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=259)** So the value is negative, indicating that the base voltage is 0.7 volts lower than the emitter.
>
> **[4:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=266)** For compactness, I'll use the standard label of V BE to indicate that difference between the base and emitter.
>
> **[4:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=274)** If V BE is greater than the negative 0.7 volt threshold, the PNP transistor will be in the cutoff mode.
>
> **[4:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=282)** The top diode-like junction is off, so the transistor blocks any current from passing through it and acts like an open circuit.
>
> **[4:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=290)** When the base voltage drops low enough below the emitter to reach that threshold, the PN junction between the emitter and base acts like a forward-bias diode, and turns on, allowing the transistor to begin operating in the active mode.
>
> **[5:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=305)** In the active mode, the amount of current passing through the transistor will vary, based on the amount of current flowing out of the base.
>
> **[5:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=312)** The transistor will allow a proportional amount of current to flow out through the collector, based on the transistor's individual current gain, or beta factor.
>
> **[5:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=322)** The active-mode PNP transistor will produce a collector current that is equal to beta times the base current.
>
> **[5:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=330)** All of that current flowing out of the base and emitter terminals needs to come from somewhere, so in accordance with Kirchhoff's current law, the current flowing into the emitter terminal will be equal to the sum of the base and collector currents exiting the transistor.
>
> **[5:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=347)** As the amount of base current increases or decreases, the emitter and collector currents will follow these equations to rise and fall too, as long as the transistor remains in the active mode.
>
> **[5:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=358)** If the base current increases too much, the PNP will become saturated.
>
> **[6:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=362)** The emitter terminal has maxed out the amount of current it can draw from whatever source it's connected to, so the saturated transistor no longer follows the linear relationship between the base and emitter currents.
>
> **[6:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=376)** Just as with an NPN transistor, when a PNP becomes saturated, it acts like a short circuit for current between the emitter and collector.
>
> **[6:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=386)** But there will still be a small voltage drop between those two terminals, of around minus 0.2 volts or less.
>
> **[6:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=393)** Again, I've made this value negative to indicate that the collector is at a lower potential than the emitter.
>
> **[6:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=400)** Since there is a negative 0.7 volt drop from the base to the emitter, and only a minus 0.2 volt drop from the collector to the emitter, the voltage at the base terminal of a saturated PNP will be lower than the voltage at either of the other two terminals.
>
> **[6:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=417)** The emitter voltage will be the highest, and the collector will be slightly below that.
>
> **[7:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=423)** If I look at that alongside the voltage conditions required for an NPN transistor to be in the saturation mode, I can see that the greater-than and less-than symbols are just oriented in opposite directions.
>
> **[7:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=436)** In fact, for each of the three transistor operating modes, the voltage relationship between the emitter, base, and collector terminals will have the opposite polarities for NPN versus PNP transistors.
>
> **[7:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/pnp-bipolar-junction-transistors-14919085?u=76281980&t=450)** Just flip the greater-than and less-than signs around to convert the expression for one type of transistor to the other.

> [!info]- Semantic Content
>
> **Env Vars:** pnp (23), npn (16)
> **Tools:** terminal (10)
> **Versions:** 0.7 (4), 0.2 (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### BJT characteristics
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=0)** - [Instructor] There are several varieties of bipolar junction transistors that are rated to handle different amounts of voltage, current, and power for different types of applications.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=9)** For every different type of NPN transistor, there's a complementary PNP counterpart with similar characteristics to go along with it.
>
> **[0:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=18)** For example, the BC547 is a common NPN transistor that works well for low-powered applications with moderately high voltages in current.
>
> **[0:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=29)** Its PNP counterpart is the BC557.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=33)** The BC337 and BC327 are another complimentary pair of transistors that can handle a bit more current than the BC547 and 557.
>
> **[0:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=45)** The TIP29 and TIP30 transistors are designed for medium power switching applications and can dissipate up to two or three watts.
>
> **[0:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=53)** And they're high powered cousins, the TIP3055 and TIP2955, can dissipate up to 90 watts.
>
> **[1:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=61)** For this video, I'll dive into the data sheet for a transistor known as the 2N3904, to discuss several of the important characteristics to consider when choosing the right transistor to use for a project.
>
> **[1:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=74)** The 2N3904 is a very common NPN transistor.
>
> **[1:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=78)** It's a good, general purpose transistor to use for switching or amplifying small signals.
>
> **[1:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=83)** I always keep my parts kit stocked with a handful of 2N3904s and their PNP counterpart, the 2N3906.
>
> **[1:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=93)** To find a data sheet for the transistor, I'll go to my search engine and type in the part number, 2N3904, and the word "datasheet."
>
> **[1:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=102)** I see that there are several data sheets available for the 2N3904 transistor from different manufacturers.
>
> **[1:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=108)** And for this video, I'll look at this PDF link, hosted on [mouser.com](https://mouser.com), which is for the 2N3904 transistor from Fairchild Semiconductor.
>
> **[1:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=118)** The first page of this data sheet shows the three different types of device packages that are available for this transistor.
>
> **[2:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=125)** The picture on the left, labeled as TO-92, is a common package that's used for a variety of different transistor types.
>
> **[2:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=133)** TO stands for transistor outline, and the package consists of a plastic case with three long metal leads on one side for each of the three transistor terminals.
>
> **[2:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=144)** The other two device packages shown here are SOT packages, which stands for small outlying transistor.
>
> **[2:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=151)** SOTs are surface mount components with a small footprint for compact printed circuit board designs.
>
> **[2:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=158)** For prototyping circuits on my breadboard, I tend to use transistors with the TO-92 package type.
>
> **[2:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=164)** The transistor type is indicated by a marking printed on the flat side of the plastic case.
>
> **[2:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=170)** Now that marking can be really small and is often hard to read, so you may need to get a magnifying glass to help you identify the transistor.
>
> **[2:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=177)** According to this data sheet, the marking on these 2N3904 transistors will be 2N3904, and that's convenient, but don't expect all transistors to simply have their part number printed on them.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=190)** You should always refer to the data sheet for your specific component.
>
> **[3:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=194)** The pin configuration for the component can also vary between manufacturers and different types of transistors.
>
> **[3:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=201)** Again, refer to the data sheet.
>
> **[3:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=203)** The pins on this particular transistor go in the order of emitter, base, collector, going from left to right.
>
> **[3:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=211)** You can use the flat side of the transistor package to orient yourself, so you know which side is which.
>
> **[3:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=217)** The amount of power that the transistor can dissipate will be related to its physical size and the materials used in the package.
>
> **[3:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=225)** The TO-92 package is relatively small and it's only able to dissipate a few hundred milliwatts.
>
> **[3:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=231)** Now that works fine for the 2N3904, which is intended for amplifying and switching relatively small signals, but power transistors on the other hand, usually need to dissipate several watts of power.
>
> **[4:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=243)** So they require a larger package to stay cool, like the TO-220.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=249)** The TO-220 is a common package for power transistors that has a metal plate on the back to help transfer heat away from the semiconductor inside.
>
> **[4:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=259)** On its own, the TO-220 can safely dissipate about one watt into the air around it, but it's more commonly used with an external heat sink that attaches to the back metal plate with thermally conductive grease.
>
> **[4:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=272)** With an external heat sink in place, the TO-220 package can dissipate up to about 50 watts.
>
> **[4:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=279)** Moving on down to the second page of the data sheet, brings us to the device's absolute maximum ratings.
>
> **[4:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=286)** Like all electronic components, transistors have physical limits to the amount of voltage and current they can safely handle.
>
> **[4:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=293)** Exceeding any one of these maximum rating values can cause permanent damage to the component.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=298)** The collector emitter voltage rating, listed in the data sheet as V CEO, is the maximum voltage that the transistor can withstand between its collector and emitter terminals.
>
> **[5:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=311)** That comes into play when using the transistor in the cutoff mode, where it acts like an open circuit.
>
> **[5:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=316)** It's an especially important rating to pay attention to when using the transistor as a switch because when it's switched off, it'll have the full collector to emitter voltage across it.
>
> **[5:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=328)** Since bipolar junction transistors contain a pair of PN junctions, there's a rating for the maximum voltage that can be safely placed across each of those dialed like junctions in their reverse bias directions.
>
> **[5:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=341)** V CBO is the maximum voltage from the collector to the base which would reverse bias that top PN junction, and V EBO is the maximum voltage from the emitter to the base, which would reverse bias the bottom junction.
>
> **[5:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=357)** According to the datasheet, this transistor can handle a maximum collector current of 200 milliamps.
>
> **[6:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=364)** Notice that it's labeled as the maximum continuous current, meaning this transistor can handle a constant flow of 200 milliamps through its collector.
>
> **[6:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=373)** When looking at other transistor data sheets, you'll often encounter specifications for the maximum pulsed collector current, as shown here on the data sheet for a TIP29 power transistor.
>
> **[6:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=384)** The pulse current is higher than the continuous DC current because the transistor can dissipate more power in short bursts than in a steady stream.
>
> **[6:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=394)** It's important to note that the maximum current rating listed here is based on the amount of power the transistor can dissipate when it's operating in the saturation mode, which means it will have the smallest possible voltage drop from the collector to the emitter.
>
> **[6:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=410)** The power dissipated by a transistor is equal to its collector current, times the collector emitter voltage.
>
> **[6:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=418)** When this transistor is saturated, it'll have a collector emitter drop of about 0.2 volts.
>
> **[7:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=424)** So if it has 200 milliamps of collector current, it'll only need to dissipate 40 milliwatts of power.
>
> **[7:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=431)** However, if the transistor is not saturated, then the emitter collector voltage could be much larger.
>
> **[7:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=438)** And in that case, the transistor will likely exceed the maximum power dissipation rating or the collector emitter voltage rating, before it reaches the 200 milliamp collector current limit.
>
> **[7:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=451)** The thermal characteristic section describes the amount of power this transistor can dissipate.
>
> **[7:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=457)** These power ratings are always referenced to the ambient temperature of the air surrounding the transistor.
>
> **[7:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=463)** On this datasheet, the transistor is characterized for operating around standard room temperature of 25 degree Celsius, which is around 77 degrees Fahrenheit.
>
> **[7:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=474)** At that ambient room temperature, the 2N3904 can safely dissipate up to 625 milliwatts of power.
>
> **[8:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=482)** However, if the transistor is going to be used in a hotter environment, then its maximum power rating needs to be lowered, or derated.
>
> **[8:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=492)** For every degree above 25 degrees Celsius, you should subtract five milliwatts from that 625 milliwatt maximum.
>
> **[8:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=502)** These temperature considerations are important because heat is the mortal enemy of semiconductor components.
>
> **[8:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=508)** The silicon in a transistor starts to break down and lose its doping, when the temperature rises above around 150 degrees Celsius.
>
> **[8:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=517)** That's why the operating and storage temperature range, listed in the maximum rating section, only goes up to 150.
>
> **[8:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=524)** One hundred fifty degrees Celsius might seem like a lot of heat, but you can quickly reach that fatal temperature range, if you try to dissipate too much power through your transistor.
>
> **[8:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=534)** The third page of this datasheet, lists a variety of electrical characteristics for the transistor.
>
> **[9:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=540)** The first subsection lists characteristics that are relevant when the transistor is operating in the cutoff mode.
>
> **[9:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=547)** The three breakdown voltage parameters are the same values as the breakdown voltages listed in the absolute maximum rating section on the previous page, describing the voltage that each of the three junctions can handle in the reverse bias direction.
>
> **[9:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=561)** When those junctions are reverse biased I expect the transistor to be in the cutoff mode, and it'll act like an open switch.
>
> **[9:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=567)** However, these are not perfect components.
>
> **[9:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=570)** So even in the cutoff mode, a very small amount of current will still leak through.
>
> **[9:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=576)** According to the conditions of the base cutoff current and collector cutoff current parameters, if there are 30 volts between the collector and emitter, and the emitter to base junction is reversed biased, by three volts, then a maximum of 50 nano amps will leak through the base and collector.
>
> **[9:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=594)** The next subsection on this page, lists characteristics related to the transistor when it's turned on.
>
> **[10:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=600)** The DC current gain is the ratio of the collector current to its base current, when the transistor is in the active mode, and it's usually abbreviated as H FE, or with the capital letter beta.
>
> **[10:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=613)** It's the key parameter that characterizes the BJT's ability to amplify a signal.
>
> **[10:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=618)** To simplify calculations, it's common to treat this amplification factor as a constant value, which is usually estimated as 100.
>
> **[10:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=626)** Unfortunately, that beta figure is not actually a constant value in practice, and can vary significantly, depending on the operating conditions.
>
> **[10:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=635)** Because of that variability, this data sheet lists the DC current gain over a range of five operating conditions, where the collector emitter voltage is held constant at one volt, but the collector current ranges from 0.1 milliamps up to 100 milliamps.
>
> **[10:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=652)** The table lists a minimum current gain factor at each condition, and for the middle entry, it lists a maximum value.
>
> **[11:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=660)** Generally, the gain factor will be the highest for the middle range of collector currents, and decreases for very low and very high collector currents.
>
> **[11:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=670)** At that middle collector current, the gain factor can be anywhere from 100 to 300, which is a pretty wide range.
>
> **[11:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=677)** And it really does show how much the gain factor can vary from one component to another.
>
> **[11:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=682)** A bag of transistors is like a box of chocolates, you never know what you're going to get.
>
> **[11:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=687)** Below the DC current gain, this table lists the saturation voltages for the collector emitter and base emitter junctions.
>
> **[11:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=695)** Just like the DC current gain, these parameters can vary depending on the operating conditions.
>
> **[11:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=701)** So they're each listed for two combinations of different base and collector currents.
>
> **[11:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=706)** When the transistor is saturated, we want the collector emitter voltage to be low.
>
> **[11:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=711)** So the transistor acts as close to a short circuit as possible.
>
> **[11:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=715)** That's why the table lists maximum values for the collector emitter saturation voltage, we can always count on it being below those values.
>
> **[12:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=724)** The base emitter saturation voltage is listed in a range from 0.65 to 0.85 volts, which encompasses that rule of thumb value I use, that the base emitter voltage is usually around 0.7 volts.
>
> **[12:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=738)** The remaining two sections of the electrical characteristics table describe the transistor's small signal characteristics and switching characteristics.
>
> **[12:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-characteristics-14918139?u=76281980&t=746)** They're related to how quickly the transistor can change its output in response to input signal changes, and they're beyond the scope of this course.

> [!info]- Semantic Content
>
> **Env Vars:** npn (3), pnp (3), bc547 (2), tip29 (2), bc557 (1)
> **Definitions:** is a  (5), stands for (2), known as (1)
> **Code Keywords:** switch (2), type. (1), case. (1), require (1), case, (1)
> **Versions:** 0.2 (1), 0.1 (1), 0.65 (1), 0.85 (1), 0.7 (1)
> **Analogies:** for example (1), picture (1), just like (1)
> **Best Practices:** you should always (1), rule of thumb (1)
> **CLI Commands:** find (1)
> **URLs:** [mouser.com](https://mouser.com) (1)


### 6. 5. Transistor Applications

#### Use a BJT as a switch
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=0)** - In electronics projects, it's common to use a micro controller board, like an Arduino or a Raspberry Pi to control other devices, turning them on or off, but using in Arduino to control something else like an electric motor is a bit more complicated than simply connecting it to the Arduino's digital output pins.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=20)** For one, the motor probably requires a different voltage than the Arduino's output.
>
> **[0:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=26)** My little DC motor is designed to operate at six volts but my Arduino only outputs a five volt signal.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=33)** Another problem is that the amount of output current that an Arduino board can produce is probably a lot less than I need to power my motor.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=42)** What I need here is for the motor to get its power from a dedicated six volt power supply but I need the Arduino to control when it's on or off.
>
> **[0:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=51)** To do that, I can use the transistor as an electrically controlled switch to interface between the two components and enable the Arduino to turn the power on or off to the motor.
>
> **[1:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=63)** Unlike a mechanical switch which contains parts that physically move to open or close a circuit, a transistor switch is turned on or off electronically by controlling the voltage and current at the transistors base terminal to put it in either the saturation or the cutoff mode.
>
> **[1:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=82)** When the transistor is in the saturation mode, it'll act like a closed switch to turn on whatever device is connected to its output.
>
> **[1:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=90)** And when the transistor is in the cutoff mode, it'll act like an open switch, which turns off the connected device.
>
> **[1:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=99)** To use an NPN transistor as a switch, I'll connect the source of my control signal to the base of the transistor and to limit the amount of current that the transistor draws from the controlling device when it's turned on, I'll include a resistor in series between the base and control signal source.
>
> **[1:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=119)** Next I'll tie the emitter terminal to a low fixed voltage, which is almost always ground and I'll connect the collector pin to the device I want to control power to which will be connected to its power source on the other side, as shown here.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=134)** Since this circuit will be switching a motor on and off and motors tend to act as an inductive load, I'll also include a flyback diode here to protect my circuit from potentially damaging flyback voltage spikes.
>
> **[2:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=147)** To turn this motor on, all I need to do is raise the control voltage enough so that the base emitter junction turns on, which is usually around 0.7 volts and then provide enough current into the base to saturate the transistor.
>
> **[2:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=163)** When it's saturated, the transistor acts similar to a short circuit between the collector and emitter, which is like a closed switch.
>
> **[2:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=171)** The motors turned on and it draws current from the six volt power supply.
>
> **[2:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=176)** To turn the motor off, I simply lower the control signal down to ground which means the voltage between the base and emitter will be less than the threshold to turn on the transistor.
>
> **[3:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=187)** The transistor will be in the cutoff mode where it acts like an open switch to prevent current from flowing through the motor.
>
> **[3:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=193)** Most microcontroller devices like an Arduino or Raspberry Pi, output digital signals that switch between zero volts to represent a low value and 3.3 or five volts to represent a digital high value.
>
> **[3:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=207)** And those voltages work great for toggling a bipolar junction transistor switch on or off.
>
> **[3:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=212)** However, the output pins on a microcontroller board are usually only designed to output a small amount of current.
>
> **[3:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=218)** And if the transistor tries to draw more current than it can handle, that might damage the controller.
>
> **[3:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=224)** When the transistor is turned on, the junction between the base and emitter acts like a forward bias diode, which allows current to flow freely into the base.
>
> **[3:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=234)** And that's why it's important to include a limiting resistor between the source of the control signal and the base terminal.
>
> **[4:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=241)** Without that limiting resistor there, the transistor might try to draw more current than the attached controlling device can provide.
>
> **[4:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=248)** So this resistor serves a similar purpose to the current limiting resistor connected in series with a light emitting diode.
>
> **[4:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=255)** As a rule of thumb, for most micro controller based hobby projects, one kilo ohm is a good value to use for the current limiting resistor.
>
> **[4:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=264)** If I connect this circuit to the digital output line of an Arduino micro controller, which outputs five volts to represent digital high, 0.7 volts of that will be dropped between the transistors base and emitter terminals, which leaves 4.3 volts to be dropped across the one kilo ohm resistor.
>
> **[4:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=283)** According to Ohm's law, 4.3 volts dropped across a one kilo ohm resistor will only draw 4.3 milliamps from the Arduino, which is well within the current output capabilities on my little Arduino microcontroller board.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=298)** The other current that I need to consider is the current between the collector and the emitter.
>
> **[5:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=303)** When the transistor is switched on, all of the current going through the motor will flow into the collector terminal and pass through the transistor.
>
> **[5:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=311)** So I need to make sure that I select a transistor that can dissipate enough power to handle that much collector current.
>
> **[5:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=318)** The amount of current through an electric motor is based on the applied voltage across the motor and its internal resistance.
>
> **[5:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=325)** For a simple example, I'll treat that motor as if it's a 100 ohm resistor in series with an inductor.
>
> **[5:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=332)** When the transistor is turned on and saturated, there will be a 0.2 volt drop between the collector and emitter terminals which leaves 5.8 volts to be dropped across the motor, coming from its six volt power source.
>
> **[5:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=346)** According to Ohm's law, 5.8 volts across a 100 ohm resistor allows 58 milliamps of current to flow into the transistor's collector.
>
> **[5:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=357)** If I'm using a 2N3904 BJT which can handle a continuous collector current of 200 milliamps, then this circuit should work just fine.
>
> **[6:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=366)** If you're using a transistor to switch other types of load devices, you'll need to consider that device's unique current characteristics to make sure your transistor can handle it.
>
> **[6:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=375)** Now to demonstrate this circuit, I've written a simple Arduino program that repeatedly toggles digital output pin zero between its high state and its low state about once every second.
>
> **[6:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=388)** I've included the program in the exercise files as Transistor_Switch_Arduino_Demo.ino, if you want to use it as reference.
>
> **[6:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=396)** I've connected that control signal from pin zero of my Arduino to the base of my NPN transistor and I'm using my oscilloscope to display that signal on channel one in yellow.
>
> **[6:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=407)** My bench top power supply is providing six volts through the breadboard power bus to power the motor which is connected to the transistors collector terminal.
>
> **[6:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=417)** Looking at the oscilloscope, I can see that when the Arduino output goes high, the transistor switch turns on and the motor spins.
>
> **[7:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=425)** And when the Arduino's output is low, the transistor switch is off so the motor stays still.
>
> **[7:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=432)** This type of circuit is called a low-side switch because the NPN transistor is on the low or ground side of the device that's controlling.
>
> **[7:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=441)** If I wanted to switch the polarity of the control signal so that my transistor switch turns on when the control voltage is low and off, when it's high, I'll use a PNP transistor instead.
>
> **[7:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=454)** But to use a PNP transistor, I'll need to create a high side switch.
>
> **[7:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=460)** As with the NPN low side switch, the control signal is connected to the PNP transistors base with a resistor in series.
>
> **[7:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=468)** I've connected the PNP's emitter terminal to a constant voltage, but this time it's the high voltage from the power supply.
>
> **[7:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=475)** And the motor I'm controlling, it's connected on the low side between the PNP's collector pin and ground.
>
> **[8:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=483)** The input voltages I use to control a PNP high side switch are the opposite of the control signals for an NPN low side switch.
>
> **[8:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=492)** To turn the switch on, I'll need to provide a high voltage control signal, if I'm using the NPN switch and a low voltage signal for the PNP switch.
>
> **[8:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=502)** And to turn the switch off, the NPN switch requires a low input signal, whereas the PNP switch needs a high input.
>
> **[8:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=511)** As long as my controlling device can produce the necessary high and low control voltages, a PNP switch will work just as well as its NPN counterpart.
>
> **[8:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=522)** But it may not always be possible to produce those required voltages.
>
> **[8:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=527)** One potential challenge of using the high side PNP switch, is that for it to turn off, the control voltage needs to be high enough that the voltage between the base and emitter is less than the 0.7 volt threshold.
>
> **[9:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=542)** If I was using an Arduino to control the circuit shown here, since the Arduino's high output signal is only five volts but the motor's power source is connected to six volts, my Arduino can't produce a high enough voltage to turn this switch off.
>
> **[9:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=557)** This switch will forever be stuck on.
>
> **[9:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=560)** However, if the supply voltage for the motor was lower, let's say just five volts, then the PNP switch would work just fine.
>
> **[9:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=568)** This relationship between the control and supply voltages is important to consider when choosing whether to use an NPN or PNP transistor switch.
>
> **[9:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-a-switch-14915546?u=76281980&t=577)** In general I tend to use NPN low side switches more often than their PNP high side counterpart because I know I can always control it with an Arduino or a Raspberry Pi, regardless of the supply voltage that's connected to the load.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (32), interface (1), raise (1), pass (1), let (1)
> **Env Vars:** pnp (13), npn (10), bjt (1)
> **Versions:** 0.7 (3), 4.3 (3), 5.8 (2), 3.3 (1), 0.2 (1)
> **Tools:** terminal (6)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **UI Navigation:** switch to (1)
> **Exercise Files:** exercise files (1)

#### Use a BJT as an amplifier
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=0)** - [Instructor] Transistors have two fundamental applications, building electrically controlled switches and amplifying electrical signals.
>
> **[0:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=8)** Now, although I frequently use transistors as switches, I'll admit I rarely use individual transistors to build amplifiers because in day-to-day circuit building, it's a lot easier for me to use another type of active component called an operational amplifier, which I'll cover later in this course.
>
> **[0:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=26)** That said, even if you never build an amplifier out of BJTs, it's helpful to understand how they work because transistors are a fundamental component behind active circuits.
>
> **[0:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=38)** An amplifier is an electronic device that can increase the power of a signal, meaning the signal coming out of an amplifier has more power than the signal that was put into it.
>
> **[0:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=49)** Now, an amplifier just can't magically create that power out of nothing.
>
> **[0:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=53)** That's not physically possible.
>
> **[0:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=55)** So it will need to get its power from somewhere else.
>
> **[0:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=58)** The amplifier works by drawing electrical power from a separate source and then uses that power to increase the amplitude of a signal's voltage or current.
>
> **[1:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=68)** There's a wide variety of amplifier circuit designs that uses BJTs, but they're all based on one of three basic configurations, the common collector, common base, and common emitter.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=80)** The name of each of those configurations indicates which of the three BJT terminals is tied to a common voltage, while the other two terminals serve as the amplifier's input and output.
>
> **[1:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=92)** Each configuration can provide different amounts of voltage or current gain and have differing input and output impedance characteristics.
>
> **[1:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=101)** In the common collector configuration, the collector terminal is tied to a common fixed voltage, while the input signal is sent to the base terminal and the output comes from the emitter.
>
> **[1:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=113)** For simplicity, I'm just showing the BJT here to explain the concept, but in practice all of these configurations will require additional components not shown here to properly bias the transistor, which means put the transistor in the correct DC voltage or current operating conditions to keep it in the active region so it can be used to amplify an AC input signal.
>
> **[2:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=137)** The common collector configuration is often called an emitter follower or a voltage follower because the output voltage from the emitter will roughly match or follow the voltage of the input.
>
> **[2:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=150)** The circuit doesn't provide any voltage gain.
>
> **[2:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=154)** However, the common collector can provide a lot of current gain, which makes it great for use as a voltage buffer, which is a circuit that provides as much current as the load connected to its output needs, while keeping its output voltage the same as the input voltage signal.
>
> **[2:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=171)** A voltage buffer is useful for connecting a signal source with a high input impedance to a load circuit that has a low input impedance to prevent the load from affecting behavior of the source.
>
> **[3:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=184)** The common collector configuration has a high input impedance and a low output impedance, which enables it to bridge the impedance difference between the circuit elements.
>
> **[3:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=195)** The common base configuration is probably the least common of the three.
>
> **[3:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=200)** In it, the base terminal is tied to a common reference, the emitter terminal receives the input signal, and the collector terminal produces the output.
>
> **[3:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=209)** The common base configuration has a low input impedance and a high output impedance, which makes it useful as a current buffer.
>
> **[3:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=217)** It can provide a reasonable amount of voltage gain while keeping the output current roughly equal to the input current.
>
> **[3:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=225)** The third and final transistor configuration is the common emitter.
>
> **[3:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=229)** As the name implies, the emitter is tied to a common fixed voltage, the input signal is applied to the base, and the output is produced at the emitter terminal.
>
> **[3:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=239)** The common emitter circuit is the most popular of the three transistor arrangements because it's well-suited for amplifying voltages, and it's also capable of providing current gain.
>
> **[4:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=250)** The common emitter does have one quirk, though, which is that its output signal will be an inverted or flipped version of the input signal.
>
> **[4:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=259)** Since the common emitter is the most popular configuration, let's dive a little deeper to see what goes into making it work.
>
> **[4:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=266)** I won't be showing you how to design transistor amplifiers from scratch.
>
> **[4:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=270)** That's a complex topic and well beyond the scope of this course.
>
> **[4:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=274)** But I will step through the basic workings of a common emitter amplifier to give you a high-level understanding of how it works.
>
> **[4:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=282)** The first thing I need to do to use this BJT as an amplifier is bias the base to emitter junction to turn the transmitter on so it'll be operating in its active region.
>
> **[4:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=294)** One common way to do that is to use two resistors to create a voltage divider between the power supply and ground to produce the required voltage to bias the base terminal.
>
> **[5:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=305)** In the example circuit shown here, I'll use a 10 kiloohm and a 100 kiloohm resistor to divide down the voltage from a 12-volt power supply.
>
> **[5:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=314)** The combination of those two resistors will produce around 1.1 volts at the middle, which is connected to the base terminal and is a high enough voltage to turn on my transistor.
>
> **[5:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=326)** A small amount of current will flow down from the 12-volt power supply through the 100-kiloohm resistor, and into the base.
>
> **[5:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=334)** When the transistor is turned on, there will be a voltage drop of around .7 volts from the base to emitter, which leaves .4 volts to account for across the bottom resistor that's connected to the emitter terminal.
>
> **[5:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=347)** Now, to use this transistor as an amplifier, I want to keep it operating in the active region where the amount of base and collector current has a linear relationship that follows the transistor's gain factor data.
>
> **[6:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=360)** If I make the bottom resistor connected to the emitter, one kiloohm, then according to Ohm's law, 0.4 volts across that 1-kiloohm resistor will draw just .4 milliamps of current from the emitter.
>
> **[6:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=376)** The amount of current that flows into the collector will be slightly less than the current from the emitter.
>
> **[6:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=382)** The exact amount will depend on this transistor's individual beta value.
>
> **[6:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=387)** But to keep this example simple, for now I'll pretend like the collector and emitter currents are the same.
>
> **[6:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=394)** Both have .4 milliamps flowing through them.
>
> **[6:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=397)** If I make the top resistor that's connected to the collector terminal a 10-kiloohm resistor, that .4 milliamps flowing through it will create a voltage drop of four volts.
>
> **[6:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=409)** That voltage drop connected to the 12-volt power supply voltage means the output of this circuit will be at eight volts.
>
> **[6:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=417)** The values shown here represent the amplifier's quiescent or quiet state.
>
> **[7:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=423)** The circuit is inactive.
>
> **[7:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=424)** It's not driving any output load, and its input signal isn't changing.
>
> **[7:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=428)** Now, that's not very exciting, so let's connect the input to an AC signal source.
>
> **[7:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=434)** That AC input signal could come from any number of sources, such as the audio signal coming out of an MP3 player.
>
> **[7:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=441)** I want to make sure that the input signal only includes AC components because if the input signal has any DC offset, that could interfere with my carefully crafted DC biasing voltage created by the voltage divider.
>
> **[7:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=455)** So to protect against that, I've included a capacitor in series with the AC signal source in the transistor's base terminal.
>
> **[7:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=463)** This is called a coupling capacitor, and it acts as a high pass filter to block any DC energy from the incoming signal.
>
> **[7:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=472)** Just the AC signal components will pass through, and then they'll be added to the DC bias voltage that I created with the voltage divider on the other side.
>
> **[8:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=482)** I'll need to choose a capacitor value that will allow the AC frequencies that I care about in my signal to pass through.
>
> **[8:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=489)** For the resistor value shown here, using a one-microfarad capacitor should produce a high pass filter that will let most frequencies in the audio range through.
>
> **[8:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=498)** Additionally, if I want to connect the output from this amplifier to a device that's expecting an AC signal, I'll need to include a coupling capacitor on the output to remove the DC offset from the amplifier's output before sending that signal on to whatever load I have connected downstream.
>
> **[8:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=515)** The quiescent voltage at the transistor's collector terminal is eight volts, but the coupling capacitor filters out that DC energy so the output will be centered at zero volts.
>
> **[8:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=526)** Now that I have all of the components in place, let's look at what happens when I give this circuit a sine wave as the input signal.
>
> **[8:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=535)** Assuming the frequency of the sine wave is within the pass band of the coupling capacitor on the front, when the sine wave swings high to a semi-amplitude of 100 millivolts, that AC energy will pass through the coupling capacitor and raise the voltage at the transistor's base by 100 millivolts, bringing it up to 1.2 volts.
>
> **[9:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=557)** Since the .7-volt drop from the base to emitter remains constant, that extra 100 millivolts will get dropped across the bottom emitter resister, which in turn increases the current through the transistor from .4 to .5 milliamps.
>
> **[9:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=574)** That increases the current through the top 10-kiloohm resistor, making the voltage drop across it increase from four to five volts.
>
> **[9:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=583)** The larger drop of five volts across the top collector resistor means the output voltage at the collector terminal will decrease by one volt, down from eight volts to only seven volts.
>
> **[9:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=598)** That one-volt drop was part of a changing AC signal, so it passes through the output coupling capacitor, making the output voltage at that moment in time -1 volt.
>
> **[10:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=609)** As you can see, there's quite a chain of events that occur between changes to the input and changes to the output signal.
>
> **[10:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=617)** When the input sine wave swings down to -100 millivolts, that causes all of those values to shift in the other direction.
>
> **[10:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=626)** The voltage at the transistor's base will drop to one volt, which reduces the voltage drop across the bottom emitter resistor to only .3 volts.
>
> **[10:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=637)** The current through the transistor will drop to three milliamps, which creates less of a voltage drop across the top resistor connected to the collector.
>
> **[10:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=646)** And that smaller voltage drop of just three volts means the output voltage directly at the collector terminal will be nine volts.
>
> **[10:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=655)** And finally, after passing through the output coupling capacitor to remove DC bias, the corresponding output signal at that point in time will be +1 volt.
>
> **[11:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=666)** So when the input voltage was at +100 millivolts, the output was -1 volt.
>
> **[11:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=672)** And when the input voltage was -100 millivolts, the output was +1 volt.
>
> **[11:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=679)** Since gain is calculated as the output voltage over the input voltage, this amplifier circuit has a voltage gain of -10.
>
> **[11:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=688)** Now, I made a lot of simplifications throughout that example to focus on just the basic concepts at play.
>
> **[11:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=695)** As you can see, there are a lot of interconnected pieces that make this circuit function, which is why amplifier design is an art of its own.
>
> **[11:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-bjt-as-an-amplifier-14916246?u=76281980&t=703)** If you want to learn more about how to build your own amplifier circuits, then I recommend diving into the reference sources I've listed in the Exercise Files.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), let (4), else. (1), require (1), raise (1)
> **Tools:** terminal (14)
> **Definitions:** is an  (2), is a  (2), is called (1)
> **CLI Commands:** make (4)
> **Env Vars:** bjt (3), mp3 (1)
> **Versions:** 1.1 (1), 0.4 (1), 1.2 (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)

#### Challenge: Motor control
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=0)** - [Instructor] It's time for another challenge.
>
> **[0:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=8)** This is your chance to practice using bipolar junction transistors as switches to control an electric motor.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=15)** A simple brushless DC motor can spin clockwise or counterclockwise depending on the polarity of the supply voltage and the direction of the current through it.
>
> **[0:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=25)** If the motor is being controlled by a basic high side or low side switch, that switch can only turn the motor on or off but it can't change the orientation of the voltage or current to control the motor's direction.
>
> **[0:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=39)** In many applications, such as when working with robotics, motors need to turn in both the clockwise and counterclockwise direction to move back and forth.
>
> **[0:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=49)** And to control motors to do that, it's common to use a configuration of four transistors called an H bridge.
>
> **[0:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=56)** The H bridge gets its name because the circuit resembles the capital letter H.
>
> **[1:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=61)** It consists of two NPN and two PNP transistors positioned around the motor as shown here.
>
> **[1:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=68)** Except that on this diagram, the transistor symbols are missing their arrows to indicate which type of transistor they should be.
>
> **[1:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=76)** For this challenge, I need your help to determine whether each of these transistors should be an NPN or a PNP, and how each one should be oriented.
>
> **[1:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=88)** The H bridge is controlled by two input signals on the left and right side, labeled here as A and B.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=96)** It's common to use two digital output lines from a micro controller device to control those inputs.
>
> **[1:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=103)** When those input signals are being produced by a digital micro controller, they can be in one of two possible states, low or high.
>
> **[1:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=111)** In the low state, the input signal will be zero volts.
>
> **[1:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=114)** And in the high state, the signal will be a positive voltage.
>
> **[1:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=118)** In the case of an Arduino micro controller, the digital high output is five volts.
>
> **[2:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=124)** When input A is in the low state and input B is in the high state, the transistors in the H bridge will be turned on and off so that current will flow from the voltage source connected to the top left transistor, in this case five volts, and that current will flow down through the motor and then through the bottom right transistor to ground.
>
> **[2:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=146)** The direction of the current through the motor will cause it to turn clockwise.
>
> **[2:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=152)** If the input signals are swapped so that B is in the low state and A is in the high state, then current will flow from the top right transistor through the motor and down to ground through the bottom left transistor.
>
> **[2:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=166)** Since current through the motor is flowing in the opposite direction from before, it'll cause the motor to turn counterclockwise.
>
> **[2:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=173)** If input A and B are both high or input A and B are both low, the no current will flow through the motor, so it'll be stopped.
>
> **[3:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=184)** This table lists four possible states for the two input signals and the corresponding motor direction for each one.
>
> **[3:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=191)** Your goal for this challenge is to determine which of the transistors in the H bridge configuration should be NPN, which of the transistors should be PNP, and how each of those transistors should be oriented in the circuit.
>
> **[3:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=206)** Which side should be the emitter versus the collector?
>
> **[3:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=211)** Now, in addition to removing the arrows from the transistor symbols, I've also simplified this diagram by removing several other circuit elements from it.
>
> **[3:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=220)** If you're feeling up for an extra challenge, determine where you should place resistors within this H bridge circuit to protect the transistors from drawing too much current.
>
> **[3:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=230)** Take some time to think through this challenge.
>
> **[3:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-motor-control?u=76281980&t=231)** And when you're done, be sure to watch my solution video to see how I approach the problem.

> [!info]- Semantic Content
>
> **Env Vars:** npn (3), pnp (3)
> **Code Keywords:** switch (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Motor control
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=0)** - [Instructor] Let's take a look at my solution for the challenge to design the H-bridge circuit to control a DC motor.
>
> **[0:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=12)** I began by thinking about whether each of the transistors would be acting as a high side switch or a low side switch connected to the motor.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=20)** The top two transistors are both acting as high side switches because they're connected to the five volt power source and they control whether or not current flows down to the motor that's connected below them.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=33)** I use PNP transistors to create a high side switch.
>
> **[0:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=36)** So both of those top two transistors will be PNP.
>
> **[0:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=40)** The same logic applies to the bottom two transistors.
>
> **[0:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=43)** They're both serving as low side switches because they're connected between the motor and ground.
>
> **[0:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=49)** And since I use NPN transistors to create low side switches, both of the bottom transistors will be NPN.
>
> **[0:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=58)** Now I need to figure out how to orient each of these transistors.
>
> **[1:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=63)** Since the top two transistors are PNP transistors and current flows down into them from the five volt source, they should be oriented so their emitter terminal is connected to the power source and the collector is connected to the motor.
>
> **[1:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=79)** As for the NPN transistors at the bottom, current flows down from the motor and passes through them on its way to ground.
>
> **[1:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=86)** So the NPN transistors should be oriented with their emitter terminals connected to ground and they're collector terminals connected to the motor.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=95)** Remembering that the arrow on the transistor symbol points in the direction of the emitter current helped me to correctly orient those transistors.
>
> **[1:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=103)** Now, when any of these are turned on, current will flow in or out of their base terminals, more or less freely.
>
> **[1:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=110)** So to limit that current, I'll include resistors in series between the two control signals and each of the base terminals.
>
> **[1:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=119)** I decided to follow my own rule of thumb and use one kiloohm resistors because they'll limit the current from the control device enough to safely interface with an Arduino microcontroller board.
>
> **[2:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=131)** To check my plan solution before actually building it on a breadboard, I first considered the case when input A is low, which means it's connected to ground, and input B is high at five volts.
>
> **[2:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=143)** Under those conditions, the top left PNP transistor connected to ground will turn on and act like a closed switch.
>
> **[2:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=152)** And the NPN transistor below it will turn off, so it acts like an open switch.
>
> **[2:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=158)** On the right side, with a five volt input signal, the top PNP transistor will be turned off and the bottom NPN transistor will turn on.
>
> **[2:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=168)** So with that combination of transistor switches turned on and off, the current will flow into the top left transistor, down through the motor and out through the bottom right transistor to ground.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=181)** Under the opposite conditions when input A is at five volts and input B is connected to ground, the top left and bottom right transistors will be turned off and to the top right and bottom left transistors will be turned on.
>
> **[3:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=197)** So current will flow into the top right transistor, down through the motor and out through the bottom left transistor to ground.
>
> **[3:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=206)** If both input signals are high at five volts, then both of the top PNP transistors will be off.
>
> **[3:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=213)** So there's no path from the five volt source to ground.
>
> **[3:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=216)** And if both of the input signals are low and connected to ground, then both of the bottom NPN transistors will be off.
>
> **[3:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=224)** So again, there's no path from the five volt power source down to ground.
>
> **[3:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=229)** Now to test out that circuit design, I've written a simple Arduino program that rotates through each of these possible four states on digital output channel zero and one.
>
> **[4:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=240)** The Arduino program holds each of these four possible output states for one second before moving on to the next state and it will repeat this sequence indefinitely.
>
> **[4:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=250)** I've included the program in the exercise files as solution Arduino demo.ino, which you can use as a reference.
>
> **[4:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=258)** I've built the H-bridge circuit on my breadboard using NPN and PNP transistors.
>
> **[4:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=263)** Digital output pin zero from the Arduino is connected to the right side of the H-bridge and digital output pin one from the Arduino is connected to the left side of the H-bridge.
>
> **[4:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=275)** I'm measuring the right side input signal on channel one of my oscilloscope in yellow and the left side input signal is shown on channel two in blue.
>
> **[4:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=286)** To verify that my circuit is working correctly, I can compare the input signals shown on my oscilloscope to the behavior of the motor.
>
> **[4:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=294)** I see that when both of the input signals are either high or low, the motor stays still.
>
> **[5:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-motor-control?u=76281980&t=301)** But when only the signal for the right side is high, the motor turns clockwise and when only the signal for the left side is high, it turns counterclockwise.

> [!info]- Semantic Content
>
> **Env Vars:** npn (8), pnp (7)
> **Code Keywords:** switch (5), let (1), interface (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. 6. Field-Effect Transistors

#### Field-effect transistors
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=0)** - [Instructor] Unlike bipolar junction transistors, which work by biasing a pair of P-N junctions, field-effect transistors turn on and off by using an electric field to control the behavior of a semiconductor material, making it more or less conductive.
>
> **[0:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=16)** There are two main types of field-effect transistors, junction field-effect transistors, referred to as JFETs, and metal-oxide-semiconductor field-effect transistors, or MOSFETs.
>
> **[0:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=30)** There are a lot of similarities between JFETs and MOSFETs, but MOSFETs are more widely used because they have a higher input impedance than JFETs.
>
> **[0:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=39)** So, for this course, I'll be focusing primarily on MOSFETs.
>
> **[0:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=44)** The physical structure of a MOSFET begins with a slab of doped semiconductor material called the body.
>
> **[0:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=50)** And for this example, I'll use P-type semiconductor material for the body.
>
> **[0:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=56)** A small section of oppositely doped material, called a well, is deposited near each end of the body.
>
> **[1:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=62)** And in this case, those wells are in N-type material.
>
> **[1:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=66)** One of those wells is connected to a terminal called the source, and the other well is connected to a terminal called the drain.
>
> **[1:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=75)** Between the two wells, a layer of insulative material called silicon dioxide, which is similar to glass, is laid on top of the body.
>
> **[1:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=84)** And then on top of that insulator is a conductive metal plate connected to a third terminal called the gate.
>
> **[1:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=91)** These three layers down the center are what give the metal-oxide-semiconductor field-effect transistor its name.
>
> **[1:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=100)** To use this type of MOSFET, I'll connect the source terminal to ground and connect the drain terminal to a positive voltage source that will be supplying current through the transistor.
>
> **[1:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=111)** The voltage between the gate and source terminal, labeled here as VGS, is what controls whether this transistor is turned on or off, whether it's operating in the cutoff region or the saturation region.
>
> **[2:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=125)** If the source and gate are at the same voltage, so the difference between them is zero, this type of transistor will be in the cutoff region.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=134)** The P-type body between the two N-type wells puts up a really high resistance that prevents current from flowing between the source and drain terminals.
>
> **[2:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=143)** To turn this transistor on, I'll raise the voltage at the gate until it's above a minimum threshold voltage.
>
> **[2:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=150)** Raising the voltage at the gate terminal means the metal plate attached to the gate will accumulate more positive charge.
>
> **[2:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=158)** And since oppositely charged particles attract each other, the extra positive charge at the gate will attract some of the negative charge from the body, causing it to accumulate at the top, near the insulator layer.
>
> **[2:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=171)** This increased amount of negative charge between the two N-type wells creates a low-resistance path that allows current to flow from the drain to the source.
>
> **[3:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=182)** Now, if I only increase the gate voltage up to the minimum threshold, the transistor will only be partially on and allow some current to pass through.
>
> **[3:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=191)** If I increase the gate voltage to be even higher, that will attract more negative charges towards the gate, creating an even larger channel, which makes the drain-to-source resistance even smaller to allow more current through.
>
> **[3:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=205)** The resistance between the source and the drain when this MOSFET is completely turned on is one of the key characteristics of a MOSFET, labeled here as rDS/ON, and it's often less than 100 milliohms.
>
> **[3:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=219)** It's important to point out that the insulating layer of silicon dioxide between the metal gate and the P-type body prevents current from flowing in or out of the gate terminal, and this highlights one of the key differences between bipolar junction transistors and field-effect transistors.
>
> **[3:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=237)** BJTs are current-controlled devices.
>
> **[4:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=240)** A small amount of input current to the base terminal will produce a much larger current between the emitter and collector.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=249)** MOSFETs, on the other hand, are voltage-controlled devices.
>
> **[4:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=253)** The amount of voltage between the source and gate terminal controls the amount of current that'll flow through the transistor.
>
> **[4:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=260)** That gives the MOSFET a really high input impedance at its gate terminal, which means it will hardly draw any current from the device that's generating the control signal.
>
> **[4:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=271)** Now, just like how bipolar junction transistors come in two opposite flavors, NPN and PNP, MOSFETs also come in two varieties that behave in opposite ways, N-channel and P-channel.
>
> **[4:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=285)** The N-channel MOSFET shown here on the left is the same transistor I demonstrated earlier in this video.
>
> **[4:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=291)** It's called N-channel because when a positive voltage is applied to the gate, it attracts negatively charged electrons to the top of the body, which create a channel for current to pass through between the two N-type wells.
>
> **[5:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=305)** In the P-channel MOSFET on the right, the body is made from an N-type semiconductor material, and the two wells are both P-type material.
>
> **[5:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=313)** As its name implies, the P-channel transistor uses positive charge in the body to create the channel for current to pass through between the two P-type wells.
>
> **[5:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=324)** Turning the P-channel transistor on requires the gate terminal to have a negative voltage relative to the source, to attract those positively charged holes within the body material.
>
> **[5:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=335)** Now, to confuse things just a little bit more, the two transistors shown here are called enhancement mode MOSFETs.
>
> **[5:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=345)** Enhancement mode MOSFETs get that name because when the correct gate-to-source voltage is applied, it enhances the channel between the source and drain, which turns the transistor on and allows current to flow.
>
> **[5:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=358)** Enhancement mode MOSFETs are equivalent to a normally open switch.
>
> **[6:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=363)** Because by default, they're turned off and block current.
>
> **[6:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=366)** You have to apply the correct voltage to them to turn them on.
>
> **[6:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=371)** Depletion mode MOSFETs, on the other hand, act like a normally closed switch.
>
> **[6:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=376)** Because by default, they're turned on and let current through.
>
> **[6:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=380)** When a certain gate-to-source voltage is applied to the depletion mode MOSFET, it depletes the channel's ability to carry current, which turns the transistor off.
>
> **[6:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=390)** So between these different types of channels and modes, there are four main types of MOSFETs, N-channel enhancement mode, P-channel enhancement mode, N-channel depletion mode, and P-channel depletion mode.
>
> **[6:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=405)** The enhancement mode MOSFETs are by far more commonly used than their depletion mode counterparts, so I'll focus on enhancement mode MOSFETs for the rest of this video.
>
> **[6:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=414)** It's important to be aware of the different MOSFET types that exist to avoid using the wrong one.
>
> **[7:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=420)** When using N- and P-channel MOSFETs in a circuit, the orientation of their source and drain terminal will be flipped.
>
> **[7:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=427)** On an N-channel MOSFET, the drain should always be connected to a higher voltage than the source terminal.
>
> **[7:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=433)** So the voltage drop from the drain to the source, or VDS, will be positive.
>
> **[7:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=439)** And on a P-channel MOSFET, the drain voltage should always be lower than the source.
>
> **[7:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=445)** So the drain-to-source voltage drop will be negative.
>
> **[7:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=449)** In practice, N-channel MOSFETs are usually drawn in circuit diagrams with their source terminal on the bottom because it'll often be tied to ground, sometimes through a resistor.
>
> **[7:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=459)** And for P-channel MOSFETs, the source terminal is usually oriented on top because it's connected to a positive supply voltage.
>
> **[7:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=467)** In both cases, the drain terminal is typically connected to the electrical load that the transistor will be regulating current through.
>
> **[7:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=475)** In this configuration, to turn the N-channel MOSFET on, I need to raise the gate voltage until the voltage drop from the gate to the source is greater than a minimum threshold.
>
> **[8:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=487)** To turn on the P-channel MOSFET, on the other hand, I'll need to do the opposite, by lowering the gate voltage until the voltage drop from gate to the source is more negative than the threshold.
>
> **[8:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=501)** Another way to look at that relationship between the gate and the source is that in either type of enhancement mode MOSFET, if the gate and source have roughly the same voltage, the transistor will be turned off.
>
> **[8:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=513)** Raising the gate voltage high enough above the source will cause an N-channel MOSFET to turn on, and lowering the gate voltage far enough below the source will cause the P-channel MOSFET to turn on.
>
> **[8:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=527)** The schematic symbols used to represent enhancement mode MOSFETs have quite a few variations, which can get a bit confusing.
>
> **[8:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=534)** The simplest symbol, shown here with three terminals, is commonly used to represent MOSFETs when they're used in digital circuits.
>
> **[9:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=542)** There's a tiny circle on the P-channel MOSFET to indicate that its control signal has the opposite polarity of the N-channel MOSFET.
>
> **[9:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=552)** Another three-terminal symbol used to represent MOSFETs looks similar to the symbols used for bipolar junction transistors.
>
> **[9:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=559)** In both of these symbols, the arrow is connected to the source terminal, similar to how the arrow on a BJT symbol is connected to the emitter terminal.
>
> **[9:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=568)** And in both cases, the arrow points in the direction of the conventional current flow through the transistor.
>
> **[9:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=576)** Now, the third set of transistor symbols is where things start to get confusing because it adds an extra terminal to the middle, representing the body of the transistor.
>
> **[9:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=587)** Behind the scenes, MOSFETs actually have four terminals, and the fourth terminal is connected to the body or bulk of the transistor.
>
> **[9:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=596)** The reason for having a body terminal is beyond the scope of this video, but you usually don't even need to think about it because the body will be directly connected to the source terminal inside of the transistor package.
>
> **[10:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=608)** This four-terminal MOSFET symbol indicates that by connecting the middle body terminal to the source leg.
>
> **[10:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=616)** Additionally, notice that the arrows have moved from the source terminal to the body terminal.
>
> **[10:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=621)** And more importantly, it's flipped directions.
>
> **[10:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=624)** So pay close attention when you're reading or drawing schematics, to make sure you use the right type of MOSFET.
>
> **[10:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=631)** The broken bar between the source body and drain terminals indicates that this is an enhancement mode transistor, which behaves like a normally open switch, hence the breaks.
>
> **[10:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=643)** In the symbol for a depletion mode transistor, the bar between those three terminals is continuous to indicate that it acts like a normally closed switch.
>
> **[10:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=652)** Finally, one more accessory you might encounter on this symbol is a little upward-facing diode between the source and the drain.
>
> **[10:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=659)** MOSFETs are especially sensitive to electrostatic discharge.
>
> **[11:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=663)** So many MOSFET devices will include an internal diode to protect itself.
>
> **[11:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=669)** Although there are other variations of the MOSFET symbol, these are the primary ones you'll encounter in the wild.
>
> **[11:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=675)** And if you're looking at older circuit diagrams or hand-drawn schematics, you may also see a circle drawn around the transistor symbol, which makes it easier to read in busy drawings.
>
> **[11:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=687)** You can usually find MOSFET components in similar packages as bipolar junction transistors.
>
> **[11:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/field-effect-transistors-14914779?u=76281980&t=693)** The TO-92 is a popular three-terminal package for low-powered MOSFETs that works well for breadboarding circuits, and the TO-220 is its counterpart for high-powered transistors that need to dissipate more heat.

> [!info]- Semantic Content
>
> **Tools:** terminal (29)
> **Env Vars:** mosfet (23), vgs (1), npn (1), pnp (1), vds (1)
> **Code Keywords:** switch (4), pass (3), raise (2), default, (2), case, (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** similar to (2), just like (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** rds (1)
> **Cross-References:** earlier in (1)

#### Use a MOSFET as a switch
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=0)** - MOSFETs are popular for building electronically controlled switches because of their incredibly high input impedance at the gate terminal and their ability to drive high power electrical loads.
>
> **[0:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=11)** The device or circuit that's controlling a MOSFET doesn't need to provide much current to operate the MOSFET as a switch.
>
> **[0:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=17)** It just needs to be able to raise or lower the gate voltage enough to put the transistor into the saturation or cut off modes.
>
> **[0:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=25)** The circuit to create a low side switch with an in-channel enhancement mode MOSFET has a lot in common with the circuit for a low side switch using an NPN bipolar junction transistor.
>
> **[0:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=38)** The BJT has its emitter terminal tied to ground, and the MOSFET has its source terminal tied to ground.
>
> **[0:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=46)** The two transistors also have their respective collector or drain terminals connected to the electrical load the switch is going to be turning on or off.
>
> **[0:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=54)** In this case, a motor attached to a 12 volt power supply.
>
> **[0:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=59)** The difference between these two circuits comes into play when connecting the base and gate terminals.
>
> **[1:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=65)** The BJT switch needs to have a resistor in series between the base and the controlling device to limit the amount of current that BJT will draw into its base when the switch is turned on.
>
> **[1:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=77)** Since the MOSFET has such a high input impedance at its gate there's no need to put a current limiting resistor in series with it.
>
> **[1:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=84)** The gate can be directly connected to the control signal source.
>
> **[1:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=89)** However, I should include a pole down resistor between the transistors gate and the source terminal to help the gate return down to zero volts when the switch is turned off.
>
> **[1:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=101)** The control signals for the low side MOSFET switch are similar to the control signals for a low side BJT switch.
>
> **[1:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=109)** To turn the motor on, I need to provide a positive control voltage or a high signal, and to turn the motor off I need to lower the control signal down to zero volts or ground.
>
> **[2:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=120)** The pull down resistor is included to provide a guaranteed path for any built up charge at the gate terminal to drain down to ground.
>
> **[2:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=128)** So the switch can turn off quickly and fully when the control signal drops to the low state.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=134)** Since I don't want this pull down resistor to draw too much current when the control voltage is in the high state to turn the switch on, I usually use 10 kilo ohms for my pull down resistors.
>
> **[2:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=145)** If I want to control the MOSFET switch with a micro controller board like in our Dyno or a Raspberry Pi, I need to make sure to use a MOSFET that can be turned on and saturated at a low enough voltage to work with the output levels from these microcontrollers.
>
> **[2:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=162)** The digital output pins on many our Dyno boards output a five volt signal to represent digital high, but Raspberry Pi boards can only produce 3.3 volts from the digital output pins.
>
> **[2:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=173)** Unfortunately, a lot of MOSFETs required 10 to 15 volts to turn on, which means you can't control it directly from a micro controller.
>
> **[3:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=182)** So when you're choosing a MOSFET for your next project, always check the data sheet to make sure it will have a low enough gate to source threshold voltage for what you're doing.
>
> **[3:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=192)** The RFP30N06LE N-Channel MOSFET is a popular choice amongst hobbyist for controlling high powered devices directly from low powered microcontrollers.
>
> **[3:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=206)** It has a gate to source threshold voltage that's low enough to make it compatible with your typical three to five volt micro controller output signals.
>
> **[3:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=214)** Additionally, when it's turned fully on, it has a tiny little resistance between the source and drain, that's less than 47 milli ohms.
>
> **[3:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=223)** This transistor can handle up to 60 volts between the drain and source terminals when it's turned off.
>
> **[3:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=229)** And when it's turned on, it can handle up to 30 amps of continuous current flowing through it.
>
> **[3:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/use-a-mosfet-as-a-switch-14918141?u=76281980&t=235)** Those specs make it useful for a wide variety of applications, but if you're going to be using it to switch a load with more than about an amp of current, be sure to strap a heat sink onto it or you'll quickly end up destroying your transistor.

> [!info]- Semantic Content
>
> **Env Vars:** mosfet (10), bjt (4), npn (1), rfp30n06le (1)
> **Code Keywords:** switch (13), raise (1), case, (1)
> **Tools:** terminal (5)
> **CLI Commands:** make (4)
> **Versions:** 3.3 (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - mosfets (1)

#### BJT vs. MOSFET
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=0)** - [Instructor] Although BJTs and MOSFETs can be used for similar purposes, they are different types of transistors that work in different ways and each have their own set of pros and cons.
>
> **[0:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=11)** Deciding whether to use a BJT or a MOSFET for certain projects can be a bit of a struggle.
>
> **[0:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=17)** And unfortunately, there isn't a straightforward answer for which one is best to use.
>
> **[0:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=22)** It depends on what you're doing.
>
> **[0:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=24)** So, to help with planning your next electronics project, I'll discuss some of the pros and cons of each one.
>
> **[0:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=31)** BJTs tend to have better, more linear gain characteristics and can give you a lot higher voltage gain than MOSFETs.
>
> **[0:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=40)** They're also able to handle higher output currents and have a lower output impedance.
>
> **[0:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=46)** That gives BJTs a huge advantage over MOSFETs for building amplifier circuits that need to provide a significant amount of output power and/or drive loads that have low input impedance.
>
> **[0:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=59)** MOSFETs are going to have a harder time driving a low impedance load because they have a higher output impedance.
>
> **[1:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=66)** That said, the advantage of MOSFETs is that they have a very high input impedance so it's easier to couple them with a signal source that has a higher output impedance.
>
> **[1:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=78)** Trying to connect a BJT amplifier to a high impedance signal source can cause problems because the BJT has a lower input impedance.
>
> **[1:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=89)** Another advantage of MOSFETs is that since they're voltage controlled rather than current controlled, they usually consume less power than a BJT.
>
> **[1:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=99)** A MOSFET doesn't require any current to flow through its gate terminal to operate, but a BJT consumes base current whenever it's turned on.
>
> **[1:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=107)** That power efficiency can make MOSFETs more desirable for battery powered applications, where every little bit of power that gets spent matters, especially when the load that it's controlling is variable and could have a low impedance.
>
> **[2:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=123)** However, for controlling a load that draws a fairly small and predictable amount of current, like an LED, using a BJT isn't all that bad.
>
> **[2:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=133)** You can choose the right limiting resistor to keep the base current as small as possible to achieve a reasonable efficiency.
>
> **[2:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=141)** When directly driving a transistor with the 3.3 or five volt output from a microcontroller, it's usually easier to find BJTs that can turn on those voltages than MOSFETs because MOSFETs usually require a gate to source voltage of at least 10 volts to fully turn on.
>
> **[2:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=159)** That makes BJTs the better choice for driving low-powered devices directly from microcontrollers.
>
> **[2:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=166)** And BJTs will usually be cheaper than the corresponding MOSFET that can do that same job.
>
> **[2:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/bjt-vs-mosfet-14914781?u=76281980&t=173)** For high-power applications, driving loads that require significant and variable amounts of current like a large motor, MOSFETs are generally the better choice.

> [!info]- Semantic Content
>
> **Env Vars:** bjt (6), mosfet (3), led (1)
> **Code Keywords:** require (3)
> **CLI Commands:** make (1), find (1)
> **Versions:** 3.3 (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Operational Amplifiers

#### What is an operational amplifier?
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=0)** - [Instructor] When you need to amplify a signal or buffer a signal, filter a signal, or simply add two signals together, look no further than the Operational Amplifier, or Op-Amp for short.
>
> **[0:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=14)** An Operational Amplifier is an electronic component that acts as a voltage amplifier with an incredibly high amount of gain.
>
> **[0:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=22)** It's DC coupled, which means it can be used to amplify both AC and DC signal components, it has two differential input terminals, and has a single ended output.
>
> **[0:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=34)** Op Amps have become popular in modern electronics because they're fairly cheap, easy to use, and they can implement a wide range of operations for processing electrical signals.
>
> **[0:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=45)** If you look at the internal circuitry of an operational amplifier, you'll see a complex network of components.
>
> **[0:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=51)** For example, the Op Amp schematics shown here contains 20 individual transistors that are interconnected to form three separate amplifier stages.
>
> **[1:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=61)** The thing that makes Op Amps so great is that to use them, I don't need to understand how all of this complex, under the hood circuitry actually works.
>
> **[1:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=71)** I can treat that complex Op Amp circuit as a single component, and I just need to remember a few simple rules to use it.
>
> **[1:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=78)** The schematic for an operational amplifier looks like a sideways pointing triangle with five terminals.
>
> **[1:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=85)** The two terminals on the left are differential inputs.
>
> **[1:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=89)** The terminal on the top with the plus sign is called the non-inverting or positive terminal, and the terminal on the bottom with the minus sign is the inverting negative terminal.
>
> **[1:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=101)** As a differential amplifier, the input signal to the Op Amp is the difference in voltage between those two terminals, subtracting the inverting input voltage from the non-inverting input voltage.
>
> **[1:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=114)** The impedance of the input terminals on an Op Amp is designed to be so high that for most practical purposes, I can basically treat the Op Amp as if it has an infinitely high input impedance.
>
> **[2:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=127)** So, when I'm designing an Op Amp circuit, I can pretend like no current will flow into either input terminal.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=134)** That approximation keeps things simple and is often referred to as one of the golden rules of Op Amps.
>
> **[2:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=141)** The output terminal on the right side is single ended, meaning the output voltage will be referenced to the circuit's common ground.
>
> **[2:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=150)** The output terminal is designed to have a very low output impedance, so it can provide lots of current to whatever load is connected to it to produce the desired output voltage.
>
> **[2:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=162)** The last two terminals on the top and bottom of the Op Amp symbol are connected to the positive and negative voltage lines that provide power to the Op Amp, which are called the power rails.
>
> **[2:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=173)** An Op Amp cannot produce an output voltage that is greater than the positive rail voltage or less than the negative rail voltage, so the range between those two supply voltages needs to be big enough to encompass the full range of the expected output signal.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=190)** Different types of Op Amps will be able to handle different supply voltage ranges and will have their own requirements for the relationship between the output signals they can produce and the supply voltage levels.
>
> **[3:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=201)** So, be sure to check the data sheet for that when you're choosing which type of Op Amp to use for a certain circuit.
>
> **[3:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=208)** In schematics, it's common to hide the power rails to reduce clutter in the drawing.
>
> **[3:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=213)** But, even if they're not shown, you always need to connect the power supply rails.
>
> **[3:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=218)** Op Amps are an active component that require an external source of power to function.
>
> **[3:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=224)** For prototyping circuits on a breadboard, I usually use Op Amps that come in an eight pin Plastic Dual Inline Package, or PDIP form factor, which is a rectangular package with two parallel rows of four pins.
>
> **[3:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=239)** Those pins are spaced apart just right so that the component can straddle the trough that runs down the center of the breadboard with one row of pins on each side.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=249)** I typically use a black wire to connect the negative supply rail to the Op Amp, and a red wire to connect the positive supply rail.
>
> **[4:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=258)** The pins on the PDIP are numbered counterclockwise around the package, and the surface of the package will always have some sort of dot or orientation marking to indicate which side is which, so you can find pin number one.
>
> **[4:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=272)** Some Op Amp models like the 741 Op Amp only contain a single amplifier within an eight pin PDIP package.
>
> **[4:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=280)** But other models like the 358 Op Amp can have two separate amplifiers packed into a single package.
>
> **[4:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=287)** The location of the input, output, and power supply pins will vary for different types of Op Amps, so always check the data sheet to make sure you're connecting the part correctly.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=298)** It's easy to destroy an Op Amp by accidentally connecting the wrong pin to power.
>
> **[5:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=303)** And unfortunately, an Op Amp usually doesn't show any visible signs that its been destroyed.
>
> **[5:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=309)** To check whether an Op Amp has been broken, you'll have to measure the output signal with an oscilloscope and decide if it looks like it's supposed to.
>
> **[5:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=318)** Since it functions as a differential amplifier, the output voltage from the Op Amp will be equal to the difference of the non-inverting input voltage minus the inverting input voltage times a gain factor known as the open loop gain, abbreviated here as a AOL.
>
> **[5:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=337)** Op Amps are designed to have an incredibly large open loop gain, usually over a hundred thousand, which makes them incredibly sensitive to small differences between their input terminals.
>
> **[5:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=349)** For example, if the inverting input terminal was at one volt and the non-inverting input terminal was at 1.001 volts, the difference between those two terminals is just one milli volt.
>
> **[6:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=364)** But when the Op Amp scales that with an open loop gain of 100,000, it turns that tiny one milli volt differential input into a hundred volt output signal.
>
> **[6:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=375)** Now, as I mentioned earlier, the Op Amp can't generate output voltages that are greater than or less than its power supply rail voltages.
>
> **[6:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=384)** So, if I had my Op Amp powered by plus and minus 12 volt power sources, that 100 volt output signal would get clipped off.
>
> **[6:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=393)** At the very most, it could only be 12 volts, and depending on the actual capabilities of the Op Amp I was using, it would probably be even slightly less than 12 volts.
>
> **[6:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=405)** If I swap those two input signals so that the inverting input voltage was slightly higher than the non-inverting input, then the Op Amp would see that difference as negative one milli volt, and its output would saturate in the other direction at negative 12 volts.
>
> **[7:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=423)** When the Op Amp is used in this way, it's called the open loop configuration.
>
> **[7:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=427)** The Op Amp simply scales the input by its enormous gain factor, and as you can see, it doesn't take much input to saturate the Op Amps output.
>
> **[7:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/what-is-an-operational-amplifier-14920025?u=76281980&t=437)** That open loop behavior can be useful for some applications like using an Op Amp as a comparator, which I'll cover later in this course, however, to keep those wild voltage swings under control, it's much more common to use a circuit configuration that provides an external path from the Op Amps output back to its input terminals, which creates a closed loop configuration that provides feedback.

> [!info]- Semantic Content
>
> **Tools:** terminal (9)
> **CLI Commands:** rails (3), find (1), make (1)
> **Env Vars:** pdip (3), aol (1)
> **Definitions:** is an  (1), is called (1), is a  (1), known as (1)
> **Code Keywords:** require (1), function (1)
> **Analogies:** for example (2)
> **Versions:** 1.001 (1)
> **Cross-References:** later in (1)

#### Feedback circuits
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=0)** - Many op amp circuits use a closed loop configuration which uses external circuitry to route some portion of the output signal around to feed it back into the op amp as one of the inputs, creating a feedback loop.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=15)** That feedback loop enables the op amp to effectively monitor its output signal.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=20)** So it can keep from overcompensating for changes to the input signal.
>
> **[0:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=24)** That helps the op amp stabilize its behavior to produce and maintain the desired output voltage.
>
> **[0:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=32)** I use a similar form of feedback to stabilize myself when I'm riding a bike.
>
> **[0:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=36)** Imagine for a moment that I'm an op amp.
>
> **[0:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=39)** One of my input are the map directions that I'm getting from my phone.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=42)** And the other input is looking ahead at the road to see where I'm going.
>
> **[0:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=47)** My output based on those inputs is to turn my handlebars to the left or to the right.
>
> **[0:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=52)** Changing my output causes my bike to turn.
>
> **[0:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=56)** And by looking ahead to see where I'm going, I can see if I've turned too much or too little, so I can adjust my output again to compensate.
>
> **[1:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=64)** Right now, my phone is telling me to go straight.
>
> **[1:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=66)** So I'll set my bike in that direction and keep on going.
>
> **[1:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=70)** But I'm not just going to set and forget my bike.
>
> **[1:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=73)** Remember, I'm using closed loop feedback here.
>
> **[1:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=76)** So I'm going to continuously watch the road ahead to see if I drift to the left or the right, so I can compensate by moving back and forth.
>
> **[1:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=84)** - [GPS] Turn right.
>
> **[1:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=85)** - Now my phone is telling me to turn right, so I'll turn my handlebars, look ahead to see where I'm going.
>
> **[1:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=92)** And when I see that I've turned far enough in that direction, I'll adjust my output.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=96)** Now sometimes when I'm making really sharp turns, I might overshoot where I want to go a little, but because I have that feedback, I can make those small adjustments I need to to stay right on course.
>
> **[1:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=107)** But what happens if I don't have that feedback?
>
> **[1:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=110)** What if I'm only paying attention to my cell phone?
>
> **[1:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=113)** - [GPS] Turn left.
>
> **[1:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=114)** - Well, now it's telling me to turn left.
>
> **[1:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=117)** And so I'll respond to that input by turning my handlebars to the left, but I'm not looking where I'm going.
>
> **[2:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=123)** I'm only paying attention to the phone.
>
> **[2:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=125)** This is what's known as an open loop scenario, because I've broken that feedback loop I get by looking ahead to see where I'm going.
>
> **[2:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=132)** I'm going to keep my output in this direction until the phone tells me to do something else.
>
> **[2:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=136)** So I might be going in circles for a while.
>
> **[2:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=141)** When an operational amplifier is used with external feedback, the op amp will attempt to change its output voltage in whatever way is necessary to make the difference between the two input terminals' zero.
>
> **[2:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=155)** This rule, along with the rule that op amp inputs don't draw any current, are the two golden rules of operational amplifiers.
>
> **[2:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=165)** I can represent that process of riding my bike as an op amp circuit by pretending like the instructions I get from my phone's GPS telling me to turn to the left or to the right are in input to the non-inverting op amp terminal.
>
> **[2:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=179)** The output from the op amp is the position of my handlebars to turn the bike to the left or to the right.
>
> **[3:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=185)** And the feedback loop is me observing how much I'm turning, which gets fed back into the input terminal.
>
> **[3:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=192)** If my GPS says to turn slightly to the right and the op amp's output is already turning slightly to the right, the feedback loop will see that the input and output signals are the same.
>
> **[3:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=203)** So the difference between the value at the inverting and non-inverting input terminals is zero.
>
> **[3:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=210)** The output will remain stable there because the circuit is in equilibrium.
>
> **[3:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=215)** If the GPS says to take a hard left, now there will be a difference between the two input terminals because the output state is still turning slightly to the right.
>
> **[3:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=225)** The op amp sees that difference, so it'll adjust its output towards the left to reduce the difference.
>
> **[3:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=232)** If for some reason the op amp overshoots when it's making the change and turns the output too far to the left, or if it undershoots and doesn't turn far enough, the op amp will see those differences and adjust the output accordingly until the two input signals match.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=249)** This type of feedback is called negative feedback because some portion of the output signal is being fed back into the inverting or negative input terminal.
>
> **[4:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=260)** So that feedback value is getting subtracted from the non-inverting input signal.
>
> **[4:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=266)** There are a lot of op amp configurations that use negative feedback because it enables the circuit to achieve stability quickly.
>
> **[4:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=273)** I'll show you several examples of circuits using negative feedback later in this course.
>
> **[4:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=279)** When the feedback signal is routed back to the non-inverting input terminal, that creates positive feedback.
>
> **[4:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=286)** With positive feedback, the output tends to quickly go to one of two states, saturating at the positive supply rail value or the negative supply rail value.
>
> **[4:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=296)** Positive feedback can be useful in certain circumstances, but it's a lot less common to use the negative feedback.
>
> **[5:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=303)** So I won't be focusing on positive feedback in this course.
>
> **[5:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=308)** Looking back at the bicycle analogy, when I removed the feedback loop to use the op amp in the open loop configuration, its output signal is completely separated from the input.
>
> **[5:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=319)** And this is similar to when I don't pay any attention to where my bike is going or how much I've turned the handlebars.
>
> **[5:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=325)** The op amp has no idea how the output and input signals relate to each other or whether the output is even the correct value.
>
> **[5:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=333)** The op amp will simply look at whatever signal it's given as input and then blindly and faithfully try to set the output accordingly.
>
> **[5:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=341)** When my GPS tells me to turn right, I'll turn the handlebars to the right.
>
> **[5:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=346)** But I can only trust that I've turned them to the correct position to get me where I want to go because I don't have any feedback.
>
> **[5:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=353)** And due to the op amp's incredibly high open loop gain, I'll usually end up turning the handlebars way too far to the right until they saturate because they've turned as far as they can go.
>
> **[6:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=363)** It's straightforward to put this analogy relating feedback to riding a bicycle in terms of electrical signals.
>
> **[6:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=371)** The instructions I receive from the GPS telling me to turn to the left or to the right correspond to the positive or negative input voltages.
>
> **[6:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/feedback-circuits-14918138?u=76281980&t=380)** And the output position in my handlebars, turning it to the left or to the right, corresponds to positive or negative output voltages.

> [!info]- Semantic Content
>
> **Env Vars:** gps (7)
> **Speakers:** - [gps] (2), - many (1), - now (1), - well (1)
> **Tools:** terminal (4)
> **Code Keywords:** else. (1), while. (1), match. (1)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), is called (1)
> **Analogies:** imagine (1), similar to (1)
> **Cross-References:** later in (1)

#### Operational amplifier characteristics
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=0)** - [Instructor] There's a wide variety of operational amplifiers that have different characteristics, making them more suitable for some applications than others.
>
> **[0:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=8)** And as with most things in life, you can expect to pay more for the op-amp models that have better performance characteristics.
>
> **[0:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=16)** For the op-amp circuits I'll be building in this course, I'll use the LM358 operational amplifier.
>
> **[0:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=23)** It's a relatively low cost op-amp that works well enough for most low-power hobbyist applications.
>
> **[0:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=29)** And as an added bonus, the LM358 actually contains two separate op-amps within a single package, which can come in handy when building complex designs with multiple op-amps.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=42)** Although there are other op-amps on the market that have better performance characteristics, I found that the 358 is a good go-to part for my own projects.
>
> **[0:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=52)** And it's a good one to start with for beginners.
>
> **[0:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=55)** As I describe some of the key characteristics to consider when choosing an operational amplifier, I'll be looking at the data sheet for the LM358.
>
> **[1:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=64)** To find that data sheet, I'll go to my search engine and type in the part number, LM358, and the word "datasheet."
>
> **[1:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=74)** I see that there are several data sheets available for the LM358 from different manufacturers.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=80)** And for this video, I'll look at this data sheet from Texas Instruments.
>
> **[1:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=85)** This particular data sheet covers four related operational amplifier models.
>
> **[1:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=90)** The LM358, 258, 158 and 2904.
>
> **[1:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=97)** Most of the characteristics will be in common amongst those four models, but where they differ, I'll be focused on the LM358.
>
> **[1:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=104)** The features list on the first page highlights several of the key characteristics for this op-amp, such as the range of supply voltages that it can handle.
>
> **[1:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=113)** The LM358 is designed to be flexible, so I can use it with both single and dual voltage supplies.
>
> **[2:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=122)** When used with a single supply voltage, the negative supply rail should be connected to ground, and the positive rail can be given a voltage anywhere between 3 to 32 volts.
>
> **[2:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=133)** In dual supply mode, the positive and negative voltage rails can handle anywhere from 1.5 to 16 volts in the positive and negative directions.
>
> **[2:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=144)** Located a bit farther down on the features list is the open-loop differential voltage gain, which for the LM358 is typically around 100 dB.
>
> **[2:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=156)** 100 decibels corresponds to a voltage gain ratio of 100,000.
>
> **[2:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=162)** That means when the op-amp is used in the open-loop configuration without any feedback, it only takes a tiny 100 microvolt difference between the input terminals to produce a whopping 10 volt output voltage.
>
> **[2:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=175)** However, an op-amp can never output a voltage that's greater than its power supply rails.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=181)** So if this op-amp was being powered by plus and minus five volt supply rails, even though the open-loop gain should produce a 10 volt output, the op-amp can only really produce five volts.
>
> **[3:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=194)** Now, while an open-loop gain of 100 dB is pretty huge, the op-amp's ability to provide gain will vary depending on the frequency of the input signal.
>
> **[3:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=204)** This graph compares the op-amp's open-loop voltage gain to the frequency of the input signal.
>
> **[3:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=211)** At very low frequencies around DC, the op-amp is able to provide lots of gain, up to that 100 dB.
>
> **[3:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=219)** But as the frequency of the input signal increases, the op-amp's ability to provide voltage gain decreases.
>
> **[3:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=227)** When that input frequency gets up to around 0.7 megahertz, the LM358 op-amp will at best be able to provide a gain of one.
>
> **[3:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=237)** The unity gain bandwidth parameter tells me the highest frequency at which I can use the op-amp with a gain of one before it'll begin distorting my signal.
>
> **[4:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=247)** When I start working with signals over 0.7 megahertz, I'll start to run into problems.
>
> **[4:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=253)** It's possible to find other operational amplifiers that have a much higher bandwidth, but since most of my hobbyist projects involve signals that are down in the kilohertz range, the LM358 works fine for me.
>
> **[4:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=265)** Most of the other parameters in this feature section are covered later in the data sheet, so I'll continue on down.
>
> **[4:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=272)** The third page of the data sheet gives me information about the device package and pin configuration.
>
> **[4:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=279)** The LM358 contains two individual operational amplifiers within a single eight-pin PDIP package.
>
> **[4:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=287)** However, both op-amps share a single power supply.
>
> **[4:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=291)** The positive supply voltage will be connected to pin 8, and the negative supply voltage, or ground if you're using a single-sided voltage supply, should be connected to pin 4.
>
> **[5:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=302)** Pins 1, 2, and 3 on the left side of the package correspond to the input and output terminals of one of the op-amps, and pins 5, 6, and 7 on the other side of the package correspond to the input and output terminals for the other op-amp.
>
> **[5:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=318)** Continuing on down to page 4 of the data sheet, the absolute maximum ratings table describes the maximum supply and input voltages that the op-amp can safely handle before breaking, as well as its range of usable operating temperatures.
>
> **[5:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=335)** Towards the bottom of that page is another related table with several recommended values for those operating conditions if you want to play it safe.
>
> **[5:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=345)** On the fifth page, it's a sizeable table to describe the component's electrical characteristics.
>
> **[5:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=351)** And there's quite a bit listed here, so I'm just going to focus on some of the key parameters.
>
> **[5:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=356)** This op-amp has a typical input offset voltage of three millivolts, which describes the amount of voltage difference that'll appear between the two input terminals even when they're shorted together.
>
> **[6:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=368)** Ideally, since op-amps are differential amplifiers, when there is zero difference between their input terminals, the output voltage should be zero.
>
> **[6:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=378)** However, real world op-amps are not perfect.
>
> **[6:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=382)** Even if their terminals are shorted together so that the inputs are exactly the same, the internal workings of the op-amp will see those inputs as being slightly different from each other.
>
> **[6:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=392)** Around three millivolts different.
>
> **[6:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=395)** That input offset of three millivolts may not seem like much, but if the op-amp is being used in a circuit with a gain of 100, then the output voltage will be off by 300 millivolts.
>
> **[6:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=408)** Some models of operational amplifiers provide offset null terminals that can be used to tune the op-amp with external components to compensate for that offset voltage.
>
> **[6:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=418)** Unfortunately, the LM358 does not have offset in old terminals, so I'm stuck with what I get.
>
> **[7:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=426)** Although it's common to pretend like operational amplifiers have an infinitely high input impedance that prevents any current from flowing into their two input terminals, in reality, the op-amp does require a tiny amount of input current to function.
>
> **[7:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=442)** The LM358 will allow an input bias current of around 20 nano amps to flow into the input terminals.
>
> **[7:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=450)** That current is necessary to bias the internal transistors.
>
> **[7:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=453)** And since op-amps are not perfect components, the amount of current flowing into each of the terminals will differ slightly from each other as described by the input offset current.
>
> **[7:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=465)** These bias and offset current parameters can come into play for certain op-amp circuits that are beyond the scope of this course.
>
> **[7:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=472)** For simplicity, as I look at op-amp circuits later in this course, I'll continue to use the assumption that the op-amp has an infinitely high input impedance and that no current flows into its input terminals.
>
> **[8:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=485)** The output current and short circuit output current parameters describe the amount of current the op-amp can handle at the output terminal, which is designed to have a very low output impedance so the op-amp can provide the necessary current for a variety of attached loads.
>
> **[8:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=501)** The output current is listed for two different conditions.
>
> **[8:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=505)** When the differential input voltage is positive, the op-amp will act as a current source, which means it pushes current out of its output terminal to raise the output voltage.
>
> **[8:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/operational-amplifier-characteristics-14914782?u=76281980&t=517)** And when the differential input voltage is negative, the op-amp will act as a sync, which means current will flow in the other direction, drawing into the output terminal to lower the output voltage.

> [!info]- Semantic Content
>
> **Env Vars:** lm358 (14), pdip (1)
> **CLI Commands:** rails (3), find (2)
> **Code Keywords:** continue (2), require (1), function (1), raise (1)
> **Code Identifiers:** db (3)
> **Versions:** 0.7 (2), 1.5 (1)
> **Tools:** terminal (3)
> **Cross-References:** later in (2)
> **UI Navigation:** go to (1)


### 9. 8. Op-Amp Applications

#### Compare signals
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=0)** - [Instructor] When an operational amplifier is used in the open loop configuration without any feedback, it can be used as a comparator, which looks at the voltage at each of its input terminals and determines which is the largest of the two.
>
> **[0:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=14)** The comparator outputs the voltage connected to either the positive or the negative supply rail to indicate which of the input voltages is higher.
>
> **[0:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=22)** If the voltage at the noninverting input terminal is higher than the inverting input terminal, the comparator will output the voltage from its positive supply rail.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=33)** And if the voltage at the noninverting input terminal is the lower of the two, then the comparator will output the negative supply rail voltage.
>
> **[0:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=43)** The comparator circuit works because in the open loop configuration, the output voltage from the op amp will be equal to its open loop gain, which is abbreviated as AO, times the difference between the noninverting input voltage and the inverting input voltage.
>
> **[1:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=60)** As the noninverting input voltage rises above the inverting input, so the difference between them is positive, the output will rise until it reaches the positive supply voltage and saturates.
>
> **[1:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=72)** A similar thing happens in the other direction when the noninverting input is less than the inverting input.
>
> **[1:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=78)** So their difference is negative.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=80)** The output voltage will fall until it saturates at the negative supply voltage.
>
> **[1:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=85)** Since op amps are designed to have a really high open loop voltage gain, often 100 decibels or more, this linear transition between the two saturation levels is really steep.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=96)** So even a very small difference between the two input voltages will be enough to push that output voltage into one of those two saturation regions.
>
> **[1:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=105)** In fact, that saturation region is narrow enough you can basically treat the output as a binary decision with two possible states, either high or low.
>
> **[1:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=115)** The comparator is acting like a one-bit analog-to-digital converter that looks at how one analog voltage compares to another, and then outputs a digital one or zero based on what it sees.
>
> **[2:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=126)** In practice, the inverting terminal of an op amp comparator is usually connected to a static reference voltage, which serves as the threshold for comparison against the input voltage at the noninverting input terminal.
>
> **[2:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=139)** This reference voltage can come from a variety of sources, such as a battery or a Zener diode, or even just a simple voltage divider made with two resistors.
>
> **[2:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=152)** To demonstrate that, I've built this circuit on my breadboard using a pair of one mega ohm resistors as a voltage divider, which will divide down my five volt power source in half to generate a 2.5 volt reference voltage.
>
> **[2:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=166)** I've tied the op amp's negative supply rail to ground and the positive supply rail to the five volt source.
>
> **[2:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=173)** I'm using a variable power supply to provide an adjustable input voltage to the comparator circuit, which I'm displaying on channel one of my oscilloscope in yellow.
>
> **[3:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=183)** Channel two is showing the comparator's output voltage in blue, and channel three is showing the 2.5 volt reference from the voltage divider in pink.
>
> **[3:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=193)** When the input is below the 2.5 volt threshold, the comparator outputs zero volts, because I connected the negative supply line to ground.
>
> **[3:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=202)** But as soon as I raise the input voltage above that threshold, the output jumps up towards the positive supply voltage of five volts.
>
> **[3:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=211)** As the input signal changes above and below the threshold, the output signal switches very quickly between the high and low values accordingly.
>
> **[3:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=220)** The op amp comparator's ability to act as a one-bit analog-to-digital converter makes it useful for interfacing between analog sensors and digital microcontrollers like an Arduino or Raspberry Pi.
>
> **[3:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=233)** For example, if I wanted to use a photodiode to detect whether the lights are on or off in a room, I need to compare the output voltage for my photodiode circuit to determine if it's above or below a certain threshold.
>
> **[4:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=247)** If I was using an Arduino microcontroller, that would be easy, because an Arduino board has built-in analog input channels that I can use to directly measure the sensor's output.
>
> **[4:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=257)** And then I just use some software to determine whether the measured value is above or below my threshold.
>
> **[4:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=263)** Now, if I wanted to use another type of microcontroller platform that doesn't already have analog inputs, like a Raspberry Pi, which only has digital inputs, then I'll need to get a bit more creative.
>
> **[4:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=276)** The digital input on a Raspberry Pi only expects to see one of two possible voltages that each represent a different digital value.
>
> **[4:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=285)** When the input voltage is zero, that's the low value, which represents a digital zero, and when the input voltage is 3.3 volts, that represents the high value, which is a digital one.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=298)** Since I only really care about whether the photodiode's voltage is above or below a threshold, this is a perfect time to use an op amp comparator.
>
> **[5:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=308)** To generate the reference voltage for the comparator, I'll use a variable voltage divider like a potentiometer, so I can adjust that threshold voltage that I'm using for comparison.
>
> **[5:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=318)** I'll connect the op amp's positive and negative supply rails to 3.3 and zero volts, which correspond to the high and low voltages values that the Raspberry Pi's digital input pins use to represent one and zero.
>
> **[5:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/compare-signals-14914780?u=76281980&t=333)** The op amp will compare the voltages coming from the photodiode against my threshold and it will produce high or low outputs representing a digital one or zero, which I can read using a digital input line on a Raspberry Pi.

> [!info]- Semantic Content
>
> **Versions:** 2.5 (3), 3.3 (2)
> **Tools:** terminal (5)
> **Code Keywords:** static (1), raise (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** rails (1)
> **Speakers:** - [instructor] (1)

#### Buffer signals
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=0)** - [Instructor] One of the simplest op-amp circuits that utilizes feedback is called a voltage follower.
>
> **[0:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=5)** It's created by simply connecting the output of the op-amp directly back into the negative inverting input terminal.
>
> **[0:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=13)** The input signal for the voltage follower goes into the non-inverting or positive terminal.
>
> **[0:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=19)** And the output signal is simply the output from the op-amp.
>
> **[0:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=22)** The reason this circuit is called a voltage follower is because the output voltage follows or matches the input voltage.
>
> **[0:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=30)** Since the output voltage is the same as the input voltage, the voltage follower circuit has a constant gain of one.
>
> **[0:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=37)** You'll often hear that referred to as unity gain which means that the signal passing through the circuit is neither amplified, nor attenuated.
>
> **[0:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=46)** At first glance, a circuit that outputs the same voltage signal that you put into it they may not seem very useful, but even though the input and output voltage is the same, this circuit is useful because the impedance at the input and output terminals is different, the voltage follower takes advantage of the op-amp's incredibly high input impedance and low output impedance to serve as a buffer between two circuits.
>
> **[1:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=72)** To maximize the voltage that's transmitted from a source to a load, the impedance should be bridged so that the impedance at the load is significantly larger than the source impedance.
>
> **[1:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=84)** If the source and load do not already have that impedance relationship, maybe the source impedance is slightly greater than the load, then you'll need to use a buffer circuit to bridge them.
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=94)** The op-amp's impedance is so large it'll be significantly greater than the source so that connection will be bridged.
>
> **[1:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=100)** And the op-amp's output impedance will be very small compared to most loads so that connection will also be bridged.
>
> **[1:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=108)** Since the circuit acts as a buffer with a gain of one, it's often called a unity gain buffer and I'll show you seven common uses for it later in this course.
>
> **[1:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=118)** But how exactly does an op-amp act as a unity gain buffer?
>
> **[2:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=123)** By shorting the output from the op-amp directly back to the inverting input terminal, the voltage at those two terminals will always be the same.
>
> **[2:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=132)** The inverting input voltage will be equal to the output voltage.
>
> **[2:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=136)** Now the op-amp itself doesn't know that those two terminals are connected to each other, but it doesn't care.
>
> **[2:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=142)** The op-amp simply looks at the difference in voltage between its two input terminals, which happens to be equal to the input voltage minus the output voltage and then the op-amp adjusts its output based on what it sees.
>
> **[2:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=157)** When the voltage at the input and output of the voltage follower are the same, there will be zero difference between the two input terminals because of the direct feedback.
>
> **[2:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=166)** The op-amp sees that the circuit is an equilibrium so it'll keep on outputting the same voltage.
>
> **[2:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=172)** Now, if the input signal that's connected to the non-inverting terminal goes up, that will create a positive difference between the two input terminals.
>
> **[3:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=180)** The op-amp will see that positive difference and respond by increasing the output voltage until the circuit returns to equilibrium.
>
> **[3:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=188)** If the voltage at the non-inverting input drops, that'll create a negative difference between the two input terminals.
>
> **[3:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=195)** And the op-amp will respond to that by decreasing its output voltage until that difference returns to zero again.
>
> **[3:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=203)** To demonstrate that behavior, I've built a voltage follower circuit on my breadboard using a variable voltage source as the input signal and a one kilo ohm resistor connected to the output terminal as the load.
>
> **[3:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=215)** I've connected a five volt source to the op-amp's positive supply terminal and the negative supply terminal is connected to ground.
>
> **[3:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=223)** My oscilloscope is showing the input voltage on channel one in yellow and the output voltage on channel two in blue.
>
> **[3:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=231)** Since the output matches the input, those two traces are directly on top of each other.
>
> **[3:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=236)** So I'll adjust the position of channel two down a little bit so I can see both signals.
>
> **[4:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=242)** The input voltage is currently set at two and a half volts.
>
> **[4:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=245)** And if I wiggle it around a little bit, I can watch as the output voltage follows it.
>
> **[4:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=251)** However, if I raise my input voltage up several volts higher, the output follows up until it reaches five volts and then it stays there.
>
> **[4:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=260)** The op-amp cannot output a voltage that's higher than the positive supply voltage I gave it, which is five volts.
>
> **[4:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=267)** Similarly, if I lower the input voltage until it's negative, the output follows it down until it reaches zero volts and then it stops there.
>
> **[4:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=276)** Since I connected the op-amp's negative supply terminal to ground, it'll never be able to output a negative voltage below zero volts.
>
> **[4:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=286)** As long as the input signal to the voltage follower is within the usable range of the op-amp's positive and negative supply voltages, the output signal will look the same.
>
> **[4:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=296)** But if the input signal exceeds that threshold in either direction, then the output signal will get cut off at those limits.
>
> **[5:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=303)** This is a form of distortion called clipping.
>
> **[5:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=306)** And it's not just limited to the voltage follower.
>
> **[5:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/buffer-signals-14914783?u=76281980&t=309)** Clipping can occur in all op-amp circuits if the output signal tries to exceed the voltages that the op-amp can actually produce.

> [!info]- Semantic Content
>
> **Tools:** terminal (8)
> **Definitions:** is called (2), means that (1), is an  (1), is a  (1)
> **Code Keywords:** raise (1)
> **Cross-References:** later in (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Supply dual voltages
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=0)** - [Lecturer] One of the challenges when building circuits with Op-amps is that they often need dual supply voltages to draw power from both positive and negative voltage sources.
>
> **[0:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=10)** An Op-amp can only output voltages within the range between its power rails.
>
> **[0:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=14)** So if an Op-amp is being used to generate an AC signal that has positive and negative voltages the Op-amp's power rails will need to be connected to both positive and negative supply voltages.
>
> **[0:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=27)** Benchtop power supplies like this one make that easy because it provides output terminals for positive and negative voltages, both relative to a common ground terminal in the middle.
>
> **[0:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=38)** If I configure this power supply to output five volts, the terminal on the left will provide me with positive five volts relative to that common ground, and the terminal on the right will give me negative five volts.
>
> **[0:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=52)** When I use a benchtop power supply to provide dual voltages for my breadboard, I like to connect the common ground bus to each side of the breadboard on its innermost power rails.
>
> **[1:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=63)** Then I connect the positive supply line to the red rail on the far left with a plus symbol and I connect the negative supply line to the black rail on the far right with the minus symbol.
>
> **[1:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=75)** You can organize your power buses on your own breadboard, however you want.
>
> **[1:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=79)** Do what makes sense for your own circuits.
>
> **[1:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=81)** This configuration is just my personal preference for connecting dual voltage supplies because it gives me easy access to the common ground voltage on either side of the board.
>
> **[1:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=91)** If you're using a benchtop power supply, then supplying dual voltages for a circuit is simple.
>
> **[1:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=97)** But if you're using another type of power source that only provides a single voltage like a battery or a wall wart, then you'll have to turn that single voltage into positive and negative voltages yourself.
>
> **[1:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=110)** The easiest way to do that, is to use an integrated circuit component that's specifically designed to convert from one DC voltage to another.
>
> **[1:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=118)** For example, the TC7660H DC to DC converter chip from microchip can generate a negative voltage from a positive source.
>
> **[2:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=128)** It takes a positive input voltage between 1.5 to 10 volts and outputs the corresponding negative voltage.
>
> **[2:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=137)** If I'm using a single power source, like a five volt wall adapter, I can use the TC7660H chip to generate negative five volts, which gives me the dual voltages I need for my circuit.
>
> **[2:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=150)** Now, using these types of DC to DC converter chips is usually a bit more complicated than just inserting them into your circuit.
>
> **[2:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=157)** You'll almost always need to include a few external capacitors or inductors around the device for it to function correctly.
>
> **[2:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=163)** So you should look at the device's data sheet to figure out which additional components you'll need and how to connect them.
>
> **[2:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=170)** If you don't have a benchtop power supply or any DC to DC converter chips you're still not completely out of luck.
>
> **[2:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=177)** There's a third way that you can generate positive and negative supply voltages for an Op-amp circuit and that's to create what's known as a virtual ground by dividing a source voltage in half.
>
> **[3:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=188)** Virtual ground is a circuit node that's used as a steady reference potential for other voltages but it's not directly connected to the original ground or common reference potential for the circuit.
>
> **[3:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=200)** The easiest way to split a voltage in half is by using a voltage divider with two equal value resistors in series.
>
> **[3:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=207)** If I connect that voltage divider to a nine volt battery, it'll cut that nine volt source in half to produce 4.5 volts in the middle.
>
> **[3:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=216)** The voltage value shown here are all positive because I'm treating the negative battery terminal as my common potential reference point which is the normal thing to do.
>
> **[3:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=226)** But if instead, I change my point of reference to treat the middle of the voltage divider at zero volts or my virtual ground then the voltage is at the positive and negative battery terminals will be plus and minus 4.5 volts relative to that virtual ground.
>
> **[4:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=243)** And I can use those dual voltage sources to power my circuit.
>
> **[4:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=247)** Now, one downside to this approach is then when I connect an electrical load to the voltage divider, that's generating my dual voltage sources.
>
> **[4:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=256)** If that loads impedance is too low between the center voltage and either of the battery terminals, then that can change the balance of the voltage divider ratio.
>
> **[4:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=265)** I'm still treating the middle of the voltage divider as my zero volt reference, but now the positive and negative supply voltages will be unevenly distributed relative to the virtual ground.
>
> **[4:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=277)** So what I need to do to fix this is find a way to buffer the output from the voltage divider so that it's not impacted by whatever else is connected to a downstream.
>
> **[4:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=288)** And that's easy to do with a simple voltage follower Op-amp circuit serving as a unity gain buffer.
>
> **[4:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=294)** The Op-amp has an extremely high input impedance, so it won't affect the ratio of the voltage divider and its low output impedance enables it to maintain a steady output voltage when it's connected to different loads.
>
> **[5:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=307)** Since the virtual ground voltage that it's producing is between the original supply voltages from the positive and negative battery terminals.
>
> **[5:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=315)** I'll use those to supply power for the Op-amp.
>
> **[5:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=319)** I've built that buffered voltage divider on my breadboard using a nine volt battery to provide the positive and negative supply voltages.
>
> **[5:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=326)** The negative battery terminal is connected to the negative power bus on the far right side of the board and the positive battery terminal is connected to the positive bus on the far left side.
>
> **[5:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=336)** Those will be my plus and minus 4.5 volt power supply lines.
>
> **[5:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=341)** These two resistors act as the voltage divider to create the voltage for my virtual ground.
>
> **[5:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=347)** I don't want my voltage divider to draw too much current, it's just there to produce a voltage for reference.
>
> **[5:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=353)** So I used a pair of fairly high resistance, one mega ohm resistors.
>
> **[5:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=357)** The output is buffered via voltage follower Op-amp circuit and its output which is the virtual ground get shared to both of the inner power rails using this green wire.
>
> **[6:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=369)** To check how these virtual supply voltages relate to each other, I'll anchor the black probe of my DMM to the virtual ground, and now I'll use the red probe to measure the positive supply voltage.
>
> **[6:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=379)** And I can see that it's a little more than four and a half volts above the virtual ground and that's half the output voltage from my nine volt battery.
>
> **[6:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=387)** And when I move the red probe to measure the negative supply voltage, I see that it's around negative 4.5 volts relative to the virtual ground.
>
> **[6:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=397)** It's very important to remember that the virtual ground created by this circuit is different than the actual circuit ground or common reference and that you should never connect the two together.
>
> **[6:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=409)** For example, if I was using a grounded power source like a 12 volt DC wall adapter to power the circuit and I used a voltage divider to split the 12 volt input into plus and minus six volts that virtual ground that it produces in the middle of the voltage divider is different from the actual ground of the wall adapter.
>
> **[7:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=430)** If I tried to connect my new virtual ground based power source to another circuit that included something like an Arduino micro controller whose power supply is connected to the actual ground.
>
> **[7:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=441)** I've just made a connection between my virtual ground and the actual ground, which will create a short circuit between the two and cause unwanted current to flow that'll most likely damage these devices.
>
> **[7:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=452)** To avoid that problem, when I'm building circuits with a virtual ground, I always use a floating power source like a nine volt battery.
>
> **[7:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=460)** That's not connected to the actual ground.
>
> **[7:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=463)** The nine volt battery may not be able to provide much power compared to a DC wall adapter but at least I won't have to worry about accidentally connecting different grounds together.
>
> **[7:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/supply-dual-voltages-14915553?u=76281980&t=473)** I'll be using this circuit with a nine volt battery to provide dual supply voltages as I build and demonstrate Op-amp circuits throughout the rest of this course.

> [!info]- Semantic Content
>
> **CLI Commands:** rails (4), make (1), node (1), find (1)
> **Tools:** terminal (6)
> **Versions:** 4.5 (4), 1.5 (1)
> **Env Vars:** tc7660h (2), dmm (1)
> **Analogies:** for example (2)
> **Prerequisites:** configure (1), you'll need (1)
> **Code Keywords:** function (1)
> **Definitions:** is a  (1)

#### Amplify signals
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=0)** - [Instructor] As their name suggests, one of the primary uses for operational amplifiers is to amplify signals.
>
> **[0:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=7)** And one of the simplest op amp configurations to do that, is the inverting amplifier.
>
> **[0:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=12)** This configuration uses two resistors to provide divided feedback to the op amp, and it's called an inverting amplifier because the output signal will be negative, or a flipped version of the input signal and scaled by some amount.
>
> **[0:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=27)** One of the resistors connects the input signal to the inverting, or negative op amp terminal, and I'll refer to that as, R in.
>
> **[0:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=35)** The other resistor, R f, provides feedback from the output of the op amp back to the inverting input.
>
> **[0:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=43)** The non-inverting, or positive op amp terminal, is simply connected to ground.
>
> **[0:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=48)** The inverting amplifiers closed-loop voltage gain, which is the ratio of its output voltage, divided by the input voltage, is equal to negative R f over R in.
>
> **[0:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=59)** R f and R in are both fixed values that I can choose when designing the circuit.
>
> **[1:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=64)** So, for example, if I decided to make my feedback resistor 10 kiloohms, and the input resistor one kiloohm, 10 k divided by 1 k means my inverting amplifier will have a voltage gain of negative 10.
>
> **[1:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=79)** That means the output voltage will be negative 10 times whatever the input voltage is.
>
> **[1:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=84)** Now, rather that just remembering that this equation applies to this specific circuit, let's dive into why this combination of resistors produces a negative gain.
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=94)** According to the first golden rule of op amps, the off-amp will adjust its output signal however it can to make the input signals match.
>
> **[1:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=103)** Since the non inverting terminal in this configuration is tied directly to ground, the op amp will try to make the voltage at the inverting terminal be zero volts as well.
>
> **[1:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=112)** So, I'll just pretend like that node is always held at zero.
>
> **[1:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=117)** If the input voltage increases to a positive value, let's say 50 millivolts, due to Ohm's Law, that 50 millivolt drop across the one kiloohm input resistor means 50 microamps of current will flow through the input resistor.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=134)** Now, according to the second golden rule of op amps, no current will flow into the input terminals.
>
> **[2:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=140)** So, all of that 50 microamps will pass through the feedback resistor.
>
> **[2:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=146)** Using Ohm's Law again, for 50 microamps to flow through the 10 kiloohm feedback resistor will require a 500 millivolt voltage drop across it.
>
> **[2:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=156)** Since the voltage across the feedback resistor drops from left to right, the op amp will have to produce negative 500 millivolts at its output terminal to maintain zero volts at the inverting input terminal.
>
> **[2:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=170)** If the input voltage is lowered down to zero volts, then there will not be a voltage drop across the input resistor, so no current flows into the circuit.
>
> **[2:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=179)** And, since there's no current flowing through the input resistor, there also won't be any current flowing through the feedback resistor to cause a voltage drop across it, so the output voltage will also be at zero.
>
> **[3:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=192)** Finally, if the input voltage drops down to a negative value, like negative 50 millivolts, that will cause a 50 microamp current to flow in the opposite direction through the input terminal, as if it's exiting the circuit.
>
> **[3:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=206)** The same amount of current will flow in that direction through the feedback resistor, creating a 500 millivolt difference across the resistor that increases from left to right, which means the output voltage this time will be positive 500 millivolts.
>
> **[3:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=222)** To demonstrate that behavior, I've built that inverting amplifier circuit on my breadboard with a one kiloohm input resistor and a 10 kiloohm feedback resistor to achieve a gain of negative 10.
>
> **[3:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=234)** My function generator is providing a 400 millivolt peak to peak sine wave as the input signal, which I'm measuring on channel one of my oscilloscope in yellow and the output of the amplifier circuit is shown in blue on channel two.
>
> **[4:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=247)** As expected, I can see that the output signal is approximately 10 times larger than the input signal and it's been inverted.
>
> **[4:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=255)** So when the input voltage is positive, the output is negative and vice versa.
>
> **[4:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=261)** Another common op amp configuration is the non-inverting amplifier.
>
> **[4:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=265)** It's similar to the inverting amplifier configuration except that this time, the resistor connected to the inverting input terminal, which I've labeled as R two, is tied to ground and the input voltage for the circuit is sent directly to the non-inverting input terminal.
>
> **[4:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=281)** Drawing the input terminal so that they cross over like this can look a bit confusing on circuit diagrams, so you'll commonly see the non-inverting input circuit drawn like this, with the op amp flipped vertically so that the non-inverting input terminal is on top and the inverting input terminal is on the bottom.
>
> **[4:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=299)** This circuit works using a similar concept as the inverting amplifier configuration.
>
> **[5:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=305)** For a simple example, let's say the feedback resistor is 10 kiloohms and the second resistor, between the inverting terminal and ground, is one kiloohm.
>
> **[5:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=314)** If the voltage at the non-inverting input terminal is 10 millivolts, the op amp will change its output to make the voltage at the inverting terminal match it.
>
> **[5:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=325)** That means there should be a 10 millivolt drop across the bottom resistor, which will create a 10 microamp current flowing through it towards ground.
>
> **[5:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=333)** That same 10 microamp current will also flow through the 10 kiloohm feedback resistor as well, which produces a 100 millivolt drop across it.
>
> **[5:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=343)** The 10 millivolt drop across the bottom resistor, plus the 100 millivolt drop across the feedback resistor means the output voltage will be 110 millivolts when there's a 10 millivolt input signal.
>
> **[5:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=356)** That's a positive output for a positive input.
>
> **[6:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=361)** I can calculate the voltage gain for this circuit as one plus the feedback resistance divided by the other resistance, R two.
>
> **[6:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=369)** So, for the example circuit with a 10 kiloohm feedback resistor and a 100 kiloohm R two, the voltage gain will be 11.
>
> **[6:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=379)** Since this equation adds one to the ratio of the resistor values, I can never build a non-inverting op amp circuit that'll have a gain of less than one.
>
> **[6:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=387)** I can't use this circuit to attenuate signals.
>
> **[6:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=391)** At the very least, if I lower the feedback all the way down to zero ohms by creating a short circuit, this circuit will act similar to a unity gain buffer, having a gain of one.
>
> **[6:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=403)** To demonstrate the non-inverting op amp configuration, I've built the circuit on my breadboard but instead of using static values for both resistors, I've decided to replace the feedback resistor with a 10 kiloohm potentiometer, which I'm using as a variable resistor to allow me to manually adjust the gain of the circuit.
>
> **[7:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=423)** To begin, I've adjusted the potentiometer to have a resistance of one kiloohm.
>
> **[7:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=427)** So it matches the resistance of the static value one kiloohm resistor.
>
> **[7:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=432)** That gives the non-inverting op amp circuit a gain of two and I can see that the amplitude of the output signal in blue is roughly twice as large as the input signal in yellow.
>
> **[7:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=441)** And that the input and output signals follow each other in the same direction.
>
> **[7:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=446)** The output is not inverted anymore.
>
> **[7:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=448)** If I turn the potentiometer knob all the way down, to have nearly zero resistance, the circuit acts like a voltage follower and has a gain of approximately one.
>
> **[7:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/amplify-signals-14916245?u=76281980&t=458)** And if I turn the potentiometer knob in the other direction, until it reaches 10 kiloohms, the gain will increase accordingly until the output is 11 times larger than the input signal.

> [!info]- Semantic Content
>
> **Tools:** terminal (15)
> **Code Keywords:** let (3), static (2), match. (1), pass (1), require (1)
> **CLI Commands:** make (4), node (1)
> **Analogies:** similar to (2), for example (1)
> **Speakers:** - [instructor] (1)

#### Filter signals
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=0)** - [Instructor] Building a passive first order low pass or high pass RC filter is as simple as connecting a single resistor in series with a capacitor.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=9)** When the input signal is applied to the resistor and the output is measured across the capacitor, it creates a low pass filter.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=15)** And when the location of the resistor and the capacitor are swapped with each other so that the output is measured across the resistor, it produces a high pass filter.
>
> **[0:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=25)** The advantage of these passive circuits is that they're easy to build, it only takes two components and they're easy to design.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=33)** The equation for the cutoff frequency is simply one over two pie times the resistance and the capacitance values.
>
> **[0:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=41)** Now a major disadvantage of these passive RC circuits is that since they only use passive components, the output signal can never be greater than the input signal.
>
> **[0:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=52)** At the very best, the input and output can have the same power.
>
> **[0:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=56)** The attenuation can really start to add up when we need to combine multiple filters together.
>
> **[1:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=61)** Additionally, the impedance of whatever load is attached to that filter's output can affect its characteristics and change the cutoff frequency.
>
> **[1:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=70)** To overcome those disadvantages, I'll convert the passive RC filter into an active RC filter by connecting an op amp to the output of the filter circuit.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=80)** The left side of this circuit is just a basic low pass RC filter and I can use the same equation as before to calculate its cutoff frequency.
>
> **[1:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=89)** This 10 kiloohm resistor in series with a 100 nanofarad capacitor will have a cutoff frequency of around 159 hertz.
>
> **[1:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=98)** The output from the passive filter is then fed into a unity gain buffer on the right side of the circuit.
>
> **[1:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=104)** The op amps exceptionally high input impedance prevents it from overloading the filter's output.
>
> **[1:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=109)** So it doesn't really affect the filter's frequency response.
>
> **[1:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=113)** And the op amps low output impedance enables it to be connected to a wide variety of loads.
>
> **[1:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=118)** Even though the output voltage from the unity gain buffer will be the same as its input voltage, that buffer has the ability to increase and decrease the power of the output signal to respond to changes in the load impedance.
>
> **[2:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=132)** Since the op amp is simply acting as a buffer between the low pass filter and whatever load is attached to the output, the frequency response for the circuit should look similar to the response for the passive RC filter.
>
> **[2:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=145)** The unity buffer configuration of the op amp circuit has a voltage gain of one, which in terms of decibels is zero dB.
>
> **[2:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=152)** So down in the pass band region of this active filter, the output signal will have roughly the same amplitude as the input signal.
>
> **[2:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=160)** If I want to make the output voltage larger than the input, then I can modify that circuit to use an amplifying op amp configuration instead of a unity gain buffer.
>
> **[2:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=171)** In addition to serving as a buffer between the RC filter and whatever load is attached to the output, the non-inverting op amp configuration shown here, with two 10 kiloohm resistors will amplify the filters output by a factor of two.
>
> **[3:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=185)** In terms of decibels, that voltage gain of two corresponds to about a six dB increase.
>
> **[3:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=191)** So output signals with frequencies in the pass band will have roughly twice the amplitude of their corresponding input signals.
>
> **[3:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=199)** Keep in mind that since this is a low pass filter, if the input signal has any zero hertz DC offset, that offset will also be amplified by the output.
>
> **[3:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=210)** If I swap around the location of the 10 kiloohm resistor and the 100 nanofarad capacitor in the RC circuit on the left, then I've just converted my low pass filter into a high pass filter with the same cutoff frequency of around 159 hertz.
>
> **[3:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=225)** The frequency response for the active high pass filter should look like a flipped version of the low pass filters frequency response.
>
> **[3:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=233)** And since it includes amplification, frequencies within the filters pass band will experience a six dB voltage gain.
>
> **[4:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=241)** Now, in theory, the pass band for a high pass filter should extend from the cutoff frequency up to infinity.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=249)** In reality, the op amp will have its own frequency response that limits its open loop voltage gain.
>
> **[4:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=256)** At some point, the op amps frequency response will cross over the high pass RC filters frequency response.
>
> **[4:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=263)** That's usually at a frequency up in the kilohertz range or megahertz range, depending on which op amps you're using.
>
> **[4:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=269)** But above that crossover point, the op amp will act like a low pass filter, limiting the pass band.
>
> **[4:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=276)** Since there's no such thing as an op amp with infinite bandwidth, it's not possible to create a true active high pass filter whose pass band goes up to infinity.
>
> **[4:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=286)** But as long as the signal frequencies I'm interested in keeping all exist within that pass band, this filter should work just fine for me.
>
> **[4:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=294)** This is one reason to pay attention to the open loop frequency response when choosing which type of op amp to use for a certain application.
>
> **[5:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=302)** One of my favorite things about op amps is that their high input impedance and low output impedance make them great for impedance bridging.
>
> **[5:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=310)** So I can chain together several circuits, passing a voltage signal from one to the next.
>
> **[5:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=315)** For example, I can use a unity gain buffer as a bridge to connect the output from an RC low pass filter to the input of another RC high pass filter.
>
> **[5:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=326)** In this circuit, I've chosen to use a one kiloohm resistor and a 100 nanofarad capacitor for the low pass filter on the left, giving it a cutoff frequency of around 1,592 hertz.
>
> **[5:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=339)** A unity gain buffer connects the output from that low pass filter to another high pass filter whose cutoff frequency is only 159 hertz.
>
> **[5:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=348)** And I decided to add an amplifier stage at the end of this chain to boost the output voltage with a gain of 11.
>
> **[5:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=355)** Since that low pass filter stage blocks signals that are above 1,592 hertz, and the high pass filter blocks signals below 159 hertz, together, those two filters connected together with op amps, create a band pass filter whose pass band spans from the range of 159 hertz up to 1,592 hertz.
>
> **[6:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=379)** And frequencies within that pass band will be amplified with a gain of 11, which corresponds to about 20.8 decibels.
>
> **[6:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=387)** I've built that band pass filter circuit on my breadboard using a pair of op amps and I'll be using my function generator to provide an input signal to the beginning low pass filter stage.
>
> **[6:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=398)** Right now, the function generator is set to produce a 100 millivolt peak to peak sign wave with a frequency of one kilohertz, which is shown in yellow on the oscilloscope.
>
> **[6:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=409)** Since one kilohertz is in the pass band for both filter stages, the input signal passes through the filter stages, more or less unaffected, and the amplifier at the end increases the amplitude of the output, shown in blue, with a voltage gain of 11.
>
> **[7:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=424)** Now, if I lower the input frequency down to around 10 hertz and adjust the horizontal scale on the scope so I can view multiple periods of the signal at once, I see that the output signal is much smaller than it was a moment ago.
>
> **[7:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=440)** The 10 hertz signal passes through the first low pass filter stage just fine, but when it gets to the later high pass filter stage, it falls below the cutoff frequency.
>
> **[7:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=450)** So it gets attenuated.
>
> **[7:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=452)** I'll get a similar result if I increase the input frequency up to around 10 kilohertz and adjust the horizontal scale on the oscilloscope to get a better view.
>
> **[7:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/filter-signals-14917123?u=76281980&t=462)** Now, the input signal is being attenuated by that first low pass stage in my band pass filter and any remaining energy left from that passes on through the high pass stage to the amplifier.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (40), function (2)
> **Code Identifiers:** db (3)
> **CLI Commands:** make (2)
> **Analogies:** similar to (1), for example (1)
> **Versions:** 20.8 (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Combine signals
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=0)** - [Instructor] Operational amplifiers got their name because they can be used to implement mathematical operations.
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=6)** For example, an amplifier circuit that increases or decreases the voltage of a signal by some amount of gain is mathematically equivalent to multiplication and division.
>
> **[0:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=17)** The circuit is multiplying an input voltage by some gain value to produce a larger or smaller output.
>
> **[0:24](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=24)** Other op-amp circuits exist that can implement mathematical operations, including addition, subtraction, integration, and differentiation.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=33)** For this video, I'll be focusing on an op-amp circuit that's capable of adding multiple voltages together, known as a summing amplifier.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=42)** To create a summing amplifier, I'll begin with the inverting amplifier configuration and then I'll connect another input resistor to the op-amp's inverting terminal.
>
> **[0:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=53)** The circuit now has two input terminals and that I can connect to different input voltage sources, which I'll refer to as VA and VB.
>
> **[1:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=62)** I'll also give each of the two input resistors their own unique names, referring to them as RA and RB.
>
> **[1:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=70)** Since the non-inverting input terminal is tied to ground, the op-amp will change its output voltage in a way that keeps the inverting input terminal at zero volts too.
>
> **[1:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=80)** Because the inverting input terminal is held at zero volts, when there's a positive or negative voltage at the input terminals, that voltage drop will cause current to flow through the two input resistors, which I'll label as IA and IB.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=95)** Since current doesn't flow into the op-amp's input terminals, the current from those two input resistors will both flow together through the feedback resistor RF.
>
> **[1:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=105)** The current through RF will be the sum of the input currents A and B.
>
> **[1:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=110)** Using Ohm's law again, the output voltage will be equal to the feedback current times the feedback resistance.
>
> **[1:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=118)** However, since the voltage across the feedback resistor will drop from left to right when current flows in the direction shown here and the inverting input terminal is held at zero volts, the output voltage will be negative, just as with the inverting amplifier configuration.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=134)** To get an equation for the output voltage based on the input voltages, I'll begin with the expression for the output in terms of the feedback current and feedback resistance.
>
> **[2:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=145)** I'll substitute the feedback current for the sum of those two input currents and according to Ohm's law, each of those two input currents will be equal to their corresponding input voltage divided by the input resistor value.
>
> **[2:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=160)** This equation gives me the output voltage in terms of the circuit's resistor values and input voltages.
>
> **[2:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=168)** To demonstrate how that equation relates to the circuit using actual numbers, I'll make all of the resistors in the circuit one kiloohm and I'll make the input voltage A one volt and input voltage B two volts.
>
> **[3:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=182)** Using Ohm's law, one volt across the one kiloohm resistor will produce one milliamp of current for input A, and two volts across the one kiloohm resistor will produce two milliamps of current for input B.
>
> **[3:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=196)** Those two input currents will add together so that three milliamps will pass through the feedback resistor and using Ohm's law one final time, three milliamps through a one kiloohm feedback resistor will create a three-volt drop from the inverting input terminal to the output terminal so the output will be negative three volts.
>
> **[3:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=217)** The circuit is sometimes referred to as a summing inverter because of the fact that it adds together voltages and then negates their sum on the output.
>
> **[3:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=227)** Now, one nice thing about the summing circuit is that I can scale how much each of the input voltages contributes to its final output sum by adjusting the input resistor values.
>
> **[3:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=239)** For example, if I increase resistor B from one kiloohm to two kiloohms by doubling its resistance, I cut the amount of current through it in half.
>
> **[4:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=249)** Now, only two milliamps will flow through the feedback resistor, so the output voltage changes to negative two volts.
>
> **[4:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=256)** With this uneven configuration of input resistors, input B is only contributing half as much of its voltage in the total sum as input A.
>
> **[4:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=267)** This sort of uneven scaling can come in handy when I need to combine several signals together in different ratios.
>
> **[4:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=273)** Maybe I have a circuit recipe that calls for one part of signal A and two parts of signal B.
>
> **[4:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=279)** I can mix those signals together in the desired quantities using the summing amplifier.
>
> **[4:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=284)** I can also adjust the gain that's applied to all of the signals by changing the value of the feedback resistor.
>
> **[4:51](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=291)** For example, if I increase the feedback resistor from one kiloohm to three kiloohms, the op-amp will have to scale its output voltage by a factor of three so that the output current through the feedback resistor remains the same.
>
> **[5:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=306)** One final thing about summing amplifiers is that I'm not limited to having just two input voltages.
>
> **[5:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=312)** I can add as many input resistors as I need and the basic principle for how the circuit works remains the same.
>
> **[5:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/combine-signals-14918137?u=76281980&t=318)** The equation shown here can be extended to include as many inputs as you want and will calculate the resulting output voltage based on each of the input voltages and their corresponding resistor values.

> [!info]- Semantic Content
>
> **Tools:** terminal (7)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Code Keywords:** pass (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Audio equalizer
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=0)** (upbeat techno music)
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=6)** - It's time for a final challenge.
>
> **[0:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=8)** This is your chance to practice using op-amp circuits as building blocks to create more complicated devices.
>
> **[0:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=14)** For this challenge, I need your help to design an audio equalizer to use in my stereo.
>
> **[0:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=20)** An equalizer is an electronic device that's used to adjust the balance of different frequency components in an electrical signal.
>
> **[0:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=27)** They're commonly used in audio systems to control how music will sound when it's played on different speaker systems.
>
> **[0:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=33)** The equalizer consists of a bank of electronic filters.
>
> **[0:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=37)** Each filter has a different passband, and the gain of each filter can be individually controlled to allow more or less of its specific frequency content through.
>
> **[0:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=48)** In a recording studio, it's not uncommon to encounter expensive equalizer boards that have 30 or more adjustable frequency bands.
>
> **[0:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=55)** On the other end of the spectrum, low cost equalizers, like you might find on a car stereo, usually have three frequency bands, labeled as Bass, Mid, and Treble.
>
> **[1:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=68)** Although the exact frequency range for each band will vary by device, the bass filter adjusts low frequencies, usually below 250 Hz.
>
> **[1:17](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=77)** The mid filter covers frequencies from 250 Hz up to around 2 kHz, and the treble filter passes high frequencies above 2 kHz.
>
> **[1:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=88)** For this challenge, I'll keep things even simpler.
>
> **[1:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=91)** I want to create an equalizer circuit with just two frequency bands.
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=96)** The bass band should be used to adjust the frequencies below 500 Hz, and the treble filter will adjust all other frequencies above 500 Hz.
>
> **[1:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=106)** Your goal for this challenge is to design an equalizer circuit that can be used to manually adjust the amount of bass and treble frequency content within an audio signal.
>
> **[1:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=117)** The input signal for your equalizer should be a single channel from an audio source, such as an MP3 player.
>
> **[2:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=124)** Most audio players have two output channels to produce stereo sound, but for this challenge, you only need to worry about one of them.
>
> **[2:11](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=131)** So pick your favorite side.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=134)** The output will be a single audio signal containing the adjusted bass and treble frequencies.
>
> **[2:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=140)** Your circuit will need to send the input signal through two separate filters: a low-pass filter to isolate the bass frequencies and a high-pass filter to get just the treble frequencies.
>
> **[2:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=152)** Both of these filters should have a cutoff frequency of around 500 Hz.
>
> **[2:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=157)** Now, for this challenge, that cutoff point doesn't need to be exact.
>
> **[2:40](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=160)** As long as it's within plus or minus 50 Hz, that's close enough.
>
> **[2:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=165)** The output from each of those filters will then need to be combined back together to create a single output signal that can be played over a speaker.
>
> **[2:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=174)** Now, the simplified block diagram doesn't show where or how the gain for each of these filter bands should be controlled.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=181)** And I'm leaving that up to you to figure out.
>
> **[3:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=184)** The only requirement for this challenge is that the user can individually adjust each band's gain.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=190)** It's up to you to decide how you want to implement that capability and what the minimum and maximum possible gain values should be for each channel.
>
> **[3:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=199)** This is a complex challenge with several different parts to consider.
>
> **[3:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=202)** I recommend using op-amp circuits as building blocks that can be used to accomplish different tasks within the larger design.
>
> **[3:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=210)** Once you've decided the type of op-amp circuit to use for each part of the design, you can then focus on each one individually to figure out the specific part values you'll need to use for it.
>
> **[3:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=222)** As one final tip, the output signal from your circuit will probably not have enough power to be directly connected to a speaker and play loud enough to be heard.
>
> **[3:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=230)** So, to test your circuit, it might help to use a speaker system with built-in amplification, such as computer speakers, which will let you listen to the output signal.
>
> **[3:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=239)** There were multiple solutions to this challenge.
>
> **[4:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/challenge-audio-equalizer?u=76281980&t=241)** So take some time to think it through, and when you're done, be sure to watch my solution video to see how I approach this problem.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), let (1)
> **Code Identifiers:** khz (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Env Vars:** mp3 (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - it (1)

#### Solution: Audio equalizer
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=0)** (soft upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=6)** - This is how I worked my way to a solution for the audio equalizer challenge.
>
> **[0:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=10)** I started by thinking about what each part of the equalizer needed to do.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=15)** And then picking Op-Amp circuits, as building blocks to accomplish those tasks.
>
> **[0:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=19)** For the two filter blocks.
>
> **[0:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=21)** I decided to use a basic Op-Amp filter circuit, that consists of an RC low pass, or high pass filter connected to an Op-Amp unity gain buffer.
>
> **[0:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=30)** And for combining the two equalizer signals back together at the end.
>
> **[0:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=34)** That's a perfect application for an Op-Amp summing amplifier.
>
> **[0:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=37)** With those two blocks in place.
>
> **[0:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=39)** I just needed to figure out how and where.
>
> **[0:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=41)** I wanted to include the ability to control the gain for each equalizer band.
>
> **[0:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=46)** One possibility that I considered was using Rios stats.
>
> **[0:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=50)** Which are manually controllable variable resistors.
>
> **[0:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=52)** As each of the input resistors on the final summing amplifier stage.
>
> **[0:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=56)** Well, that seemed like a viable solution, at first glance.
>
> **[1:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=60)** I quickly realized that I would run into problems when I lowered either input resistance too much.
>
> **[1:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=66)** For example, if I turned the Rios stats for the base signal all the way down to zero Mathematically, that would make the voltage to resistance ratio, for the base input channel infinity.
>
> **[1:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=78)** Which would make the output of the summing amplifier go down towards negative infinity.
>
> **[1:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=83)** Now, in reality, the Op-Amp can't produce infinite voltages.
>
> **[1:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=87)** Because its output is limited by the supply voltage.
>
> **[1:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=90)** But that means if the Op-Amp is trying to output negative infinite voltage.
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=94)** It'll be saturated by the supply voltage.
>
> **[1:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=97)** And that still doesn't do me much good.
>
> **[1:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=99)** If I wanted to use the summing amplifier stage, to control the gain of each signal.
>
> **[1:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=103)** I would need to add some additional limiting resistors in series, with those Rios stats.
>
> **[1:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=108)** To make sure the circuit gain stayed within a reasonable range.
>
> **[1:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=112)** At this point in the design process.
>
> **[1:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=114)** I realized that the summing amplifier solution was going to be a bit more complicated, than I originally thought.
>
> **[1:59](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=119)** So I decided to look for another easier way to control the signal gains.
>
> **[2:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=124)** The other option I considered was to replace the unity gain buffer.
>
> **[2:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=128)** That follows each of the RC filter circuits, with a variable voltage amplifier.
>
> **[2:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=132)** I decided to go with this route.
>
> **[2:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=134)** Because I was already familiar with using variable gain Op-Amp filters.
>
> **[2:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=138)** So it'd be a lot easier for me to design and build.
>
> **[2:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=142)** To figure out the component values that I would need for this circuit.
>
> **[2:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=145)** I focused on the RC low pass filter first.
>
> **[2:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=148)** Which has a target cutoff frequency of 500 Hertz plus or minus 50.
>
> **[2:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=153)** After some trial and error, based on the different components.
>
> **[2:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=156)** I had available in my parts kit.
>
> **[2:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=158)** I settled on using a 3.3 kilo ohm resistor, and 100 nano Farad capacitor.
>
> **[2:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=164)** According to the equation for an RC filters.
>
> **[2:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=167)** Cutoff frequency, those component values would give my filter a cutoff frequency of about 482 Hertz.
>
> **[2:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=174)** Which was well within the required plus or minus 50 Hertz range.
>
> **[2:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=178)** Shifting my focus over to the variable amplifier circuit.
>
> **[3:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=181)** The challenge requirements did not specify the gain range, for the base and trouble signals.
>
> **[3:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=186)** That was left up to me.
>
> **[3:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=188)** I like when my amps go up to 11.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=190)** So I decided to set that as my target, for the maximum gain.
>
> **[3:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=194)** I had a few extra potentiometers in my park kit.
>
> **[3:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=196)** That I could use as variable resistors, and adjust anywhere from zero to 10 kilo ohms.
>
> **[3:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=202)** Since that variable resistor, had a maximum resistance of 10 kilo ohms.
>
> **[3:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=206)** I needed to use one kilo ohm for the other resistor value, to achieve my target gain.
>
> **[3:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=212)** With those component values.
>
> **[3:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=213)** When the variable resistor is lowered all the way down to zero ohms.
>
> **[3:38](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=218)** The amplifier will act like a unity gain buffer, with a gain of one.
>
> **[3:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=222)** And when the variable resistor is cranked up to 10 kilo ohms.
>
> **[3:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=225)** The amplifier's output will be cranked up to 11.
>
> **[3:49](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=229)** That completed the design process for the low pass filter block, for the base equalizer channel.
>
> **[3:54](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=234)** And since the high pass filter block had the same target cutoff frequency.
>
> **[3:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=238)** I simply swapped around the location, of the 3.3 kilo ohm resistor and 100 nano Farad capacitor.
>
> **[4:04](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=244)** In the low pass filter design, to turn it into a high pass filter.
>
> **[4:08](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=248)** This RC high pass filter will have the same cutoff frequency.
>
> **[4:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=252)** As its low pass counterpart of 482 Hertz.
>
> **[4:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=255)** Which falls within the required range for the challenge.
>
> **[4:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=259)** With both of the filter blocks planned out.
>
> **[4:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=261)** All I had left to do was design the summing Op-Amp circuit.
>
> **[4:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=265)** And then connect the three blocks together.
>
> **[4:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=268)** For the summing amplifier stage.
>
> **[4:29](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=269)** I wanted the two input signals to be added together equally.
>
> **[4:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=273)** So I started by making all of the resistors, the same value, 10 kilo ohms.
>
> **[4:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=277)** By using the same resistor values, for both of the input resistors, and the feedback resistor.
>
> **[4:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=283)** The equation for the output voltage of the summing amplifier.
>
> **[4:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=287)** Simplified down to being just the negated sum of the two input voltages.
>
> **[4:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=293)** Since audio signals use alternating current, that's constantly changing.
>
> **[4:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=297)** At any point in time.
>
> **[4:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=298)** The voltage at either of the input terminals, will fall somewhere within a certain minimum and maximum range.
>
> **[5:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=305)** For example, the AC signal might have a peak to peak voltage range.
>
> **[5:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=309)** From negative three volts, to positive three volts.
>
> **[5:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=312)** Since those two signals are being added together.
>
> **[5:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=314)** The output voltage can end up being anywhere within the range twice that size.
>
> **[5:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=319)** Going from negative six volts, to positive six volts.
>
> **[5:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=322)** When I was testing my circuit, that began to cause some problems.
>
> **[5:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=326)** I was using a nine volt battery, to generate the positive and negative 4.5 volt supply rails.
>
> **[5:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=332)** To power the Op-Amps in my equalizer circuit.
>
> **[5:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=334)** That meant the Op-Amps, would only be able to produce at max.
>
> **[5:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=337)** Output signals, that were within plus or minus 4.5 volts.
>
> **[5:43](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=343)** Since I was already amplifying my base in trouble signals by a factor of 11.
>
> **[5:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=348)** I found that sometimes, when my input signals were at full volume.
>
> **[5:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=352)** The sum of the base and trouble signals would exceed, that plus or minus 4.5 volt range.
>
> **[5:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=357)** On the power rails and caused clipping.
>
> **[6:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=360)** To prevent that I needed to reduce the amplitude of the signal, coming out of the summing amplifier.
>
> **[6:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=366)** I reduced the feedback resistor from 10 kilo ohms to five kilo ohms.
>
> **[6:10](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=370)** Doing that cut the amplifier signal gain in half.
>
> **[6:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=373)** So that the possible range, of the output signal would be the same as the input signal ranges.
>
> **[6:19](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=379)** I don't have to worry about the base, and trouble signals adding together.
>
> **[6:23](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=383)** To create a signal that's larger than either one of them.
>
> **[6:26](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=386)** For practicality, since five kilo ohms is not a standard resistor value.
>
> **[6:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=390)** I used a 4.7 kilo ohm resistor instead which is the next smaller, common resistor value that I had in my parts kit.
>
> **[6:37](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=397)** And close enough for this purpose.
>
> **[6:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=399)** After I finished designing each of the subsections in my equalizer circuit.
>
> **[6:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=404)** I built a prototype of the design of my breadboard.
>
> **[6:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=406)** But before using my new equalizer circuit with an actual audio signal.
>
> **[6:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=410)** I decided to test it first, to see how it responded to different frequencies.
>
> **[6:55](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=415)** Before I use my newly built equalizer circuit.
>
> **[6:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=418)** With an actual audio signal.
>
> **[7:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=420)** I want to test it out first to see how it responds to different frequencies.
>
> **[7:03](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=423)** So I've connected my function generator, to produce a 200 millivolt peak to peak sign wave as the input signal.
>
> **[7:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=429)** And I have that input signal displayed on my oscilloscope in yellow on channel one.
>
> **[7:14](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=434)** And the output from the mixer, is displayed in blue on channel two.
>
> **[7:18](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=438)** Right now I have the function generator, producing a 50 Hertz sign wave.
>
> **[7:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=442)** Which is well within the range of base frequencies.
>
> **[7:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=445)** When I turn the gate knob, for the low pass base filter.
>
> **[7:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=450)** I can see that the amplitude of the output signal changes quite a bit.
>
> **[7:34](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=454)** But if I turn the trouble knob, the output doesn't change very much.
>
> **[7:41](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=461)** There's not much high frequency content in this signal, to go through the high pass filter.
>
> **[7:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=466)** Now to test my circuit at a high frequency.
>
> **[7:48](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=468)** I'll adjust the input frequency to be around five kilo hertz.
>
> **[7:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=472)** Which is well within the trouble range.
>
> **[7:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=477)** And I'll adjust the horizontal scale on these oscilloscope, to get a better view of the signal.
>
> **[8:06](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=486)** Now, when I turn the trouble knob.
>
> **[8:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=487)** It has a significant effect on the signal.
>
> **[8:12](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=492)** And I am getting some distortion in it due to this circuit.
>
> **[8:16](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=496)** But turning the base knob, doesn't have much effect on the output.
>
> **[8:20](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=500)** It allows some DC offset to get through.
>
> **[8:22](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=502)** But the overall amplitude is basically the same.
>
> **[8:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=505)** Now that I've tested my equalizer circuit with individual frequencies.
>
> **[8:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=508)** It's time to see how well it performs with some real music.
>
> **[8:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=516)** I'll use a three and a half millimeter headphone Jack.
>
> **[8:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=519)** To connect to the input of the circuit.
>
> **[8:45](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=525)** And that's connected to my MP3 player on my cell phone.
>
> **[8:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=530)** And I'll connect the output of this circuit to this speaker.
>
> **[8:53](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=533)** Which has a built in amplifier.
>
> **[9:00](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=540)** (soft upbeat music) If I want to focus on base frequencies, I can adjust the base knob to emphasize those.
>
> **[9:07](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=547)** (soft upbeat music) And if I want to hear trouble frequencies I can turn the other knob.
>
> **[9:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=555)** (soft upbeat music)
>
> **[9:25](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=565)** I can hear a difference between the trouble and base.
>
> **[9:28](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=568)** So I know my equalizer is working, but frankly it sounds bad.
>
> **[9:33](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=573)** There's static, and noise, and popping sounds in the music.
>
> **[9:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=576)** It's getting some source of unwanted noise.
>
> **[9:39](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=579)** And I realize now, that I forgot to include decoupling capacitors.
>
> **[9:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=582)** On the breadboards power bus.
>
> **[9:44](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=584)** The noise on those power lines, is affecting the Op-Amps.
>
> **[9:47](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=587)** And creating those pops, and static sound in the output.
>
> **[9:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=590)** Fortunately, that's an easy fix.
>
> **[9:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=592)** I'll just add a few 100 nano Farad capacitors to the power bus.
>
> **[9:56](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=596)** And I'll put them between power and ground.
>
> **[9:58](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=598)** As close to the power lines, supplying power for the Op-Amps as I can.
>
> **[10:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=602)** For safety, I disconnect power to my circuit before making any changes.
>
> **[10:13](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=613)** Now I'll reconnect power, (soft upbeat music) and I can hear a difference.
>
> **[10:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=627)** No matter how well I think I've designed the circuit.
>
> **[10:30](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=630)** When I actually build and test it.
>
> **[10:32](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=632)** I usually find new unexpected problems to overcome.
>
> **[10:35](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/solution-audio-equalizer?u=76281980&t=635)** But those challenges are part of the fun, when working with electronics.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (11), function (2), static (2)
> **CLI Commands:** make (3), rails (2), find (1)
> **Versions:** 4.5 (3), 3.3 (2), 4.7 (1)
> **Non-Speech:** (soft upbeat music) (5)
> **Analogies:** for example (2)
> **Env Vars:** mp3 (1)
> **Speakers:** - this (1)


### 10. Conclusion

#### Continue your journey with electronics
> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=1)** - Thanks for watching this course.
>
> **[0:02](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=2)** I hope that you've enjoyed it and that it's given you a better understanding of how to use diodes, transistors and op amps.
>
> **[0:09](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=9)** The examples I've shared are just a small sample of the many ways those components can be used.
>
> **[0:15](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=15)** So I recommend finding a good set of resources for circuit ideas as you continue to learn about electronics.
>
> **[0:21](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=21)** The internet is a good place to start because there are hundreds of websites where people have posted their own circuit designs.
>
> **[0:27](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=27)** Some of those designs are good, some of them not so much.
>
> **[0:31](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=31)** But even the lousy ones can serve as inspiration for your own better ideas.
>
> **[0:36](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=36)** I've included a list with a few of my favorite websites for electronics information in the exercise files.
>
> **[0:42](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=42)** If you're more of a book person, then I recommend "The Art of Electronics".
>
> **[0:46](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=46)** This is widely considered to be the go-to book for electronics.
>
> **[0:50](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=50)** It's loaded with circuit examples.
>
> **[0:52](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=52)** And in fact, many of the examples I showed you in this course were inspired from here.
>
> **[0:57](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=57)** With a practical sense of how electronics work and a few good references for circuit ideas, you're more than ready to start designing your own projects.
>
> **[1:05](https://www.linkedin.com/learning/electronics-foundations-semiconductor-devices/continue-your-journey-with-electronics?u=76281980&t=65)** Good luck and may your circuits always work right the first time.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - thanks (1)


## Instructor

- [[Barron Stone]]

## Resources

- Exercise files available

## Skills Covered

- Semiconductor Engineering

## Path Context

### In [[Become an Arduino Developer]]
← [[Learning Arduino- Interfacing with Hardware]] | **5 of 11** | [[Learning Arduino- Interfacing with Analog Devices]] →

## Appears In

- [[Become an Arduino Developer]]

---

[↑ Back to top](#)