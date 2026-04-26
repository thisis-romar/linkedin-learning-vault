---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-arduino-pulse-width-modulation
url: "https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation"
duration_minutes: 76
duration: 1h 16m
level: Intermediate
updated: 9/30/2015
learners: 132419
skills:
  - Arduino
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFmJV_0Jz54qg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669931109?e=2147483647&amp;v=beta&amp;t=fsGXsszYjCbEzP4dRHnvAdfr_cUshhHTRyVt-q7Hbik"
linkedin_topic: Hardware
learning_paths:
  - '[[Become an Arduino Developer]]'
prev_courses:
  - '[[Learning Arduino- Interfacing with Analog Devices]]'
next_courses:
  - '[[Complete Guide to C Programming Foundations]]'
path_nav: '[{"path":"Become an Arduino Developer","position":7,"total":11,"prev":"Learning Arduino- Interfacing with Analog Devices","next":"Complete Guide to C Programming Foundations"}]'
path_count: 1
tags:
  - course
  - topic/hardware
  - topic/network-and-system-administration
  - topic/software-development
  - skill/arduino
status: not-started
created: 2026-04-21
---

![Learning Arduino: Pulse Width Modulation](https://media.licdn.com/dms/image/v2/C4E0DAQFmJV_0Jz54qg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669931109?e=2147483647&amp;v=beta&amp;t=fsGXsszYjCbEzP4dRHnvAdfr_cUshhHTRyVt-q7Hbik)

# Learning Arduino: Pulse Width Modulation

> Pulse width modulation (PWM) is an essential skill for connecting Arduino microcontrollers to motors or lights, providing a way to approximate analog voltage levels with digital signals. Using PWM, you can control and program the brightness of lights and the speed of motors—bringing your projects to life. Join Rae Hoyt in this course and learn how to harness the power of PWM to drive digital circu

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation) | 1h 16m | Intermediate | 132K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Rae Hoyt]]

## Resources

- Exercise files available

## Skills Covered

- Arduino

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=0)** - Have you ever dreamed of bringing the world around you to life?
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=3)** Whether it's driving a car, maintaining a garden or flashing lights to match a beat, automating a process can save you time and lead to deeper insight.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=13)** Pulse width Modulation is a tool used by leading technologists in every avenue of industry.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=20)** The Arduino is a small but powerful microcontroller that lets anyone apply this amazing technology to their own projects.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=28)** That's what this course is all about, creating interactive programs and circuits.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=33)** Hi, I'm Rae and I've been making, hacking and programming since grade school.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=38)** In this course, I'm going to show you a few ways to harness the power of Pulse width Modulation with the Arduino to make LEDs, Servos and motors react to input from the environment.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=50)** Along the way, I will introduce you to your new best friend, the multimeter, and help you to minimize the time you spend to bug in your code.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=59)** So, if you're ready, get out your breadboards.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/welcome?u=76281980&t=62)** It's time to start prototyping.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - have (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=0)** - Before you watch this course, there are a few things you need to know.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=5)** You need to have a working knowledge of Arduino.
>
> **[0:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=8)** If you know how to declare variables, call functions, and set up basic circuits, you should be good to go.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=15)** If you are new to Arduino, check out the course Up and Running with Arduino.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=21)** You'll also need to have some components to follow along with the examples.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=26)** I am using components from the Arduino Starter Kit.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=29)** I will be using LEDs, servos, motors, and various analog components.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/what-you-should-know?u=76281980&t=35)** If you have a basic Arduino kit, you probably have most of the components you'll need.

> [!info]- Semantic Content
>
> **Prerequisites:** you need to have (1), set up (1), you'll need (1)
> **Speakers:** - before (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-exercise-files?u=76281980&t=0)** - The exercise files I use in this course are organized by chapter.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-exercise-files?u=76281980&t=5)** However, most of the code I will demo is baked into the Arduino IDE, so there are only a few files for you to download.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-exercise-files?u=76281980&t=14)** You can also find wiring schematics and other reference material in the Exercise Files folder.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (2)
> **CLI Commands:** find (1)
> **Env Vars:** ide (1)
> **Speakers:** - the (1)

#### Challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=0)** - This course includes several videos called challenges.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=4)** Challenges are quick activities that give you a hands-on opportunity to practice and master what you've learned.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=11)** I'll start each challenge by describing your core objective for the activity.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=15)** If the challenge involves using any sample files, I'll tell you where to find them.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=21)** I'll also give you a rough estimate of how much time it should take you to complete the challenge.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=26)** When you've completed a challenge, make sure to watch the matching solution video.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=31)** In each solution, I'll show you how I solved the challenge and give you some of my thinking along the way.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=37)** Again, this is an opportunity for you to master what you've been learning.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenges?u=76281980&t=42)** It's also a great opportunity to have some fun.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - this (1)


### 1. Introduction to Pulse-Width Modulation (PWM)

#### Exploring the fundamentals of PWM
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=0)** - Pulse-Width Modulation or PWM is a very simple but important principle of electronics.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=6)** PWM is used in many industries, but regardless of application, the theory remains the same.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=12)** PWM allows for analog like controlls through a digital circuit.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=17)** Digital circuits have two states on and off.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=20)** Similar to a light switch, there's no other option available.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=24)** Analog signals can be adjusted to any value from off to full power.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=29)** Similar to a dimmer switch on a light, the power level can be adjusted to any value between high and low.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=35)** This graphic outlines the various components of an electrical wave.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=39)** The Wavelength is how long it takes for a wave to complete one cycle.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=43)** This is also called frequency or period.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=46)** The Amplitude is the height of the wave.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=48)** In our case, 5 volts on the Arduino.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=51)** An important part of a Pulse Wave is the Duty Cycle.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=54)** Duty Cycle is the percentage of time the signal is high in the peroid of the wave.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=60)** In this wave, the Duty Cycle is 50 percent.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=63)** This is called a Square Wave meaning the signal is high for 50 percent of the Wavelength and low for the other 50 percent.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=70)** If the wave was high for 75 percent of the peroid and low for 25 percent of the period, we would say that that wave has a Duty Cycle of 75 percent.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=80)** This image shows an LED turned on with a Digital Right Command.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=84)** If you output a Pulse Wave from the Arduino with a 75 percent Duty Cycle to an LED, the LED would appear to be about 75 percent as bright as the LED that was simply turned on with the Digital Right Command.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=97)** At 50 percent, the LED is dimmer still.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=101)** Duty Cycle is the magic behind PWM.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=104)** On a high frequency wave, by adjusting the amount of time the signal is high, you can change the Average Voltage over time to get any value between high and low.
>
> **[1:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=114)** This is shown by the grey line.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=116)** The pulse gets steadily wider.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=118)** When I overlay this purple line, you can see that over time the Average Voltage steadily increases and then decreases.
>
> **[2:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=127)** Using this principle, you can adjust the brightness of an LED similar to an Analog controller.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=132)** Pulse-Width Modulation will also allow the Arduino to set the speed of a motor, or I can set the direction a servo is pointing.
>
> **[2:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/exploring-the-fundamentals-of-pwm?u=76281980&t=140)** Without PWM, these devices would only have two settings on or off.

> [!info]- Semantic Content
>
> **Env Vars:** led (6), pwm (5)
> **Code Keywords:** switch (2), case, (1)
> **Analogies:** similar to (3)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - pulse (1)

#### Using basic PWM output
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=0)** The first step in using PWM on the Arduino is to select a PWM pin.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=6)** On my board, there's a tilde next to the PWM pins.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=10)** Your board should be something similar, like an asterisk, or may even have PWM printed next to it.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=16)** If you are unsure, refer to the documentation for your board.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=21)** For this sketch, I have an LED plugged into pin nine with a resistor in series.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=27)** In the Arduino IDE, I will select File, Examples, Basics, BareMinimum.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=35)** From here, I need to declare a few variables and send PWM output to my LED.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=41)** First, I instantiate a new integer variable, LED nine, and assign a value of nine.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=48)** You should use a short descriptive name for your variables to increase the readability of your code.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=54)** I declared LED nine as a constant, meaning it is read-only.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=58)** This allows the compiler to optimize the code, saving memory.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=63)** This is a good habit to get into because the Arduino has a limited amount of storage space.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=69)** Variable naming conventions suggest all caps for constants.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=73)** This simply stands as a visual indicator that the variable is a constant without having to refer back to the declaration.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=81)** Generally with Arduino, I would next set pin nine to output with the pinMode() function.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=87)** That would be redundant with the use of the next function, analogWrite().
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=91)** AnalogWrite() takes care of setting the pin to output.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=97)** I'll use the analogWrite() function to set LED nine to 255.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=102)** AnalogWrite() accepts 8-bit values between zero and 255, the range of a single bite of data.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=109)** When I compile and upload this code, it should look no different than any other time I have turned on an LED with a basic digitalWrite() function.
>
> **[1:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=119)** The pulse wave being output through the Arduino is identical to the five-volt digital high output.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=125)** If I set the analogWrite() value to zero and re-upload, the LED is now off.
>
> **[2:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=133)** Now if I set the analogWrite() to a value of 127 and re-upload, the LED will appear about half as bright as it did at a value of 255.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=145)** The Arduino is outputting a high-frequency pulse wave with a duty cycle of 50%.
>
> **[2:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=151)** The perceived voltage is 2.5 volts.
>
> **[2:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=155)** You can see from trying many different values the brightness is adjusted accordingly.
>
> **[2:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=162)** Duty cycle can be roughly calculated by dividing the analogWrite() value by 256, the number of values available.
>
> **[2:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-basic-pwm-output?u=76281980&t=171)** Using this theory, I can adjust the output that is sent to any circuit on a PWM pin.

