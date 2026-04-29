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
  - '[[Become an Arduino Developer]]'
prev_courses:
  - '[[Electronics Foundations- Basic Circuits]]'
next_courses:
  - '[[Electronics Foundations- Semiconductor Devices]]'
path_nav: '[{"path":"Become an Arduino Developer","position":4,"total":11,"prev":"Electronics Foundations- Basic Circuits","next":"Electronics Foundations- Semiconductor Devices"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - topic/network-and-system-administration
  - topic/software-development
  - skill/arduino
status: not-started
created: 2026-04-29
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
  - Open up your digital world with Arduino
  - What you should know before watching
  - The devices used
- [**1. Interface with an LCD**](#1-interface-with-an-lcd) (8 videos)
  - Introduction to the liquid crystal display (LCD)
  - Understanding HD4470 controller
  - The LCD interface
  - Wire up the LCD
  - Coding the LCD interface
  - Optional review: Understanding "for" loops
  - Optional review: Understanding arrays
  - Displaying random numbers and scrolling
- [**2. Interface with a 7-Segment LED Directly**](#2-interface-with-a-7-segment-led-directly) (9 videos)
  - Overview of the 7-segment LED
  - The 7-segment LED component
  - 7-segment LED display types
  - Checking a 7-segment LED type
  - Wiring up the 7-segment LED
  - Cycle through each LED directly
  - Cycle through LEDs with a for loop
  - Understanding the 7-segment LED truth table
  - Coding 7-segment display showing numbers
- [**3. Interface with a 7-Segment LED Using a Shift Register**](#3-interface-with-a-7-segment-led-using-a-shift-register) (7 videos)
  - Understanding the shift register
  - MC74HC595A shift register overview
  - Wire up the input and clock signals
  - Wire up the signals for VCC and GND
  - Wire up the 7-segment LED
  - Initializing pins for the shift register
  - The shiftOut command
- [**4. Interface with a Keypad**](#4-interface-with-a-keypad) (10 videos)
  - Introduction to the keypad interface
  - Wiring up the keypad
  - Optional review: IF statement
  - Optional review: The switch...case statement
  - Understanding two-dimensional arrays
  - Setup the keypad library
  - HelloKeypad
  - Using the keypad with LEDs
  - Combine the keypad and 7-segment LED
  - Combine them all: LCD + keypad + LED
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Open up your digital world with Arduino
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/open-up-your-digital-world-with-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/open-up-your-digital-world-with-arduino?u=76281980&t=0)** - When you learn about Arduino, 2 you may want to bring your Arduino projects 3 to the next level by connecting different hardware, 4 displays, and interactive interfaces. 5 In this course, I'll show you how 6 to connect the Arduino board 7 to three common hardware components, 8 LCD screen, seven-segment LED, and a keypad. 9 I'll explore each component separately 10 and go through the wiring and the coding 11 to get them working, like displaying randomized numbers, 12 looping through an LED pattern, 13 and accepting input from the keypad. 14 At the end, we'll combine the three components together, 15 where we apply all the knowledge learned within the course. 16 I'm Zara Khalil, I am an engineering instructor, 17 and I enjoy teaching courses covering engineering topics, 18
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/open-up-your-digital-world-with-arduino?u=76281980&t=50)** so let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** led (2), lcd (1)
> **Code Keywords:** let (1)
> **Speakers:** - when (1)

#### What you should know before watching
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=0)** - [Instructor] Before you start this course, you should be a little familiar with how Arduino works, using the digital I/O pins, and the basics commands, like, for example, programming a simple LED output.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=12)** I'm going to use an Arduino MEGA 2560 board, but you can use any other board that you have.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=19)** You just need to make sure to select it when programming.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=22)** If you need to know on how to do so, you can check the troubleshooting video in the Learning Arduino course.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=28)** You can check out the Learning Arduino course in the library to get you prepared for this course if needed.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=34)** I'll cover the wiring needed for this course, but if you'd like a refresher on hardware components throughout this course, I would recommend referring to the [[Electronics Foundations- Fundamentals]].
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=45)** During this course, I'll cover some programming concepts like for loops, if statements, and arrays.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=51)** I'll go briefly through each one as we do the coding.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/what-you-should-know-before-watching?u=76281980&t=54)** So, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** led (1), mega (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### The devices used
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=0)** - [Instructor] The components we are going to use in this course are a Common Anode 7 Segment LED, a Shift Register.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=10)** 16x2 LCD.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=15)** Potentiometer.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=18)** Keypad.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=21)** Resistors, and you are going to use six of them.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=26)** And the value is 330.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=30)** Connecting wires.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-devices-used?u=76281980&t=34)** And finally, the Arduino Board.

> [!info]- Semantic Content
>
> **Env Vars:** led (1), lcd (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)


### 1. Interface with an LCD

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to the liquid crystal display (LCD)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=0)** - [Instructor] LCD stands for liquid-crystal display.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=4)** LCD is one of the components that can be used with Arduino board to show text or graphics.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=11)** The principle behind LCD is to energize a series of crystals to appear either opaque or transparent against a lighted background.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=21)** The two major types are alphanumeric LCD and graphical LCD.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=28)** The most common alphanumeric LCD device is 16 by two LCD.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=34)** It can display two lines of 16 characters.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=38)** A 16 by two LCD simply means having two rows and 16 columns, so basically two lines to show the text.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=47)** And the same thing applies if you have any other type.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=50)** Eight by two.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=51)** Five by two.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=52)** The first one is reserved for columns and the second one is for rows.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=57)** The second common type is graphical LCD.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=61)** The graphical LCD device use a single larger grid of individual lights to display information, instead of a separate grid for each character.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=71)** The most common graphical layout is 128 by 64 LCD.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-liquid-crystal-display-lcd?u=76281980&t=77)** The benefit of using that layout is that you can display any character at any resolution you prefer, and you're not only limited to the five by eight resolution in the alphanumeric device.

> [!info]- Semantic Content
>
> **Env Vars:** lcd (11)
> **Code Keywords:** type. (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### Understanding HD4470 controller
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=0)** - [Instructor] So now let's try to understand how LCD works.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=3)** Most LCD's that are compatible with Arduino uses the HD Controller to manage the LCD.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=9)** The HD44780, is referred to as dot matrix, liquid crystal display controller and driver.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=18)** So, each dot matrix inside the LCD has five columns, and eight rows, as you can see in the picture.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=25)** Each of the dot matrix within the 16 characters has a five by eight matrix.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=30)** This is used to show letters and numbers when using the LCD.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=35)** So, if letter A is showing in the first dot matrix then these are the dots that are highlighted.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=42)** Most LCD are supported by this type of controller and it shows up to 27 characters for each line.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=51)** Now, it depends on the LCD type.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=54)** It shows a certain number of columns.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=56)** So, if we're using an 8 x 2 LCD then we can only see eight columns out of the 27 columns.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=64)** If we're using 16 x 2 then we only see 16 out of 27.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=70)** Now, if we wanted to display a sentence, we need to know how many characters are in it by counting the number of letters.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=77)** So, if the sentence is Learning Arduino, Learning Arduino has 15 letters and one space.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=84)** If we're using 16 x 2 LCD then we can see the whole sentence, but if we're using 8 x 2, we can only see half of it.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=92)** Even though all the characters are stored in the memory because we can only see eight columns.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=99)** In this case, we can use scroll left or scroll right functions within the software to scroll through the whole sentence within the same row.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-hd4470-controller?u=76281980&t=109)** If you wanted to hear more about how the controller works, you can check the data sheet that is provided by HITACHI in order to understand how this controller works.

> [!info]- Semantic Content
>
> **Env Vars:** lcd (9), hd44780 (1), hitachi (1)
> **Code Keywords:** let (1), type. (1), case, (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### The LCD interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=0)** - [Narrator] Now let's take a look at how to interface the 16x2 LCD with Arduino board.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=7)** So as mentioned previously, the HD controller chip uses a series of 16 interface pins.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=15)** Now, let's take a closer look at each of the pins.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=18)** The first two pins are VSS, which is the ground, you need to connect this to Arduino, in order to keep a common ground.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=26)** The second pin is VDD, which is the source power.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=29)** And you are going to connect it, to the five volt Arduino board.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=33)** So pin one and pin two are the power supply pins.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=39)** Pin three is the Display Contrast pin.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=42)** You are going to connect it to a potentiometer.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=45)** This pin, is used for controlling the brightness of the screen.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=48)** This is accomplished by adjusting the power supply voltage to the LCD.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=54)** Pin four, which is RS, that refers to Register Select pin.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=58)** This controls where in the the LCD memory you're writing the data to.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=63)** And we have two modes for it, Low and High.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=67)** So for this specific LCD, we send a single Low to send commands and instruction, and High, to send data.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=75)** Pin five is Read and Write.
>
> **[1:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=78)** Read and Write is used to specify if we are reading from the LCD, or if we're writing to the LCD.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=85)** And it has two modes, Low if we write, and High, if we are reading from the LCD.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=92)** Since we are only going to write to the LCD for our demonstration, we will connect this to ground in order to keep it low.
>
> **[1:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=100)** Pin six is the Enable pin.
>
> **[1:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=103)** This pin enables the writing operation to the register.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=107)** Now pins from pin seven all the way to pin fourteen are the digital pins.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=112)** So, a total of eight pins.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=115)** You can use all the eight pins for the eight-bit mode if you're interested in showing ASCII characters, or use half of them as a four-bit mode if you're interested only in showing numbers and letters.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=128)** The states of these pins, either high or low, are the bits that you are writing to the register indicated by the Register Select pin.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=138)** Finally, the last two pins are for the LED backlight.
>
> **[2:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=143)** Pin number 15 is connected to an anode, so we are going to connect it to the five volt.
>
> **[2:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=148)** And pin number 16 is connected to ground, and we are going to use a resistor, in order to connect it to ground.
>
> **[2:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-lcd-interface?u=76281980&t=155)** We've included a handout with exercise files that has a summary of the LCD pin description, so you can go and check that out.

