---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-arduino-interfacing-with-analog-devices
url: "https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices"
duration_minutes: 94
duration: 1h 34m
level: Intermediate
updated: 4/26/2024
learners: 229949
skills:
  - Arduino
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFyD5zHSy5t6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568660773632?e=2147483647&amp;v=beta&amp;t=XObMuw9A5C8iAra0Saz3-tdHinGa86yC2vkrqAfGjs4"
linkedin_topic: Hardware
learning_paths:
  - '[[Become an Arduino Developer]]'
prev_courses:
  - '[[Electronics Foundations- Semiconductor Devices]]'
next_courses:
  - '[[Learning Arduino- Pulse Width Modulation]]'
path_nav: '[{"path":"Become an Arduino Developer","position":6,"total":11,"prev":"Electronics Foundations- Semiconductor Devices","next":"Learning Arduino- Pulse Width Modulation"}]'
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

![Learning Arduino: Interfacing with Analog Devices](https://media.licdn.com/dms/image/v2/C4E0DAQFyD5zHSy5t6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568660773632?e=2147483647&amp;v=beta&amp;t=XObMuw9A5C8iAra0Saz3-tdHinGa86yC2vkrqAfGjs4)

# Learning Arduino: Interfacing with Analog Devices

> Arduino helps engineers and DIY enthusiasts build functional, interactive prototypes and electronics projects. Integrating analog devices allows you to take your Arduino projects to the next level, bridging the digital and physical worlds. With analog components, you can collect data from sensors, make motors run, and display information to users. This course teaches you the basics you need to get

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices) | 1h 34m | Intermediate | 230K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Zahraa Khalil]]

## Resources

- Exercise files available

## Skills Covered

- Arduino

## Table of Contents

### Introduction

#### Integrating analog devices with Arduino
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980&t=0)** - When working with Arduino Projects, you may find yourself having to interface with analog devices, things like temperature sensors, light sensors, motors, and joysticks.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980&t=10)** And they work differently than digital components.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980&t=14)** In this course, I'll use the Arduino board with some common analog components, like temperature sensors, LDR light sensors, joysticks, and separate motors.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980&t=26)** I'll explore each component separately and go through the wiring and the coding to get them working.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980&t=32)** At the end, we'll combine the components together in some mini-projects where we apply all the knowledge learned within the course.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980&t=40)** I'm Zara Khalil, I am an engineering instructor, and I enjoy teaching courses covering engineering topics.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/integrating-analog-devices-with-arduino?u=76281980&t=46)** So, let's get started!

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), let (1)
> **CLI Commands:** find (1)
> **Env Vars:** ldr (1)
> **Speakers:** - when (1)

#### What you should know before watching
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=0)** - [Narrator] Before you start this course, you should be a little bit familiar with how Arduino works.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=5)** Using the input and output pins, and the basic commands, like a pinmode.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=10)** And know the difference between inputs and outputs, as well as some programming concepts, like an if statement.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=19)** I'm going to use Arduino Uno board, but you can use any other board that you have.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=23)** You just need to make sure to select it when programming.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=28)** I use this kit for most of the components for this course, but there are many other kits available.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=33)** You just need to make sure they have the following components.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=37)** Temperature sensor, TMP37 or LM35, LDR, joystick, and a unipolar stepper motor.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=48)** This course is designed to interface analog components with Arduino board and coding.
>
> **[0:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=55)** I'll cover the wire needed for our project, but if you need a refresher on hardware components, throughout this course, I would recommend referring to [[Electronics Foundations- Fundamentals]].
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-you-should-know-before-watching?u=76281980&t=69)** If you have zero experience with Arduino, you might want to first check out my other Arduino essential course, Learning Arduino: Foundations, that we have in our library, to get you prepared for this course.

> [!info]- Semantic Content
>
> **Env Vars:** tmp37 (1), lm35 (1), ldr (1)
> **CLI Commands:** make (2)
> **Code Keywords:** interface (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)


### 1. Analog Inputs

#### What are analog devices?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=0)** - [Instructor] There are two types of components that we interface with in Ardiuno, digital and analog.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=6)** Digital devices produce two possible values as their output, either zero or one.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=13)** We may also refer to these as high or low.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=16)** An example would be a push button switch- it's either on or off.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=22)** However, analog sensors can produce a continuous number of possible output values.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=30)** Some examples of analog components are: light dependent resistors, which can be used as a light sensor, temperature sensors, stepper motors, and joystick controllers.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=47)** There are many different ways to measure the analog output they produce.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=51)** Voltage is a common analog output.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=54)** So when working with analog sensors, we need to know what type of output the sensor produces in order to properly use it in the program.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=63)** This allows us to control the brightness of an LED, the speed of motor, and so on.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=68)** Typically, analog sensors output one of these three physical electrical properties: voltage, resistance, or capacitance.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=80)** An example of an analog sensor that produces voltage is a temperature sensor, such as TMP37 and LM35.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=92)** When working with sensors that produce voltage, we need to know the voltage range that the sensor outputs, and take into consideration the voltage reference that Arduino is using.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=105)** An example of this type of sensor is an LDR, or light dependent resistor.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=113)** An example of a capacitance sensor is a touch sensor.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/what-are-analog-devices?u=76281980&t=118)** Here's a simple touch sensor that was included in my Ardiuno kit.

> [!info]- Semantic Content
>
> **Env Vars:** led (1), tmp37 (1), lm35 (1), ldr (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** interface (1), switch (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Understanding analog-to-digital converters
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=0)** - [Narrator] Let's start with how the Arduino board handles analog inputs.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=5)** When working with analog input signals, the Arduino board uses an analog to digital converter or ADC.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=14)** This converts analog signals coming from the external devices into digital values that the microcontroller can work with.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=24)** The digital value is scaled based on the value of the analog signal.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=29)** Then the Arduino software reads the digital value produced by the ADC and uses it to determine the value of the original analog signal.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=40)** Most of the Arduino boards have an ADC with a 10-bit resolution.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=45)** This means that it returns integers from zero to 1,023.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=51)** For an analog input between zero and five volt, the analog to digital conversion returns zero for an input of zero volt and 1,023 for an input of five volts.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=64)** The same thing applies when having a voltage reference of 3.3 volts.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=69)** So zero, for an input of zero volts and 1,023 for the maximum voltage, which in this case, is 3.3 volts.
>
> **[1:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=78)** Each Arduino units include an ADC for each analog pin for sensing analog input voltages and converting them into digital values.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=90)** The analog ADC is a 10-bit resolution.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=94)** There are some exceptions that have 12-bit ADC.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=98)** The only difference is that this will return values between zero and 4,095.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-analog-to-digital-converters?u=76281980&t=105)** You can read more about the Arduino board resolution by going to this link.

> [!info]- Semantic Content
>
> **Env Vars:** adc (6)
> **Code Keywords:** let (1), case, (1)
> **Versions:** 3.3 (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### Exploring our temperature sensor (TMP37)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=0)** - [Narrator] There are many types of temperature sensors available.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=3)** Each is used for different applications according to the specific requirement of your project.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=9)** Maybe you want a temperature sensor that measures a wide range of values, or one that needs to be very sensitive to small temperature changes.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=19)** Most of the temperature sensors used with an Arduino board have the same pin layout with three pins for each sensor.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=28)** These temperature sensors are analog and produce a voltage that is linearly proportional to the temperature in degrees celsius.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=37)** So now we need to know the voltage range that the sensor produces and take into consideration the voltage reference that the Arduino is producing.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=47)** For example, the Arduino Uno uses a five volt reference voltage.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=52)** So the maximum sensor voltage is five volts.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=57)** So our temperature sensor is TMP37.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=61)** It has a low voltage range using a reference voltage between 2.7 and 5.5 volts.
>
> **[1:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=69)** This sensor matches the voltage reference of the Arduino Uno, which is five volts.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=75)** The TMP37 is intended for applications between five degrees celsius and 100 degrees celsius.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=84)** Here is what the sensor looks like.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=87)** It has three pins.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=88)** One goes to the voltage source to provide power to the sensor.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=92)** The middle pin is connected to the Arduino pin to provide an input to the Arduino, and the third pin is connected to ground.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=102)** In order to connect it to the Arduino board, we use the pins to connect them to the board accordingly.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=108)** Now, in order to identify the pins, we're using either the bottom view by having a little notch or flat side on the top of the sensor, so the left one is the voltage source, the middle one is the analog input, and the right one is the ground.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=125)** Or you can use the front view, where you can see the sensor information, and then the pins goes voltage source, voltage output, and the ground.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-our-temperature-sensor-tmp37?u=76281980&t=136)** Okay, so this is the temperature sensor that we're using, and in order to see the bottom view, you just flip it here, so you have the flat side on top, and then the pins goes this way.

> [!info]- Semantic Content
>
> **Env Vars:** tmp37 (2)
> **Versions:** 2.7 (1), 5.5 (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Understanding how to interpret the sensor values
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=0)** - [Instructor] In this section, let's take a look at how Arduino uses the analog output received from our sensor to calculate the temperature.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=9)** I'll be using the TMP37 sensor for this example.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=14)** However, you can apply the same concept to any other type of temperature sensor.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=20)** The first step is understanding how many millivolts the sensor produces per degrees Celsius.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=27)** Let's refer back to the data sheet.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=29)** We know that the TMP37 produces 20 millivolts per degree Celsius.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=36)** We can use this information to come up with an equation that helps us to determine the temperature by measuring the voltage that the sensor is producing.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=47)** So, in rearranging the relationship by cross-multiplying the temperature by 20 millivolts and the output voltage from the sensor by one degree Celsius now the actual temperature of the sensor equals the volts times one degree Celsius over 20 millivolts.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=67)** So, this equation helps in calculating the temperature knowing the voltage.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=73)** And using the same relationship, we can find the voltage output from the sensor if we know the temperature.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=81)** Please keep in mind that the voltage offset of the TMP37 is zero according to the data sheet.
>
> **[1:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=89)** So, if you're using another type, let's say, for example, TMP36, then we need to account for the offset voltage of 500 millivolts.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=99)** Note in the data sheet the offset is listed as 0.5 volts which equals the 500 millivolts we have in our equation.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=109)** The second step is to understand how the Arduino reads the analog input and converts it to a digital value that can be processed by the microcontroller.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=121)** The Arduino Uno uses a 10-bit analog-to-digital convertor.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=125)** This means it will map the input voltages between zero and 5,000 millivolts to integer values between zero and 1,023.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=136)** And we rearrange the relationship in order to know how many millivolts were produced by the sensor where now the voltage equals 5,000 millivolts divided by 1,023 multiplied by the value read from the analog pin.
>
> **[2:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=155)** So, now I can combine the two equations to get the temperature by using the values read on the analog input bin.
>
> **[2:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-how-to-interpret-the-sensor-values?u=76281980&t=165)** So, simply I can connect the sensor to the Arduino board and use the Arduino IED software to show the temperature using this equation.