> [!info]- Semantic Content
>
> **Env Vars:** led (8), pwm (6), ide (1)
> **Code Identifiers:** analogwrite (5), pinmode (1), digitalwrite (1)
> **Code Keywords:** function (4)
> **Definitions:** is a  (2)
> **Versions:** 2.5 (1)
> **Documentation:** the documentation (1)

#### Faking PWM on a non-PWM pin
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=0)** - Although you can output variable PWM signals to the specified PWM pins, you can also fake very basic PWM output on the other digital-output pins.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=11)** This isn't something I would suggest doing for most projects, but it is a helpful step in understanding how PWM works.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=19)** By creating a loop to very quickly toggle the power on and off on a non-PWM pin, I can see what PWM is doing.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=28)** For this sketch, I have an LED plugged into pin 9 with a resistor in series.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=33)** I also have an LED plugged into pin 7.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=37)** In the Arduino IDE, I am going to select file, examples, basics, BareMinimum.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=45)** First, I'll instantiate constant integer variables to call the pins.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=51)** Next, I'll instantiate pin 7 as output.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=54)** In the loop, I'll call the analogWrite function for pin 9, and set the value to 127.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=61)** Now, I'm going to add a few lines of code for pin 7.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=65)** With a goal of matching the brightness of pin 9, first, I'll use the digitalWrite function to set pin 7 to an output of high or five volts, then I'll pause the program with a delay command.
>
> **[1:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=78)** To start, I will set that to a 1,000 or a delay of one second.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=83)** Then, I will call the digitalWrite function again, this time setting the output to low or zero volts.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=91)** Finally, I will add another delay.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=96)** If I upload this code, I see the LED on pin 9 with 50% brightness, and the LED on pin 7 turning on and off at a one-second interval.
>
> **[1:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=106)** Now for the fun part.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=108)** By increasing the speed of the loop, by decreasing the delay values, I can cycle the power so quickly that the wave form being produced on pin 7 will match the output on pin 9.
>
> **[2:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=120)** I'll change the values of the delay to one.
>
> **[2:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=124)** This will allow the loop to execute approximately 500 times a second.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=129)** When I upload the code, the LEDs now roughly match in brightness.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=136)** By looking at the code, I can see that the LED on pin 7 is on for one millisecond and then off for one millisecond.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=145)** The wave is high for 50% of the period of the wave, meaning the output has a duty cycle of 50%.
>
> **[2:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=152)** Now, let's say the value for pin 9 is 191.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=157)** To match the pulse wave on pin 7, the signal needs to be on for three quarters of the total wave.
>
> **[2:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=164)** So, to make this happen, I set the first delay to three and the second delay to one.
>
> **[2:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=170)** This makes the total-loop duration four milliseconds.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/faking-pwm-on-a-non-pwm-pin?u=76281980&t=174)** With the wave high for three milliseconds, I should again see roughly the same brightness.

> [!info]- Semantic Content
>
> **Env Vars:** pwm (6), led (5), ide (1)
> **Code Keywords:** function (3), finally, (1), let (1)
> **Code Identifiers:** digitalwrite (2), analogwrite (1)
> **CLI Commands:** make (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is a  (1)
> **Speakers:** - although (1)

#### Challenge: Matching PWM and non-PWM LED brightness
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=3)** - Okay folks, it's time for our first challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=7)** In this challenge, I want you to fake PWM output on a non-PWM pin to match the brightness of two LEDs.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=15)** In the exercise files, open 01_04 Challenge handout.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=20)** I have listed eight PWM values.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=23)** There's also a location to write in delay values for the non-PWM LED labeled A and B.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=31)** For each PWM value, calculate the duty cycle.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=34)** Then for each value, write down the number you think best fits A and B from the sample code block.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=42)** For values 1-4, calculate and document the values.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=46)** These values will make the LED too dim for you to see so don't worry about uploading the code to test.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=54)** For the values calculated for 5-8 take the time to upload the code to test.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=59)** You can find sample code for the project in the sketch 01_04 Challenge.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=64)** You will need an LED with a resistor in series on pins 7 and 9.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=70)** You goal is to match the pulse width modulated output of pin 9 on pin 7, so that the LEDs' brightness match.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=79)** Keep in mind that the delay values need to be very low for the loop to cycle quickly enough.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=84)** If you need to, round numbers to keep the delay values under 10.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=90)** This challenge should take you no more than 15 minutes.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=94)** When you're done, make sure to check out my solution video, where I'll show you how to solve this problem.

> [!info]- Semantic Content
>
> **Env Vars:** pwm (5), led (3)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** sample code (2), exercise files (1)
> **Code Keywords:** match. (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - okay (1)

#### Solution: Matching PWM and non-PWM LED brightness
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=3)** All right, let's take a look at the solution for this challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=7)** LEDs need approximately 3 volts before they begin to glow, which is why I had you calculate, but not test, values one through four.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=16)** Analog write values between zero and 100 will produce little to no light from most LEDs.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=23)** The first value is 26. 26 divided by 256 is .1, so the duty cycle is 10%.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=33)** My A value should be 10% of the total delay.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=37)** If A is one, then B could be nine.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=41)** This would produce a wave that is high 10% of the time.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=46)** The second value is 64. 64 divided by 256 is .25, so the duty cycle is 25%.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=55)** If A is one, then B could be three, producing a wave that is high 25% of the time.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=63)** The third value is 80. 80 divided by 256 is .31, so the duty cycle is 31%.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=72)** If I say A should be three, then B could be seven, producing a wave that is high 30% of the time.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=81)** The fourth value is 105. 105 divided by 256 is .37, so the duty cycle is 37%.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=92)** If A is two, then B should be three, producing a wave that is high 40% of the time.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=99)** Remember, the duty cycle values have to be low for you to see the LED flicker.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=105)** I've rounded to 40 in order to keep these values under 10.
>
> **[1:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=110)** With the next four values, I will also upload the code in the IDE.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=115)** The fifth value is 155. 155 divided by 256 is .6, so the duty cycle is 60%.
>
> **[2:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=126)** If A is three, then B should be two, producing a wave that is high 60% of the time.
>
> **[2:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=133)** In the IDE, I'll set V to 155.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=138)** My A value was three, and my B value was two.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=144)** I'll upload the code, and there we go.
>
> **[2:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=147)** We can see the LEDs are both the same brightness.
>
> **[2:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=151)** The sixth value is 180. 180 divided by 256 is .7, so the duty cycle is 70%.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=160)** If A is seven, then B should be three, producing a wave that is high 70% of the time.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=167)** Again, in the IDE, I'll put 170 for V, A is seven, and B is three.
>
> **[2:57](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=177)** When I upload, I can now see, again, the LEDs are the same brightness.
>
> **[3:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=183)** The seventh value is 205. 205 divided by 256 is .4, so the duty cycle is 80%.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=192)** If A is four, then B should be one, producing a wave that is high 80% of the time.
>
> **[3:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=200)** I'll set my values, and once again, the LEDs are equal.
>
> **[3:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=208)** All right, now for my last value.
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=210)** 231 divided by 256 is .9, so the duty cycle is 90%.
>
> **[3:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=217)** If A is nine, then B could be one, producing a wave that is high 90% of the time.
>
> **[3:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=224)** I'll set my values, and upload.
>
> **[3:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=227)** And there we go.
>
> **[3:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=230)** In each case, plugging the numbers into the sample code sets both LEDs to similar brightness levels.
>
> **[3:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=236)** This is likely something you won't do in a project, but it is an important step in understanding how PWM works.
>
> **[4:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-matching-pwm-and-non-pwm-led-brightness?u=76281980&t=245)** You can see from these tests, as the duty cycle is increased, the brightness of the LEDs also increases.