> [!info]- Semantic Content
>
> **Env Vars:** lcd (9), vss (1), vdd (1), ascii (1), led (1)
> **Code Keywords:** let (2), interface (2), finally, (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** refers to (1)
> **Speakers:** - [narrator] (1)

#### Wire up the LCD
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=0)** - [Narrator] I'm going to do the wiring of the LCD, according to this table.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=4)** So here is the LCD pin numbers and the corresponding Arduino pins that I'm going to connect them too.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=12)** So let's go ahead and do the wiring for each pin.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=15)** The first one is the ground and the vcc.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=20)** Okay so I'm going to use this as a ground and the second one as the voltage supply.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=25)** So the very first one is going to be connected to ground.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=34)** Now the second pin is going to voltage supply.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=48)** So now the third pin is going to be connected to potentiometer.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=53)** There are different types of potentiometers.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=55)** However, the wiring is acquired similar.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=58)** You can see the left pin is the ground.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=61)** The middle one is going to be connected to a zero which is pin three in the LCD.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=66)** And the right pin is for the five bolt.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=70)** Here are the types that you could use with the LCD.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=74)** So for our example, I'm going to use the blue one.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=81)** Or it's I'm going to go ahead and place it on the beardboard.
>
> **[1:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=86)** Now I'm going to connect the third pin to the middle pin of the potentiometer.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=102)** Alright so I'm going to continue wiring the potentiometer.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=105)** So the left side goes to ground.
>
> **[1:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=114)** And the right side goes to five volts.
>
> **[2:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=127)** So now pin number four in the LCD, goes to pin 12 in the Arduino board.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=144)** So pin five since we're doing only writing to the LCD, we need to keep it low.
>
> **[2:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=149)** So we are going to connect it to ground.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=161)** So now pin six in the LCD is going pin 11 in the Arduino board.
>
> **[2:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=179)** And now for the additional pins we are going to use four pins.
>
> **[3:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=183)** So pin 11 in the LCD is connected to pin five in the Arduino board, 12 to four, 13 to three, and finally 14 to two.
>
> **[3:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=194)** So this is been number 14 that's going to pin two here.
>
> **[3:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=205)** Then, 13 is going to pin three.
>
> **[3:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=215)** 12 is going to four.
>
> **[3:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=225)** And then finally, 11 is going to five.
>
> **[4:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=240)** Now the final two pins are pin 15 and 16.
>
> **[4:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=245)** So for pin number 15 we are going to connect that to the five volts and I'm going to use a resistor value in order to do so.
>
> **[4:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=254)** This resistor is 330 ohm.
>
> **[4:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=257)** That's the current limiting resistor, so you could use any values between 200 and 500.
>
> **[4:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=263)** So I'm going to go ahead and connect that to the five volts here.
>
> **[4:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=269)** And finally the last pin which is pin number 16 that goes to ground.
>
> **[4:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=282)** So the last step is connecting the breadboard to the Arduino board.
>
> **[4:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=290)** So the ground goes to ground in the Arduino board, and the positive goes to the five volts.
>
> **[5:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-lcd?u=76281980&t=301)** Alright so I've done the wiring for the LCD, so lets go ahead and do the coding.

> [!info]- Semantic Content
>
> **Env Vars:** lcd (9)
> **Code Keywords:** let (1), continue (1), finally, (1)
> **Speakers:** - [narrator] (1)

#### Coding the LCD interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=0)** - [Narrator] Alright, so when we do the programming for the LCD, the very first thing that we need to do is to include the library of the LCD.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=7)** So you can do so by going to Sketch, include Library and look for Liquid Crystal.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=15)** So this making sure that we have the library for LCD.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=19)** Alright, so the first command with programming the LCD is a Liquid Crystal command.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=29)** And Liquid Crystal Command basically does is a way for the program to identify the pins that we connected the LCD to.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=37)** So you can check the website for the different syntax and since we're using only four bits, so we are going to use the very first syntax.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=46)** So back in the coding, so LiquidCrystal, and then I'll name it as LCD, and here, the first one is the rs, second one is enable, then d four, d five, d six, and then d seven.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=68)** So I need to identify what are the pins so I can do that before the command, so here is a constant integer, rs is connected to pin 12, enable is connected to 11 and then d four, d five, d five is connected to four, d six is connected to three, and then finally d seven is connected to two.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=97)** So there are two methods if you wanna use this, so you can either identify the pins and as you can see in line three or you can actually write down the numbers within the LiquidCrystal.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=107)** So, for example, if you want to do it, LiquidCrystal LCD and then you just identify the pins over here.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=118)** You just need to be careful that when you do that, you need to keep the same order, otherwise the LCD will not be able to show the text that you're showing.
>
> **[2:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=126)** So I'm going to keep the previous one for our demonstration purposes.
>
> **[2:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=131)** Now in the void setup, we need to use another command that's called LCD begin.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=137)** This command is actually identifying how many columns and how many rows.
>
> **[2:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=141)** So depending on the type that you're using, the one we're using is 16 by two, so the very first one is for the column, the second one is for row.
>
> **[2:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=152)** For the LCD type that we're using, we have two rows and 16 column.
>
> **[2:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=156)** The way we number them is a zero for the first row and one for the second row, and the numbers for the column goes from zero to 15.
>
> **[2:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=166)** So if you want to show a sentence and you want to start from the first row then you need to set the cursor to be in a position zero, zero.
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=175)** The same thing if you wanna show it in the second row then the set cursor to be in a zero, one.
>
> **[3:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=181)** So the first one is for the column and the second is for the rows.
>
> **[3:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=186)** So for our program I'm going to set the cursor to LCD, set cursor to be in the first column and the first row.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=198)** So zero zero for our example.
>
> **[3:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=202)** Now the other command in order to show the sentence or show anything on this screen, we are going to use an LCD print.
>
> **[3:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=213)** And then I place any sentence I would like to see it on the LCD.
>
> **[3:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=217)** So here I'm going to use Arduino is fun.
>
> **[3:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=224)** Okay, we use a quotation mark when we want to place the sentence.
>
> **[3:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=229)** And then I'm going to add a delay at the end, just to make things a little bit clear.
>
> **[3:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=237)** Alright, so this is the code for the LCD, so go ahead and upload the program.
>
> **[4:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=243)** Alright so you can see that the sentence is showing in the first row.
>
> **[4:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=248)** Alright so I'm going to give it a try, to see it in the second row, so the only thing you need to change is the set cursor code.
>
> **[4:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=255)** So instead of having a zero zero, I'll have a zero one and then I'll upload the program again to see that.
>
> **[4:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=263)** Okay so we can see that the sentence is showing in the second row.
>
> **[4:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-the-lcd-interface?u=76281980&t=268)** Alright so done the first coding for the LCD.

> [!info]- Semantic Content
>
> **Env Vars:** lcd (15)
> **Definitions:** is a  (4)
> **Code Keywords:** this, (1), try, (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### Optional review: Understanding "for" loops
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=0)** - [Instructor] In our LCD example we are going to use a for loop.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=3)** So, in case it has been a while since you used a for loop, I'm going to go through that format in order to refresh your memory about it.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=12)** So for loop starts with for and we have initialization.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=20)** And the initialization is basically, where do we start the for loop and then, we have the condition, and in the condition we specify how many times we want the for loop to get executed.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=36)** And then finally, the way we do the increments.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=43)** And then we add whatever the code we want inside the two brackets.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=47)** So lets take an example where we use a simple for loop, so initialization, I'm going to use integer value of counter, and remember in initialization I need to specify where I'm starting so in our example I'm going to start from zero.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=64)** So the initial value is zero.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=68)** So now according to how many times you want the loop to execute, you change the condition accordingly.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=73)** So for example, if I want the counter to execute 10 times and in the condition I specify that the counter is less than 10, remember that we started from zero, so zero all the way to nine which is less that 10.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=90)** And then finally is the way we increment, so if we're using the very simple one is that counter and then we add plus plus so with an adrenal you either write counter plus plus or if you want to write it counter equals plus one, this indicating that the counter is incremented by one.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=113)** So I'm going to use a serial monitor just to show how this program works.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=117)** Again, remember that when we use a serial monitor we need to specify the communication rate.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=130)** And in order to show the values in the serial monitor we're going to use a serial print in.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=137)** And I'm going to use a serial print in, a new line and ending with one ln.
>
> **[2:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=142)** And the value that I want to see is the counter.
>
> **[2:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=147)** So lets hit on the program in order to see how this program works.
>
> **[2:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=153)** So I notice here that the values goes from zero, which is the initialization all the way, according to the condition, to nine.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=161)** Because in the condition we specify that the counter should be less than 10 then 10 is not included.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=167)** So now, according to the number of outputs of number of increments, I can specify the condition So for example, if I want to show all the way to 20, then I change the condition, again you download the program And this shows all the way to 19.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=192)** I'll try to show you what happens when we change the increment value, so if we go with two this will deduce the number of outputs for the serial monitor.
>
> **[3:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-for-loops?u=76281980&t=206)** To five values, so depending on the logic that you wanted your program to run, you can either change the condition or the increments.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (5)
> **Analogies:** for example (2)
> **Code Keywords:** finally, (1)
> **Env Vars:** lcd (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Optional review: Understanding arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=0)** - So for the next example using the LCD, I'm going to use an Array in order to demonstrate how to populate the data.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=6)** If you're familiar with arrays, feel free to skip this video, but if you want to refresh your memory about what an array is, I'm going to go through the basics.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=15)** An array stores multiple data values for the same data type in a block of memory, allowing you to access the elements within the array by referring to the variable name.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=27)** So you can think about it as a drawer with a certain number of sections, and inside each section is an array element.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=34)** The drawer has a name, which is the array name.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=38)** So now let's go through how to declare an array.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=41)** The way to declare an array is by specifying the type of the element, which can be double, integer, whatever the type is, and then specifying the array name, and finally the array size.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=55)** The array size should be an integer above zero.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=60)** So this is an example that declares an array variable called myArray that stores up to 10 integer values.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=68)** Initializing an array is by assigning the element depending on the array size, so basically identifying where are the elements within this array?
>
> **[1:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=78)** So here's an example of an array that stores up to five values, five elements.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=84)** The number of elements within the array can not be larger than the size.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=88)** So here, since we identify the array to be an integer, then the elements within the array are Integer type.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=95)** The way the variables, or elements are numbered by indicating an array index.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=102)** The first element has an array index of zero, the second one has an array index of one, and so on.
>
> **[1:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=110)** So the array element is different than the array index.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-understanding-arrays?u=76281980&t=116)** So if you'd like to learn more about the array and how to access the array, you can check the website that's provided by Arduino.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), type. (1)
> **Definitions:** is an  (2)
> **Code Identifiers:** myarray (1)
> **Env Vars:** lcd (1)
> **Speakers:** - so (1)