> [!info]- Semantic Content
>
> **Env Vars:** tmp37 (3), tmp36 (1), ied (1)
> **Code Keywords:** let (3), type, (1)
> **CLI Commands:** find (1)
> **Versions:** 0.5 (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Interpreting the sensor values
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=0)** - [Narrator] This is an optional example to further understand the concept using the previous equations to calculate the temperature.
>
> **[0:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=8)** I'll be using these two equations in order to calculate the temperature produced by the temperature sensor.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=14)** Let's say for example, that once I use the Arduino software, I read a value of 110.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=21)** Remember, Arduino uses ADC to read values between zero and 1,023, representing zero to 5,000 millivolts.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=32)** And we use this relationship in order to calculate the voltage output.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=38)** So, the output voltage equals the value read from the analog pin, times 5,000 over 1,023, and this equals around 537 millivolts.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=52)** Now we know the voltage output, then we use the second equation in order to know the temperature of the sensor.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=60)** So, using the equation, the temperature is around 26.8 degrees Celsius.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=68)** You can also use one equation when it's applicable.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/interpreting-the-sensor-values?u=76281980&t=72)** So, you can find the temperature the same exact way.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Env Vars:** adc (1)
> **Versions:** 26.8 (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Wiring up the temperature sensor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=1)** - [Instructor] Alright, so let's start doing the wiring for the temperature sensor we're using.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=5)** Again, if we use the bottom view, we know that this thing goes to the voltage source, the middle one goes to the analog input, and the left one goes to ground.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=14)** So I'll be using number 40 here, and then I'll slide in the middle pin for number 40.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=22)** So I know the left one goes to the voltage source, which is five volts, here.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=33)** The left pin goes to ground.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=42)** And then the middle one, which is the analog.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=44)** Output goes to the a zero.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-temperature-sensor?u=76281980&t=51)** Okay, and then I just need to connect the Arduino board.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Coding to read the temperature sensor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=1)** - [Instructor] Go ahead and open a new file to start coding for the temperature sensor that we have.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=6)** The very first thing that I need to do, is I need to initialize where is this analog sensor connected to.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=13)** I'll go ahead and I'll put in an integer value: "analogPin", (keyboard sounds) and that is connected to A0.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=22)** And I'll create two variables- float variables (keyboard sounds) for voltage out and one for the temperature. (keyboard sounds) The second thing that I need to do is go to the void setup and initialize the serial begin.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=48)** Now there is a code within Arduino to specify the analog reference for the temperature sensor that we're using.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=56)** If you go to the website, there is the command that's called "analogReference" and there are different ways that you can implement the analog reference.
>
> **[1:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=64)** For our case, We need to specify that the maximum voltage, that we've received from the analog sensor, is 5 volts.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=72)** In our case, We are going to use a default.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=75)** There are many other ways that you can implement the analog reference and then you can read more about it here. I'll go back to the coding and then I'll use "analogReference".
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=87)** Then I'll use "DEFAULT" to specify that I have 5 volts.
>
> **[1:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=94)** Let's go to the void loop here and then start coding.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=98)** The very first thing that we are going to use is that we are going to use a command called "analogRead".
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=107)** "AnalogRead" is basically reading the values from the sensor to that specific pin that we specified.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=113)** We need to specify the pin, that we are reading from.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=117)** In our case it's an "A0". In line one I connected or I specified "A0" to be analog pin.
>
> **[2:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=124)** So I can use the name that I used here, instead of actually the pin. I can use "analogPin".
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=134)** Everything I read from the analog pin, I need to save it in a variable and then I'll just give a name to it as "a".
>
> **[2:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=142)** Now, I need to make sure that this one is integer.
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=146)** So an integer a equals analogRead from the analogPin that we specified.
>
> **[2:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=154)** I'll go ahead now, I'll use the equations that we explained in the previous videos.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=160)** To calculate the voltage out, this equals the value that I read from the analog, which is a, in our case, over 1024. (keyboard sounds) Then I'll use the decimal point here.
>
> **[2:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=174)** If you noticed that in line 2 I specified that the voltage output is a float, because we are going to do a division here.
>
> **[3:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=183)** Then I'll go ahead and I'll multiply it by 5000.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=189)** Then I'll use the other equation, which is the temperature equals the voltage out over 20.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=198)** The only thing left here is I need to print the values that I get from the sensor to the serial monitor.
>
> **[3:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=205)** (keyboard sounds) I'll use "Serial.print" here and then I'm using the temperature, and then I want to show only one decimal point, here. Now, in order to show the degree sign of degrees Celsius, I'll use the hexa symbol for them, so "Serial.write"
>
> **[3:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=229)** and then the symbol for them is C2 here.
>
> **[3:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=236)** "Serial.write", which is 0 times B0. (keyboard sounds)
>
> **[4:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=245)** Okay. So, the final thing I need to add is the letter C.
>
> **[4:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=251)** Then I'll add the print line, because I want to print it in second line, and then I'll just put C here.
>
> **[4:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=260)** I'll just add a delay, so I can see temperature.
>
> **[4:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=264)** I'll just add two hundred and then I'll go ahead and upload the program.
>
> **[4:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=274)** I'll go and open this to the monitor, and then you can see the temperature show that being read from the analog sensor. I'll go ahead, I'll touch the sensor to see the temperature changing. So, Let's see.
>
> **[4:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=289)** You can notice that the temperature goes up as I touch the sensor.
>
> **[4:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-temperature-sensor?u=76281980&t=293)** Once I leave it, it starts to go down.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (2), default. (1), from. (1)
> **Code Identifiers:** analogpin (3), analogreference (2), analogread (2)
> **Non-Speech:** (keyboard sounds) (6)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Env Vars:** default (1)
> **Cross-References:** go back to (1)

#### LDR (light-dependent resistor) sensor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=0)** - [Narrator] Some analog sensors output a change in resistance.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=5)** Here are two common types you will run into.
>
> **[0:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=8)** Thermistors, which change resistance due to the variation in temperature.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=13)** And Photoresistors, which change resistance due to variation in light intensity.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=19)** The problem with the resistance based sensors is that the Arduino analog interface cannot directly detect a change in resistance.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=28)** A light dependent resistor or LDR, is a common light sensor.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=34)** It is simply a resistor that changes resistance as the amount of light, that falls onto it, varies.
>
> **[0:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=43)** And this is how an LRD looks.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=47)** An LDR is made of a high resistance semi-conductor materials.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=53)** The resistance decreases as the light intensity increases.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=58)** In the dark an LDR can have a resistance as high as several megaohms.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=65)** In a bright light it can have a resistance as low as a few hundred ohms.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=71)** This is the schematic symbol for an LRD.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=74)** Notice that the symbol is like a resistor but surrounded by a circle with a light incident upon it.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=82)** Since the LDR is a resistor it does not directly output a voltage that can be read by the Arduino.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/ldr-light-dependent-resistor-sensor?u=76281980&t=88)** So, lets see how to connect it to the Arduino by making our LDR part of a voltage divider.

> [!info]- Semantic Content
>
> **Env Vars:** ldr (5), lrd (2)
> **Definitions:** is a  (2)
> **Code Keywords:** interface (1)
> **Speakers:** - [narrator] (1)

#### Using a voltage divider with our LDR
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=0)** - The easiest way to detect a change in resistance is to convert that change to a voltage, Is to confer that change to a voltage, so for our LDR, we will build it into a voltage divider circuit.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=12)** In a voltage divider, we take an input voltage, and input voltage "V in" V in, and divide it between two resistors, R one and R two.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=16)** and divide it between tworesisters "R1" and "R2".
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=21)** By measuring V out, voltage out, between the two resistors, we get an output we get an output that is somefraction of the input voltage.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=26)** that is some fraction of the input voltage.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=30)** The value of the output depends on the value we pick for resistor one and resistor two.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=34)** resistor one and resistor two.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=37)** Here is the equation for a voltage divider.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=40)** Notice that, since the sum of resistor one and resistor two is on the bottom of the fraction, the output voltage will always be smaller than the input.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=51)** What happens if we make one of the resistors in our voltage divider a sensor like an LDR?
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=58)** As the resistance of the sensor changes, the voltage divider output, V out, changes as well since we keep the input voltage constant.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=68)** In this way, we can convert a varying resistance into a varying voltage that can be read by Arduino.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=77)** We can arrange the LDR in either location in the circuits.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=82)** In the first arrangement, the input voltage is connected the input is connected to the"Resistor" and then "LDR", to the resistor and then LDR, which is connected to ground.
>
> **[1:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=89)** which is connected to "Ground".
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=91)** To read the value of the LDR, we connect the Arduino input pin between the resistor and the LDR.
>
> **[1:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=98)** In the second arrangement, the LDR is connected the "LDR" is connecteddirectly to the voltage input directly to the voltage input and then to the resistor, and then to the "Resistor"which in connected to "ground".
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=105)** which is connected to ground.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=108)** Just as before, to read the value of the LDR, to read the value of the "LDR" we connect the Arduino input pin between the resistor and the LDR.
>
> **[1:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=116)** Now let's see the difference in these configurations by checking out the voltage divider equation.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=123)** When using the first arrangement, the equation for the voltage divider will look like this.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=129)** The voltage out equals the voltage in times the resistance of the LDR over the total resistance of resistor one and the LDR.
>
> **[2:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=141)** As the illumination increases, the LDR resistance approaches zero.
>
> **[2:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=147)** The value of R one, resistor one, and the denominatordoes not matter so much, in the denominator does not matter so much, so the total resistance approaches to zero as well.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=157)** This means that the darker it gets, the closer the fraction gets to one, and the V in approaches V out.
>
> **[2:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=165)** In other words, the darker it gets, the darker in gets the higher the higher the voltage receives by the Arduino.
>
> **[2:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=169)** the voltage receives by the Arduino.
>
> **[2:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=172)** The opposite is true in the second arrangement.
>
> **[2:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=176)** The equation is now the voltage out equals the voltage in the voltage in times resistor2 over the total resistance.
>
> **[3:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=180)** times resistor two over the total resistance.
>
> **[3:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=185)** Now as it gets darker, the resistance of the LDR gets huge, making the fraction approaches zero, so as it gets darker, V out approaches zero as well.
>
> **[3:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=200)** In other words, less light equal less voltage.
>
> **[3:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=205)** We have seen that Arduino reads analog input using a 10-bit ADC, so inputs from zero "10-bit ADC".
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=210)** So input from zero to 5000millivolts will be mapped to 5,000 millivolts will be mapped into integers between zero and 1023.
>
> **[3:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-voltage-divider-with-our-ldr?u=76281980&t=219)** Lets go ahead and implementthis sensor in code.