> [!info]- Semantic Content
>
> **Env Vars:** ide (3), led (1), pwm (1)
> **Code Keywords:** let (1), case, (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is an  (1)


### 2. Using Analog Inputs to Drive PWM Output

#### Introducing various analog inputs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=0)** - There are hundreds of different analog inputs but at their core, they all do the same thing.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=6)** They may monitor the temperature in a room, humidity in the air, or the acidity of soil.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=11)** But when you boil it down, each of these electrical components is simply a variable resistor.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=17)** The Arduino will listen for a five volt signal on the Arduino analog pin.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=22)** By adjusting resistance, more or less of the five volt signal passes through.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=27)** The Arduino interprets this voltage and assigns a value from zero to 1023.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=33)** How has that value changed?
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=35)** Well, it depends on the component.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=37)** There are many types of sensors, so your options are nearly limitless.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=41)** Let's look at four components that are used frequently with the Arduino.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=45)** Your components may have a different schematic, so always be sure to check the data sheet before plugging anything in.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=52)** A potentiometer is a simple knob that provides variable resistance.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=57)** As you turn the knob left and right, the resistance changes, which in turn changes the input value.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=64)** A dimmer switch on a light is a potentiometer.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=67)** There are three pins on this component.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=69)** The legs on either side are the two ends of a resistor and should be connected to power and ground.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=75)** As the knob is moved left and right, the path of least resistance is changed.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=80)** The center pin gets connected to the analog input.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=84)** Potentiometers come in many different shapes.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=87)** Some are knobs that rotate, others look like dimmer switches.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=91)** You may even see some that look like buttons.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=95)** A flex sensor, also called a bend sensor, is normally long and thin.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=99)** As you bend the sensor, the resistance changes.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=102)** If you took apart a joystick, you might find a flex sensor.
>
> **[1:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=106)** For the Arduino, I use a conductive ink-based bend sensor.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=111)** In this component, a thin strip of conductive ink is placed between two strips of copper.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=116)** As the component is bent, the ink is displaced, reducing the resistance to jump through the ink.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=123)** A photoelectric sensor senses light.
>
> **[2:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=126)** As the amount of light is changed, the resistance changes.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=130)** If your laptop automatically dims the screen when you turn the lights off, your laptop is using a photosensor.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=137)** This one works through a stunning scientific process.
>
> **[2:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=141)** The surface of the component is made out of a photon reactive material.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=145)** When photons, or light particles, hit the surface, electrons are disrupted.
>
> **[2:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=151)** The more electrons disrupted, the lower the resistance.
>
> **[2:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=155)** As the light gets dimmer, the electrons come back to rest and the resistance goes up.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=160)** To hook this up to your Aduino, you also need a resistor in parallel to the photosensor in the circuit.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=167)** The resistor will pull the value of the circuit back down to zero, stabilizing the signal and reducing noise.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=174)** A piezoelectric sensor, or piezo buzzer, detects changes in pressure, strain, or force.
>
> **[3:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=181)** The prefix "piezo" is Greek for "press" or "squeeze."
>
> **[3:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=185)** Piezo sensors are incredibly common, from audio pickups to thousands of automotive applications.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=192)** How does it work?
>
> **[3:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=194)** The secret is crystals.
>
> **[3:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=196)** A diaphragm absorbs energy and squeezes a crystal.
>
> **[3:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=200)** When the crystal is stressed, a charge is generated.
>
> **[3:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=203)** Piezos, like LEDs, have polarity so they only work in one direction.
>
> **[3:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=209)** Just as with the photosensor, you will also need to attach a resistor in parallel to the piezo.
>
> **[3:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=216)** Piezos are unique, as they can also be used as outputs.
>
> **[3:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=220)** If you send a signal through a piezo buzzer, you can create sound.
>
> **[3:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/introducing-various-analog-inputs?u=76281980&t=225)** With analog inputs, projects can now read and react to the environment dramatically.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), switch (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - there (1)

#### Understanding the basics of analog input
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=0)** - For this sketch, I'm going to use a potentiometer to adjust the value read on an analog input pin.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=6)** I have one lead of the potentiometer connected to five volts, the other side to ground, and the center lead connected to analog input pin zero.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=15)** In the Arduino IDE, I will select File, Examples, Basics, AnalogReadSerial.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=22)** There are three lines of code in this sketch that may be new to you.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=26)** First, in the setup function, we are initializing the serial monitor.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=31)** This opens a serial communication port between the Arduino and your computer.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=35)** The value of 9600 sets the maximum transfer rate of the serial port to 9600 bits per second.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=42)** This is called the Baud rate, which defines how quickly information is transferred in a communication channel.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=49)** A baud rate of 9600 allows 960 characters per second to be transferred.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=54)** For most applications, this transfer rate is sufficient.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=58)** The Arduino is capable of supporting baud rates up to 115,200, or 11,520 characters per second.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=67)** Next, the Arduino will read the value of analog input 0, and write it to a newly declared variable, sensor value.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=76)** Notice that A0 was not initialized by pin mode.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=80)** By default, the analog pins are set as inputs, listening for a value that you can check at any time.
>
> **[1:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=86)** Analog inputs can be declared as output pins and used as extra digital pins.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=91)** However, they do not have PWM implemented on them.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=95)** Finally, the value being read from the potentiometer is printed to the serial monitor with Serial.println.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=102)** This function prints whatever is contained in the parentheses to the serial monitor window, and then adds a character turn to the end of the line.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=111)** You will see this formatting when I open the serial monitor.
>
> **[1:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=114)** I will connect my board to the USB cable and select upload.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=118)** You will see two lights on the Arduino, marked Rx and Tx, flashing.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=123)** The program is now done uploading.
>
> **[2:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=126)** Those flickering lights are used for serial communication.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=130)** Serial devices require two pins.
>
> **[2:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=133)** The receiver, Rx, and the transmitter, Tx.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=138)** On the Arduino, Rx is connected over digital pin 0, while Tx is connected over digital pin 1.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=145)** If you had a circuit connected to these pins while you were using the serial monitor, it would be affected by the serial communication.
>
> **[2:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=152)** For this reason, it is important to use digital pins 0 and 1 last, after all of your other pins are in use.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=160)** In the Arduino IDE, I will click on the magnifying glass icon to launch the serial monitor.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=167)** Now, I am ready to begin interacting with the component.
>
> **[2:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=171)** I have twisted the potentiometer all the way to the left.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=174)** Since the left side of my potentiometer is connected to power, I should read a value of 1023.
>
> **[3:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=181)** As I twist the knob on the potentiometer, the value decreases.
>
> **[3:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=185)** Once I bottom out, I read a value of zero.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/understanding-the-basics-of-analog-input?u=76281980&t=189)** By adding just a few lines of code, I can use analog inputs to control my pulse width modulated components.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), default, (1), finally, (1), require (1)
> **Env Vars:** ide (2), pwm (1), usb (1)
> **UI Navigation:** open the (1), click on (1)
> **Definitions:** is called (1)
> **Prerequisites:** setup (1)
> **Speakers:** - for (1)

#### Finding logic bugs in your code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=0)** - Consider this.
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=1)** You are working on a project that calls for a potentiometer to control the brightness of an LED.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=7)** Once you upload your code, regardless of the position of the potentiometer, your LED remains off.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=13)** What's the problem?
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=15)** You could have a Logic Bug in your program.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=18)** Logic Bugs are tricky; they are the result of bad math, or faulty logic.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=23)** Because the code is technically sound, the compiler has no issues with it.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=28)** You just don't see the actions you expect when it executes.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=32)** Because it's so easy to make a simple mistake in your head, following along with the code, and doing the math by hand, often leads to logic errors.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=41)** To squash those bugs, I use the Serial Monitor.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=44)** While the Serial Monitor can simply be used to print information from the pins on the Arduino, it can also be useful in finding problems in your programming logic or physical components.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=56)** By printing additional information to the Serial Monitor, you can see how variables are being manipulated throughout your code.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=63)** In the Arduino IDE, I will select File, Examples, Basics, Read Analog Voltage.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=70)** In the loop of this program, a float variable is declared, and initialized with the mathematically equivalent voltage of the value read from A0.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=82)** A Float Variable can contain any numerical value, integer, or otherwise.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=87)** This includes non-whole numbers or numbers with digits to the right of the decimal place.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=92)** Float Variables are helpful in calculating accurate values from small numbers.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=98)** However, they take up twice as much space in memory as integers; 32 bits for 16.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=104)** Additionally, Floating Point calculations are highly resource intensive as compared to integer-based math.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=111)** It is also worth noting that when doing Floating Point math, the number used in your calculations, must include decimal points.
>
> **[1:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=119)** Otherwise the Arduino may treat the numbers as integers, producing incorrectly calculated values.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=125)** If I upload this code, and open the Serial Monitor, I can see the calculated voltage from the analog input.
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=134)** You can see, as I turn the potentiometer, that value changes over time.
>
> **[2:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=139)** Going back to the code, say perhaps I forgot to include those decimal points that are so important to my Floating Point math.
>
> **[2:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=149)** Now when I upload the code, my values are going to be poorly rounded to the nearest whole number.
>
> **[2:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=155)** I haven't moved the potentiometer since I last had the Serial Monitor open.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=160)** My value was 2 and change; now it's rounded down to 0.
>
> **[2:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=164)** The code still compiles, the Arduino runs, but the numbers are incorrect.
>
> **[2:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=170)** Regardless of the position of the potentiometer, the values are going to read 0.0.
>
> **[2:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=176)** Without the decimal place, 5 divided by 1023 is being rounded to the nearest whole number; 5 divided by 1023 is .00488.
>
> **[3:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=188)** This is rounded to 0 and anything times 0 equals 0, so the value of voltage is always 0.
>
> **[3:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=196)** In a more complex program, you can use the Serial Monitor to capture the value of a variable as it moves through a process.
>
> **[3:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=204)** Then, you can test the result yourself, without the worry of making a mistake.
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/finding-logic-bugs-in-your-code?u=76281980&t=210)** If the logic in the code gives you an undesirable result, it is easier to see what's going on, if you just listen to what the Serial Monitor has to say.