#### Displaying random numbers and scrolling
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=0)** - [Instructor] Alright, so I've covered arrays and I've covered a for loop.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=4)** So let's try and have some fun in trying to implement a for loop where we generate a random number and try to display that in the lcd.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=11)** So I want you to go ahead and open the file 0108 lcd starter project.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=19)** And in the starter project, I've kinda included things that we've covered in the previous example.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=23)** So in line four, we initialize the pins and line six is the lcd function.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=29)** So let's start by declaring an array type integer that has 27 values.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=35)** So int and I'll name it as a random number array and it takes up to 27 values.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=45)** So I've chose 27 because it's a number of the character that we can see in each line of the lcd type that we're using.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=53)** Alright so we've initialized the array so let's go and start coding.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=59)** So the very first thing that I wanna to specify is where I wanna show the numbers.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=64)** Do I wanna show them in the first line or the second line?
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=67)** So I'll use the first one for simplicity.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=75)** Alright, so for the for loop I'll have an int value i starting from zero.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=83)** Now i is less than 27 because we want to show the characters from zero to 27.
>
> **[1:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=89)** And then i is incrementing by one.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=97)** Alright, so in order to generate a random number, the way we do that is random and then I specify that I want the numbers to be from zero to nine.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=111)** And I'm gonna take this and save it an array.
>
> **[1:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=114)** So the array type that we specified is random number array and I want that to be selected any time I use the for loop.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=125)** Okay, so this line basically does a random number gets generated that's between zero and nine and it gets saved in an array index.
>
> **[2:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=135)** Alright, so I'll take that and try to see it on the screen.
>
> **[2:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=139)** So lcd print.
>
> **[2:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=141)** And I wanna print the random number that we just got.
>
> **[2:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=152)** Okay, I'm gonna add another code just to make it a little bit clean when we see that on the screen.
>
> **[2:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=158)** So I'll add a space between the numbers as we go through it.
>
> **[2:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=162)** And I'll add a delay of 250.
>
> **[2:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=168)** So go ahead and upload the program and see how this code behaves.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=174)** So as you can see now, random numbers are getting generated starting from the first row and the rest of them are showing in the second row.
>
> **[3:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=183)** Notice here that we can only see up to 16 characters.
>
> **[3:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=187)** One of the ways if we want to see all the numbers that are in the 27 characters is using a scroll display function.
>
> **[3:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=195)** So let's go back in the code and add this right in here where we have an lcd scroll display and we have an option of either scroll to the left or right.
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=210)** So I'm gonna use left, for example.
>
> **[3:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=215)** So the code that you can see in line 22, so it scrolls through the 27 characters that we have in each line of the lcd that we're using.
>
> **[3:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=223)** So go ahead and upload the program.
>
> **[3:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=228)** Alright, so now we can see that we are scrolling through the characters that we have in all the 27 spots in each line.
>
> **[3:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=235)** Okay, so we've used the for loop in order to populate the array with random numbers.
>
> **[4:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/displaying-random-numbers-and-scrolling?u=76281980&t=240)** And we used lcd print in order to see them on the lcd screen.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2)
> **Exercise Files:** starter project (2)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Interface with a 7-Segment LED Directly

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of the 7-segment LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980&t=0)** - [Instructor] Now, in this part of the course, I'm going to use the seven-segment LED with Arduino.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980&t=5)** I'll be doing this in three parts.
>
> **[0:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980&t=8)** First, just introducing the seven-segment LED and connecting it to Arduino in order to see how it works.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980&t=14)** Second, using the software in order to show numbers and letters by understanding the truth table of the seven-segment LED.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980&t=22)** Finally, we're going to use the seven-segment LED with the shift register.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/overview-of-the-7-segment-led?u=76281980&t=28)** We'll be covering some programming concepts like loops and arrays and when we are using the shift register.

> [!info]- Semantic Content
>
> **Env Vars:** led (4)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### The 7-segment LED component
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=0)** - [Woman] The 7-segment LED consists of LEDs, light-emitting diodes, that are arranged in a rectangular fashion.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=9)** Each LED within the 7-segment display is an individual LED that has a cathode and anode side.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=17)** An additional LED is sometimes used to refer to the decimal point.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=22)** Each LED has a letter that we refer to when programming.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=25)** We use a combination of LEDs to show the different numbers or letters.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=31)** So, if you want to show zero, we would turn on the LEDS shown on the left.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=36)** And if you want to show one, we would turn on the LEDs shown on the right.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=41)** And the same thing applies to any other number or letter.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=46)** This is the layout of the 7-segment LED that we are going to use in this section.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=50)** The top and bottom are the pin numbers, and each pin is connected to a specific LED.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=58)** So pin 7, for example, is connected to LED a.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=62)** And the cc pin is referring to the common pin, so it's a common cathode or a common anode, depending on the type.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=70)** There are different types of 7-segment LEDs, and each has its own layout.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-7-segment-led-component?u=76281980&t=76)** The LED letters are in the same places in each one, but the difference is in the pin layouts.

> [!info]- Semantic Content
>
> **Env Vars:** led (9), leds (1)
> **Code Keywords:** type. (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [woman] (1)

#### 7-segment LED display types
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=0)** - [Narrator] There are two common types of 7-segment LED, a common cathode and a common anode.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=6)** Let's examine the difference between each type.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=10)** Remember that each LED within the 7-segment is an individual LED that has a cathode and anode side.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=18)** A common anode type simply means having a common power supply VCC for the 7-segment LED, as you can see.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=26)** This means that all LEDs inside the 7-segment display share the same voltage source and have a common anode side.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=36)** So for the common pin, this is connected to the voltage supply according to the voltage limitation for each 7-segment LED component.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=45)** Since all the anode connections of the LEDs are joined together to the VCC, this means their regular state is one high.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=55)** And the individual LEDs are illuminated by connecting the individual cathode side to a low signal.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=61)** So we send low in order to turn each LED on.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=66)** For the common cathode, all LEDs have a common ground, a common cathode side.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=73)** Knowing the differences between the two types helps in wiring as well as in coding.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=79)** So for the common cathode, the common pin is connected to ground.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=85)** And again, since all the cathode connections of the LEDs are joined together to ground, which means their logic is zero low.
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/7-segment-led-display-types?u=76281980&t=93)** So in order to illuminate the individual LEDs is by connecting the individual anode terminal to a high signal.

> [!info]- Semantic Content
>
> **Env Vars:** led (6), vcc (2)
> **Code Keywords:** let (1), type. (1)
> **Definitions:** is an  (1), means that (1)
> **Tools:** terminal (1)
> **Speakers:** - [narrator] (1)

#### Checking a 7-segment LED type
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=0)** - [Narrator] The 7-segment LED, they come in in different size and different shapes.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=4)** One of the ways in order to know if it's a common cathode or common anode is checking the data sheet of the part number.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=10)** So you can check the part number for each 7-segment LED.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=16)** Another method, if you don't have access to the datasheet, is using the multimeter.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=22)** So let's go ahead and try to use the multimeter to test the 7-segment LED.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=26)** So I'm going to use this component.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=29)** So when using the multimeter, the very first thing that you need to do is using the com probe of the multimeter, and use that in the middle pin, which is the common pin of the 7-segment LED.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=42)** The other thing is that you need to make sure that you have the multimeter to the LED sign over here.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=49)** And then check it on that it has the LED sign over here.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=55)** So once you place the common pin, use the other probe of the multimeter in order to turn on each of the LEDs.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=63)** So I'm going to go ahead and try to see if the LED turn on.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=70)** So if you can see that once I place the anode side, the individual LED turn on.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=79)** And you can do the same thing if you want to test for a common anode.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/checking-a-7-segment-led-type?u=76281980&t=82)** The only thing that you need to do is you need to place, instead of having the ground in here, you use the anode and test for the other port.

> [!info]- Semantic Content
>
> **Env Vars:** led (8)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [narrator] (1)