> [!info]- Semantic Content
>
> **Env Vars:** ldr (16), adc (2)
> **Definitions:** in other words (2), means that (1)
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** make (1)
> **Speakers:** - the (1)

#### Wiring up our LDR circuit
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=0)** - [Instructor] Okay, so in order to wire the LDR we are going to use the second arrangement from the previous video.
>
> **[0:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=8)** Where whenever it gets darker, we receive less voltage.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=12)** So the very first thing I'm going to do is I'm going to connect the voltage in and the ground from the Arduino board.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=20)** We are using the five volt from the Arduino and then I'm going to connect it to the breadboard here.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=28)** And then for our LDR, I'm going to connect it around 140.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=34)** You can pretty much add it anywhere in the breadboard.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=37)** And I'm going to use a 1K resistor where the colors are brown, black, red.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=44)** And I will connect it to the LDR here.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=48)** Alright, so for this second arrangement, the voltage comes in from five volt to the LDR.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=54)** So this one side of the LDR goes to the five volts.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=59)** And then the other side of the resistor goes to ground.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=66)** Now in order to read the value of the LDR, we connect between the LDR and the resistor.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=73)** And then I'll connect that to A0.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=76)** which is the analog input zero.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-ldr-circuit?u=76281980&t=79)** The last step is just connecting the Arduino board to the computer.

> [!info]- Semantic Content
>
> **Env Vars:** ldr (7)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Coding to read the LDR circuit
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=0)** - [Narrator] Okay, I'm going to go ahead and start programming for the LDR.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=4)** I'm going to write a simple to kind of mimic a light meter, whenever it's dark it shows on the serial monitor that it's dark.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=11)** Whenever it's bright it shows that it's bright.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=14)** So the very first point we are going to do is we are going to initialize and lock input, and name it to sensorPin.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=21)** So I will go ahead, so it's an integer, sensorPin, and that was connected to a zero.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=31)** The second thing I'm going to do is I'm going to initialize the variable, where we are going to store the values from the LDR.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=38)** So, it's an integer, and then I'll name it as sensorValue.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=44)** And then I'll initialize it to zero to start with.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=48)** Okay, so in the void setup we need to initialize the serial again.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=60)** Alright, in the void loop here, the very first thing is that we're going to read from the LDR, since we're doing an analog, so we are going to use analog, read, command, and then the value that we are going to read is from the sensorPin.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=81)** Here and then we are going to store the value here in the sensorValue.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=91)** Okay, so every time we read from the LDR, we store it in the sensor value.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=96)** So here we are going to use an if statement, if the value that we read from the sensor is less than, for example four hundred, that means it's dark.
>
> **[1:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=103)** If it's greater than four hundred, that means it's bright.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=107)** So you use an if statement, the sensorValue &lt;= 400 and then I'll just print the value to the serial print here.
>
> **[2:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=123)** and then I'll just say it's dark.
>
> **[2:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=127)** And then I'll output the value.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=129)** The value is.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=136)** print and I'll put it in a different line, and then the output value that I want is the sensor value that I read from the input bin.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=145)** Okay.
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=146)** So I am going to copy then same code here and then I'll put the other if statement wherever it's &gt; 400.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=157)** Now it's bright.
>
> **[2:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=164)** Bright, and then the value is the same thing, I'll just add else here so it's else if.
>
> **[2:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=170)** Okay.
>
> **[2:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=171)** Then I'll add a delay at the end just to have some delay in the code.
>
> **[2:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=178)** Great, so if you're wondering where did I get the four hundred from, I kind of used the values which means zero and 1023.
>
> **[3:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=186)** I did some testing, where I tried 400, 500 and this is the values that worked out for my arrangement.
>
> **[3:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=193)** So any values less than 400, it's dark.
>
> **[3:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=196)** Whenever any values above 400, it's bright.
>
> **[3:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=199)** Okay, so I'm going to go ahead and upload the program to the board.
>
> **[3:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=207)** Okay so I'm going to go ahead and open this here monitor to see the values from the LDR.
>
> **[3:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=212)** And then you can see that it's pretty bright in the room that I'm in.
>
> **[3:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=216)** So in order to see the values changing, I'm going to cover the LDR and see values on the serial monitor.
>
> **[3:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-read-the-ldr-circuit?u=76281980&t=226)** So just here as I cover the LDR the value goes down and whenever I let go the value goes up again.

> [!info]- Semantic Content
>
> **Env Vars:** ldr (7)
> **Code Identifiers:** sensorpin (3), sensorvalue (3)
> **Code Keywords:** if. (1), from, (1), let (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### Joystick module
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=0)** - [Instructor] A joystick is a familiar component that we use with Arduino, as a set of analog inputs.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=10)** It is used in many applications, like robot control, game input, and a tilt control.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=16)** The joystick moves in three directions, x, and y, and also in the z direction by pressing on the joystick.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=25)** In our joystick, the x axis is aligned with the pins on the board.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=32)** The module produces a voltage varying between zero, and five volts.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=36)** Depending on the direction you move the joystick, it produces about 2.5 volts from both x and y outputs, when it is in the resting position.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=48)** Internally, the joystick consists of two potentiometers, one for each axis.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=54)** This is how the schematic diagram for a joystick looks.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=58)** And as mentioned before the Arduino uses a 10-bit Analog to Digital Converter, so the values between zero and five volts, will be mapped from zero, to 1023.
>
> **[1:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=71)** For the x axis when moving toward the pin side, the values approach zero.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=76)** And when you move the joystick to the other side, the values approach 1023.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=82)** When the joystick is in the resting position, it returns a value of about 512.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=87)** it returns a value of about 512.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=90)** For the y axis when moving towards the top, the values approach zero, and when you move the joystick down, the values approach 1023.
>
> **[1:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=101)** This joystick model has five pins, GND and VCC go to the ground at five volts output from Arduino.
>
> **[1:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=110)** X and y go to the Analog Inputs.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=112)** And lastly the switch goes to the Digital Input.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/joystick-module?u=76281980&t=117)** Since the z axis switch is a push button, we need to add a resistance to it, so we can use internal pull up resister inside the Arduino digital pins, when programming.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), module (1)
> **Env Vars:** gnd (1), vcc (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Versions:** 2.5 (1)
> **Speakers:** - [instructor] (1)

#### Wiring up our joystick
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980&t=0)** - [Instructor] So I'm going to go ahead and do the wiring for the joystick.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980&t=5)** The very first thing I'm going to do is I'm going to connect the ground and VCC.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980&t=11)** So ground, the first pin goes to ground here in the Arduino board.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980&t=19)** And the five-volt go to the five volts on the Arduino board.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980&t=27)** For the x-axis, I'm going to connect it to A0 on the Arduino board.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980&t=39)** For the y-axis, I'm going to connect it to A1, which is analog input one on the Arduino board, and finally, the z-axis, which is the switch, I'm going to connect the switch to the digital input eight.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-our-joystick?u=76281980&t=62)** So if you'd like to have a summary of all the connections, here's an overview of the connection that we did for the joystick.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), finally, (1)
> **UI Navigation:** go to (1), switch to (1)
> **Env Vars:** vcc (1)
> **Speakers:** - [instructor] (1)