> [!info]- Semantic Content
>
> **Env Vars:** led (2), ide (1)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Versions:** 0.0 (1)
> **UI Navigation:** open the (1)
> **Speakers:** - consider (1)

#### Testing components with a multimeter
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=0)** - Few things hurt your ego more than spending an afternoon fighting your code, only to realize hours later that a bad component was causing all of your problems.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=10)** Electronic components are mass produced.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=13)** Most production facilities have some QA process components go through before they leave the factory, but bad components do slip through.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=22)** After the components leave the factory and spend months in transit, additional components will fail.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=28)** Between components that are dead on arrival, and those that fail under your watch, you will encounter bad components.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=36)** You can test for these with a Multimeter.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=39)** A Digital Multimeter measures voltage and resistance.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=43)** Digital simply means the information is presented digitally rather than through an analog gauge.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=49)** Next to your soldering iron, this is the most important tool in your repertoire.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=54)** Multimeters can cost thousands of dollars and are often giveaway or free with coupon tools on the low end.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=62)** While the expensive variants offer lots of functionality, for Aduino any multimeter will work.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=68)** There are seven function areas on my multimeter.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=72)** Three of which are essential to testing your circuits.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=75)** The first is the Diode Function, which can be used to test if a diode is working correctly.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=81)** It's great for testing in LED to see if it's burnt out.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=84)** Because diodes only work in one direction, it's important to connect it correctly to get an accurate reading.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=91)** The ohm function is for reading resistance.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=94)** There are five selections available, defining the range the multimeter is reading.
>
> **[1:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=100)** I want to select the lowest value that is greater than the component I'm testing.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=105)** Measuring a 10K resistor would require the 20K range.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=109)** If I select a value that is too low, the display will read one when I test the component, indicating that the value is outside of the current range.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=118)** Depending on the component, it may or may not be necessary to hook the leads up correctly.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=125)** The final essential function measures DC voltage.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=129)** This function also has five ranges.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=132)** If I hook up a power source like a 9 volt battery, I would select 20 as my range.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=138)** The remaining functions are used less frequently but come in handy when you need them.
>
> **[2:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=143)** The DC amp function is used to test for shorts and bad components.
>
> **[2:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=149)** Amperage is always tested in series with the circuit you are testing.
>
> **[2:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=154)** The AC volt function works the same as the DC volt function.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=157)** Many AC currents are dangerously high, at 110 or 220 volts in a household circuit.
>
> **[2:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=166)** A DC voltage would be more dangerous at those levels, however at the low DC voltage use with the Arduino, there's little to worry about.
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=175)** The 10 amp function is just like the DC amp function but for higher amperage.
>
> **[3:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=181)** Arduino projects rarely top a few amps.
>
> **[3:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=184)** To use the 10 amp function, move the ground lead to the 10 amp jack.
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=190)** The last function is the transistor function.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=192)** You have to connect the transistor correctly through the transistor jack as per your data sheet.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=198)** It's a fairly complex operation.
>
> **[3:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=200)** The best way to understand a multimeter is to use it.
>
> **[3:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/testing-components-with-a-multimeter?u=76281980&t=205)** You should become intimately familiar with yours so you can bend it to your will when you need it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), require (1)
> **Env Vars:** led (1)
> **UI Navigation:** select the (1)
> **Analogies:** just like (1)
> **Speakers:** - few (1)

#### Using the map function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=0)** - The Map Function is a powerful tool in your Arduino arsenal.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=4)** Map scales one range of linear values to another range.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=9)** This allows you to precisely align two value sets.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=13)** You can see this idea in action on a thermometer.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=16)** 0 degrees Celsius and 32 degrees Fahrenheit represent the same actual temperature, just in different systems.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=25)** If you wanted to use an analog input to control the brightness of an LED, you would need to use the map function or you would lose most of the resolution of the input.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=35)** Analog inputs read values from 0 to 1023.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=38)** The analogWrite function takes values from 0 to 255.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=43)** If you were to write this statement in a block of code, the LED would change in brightness as you adjust the analog input but as soon as your input value surpasses 255, the counter resets.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=56)** If your input value is 256, it would look like the LED is off.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=61)** At 510, the LED would be at full bightness again.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=65)** It will loop like this as the value increases.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=69)** The LED will not get any brighter and you lose the resolution of the full sweep of the potentiometer.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=75)** The map function takes five values as input.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=79)** The first is the value you would like to map.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=82)** The next two inputs are the high and low end of the original range.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=87)** The last two inputs are the high and low values of the new mapped range.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=92)** Let's say I wanted to map a value of five on a scale of 0 to 100 to a scale of 0 to 1,000.
>
> **[1:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=100)** 5 divided by 100 is .05 or 5 percent.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=105)** So the map function wants to find the value on the scale from 0 to 1,000 that is also 5 percent.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=112)** 1,000 times .05 is 50 so the new mapped value is 50.
>
> **[1:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=119)** Let's look at a more complex example.
>
> **[2:02](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=122)** Say I wanted to map a value of 36 on a scale of 0 to 855 to a scale of 0 to 50.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=130)** 36 divided by 855 is .042 or 4.2 percent.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=137)** 4.2 percent of 50 is 2.1 rounded to the closest integer is 2.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=144)** In the Arduino IDE, I will select File, Examples, Analog, AnalogInOutSerial.
>
> **[2:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=151)** This program starts with a few variable declarations.
>
> **[2:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=155)** One each for the analog input and output and two more to hold other values.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=161)** In the setup, the serial monitor is initialized.
>
> **[2:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=166)** Next, the value of the analog pin is red with analogRead and assigned to sensorValue.
>
> **[2:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=172)** Finally, we've come to the map function.
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=175)** Map takes sensorValue, the high and low range of the analog input pin 0 and 1023, and the high and low value of the map range 0 and 255 which also happen to be the high and low range of analogWrite.
>
> **[3:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=193)** sensorValue is mapped to this new range and assigned to outputValue.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=198)** Then the mapped value is called an analogWrite to set the brightness of an LED.
>
> **[3:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=204)** In this serial monitor, sensorValue and outputValue are printed so you can see the results.
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=210)** I'll upload the program and open the serial monitor.
>
> **[3:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=216)** You can see when the value of sensorValue is 0, outputValue is also 0.
>
> **[3:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-the-map-function?u=76281980&t=222)** As I turn the pententiometer and bring up the sensorValue, you can see that the scaled outputValue is also raised.

> [!info]- Semantic Content
>
> **Code Identifiers:** sensorvalue (6), outputvalue (4), analogwrite (3), analogread (1)
> **Code Keywords:** function (6), let (2), finally, (1)
> **Env Vars:** led (6), ide (1)
> **Versions:** 4.2 (2), 2.1 (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** setup (1)

#### Challenge: Understanding the math behind the map function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=3)** - Get your calculators out again.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=5)** It's time for another challenge.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=7)** In this challenge I want you to open 02_06 Challenge handout and fill in the blanks.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=13)** There are 10 values paired with the old and new ranges.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=17)** Your goal is to take each value and find the new mapped values.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=23)** Remember, the map function is simply finding the percentage from low to high in the original range, and mapping that to a value that is the same percentage from low to high in the new range.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=34)** All of these values are using the ranges from analogInput and analogWrite so that you can better understand what the Arduino is doing.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=42)** This challenge should take more than 10 minutes.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-understanding-the-math-behind-the-map-function?u=76281980&t=45)** Be sure to check out my solution video for the answers.

> [!info]- Semantic Content
>
> **Code Identifiers:** analoginput (1), analogwrite (1)
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Speakers:** - get (1)

#### Solution: Understanding the math behind the map function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=3)** - How did it go?
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=4)** Were you able to map all of the values?
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=7)** Let's take a quick look at the math to solve these problems.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=11)** The first value on the handout is 17.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=14)** 17 divided by 1023, is .0166, or 1.66 percent.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=22)** To keep the math simple, I'll round that up to two percent.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=26)** Two percent of 255 is 5.1, so the arduino will map that value to roughly five percent.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=33)** The next value is 58.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=36)** 58 divided by 1023 is .0566, or 5.66 percent, which I will round up to six percent.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=46)** Six percent of 255 is 15.3, so the arduino will map that value to roughly 15.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=54)** You can see the next three values in this table as well.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=57)** With each value increase, the scale number increases.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=61)** The final five values are calculated the same way.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=65)** When you are working with various inputs and outputs, it can be helpful to make tables like these as reference.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-understanding-the-math-behind-the-map-function?u=76281980&t=71)** They can be incredibly helpful when testing for logic bugs.