#### Wiring up the 7-segment LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=0)** - [Narrator] So now in this section, we're going to go through the wiring of the seven segment LED to the Arduino board.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=7)** Since the seven segment LED has seven LEDs so we need the resistor when we connect the seven segment LED to Arduino.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=16)** Again, the only difference between having a common anode and a common cathode is that the common pin within the seven segment LED is connected to five volt if we're using a common anode, and is connected to ground if we're using a common cathode.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=33)** We're going to use a common anode for our example, so let's see how we do the wiring.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=38)** So for the wiring part we are going to follow the table that's shown in the screen.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=42)** So for example, for the seven segment LED pin a, which is pin seven, is going to be connected to pin two, to the digital IO in the Arduino board.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=54)** Pin b, which is pin six in the seven segment LED, is going to be connected to pin three, and so on for the rest of them.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=61)** So let's go ahead and do the wiring for the seven segment.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=65)** So I've included a picture of the wiring diagram in the exercise file if you wanna check it out for the complete wiring of the seven segment LED to the Arduino board.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=75)** So the very first thing that I usually try to do is I try to connect the common pins.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=80)** The way to know the numbers is that, using the dot in here, So this is the bottom pins and this is the top one.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=88)** Let's go ahead and start to do the common pin.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=90)** So this is the middle that goes to the five volt.
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=93)** The same thing with the top.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=104)** So now I'm going to use the resistor in order to connect pin a in pin seven in the seven segment LED.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=111)** So one side of the resistor goes to the pin a.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=116)** The other side goes anywhere in the breadboard.
>
> **[2:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=120)** And I'm using a 270 resistor for the seven segment LED.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=125)** You can use any other resistor, the common ones is a 330 ohm, but you can use any values between 200 and 500 ohm.
>
> **[2:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=135)** Alright, so we got the resistor, now we connect that to pin 2 in the Arduino board.
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=146)** This way.
>
> **[2:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=148)** So now we are going to use the same thing for the seven segment pin six which is for the b LED.
>
> **[2:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=163)** So one side of the resistor goes to the pin six in the seven segment LED and the other side goes anywhere in the breadboard but make sure that it is in a different column than the previous one.
>
> **[2:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=177)** So again, the other side is connected to pin three in the Arduino board.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=192)** And you do the same for the rest of the LEDs.
>
> **[3:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=199)** So pin four, from the seven segment LED goes to pin four within the Arduino.
>
> **[3:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=215)** So why don't you go ahead and try to connect the other pins to the Arduino board.
>
> **[3:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=220)** I'm going to try to finish the wiring connections so you can check that out once you're done.
>
> **[3:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=229)** So now we're done the wiring for the seven segment LED, and note here since I'm using the bottom side and the top side of the breadboards, I need to give a connection between the bottom and top, so we do the connection this way.
>
> **[4:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=251)** And now the last part left is connecting the VCC to the five volt within the Arduino board.
>
> **[4:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=265)** So here we have a five volt, gets into the breadboard, and we have a connection to the common anode, from the top and bottom, and it's already connected using this way.
>
> **[4:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-7-segment-led?u=76281980&t=279)** Alright, so the last part is connecting the Arduino board to the computer, and let's start programming.

> [!info]- Semantic Content
>
> **Env Vars:** led (13), vcc (1)
> **Code Keywords:** let (4)
> **Analogies:** for example (1), picture (1)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Cycle through each LED directly
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=0)** - [Instructor] Okay, so the very first thing when we do the coding for the seven segment LED is to identify the pins.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=7)** So I'll go ahead and start the Pin A.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=9)** So in the Pin A I'll add it as a constant integer.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=13)** And then I'll name it as ledPinA, and this one is connected to Pin 2 in the Arduino board.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=22)** I'll do the same thing for the other pin, so constant integer ledPinB, and it's connected to Pin 3 in the Arduino board.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=34)** So I'm going to go ahead and copy the other pins.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=43)** So C is connected to 4.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=50)** D is connected to 5.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=58)** E to 6.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=62)** G to 7.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=64)** And finally, F to 8.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=70)** So here we've identified what are the pins that's connected to each one of the LED.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=75)** The second step is setting up the pins to be an output.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=79)** So we do this in the void setup by setting up the pinMode.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=87)** So now since we have identified the pins at the beginning, so I can just go ahead and write down the name for Pin 2.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=96)** And then I identify this as an OUTPUT.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=101)** So I'll do the same thing for the rest of the pins.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=108)** Okay, and then just change the pin.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=113)** So one thing that I want you to make sure is that you use the same name that you selected in here.
>
> **[1:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=119)** So I'll go ahead and continue for the rest of them.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=129)** Alright, so we got this part done, so now each LED is set to be an output from the digital output of the Arduino board.
>
> **[2:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=139)** The main program is happening in the void loop.
>
> **[2:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=142)** So now since we're using a common anode, remember that the individual LEDS within a common anode are illuminated by sending a LOW signal.
>
> **[2:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=152)** So when we do the programming, if we want to turn on each LED, the way we do it is we write a digitalWrite because we are connecting to the IO as a digital output.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=167)** Then we specify the LED that we want to turn it on.
>
> **[2:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=173)** And sending a LOW signal in order to turn it on.
>
> **[2:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=177)** So this code to turn on the LED.
>
> **[3:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=184)** And in order to turn off the LED, we write digitalWrite, again, the same name.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=198)** And then we send HIGH signal.
>
> **[3:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=202)** I usually like to add a delay between the operation in order to make it a little bit nicer when you see it.
>
> **[3:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=211)** So this one, this code simply does turns on LED A, a delay, and turns off the LED.
>
> **[3:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=221)** We can do the same thing for the rest of the LEDs, so I'll go ahead and program it for the second one so the only thing that you need to change is the ledPin.
>
> **[3:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=234)** Over here, so this other code, it does turn on the LED, and then a delay, and off.
>
> **[4:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=240)** A good practice is that you turn off all the LEDs before you even start.
>
> **[4:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=245)** So I'll go ahead and turn off all the LEDs in the beginning.
>
> **[4:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=265)** So this one turns off the first LED, here turns off the second LED, and I'll copy-paste for the rest of them.
>
> **[4:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=289)** Okay, so I'm going to continue to program the other LEDs.
>
> **[4:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=294)** Again, we're doing the same thing, we're turning the LED on, and turning it off.
>
> **[5:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=300)** Okay, so I'm going to go ahead and continue programming, why don't you give it a try and then we'll see how it works at the end.
>
> **[5:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=316)** So now I'm done with the coding part, I'm going to download the program.
>
> **[5:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-each-led-directly?u=76281980&t=324)** Okay, so now we can see that it turns on and off each LED, and that insuring that our code works, and the wiring is good.

> [!info]- Semantic Content
>
> **Env Vars:** led (14), low (2), output (1), leds (1), high (1)
> **Code Identifiers:** digitalwrite (2), ledpina (1), ledpinb (1), pinmode (1), ledpin (1)
> **Code Keywords:** continue (3), finally, (1)
> **CLI Commands:** make (2)
> **Exercise Files:** download the (1)
> **Best Practices:** good practice (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Cycle through LEDs with a for loop
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=0)** - So in the previous video, we kind of copy and paste a lot of the code so let's try to use a for loop in order to reduce the code that we tried in the previous example.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=10)** Since we did the wiring for the Arduino board, from two all the way to eight, so we can take advantage of using a for loop where we can start from two all the way to eight.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=19)** So let's see how we can do that in the coding parts.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=23)** So I'll give it a start in here.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=26)** On line 13 all the way to line 19, the only thing that's being changed is the LED parts.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=34)** So you notice here it's A, B, C, D.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=37)** So since we do the wiring from two all the way to eight, so we can use a for loop.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=46)** So in the for loop, I'm going to go ahead and initialize a starting point.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=53)** I'll name it equals to two because the pins are connected from two.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=58)** And then I is less than nine because I want the number to stop at eight.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=63)** And then finally the increment would be just one.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=69)** Now inside the for loop, I write down the pin mode.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=76)** And then place i here, the one that keep changes, and then add it as an output.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=84)** So this for loop is at a placement for everything we have in here.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=91)** Okay.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=92)** So we can do the same thing for turning off all the LEDs.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=97)** A for loop.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=104)** Okay.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=111)** And now the thing that we need to place inside the loop is digitalWrite.
>
> **[2:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=120)** And i is the number that keeps changing.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=123)** And we want to set everything off.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=128)** And this will replace all the code that we have.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=132)** So now this code works exactly the same way as the previous example.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=137)** So you can download it and test it on your device.
>
> **[2:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=140)** We usually try to use a for loop when it's possible.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/cycle-through-leds-with-a-for-loop?u=76281980&t=144)** It's the preferred way than just copying and pasting a large chunk of code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Code Identifiers:** digitalwrite (1)
> **Env Vars:** led (1)
> **Cross-References:** previous video (1)
> **Speakers:** - so (1)

#### Understanding the 7-segment LED truth table
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=0)** - [Narrator] Alright, so we've learned how to turn on or off the individual LEDs for the 7-Segment Display.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=6)** Next, let's see how to display numbers and letters.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=11)** In order to do so, let's generate the truth table for the 7-segment LED.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=17)** For a common cathode, as mentioned previously, all pins are connected to ground, so their normal state is zero, low.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=26)** If we want to make one of the LEDs turn on, then we need to set the anode side to one, high.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=34)** So for example, if we want to show one, then the LED, the segments B and C, need to be on and the rest of the LEDs should be off.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=45)** The same thing applies if you want to show number 2.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=47)** Then LED A, B, G, E, D need to be on.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=54)** And the same thing applies for the rest of the numbers.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=56)** Since this is a common cathode device, we need to send high, a logic one, and everything else is zero.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=65)** And this is what we call the truth table for our common cathode LED.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=70)** So now let's examine the truth table for the common anode.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=74)** For a common anode device, the anodes of LEDs are connected to VCC and their normal state is one, high.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=82)** So it works the opposite way.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=85)** So if we want to turn on any of the LEDs, then we need to make the state zero, low.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=91)** An example, if we want to show a number one, then LED B and C receive a low value.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=98)** And the same thing applies for any other number.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=101)** The specific segments are zero and the rest are 1.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=107)** So the truth tables for the common anode and common cathode devices are the same, but the difference is that for the common cathode we send high and for common anode we send low.
>
> **[2:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=120)** You can use the same concept if you want to show letters.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-7-segment-led-truth-table?u=76281980&t=123)** So you just need to figure out the truth table for each letter.