#### Coding the joystick circuit
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=0)** - Alright! So for the coding for the joystick, we are going to program a very simple code that shows the values that we read from each access.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=10)** So, the very first thing again, we need to initialize what each pin is connected to.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=15)** So integer xPin is connected to A0.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=20)** Integer yPin is connected to analog input one, and then, finally, the z axis.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=32)** I'm going to just put it as a KeyPin that's connected to digital Pin eight.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=40)** Alright. So now in the void setup I'm going to use the internal pull up resistor for the KeyPin which is, um, z axis. So, pinMode, and then the KeyPin and then I'm going to use initialize it is an input and then activate the pull up resistor.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=62)** Okay. And then for the KeyPin, uh, since it's a switch it's either on and off, so I'm just going to write it as a high as a default and whenever I press on it, it changes to zero.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=77)** So I'm just going to write digitalWrite KeyPin and then it only shows it as high.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=88)** And then finally, initialize the serial begin.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=92)** Alright! Now in the void loop, I'm going to print on the serial monitor of the values that I read from each axis.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=105)** So to begin with, serial print, and the the first value that I want is the x axis equal Oh, I just need to add the t in here for the print, and then it's the value that I read from the input, analog input, of xPin.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=136)** Alright. Now the second value that I want to show is the y axis, so I'll do the same thing.
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=146)** Serial print. Now I'm just going to separate them so I'll add this symbol, and then y equals So the values for the y axis are going to be the values that read from the the A1.
>
> **[2:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=163)** Print. And then again, words analog read, and it's the yPin.
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=175)** Alright! So, the last thing is the values for the z axis.
>
> **[3:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=182)** And it's a serial print.
>
> **[3:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=197)** This time I'm going to use serial print new line because I want to show the next one in the next line.
>
> **[3:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=203)** And then this one, since it's a switch, so the difference is that this one is a digital read, not analog read.
>
> **[3:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=210)** Read. And then on the value of the read is from the keyPin.
>
> **[3:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=217)** Pin over here. And then finally, I'll just add a delay event to show the values.
>
> **[3:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=226)** Awesome. So I'm going to go ahead and upload the program.
>
> **[3:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=234)** And then I click on the serial monitor to see the values on the resting position.
>
> **[4:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=240)** You notice that they are around five hundred and twelve for x axis, y axis, and the z is high because I'm not pressing on it.
>
> **[4:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=248)** So I'll go ahead and I'll move the joystick on the x axis toward the pins.
>
> **[4:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=255)** (cords moving) And then you notice that the x axis is getting lower, the values all the way to almost zero.
>
> **[4:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=269)** The same thing with the y axis.
>
> **[4:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=270)** So I'm going to move it to the top.
>
> **[4:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=272)** It gets to where it's zero, and when I move it to the down, It increases the values.
>
> **[4:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-circuit?u=76281980&t=278)** With the z axis, whenever I press on the push button it shows zero. Whenever I let go it shows one.

> [!info]- Semantic Content
>
> **Non-Speech:** (typing on computer) (14)
> **Code Identifiers:** xpin (2), ypin (2), pinmode (1), digitalwrite (1), keypin (1)
> **Code Keywords:** finally, (3), switch (2), let (1)
> **Definitions:** is an  (1), is a  (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** setup (1)
> **Speakers:** - alright (1)


### 2. Analog Outputs

#### How Arduino generates analog output
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=0)** - [Instructor] To generate a analog output signal, the Arduino uses a converter that is called Digital to Analog Converter, or DAC.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=11)** The DAC receives a digital value from the microcontroller and converts it to an analog voltage.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=20)** The value of analog voltage is determined by the digital value sent to the ADC.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=27)** The larger the digital value, the larger the analog output voltage.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=32)** For generating analog output signals, the Arduino board uses pulse with modulation with the digital pins.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=41)** The pulse with modulation digital pins are marked on the Arduino board with a tilde before the digital pin number.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=49)** Pulse with modulation is a technique for getting analog results with digital means.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/how-arduino-generates-analog-output?u=76281980&t=56)** The generated analog output voltage using pulse with modulation is between zero and five volts.

> [!info]- Semantic Content
>
> **Env Vars:** dac (2), adc (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Understanding pulse-width modulation (PWM)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=0)** - [Instructor] Pulse with Modulation or PWM simulates an analog output signal using a digital signal.
>
> **[0:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=8)** Let's see how it works.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=11)** We know that the digital values are zero or one.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=14)** So they are either low or high.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=18)** The pulse with modulation technique controls the amount of time a digital output toggles between high and low values.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=26)** This is called the duty cycle of the signal.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=30)** So this is a 0% duty cycle.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=33)** This means that the digital output is always at the low-level.
>
> **[0:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=39)** With a 20% duty cycle the high is kept on for 20% of the total period.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=47)** When the duty cycle is 50%, the high value is applied half of the time, so it's on for half of the period.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=57)** The same principle applies when having 70% duty cycle and 100% duty cycle, where the digital output is always high.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=67)** The duration of the on time is called the pulse width.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=73)** To get varying analog values, you change or modulate that pulse width.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=80)** The length of the duty cycle determines the simulated analog voltage generated by the digital interface.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=88)** The longer the duty cycle, the higher the analog voltage that it simulates.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=95)** A duty cycle of 100% means that the digital output is always at the high level, which generates an output voltage of five volts.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=107)** A duty cycle of 0% means that the digital output is always at the low level, which generates an output voltage of 0 volts.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-pulse-width-modulation-pwm?u=76281980&t=118)** For the values in between we use a duty cycle to calculate the output voltage by multiplying five volts by the duty cycle percentage.

> [!info]- Semantic Content
>
> **Definitions:** means that (3), is called (2), is a  (1)
> **Code Keywords:** let (1), interface (1)
> **Env Vars:** pwm (1)
> **Speakers:** - [instructor] (1)

#### Understanding the analogWrite function with PWM
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=0)** - [Instructor] The function to use the pulse width modulation is analogWrite.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=6)** analogWrite writes an analog value, which is the pulse width modulation wave, to a pin.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=12)** The pin parameter specifies the digital interface number to use, the value parameter specifies the amount of time the digital pulse is set to high.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=24)** The duty cycle is now the percentage, its value is between zero and 255.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=32)** So when sending the values to the analog devices, you write values between zero and 255, where 255 value is 100% duty cycle, generating a five-volt analog voltage from the digital interface.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=50)** And the zero is for the zero duty cycle, generating zero volts.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=57)** And the values in between zero and 100% duty cycle is between zero and 255 scale, so the output voltage is multiplying the duty cycle percentage by the 255.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-analogwrite-function-with-pwm?u=76281980&t=72)** You can read more about pulse width modulation by going to the Arduino website to further understand the concept.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), function (1)
> **Code Identifiers:** analogwrite (2)
> **Speakers:** - [instructor] (1)

#### Wire up an LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=1)** - [Narrator] All right, so in this example, we are going to generate pulse width modulation from Arduino to brighten an LED and to dim it.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=10)** So I'm going to go ahead and start wiring.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=13)** So it's a very simple circuit, here is a resistor, that's a 33 ohms resistor.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=20)** And then I'm going to connect the LED to one side of the resistor.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=25)** So the long side of the LED is going to the side of the resistor.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=31)** Now the other side of the LED is going to be connected to ground from the Arduino.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=40)** And the other side of the resistor is going to be connected to pin number nine from the Arduino.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=50)** And the reason why we selected pin number nine, because it has the tilde sign beside it to generate a pulse with modulation, okay?
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wire-up-an-led?u=76281980&t=58)** And the last thing is just connecting the Arduino to the computer.

> [!info]- Semantic Content
>
> **Env Vars:** led (4)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Write code to use PWM with the LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=0)** - [Instructor] So for the coding for this LED, I'm going to use one of the built-in examples within Arduino Library.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=7)** So I'm going to go ahead to file, examples, analog, and then I'll select fading.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=17)** So, I'll go ahead here, and then I'll simply little bit about the code.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=21)** So on line 19 here, we are connecting the LED pin to a number nine, which we did with a wiring.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=28)** In the void loop.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=29)** You can see there are two for loops.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=32)** The first for loop, that starts from zero, all the way to 255.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=37)** Because we're sending values from zero to 255.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=40)** And then the increment is five units.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=44)** In line 29, you see that the analog write, because this is the command that we use when we're sending pulse with modulation.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=52)** We need to specify the pin.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=54)** This case is LED pin that we have.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=56)** And then the value that's being changing is the fade value from the for loop.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=61)** And then this for loop is increasing from zero all the way 255, so the light will increase in brightness.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=70)** The second for loop from line 35 all the way to line 39.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=76)** This for loop is actually going the other way around, in order to make the LED dimmer.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=81)** So it starts from 255 all the way to zero.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=85)** And then it's being de-incremented by five units as well.
>
> **[1:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=89)** We're using analog write specifying the pin number, and then the value in the second part.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=95)** And then a delay just in order to see it.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=97)** So I'm going to go ahead and upload the program to the Arduino Board.
>
> **[1:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/write-code-to-use-pwm-with-the-led?u=76281980&t=104)** Okay, and as you can see, though, we have generated a pulse with modulation from a digital pin out from the Arduino, and then the light changes the brightness as we go through the two for loops.

> [!info]- Semantic Content
>
> **Env Vars:** led (4)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Understanding the map() function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=0)** - [Instructor] In the previous example, we generated password modulation, using the software.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=6)** Now if we want to use another external device to change the light intensity of the LED, we use map function.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=15)** Let's say, I have values from potentiometer that's connected to the Arduino, and I want to use these values to change the light intensity of the LED.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=26)** These two values are not in the same range.
>
> **[0:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=31)** So map function comes in handy in this situations.
>
> **[0:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=34)** Map function remaps a number from one range to another.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=41)** We have fromLow, and fromHigh values, where low is the minimum value of the original range, and high is the maximum value of the original range.
>
> **[0:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=52)** ToLow, and tohigh, where the low is the minimum value of the mapped range, and toHigh is the maximum value of the mapped range.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=63)** The fromValue is the number to be mapped.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=66)** For example, it could be values read from another sensor, in our case, it's the Potentiometer.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=72)** And the new mapped value gets saved in another variable, we call it the toValue, and we send this to the LED.
>
> **[1:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=81)** So if you want to map values between zero and 1023, to, zero to 255, the lower value first, and then the higher next.
>
> **[1:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=92)** The same thing for any other values.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/understanding-the-map-function?u=76281980&t=96)** If you want to learn more about the map function, you can go to the Adruino website, where they explain more about this function.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (1), case, (1)
> **Code Identifiers:** fromlow (1), fromhigh (1), tohigh (1), fromvalue (1), tovalue (1)
> **Env Vars:** led (3)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Wiring a potentiometer to control LED
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=1)** - [Instructor] All right, so I still have the wiring for the LED.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=3)** I'm going to start wiring the potentiometer to it.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=6)** The only thing I'm going to change is that I'm going to move the ground here to a common ground on the breadboard, and then I'll add the potentiometer.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=15)** I'm going to add it on the row off 55.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=20)** The right-hand side of the potentiometer goes to five volt.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=25)** This one is connected to five volts.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=29)** The left-hand side goes to ground.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=36)** And, the middle pin is going to be connected to an analog input which is A0 on the Arduino board.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=44)** Now, I'm going to go ahead and connect the voltage, the five volt, and the ground.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=49)** So, five volts...
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-potentiometer-to-control-led?u=76281980&t=63)** And, then finally the ground goes to ground on the Arduino board.