> [!info]- Semantic Content
>
> **Versions:** 1.66 (1), 5.1 (1), 5.66 (1), 15.3 (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - how (1)


### 3. LED and PWM

#### Fading an LED with PWM with code
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=0)** - [Voiceover] In this next example, I'm going to use the Arduino to slowly fade an LED in and out.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=6)** In the Arduino I-D-E, I will select file, examples, basics, fade.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=12)** With the use of the analog-right function, I can adjust the brightness of an LED.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=17)** By keeping track of the brightness and slowly adjusting that value, I can make an LED fade in and out.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=23)** In this program, three variables are declared.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=26)** LED, brightness, and fade amount.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=29)** In the set-up function, pin mode sets pin 9 as output, which, as I mentioned earlier, is unnecessary, as analog-right can handle that declaration.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=39)** In the loop, the brightness value is sent to the LED with the analog-right command.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=44)** The brightness value is then adjusted by fade amount.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=48)** In this case, five.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=50)** The program checks to see if the value of brightness is zero or 255.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=56)** If so, the Arduino sets fade value to the additive inverse of fade value.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=62)** The additive inverse of a number is the number, that when added to the number, yields zero.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=69)** So if fade amount equals five, the additive inverse is negative five.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=74)** The opposite is also true.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=77)** This happens first when the value reaches 255.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=80)** At this point, fade value is five.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=83)** Arduino changes the sign of the value making fade value negative five.
>
> **[1:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=89)** Now, each time the loop executes, the program adds negative five to brightness.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=94)** Once the value of brightness falls back to zero the condition rings true again.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=99)** This time, fade value is negative five.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=102)** So the Arduino again swaps the sign of the value, setting the fade value back to five.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=107)** This happens over and over again while the LED fades in and out.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=112)** When I upload and verify this code you can see that the LED gets brighter and dimmer over time.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=118)** Because this is happening in the loop, it will continue to execute until the Arduino is unplugged.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=125)** Back in the code, I'm going to change fade amount to 10.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=128)** I also need to change the upper bound of the if statement to 250.
>
> **[2:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=133)** Otherwise, the statement will never execute as true.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=137)** Now, when I reupload the code, you can see the fading happening faster.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=144)** I'll change the upper bound back to 255 and now I'll set the fade value to one.
>
> **[2:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=151)** When I upload this code, it now takes the LED longer to fade in and out.
>
> **[2:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=158)** However, when it fades all the way down it takes quite a while for it to turn back on.
>
> **[2:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=164)** This is because the LED appears off around the value of 100.
>
> **[2:49](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=169)** So I'm going to set the lower bound of the if statement to 100.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=174)** Now, the Arduino will not count down lower than 100.
>
> **[2:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/fading-an-led-with-pwm-with-code?u=76281980&t=179)** The LED still fades slowly, but only remains off for a few moments between pulses.

> [!info]- Semantic Content
>
> **Env Vars:** led (10)
> **Code Keywords:** function (2), case, (1), continue (1)
> **CLI Commands:** make (1)
> **Speakers:** - [voiceover] (1)

#### Calibrating an analog input to fade an LED precisely
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=0)** - Let's take a look at another great function in Arduino, constrain.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=5)** In the Arduino IDE, I will select File, Examples, Analog, Calibration.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=11)** For this sketch, I have a potentiometer attached to A0.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=15)** I also have an LED with a resistor in series attached to pin 9.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=20)** This sketch also calls for an LED on pin 13.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=24)** My board has an onboard LED on pin 13, so I will not set up another LED on the breadboard.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=31)** This program changes the brightness of an LED based on the value being red from analog 0.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=37)** However, it begins by going through a calibration phase in the setup function.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=42)** On start-up, the Arduino watches the analog input for five seconds.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=47)** It captures the highest and lowest-values and assigns them to sensorMax and sensorMin.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=53)** While it is doing this, the LED on pin 13 is turned on to signal that the program is in calibration mode.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=60)** Calibration can be extremely helpful, depending on your project needs.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=65)** Calibration can make your components more responsive by narrowing the range of map values.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=71)** Imagine the potentiometer is a steering wheel on a car.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=75)** If the steering wheel is more sensitive, the vehicle responds more aggressively.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=80)** If you calibrate your potentiometer to only use 10 degrees of rotation, it can help you to tune your hardware to your needs.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=88)** Say you are using a photocell on a project to control the brightness of an LED.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=92)** If you hard-code the Min and Max values of your input, and then take that project to a poorly-lit area, you may not ever see the LED turn on.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=102)** By coding calibration into the program, you can reset the high and low-values each time you start the Arduino without making any adjustments to the code.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=112)** Down in the loop, we see the map function again.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=116)** The value of sensorValue is being mapped to the PWM range and stored in outputValue.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=123)** The high and low-end of sensorValue that we capture during calibration are used as the high and low-end of the source range.
>
> **[2:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=131)** Next we see that super important function, constrain.
>
> **[2:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=135)** Before the brightness of the LED is set, the outputValue is run through the constrain function.
>
> **[2:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=142)** Constrain takes three values as parameters, the value being constrained and the high and low-end of the constrained range.
>
> **[2:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=151)** If the calibrated input range is 0 to 500, and the Arduino then reads an input value higher than 500, the map function will output a number outside of the range.
>
> **[2:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=162)** The calibration function will bring the high value into the range.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=167)** This catches outliers so unexpected values don't throw off the expected results.
>
> **[2:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=173)** I'll upload the code.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=174)** Once the LED on pin 13 comes on, I'm in calibration mode.
>
> **[3:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=180)** If I turn the potentiometer all the way up and down, the calibrated range will be the same as we saw earlier in the analog input example.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=189)** However, if I unplug the Arduino and calibrate it again, this time only turning the potentiometer a small amount, you can see that the LED brightness is more responsive.
>
> **[3:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=199)** As I adjust the potentiometer, the value being red goes up.
>
> **[3:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=204)** When a number outside of the range is inputted into the map function, the LED simply stays at full brightness.
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/calibrating-an-analog-input-to-fade-an-led-precisely?u=76281980&t=210)** Hopefully, now you can see why the constrain function can be so helpful.

> [!info]- Semantic Content
>
> **Env Vars:** led (12), ide (1), pwm (1)
> **Code Keywords:** function (9), let (1), this, (1), super (1), throw (1)
> **Code Identifiers:** sensorvalue (2), outputvalue (2), sensormax (1), sensormin (1)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### Challenge: Programming an LED that reacts to brightness
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=3)** - Okay folks, it's time for another challenge.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=6)** In this challenge, I want you to make an LED adjust in brightness with a photoelectric sensor.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=13)** Use the calibration, or analogInput example in the Arduino IDE as a starting point.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=19)** Or, if you're really feeling like a challenge, write it from scratch.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=23)** If you're having trouble connecting the photosensor, refer to the 03_03 Challenge handout for a wiring schematic.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=30)** Remember, you will need to include a resistor in series to pull down the voltage.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=34)** A 10K resistor should work well.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=38)** Once you have everything hooked up, cover the sensor and see what happens.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=43)** You can also try shining a light on the sensor.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=45)** Record your results.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=47)** This should take you no more than 10 minutes.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-programming-an-led-that-reacts-to-brightness?u=76281980&t=50)** Be sure to watch my solution video to see how I solved this problem.

> [!info]- Semantic Content
>
> **Env Vars:** led (1), ide (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** analoginput (1)
> **Speakers:** - okay (1)

#### Solution: Programming an LED that reacts to brightness
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=3)** - All right. Let's take a look at solving this challenge.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=6)** First, I will connect one side of the photo sensor to power and the other side to analog zero.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=13)** I will also attach one side of a 10k resistor to analog zero and the other side to ground.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=19)** This resistor acts as an alternate path to ground.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=23)** When the resistance of the photocell drops, electricity will flow freely.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=28)** The resistor will fill up and the additional electricity will flow to analog zero.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=34)** As resistance increases, the flow of electrons will slow until all of the energy can flow through the resistor.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=41)** I used the calibration example as the beginning for my sketch.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=45)** So that I can better see what's going on, I also added code to print a few things to the serial monitor.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=52)** Lastly, I added a delay of one second to slow down the serial monitor.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=58)** When I upload the code, I will cover and expose the photo sensor during the calibration phase.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=66)** When I open the serial monitor, I see the constrained value is 255.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=73)** When I place my hand over the photocell, the resistance increases and the voltage drops.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=80)** The LED dims until it turns off.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=84)** Now, when I shine a light on the photocell, the resistance drops and the voltage increases.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=90)** I can see the LED brightness increase as well.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=94)** If I press the reset button and recalibrate the range, this time, in a dimly lit area, you can see the LED is now more responsive to small changes in light.
>
> **[1:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=106)** If I shine a bright light on the sensor, the constrained function keeps the value in the range.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=113)** When the photocell is covered the remaining power flows through the resistor returning the circuit to zero volts.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=121)** This is called a pulldown resistor.
>
> **[2:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=124)** I'll unplug the Arduino and change the 10k resistor for a 1k resistor.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=130)** By changing to a smaller resistor, the circuit will respond sooner.
>
> **[2:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=135)** This will give us more range on the top-end.
>
> **[2:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=139)** A low resistor value is called a weak pulldown resistor, as more current is allowed to flow.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=145)** A high resistor value is called a strong pulldown resistor, in which less current flows.
>
> **[2:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=152)** Now, when I plug the Arduino back in, I see the circuit respond sooner.
>
> **[2:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-programming-an-led-that-reacts-to-brightness?u=76281980&t=158)** I can use this principle to control a wide range of analog outputs with a variety of analog inputs.