> [!info]- Semantic Content
>
> **Env Vars:** led (5), vcc (1)
> **Code Keywords:** let (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Coding 7-segment display showing numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=0)** - [Instructor] All right, so now since we're using the same common anode from Sigmadel AD we're going to keep the same wiring for it, and I know to use the same file that we used in a previous example.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=11)** So we are going to keep the code from line 2 all the way to line 9, because we are keeping the identifying pins and also we're keeping the code for line 13 to line 18 as we are identifying the pins to be an output.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=27)** Now let's start coding to show zero.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=32)** To show zero, I need LED A, B, C, D, E, F to be on.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=39)** So we're setting low for these LEDs.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=43)** So I'm going to keep code 23 to 27 to turn off LEDs to start with and let's erase everything we had before.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=53)** To just kind of start from the beginning.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=58)** Alright, so usually like to add a delay before I start the next letter so I'll add a delay of one second.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=69)** And I'll start coding to display zero.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=74)** So for display zero, digital write and then I specify the LEDs that I want the to be on and I'm sending low.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=91)** Okay, so I'm going to copy and paste the same code but I'm just changing the pins that I want them to be on.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=102)** Here I want B, C to be on, D, E, and finally F.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=121)** Okay, so this is the code in order to display zero.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=125)** I usually like to again to add a delay in order to be able to see them between each number.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=132)** And to display one, display one.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=144)** So for display one, I need LED B and C to be on.
>
> **[2:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=150)** So I'm going to copy the code that I had previously.
>
> **[2:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=158)** So B and C.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=160)** So usually I like to turn off LED as well between each number so I'll copy the code from 23 all the way to 27 and kind of placing that between each number.
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=175)** Alright, so I'm going to go ahead and implement the other numbers as well.
>
> **[3:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=180)** So you'll have an exercise file, a sketch that includes all the number if you wanna implement that too.
>
> **[3:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=186)** So after you're done coding, so we are going to download the program to the our arena and see how it works.
>
> **[3:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/coding-7-segment-display-showing-numbers?u=76281980&t=193)** As you can see now, the numbers are showing on the seven segment LED according to the code that we wrote.

> [!info]- Semantic Content
>
> **Env Vars:** led (4)
> **Code Keywords:** let (2)
> **Exercise Files:** exercise file (1), download the (1)
> **Speakers:** - [instructor] (1)


### 3. Interface with a 7-Segment LED Using a Shift Register

> [↑ Back to Table of Contents](#table-of-contents)

#### Understanding the shift register
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=0)** - [Narrator] In the previous example, we used seven digital pins for the seven-segment LED.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=5)** As you can imagine, this may lead to you running out of pins on your Arduino board.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=11)** One of the ways you can deal with this is by using a shift register.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=16)** There are many types of shift registers.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=18)** Each is used for a certain application.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=21)** I'm going to use a serial in - parallel out shift register.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=25)** So, in this example, I'm using a 4-bit shift register.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=29)** You can think about it like four drawers.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=32)** Each drawer contains one bit.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=36)** So, in this example, I have a binary number that's a one-zero-one-one.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=41)** The shift register takes each bit, one at a time, and moves it in between the drawers.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=48)** At the first clock cycle, the least significant bit enters the shift register.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=54)** The second clock cycle, the bit moves into the second drawer, and the next bit enters.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=61)** And then, the third, and the fourth.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=64)** Note here that the order of the most significant bit and the least significant bit stays the same.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=71)** Now, the shift register takes the bits as a serial input, and output them in parallel.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=79)** But you cannot do this instantaneously. It takes time.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=83)** This is a clock diagram to better visualize how bits are loaded into the register.
>
> **[1:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=89)** We see at the top, our clock signal, with the times t0 through t5 as the rising edges.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=97)** Loading the bit happens on the rising edge.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=101)** So, on the first clock cycle, at t0, the least significant bit moves into drawer A.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=107)** Then, at the second clock cycle, at t1, the bit moves into drawer B, and the next bit is loaded into the shift register.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=116)** And the same thing happens in t2 and t3.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=121)** At the end of the four clock cycles, the bits are shifted, keeping the same order, the least significant bit and the most significant bit.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=130)** So, for our 4-bit shift register, it takes four clock cycles.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-the-shift-register?u=76281980&t=137)** And if we had an 8-bit shift register, it would take eight clock cycles to load the eight bits of data.

> [!info]- Semantic Content
>
> **Env Vars:** led (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### MC74HC595A shift register overview
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=0)** - [Instructor] Let's take a look at how to wire up our shift register to Arduino board.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=5)** The shift register we're using is MC74HC595A, which is a serial-in, parallel-out shift register.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=17)** The MC shift register consists of eight-bit shift register.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=22)** The eight output bits are referred to as QA through QH.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=28)** And sometimes we refer to them as Q zero up to Q seven, depends on the type.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=35)** The serial data is loaded in at pin A Data Serial In, and the parallel data is available at pins QA all the way through QH.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=46)** If we only have four bits in, the shift register will shift only four bits out.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=52)** And we can control the state of our LEDs by connecting them to the output pins of the shift register.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/mc74hc595a-shift-register-overview?u=76281980&t=60)** Let's get started by wiring up our data and clock signals to the Arduino board.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (1)
> **Env Vars:** mc74hc595a (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Wire up the input and clock signals
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=0)** - Okay, so let's give it a start.
>
> **[0:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=2)** Let's start connecting pin number 14 in the shift register, which is the data serial in, and you are going to connect it to the Arduino board pin number eight.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=13)** Alright so the way to note the numbers within the shift register is by using the indication, the dot over here.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=19)** So you start from number one, two, three, all the way to eight, and then the other side, nine all the way to 16.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=28)** So we're using pin number 14, over here, and this one goes to pin number 8.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=42)** Now we'll talk about how to control the inputs.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=45)** We're using two essential pins.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=47)** First is the shift clock, which is pin number 11 in the shift register.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=53)** Data is shifted on a low-to-high transition of the shift register clock input.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=59)** And we're going to connect this to pin 11 in the Arduino board.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=81)** The second clock is the latch clock, which is pin number 12 in the shift register.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=87)** This input latches the shift register data.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=91)** The data in the shift register is transferred to the storage register on a low-to-high transition of the storage latch input.
>
> **[1:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=100)** And we're connecting this to pin 10 in the Arduino board.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-input-and-clock-signals?u=76281980&t=115)** Alright, so we've connected the three pins from the Arduino board, so let's continue wiring of the shift register.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (1)
> **Speakers:** - okay (1)

#### Wire up the signals for VCC and GND
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=0)** - [Instructor] Alright, so let's continue wiring by taking care of the pins that are connected to either VCC or ground within the shift register.
>
> **[0:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=8)** Okay, so we connect pin number 16 to the five volt within our adrenal board.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=13)** Always check the data sheet to check the voltage limitation.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=16)** This shift register accept two volt and a maximum of six volt.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=22)** So I'm going to connect all the voltage supplied to this rail over here in the breadboard.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=28)** And I will connect that later to the adrenal.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=31)** So we're doing the VCC.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=38)** And then I'll take that and add it to the five volt within our adrenal.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=48)** Now, the second step is connecting ground, which is pin 8, to the ground of the adrenal board.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=56)** Okay, so I'm going to do the same thing, I'll try to connect the ground to this side of the breadboard.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=67)** And to connect the two sides of the breadboard, I'm going to connect the ground to ground and then VCC to VCC if we need to use it later.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=83)** Okay, so the last step is connecting the ground here to the ground of the adrenal board.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=94)** Okay, so let's continue wiring.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=96)** The reset pin, which is pin number 10, is active when it's low.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=101)** So a low on the reset pin will reset the shift register.
>
> **[1:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=106)** And because we don't want to reset the data, we need not to activate it, and to keep it high.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=112)** So we are going to connect it to the five volt within the adrenal board.
>
> **[2:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=120)** So we're connecting pin 10 to the five volt.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=128)** Alright, so for the output enable, which is pin number 13, it is active when it's low.
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=134)** so I need to keep it low in order to make sure that the data gets shifted to the PERL out.
>
> **[2:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=140)** So this pin, we are going to connect at the ground to make sure that stays low the whole time.
>
> **[2:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=148)** So pin 13 which is over here, we are going to connect it to ground.
>
> **[2:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-signals-for-vcc-and-gnd?u=76281980&t=162)** So that's takes care of connecting the shift register to the adrenal board and making sure that we've got the VCC and the ground for all the pins.

> [!info]- Semantic Content
>
> **Env Vars:** vcc (5), perl (1)
> **Code Keywords:** let (2), continue (2)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Wire up the 7-segment LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=0)** - [Narrator] Alright, so now let's go through the wiring of the shift register to the seven-segment LED.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=5)** I'm going to follow the wiring according to this table.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=9)** So on top, you can see the pin letter and the pin number of the shift register and the corresponding pin letter and the pin number of the seven-segment LED on the bottom.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=19)** So you can choose to connect the seven segment differently but you need to consider this, in programming the Arduino board, so the most significant bit and the least significant bit.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=28)** This wiring is for the most significant bit first.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=33)** Alright, so the first one, we need to connect pin number seven from the shift register to pin number seven and the seven-segment LED.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=44)** Okay, so the very first thing that I'd like to do is to make sure that since we're using a common anno disk to get the common pins connected.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=52)** So the middle one goes to five volts DCC and the bottom common pin goes to five volt as well.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=67)** Alright, so the very first pin that I'm going to connect is pin number seven which is Qh in the shift register to pin number seven in the seven-segment LED.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=82)** So this is Qh and I need it to go to pin a.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=96)** And then Qg from the shift register goes to pin b which is pin number six in the seven-segment LED.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=105)** So let's do the wiring.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=123)** So why don't you give it a try and try to do the wiring according to the table that you see and you can check the wiring at the end of this video.
>
> **[2:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=131)** Okay, so now I'm done the wiring for the seven-segment LED.
>
> **[2:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wire-up-the-7-segment-led?u=76281980&t=135)** So let's go ahead and do some programming.