> [!info]- Semantic Content
>
> **Env Vars:** led (1)
> **Speakers:** - [instructor] (1)

#### Coding to control the LED with a potentiometer
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=0)** - [Instructor] All right, so in this example, we are going to use the potentiometer input to control the brightness of the LED.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=7)** So the very first thing we are going to do is we are going to initialize the connection, the pins that we connected to the potentiometer and the LED.
>
> **[0:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=16)** So int, and then I'm going to name it as analogPin, and this is the input from the potentiometer, which is connected to A0.
>
> **[0:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=29)** And then, the pin that was connected to LED, which is pin nine, which I'm going to name it ledPin equals nine, which is the digital pin nine.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=40)** In the next step, I'm going to initialize the variable that I'm going to use to store the value that's coming from the sensor.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=47)** So input, I'm going to name it inputValue, and then initialize the variable that I'm going to store the output mapped values, and then input outputValue, and then I'll initialize it with zero to start with.
>
> **[1:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=67)** Now in the void setup, we are going to initialize the pinMode for the two pins that we have for LED.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=75)** Pin, it's in OUTPUT, and the pinMode for the potentiometer is an input.
>
> **[1:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=87)** logPin, and that's INPUT.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=95)** Okay.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=96)** And then if you're using the serial monitor, you can initialize the Serial.begin here.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=105)** All right.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=108)** In the void loop, the first thing that we are going to use is to read the values from the potentiometer.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=115)** Since the potentiometer is connected to an analog input, we are going to use analogRead and then specify that this is the one that's coming from the potentiometer.
>
> **[2:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=127)** And I'm going to save this in the variable that I created, which is the inputValue.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=136)** All right.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=138)** Then, for the outputValue, the value that I'm going to send to the LED, I'm going to use a map function, the value which is the input from the potentiometer value.
>
> **[2:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=153)** The from values is from zero and 1023, and then the values that I'm going to map them is to zero, 255, because we are generating pulse with modulation.
>
> **[2:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=168)** Now, since we're sending pulse with modulation, I'm going to use analogWrite.
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=175)** We specify the pin that we want, which is the ledPin, and then the value is the outputValue.
>
> **[3:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=185)** You can also use the serial monitor to output any of the values that you want.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=189)** I'm just going to leave it the way it is now and then I'll send it to the Arduino board.
>
> **[3:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=197)** All right, so I'm going to use the potentiometer to change the resistance.
>
> **[3:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=202)** And then you can see as I change the resistance, the LED starts to light up all the way to the maximum.
>
> **[3:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-led-with-a-potentiometer?u=76281980&t=211)** And then when I decrease the resistance, the LED changes the brightness as well.

> [!info]- Semantic Content
>
> **Code Identifiers:** outputvalue (3), ledpin (2), inputvalue (2), pinmode (2), analogpin (1)
> **Env Vars:** led (7), output (1), input (1)
> **Code Keywords:** function (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 3. Interfacing with a Stepper Motor

#### Stepper motor introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=0)** - Stepper motors are one of the types of motors that are available to work with your Arduino Projects.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=7)** Instead of rotating the shaft at a constant speed stepper motors move in discreet steps using controllers to apply voltage to the motor.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=19)** Stepper motors have multiple coils that are organized in groups called phases.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=26)** By energizing each phase in sequence the motor will rotate one step at a time.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=33)** One of the common applications for a stepper motor is a 3D printer.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=40)** The advantage of stepper motors is that you can achieve a much higher precision movement because they provide accurate at a fixed angle movement.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=51)** There are two common model of stepper motors.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=54)** Unipolar and bipolar.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=56)** Which differ in how the internal coils are wired.
>
> **[1:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=61)** For unipolar stepper motors it has five wires and four coils.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=68)** All of the common coil wires are tied together internally and brought out as a fifth wire.
>
> **[1:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=76)** The center connection used as the power connection.
>
> **[1:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=79)** They are called unipolar steppers because power always come in on this one pole.
>
> **[1:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=88)** So here's an example of a unipolar stepper motor that's 28BYJ-48 stepper motor.
>
> **[1:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=97)** The bipolar stepper motor usually has four wires coming out of it.
>
> **[1:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=103)** Unlike unipolar stepper motors, bipolar stepper motors have no common center connection and they have two Independent sets of coils instead.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-introduction?u=76281980&t=115)** And this is an example of a bipolar stepper motor and is called NEMA-17 bipolar stepper motor.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1), is called (1)
> **Env Vars:** nema (1)
> **Speakers:** - stepper (1)

#### Unipolar stepper motors
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=0)** - [Instructor] Ill go through the tab that I am going to use for our example, which is Unipolar Stepper Motors.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=6)** This type has four coils.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=10)** Now the driving method for Stepper Motors can be categorized as Four-Phase and Eight-Phase Driving.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=18)** When using a Four-Phase method it's done by energizing each phase in sequence, the motor will rotate one step at a time.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=27)** You can see on the slides here that the first coil is being energized in the first pulse, and all the rest coils are zero.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=36)** When the second coil is being energized, then the rest of the coils are zero, and so on.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=42)** For the third one and for the fourth one.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=46)** And this is the Truth Table for Four-Phase when driving a Stepper Motor.
>
> **[0:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=53)** For an Eight-Phase driving method, the energizing is being done this way.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=59)** First, the first coil gets energized.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=63)** Then in the second step between coil one and coil two.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=68)** The third step is coil two and then so on for the rest of the coils.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=74)** You can see that a step of the coil and a step between the two coils.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=80)** And this is the Truth Table for Eight-Phase when driving the Stepper Motor.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/unipolar-stepper-motors?u=76281980&t=85)** The Eight-Phase is more accurate in steps but little more complexed when we do the coding.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Stepper motor driver board ULN2003
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=0)** - [Instructor] Stepper motors require a controller to apply voltage to the motor in steps.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=7)** The Arduino board and other microcontrollers cannot directly driver stepper motors.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=13)** A driver circuit is necessary and we'll use a ULN2003 for our example.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=21)** Here are two common models for stepper motor drivers.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=25)** Both work the same way.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=28)** One side goes to the Arduino and the other side goes to the stepper motor.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=35)** Here's an image of a ULN2003 stepper motor driver board.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=41)** There are four LEDs on the top indicating which phase is energized.
>
> **[0:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/stepper-motor-driver-board-uln2003?u=76281980&t=46)** For the DC power, we must use a separate power supply, not the Arduino, because it cannot supply enough current.

> [!info]- Semantic Content
>
> **Env Vars:** uln2003 (2)
> **Code Keywords:** require (1)
> **Speakers:** - [instructor] (1)