> [!info]- Semantic Content
>
> **Env Vars:** led (3)
> **Definitions:** is called (3)
> **Code Keywords:** let (1), function (1)
> **UI Navigation:** open the (1)
> **Speakers:** - all (1)

#### Using an RGB LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=0)** - Color mixing is a great use of PWM.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=3)** By turning on various colored LEDs at different intensities, I can create any color in the rainbow.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=11)** This is how your computer creates colors on a monitor.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=15)** An RGB LED is a special type of LED that combines three LEDs into one.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=20)** RGB stands for red, green, blue, and is a way of mixing light to create colors.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=26)** This is called an additive color system.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=30)** In this system, the absence of color, or light, is black.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=34)** By turning on each of the three colors at different brightness, you can create any color in the color wheel. Mixing these three colors at full strength creates white light.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=46)** RGB LEDs have four leads. There are two common ways that those four leads will be set up.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=53)** These configurations are referred to as "Common Cathode" or "Common Anode".
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=59)** A common cathode RGB LED has one anode lead for each LED.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=65)** The three colors share a single cathode, or ground.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=69)** This is the easiest configuration to work with on the Arduino.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=73)** Simply hook each anode up to a PWM pin, and connect the common cathode to ground.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=79)** Alternatively, a common anode RGB LED has one anode lead for each LED.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=85)** The three colors share a common cathode.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=88)** Alternatively, a common anode RGB LED has one cathode lead for each LED.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=95)** The three colors share a single anode.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=99)** The power flows into the component through one lead, an alt ground through each unique lead.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=105)** These are more complicated to use, and should be avoided until you have a firm grasp of working with a common cathode RGB LED.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=113)** To hook this up, I will first connect a resistor between the Arduino's ground and the RGB LED's ground.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=121)** Next, I'll connect the red pin to pin nine, green pin to 10, and blue pin to 11.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=128)** I have a new window opened in the Arduino IDE.
>
> **[2:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=131)** From here, I will instantiate constant integer variables for the three LED pins.
>
> **[2:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=141)** In order to randomly set the brightness of each LED, I'll use the Random Function.
>
> **[2:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=148)** The Random Function takes two parameters' input, "min" and "max".
>
> **[2:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=153)** "min" is included in the range and "max" is excluded.
>
> **[2:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=156)** So if you were looking for a random number from zero to 255, your "min" would be zero and your "max" would be 256.
>
> **[2:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=166)** Next, I will declare two more constant integer variables, called "min random" and "max random".
>
> **[2:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=173)** I'll set the minimum value to 50 and the max value to 256.
>
> **[3:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=181)** I also need to declared integer variables for the brightness value for each LED.
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=190)** In the loop, I will call the Random Function to assign a value to each brightness variable.
>
> **[3:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=200)** Then, I will assign the brightness value to each LED.
>
> **[3:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=207)** Finally, I'll delay for one second, so that I can see the colors change.
>
> **[3:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=217)** I'll save the code and upload.
>
> **[3:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/using-an-rgb-led?u=76281980&t=223)** And now, every second, I see a new color.

> [!info]- Semantic Content
>
> **Env Vars:** led (14), rgb (8), pwm (2), ide (1)
> **Definitions:** is a  (3), stands for (1), is called (1)
> **Code Keywords:** function (3), finally, (1)
> **Prerequisites:** set up (1)
> **Speakers:** - color (1)

#### Mixing colors on an RGB LED using three analog inputs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=0)** - Let's take our color mixing to the next level, and add some analog inputs.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=5)** In the Arduino IDE, I will select File, examples, starter kit, color mixing lamp.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=13)** This program calls for three photosensors to be connected to analog 0, 1 and 2.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=19)** I am going to use three potentiometers instead, so I can more precisely control the change of color.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=26)** In the code I need to change the value of green LED pin, red LED pin and blue LED pin so that they correspond to the correct anode for each color.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=37)** If we scroll down to the loop we can see what's going on.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=42)** Rather than using the map command, this program is simply dividing by four which roughly gets the job done.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=50)** These values are also printed to the serial monitor.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=54)** I'll upload the program and open the serial monitor.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=59)** Each potentiometer is turned all the way down so each value is reading zero.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=65)** Now, i will slowly turn up the red LED.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=69)** And that looks like a nice place to stop.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=72)** Next, I'll ring up the green LED.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=76)** As the brightness increases, the added green shifts the color towards orange.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=82)** Lastly, I'll turn up the potentiometer for the blue LED.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=87)** With all three colors turned on, I have a nice warm white.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=91)** I can get a more intense white by turning all three potentiometers all the way up.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/mixing-colors-on-an-rgb-led-using-three-analog-inputs?u=76281980&t=96)** Spend some time mixing colors and see if you can output each color of the rainbow.

> [!info]- Semantic Content
>
> **Env Vars:** led (6), ide (1)
> **UI Navigation:** scroll down (1), open the (1)
> **Code Keywords:** let (1)
> **Speakers:** - let (1)

#### Challenge: Fading through the rainbow with PWM
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=3)** Are you ready for another challenge?
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=6)** In this challenge, I want you to build on the activity in the last lesson, and automate the arduino to fade through the rainbow with pulse width modulation.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=15)** Start by turning on the red anode, then slowly fade from red to green, green to blue, and then back around to red.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=24)** This should be accomplished through programming, with no manual input necessary.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=29)** If you get stuck, go back and watch the video on fading an LED with pulse width modulation.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=36)** If you're looking for an additional challenge, try writing your own function to accomplish this task.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=42)** This should take you around 20 minutes, but don't worry if it takes you longer.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-fading-through-the-rainbow-with-pwm?u=76281980&t=46)** Be sure to come back and check my solution and see how I solved this problem.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Env Vars:** led (1)
> **Cross-References:** in the last (1)

#### Solution: Fading through the rainbow with PWM
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=3)** - Did you get your Arduino to output each color?
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=6)** Lets take a quick look at my solution.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=9)** First I instantiated constant integer variables for each LED.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=14)** I also declared an array called Color to keep track of the current color that's being output.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=21)** In the setup function I've initialized the serial monitor so that we can see what's going on.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=27)** In the loop is where the real magic happens.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=30)** I start with a four loop.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=33)** Because of my initial settings in the array it will start with a red LED on.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=39)** The downer variable will help me select the item in the array that is currently on and slowly bring it down.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=46)** Next I initialize a variable called upper and assign it a value of zero.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=53)** Then I check to see if downer is less than two.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=57)** If downer is zero then upper will be assigned to one.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=61)** If downer is one then upper will be assigned to two.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=66)** If downer is two I need to assign upper to zero to bring the color back around to red.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=73)** Then in my next four loop I slowly bring the current color down and the next color up.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=81)** On line 27 I call a function called rgbColor.
>
> **[1:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=86)** This function was written by me.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=88)** The function takes three parameters as input.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=92)** It then assigned each parameter to the brightness for each LED.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=97)** I also have printed some items to the serial monitor so that I can see the color change in action.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=104)** I'll upload the code and open the serial monitor.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=109)** As the colors change I can see the serial monitor counting up and down for each color.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=115)** Once one color reaches zero the next color begins counting down.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=123)** Because this is happening in the loop it will continue over and over again until I unplug the Arduino.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=130)** Now it is worth noting this is just one way to come to the solution.
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-fading-through-the-rainbow-with-pwm?u=76281980&t=134)** If your code looks different than mine but you still see the same results congratulations.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), continue (1)
> **Env Vars:** led (3)
> **Code Identifiers:** rgbcolor (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - did (1)


### 4. Motor Control

#### Comparing DC motors, servos, and stepper motors
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=0)** - When it comes to making things move, there are three solutions most makers turn to, DC motors, Servos, and Stepper motors.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=10)** DC motors have two leads.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=12)** One for power and the other for ground.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=15)** The speed of the motor can be controlled with a pulse width modulated signal.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=19)** When a DC motor is connected to an appropriate power supply, it turns the driveshaft.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=24)** When the leads are connected in reverse, the motor runs in reverse.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=28)** Some motors require more power to operate than the Arduino can provide.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=33)** To run a more powerful DC motor, you may need to use a transistor.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=38)** Transistors act as a bridge between the low power signal of the Arduino, and the higher powered signal used to turn the motor.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=45)** Transistors listen for a signal from the Arduino, and when the signal is output the transistor completes the high power circuit to power the motor.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=55)** An H bridge is type of integrated circuit that allows for the signal to be applied in both directions.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=61)** An H bridge listens for multiple signals, and depending on the signal is receives, the motor tuns at variable speed forward or backward.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=70)** The most common Servos are hobby Servos.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=74)** Developed and perfected by RC enthusiasts to control scale model vehicles.
>
> **[1:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=78)** A generic Servo has 180 degrees of rotation.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=82)** They generally have three leads.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=84)** The ground is typically black or brown, the red lead connects to power, the third lead connects to a PWN pin and listens for a signal called the logic-level.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=97)** Depending on the PWN signal that is output the Servo will rotate and stop at a specific angle.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=104)** There's no speed control, only angle of rotation.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=107)** Another type of Servo is a continuous rotation Servo.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=111)** These Servos also have three leads that function more like a DC motor than a generic Servo.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=118)** Depending on the Logic signal, the Servo can turn in either direction at a variable speed.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=123)** Functionally similar to a DC motor with an H bridge.
>
> **[2:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=127)** The last component frequently used to move things is a Stepper motor.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=132)** A Stepper motor turns in steps, and each step is a precise degree of rotation.
>
> **[2:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=139)** If a Stepper motor has 180 steps, each step would turn the shaft two degrees.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=144)** Stepper motors are perfect for precisely controlling movement and are used to control the position of a print head in a printer.
>
> **[2:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=153)** If exacting rotation is your goal, Stepper motors are the best solution.
>
> **[2:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/comparing-dc-motors-servos-and-stepper-motors?u=76281980&t=158)** Each of these components can solve unique problems and bring your projects to life.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** require (1), function (1)
> **Env Vars:** pwn (2)
> **Analogies:** similar to (1)
> **Speakers:** - when (1)

