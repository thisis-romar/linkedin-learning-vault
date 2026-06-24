---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: electronics-foundations-fundamentals
url: "https://www.linkedin.com/learning/electronics-foundations-fundamentals"
duration_minutes: 77
duration: 1h 17m
level: Beginner
updated: 6/30/2021
learners: 112070
skills:
  - Electronics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH-6x5bm0Fl0w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568053858039?e=2147483647&amp;v=beta&amp;t=WvekdtJXPNK5ACtEaqDonpbGRKg5ivTlEZwpHc_dQlI"
linkedin_topic: Hardware
learning_paths:
  - '[Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)'
prev_courses:
  - '[Learning Arduino Foundations](Learning%20Arduino%20Foundations.md)'
next_courses:
  - '[Electronics Foundations- Basic Circuits](Electronics%20Foundations-%20Basic%20Circuits.md)'
path_nav: '[{"path":"Become an Arduino Developer","position":2,"total":11,"prev":"Learning Arduino Foundations","next":"Electronics Foundations- Basic Circuits"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - topic/network-and-system-administration
  - topic/software-development
  - skill/electronics
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Electronics%20Foundations-%20Fundamentals.md)

![Electronics Foundations: Fundamentals](https://media.licdn.com/dms/image/v2/C4E0DAQH-6x5bm0Fl0w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568053858039?e=2147483647&amp;v=beta&amp;t=WvekdtJXPNK5ACtEaqDonpbGRKg5ivTlEZwpHc_dQlI)

# Electronics Foundations: Fundamentals

> Working with electronics can be a ton of fun, but it can also be a bit confusing—especially when you're first learning. In this course, electrical engineer Barron Stone uses easy-to-understand analogies to break down the fundamental concepts of voltage, current, resistance, and power. After you review the science behind electricity, Barron applies those concepts to build basic circuits. He explain

> [LinkedIn Learning](https://www.linkedin.com/learning/electronics-foundations-fundamentals) | 1h 17m | Beginner | 112K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [The fundamentals of electronics](#the-fundamentals-of-electronics)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Safety message](#safety-message)
- [**1. Fundamentals of Electricity**](#1-fundamentals-of-electricity) (9 videos)
  - [Electrical charge](#electrical-charge)
  - [Conductors and insulators](#conductors-and-insulators)
  - [Voltage](#voltage)
  - [Current](#current)
  - [Circuit basics](#circuit-basics)
  - [Resistance and Ohm's Law](#resistance-and-ohms-law)
  - [SI prefixes](#si-prefixes)
  - [Challenge: Limit current to an LED](#challenge-limit-current-to-an-led)
  - [Solution: Limit current to an LED](#solution-limit-current-to-an-led)
- [**2. Multimeter Measurements**](#2-multimeter-measurements) (3 videos)
  - [What is a multimeter?](#what-is-a-multimeter)
  - [Measure DC voltage](#measure-dc-voltage)
  - [Measure direct current](#measure-direct-current)
- [**3. Power**](#3-power) (7 videos)
  - [Electric power](#electric-power)
  - [Ideal vs. real-world power sources](#ideal-vs-real-world-power-sources)
  - [Battery capacity](#battery-capacity)
  - [Batteries in series and parallel](#batteries-in-series-and-parallel)
  - [Grounded vs. floating power sources](#grounded-vs-floating-power-sources)
  - [Challenge: Power a light bulb](#challenge-power-a-light-bulb)
  - [Solution: Power a light bulb](#solution-power-a-light-bulb)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue your electronics journey](#continue-your-electronics-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The fundamentals of electronics](https://www.linkedin.com/learning/electronics-foundations-fundamentals/the-fundamentals-of-electronics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/the-fundamentals-of-electronics?u=76281980&t=0)** - Working with [Electronics](../../Skills/Software%20Development/Electronics.md) is a ton of fun, but it can also be a bit confusing. What is voltage, current, resistance, power? Sure, you could look up their definitions, but to really understand those concepts and how they relate to each other, that's key to working with electronics. I'm Barron Stone, and I'm an electrical engineer who likes to keep things as simple as possible. In this course, I'll demonstrate the fundamental concepts of voltage, current, resistance and power using analogies that are easy to understand. Electricity can be a difficult concept to grasp because we can't directly see it. So I'll use analogies to relate electricity to some things we can see like water. I like to think of electrons moving around in a circuit like water flowing through pipes, because it helps me to visualize what's going on. In addition to knowing about the math and theory behind circuits, it's important to have a practical sense of what electronic components can actually do. I'll discuss the differences between the theoretical ideal power sources that we often use when designing circuits on paper and real-world power sources like batteries and power adapters that have real-world limitations. I'll also show you how to use the go-to tool for debugging electronics, the multimeter, to measure the actual voltage and current in your circuits. If you're ready to start, let's move some electrons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (3)
> **Definitions:** is a  (1)
> **Speakers:** - working (1)

#### [What you should know](https://www.linkedin.com/learning/electronics-foundations-fundamentals/what-you-should-know-14049947?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/what-you-should-know-14049947?u=76281980&t=0)** - If you don't know anything about electricity, fear not. This course is for everyone, and I'll be teaching electrical concepts from the ground up. Even if you have some background knowledge of [Electronics](../../Skills/Software%20Development/Electronics.md), you might still find this course helpful by giving you another way to think about and understand electricity. I found that it's easy to get overwhelmed with the math and theory when learning about electronics, which steals focus from understanding the core concepts. So for this course, I've kept the math to a bare minimum. If you can add, subtract, multiply, and divide, you're ready to start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (2)
> **CLI Commands:** find (1)
> **Speakers:** - if (1)

#### [Using the exercise files](https://www.linkedin.com/learning/electronics-foundations-fundamentals/using-the-exercise-files-14052748?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/using-the-exercise-files-14052748?u=76281980&t=0)** - [Instructor] If you want to follow along with this course to build and measure your own circuits, you're going to need some [Hardware](../../Topics/Hardware.md). So, I have included a list of the various components and tools that I use throughout this course in the exercise files. In the main exercise file directory for this course, I've included a PDF file named partslist.pdf that contains the list of electrical components I use to build circuits throughout this course. Almost all of these items are common parts that you can purchase from a number of online retailers or your local [Electronics](../../Skills/Software%20Development/Electronics.md) store. But, for your convenience, I've also included a link for an online store page for each item. I'll also be using a multimeter throughout this course, which is a common tool for making electrical measurements. Multimeters can range in price from tens to hundreds of dollars, and I've included two recommended options in the Parts List document. I'll discuss the differences between those two options in a later video on multimeters. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the exercise files are organized into numbered directories for each chapter of the course, and within each chapter, there are numbered directories for each video. I've included things like circuit diagrams and other reference documents to help you follow along throughout the course. When I mention one of those items in a video, just navigate to the corresponding folder in the exercise files to find it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Electronics](../../Skills/Software%20Development/Electronics.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Exercise Files:** exercise files (3), exercise file (1)
> **CLI Commands:** find (1)
> **Env Vars:** pdf (1)
> **UI Navigation:** navigate to (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Safety message](https://www.linkedin.com/learning/electronics-foundations-fundamentals/safety-message-14054395?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/safety-message-14054395?u=76281980&t=0)** - Working with [Electronics](../../Skills/Software%20Development/Electronics.md) is a ton of fun, but it can also be dangerous. Electric shock can cause serious injuries or even death, and at the very least, being shocked is not a pleasant feeling. The example circuits I build in this course use relatively low voltages, so you can safely follow along and build the circuits yourself. This course will not train you to work on power distribution systems like AC wall outlets. If you want to make changes or repairs to the wiring in your house, don't do it yourself. Hire a licensed electrician. As you start designing and building your own circuits, please be careful, especially when working with voltages larger than around 50 volts. Above that level, the risk of being electrocuted increases significantly. As a safety rule, I never work alone when I'm building circuits that are somehow connected to a wall outlet. I always have a friend nearby who can pull the plug on things and rescue me if something were to go wrong. I've also found that it's fun to share the experience of building electronics with a friend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - working (1)


### 1. Fundamentals of Electricity

[↑ Back to Table of Contents](#table-of-contents)

#### [Electrical charge](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electrical-charge-14050884?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electrical-charge-14050884?u=76281980&t=0)** - Before discussing electricity, it's important to first understand electrical charge. Because electricity is simply the movement and accumulation of electrically-charged particles. If you've ever been shocked when you touch a doorknob after shuffling across the carpet on a dry day, then you've felt the effect of electrical charge. Hundreds of years ago, some clever scientists noticed that when they rubbed certain objects together, it would cause those objects to either attract or repel each other. For example, when I rub this balloon on a wool scarf, they become attracted to each other and they stick together. The cause of this strange phenomena remained a mystery for a really long time, but eventually the scientist realized that the reason the scarf and balloon are attracted to one another after being rubbed together is because the friction creates an imbalance of electrical charge between those objects. All objects are made of tiny little building blocks called atoms, which are way too small to see. And each of those atoms consist of three types of even tinier little particles called protons, neutrons, and electrons. Protons and electrons are particles which have equal and opposite and electrical charges. We say that protons are positively charged and that electrons are negatively charged. The neutrons don't have any electrical charge, so we call them neutral. The amount of charge in an object can be measured using an unit called coulombs, which is abbreviated with a capital letter C. One coulomb is equivalent to a certain number of positively charged protons,
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electrical-charge-14050884?u=76281980&t=95)** and negative one coulomb is equal to the same number of negatively charged electrons. The proton and neutron particles are clumped together at the center of each atom in what's called the nucleus. Now, while these protons and neutrons are usually stuck together in the nucleus, the electrons have a lot more freedom to move around, and that movement of electrons is what we'll be focused on throughout this course. The electrons float around the nucleus of the atom, and they can even leave the atom completely and travel to other nearby atoms. When two similarly charged particles get close to each other, so either two protons or two electrons, they repel each other and are forced apart. However, when two oppositely charged particles come together, a positively charged proton and a negatively charged electron, they're attracted to each other. When an object has an equal amount of positive and negatively charged particles, we say that it is neutrally charged, because all of those charges balance out. Before I rub the rubber balloon on the wool scarf, both of them are neutrally-charged. But when I rub the balloon on the scarf, the friction causes a bunch of electrons from the atoms in the scarf to jump over to the atoms on the balloon. This happens because the rubber material has a stronger desire for electrons than wool, so the balloon steals some of those electrons from the scarf. Now there are more electrons than usual on this balloon, so overall, it's negatively charged. And since the scarf has just lost a bunch of negatively charged electrons
>
> **[3:08](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electrical-charge-14050884?u=76281980&t=188)** when they jumped over onto the balloon, the scarf now has an overall positive charge compared to the balloon. Since the balloon and scarf now have opposite overall charges, they're attracted to each other. Though if I leave them together long enough, eventually enough of those extra electrons in the balloon will find their way back to the scarf so that both objects are neutrally charged again and no longer attracted to each other. When those little electrons build up and move around in one place, or move from one place to another, we call that electricity. And you're watching this video right now, thanks to electricity, because computers and the internet rely on the movement of those tiny little electrons to function. As an electrical engineer, I'll think of myself like a plumber. But rather than using pipes and valves to direct the flow of water, I design electronic circuits to control the movement of electrons, to put them in the right place at the right time to do something useful.

> [!info]- Semantic Content
>
> **Tools:** atom (3)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - before (1)

#### [Conductors and insulators](https://www.linkedin.com/learning/electronics-foundations-fundamentals/conductors-and-insulators-14053429?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/conductors-and-insulators-14053429?u=76281980&t=0)** - Electricity occurs when electrons accumulate in or flow through the atoms that make up an object, and different types of materials, which are composed of different combinations of atoms, may allow those little electrons to move about more or less freely from atom to atom. The term conductivity describes how easily electrons are able to move around within certain materials, and it's determined by the structure of atoms in the material and how they're connected to each other. Materials with a relatively high conductivity are called conductors. They allow the electrons in them to move about freely among the atoms. Metals such as copper and gold are commonly used as conductors in electric circuits. Materials that have a relatively low conductivity are called insulators and they resist the movement of electrons. In insulative materials, the electrons are bound more tightly to the atoms, so they have a harder time moving around. Glass, rubber, and fiberglass are some of the materials that are commonly used as insulators. Since we can't see electrons moving around, consider this analogy for conductors and insulators using something we can see, light. This clear glass is transparent and allows visible light to freely pass through it. This is analogous to an electrically conductive material, which allows electrons to move through it. This ceramic mug, on the other hand, is opaque and prevents light from passing through it. This is similar to an electrical insulator, which resists the motions of electrons through it.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-fundamentals/conductors-and-insulators-14053429?u=76281980&t=95)** Now, not all materials are perfectly transparent or opaque, and in the same way, not all materials are perfect conductors or insulators to electricity.
>
> **[1:44](https://www.linkedin.com/learning/electronics-foundations-fundamentals/conductors-and-insulators-14053429?u=76281980&t=104)** - For example, this blue vase allows most of the light to pass through it, but it's not perfectly transparent. In this analogy, the clear glass is a better conductor of light than the tinted blue vase. Even though we tend to categorize materials as either being an electrical conductor or an insulator, it's important to remember that conductivity of materials exists along a spectrum. Certain materials make better conductors or insulators than others. Also certain properties of a material might be changed by factors such as temperature, which can impact the conductivity of that material. When building electronic circuits, we use combinations of conductive and insulative materials to control the flow of electrons, and a simple example of that is this piece of wire. The inside of this wire is made of copper, which is an excellent conductor for electrons to flow through. The outside of the wire is wrapped in plastic, which acts as an insulator to protect the copper inside from accidentally touching other conductors, and it keeps the electrons flowing through the wire. To make an electrical connection between any two electronic components like these two pieces of wire, I simply need to touch the conductive metal parts of the components together, and that will allow the electrons to move from one wire to the other. Just as a plumber uses pipes to control the flow of water through a house, we can use wires like these to control the flow of electrons throughout our circuits.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), analogous to (1), similar to (1), for example (1)
> **CLI Commands:** make (3)
> **Tools:** atom (2)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - electricity (1), - for (1)

#### [Voltage](https://www.linkedin.com/learning/electronics-foundations-fundamentals/voltage-14051818?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-fundamentals/voltage-14051818?u=76281980&t=1)** - When a bunch of electrons congregate in one place, their combined charges build up to a certain level of electric potential energy in that object. For example, when I rub this rubber balloon on my wool scarf, it causes a bunch of the electrons from the scarf to jump over on the balloon. Now the balloon is negatively charged because it has a surplus of negatively charged electrons and the scarf is positively charged because it has a shortage of electrons. This imbalance of charge means there's a difference in the electric potential energy between these two objects. And that difference produces a force which tries to move the excess electrons from the balloon back towards the scarf to equalize the charge. We use the term voltage to describe the difference in electric potential energy between two points. And we'll use that imbalance of energy to push electrons around when we create electric circuits. Voltage is measured using a unit called volt to describe how much more or less potential energy there is in one place compared to another. When describing the voltage of something, it's critical to know what the point of reference is, what are the volts relative to? That point of reference may not be explicitly defined when working with common voltage sources, but you're still expected to understand what that voltage means. For example, in a nine-volt battery, that single number, nine volts, means there's a nine-volt difference in potential energy between these two terminals.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-fundamentals/voltage-14051818?u=76281980&t=95)** There's an insulative barrier inside of the battery that separates the two halves and the battery works using chemicals inside that act like a pump to move electrons from the positive side to the negative side. It moves just enough electrons to maintain that nine-volt difference between the positive and negative terminals. Looking at another power source, the electrical outlets in North America operate at 120 volts. That voltage is describing the potential difference between these two terminals. By convention, the terminal on the left is called the neutral line and acts as the point of reference and the hot terminal on the right is 120 volts relative to the neutral terminal. In a complex electrical system with lots of components, different points throughout the system will likely be operating at different electric potential energy levels. Therefore, to keep track of the voltages at each of these points throughout a system, it helps to have a single point of reference. The term ground, or common, designates that single reference point which is used to describe the voltage at other points throughout an electric circuit. The term ground comes from the fact that many large electrical systems, like the wiring in your house, are connected to the earth and literally use the ground as that single point of reference. In practice, the terms common and ground tend to get thrown around and used interchangeably. So it's important to always understand what the voltages in a circuit are actually referenced to. To illustrate how multiple voltages
>
> **[3:07](https://www.linkedin.com/learning/electronics-foundations-fundamentals/voltage-14051818?u=76281980&t=187)** can be referenced to a single point, I'm going to use an analogy relating electricity to water. In this analogy ,you can think of a voltage like a difference in pressure. This cooler represents my electric system and in it, I have two cans of carbonated soda. I've chosen this can to act as my common point of reference for the system, so I've labeled it with the symbol for electrical ground. This other can, labeled A, represents some other point within the system. Right now, both cans are at the same pressure, which represents their electric potential energy. Since there's no difference in potential energy between these two cans, can A is at zero volts relative to the reference can. If I shake up can A, that'll increase its internal pressure, which means can A will have a higher potential energy than the reference. Now can A represents a point in my system with a positive voltage. These cans are both in sealed containers, so there's nowhere for the soda inside to go. But if I was able to connect them together with a straw, soda would flow from the high pressure in can A towards the lower pressure in the reference can. Ah, and there's another can of soda in my cooler and it's conveniently labeled B. Can B was opened a while ago, so the carbonation in it has escaped and it's gone flat. Since the pressure in can B is lower than the reference can, can B represents a negative voltage in the system. For this analogy, I shook and opened soda cans to change their potential energy,
>
> **[4:42](https://www.linkedin.com/learning/electronics-foundations-fundamentals/voltage-14051818?u=76281980&t=282)** but in an electrical circuit, we use components called voltage sources, like batteries and power supplies, which maintain a constant potential difference between two points. I can compare the voltage between these two battery terminals in the same way I compared the pressure difference between soda cans. I've connected the negative terminal of the nine-volt battery on the right to the positive terminal of the battery on the left. And I'm using that point as the ground reference for the system. Traditionally, black-colored wires are used to connect the negative output of a power source and red wires are used to connect the positive output. Point A is represented by the positive terminal of the right battery, so it's at positive nine volts relative to the ground. Point B is represented by the negative terminal of the left battery, so the voltage there is negative nine volts relative to the ground. The fact that point A represents positive voltage and point B represents negative voltage is dependent on the can I chose to serve as my reference for ground. If I had selected the open can to be my point of reference, which has the lowest potential energy of the three cans, then both of the other cans would have a positive voltage relative to it. This is that same circuit diagram as before, except I've changed which point I decided to call the ground reference to be the negative terminal of the left battery instead of the point in the middle. Now the point in the middle is at positive nine volts and point A on the far right is even higher, at positive 18 volts relative to ground.
>
> **[6:16](https://www.linkedin.com/learning/electronics-foundations-fundamentals/voltage-14051818?u=76281980&t=376)** We encounter a wide range of voltages in day-to-day life, ranging from the relatively small signals that come from an audio jack of an MP3 player, which are usually less than one volt, all the way up to the high voltage transmission lines that carry power over long distances, which operate at over 115,000 volts.

> [!info]- Semantic Content
>
> **Tools:** terminal (8)
> **Analogies:** for example (2)
> **Env Vars:** mp3 (1)
> **Definitions:** is called (1)
> **Speakers:** - when (1)

#### [Current](https://www.linkedin.com/learning/electronics-foundations-fundamentals/current-14051817?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-fundamentals/current-14051817?u=76281980&t=1)** - When a voltage exists between two points, like the terminals of this 9-volt battery, it generates a force that tries to move the surplus of electrons from the negatively charged terminal towards the positive one. Right now these two terminals are insulated from each other so those electrons don't have a way to get from one terminal to the other. The air between the two battery terminals is acting as an insulator to prevent those electrons from making the jump over. But if I create a conductive path between them by connecting them with a copper wire and a light bulb, it allows the electrons to flow from the negative terminal to the positive one, and we see that because the light bulb turns on. This flow of electric charge through the wire is called current, and it's measured in units of amperes, which is usually just shortened to amps. Amps are used to express the flow rate of electric charge with one amp being equivalent to the flow rate of one coulomb worth of charge per second. To give you a frame of reference for how much current an amp represents, here are a few examples of current you may encounter in your day-to-day life, ranging from a small fraction of an amp that drives headphones attached to an MP3 player, household appliances that use a few amps to operate, all the way up to over 10,000 amps that flow through a lightning bolt. I like to think of electrical current flowing through a copper wire like the water flowing through this hose. Right now, this faucet is acting as a constant source of pressure, and the pressure is higher at this end of the hose than the end of the hose in my hand. And this difference in pressure between the two ends
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-fundamentals/current-14051817?u=76281980&t=94)** is like a voltage, and it causes the water to flow from the end with the higher potential energy towards the end with the lower potential energy. Now, unlike voltage, which is a difference in potential energy between two points, when I'm talking about current, I'm only concerned with what's happening at a single point along this wire. Current is simply a measure of how much charge is flowing past this point in a single second. There is one tricky aspect to describing electric current and that is which way do we say the current is flowing? Unfortunately, the answer to that is a bit more confusing than water in a hose. This diagram shows the circuit I created earlier using a 9-volt battery, a light bulb and some copper wire. On the battery, the negatively charged terminal contains a surplus of negatively charged electrons. So when I connect the two terminals with a conductive path, those extra electrons will flow from the negative terminal towards the positive terminal. It would seem like this would be the direction of current, but when scientists were first learning about electricity, there was uncertainty about which particles were actually moving and in what direction. They initially thought that positively charged particles were flowing in the other direction. Unfortunately, by the time they figured out what was really going on, the terms positive and negative had already been established, as well as the convention that current flows from positive to negative sides. all of the formulas had been written this way and the scientists had published lots of books and told other scientist buddies about it, so it was too late to change things.
>
> **[3:08](https://www.linkedin.com/learning/electronics-foundations-fundamentals/current-14051817?u=76281980&t=188)** And because of that mistake, to this day, we use what's called conventional current notation, which says that electric current flows from positive to negative. In actuality, the thing we call current is the movement of spaces where there are not electrons, which you may hear referred to as holes. The good news is that since all of the formulas were written this way, it keeps the math consistent.

> [!info]- Semantic Content
>
> **Tools:** terminal (6)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** mp3 (1)
> **Speakers:** - when (1)

#### [Circuit basics](https://www.linkedin.com/learning/electronics-foundations-fundamentals/circuit-basics-14049950?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/circuit-basics-14049950?u=76281980&t=0)** - [Instructor] When working with electricity, we create circuits which are looped pathways for electrons to travel around. In the case of this circuit, connecting a battery and a light bulb, the wires create a loop that allows an electron to travel from the negative terminal through the light bulb and down to the positive terminal. Then the battery uses some of its stored energy to move that electron back over to the negative side so it can make another trip around the circuit. And this process will continue over and over for all of the electrons in the circuit. You can relate this process to the way water cycles through a fountain. The fountain has a pump which takes water from the base of the fountain and uses energy to increase its pressure. The high pressure then shoots up into the air, falls back down and gets collected in the base to be cycled again. In the case of my simple circuit, the battery is acting like the pump. It uses stored energy to pump electrons from one side of the battery to the other, to maintain a specific voltage between the terminals, which keeps the current flowing. There are three basic elements that make up a circuit. First, you need a voltage or current source to move the electrons around the circuit. In my circuit, the battery is serving as the voltage source. Next, you have an electric load, which is a very broad term to describe any circuit component that consumes electric power. The light bulb is acting as a load in my example circuit.
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-fundamentals/circuit-basics-14049950?u=76281980&t=94)** And finally, the circuit needs a conductive pathway that allows the current to flow in a loop. I used pieces of wire to create that in my circuit. As long as those three elements are in place and the wire is connected to create a loop, the current will continue to flow. This closed loop is referred to as a closed circuit, but if the circuit path is broken, that current will stop. This break in the loop is called an open circuit and we often use open circuits to intentionally stop the flow of current. For example, a switch like the one on a flashlight mechanically opens or closes a circuit to turn the flashlight off or on. When a circuit is open, it's important to realize that there's still a voltage between the two sides of the brake. Components attached to the positive and negative terminals have the same potential energy as those terminals. Since an open circuit completely blocks the flow of current, its opposite is a circuit that allows current to flow freely and unrestricted, which is called a short circuit. While the term short circuit simply means a direct electrical connection between two points, it's often used when referring to an abnormal or unintended connection that enables current to travel the wrong path through a circuit. They usually occur when two conductive components like copper wires accidentally come in contact with each other. For example, if I accidentally connected a wire between the terminals of my battery,
>
> **[3:09](https://www.linkedin.com/learning/electronics-foundations-fundamentals/circuit-basics-14049950?u=76281980&t=189)** the electrons will travel along that shortcut instead of going through the light bulb because the wire is a better conductor than the light bulb. Electrons prefer to take the easier more conductive route. Short circuits can be dangerous because they allow excessive amounts of current to flow through parts of a circuit where it's not intended to go, which can cause the circuit to overheat and potentially catch fire. Be careful when you're wiring up circuits to avoid creating a direct connection between the terminals of your power source.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** make (2)
> **Tools:** terminal (2)
> **Analogies:** for example (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Resistance and Ohm's Law](https://www.linkedin.com/learning/electronics-foundations-fundamentals/resistance-and-ohm-s-law-14049951?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-fundamentals/resistance-and-ohm-s-law-14049951?u=76281980&t=1)** - As electric current passes through a conductive material like a copper wire, that wire actually pushes back against the flowing electrons to oppose their movement. Like how the force of friction opposes the movement of physical objects. That opposition to electric current is called resistance. Using the analogy to relate electricity to the water flowing through this hose, you can think of this faucet as a constant source of pressure, which creates a voltage on the hose and causes water to flow through it representing current. The diameter of the hose is directly related to its resistance. When I hold the hose straight and open like this, the current flows through more or less freely. But if I put a bend in the hose, that increases its resistance and restricts the flow of current. In electrical systems resistance described how much an object resists the flow of electric current. And we measure resistance using units called ohms, which are represented using the omega symbol. There is a fundamental relationship between resistance, voltage and current called Ohm's Law. According to Ohm's Law, the voltage across an object is equal to the current through that object times its resistance. You'll typically see Ohm's Law written as V equals IxR, where V represents voltage, I represents current and R represents resistance. Now it may seem strange to use the letter I
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-fundamentals/resistance-and-ohm-s-law-14049951?u=76281980&t=94)** to represent current instead of the letter C, but it originates from a French phrase that was used to describe the intensity of current. I'll be using these letters to represent voltage, current, and resistance throughout this course. If I know any two of those three quantities in a circuit, then I can easily use Ohm's Law to solve for the third. In this simple circuit, the battery is providing a voltage of nine volts across the light bulb and the light bulb has some amount of internal resistance. For this example, I'll say it's 20 ohms. When current flows through the light bulb, the light bulb resists the current and produces heat as a side effect, which is what makes the light bulb glow. Since I know the resistance of the light bulb and the voltage across it to determine the current through it, I just need to rearrange Ohm's Law. Current is equal to the voltage divided by resistance. Dividing nine volts by 20 ohms shows that the light bulb will have 0.45 amps flowing through it. It's fortunate that the relationship for Ohm's Law is so simple because I frequently use it when designing circuits to determine the effect that changing one of these quantities like voltage or resistance will have on the other two. It's easy to relate Ohm's Law to the water flowing through a hose. right now I'm holding the hose steady. So its resistance is remaining constant. If I increase the pressure on the hose or increase the voltage, that causes the current through the hose to also increase.
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-fundamentals/resistance-and-ohm-s-law-14049951?u=76281980&t=190)** And if I decrease the voltage on the hose, that causes the current to decrease along with it. Now, if I keep that voltage or pressure on the hose the same, but I bend the hose to increase its resistance, that increase in resistance, causes the current through the hose to decrease. And if I straighten the hose back out to decrease its resistance, that causes the current through the hose to increase back up. Now consider the final scenario. What if my hose gets a clog in it? That's an increase in resistance that's outside of my control and that increase in resistance has caused the current to drop off. But what if I want to have that same amount of current that I had before? To accomplish that I would need to increase the voltage by a proportional amount to offset that increase in resistance.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is a  (1)
> **Versions:** 0.45 (1)
> **Speakers:** - as (1)

#### [SI prefixes](https://www.linkedin.com/learning/electronics-foundations-fundamentals/si-prefixes-14056165?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/si-prefixes-14056165?u=76281980&t=0)** - [Instructor] When working with [Electronics](../../Skills/Software%20Development/Electronics.md), it's common to encounter really large values like 10 million ohms and really small values like 0.003 amps. And it can be cumbersome to write out those numbers. All of those zeros take up a lot of space and it's easy to miscount them at a glance. So, to make large and small numbers easier to work with, we use a common set of prefixes to describe quantities based on powers of 10. These metric prefixes are attached to the front of a base unit like volts, amps, or ohms to indicate a multiple or fraction of that unit. This table contains the most common prefixes you'll encounter when working with electronics and have included a copy of it in the exercise files for this video that you can use as reference. The prefixes on the top half of the chart, kilo, mega and giga represent multiples of a base unit that are greater than one. And the prefixes on the bottom half of the chart, milli, micro, nano and pico represent fractions of a base unit that are smaller than one. Each prefix has a name, which is attached to the base unit when it's spoken or written out in full. And there's a symbol version for each prefix to use with the symbol representation of the units. Decoding prefixes is as simple as multiplying the factors or powers of 10 shown in the right two columns. For example, 42 mega ohms, which uses a capital M as the prefix symbol
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-fundamentals/si-prefixes-14056165?u=76281980&t=96)** is 42 times 10 to the sixth power, which is 42 million ohms. As another example, 42 milliamps, which uses a lowercase m as the prefix symbol, that's equal to 42 times 10 to the power of minus three or 0.042 amps. Going the other way, if I want to figure out the metric prefix to use for a value like 150,000 volts, I would look for the prefix that most closely matches it. In this case, my value is a multiple of a thousand, which is 10 to the third power. So I'll use units of kilovolts to describe it. It would also be possible to describe that unit in values of megavolts, because 150 times 10 to the third volts is the same as 0.15 times 10 to the six volts. In fact, I could technically write out that value using any one of those possible prefixes, but I'll choose the prefix that makes it easiest to read because that's the point of using them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (2)
> **Versions:** 0.003 (1), 0.042 (1), 0.15 (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Limit current to an LED](https://www.linkedin.com/learning/electronics-foundations-fundamentals/challenge-limit-current-to-an-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/challenge-limit-current-to-an-led?u=76281980&t=0)** - [Narrator] All right, folks, it's time for a challenge problem. This is your chance to practice using ohms law. For this challenge, I want you to use ohms law to determine an appropriate resistance value for the resistor in this circuit to limit the amount of current that goes through a light emitting diode or LED. This is a very common task when working with hobbyist [Electronics](../../Skills/Software%20Development/Electronics.md). In LED is a special type of electrical component that emits light when current flows through it, working with LEDs can be a bit tricky, because they're an electrical component that does not follow ohms law like resistors do. You cannot treat an LED like a resistor when designing a circuit. The details about how an LED works are beyond the scope of this course, but for this exercise, you'll need to know three things about it. In this circuit, the LED will have a very tiny resistance to the current passing through it. In fact, it's so small that for this challenge, you can pretend like the LED has zero resistance to current that low resistance means current will flow freely through the LED. And that's why we need to include a resistor to limit the amount of current going through the LED, so it doesn't get overloaded. The current that flows through the resistor will be the same current that flows through the LED. This LED is only designed to handle
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-fundamentals/challenge-limit-current-to-an-led?u=76281980&t=95)** up to 20 milliamps of current, and if it gets any more current than that, then it's likely to burn out. So to be on the safe side, the target goal for this challenge is to provide 15 milliamps of current to the LED. And the final thing to know about the LED is that it has a voltage drop of two volts across it. I'll be attaching the resistor and LED to a nine volt battery as shown here. Of that nine volt potential difference across both components, two volts will be lost to the LED thus only the remaining seven volts will drop across the resistor. Your goal is to use ohms law to figure out the resistor value that will create a current flow of 15 milliamps through the circuit. I've included a document in the exercise files that you can use as reference for this challenge. It includes this diagram, your goal for the challenge problem, and a summary of the things to consider. Take some time to think through this challenge, and when you're done, be sure to watch my solution video, to see how I approach the problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (1)
> **Env Vars:** led (14)
> **Definitions:** is a  (2)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Limit current to an LED](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-limit-current-to-an-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-limit-current-to-an-led?u=76281980&t=0)** (upbeat bright bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-limit-current-to-an-led?u=76281980&t=6)** - Let's take a look at my solution for the challenge to limit current to an LED. Since I was going to be solving for resistance, to use Ohm's law, I needed to know two other values, voltage and current. Looking at the circuit, I knew that the current that flowed through the resistor would be the same current that flowed through the LED. And my goal was to limit that current to only be 15 milliamps. In regards to voltage, I was only interested in knowing the voltage across the resistor, since it would be using Ohm's law to solve for its resistance. I did not use the total of nine volts from the battery when solving for resistance, because that would have included the voltage across both the resistor and the LED. Since the LED is a special type of component that does not follow Ohm's law, trying to include the voltage across it in my equation to solve for resistance using Ohm's law will not work. The math just won't line up. So, to find the voltage across just the resistor, I subtracted the two volt drop across the LED from the total battery output of nine volts. And that left me with just seven volts across the resistor. Those were the two numbers I needed to use with Ohm's law to calculate the appropriate resistor value. So, I substituted seven volts and 15 milliamps into Ohm's law. Then rearrange the equation to solve for resistance. Seven volts divided by 15 milliamps gave me 466.7 ohms, which is a really awkward number.
>
> **[1:39](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-limit-current-to-an-led?u=76281980&t=99)** Resistors aren't manufactured in that size, so I rounded it up to 470 ohms, which is a common resistor value and close enough for this purpose. Here's my nine volt battery LED and 470 ohm resistor. I've connected one end of the resistor to the positive terminal of the battery. And I've connected one end of the LED to the negative terminal of the battery. When I connect the other ends of the resistor and LED together, it closes the circuit and current begins to flow so the LED lights up. If you're following along at home and you build this circuit yourself, but it did not light up, try turning the LED around, it's probably backwards. The LED is a polarized component, which means its direction matters. And the circuit will only work correctly, if it's inserted the right way. You'll commonly see resistors use like this to limit the current flowing through LEDs and other related components to protect them from drawing too much current and burning up.

> [!info]- Semantic Content
>
> **Env Vars:** led (11)
> **Definitions:** is a  (4)
> **Tools:** terminal (2)
> **CLI Commands:** find (1)
> **Versions:** 466.7 (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat bright bouncy music) (1)


### 2. Multimeter Measurements

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a multimeter?](https://www.linkedin.com/learning/electronics-foundations-fundamentals/what-is-a-multimeter-14051825?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/what-is-a-multimeter-14051825?u=76281980&t=0)** - When working with [Electronics](../../Skills/Software%20Development/Electronics.md), a multimeter is the go-to tool for testing and troubleshooting circuits. It's your first line of defense for tracking down problems. A multimeter is a single device that can measure a variety of electrical quantities and most modern multimeters have a numeric display like this one so they're called digital multimeters or DMM. You can buy a DMM at most [Hardware](../../Topics/Hardware.md) or electronic stores or from an online retailer like SparkFun or [amazon.com](https://amazon.com). And there's a wide range of multimeters available from different manufacturers that vary in capabilities. When choosing a DMM, at the very least, make sure it can measure voltage, current, resistance and electrical continuity. This is a basic DMM, which only measures those four necessities. I bought it from [SparkFun.com](https://SparkFun.com), which sells it as a low-cost entry-level model. So if you're a beginner hobbyist on a budget, then a DMM like this one should serve you well. If you want to get something with a bit more capability, I would recommend a DMM like this Extech MN36, which I borrowed from my wife. In addition to the four basic DMM measurements, it can also measure capacitance, frequency and temperature, plus it has the nice ability to automatically set the range for measurements so you don't have to. I've included a document called DMM List.pdf, which includes information about both of these DMMs in the exercise file for this video. You should choose a DMM based on your budget and needs. I'll be using the DMM from SparkFun
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-fundamentals/what-is-a-multimeter-14051825?u=76281980&t=95)** because it's adequate for what I need to measure throughout this course. There are three main parts to this DMM. At the top is the display where I'll read the value from a measurement. Below that is the selector knob, which I'll use to choose the type of measurement I want to measure: Voltage, current, resistance or continuity. And when I'm not using the DMM, I always keep this knob in the off position to save on the battery. At the bottom of the DMM are three ports that I'll use to connect my probe. These are basic needle test probes, which are typically colored red and black. There's no difference between the probes, other than their color but the black probe is conventionally attached to common ground or negative reference within a circuit and then the red probe is used to check voltages at other points throughout the circuit. The probes for this multimeter use a type of connector called a banana connector because the plug supposedly looks kind of like a banana. This type of connector is common amongst multimeters and allows you to attach a variety of different types of probes. Now, I have two probes but there are three ports on the DMM. So which port should I connect each probe to? The black probe is the simplest. Since I'll usually be connecting it to the common ground for voltage measurements, I'll attach the black cable to the port labeled com, which stand for common. This leaves me with two options for the red probe and I almost always use the port on the right for milliamps, volts and ohms. I'll connect the probe to this port for all the resistance and voltage measurements
>
> **[3:08](https://www.linkedin.com/learning/electronics-foundations-fundamentals/what-is-a-multimeter-14051825?u=76281980&t=188)** and for smaller current measurements that are less than 200 milliamps. This other port is specifically designed to measure larger currents up to 10 amps. I rarely ever use that port and for this course, I'll only be making measurements that require the red probe to be connected to the right side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** dmm (14), mn36 (1)
> **URLs:** [amazon.com](https://amazon.com) (1), [sparkfun.com](https://sparkfun.com) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** kind of like (1)
> **Speakers:** - when (1)

#### [Measure DC voltage](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-dc-voltage-14050886?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-dc-voltage-14050886?u=76281980&t=0)** - To measure voltage with my DMM, I'll start by connecting the black probe to the center comm port and the red probe for the port on the right with V for voltage. Next I'll need to turn the selector knob to choose the correct type of voltage measurement. This particular DMM has separate modes for measuring AC and DC voltage. And it has several ranges to choose from for each mode. The AC voltage mode is used to measure the voltage in circuits with alternating current, which is a special type of current that changes direction back and forth over time. Understanding how AC voltage works is beyond the scope of this course. So for now, just be aware that AC and DC are two different types of voltage that require different DMM measurement modes. You'll typically see the AC voltage mode represented on DMMs with the letters VAC or the letter V with the squiggly line. The DC voltage mode measures the voltage in circuits with direct current, which always flows in the same direction. Like what comes from a battery. The DC voltage mode is typically represented with the letters VDC or the letter V with these two straight lines. For this video, I'll be measuring the voltage of a simple circuit consisting of a battery, a resistor, and an LED. So I'll be using the DC voltage mode. If you're using a DMM like this X-tech multimeter that has auto ranging capabilities that makes your life easy. You simply turn the knob to select the voltage mode and you're ready to start measuring.
>
> **[1:34](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-dc-voltage-14050886?u=76281980&t=94)** This DMM only has one voltage setting, which automatically detects if it's measuring AC or DC voltage. If your DMM does not have auto ranging feature, then you'll need to manually select the range to use. My SparkFun DMM has five possible ranges to choose from for DC voltage spanning from 200 millivolts all the way up to 600 volts. On this DMM, the range I select controls where the decimal point will be located on the output. So I can represent really large or really small values on the same little screen, which can only show three digits at a time. If I choose too small of a range, then the measured value won't fit on the display. And if I choose too large of a range, then the measured value won't fill up all three digits. So I'll lose some resolution for my measurement. If I'm unsure about the voltage I want to measure, I'll start by using the lowest range on my SparkFun DMM. If the measured voltage is too high for that range, the DMM will give me some sort of error message. This particular DMM shows me the number one when it's overloaded. In that case, I'll crank the knob up to the next higher range and try again. If you're using a different type of multimeter than this one, you should check the documentation to see how it handles different ranges. If I know the approximate voltage that I'm expecting to measure, I should choose the smallest range that exceeds that voltage to see the most digits on the output display. Since the circuit I planned to measure uses a nine volt battery, I'll set the DMM to the 20 volt range because that's the smallest range
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-dc-voltage-14050886?u=76281980&t=190)** that exceeds nine volts. When measuring voltage, I'm looking at the potential difference between two points in a circuit. So I need to establish which point will serve as the ground reference. I'm going to treat the wire connected to the negative battery terminal as my ground. So I'll connect the negative or black probe to it. And now when I touch the red probe to the wire above the resistor, I can see in my DMM that there's actually a little more than nine volts difference between the two terminals on this battery. If I swap the probes around so that the black probe is connected to the top of the resistor and the red probe is connected to the negative terminal of the battery, I see negative nine volts because I've changed my point of reference. Swapping probes around isn't going to break anything, but it will cause you to see the opposite or negative voltage. So make sure you keep track of the probe's orientation. Next, I want to look at the voltage across this LED. So reconnect the black probe to the negative terminal and I'll use that as my reference. And I'll connect the red probe to the joint between the LED and the resistor. This shows me that there's a voltage drop of slightly less than two volts across the LED, which is about what I expect to see for this type of LED. Measuring voltages on this led circuit is simple, but if your circuits grow in complexity to something like this, the process for measuring voltage throughout the circuit remains the same. Always start by establishing the point of reference by connecting the black probe to your ground. Keep it there, and then poke around with the red probe
>
> **[4:45](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-dc-voltage-14050886?u=76281980&t=285)** to measure the voltage at different points throughout the circuit.

> [!info]- Semantic Content
>
> **Env Vars:** dmm (13), led (5), vac (1), vdc (1)
> **Tools:** terminal (3)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)

#### [Measure direct current](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-direct-current-14055168?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-direct-current-14055168?u=76281980&t=0)** - When I measure current with my DMM, I always connect the black probe to the center comm port first. And then I need to decide if I'll be measuring a small or large current, so I can connect the red probe to the appropriate port. For this example, I'll be measuring the current through a simple circuit, which consists of a resistor and an LED. Using ohms law, I can calculate that the current through this circuit should be around 15 milliamps. that falls well within the range of 200 milliamps that the right DMM port can handle. So I connect my red probe to the right side. If I expected my circuit to exceed or even be close to the 200 milliamp limit of the right port, I would connect the red probe to the other port, which can handle up to 10 amps just to be safe. Next, I'll turn the selector knob to choose the smallest range that exceeds the current I expect to be measuring. Since I expect to measure around 15 milliamps from this circuit, I'll turn the knob to the 20 milliamps setting. Now, the way to probe a circuit to measure current is different than when measuring voltage. It's a bit trickier. Unlike a voltage measurement, which looks at the difference in electric potential on either side of a component. A current measurement is looking at the current passing through a component. Therefore to measure current, I'll need to insert my multimeter into the circuit, placing it in series between the components I want to measure. To do that, I'll need to break the connection between the resistor and LED. Since the resistor is connected to the positive terminal of the battery, current flows from the resistor to the LED
>
> **[1:36](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-direct-current-14055168?u=76281980&t=96)** and the DMM measures current from the red probe to the black probe. So I connect the red probe to the resistor, which is the source of current and I'll connect the black probe to the LED. That completes the circuit and the DMM shows that there's a little more than 15 milliamps of current flowing through it. This number might fluctuate a little bit because the DMM is taking multiple readings over time and showing me the average, but it usually levels out if I wait a little bit. If I swap the probes around so that the black probe is connected to the source of current at the resistor and the red probe is connected to the LED, that'll show that there's negative 15 milliamps passing from the red probe to the black probe. Since I have to insert the DMM in series with the components to measure current, I want the DMM to act like a wire so it doesn't impact the operations of the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the circuit. And the DMM is designed so that when it's set in current mode, it'll have as little resistance as possible, basically acting like a short circuit, and that can be create a dangerous situation if I'm not paying attention. And I accidentally try to take a voltage measurement while the DMM is configured to measure current. For example, if I connected the probes of the DMM to the nine volt battery like it was going to measure the voltage, but the DMM was in current mode, that would create a short circuit between the battery terminals. Since the resistance is so low in the DMM, it doesn't restrict the flow of current from the battery. So that battery is going to pump as much current as it's able to and that can quickly overload
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-fundamentals/measure-direct-current-14055168?u=76281980&t=190)** and destroy the DMM. You should never try to measure voltage when your DMM is configured for a current measurement. Fortunately, there's a fuse inside the DMM which is included to protect it against accidents. When too much current flows through that fuse, it'll break, which creates an open circuit and stops the flow of electricity. If that happens, you'll need to replace the fuse to continue using the DMM, but that's a lot cheaper than having to replace the entire device. Since it's easy to forget about things and damage the DMM when it's set to current mode, I recommend always setting the DMM back to voltage mode, or just turn it off when you're done measuring current, just to avoid those sort of accidents. And if you let a friend borrow your DMM, make sure they know about that too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** dmm (19), led (5)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Best Practices:** you should never (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - when (1)


### 3. Power

[↑ Back to Table of Contents](#table-of-contents)

#### [Electric power](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electric-power-14055170?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electric-power-14055170?u=76281980&t=0)** - [Instructor] We built electronic circuits to do something, that something could be lighting an LED, turning on a motor or playing music through a speaker. All of those actions require power and energy. Energy is the ability of an object to perform work, which is a physics term that means moving something from one place to another. And energy comes in many different [Forms](../../Skills/Web%20Development/Forms.md), including mechanical energy, chemical energy, thermal energy, and my personal favorite electrical energy. To use these different types of energy to do things we need to get it from somewhere. But where does all that energy come from? As the brilliant scientist Albert Einstein is credited with saying, "Energy cannot be created or destroyed, but it can change from one form to another." For example, the chemicals inside of a battery [react](../../Skills/Web%20Development/React.js.md) to convert stored chemical energy into electrical energy. And a light bulb connected to that battery can transform that electrical energy into two other forms of energy. It transforms into thermal energy in the form of heat and electromagnetic energy in the form of light. One of the main goals when working with [Electronics](../../Skills/Software%20Development/Electronics.md) is to use these transformations to do something useful. We can generalize the components that perform these transformations as either being a producer or a consumer of electrical energy. Producers like the battery, convert some form of energy into electricity, and consumers like the light bulb, convert electric energy into another useful form.
>
> **[1:37](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electric-power-14055170?u=76281980&t=97)** Electric energy itself exists in one of two forms. Electric potential energy, more commonly known as voltage, is a static buildup and imbalance of electric charge, which has the potential to do work by moving electrons from one place to another. And when those electrons actually do move along a conductive path, that's a form of kinetic energy known as current. Energy is measured using a unit called joules, which represents an amount or how much energy is transferred. You'll encounter joules occasionally when working with electronics, but more often you'll deal with energy in terms of power. Electric power describes the rate at which electric energy is transferred or transformed. Power is measured in units of watts. With one watt representing the energy transfer rate of one joule per second. Working in terms of watts, instead of joules is useful because watts give us information about how much and how fast energy is being transferred in an electric system. The amount of power consumed by a circuit component is equal to the rate of the current flowing through that component times the voltage across it. This is a common equation that you'll typically see abbreviated as P equals I times V. As I stand here on the patio, watering a pinwheel I'm converting mechanical energy from the water in this hose into another form of mechanical energy, a spinning pinwheel.
>
> **[3:13](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electric-power-14055170?u=76281980&t=193)** You can relate this to how an electric motor converts electrical energy from current passing through the motor into mechanical energy to turn a shaft. The rate at which energy is transferred from the hose to the pinwheel represents power, and the power consumed by the pinwheel will depend on the pressure and flow rate representing current and voltage. If I open up the faucet to increase the voltage on the hose, that'll increase the current on the hose due to Ohm's law. The relationship that power equals voltage times current, means that by increasing the voltage and current on the hose, I'm increasing the amount of power. And so I'm transferring energy at a faster rate to the pinwheel. And I can see the effect of that because it spins more quickly. For this simple circuit, which has two consumer components, a resistor and an LED, I can calculate the power consumed by each component individually using P equals I V. The power consumed by the resistor equals the current through the resistor, which is 15 milliamps times the voltage across it, which is seven volts. This results in a power consumption of 105 milliwatts. Similarly, the power consumed by the LED is equal to 15 milliamps times two volts, which is 30 milliwatts. To calculate the total power consumed by this circuit, I can add together the power that's consumed by the individual components. So, 105 milliwatts plus 30 milliwatts gives this circuit a total power consumption
>
> **[4:47](https://www.linkedin.com/learning/electronics-foundations-fundamentals/electric-power-14055170?u=76281980&t=287)** of 135 milliwatts. If I don't need to know the consumption of the individual components, and I only cared about the total power consumption of the system, then I could simply consider the circuit as a whole. There's 15 milliamps flowing through both components and a total of nine volts across them. Using those numbers to calculate the total power gives me the same answer as when I added together the individual components, 135 milliwatts. To give you a practical frame of reference for working with power, here are a few examples of the power consumed by devices you may encounter in your everyday life. Ranging from a quarter of a watt, consumed by a microcontroller device, like an [Arduino](../../Skills/Software%20Development/Arduino.md) UNO, all the way up to household appliances, like a microwave oven that can consume over a thousand watts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (3), [Electronics](../../Skills/Software%20Development/Electronics.md) (2), [React](../../Skills/Web%20Development/React.js.md) (1), [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Definitions:** is a  (3), known as (2), means that (1)
> **Env Vars:** led (3), uno (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Ideal vs. real-world power sources](https://www.linkedin.com/learning/electronics-foundations-fundamentals/ideal-vs-real-world-power-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/ideal-vs-real-world-power-sources?u=76281980&t=0)** - When designing electronic circuits, we often simplify things by pretending that voltage sources are ideal, meaning that they can maintain a constant voltage regardless of the load that's attached to them. For example, if I'm designing a circuit to be powered by a nine-volt battery, I'll treat that battery as if it always has exactly nine-volts between the two terminals. While this abstraction makes analysis and [Circuit Design](../../Skills/Software%20Development/Circuit%20Design.md) easier, it's important to keep in mind the real world physical limitations of that battery. If I was using the battery to power in LED that only consumed a few milliwatts, then that simplification would work just fine. But if I tried to use that same battery to power an electric car that requires thousands of watts, it wouldn't work. Even if the electric car motor only required nine-volts, the chemical reactions in a tiny little nine-volt battery simply can't supply enough current to produce the necessary power. All real world power sources will have a limit on how much current they can successfully output at their intended operating voltage. A simplified example would be a nine-volt battery that's capable of delivering one amp of current to an attached load. Just because the battery can output one amp doesn't mean it always will output one amp. The battery will deliver current to the load according to Ohm's Law. One amp is just the upper limit of what it can do. So if the load resistance is really large, say 10 kiloohms, that nine-volt battery would only need to deliver nine milliamps of current.
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-fundamentals/ideal-vs-real-world-power-sources?u=76281980&t=95)** That's within the battery's capability, so it works just fine. But if the load resistance is really small, say only two ohms, that would require four and a half amps of current from a nine-volt source. That exceeds the amount of current that the battery is capable of outputting. I like to think of a battery's ability to supply power to an electrical load like my arm's ability to lift a weight. My arm is strong enough to pick up this 10 pound dumbbell, no problem. But if I tried to pick up a 50 pound dumbbell, I'd overexert myself and probably pull a muscle. When batteries get overloaded, they tend to overheat and they fail to maintain their expected output voltage. In short, the load will not get the power that it needs to. When I'm [Prototyping](../../Skills/Software%20Development/Prototyping.md) circuits, I often use an AC-to-DC wall adapter, like this one, to provide power. This particular USB adapter clearly states its output capability on the side. It maintains a constant output voltage of five-volts and it will do so for loads that draw up to two amps. Five-volts times two amps means this adaptor can deliver up to 10 watts of power. If I connect a device to the adapter

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Circuit Design](../../Skills/Software%20Development/Circuit%20Design.md) (1), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **Env Vars:** led (1), usb (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - when (1)

#### [Battery capacity](https://www.linkedin.com/learning/electronics-foundations-fundamentals/battery-capacity-14049949?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/electronics-foundations-fundamentals/battery-capacity-14049949?u=76281980&t=1)** - Unfortunately, not all power sources last forever. Batteries use chemical reactions to generate a voltage between their terminals and push electrons through a circuit. But batteries have a physical limit to their size, which means there's a limit to the amount of energy they can store. Thinking of electrical power sources, with the analogy of electricity being like water, you can think of this faucet as being a power supply that's attached to a wall outlet. It will maintain a constant output pressure representing voltage, and it can provide me a practically endless supply of flowing water representing current. A battery on the other hand is more like this cooler of water. It has a finite amount of water that it can store representing electrical charge and gravity creates pressure at the base of it to push that water out. Now, when this cooler is fresh and full of water, like this one, that pressure at the base will be the highest. But as that water gets used up, the pressure decreases. This is similar to the way the voltage across a battery decreases over its lifetime as the stored energy gets used up. Since the output voltage of a battery is not really constant over its lifetime, the voltage that you see listed on a battery describes its nominal output voltage, which is the output voltage you should expect to see from the battery when it's about halfway discharged. If I measure the voltage of a brand new nine volt battery, I see that it's actually a little bit more than nine volts. And if I measure the voltage of an old used a battery,
>
> **[1:37](https://www.linkedin.com/learning/electronics-foundations-fundamentals/battery-capacity-14049949?u=76281980&t=97)** I see that the output voltage has fallen below nine volts. In addition to the nominal voltage batteries are also rated to have a certain capacity, which describes the amount of electrical charge a battery can provide at its rated voltage. Battery capacity is measured in units of amp-hours, which unfortunately is a common source of confusion. Amp-hours are different from amps because amp-hours represent an amount of electrons. Whereas amps represent the flow rate of electrons. According to the definition, a battery rated for one amp-hour is able to provide one amp of current for one hour at its rated voltage. So in theory, that same battery could be used to output two amps of current for only 1/2 an hour or to output 1/2 an amp of current for two hours and so on. In theory, remember that batteries are real world components with physical limitations. Based on that definition, that one amp-hour battery should be able to provide 60 amps of current for one minute. Is that realistic? Not at all. 60 amps is a lot of current and trying to do that, would likely overheat and damage the battery. Batteries can only provide up to a certain amount of current, just like a tube of toothpaste can only squirt out so much toothpaste at a time. If I gently squeeze on the tube,
>
> **[3:10](https://www.linkedin.com/learning/electronics-foundations-fundamentals/battery-capacity-14049949?u=76281980&t=190)** it'll slowly and smoothly, let the toothpaste out. But if I try to get the toothpaste out faster than the tube can handle by stomping on it, I may end up breaking the tube. This chart shows the capacity and typical current draw of four common sizes of household alkaline batteries. All four of these batteries have the same nominal output voltage of 1, 1/2 volts, but their capacities range from 1000 milliamp-hours for a triple A battery up to 13,000 milliamp-hours for a diesel battery, and their current output capabilities differ too. The larger diesel battery is designed for a typical current draw of 200 milliamps. Whereas the smaller triple A battery is only intended to drain at a rate of around 10 milliamps. If I design a circuit that draws 10 milliamp-hours, and I use the triple A battery to power it, I can calculate the expected life span of that battery by dividing its capacity by the discharge rate. So with a 1000 milliamp-hour capacity and discharging at a typical rate of 10 milliamps, I can expect my triple A battery to last around 100 hours. Now the triple A battery may be able to achieve higher current rates than its intended 10 milliamp output, but trying to draw more current than the battery is designed for, will reduce its efficiency and capacity. So you'll actually end up getting less output charge
>
> **[4:43](https://www.linkedin.com/learning/electronics-foundations-fundamentals/battery-capacity-14049949?u=76281980&t=283)** from the battery. That's why there's a wide range of batteries with different capabilities for different purposes, ranging from watch batteries, which are designed to output a small amount of current for a really, really long time to car batteries, which can output several hundred amps of current, but only for a very short time.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), just like (1)
> **Speakers:** - unfortunately (1)

#### [Batteries in series and parallel](https://www.linkedin.com/learning/electronics-foundations-fundamentals/batteries-in-series-and-parallel-14049948?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/batteries-in-series-and-parallel-14049948?u=76281980&t=0)** - [Instructor] When designing a battery-powered circuit that requires a higher voltage or more current than a single battery can provide, I can combine batteries together in series or parallel. Many portable electronic devices, like this television remote, use multiple batteries to meet their power needs. When batteries are connected in series, they're linked together such that the positive terminal of one battery is connected to the negative terminal of another. These two AA batteries each have a nominal output voltage of one and a half volts. The total voltage across batteries connected in series is equal to the sum of their individual voltages, so these two AAs have a combined voltage of three volts across them. I like to think of this as stacking voltages, because the voltage at the negative terminal of each battery gets referenced to the positive terminal of the battery before it. Each battery in series works to maintain the output voltage between its own individual terminals. When a series of batteries is connected to a circuit, the same current will flow through all of the batteries and it can be calculated using Ohm's Law with their combined voltage. If more batteries are added to the series to increase the total voltage, the current will increase too in accordance with Ohm's Law. However, adding more batteries to the series does not affect the discharge rate for each of those batteries.
>
> **[1:33](https://www.linkedin.com/learning/electronics-foundations-fundamentals/batteries-in-series-and-parallel-14049948?u=76281980&t=93)** In the combined series configuration, each of the batteries is providing part of the total charge to produce that combined output current. Therefore, the capacity and current-handling capabilities of the combined series of batteries is the same as each of the individual batteries. If I need to increase the capacity of my battery source, I can do so by connecting multiple batteries in parallel, such that the positive terminals are connected together and the negative terminals are connected together. Since all of the batteries are referenced to the same potential energy, the combined voltage of parallel batteries is the same as each of the individual batteries. When the batteries are connected to a circuit, they will provide current according to Ohm's Law. So in this example, two AA batteries are providing 1.5 milliamp to a one kiloohm load. Since the batteries are connected in parallel, they're working as a team to output that 1.5 milliamps of current, so each individual battery only has to provide half of the necessary electrons to create that current, which means the batteries will last twice as long as one battery would. The capacity of parallel batteries is equal to the sum of their individual capacities, so these two parallel AA batteries will have a capacity of 4800 milliamp hours. Adding more batteries to the parallel combination adds more sources of charge,
>
> **[3:05](https://www.linkedin.com/learning/electronics-foundations-fundamentals/batteries-in-series-and-parallel-14049948?u=76281980&t=185)** and the overall capacity increases accordingly. In addition to increasing the capacity, combining batteries in parallel can also increase the current output capability of the batteries. For example, if I tried to use a AA battery to power a load which had 20 ohms of resistance, that would require 75 milliamps of current. The AA battery is only designed for a typical current drain of 50 milliamps, so trying to output 75 milliamps would overload the battery and its output voltage would likely drop. But if I combine two AA batteries together in parallel, their current output capabilities add together, so they can output up to 100 milliamps, which is enough to power the 20 ohm load. Now, we're not just limited to combining batteries in series or parallel, it's also possible to combine batteries both in series and in parallel. For example, these six AA batteries are connected as three parallel sets of two series batteries. The output voltage of this combination will be three volts, which is the sum of the individual voltages of the two batteries in each stack. The output capacity will be 7200 milliamp hours, which is the sum of the effective capacities of the three parallel sets, and the combined output capability of the batteries will be 150 milliamps, which is the sum of the individual output capability of each of the parallel stacks.
>
> **[4:40](https://www.linkedin.com/learning/electronics-foundations-fundamentals/batteries-in-series-and-parallel-14049948?u=76281980&t=280)** When combining multiple batteries in series and parallel, it's important to always use the same type of battery, because batteries with different chemical compositions may discharge at different rates, and that can cause problems. It's also important to use batteries that have the same freshness, because a battery's output voltage changes over its lifetime. Mixing and matching old and new batteries leads to problems, especially when combined in parallel.

> [!info]- Semantic Content
>
> **Tools:** terminal (4)
> **Versions:** 1.5 (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Grounded vs. floating power sources](https://www.linkedin.com/learning/electronics-foundations-fundamentals/grounded-vs-floating-power-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/grounded-vs-floating-power-sources?u=76281980&t=0)** - [Instructor] Many electrical circuits, like the wiring in your home, are electrically connected to the planet Earth, the ground beneath your feet, and millions of other electric circuits all around the world are using the electric potential energy stored in the Earth as a common reference point for their own voltages as well, and that reference point is appropriately referred to as Earth ground. Circuits connected to a grounded power source, like an electric wall outlet, will be electrically tied down and referenced to the Earth, which is abbreviated GND. Power sources that are not electrically connected to the Earth, like a battery, are referred to as floating sources. The voltages of a floating circuit are referenced to its own common point, which is abbreviated as COM. However, unless two floating circuits are electrically tied together, their common points are not necessarily the same or tied to Earth ground. Consider these grounded in floating power sources. The output of a five-volt AC to DC wall adapter consists of two lines, a neutral line, which is referenced to ground, and a power line, which is five volts higher than the neutral line. On a AA battery, the output at the positive terminal is 1.5 volts higher than the negative terminal, which I've designated as its common reference point. Since the battery is a floating power source and it's not electrically tied to ground, it might gain or lose some electrical charge to the ambient environment around it
>
> **[1:35](https://www.linkedin.com/learning/electronics-foundations-fundamentals/grounded-vs-floating-power-sources?u=76281980&t=95)** and that'll cause its level of potential energy to drift relative to Earth ground. Because of that drifting, I don't necessarily know how the potential energy at the COM terminal on a floating battery relates to Earth ground. The batteries common reference might have a greater potential than Earth ground, or a lower potential, or the ground and the common could just happen to be the same. In addition to being different than Earth ground, the reference point for two floating sources that are not connected to each other will also likely be different. For example, the potential energy at the negative terminals for these two batteries will likely be different since they're not connected to each other. One battery might have more static charge built up in it than the other. However, since these two batteries are floating power sources, I can safely attach them to each other. The electrons in them will shift around so that the negative terminal of the top battery is at the same potential as the positive terminal of the bottom battery. Now they share a common reference point and are floating together. If I connected those batteries to the output of my grounded wall adapter, now they're effectively grounded because they're electrically connected to Earth. I use this example to demonstrate a concept, but I don't actually recommend combining grounded and floating power sources like this. If you need a higher voltage from a wall adapter, just find a different adapter. More importantly, do not connect wall adapters to each other. It may be tempting
>
> **[3:07](https://www.linkedin.com/learning/electronics-foundations-fundamentals/grounded-vs-floating-power-sources?u=76281980&t=187)** to connect two five-volt adapters together to try creating a 10-volt source, but that will not work. Connecting the five-volt line from one adapter to the ground terminal of another is basically the same as shorting that adapter to its own ground line since both of those adapters are referenced to the Earth. That short circuit will overload and destroy the adapter and potentially damage anything connected to it.

> [!info]- Semantic Content
>
> **Tools:** terminal (6)
> **Env Vars:** com (2), gnd (1)
> **CLI Commands:** find (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Power a light bulb](https://www.linkedin.com/learning/electronics-foundations-fundamentals/challenge-power-a-light-bulb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/challenge-power-a-light-bulb?u=76281980&t=0)** - [Instructor] It's time for another challenge. This time, I want you to figure out a combination of batteries in series and/or parallel to provide power for this little motor, which I've attached to a wheel to give my lazy hamster a workout. This particular motor requires a supply of six volts to operate. And based on my hamster's weight and laziness, I estimate that it will require 150 milliamps of current to keep him running at a healthy speed. Finally, I want to make sure he gets plenty of exercise before I need to change the batteries, so it should be able to run for at least two days, which is 48 hours, on a single set of batteries. To limit the scope of this challenge, you have five types of common household alkaline batteries to choose from, nine-volt, AA, AAA, C, and D cell. These five types of batteries have the nominal voltages, capacities, and typical drain currents listed in this chart. And you can use as many of each type of battery as you need. I've included a copy of this chart in the exercise files that you can use as reference. Your goal is to figure out a series and/or parallel combination of these batteries that will meet the power requirements for the motor. There are multiple correct answers to this challenge, so when you're done, be sure to watch my solution video,
>
> **[1:32](https://www.linkedin.com/learning/electronics-foundations-fundamentals/challenge-power-a-light-bulb?u=76281980&t=92)** to see how I approached solving the problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** aaa (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Power a light bulb](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-power-a-light-bulb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-power-a-light-bulb?u=76281980&t=0)** (offbeat uplifting music)
>
> **[0:06](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-power-a-light-bulb?u=76281980&t=6)** - [Instructor] All right, this was my thought process for solving the challenge. I began by considering the first requirement, which was that the motor required six volts to operate. Looking at the five types of batteries I could choose from, I notice that the voltage of a nine volt battery would be too high, so I crossed that off of my list. That left me with four options to choose from, AA, AAA, C, and D batteries, which all have the same nominal voltage of one and a half volts. To reach the required six volts for the motor, I'll need to combine several of these batteries in series so that their voltages sum together. To figure out how many batteries I would need in the series, I divided the total voltage I wanted to achieve by the individual voltage of each battery. Six volts divided by 1.5 volts shows me that I'll need to combine four batteries in series to achieve the required six volt output. Next, I considered the requirement that the motor needs 150 milliamps of current. Keeping in mind that my combination of four batteries in series will have the same capacity and current delivering capability as each of the individual batteries, I saw that the D cell battery was the only battery option whose typical current drain exceeded the required 150 milliamps. So I chose to use it. If I had tried to draw 150 milliamps from any of the other smaller batteries, that could've overloaded them, which might negatively impact their performance.
>
> **[1:39](https://www.linkedin.com/learning/electronics-foundations-fundamentals/solution-power-a-light-bulb?u=76281980&t=99)** After choosing to use four D cell batteries, I checked to see if they would meet the final requirement of being able to run for 48 hours. I divided the current capacity of the D battery, which is 13,000 milliamp hours by the expended current draw of the motor, 150 milliamps. This showed that the motor would run for over 80 hours, which is way more than the required 48. So, by connecting four D cell batteries in series, I met the challenge requirement, and gave my little hamster an extra long workout. But, this solution is not the only possible solution to the problem. Using the same math and thought process, I could've also accomplished the goal using C batteries. But that would've required a second stack of four batteries placed in parallel with the first stack to support the required current. If I had used AA batteries, I would've needed 12 batteries in three parallel sets of four. And if I had used AAA batteries, that would have required 60 batteries, which is getting ridiculous. As you can see, there are often multiple ways to solve a problem when working with [Electronics](../../Skills/Software%20Development/Electronics.md). And it's generally a good idea to go with the simplest solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (1)
> **Env Vars:** aaa (2)
> **Versions:** 1.5 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (offbeat uplifting music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue your electronics journey](https://www.linkedin.com/learning/electronics-foundations-fundamentals/continue-your-electronics-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/electronics-foundations-fundamentals/continue-your-electronics-journey?u=76281980&t=0)** - Thanks for watching this course. I hope that you've enjoyed it and that it's given you a solid foundation to understand electricity. As you continue to learn about [Electronics](../../Skills/Software%20Development/Electronics.md), I encourage you to keep the fundamental concepts from this course in mind. As the circuits you build grow in size and complexity, remember that at the end of the day, you're really just moving around a bunch of electrons, using voltages to push them and circuit components to lead them where they need to be. With that perspective, you'll have a better understanding of how your circuits work and what to do to fix them when they don't. Good luck, and may your electrons always go to the right place at the right time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Electronics](../../Skills/Software%20Development/Electronics.md) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - thanks (1)


## Instructor

- [Barron Stone](../../Instructors/Software%20Development/Barron%20Stone.md)

## Resources

- Exercise files available

## Skills Covered

- Electronics

## Path Context

### In [Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)
← [Learning Arduino Foundations](Learning%20Arduino%20Foundations.md) | **2 of 11** | [Electronics Foundations- Basic Circuits](Electronics%20Foundations-%20Basic%20Circuits.md) →

## Appears In

- [Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Electronics Foundations- Basic Circuits](Electronics%20Foundations-%20Basic%20Circuits.md) — Electronics

---

[↑ Back to top](#)