#### Wiring a stepper motor to Arduino
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=1)** - [Instructor] Okay, so we are going to start wiring the driver to the pins with an Arduino.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=7)** The very first thing is I'm going to connect in one here.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=11)** That's going to go to the digital pin with Arduino board to pin eight.
>
> **[0:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=20)** And two is going to go to pin nine.
>
> **[0:27](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=27)** And three to 10.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=40)** And then finally four to 11.
>
> **[0:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=51)** The other side of this stepper motor driver is going to be connected to the stepper motor.
>
> **[0:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=57)** So I am going to go ahead and connect that here.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=65)** So to provide power to the motor driver circuit, we are going to use a nine-volt battery.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=77)** And I'm going to use a power connector to connect that to the driver.
>
> **[1:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=84)** Here.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=85)** And then the positive goes to the positive side.
>
> **[1:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=93)** And then the negative goes to the negative.
>
> **[1:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-a-stepper-motor-to-arduino?u=76281980&t=103)** All right, the last step is just connecting the Arduino to the software.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Coding to control the motor directly
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=0)** - [Instructor] So there are two ways to driver the stepper motor.
>
> **[0:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=3)** One is by using a built-in function with an Arduino, and the other one is by energizing each phase at a time manually.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=11)** I'll start with the energizing each phase manually, and then we'll talk about the function in the next few videos.
>
> **[0:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=19)** So, the very first thing I'm going to do is I'm going to initialize each input from the motor driver, so it's an integer motor pin one that was connected to digital pin eight in the Arduino board.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=37)** I'm just going to go ahead and copy the same code, and then I'll be changing the second one to be a nine, the third one is connected to 10, and then finally the fourth one was connected to 11.
>
> **[0:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=58)** Okay.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=59)** I'm going to initialize the delay time here, so I'm going to go with integer delay time to be two, for example, and then we'll change that later in the code.
>
> **[1:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=72)** In the void setup I'm going to set the pin mode for each of the motor pins to be as an output.
>
> **[1:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=80)** So, pin mode for motor pin one is output, and I'll copy the same code for the rest of them, and then I'll change each pin here.
>
> **[1:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=100)** Okay.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=102)** Now, in the void loop, I'm going to energize each phase separately, so I'm going to use the truth table of four phase driving method.
>
> **[1:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=115)** We can do this by sending digitalWrite to each pinout, write, the first one which is motor pin one, this one we set it to high, and then the rest of them are low.
>
> **[2:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=130)** If you remember in the truth table, we had it as zeroes.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=137)** Low, I'm just going to go ahead and copy that, and then I'll change the motor pins to two, three, and four.
>
> **[2:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=158)** Alright, so now this one is that the first coil is energized while everything else is low, and then I'll add a delay here, which is specifying by the delay time that I have in line number seven.
>
> **[2:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=172)** So, delay time here.
>
> **[2:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=176)** Okay, now for the second step where we need to energize the second phase, so I'm going to copy here the code, and this time, the one that's high is the second one, so this is the only one that's being energized while everything else is low.
>
> **[3:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=198)** So I'll go ahead and copy for the rest of them, and then you can go ahead and continue the code.
>
> **[3:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=211)** Alright, so I'm going to go ahead and upload the program to the Arduino board, and see how the stepper motor is working.
>
> **[3:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=222)** Okay, so you can see that the motor is moving according to the code that we have.
>
> **[3:46](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=226)** I've added just a little bit tape here so you can see the movement on the screen.
>
> **[3:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=231)** Okay.
>
> **[3:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-to-control-the-motor-directly?u=76281980&t=232)** You can give also a try with the eight phase coding if you want, by following the same method by energizing each step at a time.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), continue (1)
> **Cross-References:** in the next (1), later in (1)
> **Code Identifiers:** digitalwrite (1)
> **Analogies:** for example (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Exploring the Stepper Library
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=0)** - [Instructor] A Stepper Library is a built-in library within Arduino that allows you to control uni-polar or bi-polar stepper motors.
>
> **[0:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=9)** It comes with different functions that are used in the coding.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=14)** The first one is Stepper Function.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=18)** It is used at the top of this cache above steps and loops, where steps are the number of steps in one revolution of the motor, and pins one to four are the ones connected from the motor driver to the Arduino board pins.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=38)** Number of steps per revolution are given in the data sheets.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=41)** I'll go through couple of examples of data sheets of stepper motors.
>
> **[0:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=45)** For example, this one, it's given in angles and degrees.
>
> **[0:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=50)** Another example here, it's given by the number of counts per revolution.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=56)** Let's see how to calculate steps if it was given in degrees.
>
> **[1:02](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=62)** Steps per revolution is the way we refer to how the motor moves.
>
> **[1:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=68)** If it was given in degrees, we call it resolution or degrees per step.
>
> **[1:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=75)** Simply means in one step, how many degrees the motor is moving.
>
> **[1:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=82)** A full revolution is 360 degrees, so now, if a stepper motor resolution is 90 degrees, this means it moves 90 degrees in each step.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=96)** So, in order to know how many steps per revolution, we simply divide 360 by the number of resolution to give the number of steps per revolution.
>
> **[1:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=108)** Now, for our example, the 90 degrees resolution, I know that it needs four steps in order to finish a full revolution.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=117)** So, here's the equation for the steps per revolution, equals 360 over the step angle.
>
> **[2:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=125)** Now, for our stepper motor, let's check the data sheet.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=129)** You can see that I chose the number 64 in the data sheet, the number of steps.
>
> **[2:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=134)** I'll go through the calculation of how to get the number, because not every data sheet will have the number of steps in there.
>
> **[2:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=142)** Alright, so for our example now to find the number of steps within the stepper motor function, I just divide 360 over 5.625, and this will give us 64 steps.
>
> **[2:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=156)** And then I just need to add that inside the function when I do the coding.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=161)** Now, since Arduino Stepper Library runs in a four step mode, so the angle will be 11.25 since it was given as 5.625
>
> **[2:55](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=175)** for eight step sequence.
>
> **[2:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=177)** So now, the total steps per revolution is 32 steps.
>
> **[3:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=184)** The number of steps per revolution range between four to 400.
>
> **[3:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=188)** Now, it depends on each application and the model design.
>
> **[3:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=193)** The second part of the function is the sequence.
>
> **[3:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=197)** The sequence are coming from the motor driver pins.
>
> **[3:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=200)** In one, in two, in three, and in four.
>
> **[3:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=204)** Sometimes, the sequence changes for each motor design and you might need to modify the sequence order in the coding.
>
> **[3:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=213)** Each LED on the motor driver is for a coil, so you need to pay attention to the order of the LED lighting up.
>
> **[3:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=221)** And the common proper sequence, which is going to work for our stepper motor, is one, three, two, four.
>
> **[3:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/exploring-the-stepper-library?u=76281980&t=230)** And this needs to be done in the software, not in the hardware wiring.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2)
> **Versions:** 5.625 (2), 11.25 (1)
> **Env Vars:** led (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Coding for the stepper motor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=0)** - Alright so we are going to keep the same ordering that we had from our previous example.
>
> **[0:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=5)** This time, when we do the coding, we are going to use the stepper library and using the stepper functions.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=13)** Go ahead and click on file, Example, stepper library, and then select one step at a time.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=26)** Okay, so I'm going to use one of the built-in examples that comes in the stepper library.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=30)** So I'll explain the code one at a time, so we understand what each function is doing.
>
> **[0:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=36)** In line 21 we can see that we included the library every time that we use a specific library with Ardurino we need to include that at the top.
>
> **[0:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=44)** In line 23 we have the steps per revolution.
>
> **[0:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=47)** They have a number of 200.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=49)** We can keep that number, or we can change it to the one of our stepper motor.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=54)** So I'm going to go ahead and change the number to the number that we calculated, which is 32.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=60)** In line 27, you can see this is the stepper function.
>
> **[1:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=65)** In the stepper function, we have the number of steps, and then the sequence.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=70)** The sequence is eight, nine, ten, eleven.
>
> **[1:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=74)** So this is the default one that they have in the library.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=77)** I'm going to give it a try with the sequence that they have, and then I'll show you the proper sequence for our stepper motor.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=83)** 29 is the step count that we are going to use it in order to show the number of steps using serial monitor.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=91)** In the void set up, we just initialize the serial begin, if you want to use the serial monitor.
>
> **[1:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=95)** Now in the void loop, there is another function that's called steps.
>
> **[1:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=100)** In the steps, we specify the number of steps we want to move the motor.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=105)** Here we have just number one, because we want to go one step at a time in order to see the proper sequence.
>
> **[1:52](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=112)** And then the rest of the code is just simply printing the number of steps using the serial monitor.
>
> **[1:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=118)** So the reason why I'm using this example to show you the sequence using the stepper function.
>
> **[2:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=124)** I'm going to use the default one to see the lighting up of the motor driver.
>
> **[2:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=129)** So before we upload the program, we need to save it, because we made some changes to the example that we have in the library.
>
> **[2:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=135)** So I'm going to go ahead and save it as another copy.
>
> **[2:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=140)** And then upload the program.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=145)** Alright, so now you can see that the lighting up are not in sequence.
>
> **[2:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=149)** So each LED is for one of the coils of the stepper motor.
>
> **[2:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=154)** So let's go back to the coding, and change the sequence of the stepper motor function.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=161)** So the proper sequence for our stepper motor is eight, ten, nine, eleven.
>
> **[2:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=167)** So I'm going to change that.
>
> **[2:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=169)** This is ten, and here is nine.
>
> **[2:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=173)** Okay, I'll upload the program again to the Ardurino board.
>
> **[3:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=180)** Alright, and now you can see that the LED are lighting up in sequence, telling us that the motor is moving one step at a time by energizing each coil in sequence.
>
> **[3:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-stepper-motor?u=76281980&t=192)** And then you're probably not going to be able to see the motor moving, because it's moving very slow one step at a time.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (1)
> **Env Vars:** led (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - alright (1)

#### Coding using the Stepper() function
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=0)** - [Instructor] Okay, so I'm going to use another example that within the stepper motor library.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=6)** I will make some adjustment according to our stepper motor to make it move a full revolution or half revolution, and to see the numbers that we need to put in.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=17)** So, go ahead and click on File, Examples, Steppers, and then this time click on one revolution.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=30)** All right, let's go through the code one at a time.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=37)** Again, in line number 18, the first thing that you need to include when using any of the libraries within Arduino is to include the library at the top, and here we're using the stepper motor library.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=48)** In line 20, we have the stepsPerRevolution to be 200.
>
> **[0:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=54)** Now, if I want to change this to make it move a full revolution for our stepper motor, I'm going to explain what is the proper number that we need to put in here.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=66)** Now, to find the number of steps to complete one revolution, we need to consider the gear ratio.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=73)** The gear ratio, you find it from the data sheet.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=77)** You can see here in the data sheet that it shows the speed variation ratio is 1/64.
>
> **[1:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=86)** So, we simply multiply the number of steps per revolution, the one we calculated from previous video, to be 32 times 64 to get the number of steps per revolution, which, in this case, is 2,048.
>
> **[1:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=102)** Now, we take that number and then I change the code accordingly.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=107)** So, I'll change the number here to make it 2,048.
>
> **[1:53](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=113)** In line 24, this is our stepper function, so I'm going to change it to put the number that we calculated, which is 32, here.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=121)** Now, the proper sequence for our motor is eight, 10, nine, 11.
>
> **[2:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=132)** Now, in the void setup, there is a function that's called setSpeed.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=137)** In this function, we are specifying the speed that we want the motor to run.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=144)** The speed that we have in here is the speed in rotation per minute, rpm.
>
> **[2:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=150)** This number supposed to be a positive number, so you can specify the speed that you want for that specific motor.
>
> **[2:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=159)** So, I can leave it to 60 or I can pick any number that I want.
>
> **[2:43](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=163)** I'll just pick 150, for example, to make it a little bit faster.
>
> **[2:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=168)** In the void setup in line 30, we're initializing the serial begin if you want to print in anything on the serial monitor.
>
> **[2:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=178)** Now, in void loop, in line 36 we have another function which is step function.
>
> **[3:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=184)** Previously we used number one because we wanted to move the step one step at a time.
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=190)** The step function turns the motor a specific number of steps at a speed determined by the setSpeed.
>
> **[3:20](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=200)** The number that you have within the step function, if it's positive it moves in one direction, if it's a negative it moves in another direction.
>
> **[3:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=209)** Now, this function is blocking.
>
> **[3:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=212)** It will wait until the motor has finished moving in order to pass into the next line of your sketch.
>
> **[3:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=219)** So, if I want to move the motor a full revolution, I can use the number that I have in line 20 where we had 2,048.
>
> **[3:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=230)** If I want to move it half of the revolution, I can just add half in here in order to move it half direction.
>
> **[3:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=239)** In line 41 you notice that we have the same stepsPeRevolution, but we have a negative sign.
>
> **[4:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=246)** That means it moves in the other direction.
>
> **[4:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=248)** So, I'll just go ahead and move it, put it over two so I can move half revolution in one direction and half revolution in the other direction.
>
> **[4:19](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=259)** Again, if we're making any changes to the prebuilt examples, I'm going to go ahead and save it in another example.
>
> **[4:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=268)** Then, I'll upload the program to the Arduino.
>
> **[4:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=273)** So, now we can see that the motor is moving half revolution in one direction, and it goes on the other side once it's finished.
>
> **[4:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-using-the-stepper-function?u=76281980&t=285)** You can definitely change the speed if you want to make it faster or slower according to your project.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (1), case, (1), pass (1)
> **CLI Commands:** make (6), find (2)
> **Code Identifiers:** setspeed (2), stepsperrevolution (1), stepsperevolution (1)
> **UI Navigation:** click on (2)
> **Prerequisites:** setup (2)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 4. Projects