#### Implementing basic servo control
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=0)** - Controlling a servo with the Arduino requires just a few steps.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=5)** The servo I'm using in this example is a basic hobby servo.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=9)** It can rotate up to 180 degrees.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=12)** There is no speed control on this type of servo.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=15)** You can only control the angle.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=18)** The servo comes with a few attachments so you can connect it for various uses.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=23)** in the Arduino IDE I will select Files, Examples, Servo, Sweep.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=29)** This short example is very similar to the fade example we saw earlier.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=35)** The servo will simply move from zero degrees to 180 degrees back and forth.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=41)** On line 10 the servo library is included in the program.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=47)** As you work with new components you may find that they come with their own libraries.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=53)** You can read more about libraries on the Arduino website.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=57)** On line 12 the program creates an object of type servo called myservo.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=64)** In the setup function myservo is attached to pin 9.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=68)** Finally down in the loop the program simply counts up to 180 and then down from 180.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=76)** When the loop concludes the program starts over again.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=80)** I'll upload this program to the Arduino.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/implementing-basic-servo-control?u=76281980&t=84)** Once the program is done uploading I can see the servo moving back and forth.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Env Vars:** ide (1)
> **Prerequisites:** setup (1)
> **Speakers:** - controlling (1)

#### Controlling a servo with an analog input
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=0)** - With just a few additions, I can control the angle of the servo with the potentiometer.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=6)** In the Arduino IDE, I will select File, Examples, Servo, Knob.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=13)** With the potentiometer attached to pin A zero, I will upload the code.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=19)** This example should be familiar in form.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=22)** This program uses the map function to scale the value red from the potentiometer, to a corresponding angle of rotation on the servo.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=32)** As I adjust the position of the potentiometer, the servo moves in time.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=37)** (servo makes buzzing sound) Notice the small buzzing sound I hear when I turn the servo all the way up.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=46)** You may have also heard this buzzing noise when the servo reached the top and low end of the sweep program.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=53)** This has to do with manufacturing standards.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=56)** Some servos simply won't turn the full 180 degrees.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=61)** This is why it's important to test your servo ahead of time and find the correct operational range for your particular device.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-servo-with-an-analog-input?u=76281980&t=70)** If I were to simply add an arm to the end of the Arduino, you could see how I could control a multitude of devices quite simply.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** function (1)
> **Env Vars:** ide (1)
> **Speakers:** - with (1)
> **Non-Speech:** (servo makes buzzing sound) (1)

#### Controlling a continuous rotation servo with an analog input
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=0)** - Controlling a continuous rotation servo is slightly different than controlling a basic hobby servo.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=7)** When a value of zero is sent to the servo, the servo spins at full speed in one direction.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=13)** On most servos, this will be anti-clockwise.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=17)** When a value of 180 is sent to the servo, the servo spins at full speed in the other direction.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=24)** Again, this is normally clockwise.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=27)** However, around the value of 90, the servo stops.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=31)** I stress around, because most continuous rotation servos will be a little off.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=36)** I have tested my servo and know that a value of 90 makes it stop spinning.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=42)** I did this by manually trying different numbers.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=46)** Any number higher than 90 makes the servo spin clockwise, while any number lower than 90 makes it spin anti-clockwise.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=54)** In the Arduino IDE, I will select File, Examples, Servo, Knob.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=62)** Now, this is the exact same code that we used to control the basic hobby servo.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=68)** Because the value range used to control a basic hobby servo and a continuous rotation servo are exactly the same, I can use the same piece of code.
>
> **[1:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=78)** To see a little easier what's going on, I'm going to initialize the serial monitor and print the value that's being sent to the servo.
>
> **[1:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=89)** I'll upload the code and open the serial monitor.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=94)** My potentiometer is currently being mapped to a value of 90.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=99)** With the potentiometer turned all the way down, the servo spins anti-clockwise.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=104)** I'll adjust my potentiometer until the map value is 90 when the servo stops rotating.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=111)** If I turn up the potentiometer, the server slowly spins faster.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-continuous-rotation-servo-with-an-analog-input?u=76281980&t=116)** For your Arduino projects, this is a much easier way to get a motor that spins in both directions as opposed to using an H bridge and a DC motor.

> [!info]- Semantic Content
>
> **Env Vars:** ide (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - controlling (1)

#### Controlling DC motor speed with an analog input and transistor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=0)** - Powering a DC motor takes a few extra components.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=5)** When you're powering a DC motor and then cut that power, the motor creates a voltage spike in the opposite direction.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=12)** This power burst can go back into your Arduino and cause damage.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=17)** Also, most DC motors require more than the five-volt signal Arduino can provide.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=23)** To provide the appropriate voltage, I need to use a transistor in the circuit.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=28)** The transistor acts as a bridge between the low-level, five-volt Arduino circuit and a higher voltage circuit the motor is connected to.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=37)** As power is applied to the transistor, a gate is open on the high-voltage circuit.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=43)** When power is cut, the gate closes and the motor stops.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=47)** The more open the gate is, the more power flows to the motor.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=52)** I will use the transistor that came with my kit.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=55)** Here, the transistor has three leads.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=58)** I will add it to the breadboard with the front facing away from the Arduino.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=63)** The front is the side with the numbers printed on it.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=66)** The black wire of the motor goes to the middle pin on the transistor.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=71)** I will also connect a diode here between the second pin and ground.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=76)** This will protect the circuit from that reverse of power when the motor stops.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=81)** Looking at the front of the transistor, the next pin I will attach is on the left.
>
> **[1:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=86)** This will be connected to pin nine on the Arduino.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=90)** The last pin will be connected to ground.
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=93)** I also need to connect a nine-volt battery to power and ground.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=98)** I'll use the Farsight power rail.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=101)** I also want to make sure both grounds of the power rails are connected, so all of my circuits are connected to one common ground.
>
> **[1:50](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=110)** My last wire, the red wire on the motor, connects to the nine-volt power rail.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=117)** In the Arduino IDE, I will select File, Examples, Analog, Calibration.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=123)** This program is just about what I need.
>
> **[2:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=126)** I'll be using the variable LED pin to power my motor.
>
> **[2:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=131)** In the setup function, I'm just going to remove the calibration phase, so that we can get right into controlling the motor.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=138)** I'll make sure the potentiometer is turned all the way down and then upload the code.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=145)** Now, as I turn the potentiometer up, I see the motor begin to spin.
>
> **[2:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=150)** With the potentiometer turned all the way up, the motor is at full speed.
>
> **[2:36](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=156)** Now, as I bring the potentiometer down, the motor spins down as well.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-dc-motor-speed-with-an-analog-input-and-transistor?u=76281980&t=161)** By using a variety of transistors, you can control just about any size motor with the Arduino.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), rails (1)
> **Code Keywords:** require (1), function (1)
> **Env Vars:** ide (1), led (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - powering (1)

#### Diving deeper into H bridge control
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=0)** - In order to drive a DC motor in both directions, I need an H bridge.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=5)** An H bridge is an electronic component that allows voltage to be applied to a circuit in either direction.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=12)** The most common application is to turn DC motors.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=16)** The H bridge in my kit is an L293D motor driver.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=21)** There are 16 pins with four transistors.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=24)** Each motor uses two of the transistors to operate in both directions.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=29)** Each pin plays an important role.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=32)** The top of the chip is marked with a small notch.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=35)** This is a common attribute of integrated circuits, and is used to tell the orientation of the pins.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=41)** The pins are numbered 1 through 8, top to bottom on the left, and 9 to 16, bottom to top, on the right.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=49)** Pins 1 and 9 are called ENABLE pins.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=52)** These pins are connected to a digital output.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=55)** When current is run to them, they enable the side of the H bridge that they reside on.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=60)** Think of them as a master switch.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=62)** Pins 2, 7, 10, and 15 are INPUT pins.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=66)** These can be connected to a PWM pin, to enable motor speed control.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=71)** Pins 3, 6, 11, and 14, are the OUTPUT pins.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=76)** They each correspond to the INPUT pin they sit next to.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=80)** Each of these pin pairs is a transistor.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=82)** As voltage is applied to the INPUT pin, the gate is open on the OUTPUT pin.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=87)** These are a little special though, in that if you connect a motor to two of the OUTPUT pins, you can control both speed and direction of the DC motor.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=97)** Pin 8, labeled VS, is the INPUT pin for the motor power supply.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=102)** The red lead of my nine-volt battery is connected here.
>
> **[1:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=106)** Pin 16, labeled VSS, is the INPUT pin to power the IC.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=111)** The chip needs just under five volts to operate, so I'll connect it to the main Arduino power supply.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=118)** Pins 4, 5, 12 and 13, at the center of the chip, should all be connected to ground.
>
> **[2:04](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=124)** These pins also serve as a heatsink for the chip.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=128)** For each pair of transistors, there are a few combinations of pin states that I can set.
>
> **[2:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=133)** First, I must set the ENABLE pin to high.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=137)** If the ENABLE pin is low, nothing else matters.
>
> **[2:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=140)** Regardless of the state of INPUT 1 or 2, the motor will remain off.
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=146)** With the ENABLE pin high, I have four combinations I can set the logic pins to.
>
> **[2:31](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=151)** If both pins are high, or both pins are low, the motor will stop.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=157)** If one pin is high and the other is low, the motor spins.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=161)** The direction is determined by which pin is set to high, and how you have your motor connected.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=167)** You can send a PWM signal to the motor logic pins to control speed, however, it's important to send a signal to one pin at a time, otherwise the motor will not spin.
>
> **[2:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/diving-deeper-into-h-bridge-control?u=76281980&t=179)** With PWM and an H bridge, it's easier than ever to make things move.