> [!info]- Semantic Content
>
> **Env Vars:** led (6), dcc (1)
> **Code Keywords:** let (3), this, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Initializing pins for the shift register
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=0)** - [Instructor] Okay so to start the coding for this part I've provided you with a starter project for this section.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=5)** So go ahead and open 03_06_starter_project file from the exercise files.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=12)** So, the exercise file looks like this one.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=15)** So, the very first thing that we need to do, is we need to identify the three pins that we connected to the shift register.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=22)** So, the very first one is constant integer, is the dataPin and we connected that to pin number eight in our Arduino board.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=35)** The second one is constant int, the latchPin that lives in pin number 10.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=44)** And finally, the shift clock pin, and I will name it as constant int clockPin, and that one's connected to pin 11.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=54)** Okay, so the next part now, is trying to get the combination in order to show the numbers.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=61)** So, this is the truth table for the common added LED that we are using.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=65)** So, in order to get the binary number, you simply take each of the combination and place a zero B in front of it.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=75)** You can check the website, the Arduino website, if you would like to know how to enter it in a different format let's say a hexadecimal or numbers.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=83)** So, for the binary number, we are going to take the numbers and put them in an array.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=90)** In the starting project file, I already added the numbers, so here is the combination for number zero.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=97)** The second one is a combination for number one, and so on.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=101)** Try to keep them in order, because this will make sure that the numbers will show in orders when we use the seven segment LED.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=109)** Okay, so now we got the pins identified, lines three to five, we got an array that's giving to it a data array, and it's a size of 10 because we are using numbers from zero to nine.
>
> **[2:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=122)** So, let's continue coding, so, now the next part, is we need to identify the pin mode.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=128)** So, the pin mode is for the three pins we're using, we consider them as an output.
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=134)** So, pinMode latchpin and it's an output.
>
> **[2:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=143)** And I'll do the same for the rest of the pins.
>
> **[2:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=163)** Alright, so, we've got the pins initialized, the array including the numbers tat we want to show, and then we set up the pin modes.
>
> **[2:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/initializing-pins-for-the-shift-register?u=76281980&t=171)** So, next, we are going to program the shifters in order to show the numbers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), continue (1)
> **Code Identifiers:** datapin (1), latchpin (1), clockpin (1), pinmode (1)
> **Exercise Files:** starter project (1), exercise files (1), exercise file (1)
> **Env Vars:** led (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### The shiftOut command
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=0)** - Okay, so for the command that we're using in order to code the shift register, is a shiftOut command.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=9)** ShiftOut command simply shifts out bits of data one at a time, so starting from either the most significant, or the least significant.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=18)** The command has the following syntax: so you start with a dataPin, clockPin, and then the bitOrder if you're doing most significant or least significant, and finally, the data.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=28)** So let's go ahead and do the coding for it.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=35)** Okay, so this is the shiftOut.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=37)** Then we write down the dataPin, clockPin.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=43)** Now in the bit order, it's either most significant or least significant.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=47)** The way we did the wiring was for the most significant bit, so we go with most significant bit first, and then finally the data that we'd like to show.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=57)** And in our case, we're trying to show the numbers that you see in line nine to ten.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=62)** So I'm going to go ahead and write down the array name.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=70)** So now since I want to show the numbers from zero to nine, so I want to go through the array, I want it to go through index zero, one, two, three.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=80)** I'm going to use a for-loop in order to go through the index within the array.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=84)** So here I'm using a for-loop, so 'for'.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=90)** Okay, so I'm going to initialize the index, and we're starting from zero, and index value is less than 10.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=102)** And then finally, the way we increment it is by adding one to it.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=107)** Okay, so now we started the for-loop.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=111)** Now we need to make sure that we add the value of the index within the array.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=117)** So here, I'm going to add an index.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=121)** So this line, line 25, simply shift out the bit that we have in the array to get them out starting from the most significant bit.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=132)** Alright, so when using a shiftOut command with the shift register, we need to make sure that the clock latch bin is called 'low' before using the shiftOut command, and then 'high' after using the shiftOut command.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=144)** So in order to do so, I'm going to use a digitalWrite, and then specify the latchPin to 'low' before the command, and then call it 'high' after the command.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=161)** Okay, so you're gonna do the same thing, but after the shiftOut command, but this time we are going to call it to 'high'.
>
> **[2:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=172)** And then I usually like to add a delay at the end just to make it a little bit nicer when you see the numbers showing in the seven segment LED.
>
> **[3:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=183)** And then that's it.
>
> **[3:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=184)** We've done the coding for the shift register, so go ahead and download the program to Arduino board and see how it works.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/the-shiftout-command?u=76281980&t=192)** Okay, so you can see the number showing on the seven segment LED and using only three output from the Arduino board.

> [!info]- Semantic Content
>
> **Code Identifiers:** shiftout (6), datapin (2), clockpin (2), bitorder (1), digitalwrite (1)
> **Code Keywords:** finally, (2), let (1), case, (1)
> **CLI Commands:** make (3)
> **Env Vars:** led (2)
> **Definitions:** is a  (1), is called (1)
> **Exercise Files:** download the (1)
> **Speakers:** - okay (1)