#### Using the joystick to control LEDs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980&t=0)** - [Instructor] In this section, I'm going to integrate couple of the components that we worked on.
>
> **[0:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980&t=6)** The first project, we are going to use LEDs with a joystick.
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980&t=11)** As we move through each axis, the light intensity changes accordingly.
>
> **[0:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980&t=17)** This example can be applied as part of a project where you need to have an LED to indicate what axis you're using and what direction.
>
> **[0:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980&t=26)** And since the values of the joystick changes between zero and 1,023, then we can use these values to change the light intensity of the LED.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980&t=37)** This is done for the X-axis and for the Y-axis too.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-the-joystick-to-control-leds?u=76281980&t=42)** For the Z-axis, whenever we press on the joystick, a yellow LED lights up and turns off when we release it.

> [!info]- Semantic Content
>
> **Env Vars:** led (3)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Wiring up the joystick and LEDs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-leds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-leds?u=76281980&t=0)** - [Instructor] So this is how we are going to do the wiring for this project.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-leds?u=76281980&t=4)** Why don't you pause the video and try to attempt the wiring according to the pins that I have on the slide in here?
>
> **[0:11](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-leds?u=76281980&t=11)** Just make sure when you connect the LEDs that you select the digital pins that have a tilde beside them to indicate the ones that we need for the pulse with modulation.
>
> **[0:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-leds?u=76281980&t=22)** Okay, so here is the finished wiring.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-leds?u=76281980&t=24)** We have the joystick and the three LEDs.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-leds?u=76281980&t=28)** The final thing is just connecting the Arduino board to the computer.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Coding for the joystick and LEDs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=0)** - [Instructor] To do the coding for this project, I provided a starter file.
>
> **[0:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=4)** So why don't you go ahead and open the starter file for joystick and LEDs, and then I'll walk you through the coding.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=12)** So for lines six all the way to line 10, I identify the pins that I'm connecting the ones from the joystick, for the x-axis, y-axis, and for the z-axis.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=24)** I also initialize some variables that are going to store the values that we read from the analog pins into them.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=33)** For lines from number 12 all the way to number 17, I identify the pins that I'm connecting the LEDs to.
>
> **[0:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=41)** As with lesson variables, we are going to store the new mapped values for each of the LEDs.
>
> **[0:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=49)** In the void setup, this is the pin mode for the z-axis, as well as for the three LEDs, and initializing the Serial.begin.
>
> **[0:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=59)** In the void loop, we are going to do the programming here.
>
> **[1:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=63)** So the very first thing we are going to do is to read from the analog pin, and save it into a variable.
>
> **[1:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=70)** So x-value equals, since we're reading from the joystick, so it's an AnalogRead, and the pin that we're reading from is the x-axis, so it's the xPin.
>
> **[1:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=85)** So I'm going to use Serial.print to print the value that I'll read, and it's the value xValue, then I'm just going to use decimal in order to show the values in decimal.
>
> **[1:39](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=99)** The next step is I'm going to use a map function to map the values I read from the joystick in order to send them to the LEDs.
>
> **[1:49](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=109)** So redX will be the variable that I store the new map value, map function.
>
> **[1:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=117)** xValue is the variable that I'm going to remap it.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=121)** The range is zero, and 1023, and then the new range is zero to 255, which is the possible modulation that I'm sending to the LED.
>
> **[2:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=136)** Finally, I'll send the values to the LED using analogWrite.
>
> **[2:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=144)** Write.
>
> **[2:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=145)** This time I'm using the redLED, and the value that I'm sending is redX that I got from line 34.
>
> **[2:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=157)** I'll do the same thing for the y-axis, I'll just copy the code that I did, and I'll paste it here.
>
> **[2:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=165)** And then I'll make the changes accordingly, so I'll change the y-axis to the yPin, and I'm showing the yPin values.
>
> **[2:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=177)** Now the new mapped value is the blueY.
>
> **[3:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=184)** The value that I'm doing is the uValue, and then finally, I'm sending that to the blueLED, and the values that I'm sending for the pulse width modulation is blueU that I got from line 40.
>
> **[3:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=201)** Okay, so for the z-axis, I'm going to go ahead and read the value from the push button.
>
> **[3:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=208)** Since it's a push button, so I'm using a digital read this time, so I'll save that in yellowZ equals digitalRead, and then the value that I read is I read it from keyPin.
>
> **[3:44](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=224)** And if I want to show it, so I'll just use Serial.print to show the value on the serial monitor.
>
> **[3:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=231)** This time I'm going to use the Serial.print newline, because I want to show the values in each line.
>
> **[3:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=239)** And then finally, the values that I want to see is the yellowZ.
>
> **[4:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=246)** So in order to send the value that I read from the push button to the LED, the default state of the push button is high.
>
> **[4:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=257)** So every time I press on the push button I receive a low in order to send it to the LED.
>
> **[4:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=263)** So in order to do this I'm going to show you a code where I use only one line, here.
>
> **[4:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=272)** I'm writing to yellowLED, and since it works the other way around, I'm just going to use and take advantage of the state of the push button in order to send the values to the LED.
>
> **[4:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=285)** So now in order to send the values, and to turn on and off the LED, I'm going to take the values that I take from the push button.
>
> **[4:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=294)** The default state of the push button is high, so every time I press on the push button, it sends low.
>
> **[5:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=301)** So I'm going to take that and put it in the digitalWrite by using the not operation.
>
> **[5:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=307)** So I send the value to the yellow LED, and then I use the not symbol for the state of the push button.
>
> **[5:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=316)** You can also use if statement, if that makes it easier for you to do it, I just thought I would show you this code.
>
> **[5:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=323)** So I'm going to go ahead and upload the program to the Arduino board.
>
> **[5:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=331)** Okay, I'm going to go ahead and open this here monitor so you can see the values of each axis when it is in the resting position, and I'm going to go ahead and move the joystick toward the pins on the x-axis.
>
> **[5:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=345)** So I'll move it slowly so you can see the values going down on the serial monitor, as well as the light intensity goes to zero.
>
> **[5:54](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=354)** So the LED is off at this point.
>
> **[5:58](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=358)** So the same thing for the y-axis, whenever I move the joystick on to the top, the LED turns off.
>
> **[6:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=366)** And the LED intensity will increase when you go to the other side.
>
> **[6:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=370)** For the z-axis, I'll just press on the push button.
>
> **[6:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-for-the-joystick-and-leds?u=76281980&t=372)** Turns on, when I let go, it turns off.

> [!info]- Semantic Content
>
> **Code Identifiers:** xvalue (2), redx (2), ypin (2), yellowz (2), xpin (1)
> **Env Vars:** led (10)
> **Code Keywords:** finally, (3), function (2), let (1)
> **UI Navigation:** open the (1), go to (1)
> **Exercise Files:** starter file (2)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Using an LDR sensor to control a motor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-an-ldr-sensor-to-control-a-motor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-an-ldr-sensor-to-control-a-motor?u=76281980&t=0)** - [Instructor] In this second project we are going to use the LDR to change the speed of the Stepper Motor as the light intensity changes.
>
> **[0:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-an-ldr-sensor-to-control-a-motor?u=76281980&t=10)** This can be used in applications or projects like a line following robot where you might need to detect light intensity as an input to the project.

> [!info]- Semantic Content
>
> **Env Vars:** ldr (1)
> **Speakers:** - [instructor] (1)

#### Wiring
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring?u=76281980&t=0)** - [Instructor] All right, so for the wiring for this project I'm connecting the stepper motor to digital pins, two all the way to five, and I'm connecting the LDR sensor to analog input A0.
>
> **[0:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring?u=76281980&t=13)** So why don't you give that a try and try to connect the stepper motor and the LDR according to the connection that I have on the slide here.
>
> **[0:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring?u=76281980&t=23)** So this is the wiring for the project.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring?u=76281980&t=25)** Just notice here that I'm using the arragement of the LDR where I have the five volt coming into one side of the LDR and the ground is connected to the sensor.
>
> **[0:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring?u=76281980&t=35)** All right, so let's see how we can do the coding for this project in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ldr (4)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Coding the LDR and sensor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=0)** - [Instructor] Alright so now to do the coding for this project, I have a starting file that you can open that's called Stepper_Motor_LDR where we are going to program in that the speed of the stepper motor will change with the light intensity.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=15)** So here, in line number three again, we need to include the stepper motor library so we have in here, in line number five we have our Stepper function.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=25)** I have the steps per valuation which is 32 and the way we did the wiring, remember that the motor sequence is one, three, two, four so it's going to be pin two, four, three, and five.
>
> **[0:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=40)** In line number seven, we have the sensor pin where we connect the LDR to the Arduino board then I'm initializing two variables, one to save the values of the LDR which is sensor value and one to initialize the value for the motor speed that we are going to use in that function for that.
>
> **[1:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=60)** And then in line number 10 we have a variable that's named direction and it has a value of 32, where we are going to use it in order to have the motor spinning in a positive direction.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=73)** In the void setup, we initializing the serial begin and then the pin mode for the LDR as an input and then remember when we have any analog input, we need to initialize the analog reference for it and this one I'm using the default in order to get the five volt for it.
>
> **[1:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=90)** In line number 23, it's an analog input so we're using an analog read, to read the values from the LDR and then we are saving that in a variable name sensorValue.
>
> **[1:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=100)** And using that value to output it using a serial print.
>
> **[1:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=105)** I'm going to use a map function in order to take the value of the LDR to change the speed of the motor.
>
> **[1:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=111)** So the motor's speed, Speed and then I have a map function using sensorValue, the values I get from the sensor is from zero to 1023.
>
> **[2:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=126)** The new mapped function is from zero to the highest speed that you want your motor to move on, I'm going to select 600 for our separate motor.
>
> **[2:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=137)** For line number 30 and 31, I'm taking the values of the new mapped values which is the motor speed and I have it printed in the serial monitor so I'm going just to add motor speed inside the serial print.
>
> **[2:40](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=160)** Alright, so now I'll take the new mapped values and use it to set the speed, so I'm going to use set speed function.
>
> **[2:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=170)** Stepper, setSpeed, and then I'll use the motorSpeed one.
>
> **[3:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=181)** So here for the steps that we want to motor to move, I'm going to use the value that I initialized up in line number 10 which is 32.
>
> **[3:10](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=190)** And notice it's a positive value so it's going to move in one direction.
>
> **[3:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=196)** Alright, I'm going to go ahead and upload the program to the Arduino board.
>
> **[3:22](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=202)** So I just need to double check the spelling in here which is motor, I used N instead of M.
>
> **[3:29](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=209)** So I'll go ahead and upload the program to the Arduino board.
>
> **[3:34](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=214)** So I'm going to go ahead and open the serial monitor so you can see now that the values of the LDR from zero to 1023 and then the motor speed is being adjusted from zero to 600.
>
> **[3:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=227)** So you can see that the motor is moving now to a speed according to the light intensity, I'm going to go ahead and cover the LDR to see the speed changing.
>
> **[4:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-ldr-and-sensor?u=76281980&t=241)** So as you can see, it gets slower as I cover the LDR and once I let go, the speed increases.