> [!info]- Semantic Content
>
> **Env Vars:** input (6), enable (4), pwm (3), output (3), l293d (1)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** make (1)
> **Code Keywords:** switch (1)
> **Speakers:** - in (1)

#### Controlling a DC motor with an H bridge
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=0)** - Adding an H bridge to an Arduino project mainly requires a lot of extra wires.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=6)** The H bridge is placed across the valley of the breadboard.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=10)** I have all of the wires connected to the appropriate pins.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=14)** Pin 1 on the IC is connected to pin 13 on the Arduino.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=19)** This is my enable pin for the left side of the IC.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=23)** Pin 2 on the IC will be connected to pin 6 on the Arduino.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=28)** Pin 7 on the IC is connected to pin 3.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=32)** These pins are input one and two and will be used to set the speed and direction the motor is spinning.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=39)** The motor is connected to pins 3 and 6.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=43)** The direction I have the motor hooked up doesn't matter, since the motor will be spinning in either direction, depending on the input.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=51)** Pins 4, 5, 10, and 11 are connected to ground.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=56)** Pin 8 is connected to the power terminal of the nine-volt battery to provide power to the motor.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=63)** The ground terminal of the battery is connected to ground.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=68)** Pin 16 is connected to the Arduino five-volt power supply.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=72)** This powers the integrated circuit.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=74)** If you haven't already, open 04 07, Start, which can be found in the Chapter four folder of the Exercise Files.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=83)** This program is super simple.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=85)** First, pin 13 is set as Output and given a value of High.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=90)** This turns the enable pin on, which, in turn, enables the pins on the left side of the integrated circuit.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=97)** Then, pin 3 and 6 are set to a value of 0, which stops the motor.
>
> **[1:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=103)** When I upload this program, I should see no action from the motor.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=108)** Now, if I change the value being sent to pin 3 to 255 and reupload, the motor spins in full speed in one direction.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=121)** If I change the value sent to 3 back to 0, and set the value for pin 6 to 255, the motor now spins in full speed in the other direction.
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=134)** I can also send smaller values to the pins, which spins the motor at a slower speed.
>
> **[2:20](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/controlling-a-dc-motor-with-an-h-bridge?u=76281980&t=140)** By adding a few lines of code and another motor to the other side of the H bridge, I can build a robot and control the speed and direction of travel.

> [!info]- Semantic Content
>
> **Tools:** terminal (2)
> **Code Keywords:** super (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - adding (1)

#### Challenge: Controlling a DC motor with an H bridge and potentiometer
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=3)** - Alright, it's time for your final challenge.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=6)** In this challenge, I want you to control the speed and direction of a DC motor with a potentiometer.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=13)** For analog input values 500 to 524, the motor should stop.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=19)** Values greater than or equal to 525 should spin the motor in one direction.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=25)** As the value increases, the motor speed should increase.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=29)** For analog values less than 500, turn the motor in the other direction.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=34)** As the value decreases, the motor speed should increase.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=39)** Try not to spend more than 30 minutes on this.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/challenge-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=42)** When you're ready, be sure to check out my solution video to see how I solved this problem.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1)
> **Speakers:** - alright (1)

#### Solution: Controlling a DC motor with an H bridge and potentiometer
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=3)** - Did you get your motor spinning as planned?
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=6)** Let's take a quick look at my solution.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=9)** First, in the setup, I set pin 13 as output then I set pin 13 to high.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=16)** I have the enable pin on my H-bridge connected to pin 13.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=21)** Since I don't need to toggle the enable pin while I'm running the program, I've set it to high in the setup so I don't have to worry about it again.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=30)** First, I initialize an integer called pinRead and give it a value Read from analog pin zero.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=37)** Then I checked for three conditions.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=40)** If pinRead is less than 500, I'll execute these four lines of code.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=46)** First, I'm setting pinRead to a value of 499 minus the current value of pinRead.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=53)** If the value of pinRead was 499, now the value of pinRead is zero.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=59)** This is effectively swapping the pinRead value around so that now, I can easily map this value and scale the motor speed along with the pinRead value.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=70)** Next, I'll map the value of pinRead to my range: 0 to 255.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=76)** Then, using the analogWrite function, I spin up the motor through pin three.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=82)** I also set pin six to zero.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=85)** I have pin three and pin six connected to input one and input two.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=90)** Next, I check for a value greater than or equal to 500 and less than 525.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=98)** If I see a number between those two values, I'll set both pins to zero, stopping the motor.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=104)** Anything else will be greater than 525, so I simply use an else statement and map the value to the appropriate number.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=113)** This time, I'm going to set pin three to zero and pin six to the pinRead value.
>
> **[1:59](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=119)** This will spin the motor in the other direction.
>
> **[2:02](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=122)** Finally, just to slow the program down a little bit, I've added a short delay of 15.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=129)** Now, when I turn on the Arduino and start messing with the analog input, I can see the motor spin in both directions.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/solution-controlling-a-dc-motor-with-an-h-bridge-and-potentiometer?u=76281980&t=136)** Of course there are many ways that you could have completed this problem, so if your code's not exactly like mine, but your motor is still spinning as expected, congratulations.

> [!info]- Semantic Content
>
> **Code Identifiers:** pinread (10), analogwrite (1)
> **Code Keywords:** let (1), function (1), finally, (1)
> **Prerequisites:** setup (2)
> **UI Navigation:** toggle (1)
> **Speakers:** - did (1)


### Next steps

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=0)** - There are limitless applications for the Arduino.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=3)** With just a few adjustments to the examples you have explored, we could build anything from a robot to a musical instrument.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=11)** I've introduced many of the ways you can harness the power of pulse width modulation.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=16)** Exploring various analog inputs can bring new interactivity to your projects.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=21)** Sensors can automatically turn on lights as the sun goes down or open a door for a pet while keeping wild animals out.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=29)** Think about a metric in your environment that you want to measure and some action you could take as a result.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=35)** Then automate that process with the Arduino.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=38)** Above all, have fun.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=40)** Arduino is about exploring technology.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-pulse-width-modulation/conclusion?u=76281980&t=43)** And at the end of the day, if you close the IDE with more knowledge and experience than when you opened it, you have had a successful day as a maker.

> [!info]- Semantic Content
>
> **Env Vars:** ide (1)
> **Speakers:** - there (1)


## Path Context

### In [[Become an Arduino Developer]]
← [[Learning Arduino- Interfacing with Analog Devices]] | **7 of 11** | [[Complete Guide to C Programming Foundations]] →

## Appears In

- [[Become an Arduino Developer]]

## Related Courses

_Courses sharing skills:_

- [[Arduino- Prototyping]] — Arduino
- [[Learning Arduino- Interfacing with Analog Devices]] — Arduino
- [[Learning Arduino- Interfacing with Hardware]] — Arduino
- [[Learning Arduino Foundations]] — Arduino

---

[↑ Back to top](#)