### 4. Interface with a Keypad

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to the keypad interface
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=0)** - [Narrator] A keypad is a common hardware interface so let's see how we can set up one with our Arduino board.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=7)** The keypad type we're using is four by three which means four rows and three columns.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=14)** Each point is a pushbutton arranged this way.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=19)** Each pushbutton is an active low type.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=22)** This is the arrangement for an active low pushbutton.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=25)** We have a voltage source, VCC, and a resistor.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=29)** We call the resistor a pull-up resistor, then a pushbutton connected to ground.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=35)** And in order to read the value of the active low pushbutton we connect the controller pin between the pull-up resistor and the pushbutton.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=44)** Active low simply means when the switch or the pushbutton is closed or pressed, it sends a low signal to the microcontroller.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=53)** So as the name says it, when it's active, it sends a low signal.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=58)** When the switch is not pressed, it sends a high signal.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=63)** An active low pushbutton uses a pull-up resistor.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=66)** It pulls up the value to high when it's not pressed.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=71)** The keypad is separated into rows and columns.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=75)** All columns and rows are active low.
>
> **[1:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=78)** So when they are not pressed, they send a high signal to the microcontroller.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=84)** So when pressing the specific button on the keypad, the program, Arduino, receives a two low signals.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=92)** And this how the program knows exactly what number is pressed.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=96)** So in this case, row two and column two receive a low signal.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=102)** And this is how the Arduino knows that we've pressed number five.
>
> **[1:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=106)** Our keypad is wired this way.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=109)** The right hand side of the connecting ribbon is reserved for the columns.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=113)** So column one, two and three.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=116)** The left hand side is reserved for the rows.
>
> **[1:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/introduction-to-the-keypad-interface?u=76281980&t=119)** Row one, two, three and four.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), interface (1), let (1), type. (1), case, (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** vcc (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Wiring up the keypad
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=0)** - [Instructor] Alright, so let's do the wiring of the keypad to Arduino board.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=5)** So, we are going to use the pins, two to five, in order to reserve for the rows, and then six, seven, eight, for the columns.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=14)** So, this is the keypad we are using.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=16)** And then I'm going to use pins two, all the way to eight.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=30)** For the second part, we are going to use three LEDs, and we are going to use a keypad to control each one of them.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=36)** So I'm going to connect the LEDs for pin nine, 10, and 11.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=44)** So for the LEDs I'm going to use a resistor and the value that I am going to use is 330 ohm.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=50)** You can use any values between 200 and 500 if you don't have this specific one.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=56)** So the red LED is going to be connected to pin nine.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=66)** The blue one is connected to pin 10.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=79)** And finally, the yellow one is connected to pin 11.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=91)** So note here that one side of the LED is connected to the pin, and the other side is connected to ground.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=98)** So we need to connect the ground, to the Arduino board.
>
> **[1:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/wiring-up-the-keypad?u=76281980&t=110)** So now we've done the wirings, so let's cover some of the programming concept that we need for the keypad, before we start actually coding.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** led (2)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Optional review: IF statement
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=0)** - [Instructor] So if you are familiar with the if statement you can skip this video, and go to the next one, but if you want to refresh your memory about what an if statement is I'm gonna go briefly, and explain what it is.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=10)** The most type of constructor command is the if statement.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=16)** The if statement checks for a condition, and executes the proceeding statement, or set of statements, if the condition is true.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=25)** Or simply skips the statement to the next line if that condition is not true.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=31)** The condition is a Boolean type.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=33)** So it's either true or false.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=36)** Here's a simple example of using an if statement to check a value if it's greater than hundred.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=41)** So whenever the value is greater than 100 we have a digitalWrite to a certain pin to be on.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=47)** In the if statement it simply checks a condition, and then executes the code.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=52)** There's no increments in the if statement.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=55)** If the if statement you only have one option of whether or not to run the statement.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=60)** If the condition is not true then the compiler moves to the next statement in the program.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=66)** The else provides another group of command in the if statement.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=70)** So if the first condition is not true then the else statement gets executed.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=76)** The statement after the else keyword only processes when the condition is false.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-if-statement?u=76281980&t=83)** You can also have multiple else if condition as needed.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1)
> **Code Identifiers:** digitalwrite (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Optional review: The switch...case statement
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=0)** - [Instructor] All right, so I'm going to go through the switch...case statement.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=3)** If you are familiar with the concept, you can skip this video, but if you want to refresh your memory about what the concept is, I'm going to go through the concept briefly.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=13)** So one of the structure commands used within Arduino is a switch...case statement.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=18)** Oftentimes, we might need to compare a variable against several possible values.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=23)** For example, the keypad we're using, so we might need to have an assorted output to be associated when we press certain numbers on the keypad.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=32)** The switch statement uses a standard if...then style condition to evaluate for results.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=39)** The Arduino jumps to the matching case statement in the code, skipping over the other case statements.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=46)** You can have a default statement at the end of the switch statement code block.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=50)** The Arduino software jumps to the default statement when none of the cases matches the results.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=58)** So we use switch...case statement if we want to control the flow of the program, or if we want to switch between different states.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=66)** So if case one is true, then the program executes statement under case one.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=71)** The same thing applies for any other cases.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=73)** So instead of writing a long series of else...if statement, we can just use a switch...case statement.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=80)** You need to add a break at the end of each case.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=83)** Otherwise, the Arduino software continues to process any code that appears after the case, including the other case statements.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/optional-review-the-switch-case-statement?u=76281980&t=92)** Adding a break will cause the Arduino software to jump out of that switch statement after each specific case is done.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (8), if. (1), else. (1), case. (1), case, (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Understanding two-dimensional arrays
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=0)** - [Instructor] I'm going to use the two-dimensional array concept when declaring the keypad buttons.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=5)** So I'm going to go through explaining what a two-dimensional array is.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=10)** Two-dimensional array that uses different columns and different rows.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=15)** So this is how we write a two-dimensional array.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=17)** First, we specify the type.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=19)** That could be an integer, a double.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=22)** Then, we declare the name that we wanted to choose for this two-dimensional array, and then, the number of rows and the number of columns.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=31)** The number of rows and columns need to be an integer above zero.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=37)** So here's an example of an integer two-dimensional array.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=40)** I chose the name to be MyArray.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=42)** That has three rows and two columns.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=47)** So I initialize the array to have these values: one and two, four and five, six and seven.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=54)** The way we write them within the array is that the first value are for the first row, the second set of values are for the second row, and so on.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=64)** So each element within the array has a row and a column reference.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=69)** The first row and column is row zero column zero, including the array name.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=76)** So for example, if I want to know the element that has this reference, then I know that it's referring to number five.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=84)** Here are the references for each number within the array.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=87)** So why don't you take a second in order to see what each reference represents within this specific array?
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=95)** All right, so here is another example of using a character array.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=98)** Note here that I'm using a single quote marks around each letter as I want the letter to be declared as a character.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=107)** We're going to use the two-dimensional array concept to save the data of the keypad.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/understanding-two-dimensional-arrays?u=76281980&t=112)** So each character within the keypad is saved in a character two-dimensional array.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Setup the keypad library
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=0)** - [Instructor] Often times when you use the keypad component, you need to include the library in the Arduino software.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=7)** In order to check if you have the library or not, you go to Sketch, Include Library, and then look around if you see the keypad library.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=16)** If you don't see it around, then you need to download it from the website.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=20)** To do so, you need to go to this website, so you need to download this zip file.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=29)** And then once downloaded, you go to Download, then unzip the file.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=40)** Alright, so once you have the folder, you need to move it to the libraries within the Arduino software.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=49)** So you go where is Arduino, Libraries, and then you place it in here.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=57)** Alright, so let's go back and check if we have the library within the software.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=61)** You might need to restart the software again, so just open a new one.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=75)** Alright, so you go and check if you have the library now.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=81)** See, we have the keypad now.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=84)** Sometimes, if cannot even see it in here, the way to do it is you go to Manage Libraries, and then simply search for the keypad.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=99)** And then download any of the libraries available.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=105)** I usually go with this one, and then I install it.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=109)** And then once you do this step, you'll have the library included in the software, so to include the library, you go here, move all the way to keypad.
>
> **[2:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=120)** So you go to Sketch, Include Library, Keypad, and then you'll see the library included.
>
> **[2:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/setup-the-keypad-library?u=76281980&t=126)** Okay, so now the software is ready, let's start to do some coding.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5)
> **Code Keywords:** let (2)
> **CLI Commands:** unzip (1)
> **Exercise Files:** zip file (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### HelloKeypad
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=0)** - [Instructor] So once you download the keypad library, you will have an example that comes in within the library itself.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=6)** So in order to access the examples, you go to file, examples, and then scroll down all the way to the keypad.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=16)** I'll select Hello Keypad for our example here.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=21)** So we're using this example for our keypad.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=24)** I just need to make some changes along the way according to the wiring that we did.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=29)** All right, so I'm going to explain the code of this example in order to understand how the keypad function works.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=36)** So, in line 10, we see that we need to include the library when we deal with the keypad.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=41)** It's included in here.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=43)** Line 12 and line 13 is initializing rows and columns of timed bytes.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=49)** The rows and columns are for the keypad, so we're using 4 by 3 Key pad, so four rows and three columns.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=57)** So, both rows and columns are tad bytes.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=61)** The reason for selecting tad byte is that byte is unassigned integer that has a value of 0 to 255.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=69)** The reason why we select the byte is that we know that the rows and columns values will be between zero and 255.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=77)** There is a way to minimize their memory usage within the Arduino software.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=82)** On line 14 is where we're identifying the two dimensional array of the key pad we are using.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=87)** So, the two dimensional array is that character, the name for the array is keys, and then we have rows and columns.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=95)** In line 20, we're now identifying the wiring of the rows.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=99)** So, go ahead and make the changes according to the one that we did.
>
> **[1:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=103)** So, for the rows, we use two to five.
>
> **[1:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=106)** So two, three, four, and five.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=111)** Again, you need to keep it in order.
>
> **[1:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=114)** And then for line 21, we need to identify the columns, so I'm going to go ahead and 1 to 5 according to our wiring.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=125)** All right.
>
> **[2:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=127)** In line 23, this is the main key pad function.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=130)** So, the key pad function starts from here.
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=134)** This is identifying a name for that key pad.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=138)** So, the name that you find here after make key map should correspond to the same array name that we are going to find here.
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=146)** So, if we make any changes, then, the name should change accordingly.
>
> **[2:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=153)** Here is the rowPins array, the one that we have in line 20.
>
> **[2:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=159)** For column pins, it's whatever we have in line 21.
>
> **[2:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=163)** And finally, rows and columns corresponding to whatever we have in line 12 and 13.
>
> **[2:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=172)** Now in line 26, we initialize the communication between the Arduino board and the serial monitor.
>
> **[2:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=178)** Notice here that once we use the serial monitor, once we initialize the communication, we can not use pins zero and one within the Arduino board.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=189)** In line 30, the command that we usually use to get whatever value, once we press on the keypad, is getKey.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=198)** So, this takes whatever value of that specific key pad that we selected, so the name here corresponds to the name over here.
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=210)** So if we change the name over here, then you make the changes accordingly.
>
> **[3:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=215)** So, this function, everything here takes whatever we press on the key pad and saves it in a character value named Key.
>
> **[3:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=225)** Line 32 is whenever we have the value in that character key, then simply just print it in the serial monitor using a serial print in, and then the value is key.
>
> **[4:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=240)** All right.
>
> **[4:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=241)** So, this whole code is simply doing whatever we press any button on the key pad, we see it on the serial monitor.
>
> **[4:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=251)** So, let's go ahead and upload the program to the Arduino board.
>
> **[4:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=254)** Now, once you're done downloading, you can click on the serial monitor that you have over here.
>
> **[4:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=264)** Okay, so I'm going to go ahead and adjust it.
>
> **[4:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/hellokeypad?u=76281980&t=268)** Let's use, let's say number three for example, and you can see it on the monitor and we'll just select different numbers five and eight, and you can just see them on the serial monitor.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), finally, (1)
> **CLI Commands:** make (5), find (2)
> **UI Navigation:** go to (1), scroll down (1), select the (1), click on (1)
> **Code Identifiers:** rowpins (1), getkey (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using the keypad with LEDs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=0)** - [Instructor] All right, so now, we've got the keypad working the software.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=3)** Let's continue programming our case where we have three LEDs.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=7)** So, what we want to do is we want to program the software that when we press one, the red LED turns on, when we press two, the blue LED turns on, and when we press three, the last one, the yellow LED turns on and zero turns off everything.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=23)** So, in the code I'm going to go scroll up and identify the LEDs first.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=30)** So, I'm going to write that down.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=32)** So, if there are constant int, the red LED is connected to pin nine.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=45)** Then blue LED is connected to 10.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=53)** And finally, the yellow one is connected to 11.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=58)** All right, so now the next step is in the void setup.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=62)** I need to identify the pins as outputs.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=67)** So, red, and to copy and paste the code and just change the pin.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=92)** All right.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=94)** So now, what I want, whenever we press on the keypad is whenever we have a value, and that's already initialized in the line 32, if we have a value in the key then something needs to happen.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=108)** So, I'm going to use the switch case in this example.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=113)** Switch and then I'm using key over here.
>
> **[1:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=119)** And then I'll start them case one.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=123)** All right, for case one, whenever we press on number one, then we need the red light to turn on.
>
> **[2:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=133)** So, digital write, red LED, and then we're sending high value.
>
> **[2:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=142)** I'm gonna add a delay just in order to be able to see it.
>
> **[2:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=149)** Okay, and remember that at the end of each case, we need to add a break in order to finish the certain case.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=157)** So, I'm going to go ahead and finish the other two cases.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=160)** So, I'll copy here.
>
> **[2:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=170)** Now, the second case is whenever we have number two.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=174)** So, I'm gonna go underneath the blue LED to turn on.
>
> **[3:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=181)** I'll do the same thing for case three.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=189)** So, whenever we have number three, I want the last LED to turn on.
>
> **[3:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=196)** All right, so the final case is whenever we press on zero, everything turns off.
>
> **[3:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=202)** So, case zero.
>
> **[3:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=209)** So, I'm going to copy the code here and place it over here for the digital write.
>
> **[3:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=216)** And I need this to be off.
>
> **[3:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=219)** The same thing for the other ones.
>
> **[3:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=231)** And then finally, the last one.
>
> **[3:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=239)** And then this case is to turn off all LEDs.
>
> **[4:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=248)** Again, I need to add a break at the end of the case in order to finish it.
>
> **[4:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=253)** And I'm going to just add before that, delay, just to keep it consistent.
>
> **[4:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=261)** All right, so just upload the program and see how it works.
>
> **[4:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=268)** All right, so let's test the program.
>
> **[4:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=272)** So, once we press on number one, the red LED turns on.
>
> **[4:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=280)** Then number two and number three.
>
> **[4:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=284)** Now, if I want them all to be off, I simply press on zero.
>
> **[4:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=290)** And then with the switch case example, you can select any case, the order doesn't matter.
>
> **[5:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/using-the-keypad-with-leds?u=76281980&t=301)** Okay, so with this we successfully wired the keypad to the LEDs.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3), let (2), finally, (2), case, (2), continue (1)
> **Env Vars:** led (9)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Combine the keypad and 7-segment LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=0)** - [Instructor] Alright, for this part, we are going to use the seven segment LED with a keypad.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=6)** So I'm going to use the same wiring that I did previously, so I'll go ahead and connect the pins that are coming in from the shift register.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=13)** So the databank goes to pin number eight, then 10, and then, finally, the last one is to 11.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=26)** For the keypad, I'm going to connect it to the pins over at this side.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=32)** So pins 22 all the way to 34.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=37)** Finally, I'm going to connect the positive and negative...
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=48)** So that the five-volt goes in here, and then the ground to the other side.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=56)** So I'm going to go ahead and start coding.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=60)** So you can open the file, that's 04_09_Keypad_7SegLED_Start in project.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=66)** So you can see the code from line two all the way to line 18 is corresponding to the keypad.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=74)** It's very similar to what we did in the previous example.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=77)** The only difference is in line 15 and 16.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=81)** You can see that here, it corresponds to the pins that we connected the keypad to.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=88)** In line 21, 22, and 23, you are identifying the pins that we connected to the shift register.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=95)** In line 25, we'll have the array that includes the number from zero all the way to nine.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=102)** For the void setup, line 30, 31, and 32 will identify the pins to an output.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=109)** And then you can see, in line 40, this is the command in order to get, every time we press on one of the buttons on the keypad, here, you can see that the name, I chose a different name this time, the name that you can see for the keypad is the same name that you can see in line 18.
>
> **[2:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=131)** So the code simply, on line 40, takes whatever we press and saves it in a character value named keypressed.
>
> **[2:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=141)** So now we want to program the software in a way that, whenever we press a number on the keypad, it shows on the seven segment LED.
>
> **[2:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=150)** So the very first thing I'm going to do is I'm going to convert the values that we received from the keypad into a string value.
>
> **[2:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=159)** So I'm going to go ahead and initialize a value named KeyNumber.
>
> **[2:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=166)** And the value that we want to change is the keypressed.
>
> **[2:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=172)** Now, the second step is initializing an index value that, whenever we press on the keypad, we take that value and convert it into an integer number.
>
> **[3:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=183)** So, int index=KeyNumber, and the command to do so is toInt.
>
> **[3:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=196)** So what we have done so far is add, in line 40, whenever we press on the keypad, convert it into a character value, then we convert it back to a string, and then finally into an integer.
>
> **[3:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=209)** Now we are going to use the index in order to toggle down between the numbers that we have in the array.
>
> **[3:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=214)** In order to do so, I'm going to identify an integer variable so I'm going to do this outside the if statement.
>
> **[3:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=221)** So, set int, I'll name it as a keycode, and we're starting from zero.
>
> **[3:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=228)** Now I'll go back to the if statement, and this keycode is actually a number within the array.
>
> **[3:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=236)** So, dataArray, the name of the array, and then the index is the value that we pressed on the keypad.
>
> **[4:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=246)** So whenever we use a shift register, remember that we need to put the large pin into low, so digitalWrite, latchPin, LOW.
>
> **[4:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=262)** We need to do this every time we use a shiftOut command.
>
> **[4:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=265)** So the shiftOut command is very similar to what we did last time, where you need to identify the dataPin, clockPin,
>
> **[4:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=279)** and since we're using the same wiring, so it's in most significant bit first.
>
> **[4:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=284)** And then finally, the data that we are going to shift out using the shift register is the keycode.
>
> **[4:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=295)** Okay?
>
> **[4:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=296)** And just set the large pin to pi after the shiftOut command.
>
> **[5:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=307)** So now we've done the coding part, so go ahead and upload this into the Arduino board in order to see how the program works.
>
> **[5:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=318)** Okay, so let's give it a start.
>
> **[5:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=320)** So I'm going to press on number four.
>
> **[5:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=323)** I notice here that it shows on the seven segment LED, so you press any number, I'm going to press five, two.
>
> **[5:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=330)** And if I press on the star symbol or the hashtag, then we're using the two int command, and the two int command that converts everything to zero if we're not pressing any of the numbers.
>
> **[5:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-the-keypad-and-7-segment-led?u=76281980&t=342)** Okay, so we've done this part, and let's go into the next example.

