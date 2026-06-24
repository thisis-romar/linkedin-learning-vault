---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: threat-modeling-information-disclosure-in-depth
url: "https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth"
duration_minutes: 29
duration: 29m
level: Intermediate
updated: 8/22/2024
learners: 67716
skills:
  - Threat Modeling
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGQNLVC95Gqtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597164586340?e=2147483647&amp;v=beta&amp;t=4-eWHR3TjttHcQrqrIfY-ChKi1WzklyuXzfJQsrnnao"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)'
prev_courses:
  - '[Threat Modeling- Repudiation in Depth](Threat%20Modeling-%20Repudiation%20in%20Depth.md)'
next_courses:
  - '[Threat Modeling- Denial of Service and Expansion of Authority](Threat%20Modeling-%20Denial%20of%20Service%20and%20Expansion%20of%20Authority.md)'
path_nav: '[{"path":"Improve Your Threat Modeling Skills","position":5,"total":6,"prev":"Threat Modeling- Repudiation in Depth","next":"Threat Modeling- Denial of Service and Expansion of Authority"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/threat-modeling
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Threat%20Modeling-%20Information%20Disclosure%20in%20Depth.md)

![Threat Modeling: Information Disclosure in Depth](https://media.licdn.com/dms/image/v2/C4E0DAQGQNLVC95Gqtw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597164586340?e=2147483647&amp;v=beta&amp;t=4-eWHR3TjttHcQrqrIfY-ChKi1WzklyuXzfJQsrnnao)

# Threat Modeling: Information Disclosure in Depth

> STRIDE is a popular threat modeling framework that helps security pros and software developers think strategically about risk. This course addresses the I in STRIDE, which stands for information disclosure. You can learn how to preserve the confidentiality of the data, secrets, and other information you store, and the policies you need to put into place to share that information safely. Topics inc

> [LinkedIn Learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth) | 29m | Intermediate | 68K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Allow me to disclose something](#allow-me-to-disclose-something)
  - [Four-question framework](#four-question-framework)
  - [Information disclosure as a part of STRIDE](#information-disclosure-as-a-part-of-stride)
- [**1. Data at Rest**](#1-data-at-rest) (3 videos)
  - [Authorized access](#authorized-access)
  - [Physical layer](#physical-layer)
  - [Metadata](#metadata)
- [**2. Data in Motion**](#2-data-in-motion) (3 videos)
  - [Encrypted and unencrypted](#encrypted-and-unencrypted)
  - [Metadata in motion](#metadata-in-motion)
  - [Non-internet data](#non-internet-data)
- [**3. Information Disclosure by Processes**](#3-information-disclosure-by-processes) (2 videos)
  - [Intentional disclosure](#intentional-disclosure)
  - [Metadata and security](#metadata-and-security)
- [**4. Side Effects**](#4-side-effects) (3 videos)
  - [Radios: Intentional and accidental](#radios-intentional-and-accidental)
  - [Timing](#timing)
  - [Interpretation](#interpretation)
- [**5. Disclosure in Certain Technologies**](#5-disclosure-in-certain-technologies) (3 videos)
  - [Cloud](#cloud)
  - [IoT and mobile](#iot-and-mobile)
  - [AI and machine learning](#ai-and-machine-learning)
- [**6. Defenses**](#6-defenses) (3 videos)
  - [Metadata management](#metadata-management)
  - [Secrets and secrets management](#secrets-and-secrets-management)
  - [Cryptography](#cryptography)
- [**Conclusion**](#conclusion) (1 videos)
  - [Secure by design: Bring confidentiality to your systems](#secure-by-design-bring-confidentiality-to-your-systems)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Allow me to disclose something](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/allow-me-to-disclose-something?u=76281980&t=0)** - [Adam] Listen, do you want to know a secret? Do you promise not to tell? It's not only a great song, it's a great introduction to the topic of information disclosure. We share information knowing there's a risk of disclosure and we communicate about our policies and expectations for how data is going to be used. This course is part of a series on [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and the stride threats. I'm Adam Shostack. I've written the most popular book on threat modeling, helped create the CVA, and I'm on the Black Hat review board. In this course, you'll learn about the threat of information disclosure and technical systems, including some classic models like information at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in motion, and the ways processes leak knowledge that attackers use as stepping stones. We'll look at the side effects of computation and how physical effects of standard CPUs can mess up your security. You'll get a broad overview and deep knowledge about information disclosure threats. There's all sorts of information that we're ready to disclose in this course, so get ready. So, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** cva (1)
> **Speakers:** - [adam] (1)

#### [Four-question framework](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=0)** - [Instructor] This course is part of a series on [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and the STRIDE Threats. At the heart of threat modeling are four incredibly simple questions. What are we working on? What can go wrong? What are we going to do about it? And did we do a good job? These questions act as guideposts as your threat modeling and analyzing your work. If you're not sure why you're doing the work you're doing, tie that work to one of these questions. In this course, I'll be digging deep into the details of what can go wrong and what are we going to do about it through the lens of information disclosure and confidentiality. Information disclosure is a broad threat. I can disclose information about data in motion or data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). I can disclose information from a process, a file, or a device. Information gets disclosed as devices emit energy through with the spectrum, and it's disclosed because they use energy, and the use of energy exposes information. There's information disclosure in the cloud, in mobile, and from [IoT](../../Glossary/Concept/IoT.md) devices. The mechanisms are different for each, but all result in a failure for confidentiality. Looking at these four questions
>
> **[1:34](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/four-question-framework?u=76281980&t=94)** during information disclosure lens is part of the systematic structured and comprehensive approach to security that your customers deserve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [IoT](../../Glossary/Concept/IoT.md) (1)
> **Env Vars:** stride (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Information disclosure as a part of STRIDE](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/information-disclosure-as-a-part-of-stride-23119434?u=76281980&t=0)** - [Instructor] This course is part of a series on [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and STRIDE threats. STRIDE is a mnemonic that stands for spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege. Well, that's the historic version. Today, we often talk about expansion of authority in place of elevation of privilege. The short form is authority is clearer. It's what a program can do, and also authority is measurable. We'll cover how information disclosure impacts the confidentiality of communication, storage, and processes. You'll learn about how to ensure the confidentiality of your data. The confidentiality of data can be protected by something more privileged like an operating system when the data is on that system. And encryption can provide for confidentiality anytime, both on system and when the data is being transmitted or stored outside of your control. We'll cover how to disclose the things you want to and how to best protect the things you want to keep secret.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (1)
> **Env Vars:** stride (2)
> **Definitions:** is a  (1), stands for (1)
> **Speakers:** - [instructor] (1)


### 1. Data at Rest

[↑ Back to Table of Contents](#table-of-contents)

#### [Authorized access](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=0)** - [Instructor] Data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is data that's being stored somewhere. But don't limit your thinking to drives that are connected to a computer. This can be normal files, [Databases](../../Skills/Software%20Development/Databases.md), swap files, all sorts of things. Any data that's stored, and the most obvious place for data is files. Files obviously have content, and that's the first thing to consider. Files can have content that's hidden to various degrees. Spreadsheets allow us to hide columns, and [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) processors let us reveal or hide tracked information. You can explore tracking changes in Word in setting it to display no markup. I love this headline from "The Onion." It's clearly a joke, but it highlights a good point. Black highlighter can be removed, and even if it can't, the size of a computerized, precisely applied black bar reveals information about how many characters are hidden. Also don't miss that there's a red squiggle so you can see a word is misspelled. The same applies to discs. Files are not deleted, really, but pointers to them get removed from the file lists in directories. It used to be possible to zero out content,
>
> **[1:38](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/authorized-access?u=76281980&t=98)** but flash drives apply wear-leveling [Algorithms](../../Skills/Software%20Development/Algorithms.md) to make that hard. Additionally, there's another set of problems where confusion leads to authorization being granted. That problem can be the person granting the access is confused. For example, did you mean to grant access to sub-directories? Did you intend to send that file to me? Or did you not notice which Adam your email program auto completed? You can also get a program to use its access to give you access you're not supposed to have, with Etsy password being the canonical example of what gets exposed when the program doesn't canonicalize file names. These programs are often called confused deputies. And because this course is about information disclosure, I want to just close that a confused deputy can cause lots of other problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Physical layer](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/physical-layer?u=76281980&t=0)** - [Instructor] Thumb drives, backup tapes, and other storage devices are often designed to be removed and stored separately. Even though removing hard drives can be a pain, it's not that much of a pain, and once done the data on the disc is likely accessible to anyone who could hold it in their hands. Many things in the [internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) store their operating system and some data on flash drives. Even cloud-oriented devices may have locally stored data like a cash, or security information like passwords all on local storage. The drive encryption is built in. Then the encryption moves with the drive. The operating system manages the key, then it doesn't. So drives that include encryption may or may not delete the key when you move them to a new machine. Good tests are do I need to enter a password when connecting this to a new machine? What if I enter the wrong password? Protecting data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) helps me rest better at night.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1)
> **Speakers:** - [instructor] (1)

#### [Metadata](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata?u=76281980&t=0)** - [Instructor] Files have content, which is hopefully interesting. And they also have [Metadata](../../Skills/Web%20Development/Metadata.md), names, modification times, et cetera. Filenames signal that the contents are interesting. The directory structure can also be interesting. A path of layoffs/June/Alice is certainly of interest to Alice, even if it's a "your job is safe" note. Knowing that Disaster_Recovery_Phone_Tree hasn't been updated since 2012 is meaningful. There's no complete list. Host names, frequencies, time of day. The list of metadata is limited only by your imagination. And the list of ways to misuse it is limited first by availability and second by the adversary's imagination about how to make use of your metadata.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Data in Motion

[↑ Back to Table of Contents](#table-of-contents)

#### [Encrypted and unencrypted](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=0)** - [Instructor] Messages travel through channels. An email is a message and it travels over an SMTP channel. Much like we apply integrity controls to protect against tampering, we can apply encryption to either messages, channels, or both to protect against information disclosure. Data in motion is easy to read. Just grab a tool like [Wireshark](../../Skills/Cybersecurity/Wireshark.md) and go to town. Even if it's only on the local network, then you're trusting your router to do the right thing and never send it elsewhere. Lastly, if the data is encrypted, you're trusting the encryption is configured right. What happens when it's not configured right? If you haven't seen ECB Penguin, it's a great illustration of the importance of proper cipher setup. Which also includes secure fallbacks, and ensuring that key exchange is done properly. It's easy and wise to say encrypt at all, but sometimes that's hard. Encrypted can be hard with many parties. Getting agreement on which encrypted message tool to use can be a challenge. Getting encrypted data to troops in the field requires that they have the crypto keys for the day. Even without knowing the contents of communication, the fact that every time you get a message from an old college friend, you sell their company stock within 10 minutes looks awfully suspicious.
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/encrypted-and-unencrypted?u=76281980&t=96)** And it won't help to bring me into the game if that's the only time you text me. The [Metadata](../../Skills/Web%20Development/Metadata.md) about data in motion will shine through. Also, I look bad in stripes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** smtp (1), ecb (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Metadata in motion](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-in-motion?u=76281980&t=0)** - [Instructor] The content of communication with malware controlled on [example.com](https://example.com) is probably interesting, but even if their developer has done their job and encrypted both the channel and the messages, you can learn a lot from the [Metadata](../../Skills/Web%20Development/Metadata.md). Let me pause for a minute to say how easy it is to get this wrong. In my original script, I wrote "encrypted the channel and signed the messages," probably because I was thinking about tampering attacks on the channel, but this is a course on information disclosure. We should focus there. Back to the example. The metadata is not just the domain name, but when communication started, how frequent it is, how much data is going in each direction. Each of these can reveal something. Knowing which bank someone uses makes it easier to target them with good [Phishing](../../Skills/Software%20Development/Phishing.md) emails. Digging in, the size of the packets coming from bank website can reveal which page or user is on, even if the details are encrypted. You can't eliminate metadata, but you can reduce what you disclose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [Phishing](../../Skills/Software%20Development/Phishing.md) (1)
> **URLs:** [example.com](https://example.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Non-internet data](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/non-internet-data?u=76281980&t=0)** - [Instructor] With the internet having won, it's easy to forget there are still systems which communicate without IP packets and there are lots of substrates other than [wifi](../../Glossary/Standard/Wi-Fi.md). GPS, TV and radio, nearfield and Bluetooth, Zigbee. The list goes on and on. They include non-radio communication like QR code or ultrasound beacons. There are lots of ways IP packets get carried, such as wifi, cellular systems like 3G or LTA. Some weirdos even put IP6 packets in IP4 packets or lease lines from a phone company. The tools to attack these systems are more specialized than the tools to attack standard IP networks, but don't confuse that for more security. As a general rule, these systems are not very secure. Their system designs have not been carefully analyzed, and even if they have been, the problems may persist. They'll even use proprietary ciphers, which is always a red flag. Don't mistake the lack of tools in [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) for security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (2), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Env Vars:** gps (1), lta (1), ip6 (1), ip4 (1)
> **Analogies:** such as (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)


### 3. Information Disclosure by Processes

[↑ Back to Table of Contents](#table-of-contents)

#### [Intentional disclosure](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/intentional-disclosure?u=76281980&t=0)** - [Instructor] Processes handout data intentionally, all the time. If you connect to [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s mail servers, they'll tell you their exact host name, the time, their time zone. Sadly, they're running in UTC. So I can't be all passive aggressive about them running on Seattle time, but I can ask, why do they feel a need to tell everyone that? Apache [Web Servers](../../Skills/Web%20Development/Web%20Servers.md), by default, send more information. Internet-scale scanning projects like Shondan gather this information. But even without such explicit banners, the behavior of systems can often be used to identify them. A mail server might respond differently to HELO and ELHO allowing someone to fingerprint it. These differences are at the heart of how [Nmap](../../Glossary/Tool/Nmap.md) does operating system identification. In today's world, it makes sense for processes to be conservative in what they send.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1), [Nmap](../../Glossary/Tool/Nmap.md) (1)
> **Env Vars:** utc (1), helo (1), elho (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)

#### [Metadata and security](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-and-security?u=76281980&t=0)** - [Instructor] Processes have secrets, almost like people do. Processes want to keep their cryptographic keys and random numbers secret. They want to protect passwords that you've provided. This isn't information that needs to be protected in and of itself, it's stepping stones to other things attackers want. Information can be disclosed intentionally to a log, in a configuration file, or other storage. It can also be disclosed accidentally by a crash dump, in error message, or by your analytics software not knowing it was a secret. Like the secrets that process use to protect your information, they have information that they use to protect themselves. On a modern operating system where memory layout is randomized, information about that randomization is a stepping stone. It's not just secrets. Live file handles or socket handles can be stolen. Lastly, sometimes a process will use its own memory to provide random data. This is a bad idea. Vulnerabilities like Heartbleed revealed cryptographic keys when doing that. Use all zeros, all ones, a repeating pattern like OxDEADBEEF, or if you want to annoy people writing exploit code, fill your memory with 41414141.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 4. Side Effects

[↑ Back to Table of Contents](#table-of-contents)

#### [Radios: Intentional and accidental](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/radios-intentional-and-accidental?u=76281980&t=0)** - [Instructor] If you're old enough to remember a microwave oven interfering with your TV reception, and if you think about all the ways that things emit energy, then you have a good idea of the energy that a receiver can use to learn about what that thing is doing. Beyond radio waves, there sound, there's heat, and everything technological emits all of those when it's turned on. And that turning on brings us to the far side of the equation. All computers use energy, and if you can measure that energy input, you can learn about the computation that's happening. People have recovered cryptographic keys by listening to the CPU with a built-in microphone, by carefully measuring the power coming in, and by timing of packets. Typing different letters takes different amounts of time, and that time information is transmitted by keyboard noise. It's crazy enough to make you line your rooms with tinfoil, power them with batteries, and carefully screen the devices allowed in or out, which is what most governments do for their most secure computation. American defenses against these are called Tempest, which used to be a secret code name before it leaked out.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Speakers:** - [instructor] (1)

#### [Timing](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/timing?u=76281980&t=0)** - [Instructor] Even though computers are now super fast, computation still takes time. How long it takes depends on the number of instructions. And so programmers and compilers get very clever about reducing instruction counts. So when you're doing things like encryption, the number of instructions it takes to execute a function like encrypt block key varies based on the key. These attacks are strong enough that they work over a network. Sometimes they take lots of tries and data comes out statistically. So all that optimization cleverness has an information disclosure effect. When you have data that you know is secret, you can and should zero it out before freeing the memory to make sure it's not reused. But zeroing out data that's about to be freed is a waste, and so compilers can optimize that step away. Some compilers support special calls to ensure this doesn't happen. It turns out the slogan move fast, break things means something different when we're talking about information disclosure.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Interpretation](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/interpretation?u=76281980&t=0)** - It's easy to glide through the data to the data indicates to the data shows. Let's say you have access to lots of phone call logs. You might be tempted to infer that someone who repeatedly calls a suicide prevention hotline is suicidal, but it might not be about them. They might be looking for help dealing with a loved one. There was an interesting demonstration of the gap between data and a story in a spat between Tesla and the New York Times. Undisputed is that a reporter ran out the battery of a review loaner car driving around the parking lot. Tesla claims that the reporter did so intentionally. The reporter claims to have been looking for the chargers. The data is published. The reporter's initial story was negative. What really happened? I don't know. And more importantly, the data doesn't tell us. There are lots of cognitive biases that make this sort of thinking easy. And confirmation bias means it happens a lot. No, wait, confirmation bias means it's easy to not notice. See what I did there.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - it (1)


### 5. Disclosure in Certain Technologies

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cloud?u=76281980&t=0)** - [Instructor] I hope it's obvious that the cloud is someone else's computer and that you're trusting that someone with your data, but the cloud is more than that. As a set of [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md), it's also the [agile](../../Skills/DevOps/Agile%20Development.md) and fluid use of third party services to deliver value. Many times that means including the latest and greatest geolocation service, ad service, payment service, emoji service, or what have you. These services are usually designed to be brought in with as few lines of code as possible. Deciding which data to reveal to the library requires code. And so, you tell the library everything and hope it does what you want. The same problem can exist in advertising libraries and other libraries for mobile apps. So, while the cloud is great, a little thoughtfulness can help you avoid accidentally disclosing information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Speakers:** - [instructor] (1)

#### [IoT and mobile](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/iot-and-mobile?u=76281980&t=0)** - [Instructor] In addition to the ease of bringing in new libraries, which may siphon up your information, mobile devices are crazy full of sensors, crazy full. Do you know an iPhone has a barometer in it to measure air pressure? It helps with location accuracy by measuring altitude. That's on top of accelerometers, GPS, cameras, microphones, ambient light sensors, and Lord knows what else. Each of these sensors is better than you'd expect and getting better, faster than you expect. Sensors are now so cheap that it's easier to include them in [Hardware](../../Topics/Hardware.md) packages than to have two separate skews, and so they end up in everything. That means you need to be thoughtful about what permissions you ask for and what permissions you provide. It only makes sense.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Code Identifiers:** iphone (1)
> **Env Vars:** gps (1)
> **Speakers:** - [instructor] (1)

#### [AI and machine learning](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=0)** - [Instructor] There's a lot of information that can be disclosed about a machine learning system. It's tempting to say we're still learning. But we can picture a system. At some level, your training data is under your control. If you disclose information about where those inputs are coming from or how you filter, an attacker might use that to design their attacks. Machine learning systems are hard to tune and so if you have a good model, an adversary may want a copy of it. Knowing how your ML system works makes it easier to design at half data. As we talk about this, let's take a quick dive into the area of security by obscurity. You may have heard, correctly, that security by obscurity is a bad idea and that's right. We intuitively know that the little rock that has your house key in it, isn't as good as a key safe. The rock depends on your attacker not noticing, the key safe has a combination that controls access. So in this sense, not disclosing where you get your training data is less important than filtering it. If you get your training data from Twitter, people will notice, and you have to make sure you're treating Twitter as Twitter, and so the important defense is the filtering, not keeping the source a secret. The most famous expression of this came from a French cryptographer named Kerckhoff. He said, and I won't make you listen to my bad French, that the security of a system shouldn't rely on things
>
> **[1:36](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/ai-and-machine-learning?u=76281980&t=96)** which are hard to change. He understood that information disclosure threats are real and what's most important is the overall security of a system.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 6. Defenses

[↑ Back to Table of Contents](#table-of-contents)

#### [Metadata management](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=0)** - [Instructor] The simplest defense is to not store [Metadata](../../Skills/Web%20Development/Metadata.md). If you have to have metadata, hide it where it won't be seen. A folder called Client 1 is less interesting than a folder called Blackmail Photos. If you're working on a search feature that works over many accounts, you need to think carefully about the use of non-public data for searching. For example, if I enter your phone number or email, do I get your profile? Do I get a list of your contacts? Do I get a list of people who have you in their contacts? I've been surprised to see doctors and lawyers who I'm working with start showing up in my social media feeds unexpectedly. Starting with phone numbers, test with random ones, that of a suicide prevention hotline, and your own. What's that, you're worried about what comes up with your phone number? Good, fix the problem, not the test case. There is an important variant here, which is what we might call the robot.txt problem. Wait, different robot. robots.txt is a file that websites can use to communicate with search engines, saying don't search these places, which of course means it's the first thing an attacker is going to look at. This also applies to message headers, software banners, and similar things. Keep 'em simple, or accept that attackers will know the exact configuration of your software.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/metadata-management?u=76281980&t=95)** Defending against fingerprinting is harder. You want error messages and responses to be informative and useful. And so for many cases, it's worth deciding to accept that fingerprinting is possible and making that decision transparent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (2)
> **File Paths:** robot.txt (1), robots.txt (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Secrets and secrets management](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=0)** - [Instructor] You need to handle secrets carefully. That includes knowing what secrets you have, storing them carefully, and destroying them after rotation when they're no longer needed. Most modern platforms have APIs for storing local secrets, like the keychain on macOS, keystore on [Android](../../Glossary/Sdk/Android.md), or gpapi on [Windows](../../Glossary/Service/Windows.md). You also need to set permissions carefully. You'll almost never want everything to be world readable, and that applies to S3 buckets, elastic storage, message keys, other cloud technology, just as much as files in /tmp. Hey, why are they in /tmp, it's 2020! Lastly, you need to make sure that secrets don't end up in error messages that might be shown to people on the other side of a trust boundary. The best pattern is to show them a unique ID, which is also included in a canonical log message. Careful error message design also includes the question, do you let people know an account exists? We used to have error messages, like invalid username or password, to disclose less information. Today, the usability cost of not telling people if the account exists has changed. We all have too many usernames and email accounts. Trying to hide the existence of accounts is now the wrong trade off. Managing secrets carefully doesn't mean hiding everything.
>
> **[1:35](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secrets-and-secrets-management?u=76281980&t=95)** It includes deciding what you want to and can keep secret.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### [Cryptography](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/cryptography?u=76281980&t=0)** - [Instructor] [Cryptography](../../Skills/Cybersecurity/Cryptography.md) is the best way to protect information from disclosure. When you create ciphertext by encrypting plain text with a key, then the only way to get the plain text from the ciphertext is to either get the key or break the crypto system. Modern crypto systems are very hard to break, so practically, an attacker needs to get the key. That means you need to manage a key very carefully as we discussed in secrets management. Also, encryption protects confidentiality. In normal use, it will not protect your data from tampering. Using authenticated encryption modes well can be tricky, and it's outside the scope of this course. Cryptography applied well is the best defense against information disclosure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure by design: Bring confidentiality to your systems](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/threat-modeling-information-disclosure-in-depth/secure-by-design-bring-confidentiality-to-your-systems?u=76281980&t=0)** - [Adam] I hope you're interested in learning more. The best way to learn is to dive in and find information that's disclosed to the surprise of its owner. Do this to systems in a lab where you have authorization, but go get some tools, give these approaches a try. Make it real so you can speak to information disclosure as you analyze systems. This course is a great introduction to understanding information disclosure threats. So you can apply them to [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) and other security work. I have a set of deep dives here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. For a more comprehensive view, check out my books, "Threat Modeling: Designing for Security," and "Threats: What Every Engineer Should Learn from Star Wars."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [adam] (1)


## Instructor

- [Adam Shostack](../../Instructors/Cybersecurity/Adam%20Shostack.md)

## Skills Covered

- Threat Modeling

## Path Context

### In [Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)
← [Threat Modeling- Repudiation in Depth](Threat%20Modeling-%20Repudiation%20in%20Depth.md) | **5 of 6** | [Threat Modeling- Denial of Service and Expansion of Authority](Threat%20Modeling-%20Denial%20of%20Service%20and%20Expansion%20of%20Authority.md) →

## Appears In

- [Improve Your Threat Modeling Skills](../../Paths/Cybersecurity/Learning%20Paths/Improve%20Your%20Threat%20Modeling%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Threat Modeling for AI-ML Systems](../Artificial%20Intelligence%20(AI)/Threat%20Modeling%20for%20AI-ML%20Systems.md) — Threat Modeling
- [Threat Modeling- Denial of Service and Expansion of Authority](Threat%20Modeling-%20Denial%20of%20Service%20and%20Expansion%20of%20Authority.md) — Threat Modeling
- [Threat Modeling- Repudiation in Depth](Threat%20Modeling-%20Repudiation%20in%20Depth.md) — Threat Modeling
- [Threat Modeling- Tampering in Depth](Threat%20Modeling-%20Tampering%20in%20Depth.md) — Threat Modeling
- [Threat Modeling- Spoofing In Depth](Threat%20Modeling-%20Spoofing%20In%20Depth.md) — Threat Modeling

---

[↑ Back to top](#)