> [!info]- Semantic Content
>
> **Env Vars:** ldr (8)
> **Code Keywords:** function (6), let (1)
> **Code Identifiers:** sensorvalue (2), setspeed (1), motorspeed (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Using a joystick to control a motor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=0)** - [Instructor] In this project, I'm going to use the joystick to control the direction and the speed of the stepper motor.
>
> **[0:07](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=7)** For demo purposes, I'm going to use the X-axis to control the movement.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=12)** In other application, you might need to use the two axises to control the movement of two motors and so on.
>
> **[0:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=18)** For our project, we are going to move the motor clockwise and counterclockwise.
>
> **[0:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=24)** So if I'm moving the joystick toward the pins, the motor moves clockwise and the speed will change accordingly.
>
> **[0:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=32)** The same thing happens when I'm moving away from the pins when using the joystick.
>
> **[0:37](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=37)** The motor moves counterclockwise and the speed changes clockwise, as well.
>
> **[0:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/using-a-joystick-to-control-a-motor?u=76281980&t=42)** We are using the values right from the joystick and map them to change the speed of the stepper motor.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Wiring up the joystick and motor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-motor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-motor?u=76281980&t=0)** - [Instructor] For wiring for this project, we are going to keep the same wiring for the stepper motor as our last project, where we are connecting in one to all the way to in four to digital pins two, three, four, and five.
>
> **[0:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-motor?u=76281980&t=14)** And we add the joystick pins to analog input zero, analog input one, and digital pin eight.
>
> **[0:21](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-motor?u=76281980&t=21)** So why don't you go ahead and attempt the wiring and then I'll show you the end wiring in a bit.
>
> **[0:28](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-motor?u=76281980&t=28)** So here's the wiring for our project.
>
> **[0:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/wiring-up-the-joystick-and-motor?u=76281980&t=30)** We have the joystick connected this side and the motor is connected on the digital pins.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### Coding the joystick and motor
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=0)** - [Instructor] For the coding for this project, I provided a starter file, so go ahead, please, and open the starter file for Joystick and Stepper Motor for this section, and I'll walk through the code with you.
>
> **[0:12](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=12)** So in line one, we're including the library.
>
> **[0:15](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=15)** So in line number three we have the Stepper function, wherein the Stepper function we have the number of steps per revolution, which is 32 for our stepper motor.
>
> **[0:25](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=25)** And then number two, four, three, five are the digital pins that we're connecting from the motor driver.
>
> **[0:33](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=33)** Remember, the sequence is we're going with one, three, two, four.
>
> **[0:38](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=38)** In line five, I initialize an xPin where we connect the input from the x-axis from the Joystick into A0.
>
> **[0:48](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=48)** In line six, I have a variable that we store the values that we get from the analog input into a variable named xValue.
>
> **[0:56](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=56)** For the y-axis, I initialize a variable named yPin where we connect the input that we have from the y-axis that's coming from analog input one.
>
> **[1:06](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=66)** And then for the z-axis, it's a digital input, so we're connecting the keyPin to digital input eight.
>
> **[1:13](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=73)** So in line number 11, we have a variable named direction.
>
> **[1:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=77)** And you are going to use the variable here to change the motor clockwise and counterclockwise.
>
> **[1:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=83)** In the void setup, we're initializing the serial.begin and initializing the pinMode for the z-axis.
>
> **[1:31](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=91)** Now in the void loop, you have in line 23, an analogRead from the xPin.
>
> **[1:36](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=96)** So we are reading from the A0 where the x-axis is connected to, and we're saving that in a variable named xValue.
>
> **[1:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=107)** So I'm going to go ahead and start coding for that part.
>
> **[1:50](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=110)** So the very first thing I'm going to add here is I'm going to add a variable named motorSpeed that I'm going to use it to save the new mapped values.
>
> **[2:01](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=121)** And then I'll initialize zero for it.
>
> **[2:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=124)** Now, I'll use an if statement.
>
> **[2:08](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=128)** So every time the value that I read from the Joystick is in the resting position, I'll use it to change the direction and remap the values.
>
> **[2:18](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=138)** So if xValue is greater than or equal 520,
>
> **[2:26](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=146)** so I chose a value that's in between zero and 1,023, then I'll remap the value, so motor speed, using a map function.
>
> **[2:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=161)** The value that I want to remap is the xValue.
>
> **[2:45](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=165)** And then instead of having zero to 1,023, I'll use the value that I selected, which is 520, to 1,023, and then the new mapped value is the speed of the motor.
>
> **[2:59](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=179)** So I'm going to select a zero to around 600.
>
> **[3:03](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=183)** And this is the maximum value that I can go with the stepper motor that I'm currently using.
>
> **[3:09](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=189)** Alright, and then here, I'm just going to go ahead and select direction to be positive value.
>
> **[3:17](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=197)** Okay, for the other if statement is whenever I move the joystick to the other side.
>
> **[3:23](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=203)** So whenever the xValue is less than, I'll select around 510.
>
> **[3:32](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=212)** And I'm purposely leaving some room between 520 and 510 to account for the resting position of the joystick.
>
> **[3:41](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=221)** So here, I'm remapping the motor speed again.
>
> **[3:47](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=227)** The value that I'm mapping is the xValue.
>
> **[3:51](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=231)** Here, the values, because we're using less than 510, so the minimum value is zero to 510, and the new mapped value is 600 and zero.
>
> **[4:04](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=244)** The reason I have 600 and zero this time, because remember when we move the joystick toward the pins, the value is actually approaching to zero.
>
> **[4:14](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=254)** So I want the speed of the motor to increase as I move it toward the pins, and hence I chose it the other way around to be 600 and zero.
>
> **[4:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=264)** And then I'll add just the direction this time to be the other side, so it's a negative one.
>
> **[4:30](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=270)** And then outside the loop, whenever the value of the motor speed is greater than zero, that means we're moving the value, then myStepper, which is the name of the stepper function, I set the speed to be exactly what I remapped the value, which is motor speed here.
>
> **[4:57](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=297)** And then for the steps, I'm using the direction in order to move it clockwise and counterclockwise.
>
> **[5:05](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=305)** So again, the name of the stepper function, and then steps, which is the function I'm using, and then direction, which is the value that I will have.
>
> **[5:16](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=316)** Awesome, so go ahead and upload the program to the Arduino board.
>
> **[5:24](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=324)** So now, I'm going to go ahead and move the joystick away from the pins, and then you can see that the stepper motor is moving in one direction.
>
> **[5:35](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=335)** And then as I go to the other side, the stepper motor moves in the other direction.
>
> **[5:42](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/coding-the-joystick-and-motor?u=76281980&t=342)** The speed increases and decreases accordingly.

> [!info]- Semantic Content
>
> **Code Identifiers:** xvalue (6), xpin (2), ypin (1), keypin (1), pinmode (1)
> **Code Keywords:** function (6)
> **UI Navigation:** open the (1), go to (1)
> **Exercise Files:** starter file (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-arduino-interfacing-with-analog-devices/next-steps?u=76281980&t=0)** - Thanks for taking the time to join me in this course. 2 If you want to learn more about Arduino, 3 you can check out the library for my other Arduino courses, 4 like [[Learning Arduino- Interfacing with Hardware]], 5 where I use the Arduino, board 6 with devices like Seven Segment LED, Keypad, and LCD. 7 The LinkedIn Learning Library has other adrenal Arduino, 8 like Pulse with Modulation and Arduino prototyping. 9 If you like to learn more about the concepts 10 or check out other projects, as always, 11 I recommend that you check the Arduino website 12 for resources and tutorials. 13 I hope to see you in another course.

> [!info]- Semantic Content
>
> **Env Vars:** led (1), lcd (1)
> **Speakers:** - thanks (1)


## Path Context

### In [[Become an Arduino Developer]]
← [[Electronics Foundations- Semiconductor Devices]] | **6 of 11** | [[Learning Arduino- Pulse Width Modulation]] →

## Appears In

- [[Become an Arduino Developer]]

## Related Courses

_Courses sharing skills:_

- [[Arduino- Prototyping]] — Arduino
- [[Learning Arduino- Pulse Width Modulation]] — Arduino
- [[Learning Arduino- Interfacing with Hardware]] — Arduino
- [[Learning Arduino Foundations]] — Arduino

---

[↑ Back to top](#)