> [!info]- Semantic Content
>
> **Code Identifiers:** shiftout (3), toint (1), dataarray (1), digitalwrite (1), latchpin (1)
> **Code Keywords:** finally, (3), let (2)
> **Env Vars:** led (3), low (1)
> **UI Navigation:** open the (1), toggle (1)
> **Analogies:** similar to (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Combine them all: LCD + keypad + LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=0)** - [Instructor] All right, so we've went through the three components, so now we are going to include the seven-segment LED with the LCD and the keypad.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=9)** So, we are going to keep the same wiring for the seven-segment LED, the same wiring for the LCD, and the same wiring for the keypad.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=18)** The only difference, however, is that so the shift clock, which is in pin eleven, the shift register, is going to be connected in pin nine in the Arduino board over here.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=28)** And it was previously connected to pin eleven, but I used pin eleven to connect it to the LCD.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=34)** So, if you are going to use two bread boards, exactly what I'm doing, so you need to keep the connection between the two bread boards, so the positive to the positive, and then key brand common.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=54)** So now, the last piece is connecting the five volt here and then ground to ground.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=69)** All right, so now we have the three components together connected to the Arduino board.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=76)** All right, so to start the coding, why don't you go ahead and open the file 0410 Keypad 7 segment LED LCD start project.
>
> **[1:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=86)** So in the code, you notice that line one and two including the two libraries that we need for the keypad and LCD, line five all the way to line 18 is for the initializing the keypad as we mentioned previously.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=101)** For line 21, 22, and 23, are for the shift register, so you'll notice here that the only change is that in line 23, that we're connecting to pin 9.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=111)** Line 25 is initializing the array, and line 29 is for the LCD.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=117)** Now, in the voice setup, we have to initial the pins as an output in line 33 all the way to 35.
>
> **[2:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=124)** And then for the LCD in line 37, it's a 16 by 2 LCD.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=129)** We're using the same tab, so we do not change anything in here.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=132)** And then, I set the cursor to start from the first line as you can see that in line 39.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=138)** Line 40 is that I have a simple sentence saying that enter the keypad number and then line 41, I sent the cursor to go to the 2nd row in order to show the numbers.
>
> **[2:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=150)** So, one thing that we need to do now, is that for the seven segment LED, is that we need to set it to be off in the beginning.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=157)** So, in order to do so, I'm going to scroll down and give the same code that we did in order to shift out the numbers that we covered previously.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=167)** So go ahead and copy that, and then go again in the voice setup.
>
> **[2:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=173)** Make sure that it's still in the voice set up.
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=175)** And I'm going to paste that.
>
> **[2:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=178)** So, the thing that I want is I want to push a value where everything is off, so I can do this by just having the binary number 0B, and then everything is off by sending one.
>
> **[3:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=191)** So, you need 8 bits.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=198)** All right, so now in the voice loop, the main program, it's everything that we've covered in the previous examples, so I'm keeping the same thing as it is.
>
> **[3:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=208)** The only thing that we need to do is in the if statement, that whenever we press on the keypad, we need to see it on the LCD screen.
>
> **[3:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=216)** So, simply adding LCD, print, and then the value that I want to see is the key pressed.
>
> **[3:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=227)** And that's it.
>
> **[3:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=228)** Let's upload the program and see how it works.
>
> **[3:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=235)** All right, so once you upload the program, you can see that the 7 segment LED is off, and that's what we want.
>
> **[4:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=241)** When you have a sentence in the LCD, so go ahead and punch in numbers, so I'll start with seven, and you can see it showing in the 7 segment LED as well as in the LCD.
>
> **[4:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=251)** I'll just punch in different numbers now and you can see all the numbers showing up over here.
>
> **[4:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=258)** All right, great job.
>
> **[4:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=259)** So now, we have included the three components, the key pad, the LCD and the 7 segment LED.
>
> **[4:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=264)** So why don't you give it a try and try to do a program where you can, for example, if you press the start or the hash tag, that resets both the LCD and the seven segment LED.
>
> **[4:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=274)** Or, you can do for example, that whenever you press on the numbers, that only the least number shows in here.
>
> **[4:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/combine-them-all-lcd-keypad-led?u=76281980&t=280)** It's always fun to play around with Arduino, so have fun!

> [!info]- Semantic Content
>
> **Env Vars:** lcd (14), led (8)
> **Prerequisites:** setup (2), set up (1)
> **Cross-References:** we mentioned (1), we covered (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-hardware/next-steps?u=76281980&t=3)** If you want to learn more about Arduino you can check out the library for my other Arduino courses like [[Learning Arduino- Interfacing with Analog Devices]],


## Instructor

- [[Zahraa Khalil]]

## Resources

- Exercise files available

## Skills Covered

- Arduino

## Path Context

### In [[Become an Arduino Developer]]
← [[Electronics Foundations- Basic Circuits]] | **4 of 11** | [[Electronics Foundations- Semiconductor Devices]] →

## Appears In

- [[Become an Arduino Developer]]

## Related Courses

_Courses sharing skills:_

- [[Arduino- Prototyping]] — Arduino
- [[Learning Arduino- Pulse Width Modulation]] — Arduino
- [[Learning Arduino- Interfacing with Analog Devices]] — Arduino
- [[Learning Arduino Foundations]] — Arduino

---

[↑ Back to top](#)