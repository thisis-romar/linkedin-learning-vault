---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-arduino-interfacing-with-hardware
url: "https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware"
duration_minutes: 100
duration: 1h 40m
level: Intermediate
updated: 4/26/2024
learners: 229949
skills:
  - Arduino
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQElLaw9B93Uvw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669851419?e=2147483647&amp;v=beta&amp;t=EPO1hmQqc6xKpVhB-XitnkQtTJ5GsKUiiliU9h81bVY"
linkedin_topic: Hardware
learning_paths:
  - '[Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)'
prev_courses:
  - '[Electronics Foundations- Basic Circuits](Electronics%20Foundations-%20Basic%20Circuits.md)'
next_courses:
  - '[Electronics Foundations- Semiconductor Devices](Electronics%20Foundations-%20Semiconductor%20Devices.md)'
path_nav: '[{"path":"Become an Arduino Developer","position":4,"total":11,"prev":"Electronics Foundations- Basic Circuits","next":"Electronics Foundations- Semiconductor Devices"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - topic/network-and-system-administration
  - topic/software-development
  - skill/arduino
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Hardware/Learning%20Arduino-%20Interfacing%20with%20Hardware.md)

![Learning Arduino: Interfacing with Hardware](https://media.licdn.com/dms/image/v2/C4E0DAQElLaw9B93Uvw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669851419?e=2147483647&amp;v=beta&amp;t=EPO1hmQqc6xKpVhB-XitnkQtTJ5GsKUiiliU9h81bVY)

# Learning Arduino: Interfacing with Hardware

> Arduino enables programmers to experiment with hardware and build interactive, digital projects connected to lights, sensors, and motors. This training course introduces you to the Arduino microcontroller, showing how to interface with three common components: an LCD screen, a seven-segment LED, and a keypad. Instructor Zara Khalil shows how to wire and program the interfaces and perform basic tas

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware) | 1h 40m | Intermediate | 230K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Open up your digital world with Arduino](#open-up-your-digital-world-with-arduino)
  - [What you should know before watching](#what-you-should-know-before-watching)
  - [The devices used](#the-devices-used)
- [**1. Interface with an LCD**](#1-interface-with-an-lcd) (8 videos)
  - [Introduction to the liquid crystal display (LCD)](#introduction-to-the-liquid-crystal-display-lcd)
  - [Understanding HD4470 controller](#understanding-hd4470-controller)
  - [The LCD interface](#the-lcd-interface)
  - [Wire up the LCD](#wire-up-the-lcd)
  - [Coding the LCD interface](#coding-the-lcd-interface)
  - [Optional review: Understanding "for" loops](#optional-review-understanding-for-loops)
  - [Optional review: Understanding arrays](#optional-review-understanding-arrays)
  - [Displaying random numbers and scrolling](#displaying-random-numbers-and-scrolling)
- [**2. Interface with a 7-Segment LED Directly**](#2-interface-with-a-7-segment-led-directly) (9 videos)
  - [Overview of the 7-segment LED](#overview-of-the-7-segment-led)
  - [The 7-segment LED component](#the-7-segment-led-component)
  - [7-segment LED display types](#7-segment-led-display-types)
  - [Checking a 7-segment LED type](#checking-a-7-segment-led-type)
  - [Wiring up the 7-segment LED](#wiring-up-the-7-segment-led)
  - [Cycle through each LED directly](#cycle-through-each-led-directly)
  - [Cycle through LEDs with a for loop](#cycle-through-leds-with-a-for-loop)
  - [Understanding the 7-segment LED truth table](#understanding-the-7-segment-led-truth-table)
  - [Coding 7-segment display showing numbers](#coding-7-segment-display-showing-numbers)
- [**3. Interface with a 7-Segment LED Using a Shift Register**](#3-interface-with-a-7-segment-led-using-a-shift-register) (7 videos)
  - [Understanding the shift register](#understanding-the-shift-register)
  - [MC74HC595A shift register overview](#mc74hc595a-shift-register-overview)
  - [Wire up the input and clock signals](#wire-up-the-input-and-clock-signals)
  - [Wire up the signals for VCC and GND](#wire-up-the-signals-for-vcc-and-gnd)
  - [Wire up the 7-segment LED](#wire-up-the-7-segment-led)
  - [Initializing pins for the shift register](#initializing-pins-for-the-shift-register)
  - [The shiftOut command](#the-shiftout-command)
- [**4. Interface with a Keypad**](#4-interface-with-a-keypad) (10 videos)
  - [Introduction to the keypad interface](#introduction-to-the-keypad-interface)
  - [Wiring up the keypad](#wiring-up-the-keypad)
  - [Optional review: IF statement](#optional-review-if-statement)
  - [Optional review: The switch...case statement](#optional-review-the-switchcase-statement)
  - [Understanding two-dimensional arrays](#understanding-two-dimensional-arrays)
  - [Setup the keypad library](#setup-the-keypad-library)
  - [HelloKeypad](#hellokeypad)
  - [Using the keypad with LEDs](#using-the-keypad-with-leds)
  - [Combine the keypad and 7-segment LED](#combine-the-keypad-and-7-segment-led)
  - [Combine them all: LCD + keypad + LED](#combine-them-all-lcd-keypad-led)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Open up your digital world with Arduino](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/open-up-your-digital-world-with-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/open-up-your-digital-world-with-arduino?u=76281980&t=0)** - When you learn about [Arduino](../../Skills/Software%20Development/Arduino.md), 2 you may want to bring your Arduino projects 3 to the next level by connecting different [Hardware](../../Topics/Hardware.md), 4 displays, and interactive interfaces. 5 In this course, I'll show you how 6 to connect the Arduino board 7 to three common hardware components, 8 LCD screen, seven-segment LED, and a keypad. 9 I'll explore each component separately 10 and go through the wiring and the coding 11 to get them working, like displaying randomized numbers, 12 looping through an LED pattern, 13 and accepting input from the keypad. 14 At the end, we'll combine the three components together, 15 where we apply all the knowledge learned within the course. 16 I'm Zara Khalil, I am an engineering instructor, 17 and I enjoy teaching courses covering engineering topics, 18 so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3), [Hardware](../../Topics/Hardware.md) (2)
> **Env Vars:** led (2), lcd (1)
> **Speakers:** - when (1)

#### [What you should know before watching](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=0)** - [Instructor] Before you start this course, you should be a little familiar with how [Arduino](../../Skills/Software%20Development/Arduino.md) works, using the digital I/O pins, and the basics commands, like, for example, programming a simple LED output. I'm going to use an Arduino MEGA 2560 board, but you can use any other board that you have. You just need to make sure to select it when programming. If you need to know on how to do so, you can check the troubleshooting video in the Learning Arduino course. You can check out the Learning Arduino course in the library to get you prepared for this course if needed. I'll cover the wiring needed for this course, but if you'd like a refresher on [Hardware](../../Topics/Hardware.md) components throughout this course, I would recommend referring to the [Electronics Foundations- Fundamentals](Electronics%20Foundations-%20Fundamentals.md). During this course, I'll cover some [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md) like for loops, if statements, and arrays. I'll go briefly through each one as we do the coding. So, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (4), [Hardware](../../Topics/Hardware.md) (1), [Electronics](../../Skills/Software%20Development/Electronics.md) (1), [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md) (1)
> **Env Vars:** led (1), mega (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [The devices used](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=0)** - [Instructor] The components we are going to use in this course are a Common Anode 7 Segment LED, a Shift Register. 16x2 LCD. Potentiometer. Keypad. Resistors, and you are going to use six of them. And the value is 330. Connecting wires. And finally, the [Arduino](../../Skills/Software%20Development/Arduino.md) Board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** led (1), lcd (1)
> **Speakers:** - [instructor] (1)


### 1. Interface with an LCD

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the liquid crystal display (LCD)](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=0)** - [Instructor] LCD stands for liquid-crystal display. LCD is one of the components that can be used with [Arduino](../../Skills/Software%20Development/Arduino.md) board to show text or graphics. The principle behind LCD is to energize a series of crystals to appear either opaque or transparent against a lighted background. The two major types are alphanumeric LCD and graphical LCD. The most common alphanumeric LCD device is 16 by two LCD. It can display two lines of 16 characters. A 16 by two LCD simply means having two rows and 16 columns, so basically two lines to show the text. And the same thing applies if you have any other type. Eight by two. Five by two. The first one is reserved for columns and the second one is for rows. The second common type is graphical LCD. The graphical LCD device use a single larger grid of individual lights to display information, instead of a separate grid for each character. The most common graphical layout is 128 by 64 LCD. The benefit of using that layout is that you can display any character at any resolution you prefer, and you're not only limited to the five by eight resolution in the alphanumeric device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** lcd (11)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [Understanding HD4470 controller](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=0)** - [Instructor] So now let's try to understand how LCD works. Most LCD's that are compatible with [Arduino](../../Skills/Software%20Development/Arduino.md) uses the HD Controller to manage the LCD. The HD44780, is referred to as dot matrix, liquid crystal display controller and driver. So, each dot matrix inside the LCD has five columns, and eight rows, as you can see in the picture. Each of the dot matrix within the 16 characters has a five by eight matrix. This is used to show letters and numbers when using the LCD. So, if letter A is showing in the first dot matrix then these are the dots that are highlighted. Most LCD are supported by this type of controller and it shows up to 27 characters for each line. Now, it depends on the LCD type. It shows a certain number of columns. So, if we're using an 8 x 2 LCD then we can only see eight columns out of the 27 columns. If we're using 16 x 2 then we only see 16 out of 27. Now, if we wanted to display a sentence, we need to know how many characters are in it by counting the number of letters. So, if the sentence is Learning Arduino, Learning Arduino has 15 letters and one space. If we're using 16 x 2 LCD then we can see the whole sentence, but if we're using 8 x 2, we can only see half of it.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=92)** Even though all the characters are stored in the memory because we can only see eight columns. In this case, we can use scroll left or scroll right functions within the software to scroll through the whole sentence within the same row. If you wanted to hear more about how the controller works, you can check the data sheet that is provided by HITACHI in order to understand how this controller works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3)
> **Env Vars:** lcd (9), hd44780 (1), hitachi (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [The LCD interface](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=0)** - [Narrator] Now let's take a look at how to interface the 16x2 LCD with [Arduino](../../Skills/Software%20Development/Arduino.md) board. So as mentioned previously, the HD controller chip uses a series of 16 interface pins. Now, let's take a closer look at each of the pins. The first two pins are VSS, which is the ground, you need to connect this to Arduino, in order to keep a common ground. The second pin is VDD, which is the source power. And you are going to connect it, to the five volt Arduino board. So pin one and pin two are the power supply pins. Pin three is the Display Contrast pin. You are going to connect it to a potentiometer. This pin, is used for controlling the brightness of the screen. This is accomplished by adjusting the power supply voltage to the LCD. Pin four, which is RS, that refers to Register Select pin. This controls where in the the LCD memory you're writing the data to. And we have two modes for it, Low and High. So for this specific LCD, we send a single Low to send commands and instruction, and High, to send data. Pin five is Read and Write. Read and Write is used to specify if we are reading from the LCD, or if we're writing to the LCD. And it has two modes, Low if we write, and High, if we are reading from the LCD. Since we are only going to write to the LCD
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=95)** for our demonstration, we will connect this to ground in order to keep it low. Pin six is the Enable pin. This pin enables the writing operation to the register. Now pins from pin seven all the way to pin fourteen are the digital pins. So, a total of eight pins. You can use all the eight pins for the eight-bit mode if you're interested in showing ASCII characters, or use half of them as a four-bit mode if you're interested only in showing numbers and letters. The states of these pins, either high or low, are the bits that you are writing to the register indicated by the Register Select pin. Finally, the last two pins are for the LED backlight. Pin number 15 is connected to an anode, so we are going to connect it to the five volt. And pin number 16 is connected to ground, and we are going to use a resistor, in order to connect it to ground. We've included a handout with exercise files that has a summary of the LCD pin description, so you can go and check that out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3)
> **Env Vars:** lcd (9), vss (1), vdd (1), ascii (1), led (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** refers to (1)
> **Speakers:** - [narrator] (1)

#### [Wire up the LCD](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=0)** - [Narrator] I'm going to do the wiring of the LCD, according to this table. So here is the LCD pin numbers and the corresponding [Arduino](../../Skills/Software%20Development/Arduino.md) pins that I'm going to connect them too. So let's go ahead and do the wiring for each pin. The first one is the ground and the vcc. Okay so I'm going to use this as a ground and the second one as the voltage supply. So the very first one is going to be connected to ground. Now the second pin is going to voltage supply.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=48)** So now the third pin is going to be connected to potentiometer. There are different types of potentiometers. However, the wiring is acquired similar. You can see the left pin is the ground. The middle one is going to be connected to a zero which is pin three in the LCD. And the right pin is for the five bolt. Here are the types that you could use with the LCD. So for our example, I'm going to use the blue one. Or it's I'm going to go ahead and place it on the beardboard. Now I'm going to connect the third pin to the middle pin of the potentiometer.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=102)** Alright so I'm going to continue wiring the potentiometer. So the left side goes to ground.
>
> **[1:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=114)** And the right side goes to five volts.
>
> **[2:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=127)** So now pin number four in the LCD, goes to pin 12 in the Arduino board.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=144)** So pin five since we're doing only writing to the LCD, we need to keep it low. So we are going to connect it to ground.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=161)** So now pin six in the LCD is going pin 11 in the Arduino board.
>
> **[2:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=179)** And now for the additional pins we are going to use four pins. So pin 11 in the LCD is connected to pin five in the Arduino board, 12 to four, 13 to three, and finally 14 to two. So this is been number 14 that's going to pin two here.
>
> **[3:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=205)** Then, 13 is going to pin three.
>
> **[3:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=215)** 12 is going to four.
>
> **[3:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=225)** And then finally, 11 is going to five.
>
> **[4:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=240)** Now the final two pins are pin 15 and 16. So for pin number 15 we are going to connect that to the five volts and I'm going to use a resistor value in order to do so. This resistor is 330 ohm. That's the current limiting resistor, so you could use any values between 200 and 500. So I'm going to go ahead and connect that to the five volts here. And finally the last pin which is pin number 16 that goes to ground.
>
> **[4:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=282)** So the last step is connecting the breadboard to the Arduino board. So the ground goes to ground in the Arduino board, and the positive goes to the five volts. Alright so I've done the wiring for the LCD, so lets go ahead and do the coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (6)
> **Env Vars:** lcd (9)
> **Speakers:** - [narrator] (1)

#### [Coding the LCD interface](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=0)** - [Narrator] Alright, so when we do the programming for the LCD, the very first thing that we need to do is to include the library of the LCD. So you can do so by going to Sketch, include Library and look for Liquid Crystal. So this making sure that we have the library for LCD. Alright, so the first command with programming the LCD is a Liquid Crystal command. And Liquid Crystal Command basically does is a way for the program to identify the pins that we connected the LCD to. So you can check the website for the different syntax and since we're using only four bits, so we are going to use the very first syntax. So back in the coding, so LiquidCrystal, and then I'll name it as LCD, and here, the first one is the rs, second one is enable, then d four, d five, d six, and then d seven. So I need to identify what are the pins so I can do that before the command, so here is a constant integer, rs is connected to pin 12, enable is connected to 11 and then d four, d five, d five is connected to four, d six is connected to three,
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=94)** and then finally d seven is connected to two. So there are two methods if you wanna use this, so you can either identify the pins and as you can see in line three or you can actually write down the numbers within the LiquidCrystal. So, for example, if you want to do it, LiquidCrystal LCD and then you just identify the pins over here. You just need to be careful that when you do that, you need to keep the same order, otherwise the LCD will not be able to show the text that you're showing. So I'm going to keep the previous one for our demonstration purposes. Now in the void setup, we need to use another command that's called LCD begin. This command is actually identifying how many columns and how many rows. So depending on the type that you're using, the one we're using is 16 by two, so the very first one is for the column, the second one is for row. For the LCD type that we're using, we have two rows and 16 column. The way we number them is a zero for the first row and one for the second row, and the numbers for the column goes from zero to 15. So if you want to show a sentence and you want to start from the first row then you need to set the cursor to be in a position zero, zero. The same thing if you wanna show it in the second row then the set cursor to be in a zero, one. So the first one is for the column and the second is for the rows. So for our program I'm going to set the cursor to LCD,
>
> **[3:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=193)** set cursor to be in the first column and the first row. So zero zero for our example. Now the other command in order to show the sentence or show anything on this screen, we are going to use an LCD print. And then I place any sentence I would like to see it on the LCD. So here I'm going to use [Arduino](../../Skills/Software%20Development/Arduino.md) is fun. Okay, we use a quotation mark when we want to place the sentence. And then I'm going to add a delay at the end, just to make things a little bit clear. Alright, so this is the code for the LCD, so go ahead and upload the program. Alright so you can see that the sentence is showing in the first row. Alright so I'm going to give it a try, to see it in the second row, so the only thing you need to change is the set cursor code. So instead of having a zero zero, I'll have a zero one and then I'll upload the program again to see that. Okay so we can see that the sentence is showing in the second row. Alright so done the first coding for the LCD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (5), [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** lcd (15)
> **Definitions:** is a  (4)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Optional review: Understanding "for" loops](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=0)** - [Instructor] In our LCD example we are going to use a for loop. So, in case it has been a while since you used a for loop, I'm going to go through that format in order to refresh your memory about it. So for loop starts with for and we have initialization.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=20)** And the initialization is basically, where do we start the for loop and then, we have the condition, and in the condition we specify how many times we want the for loop to get executed. And then finally, the way we do the increments. And then we add whatever the code we want inside the two brackets. So lets take an example where we use a simple for loop, so initialization, I'm going to use integer value of counter, and remember in initialization I need to specify where I'm starting so in our example I'm going to start from zero. So the initial value is zero. So now according to how many times you want the loop to execute, you change the condition accordingly. So for example, if I want the counter to execute 10 times and in the condition I specify that the counter is less than 10, remember that we started from zero, so zero all the way to nine which is less that 10. And then finally is the way we increment, so if we're using the very simple one is that counter and then we add plus plus so with an adrenal you either write counter plus plus or if you want to write it counter equals plus one, this indicating that the counter is incremented by one.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=113)** So I'm going to use a serial monitor just to show how this program works. Again, remember that when we use a serial monitor we need to specify the communication rate.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=130)** And in order to show the values in the serial monitor we're going to use a serial print in. And I'm going to use a serial print in, a new line and ending with one ln. And the value that I want to see is the counter. So lets hit on the program in order to see how this program works. So I notice here that the values goes from zero, which is the initialization all the way, according to the condition, to nine. Because in the condition we specify that the counter should be less than 10 then 10 is not included. So now, according to the number of outputs of number of increments, I can specify the condition So for example, if I want to show all the way to 20, then I change the condition, again you download the program And this shows all the way to 19. I'll try to show you what happens when we change the increment value, so if we go with two this will deduce the number of outputs for the serial monitor. To five values, so depending on the logic that you wanted your program to run, you can either change the condition or the increments.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (5)
> **Analogies:** for example (2)
> **Env Vars:** lcd (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Optional review: Understanding arrays](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=0)** - So for the next example using the LCD, I'm going to use an Array in order to demonstrate how to populate the data. If you're familiar with arrays, feel free to skip this video, but if you want to refresh your memory about what an array is, I'm going to go through the basics. An array stores multiple data values for the same data type in a block of memory, allowing you to access the elements within the array by referring to the variable name. So you can think about it as a drawer with a certain number of sections, and inside each section is an array element. The drawer has a name, which is the array name. So now let's go through how to declare an array. The way to declare an array is by specifying the type of the element, which can be double, integer, whatever the type is, and then specifying the array name, and finally the array size. The array size should be an integer above zero. So this is an example that declares an array variable called myArray that stores up to 10 integer values. Initializing an array is by assigning the element depending on the array size, so basically identifying where are the elements within this array? So here's an example of an array that stores up to five values, five elements. The number of elements within the array can not be larger than the size. So here, since we identify the array to be an integer, then the elements within the array are Integer type.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=95)** The way the variables, or elements are numbered by indicating an array index. The first element has an array index of zero, the second one has an array index of one, and so on. So the array element is different than the array index. So if you'd like to learn more about the array and how to access the array, you can check the website that's provided by [Arduino](../../Skills/Software%20Development/Arduino.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Definitions:** is an  (2)
> **Code Identifiers:** myarray (1)
> **Env Vars:** lcd (1)
> **Speakers:** - so (1)

#### [Displaying random numbers and scrolling](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=0)** - [Instructor] Alright, so I've covered arrays and I've covered a for loop. So let's try and have some fun in trying to implement a for loop where we generate a random number and try to display that in the lcd. So I want you to go ahead and open the file 0108 lcd starter project. And in the starter project, I've kinda included things that we've covered in the previous example. So in line four, we initialize the pins and line six is the lcd function. So let's start by declaring an array type integer that has 27 values. So int and I'll name it as a random number array and it takes up to 27 values. So I've chose 27 because it's a number of the character that we can see in each line of the lcd type that we're using. Alright so we've initialized the array so let's go and start coding. So the very first thing that I wanna to specify is where I wanna show the numbers. Do I wanna show them in the first line or the second line? So I'll use the first one for simplicity.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=75)** Alright, so for the for loop I'll have an int value i starting from zero. Now i is less than 27 because we want to show the characters from zero to 27. And then i is incrementing by one. Alright, so in order to generate a random number, the way we do that is random and then I specify that I want the numbers to be from zero to nine. And I'm gonna take this and save it an array. So the array type that we specified is random number array and I want that to be selected any time I use the for loop. Okay, so this line basically does a random number gets generated that's between zero and nine and it gets saved in an array index. Alright, so I'll take that and try to see it on the screen. So lcd print. And I wanna print the random number that we just got.
>
> **[2:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=152)** Okay, I'm gonna add another code just to make it a little bit clean when we see that on the screen. So I'll add a space between the numbers as we go through it. And I'll add a delay of 250. So go ahead and upload the program and see how this code behaves. So as you can see now, random numbers are getting generated starting from the first row and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them are showing in the second row. Notice here that we can only see up to 16 characters. One of the ways if we want to see all the numbers that are in the 27 characters is using a scroll display function. So let's go back in the code and add this right in here where we have an lcd scroll display and we have an option of either scroll to the left or right. So I'm gonna use left, for example. So the code that you can see in line 22, so it scrolls through the 27 characters that we have in each line of the lcd that we're using. So go ahead and upload the program. Alright, so now we can see that we are scrolling through the characters that we have in all the 27 spots in each line. Okay, so we've used the for loop in order to populate the array with random numbers. And we used lcd print in order to see them on the lcd screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Exercise Files:** starter project (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Interface with a 7-Segment LED Directly

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of the 7-segment LED](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980&t=0)** - [Instructor] Now, in this part of the course, I'm going to use the seven-segment LED with [Arduino](../../Skills/Software%20Development/Arduino.md). I'll be doing this in three parts. First, just introducing the seven-segment LED and connecting it to Arduino in order to see how it works. Second, using the software in order to show numbers and letters by understanding the truth table of the seven-segment LED. Finally, we're going to use the seven-segment LED with the shift register. We'll be covering some [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md) like loops and arrays and when we are using the shift register.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (2), [Programming Concepts](../../Skills/Software%20Development/Programming%20Concepts.md) (1)
> **Env Vars:** led (4)
> **Speakers:** - [instructor] (1)

#### [The 7-segment LED component](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=0)** - [Woman] The 7-segment LED consists of LEDs, light-emitting diodes, that are arranged in a rectangular fashion. Each LED within the 7-segment display is an individual LED that has a cathode and anode side. An additional LED is sometimes used to refer to the decimal point. Each LED has a letter that we refer to when programming. We use a combination of LEDs to show the different numbers or letters. So, if you want to show zero, we would turn on the LEDS shown on the left. And if you want to show one, we would turn on the LEDs shown on the right. And the same thing applies to any other number or letter. This is the layout of the 7-segment LED that we are going to use in this section. The top and bottom are the pin numbers, and each pin is connected to a specific LED. So pin 7, for example, is connected to LED a. And the cc pin is referring to the common pin, so it's a common cathode or a common anode, depending on the type. There are different types of 7-segment LEDs, and each has its own layout. The LED letters are in the same places in each one, but the difference is in the pin layouts.

> [!info]- Semantic Content
>
> **Env Vars:** led (9), leds (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [woman] (1)

#### [7-segment LED display types](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=0)** - [Narrator] There are two common types of 7-segment LED, a common cathode and a common anode. Let's examine the difference between each type. Remember that each LED within the 7-segment is an individual LED that has a cathode and anode side. A common anode type simply means having a common power supply VCC for the 7-segment LED, as you can see. This means that all LEDs inside the 7-segment display share the same voltage source and have a common anode side. So for the common pin, this is connected to the voltage supply according to the voltage limitation for each 7-segment LED component. Since all the anode connections of the LEDs are joined together to the VCC, this means their regular state is one high. And the individual LEDs are illuminated by connecting the individual cathode side to a low signal. So we send low in order to turn each LED on. For the common cathode, all LEDs have a common ground, a common cathode side. Knowing the differences between the two types helps in wiring as well as in coding. So for the common cathode, the common pin is connected to ground. And again, since all the cathode connections of the LEDs are joined together to ground, which means their logic is zero low.
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=93)** So in order to illuminate the individual LEDs is by connecting the individual anode terminal to a high signal.

> [!info]- Semantic Content
>
> **Env Vars:** led (6), vcc (2)
> **Definitions:** is an  (1), means that (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### [Checking a 7-segment LED type](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=0)** - [Narrator] The 7-segment LED, they come in in different size and different shapes. One of the ways in order to know if it's a common cathode or common anode is checking the data sheet of the part number. So you can check the part number for each 7-segment LED. Another method, if you don't have access to the datasheet, is using the multimeter. So let's go ahead and try to use the multimeter to test the 7-segment LED. So I'm going to use this component. So when using the multimeter, the very first thing that you need to do is using the com probe of the multimeter, and use that in the middle pin, which is the common pin of the 7-segment LED. The other thing is that you need to make sure that you have the multimeter to the LED sign over here. And then check it on that it has the LED sign over here. So once you place the common pin, use the other probe of the multimeter in order to turn on each of the LEDs. So I'm going to go ahead and try to see if the LED turn on. So if you can see that once I place the anode side, the individual LED turn on. And you can do the same thing if you want to test for a common anode. The only thing that you need to do is you need to place, instead of having the ground in here, you use the anode and test for the other port.

> [!info]- Semantic Content
>
> **Env Vars:** led (8)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Wiring up the 7-segment LED](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=0)** - [Narrator] So now in this section, we're going to go through the wiring of the seven segment LED to the [Arduino](../../Skills/Software%20Development/Arduino.md) board. Since the seven segment LED has seven LEDs so we need the resistor when we connect the seven segment LED to Arduino. Again, the only difference between having a common anode and a common cathode is that the common pin within the seven segment LED is connected to five volt if we're using a common anode, and is connected to ground if we're using a common cathode. We're going to use a common anode for our example, so let's see how we do the wiring. So for the wiring part we are going to follow the table that's shown in the screen. So for example, for the seven segment LED pin a, which is pin seven, is going to be connected to pin two, to the digital IO in the Arduino board. Pin b, which is pin six in the seven segment LED, is going to be connected to pin three, and so on for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of them. So let's go ahead and do the wiring for the seven segment. So I've included a picture of the wiring diagram in the exercise file if you wanna check it out for the complete wiring of the seven segment LED to the Arduino board. So the very first thing that I usually try to do is I try to connect the common pins. The way to know the numbers is that, using the dot in here, So this is the bottom pins and this is the top one. Let's go ahead and start to do the common pin. So this is the middle that goes to the five volt. The same thing with the top.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=104)** So now I'm going to use the resistor in order to connect pin a in pin seven in the seven segment LED. So one side of the resistor goes to the pin a. The other side goes anywhere in the breadboard. And I'm using a 270 resistor for the seven segment LED. You can use any other resistor, the common ones is a 330 ohm, but you can use any values between 200 and 500 ohm. Alright, so we got the resistor, now we connect that to pin 2 in the Arduino board.
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=146)** This way. So now we are going to use the same thing for the seven segment pin six which is for the b LED.
>
> **[2:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=163)** So one side of the resistor goes to the pin six in the seven segment LED and the other side goes anywhere in the breadboard but make sure that it is in a different column than the previous one. So again, the other side is connected to pin three in the Arduino board.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=192)** And you do the same for the rest of the LEDs. So pin four, from the seven segment LED goes to pin four within the Arduino.
>
> **[3:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=215)** So why don't you go ahead and try to connect the other pins to the Arduino board. I'm going to try to finish the wiring connections so you can check that out once you're done. So now we're done the wiring for the seven segment LED, and note here since I'm using the bottom side and the top side of the breadboards, I need to give a connection between the bottom and top, so we do the connection this way.
>
> **[4:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=251)** And now the last part left is connecting the VCC to the five volt within the Arduino board.
>
> **[4:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=265)** So here we have a five volt, gets into the breadboard, and we have a connection to the common anode, from the top and bottom, and it's already connected using this way. Alright, so the last part is connecting the Arduino board to the computer, and let's start programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (10), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Env Vars:** led (13), vcc (1)
> **Analogies:** for example (1), picture (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Cycle through each LED directly](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=0)** - [Instructor] Okay, so the very first thing when we do the coding for the seven segment LED is to identify the pins. So I'll go ahead and start the Pin A. So in the Pin A I'll add it as a constant integer. And then I'll name it as ledPinA, and this one is connected to Pin 2 in the [Arduino](../../Skills/Software%20Development/Arduino.md) board. I'll do the same thing for the other pin, so constant integer ledPinB, and it's connected to Pin 3 in the Arduino board. So I'm going to go ahead and copy the other pins.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=43)** So C is connected to 4. D is connected to 5. E to 6. G to 7. And finally, F to 8. So here we've identified what are the pins that's connected to each one of the LED. The second step is setting up the pins to be an output. So we do this in the void setup by setting up the pinMode. So now since we have identified the pins at the beginning, so I can just go ahead and write down the name for Pin 2. And then I identify this as an OUTPUT. So I'll do the same thing for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the pins. Okay, and then just change the pin. So one thing that I want you to make sure is that you use the same name that you selected in here. So I'll go ahead and continue for the rest of them.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=129)** Alright, so we got this part done, so now each LED is set to be an output from the digital output of the Arduino board. The main program is happening in the void loop. So now since we're using a common anode, remember that the individual LEDS within a common anode are illuminated by sending a LOW signal. So when we do the programming, if we want to turn on each LED, the way we do it is we write a digitalWrite because we are connecting to the IO as a digital output. Then we specify the LED that we want to turn it on. And sending a LOW signal in order to turn it on. So this code to turn on the LED. And in order to turn off the LED, we write digitalWrite, again, the same name.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=198)** And then we send HIGH signal. I usually like to add a delay between the operation in order to make it a little bit nicer when you see it. So this one, this code simply does turns on LED A, a delay, and turns off the LED. We can do the same thing for the rest of the LEDs, so I'll go ahead and program it for the second one so the only thing that you need to change is the ledPin. Over here, so this other code, it does turn on the LED, and then a delay, and off. A good practice is that you turn off all the LEDs before you even start. So I'll go ahead and turn off all the LEDs in the beginning.
>
> **[4:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=265)** So this one turns off the first LED, here turns off the second LED, and I'll copy-paste for the rest of them.
>
> **[4:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=289)** Okay, so I'm going to continue to program the other LEDs. Again, we're doing the same thing, we're turning the LED on, and turning it off. Okay, so I'm going to go ahead and continue programming, why don't you give it a try and then we'll see how it works at the end.
>
> **[5:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=316)** So now I'm done with the coding part, I'm going to download the program. Okay, so now we can see that it turns on and off each LED, and that insuring that our code works, and the wiring is good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (4), [Arduino](../../Skills/Software%20Development/Arduino.md) (3)
> **Env Vars:** led (14), low (2), output (1), leds (1), high (1)
> **Code Identifiers:** digitalwrite (2), ledpina (1), ledpinb (1), pinmode (1), ledpin (1)
> **CLI Commands:** make (2)
> **Exercise Files:** download the (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Cycle through LEDs with a for loop](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=0)** - So in the previous video, we kind of copy and paste a lot of the code so let's try to use a for loop in order to reduce the code that we tried in the previous example. Since we did the wiring for the [Arduino](../../Skills/Software%20Development/Arduino.md) board, from two all the way to eight, so we can take advantage of using a for loop where we can start from two all the way to eight. So let's see how we can do that in the coding parts. So I'll give it a start in here. On line 13 all the way to line 19, the only thing that's being changed is the LED parts. So you notice here it's A, B, C, D. So since we do the wiring from two all the way to eight, so we can use a for loop. So in the for loop, I'm going to go ahead and initialize a starting point. I'll name it equals to two because the pins are connected from two. And then I is less than nine because I want the number to stop at eight. And then finally the increment would be just one. Now inside the for loop, I write down the pin mode. And then place i here, the one that keep changes, and then add it as an output. So this for loop is at a placement for everything we have in here. Okay.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=92)** So we can do the same thing for turning off all the LEDs. A for loop. Okay. And now the thing that we need to place inside the loop is digitalWrite. And i is the number that keeps changing. And we want to set everything off. And this will replace all the code that we have. So now this code works exactly the same way as the previous example. So you can download it and test it on your device. We usually try to use a for loop when it's possible. It's the preferred way than just copying and pasting a large chunk of code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Code Identifiers:** digitalwrite (1)
> **Env Vars:** led (1)
> **Cross-References:** previous video (1)
> **Speakers:** - so (1)

#### [Understanding the 7-segment LED truth table](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=0)** - [Narrator] Alright, so we've learned how to turn on or off the individual LEDs for the 7-Segment Display. Next, let's see how to display numbers and letters. In order to do so, let's generate the truth table for the 7-segment LED. For a common cathode, as mentioned previously, all pins are connected to ground, so their normal state is zero, low. If we want to make one of the LEDs turn on, then we need to set the anode side to one, high. So for example, if we want to show one, then the LED, the segments B and C, need to be on and the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the LEDs should be off. The same thing applies if you want to show number 2. Then LED A, B, G, E, D need to be on. And the same thing applies for the rest of the numbers. Since this is a common cathode device, we need to send high, a logic one, and everything else is zero. And this is what we call the truth table for our common cathode LED. So now let's examine the truth table for the common anode. For a common anode device, the anodes of LEDs are connected to VCC and their normal state is one, high. So it works the opposite way. So if we want to turn on any of the LEDs, then we need to make the state zero, low. An example, if we want to show a number one,
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=94)** then LED B and C receive a low value. And the same thing applies for any other number. The specific segments are zero and the rest are 1. So the truth tables for the common anode and common cathode devices are the same, but the difference is that for the common cathode we send high and for common anode we send low. You can use the same concept if you want to show letters. So you just need to figure out the truth table for each letter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (3)
> **Env Vars:** led (5), vcc (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Coding 7-segment display showing numbers](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=0)** - [Instructor] All right, so now since we're using the same common anode from Sigmadel AD we're going to keep the same wiring for it, and I know to use the same file that we used in a previous example. So we are going to keep the code from line 2 all the way to line 9, because we are keeping the identifying pins and also we're keeping the code for line 13 to line 18 as we are identifying the pins to be an output. Now let's start coding to show zero. To show zero, I need LED A, B, C, D, E, F to be on. So we're setting low for these LEDs. So I'm going to keep code 23 to 27 to turn off LEDs to start with and let's erase everything we had before. To just kind of start from the beginning. Alright, so usually like to add a delay before I start the next letter so I'll add a delay of one second. And I'll start coding to display zero. So for display zero, digital write and then I specify the LEDs that I want the to be on and I'm sending low.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=91)** Okay, so I'm going to copy and paste the same code but I'm just changing the pins that I want them to be on. Here I want B, C to be on, D, E, and finally F.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=121)** Okay, so this is the code in order to display zero. I usually like to again to add a delay in order to be able to see them between each number. And to display one, display one.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=144)** So for display one, I need LED B and C to be on. So I'm going to copy the code that I had previously.
>
> **[2:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=158)** So B and C. So usually I like to turn off LED as well between each number so I'll copy the code from 23 all the way to 27 and kind of placing that between each number. Alright, so I'm going to go ahead and implement the other numbers as well. So you'll have an exercise file, a sketch that includes all the number if you wanna implement that too. So after you're done coding, so we are going to download the program to the our arena and see how it works. As you can see now, the numbers are showing on the seven segment LED according to the code that we wrote.

> [!info]- Semantic Content
>
> **Env Vars:** led (4)
> **Exercise Files:** exercise file (1), download the (1)
> **Speakers:** - [instructor] (1)


### 3. Interface with a 7-Segment LED Using a Shift Register

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the shift register](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=0)** - [Narrator] In the previous example, we used seven digital pins for the seven-segment LED. As you can imagine, this may lead to you running out of pins on your [Arduino](../../Skills/Software%20Development/Arduino.md) board. One of the ways you can deal with this is by using a shift register. There are many types of shift registers. Each is used for a certain application. I'm going to use a serial in - parallel out shift register. So, in this example, I'm using a 4-bit shift register. You can think about it like four drawers. Each drawer contains one bit. So, in this example, I have a binary number that's a one-zero-one-one. The shift register takes each bit, one at a time, and moves it in between the drawers. At the first clock cycle, the least significant bit enters the shift register. The second clock cycle, the bit moves into the second drawer, and the next bit enters. And then, the third, and the fourth. Note here that the order of the most significant bit and the least significant bit stays the same. Now, the shift register takes the bits as a serial input, and output them in parallel. But you cannot do this instantaneously. It takes time. This is a clock diagram to better visualize how bits are loaded into the register. We see at the top, our clock signal, with the times t0 through t5 as the rising edges.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=97)** Loading the bit happens on the rising edge. So, on the first clock cycle, at t0, the least significant bit moves into drawer A. Then, at the second clock cycle, at t1, the bit moves into drawer B, and the next bit is loaded into the shift register. And the same thing happens in t2 and t3. At the end of the four clock cycles, the bits are shifted, keeping the same order, the least significant bit and the most significant bit. So, for our 4-bit shift register, it takes four clock cycles. And if we had an 8-bit shift register, it would take eight clock cycles to load the eight bits of data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** led (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [MC74HC595A shift register overview](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=0)** - [Instructor] Let's take a look at how to wire up our shift register to [Arduino](../../Skills/Software%20Development/Arduino.md) board. The shift register we're using is MC74HC595A, which is a serial-in, parallel-out shift register. The MC shift register consists of eight-bit shift register. The eight output bits are referred to as QA through QH. And sometimes we refer to them as Q zero up to Q seven, depends on the type. The serial data is loaded in at pin A Data Serial In, and the parallel data is available at pins QA all the way through QH. If we only have four bits in, the shift register will shift only four bits out. And we can control the state of our LEDs by connecting them to the output pins of the shift register. Let's get started by wiring up our data and clock signals to the Arduino board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (2)
> **Env Vars:** mc74hc595a (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Wire up the input and clock signals](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=0)** - Okay, so let's give it a start. Let's start connecting pin number 14 in the shift register, which is the data serial in, and you are going to connect it to the [Arduino](../../Skills/Software%20Development/Arduino.md) board pin number eight. Alright so the way to note the numbers within the shift register is by using the indication, the dot over here. So you start from number one, two, three, all the way to eight, and then the other side, nine all the way to 16. So we're using pin number 14, over here, and this one goes to pin number 8. Now we'll talk about how to control the inputs. We're using two essential pins. First is the shift clock, which is pin number 11 in the shift register. Data is shifted on a low-to-high transition of the shift register clock input. And we're going to connect this to pin 11 in the Arduino board.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=81)** The second clock is the latch clock, which is pin number 12 in the shift register. This input latches the shift register data. The data in the shift register is transferred to the storage register on a low-to-high transition of the storage latch input. And we're connecting this to pin 10 in the Arduino board.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=115)** Alright, so we've connected the three pins from the Arduino board, so let's continue wiring of the shift register.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (4)
> **Speakers:** - okay (1)

#### [Wire up the signals for VCC and GND](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=0)** - [Instructor] Alright, so let's continue wiring by taking care of the pins that are connected to either VCC or ground within the shift register. Okay, so we connect pin number 16 to the five volt within our adrenal board. Always check the data sheet to check the voltage limitation. This shift register accept two volt and a maximum of six volt. So I'm going to connect all the voltage supplied to this rail over here in the breadboard. And I will connect that later to the adrenal. So we're doing the VCC. And then I'll take that and add it to the five volt within our adrenal.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=48)** Now, the second step is connecting ground, which is pin 8, to the ground of the adrenal board. Okay, so I'm going to do the same thing, I'll try to connect the ground to this side of the breadboard. And to connect the two sides of the breadboard, I'm going to connect the ground to ground and then VCC to VCC if we need to use it later. Okay, so the last step is connecting the ground here to the ground of the adrenal board. Okay, so let's continue wiring. The reset pin, which is pin number 10, is active when it's low. So a low on the reset pin will reset the shift register. And because we don't want to reset the data, we need not to activate it, and to keep it high. So we are going to connect it to the five volt within the adrenal board. So we're connecting pin 10 to the five volt.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=128)** Alright, so for the output enable, which is pin number 13, it is active when it's low. so I need to keep it low in order to make sure that the data gets shifted to the PERL out. So this pin, we are going to connect at the ground to make sure that stays low the whole time. So pin 13 which is over here, we are going to connect it to ground.
>
> **[2:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=162)** So that's takes care of connecting the shift register to the adrenal board and making sure that we've got the VCC and the ground for all the pins.

> [!info]- Semantic Content
>
> **Env Vars:** vcc (5), perl (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Wire up the 7-segment LED](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=0)** - [Narrator] Alright, so now let's go through the wiring of the shift register to the seven-segment LED. I'm going to follow the wiring according to this table. So on top, you can see the pin letter and the pin number of the shift register and the corresponding pin letter and the pin number of the seven-segment LED on the bottom. So you can choose to connect the seven segment differently but you need to consider this, in programming the [Arduino](../../Skills/Software%20Development/Arduino.md) board, so the most significant bit and the least significant bit. This wiring is for the most significant bit first. Alright, so the first one, we need to connect pin number seven from the shift register to pin number seven and the seven-segment LED. Okay, so the very first thing that I'd like to do is to make sure that since we're using a common anno disk to get the common pins connected. So the middle one goes to five volts DCC and the bottom common pin goes to five volt as well. Alright, so the very first pin that I'm going to connect is pin number seven which is Qh in the shift register to pin number seven in the seven-segment LED. So this is Qh and I need it to go to pin a.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=96)** And then Qg from the shift register goes to pin b which is pin number six in the seven-segment LED. So let's do the wiring.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=123)** So why don't you give it a try and try to do the wiring according to the table that you see and you can check the wiring at the end of this video. Okay, so now I'm done the wiring for the seven-segment LED. So let's go ahead and do some programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Env Vars:** led (6), dcc (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Initializing pins for the shift register](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=0)** - [Instructor] Okay so to start the coding for this part I've provided you with a starter project for this section. So go ahead and open 03_06_starter_project file from the exercise files. So, the exercise file looks like this one. So, the very first thing that we need to do, is we need to identify the three pins that we connected to the shift register. So, the very first one is constant integer, is the dataPin and we connected that to pin number eight in our [Arduino](../../Skills/Software%20Development/Arduino.md) board. The second one is constant int, the latchPin that lives in pin number 10. And finally, the shift clock pin, and I will name it as constant int clockPin, and that one's connected to pin 11. Okay, so the next part now, is trying to get the combination in order to show the numbers. So, this is the truth table for the common added LED that we are using. So, in order to get the binary number, you simply take each of the combination and place a zero B in front of it. You can check the website, the Arduino website, if you would like to know how to enter it in a different format let's say a hexadecimal or numbers. So, for the binary number, we are going to take the numbers and put them in an array. In the starting project file,
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=92)** I already added the numbers, so here is the combination for number zero. The second one is a combination for number one, and so on. Try to keep them in order, because this will make sure that the numbers will show in orders when we use the seven segment LED. Okay, so now we got the pins identified, lines three to five, we got an array that's giving to it a data array, and it's a size of 10 because we are using numbers from zero to nine. So, let's continue coding, so, now the next part, is we need to identify the pin mode. So, the pin mode is for the three pins we're using, we consider them as an output. So, pinMode latchpin and it's an output. And I'll do the same for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the pins.
>
> **[2:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=163)** Alright, so, we've got the pins initialized, the array including the numbers tat we want to show, and then we set up the pin modes. So, next, we are going to program the shifters in order to show the numbers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Code Identifiers:** datapin (1), latchpin (1), clockpin (1), pinmode (1)
> **Exercise Files:** starter project (1), exercise files (1), exercise file (1)
> **Env Vars:** led (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The shiftOut command](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=0)** - Okay, so for the command that we're using in order to code the shift register, is a shiftOut command. ShiftOut command simply shifts out bits of data one at a time, so starting from either the most significant, or the least significant. The command has the following syntax: so you start with a dataPin, clockPin, and then the bitOrder if you're doing most significant or least significant, and finally, the data. So let's go ahead and do the coding for it. Okay, so this is the shiftOut. Then we write down the dataPin, clockPin. Now in the bit order, it's either most significant or least significant. The way we did the wiring was for the most significant bit, so we go with most significant bit first, and then finally the data that we'd like to show. And in our case, we're trying to show the numbers that you see in line nine to ten. So I'm going to go ahead and write down the array name. So now since I want to show the numbers from zero to nine, so I want to go through the array, I want it to go through index zero, one, two, three. I'm going to use a for-loop in order to go through the index within the array. So here I'm using a for-loop, so 'for'. Okay, so I'm going to initialize the index,
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=95)** and we're starting from zero, and index value is less than 10. And then finally, the way we increment it is by adding one to it. Okay, so now we started the for-loop. Now we need to make sure that we add the value of the index within the array. So here, I'm going to add an index. So this line, line 25, simply shift out the bit that we have in the array to get them out starting from the most significant bit. Alright, so when using a shiftOut command with the shift register, we need to make sure that the clock latch bin is called 'low' before using the shiftOut command, and then 'high' after using the shiftOut command. So in order to do so, I'm going to use a digitalWrite, and then specify the latchPin to 'low' before the command, and then call it 'high' after the command. Okay, so you're gonna do the same thing, but after the shiftOut command, but this time we are going to call it to 'high'. And then I usually like to add a delay at the end just to make it a little bit nicer when you see the numbers showing in the seven segment LED. And then that's it. We've done the coding for the shift register, so go ahead and download the program
>
> **[3:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=188)** to [Arduino](../../Skills/Software%20Development/Arduino.md) board and see how it works. Okay, so you can see the number showing on the seven segment LED and using only three output from the Arduino board.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (2)
> **Code Identifiers:** shiftout (6), datapin (2), clockpin (2), bitorder (1), digitalwrite (1)
> **CLI Commands:** make (3)
> **Env Vars:** led (2)
> **Definitions:** is a  (1), is called (1)
> **Exercise Files:** download the (1)
> **Speakers:** - okay (1)


### 4. Interface with a Keypad

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to the keypad interface](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=0)** - [Narrator] A keypad is a common [Hardware](../../Topics/Hardware.md) interface so let's see how we can set up one with our [Arduino](../../Skills/Software%20Development/Arduino.md) board. The keypad type we're using is four by three which means four rows and three columns. Each point is a pushbutton arranged this way. Each pushbutton is an active low type. This is the arrangement for an active low pushbutton. We have a voltage source, VCC, and a resistor. We call the resistor a pull-up resistor, then a pushbutton connected to ground. And in order to read the value of the active low pushbutton we connect the controller pin between the pull-up resistor and the pushbutton. Active low simply means when the switch or the pushbutton is closed or pressed, it sends a low signal to the microcontroller. So as the name says it, when it's active, it sends a low signal. When the switch is not pressed, it sends a high signal. An active low pushbutton uses a pull-up resistor. It pulls up the value to high when it's not pressed. The keypad is separated into rows and columns. All columns and rows are active low. So when they are not pressed, they send a high signal to the microcontroller. So when pressing the specific button on the keypad, the program, Arduino, receives a two low signals. And this how the program knows exactly what number
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=95)** is pressed. So in this case, row two and column two receive a low signal. And this is how the Arduino knows that we've pressed number five. Our keypad is wired this way. The right hand side of the connecting ribbon is reserved for the columns. So column one, two and three. The left hand side is reserved for the rows. Row one, two, three and four.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3), [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** vcc (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Wiring up the keypad](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=0)** - [Instructor] Alright, so let's do the wiring of the keypad to [Arduino](../../Skills/Software%20Development/Arduino.md) board. So, we are going to use the pins, two to five, in order to reserve for the rows, and then six, seven, eight, for the columns. So, this is the keypad we are using. And then I'm going to use pins two, all the way to eight.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=30)** For the second part, we are going to use three LEDs, and we are going to use a keypad to control each one of them. So I'm going to connect the LEDs for pin nine, 10, and 11. So for the LEDs I'm going to use a resistor and the value that I am going to use is 330 ohm. You can use any values between 200 and 500 if you don't have this specific one. So the red LED is going to be connected to pin nine.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=66)** The blue one is connected to pin 10.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=79)** And finally, the yellow one is connected to pin 11.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=91)** So note here that one side of the LED is connected to the pin, and the other side is connected to ground. So we need to connect the ground, to the Arduino board. So now we've done the wirings, so let's cover some of the programming concept that we need for the keypad, before we start actually coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (2)
> **Env Vars:** led (2)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Optional review: IF statement](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=0)** - [Instructor] So if you are familiar with the if statement you can skip this video, and go to the next one, but if you want to refresh your memory about what an if statement is I'm gonna go briefly, and explain what it is. The most type of constructor command is the if statement. The if statement checks for a condition, and executes the proceeding statement, or set of statements, if the condition is true. Or simply skips the statement to the next line if that condition is not true. The condition is a Boolean type. So it's either true or false. Here's a simple example of using an if statement to check a value if it's greater than hundred. So whenever the value is greater than 100 we have a digitalWrite to a certain pin to be on. In the if statement it simply checks a condition, and then executes the code. There's no increments in the if statement. If the if statement you only have one option of whether or not to run the statement. If the condition is not true then the compiler moves to the next statement in the program. The else provides another group of command in the if statement. So if the first condition is not true then the else statement gets executed. The statement after the else keyword only processes when the condition is false. You can also have multiple else if condition as needed.

> [!info]- Semantic Content
>
> **Code Identifiers:** digitalwrite (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Optional review: The switch...case statement](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=0)** - [Instructor] All right, so I'm going to go through the switch...case statement. If you are familiar with the concept, you can skip this video, but if you want to refresh your memory about what the concept is, I'm going to go through the concept briefly. So one of the structure commands used within [Arduino](../../Skills/Software%20Development/Arduino.md) is a switch...case statement. Oftentimes, we might need to compare a variable against several possible values. For example, the keypad we're using, so we might need to have an assorted output to be associated when we press certain numbers on the keypad. The switch statement uses a standard if...then style condition to evaluate for results. The Arduino jumps to the matching case statement in the code, skipping over the other case statements. You can have a default statement at the end of the switch statement code block. The Arduino software jumps to the default statement when none of the cases matches the results. So we use switch...case statement if we want to control the flow of the program, or if we want to switch between different states. So if case one is true, then the program executes statement under case one. The same thing applies for any other cases. So instead of writing a long series of else...if statement, we can just use a switch...case statement. You need to add a break at the end of each case. Otherwise, the Arduino software continues to process any code that appears after the case, including the other case statements. Adding a break will cause the Arduino software
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=94)** to jump out of that switch statement after each specific case is done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (5)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understanding two-dimensional arrays](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=0)** - [Instructor] I'm going to use the two-dimensional array concept when declaring the keypad buttons. So I'm going to go through explaining what a two-dimensional array is. Two-dimensional array that uses different columns and different rows. So this is how we write a two-dimensional array. First, we specify the type. That could be an integer, a double. Then, we declare the name that we wanted to choose for this two-dimensional array, and then, the number of rows and the number of columns. The number of rows and columns need to be an integer above zero. So here's an example of an integer two-dimensional array. I chose the name to be MyArray. That has three rows and two columns. So I initialize the array to have these values: one and two, four and five, six and seven. The way we write them within the array is that the first value are for the first row, the second set of values are for the second row, and so on. So each element within the array has a row and a column reference. The first row and column is row zero column zero, including the array name. So for example, if I want to know the element that has this reference, then I know that it's referring to number five. Here are the references for each number within the array. So why don't you take a second in order to see what each reference represents within this specific array? All right, so here is another example
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=96)** of using a character array. Note here that I'm using a single quote marks around each letter as I want the letter to be declared as a character. We're going to use the two-dimensional array concept to save the data of the keypad. So each character within the keypad is saved in a character two-dimensional array.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Setup the keypad library](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=0)** - [Instructor] Often times when you use the keypad component, you need to include the library in the [Arduino](../../Skills/Software%20Development/Arduino.md) software. In order to check if you have the library or not, you go to Sketch, Include Library, and then look around if you see the keypad library. If you don't see it around, then you need to download it from the website. To do so, you need to go to this website, so you need to download this zip file. And then once downloaded, you go to Download, then unzip the file. Alright, so once you have the folder, you need to move it to the libraries within the Arduino software. So you go where is Arduino, Libraries, and then you place it in here. Alright, so let's go back and check if we have the library within the software. You might need to restart the software again, so just open a new one.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=75)** Alright, so you go and check if you have the library now. See, we have the keypad now. Sometimes, if cannot even see it in here, the way to do it is you go to Manage Libraries, and then simply search for the keypad. And then download any of the libraries available. I usually go with this one, and then I install it. And then once you do this step, you'll have the library included in the software, so to include the library, you go here, move all the way to keypad. So you go to Sketch, Include Library, Keypad, and then you'll see the library included. Okay, so now the software is ready, let's start to do some coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3)
> **UI Navigation:** go to (5)
> **CLI Commands:** unzip (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [HelloKeypad](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=0)** - [Instructor] So once you download the keypad library, you will have an example that comes in within the library itself. So in order to access the examples, you go to file, examples, and then scroll down all the way to the keypad. I'll select Hello Keypad for our example here. So we're using this example for our keypad. I just need to make some changes along the way according to the wiring that we did. All right, so I'm going to explain the code of this example in order to understand how the keypad function works. So, in line 10, we see that we need to include the library when we deal with the keypad. It's included in here. Line 12 and line 13 is initializing rows and columns of timed bytes. The rows and columns are for the keypad, so we're using 4 by 3 Key pad, so four rows and three columns. So, both rows and columns are tad bytes. The reason for selecting tad byte is that byte is unassigned integer that has a value of 0 to 255. The reason why we select the byte is that we know that the rows and columns values will be between zero and 255. There is a way to minimize their memory usage within the [Arduino](../../Skills/Software%20Development/Arduino.md) software. On line 14 is where we're identifying the two dimensional array of the key pad we are using. So, the two dimensional array is that character, the name for the array is keys,
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=92)** and then we have rows and columns. In line 20, we're now identifying the wiring of the rows. So, go ahead and make the changes according to the one that we did. So, for the rows, we use two to five. So two, three, four, and five. Again, you need to keep it in order. And then for line 21, we need to identify the columns, so I'm going to go ahead and 1 to 5 according to our wiring. All right. In line 23, this is the main key pad function. So, the key pad function starts from here. This is identifying a name for that key pad. So, the name that you find here after make key map should correspond to the same array name that we are going to find here. So, if we make any changes, then, the name should change accordingly. Here is the rowPins array, the one that we have in line 20. For column pins, it's whatever we have in line 21. And finally, rows and columns corresponding to whatever we have in line 12 and 13. Now in line 26, we initialize the communication between the Arduino board and the serial monitor. Notice here that once we use the serial monitor, once we initialize the communication, we can not use pins zero and one within
>
> **[3:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=186)** the Arduino board. In line 30, the command that we usually use to get whatever value, once we press on the keypad, is getKey. So, this takes whatever value of that specific key pad that we selected, so the name here corresponds to the name over here. So if we change the name over here, then you make the changes accordingly. So, this function, everything here takes whatever we press on the key pad and saves it in a character value named Key. Line 32 is whenever we have the value in that character key, then simply just print it in the serial monitor using a serial print in, and then the value is key. All right. So, this whole code is simply doing whatever we press any button on the key pad, we see it on the serial monitor. So, let's go ahead and upload the program to the Arduino board. Now, once you're done downloading, you can click on the serial monitor that you have over here.
>
> **[4:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=264)** Okay, so I'm going to go ahead and adjust it. Let's use, let's say number three for example, and you can see it on the monitor and we'll just select different numbers five and eight, and you can just see them on the serial monitor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (4)
> **CLI Commands:** make (5), find (2)
> **UI Navigation:** go to (1), scroll down (1), select the (1), click on (1)
> **Code Identifiers:** rowpins (1), getkey (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using the keypad with LEDs](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=0)** - [Instructor] All right, so now, we've got the keypad working the software. Let's continue programming our case where we have three LEDs. So, what we want to do is we want to program the software that when we press one, the red LED turns on, when we press two, the blue LED turns on, and when we press three, the last one, the yellow LED turns on and zero turns off everything. So, in the code I'm going to go scroll up and identify the LEDs first. So, I'm going to write that down. So, if there are constant int, the red LED is connected to pin nine.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=45)** Then blue LED is connected to 10.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=53)** And finally, the yellow one is connected to 11. All right, so now the next step is in the void setup. I need to identify the pins as outputs. So, red, and to copy and paste the code and just change the pin.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=92)** All right. So now, what I want, whenever we press on the keypad is whenever we have a value, and that's already initialized in the line 32, if we have a value in the key then something needs to happen. So, I'm going to use the switch case in this example. Switch and then I'm using key over here. And then I'll start them case one. All right, for case one, whenever we press on number one, then we need the red light to turn on. So, digital write, red LED, and then we're sending high value. I'm gonna add a delay just in order to be able to see it. Okay, and remember that at the end of each case, we need to add a break in order to finish the certain case. So, I'm going to go ahead and finish the other two cases. So, I'll copy here.
>
> **[2:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=170)** Now, the second case is whenever we have number two. So, I'm gonna go underneath the blue LED to turn on. I'll do the same thing for case three.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=189)** So, whenever we have number three, I want the last LED to turn on. All right, so the final case is whenever we press on zero, everything turns off. So, case zero. So, I'm going to copy the code here and place it over here for the digital write. And I need this to be off. The same thing for the other ones.
>
> **[3:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=231)** And then finally, the last one.
>
> **[3:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=239)** And then this case is to turn off all LEDs.
>
> **[4:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=248)** Again, I need to add a break at the end of the case in order to finish it. And I'm going to just add before that, delay, just to keep it consistent. All right, so just upload the program and see how it works. All right, so let's test the program. So, once we press on number one, the red LED turns on. Then number two and number three. Now, if I want them all to be off, I simply press on zero. And then with the switch case example, you can select any case, the order doesn't matter.
>
> **[5:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=301)** Okay, so with this we successfully wired the keypad to the LEDs.

> [!info]- Semantic Content
>
> **Env Vars:** led (9)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Combine the keypad and 7-segment LED](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=0)** - [Instructor] Alright, for this part, we are going to use the seven segment LED with a keypad. So I'm going to use the same wiring that I did previously, so I'll go ahead and connect the pins that are coming in from the shift register. So the databank goes to pin number eight, then 10, and then, finally, the last one is to 11. For the keypad, I'm going to connect it to the pins over at this side. So pins 22 all the way to 34. Finally, I'm going to connect the positive and negative...
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=48)** So that the five-volt goes in here, and then the ground to the other side. So I'm going to go ahead and start coding. So you can open the file, that's 04_09_Keypad_7SegLED_Start in project. So you can see the code from line two all the way to line 18 is corresponding to the keypad. It's very similar to what we did in the previous example. The only difference is in line 15 and 16. You can see that here, it corresponds to the pins that we connected the keypad to. In line 21, 22, and 23, you are identifying the pins that we connected to the shift register. In line 25, we'll have the array that includes the number from zero all the way to nine. For the void setup, line 30, 31, and 32 will identify the pins to an output. And then you can see, in line 40, this is the command in order to get, every time we press on one of the buttons on the keypad, here, you can see that the name, I chose a different name this time, the name that you can see for the keypad is the same name that you can see in line 18.
>
> **[2:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=131)** So the code simply, on line 40, takes whatever we press and saves it in a character value named keypressed. So now we want to program the software in a way that, whenever we press a number on the keypad, it shows on the seven segment LED. So the very first thing I'm going to do is I'm going to convert the values that we received from the keypad into a string value. So I'm going to go ahead and initialize a value named KeyNumber. And the value that we want to change is the keypressed. Now, the second step is initializing an index value that, whenever we press on the keypad, we take that value and convert it into an integer number. So, int index=KeyNumber, and the command to do so is toInt. So what we have done so far is add, in line 40, whenever we press on the keypad, convert it into a character value, then we convert it back to a string, and then finally into an integer. Now we are going to use the index in order to toggle down between the numbers that we have in the array. In order to do so, I'm going to identify an integer variable so I'm going to do this outside the if statement. So, set int, I'll name it as a keycode,
>
> **[3:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=226)** and we're starting from zero. Now I'll go back to the if statement, and this keycode is actually a number within the array. So, dataArray, the name of the array, and then the index is the value that we pressed on the keypad. So whenever we use a shift register, remember that we need to put the large pin into low, so digitalWrite, latchPin, LOW.
>
> **[4:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=262)** We need to do this every time we use a shiftOut command. So the shiftOut command is very similar to what we did last time, where you need to identify the dataPin, clockPin,
>
> **[4:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=279)** and since we're using the same wiring, so it's in most significant bit first. And then finally, the data that we are going to shift out using the shift register is the keycode. Okay? And just set the large pin to pi after the shiftOut command.
>
> **[5:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=307)** So now we've done the coding part, so go ahead and upload this into the [Arduino](../../Skills/Software%20Development/Arduino.md) board in order to see how the program works. Okay, so let's give it a start. So I'm going to press on number four. I notice here that it shows on the seven segment LED, so you press any number, I'm going to press five, two. And if I press on the star symbol or the hashtag, then we're using the two int command, and the two int command that converts everything to zero if we're not pressing any of the numbers. Okay, so we've done this part, and let's go into the next example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (1)
> **Code Identifiers:** shiftout (3), toint (1), dataarray (1), digitalwrite (1), latchpin (1)
> **Env Vars:** led (3), low (1)
> **UI Navigation:** open the (1), toggle (1)
> **Analogies:** similar to (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Combine them all: LCD + keypad + LED](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=0)** - [Instructor] All right, so we've went through the three components, so now we are going to include the seven-segment LED with the LCD and the keypad. So, we are going to keep the same wiring for the seven-segment LED, the same wiring for the LCD, and the same wiring for the keypad. The only difference, however, is that so the shift clock, which is in pin eleven, the shift register, is going to be connected in pin nine in the [Arduino](../../Skills/Software%20Development/Arduino.md) board over here. And it was previously connected to pin eleven, but I used pin eleven to connect it to the LCD. So, if you are going to use two bread boards, exactly what I'm doing, so you need to keep the connection between the two bread boards, so the positive to the positive, and then key brand common.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=54)** So now, the last piece is connecting the five volt here and then ground to ground. All right, so now we have the three components together connected to the Arduino board. All right, so to start the coding, why don't you go ahead and open the file 0410 Keypad 7 segment LED LCD start project. So in the code, you notice that line one and two including the two libraries that we need for the keypad and LCD, line five all the way to line 18 is for the initializing the keypad as we mentioned previously. For line 21, 22, and 23, are for the shift register, so you'll notice here that the only change is that in line 23, that we're connecting to pin 9. Line 25 is initializing the array, and line 29 is for the LCD. Now, in the voice setup, we have to initial the pins as an output in line 33 all the way to 35. And then for the LCD in line 37, it's a 16 by 2 LCD. We're using the same tab, so we do not change anything in here. And then, I set the cursor to start from the first line as you can see that in line 39. Line 40 is that I have a simple sentence saying that enter the keypad number and then line 41, I sent the cursor to go to the 2nd row in order to show the numbers.
>
> **[2:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=150)** So, one thing that we need to do now, is that for the seven segment LED, is that we need to set it to be off in the beginning. So, in order to do so, I'm going to scroll down and give the same code that we did in order to shift out the numbers that we covered previously. So go ahead and copy that, and then go again in the voice setup. Make sure that it's still in the voice set up. And I'm going to paste that. So, the thing that I want is I want to push a value where everything is off, so I can do this by just having the binary number 0B, and then everything is off by sending one. So, you need 8 bits. All right, so now in the voice loop, the main program, it's everything that we've covered in the previous examples, so I'm keeping the same thing as it is. The only thing that we need to do is in the if statement, that whenever we press on the keypad, we need to see it on the LCD screen. So, simply adding LCD, print, and then the value that I want to see is the key pressed. And that's it. Let's upload the program and see how it works. All right, so once you upload the program, you can see that the 7 segment LED is off, and that's what we want. When you have a sentence in the LCD,
>
> **[4:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=242)** so go ahead and punch in numbers, so I'll start with seven, and you can see it showing in the 7 segment LED as well as in the LCD. I'll just punch in different numbers now and you can see all the numbers showing up over here. All right, great job. So now, we have included the three components, the key pad, the LCD and the 7 segment LED. So why don't you give it a try and try to do a program where you can, for example, if you press the start or the hash tag, that resets both the LCD and the seven segment LED. Or, you can do for example, that whenever you press on the numbers, that only the least number shows in here. It's always fun to play around with Arduino, so have fun!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3), cursor (2)
> **Env Vars:** lcd (14), led (8)
> **Prerequisites:** setup (2), set up (1)
> **Cross-References:** we mentioned (1), we covered (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/next-steps?u=76281980&t=3)** If you want to learn more about [Arduino](../../Skills/Software%20Development/Arduino.md) you can check out the library for my other Arduino courses like [Learning Arduino- Interfacing with Analog Devices](Learning%20Arduino-%20Interfacing%20with%20Analog%20Devices.md),

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Arduino](../../Skills/Software%20Development/Arduino.md) (3)


## Instructor

- [Zahraa Khalil](../../Instructors/Hardware/Zahraa%20Khalil.md)

## Resources

- Exercise files available

## Skills Covered

- Arduino

## Path Context

### In [Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)
← [Electronics Foundations- Basic Circuits](Electronics%20Foundations-%20Basic%20Circuits.md) | **4 of 11** | [Electronics Foundations- Semiconductor Devices](Electronics%20Foundations-%20Semiconductor%20Devices.md) →

## Appears In

- [Become an Arduino Developer](../../Paths/Hardware/Learning%20Paths/Become%20an%20Arduino%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Arduino- Prototyping](Arduino-%20Prototyping.md) — Arduino
- [Learning Arduino- Pulse Width Modulation](Learning%20Arduino-%20Pulse%20Width%20Modulation.md) — Arduino
- [Learning Arduino- Interfacing with Analog Devices](Learning%20Arduino-%20Interfacing%20with%20Analog%20Devices.md) — Arduino
- [Learning Arduino Foundations](Learning%20Arduino%20Foundations.md) — Arduino

---

[↑ Back to top](#)