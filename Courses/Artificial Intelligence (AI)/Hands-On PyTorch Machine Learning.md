---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-pytorch-machine-learning
url: "https://www.linkedin.com/learning/hands-on-pytorch-machine-learning"
duration_minutes: 56
duration: 56m
level: Intermediate
updated: 12/13/2022
learners: 35685
skills:
  - Machine Learning
  - PyTorch
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGM57qo8MaAsQ/learning-public-crop_675_1200/B4EZnE26nyJ0AY-/0/1759944354943?e=2147483647&amp;v=beta&amp;t=6Gon_PksM4AZpJXmCMprUC3cFMbFn47i6HwIOvmxVGQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Getting Started with AI and Machine Learning
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/machine-learning
  - skill/pytorch
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-20
---

![Hands-On PyTorch Machine Learning](https://media.licdn.com/dms/image/v2/D4E0DAQGM57qo8MaAsQ/learning-public-crop_675_1200/B4EZnE26nyJ0AY-/0/1759944354943?e=2147483647&amp;v=beta&amp;t=6Gon_PksM4AZpJXmCMprUC3cFMbFn47i6HwIOvmxVGQ)

# Hands-On PyTorch Machine Learning

> Many of the world’s most exciting and innovative new tech projects leverage the power of machine learning. But if you want to set yourself apart as a data scientist or machine learning engineer, you need to stay up to date with the current tools and best practices for creating effective, predictable models.In this course, instructor Helen Sun shows you how to get up and running with PyTorch, the o

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning) | 56m | Intermediate | 36K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Helen Sun]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- PyTorch
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Explore the capabilities of PyTorch
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=0)** - [Dr. Sun] PyTorch is one of the most widely adapted ML frameworks.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=4)** If you know TansorFlow, learning PyTorch is essential to establish a foundation in AI and ML.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=10)** And if you are just starting, PyTorch is an excellent place to start learning.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=15)** Working the field of AI and ML, understanding the basics of PyTorch is imperative.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=22)** In this course, I'll teach you the basics of computer vision, natural language processing, and audio processing through some hands-on experiences.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=32)** Hello, I'm Dr. Helen Sun and I'm a senior engineering leader at Meta, working in the AI and ML space.
>
> **[0:40](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=40)** Join me in this course to learn about the PyTorch platform that is used worldwide to support the work of AI research scientists and ML engineers.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [dr (1)


### 1. Preparation

#### PyTorch overview
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=0)** - [Instructor] PyTorch is one of the most popular deep learning frameworks, and it continues to gain adoption in both research communities and enterprises.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=10)** It is an open source machine learning framework developed and maintained by Meta.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=15)** The key benefits of PyTorch include quick iteration for research, seamless eager graph mode transition with TorchScript, and production ready with TorchServe.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=28)** It has a backend called Torch.Distributed, which enables scalable distributed training and optimization.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=36)** PyTorch also has a rich ecosystem of tools and libraries that extends development in computer vision, natural language processing, and more.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=48)** Some featured projects in this ecosystem include Captum for model interpretability, geometric deep learning for irregular input data, such as graphs and Point Cloud, and Skorch that enables psychic learn compatibility.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=67)** In this course, I'll be using PyTorch 1.10, and cover some of its top features, including tensors, autograd, APIs, and libraries.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=79)** A PyTorch tensor is a multi-dimensional container of data.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=83)** It is similar to a NumPy array.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=86)** Torch defines 10 tensor types with CPU and GPU variants, including boolean, 8, 16, 32, 64 bit integer, 16, 32 and 64 bit floating point, 32, 64, and 128 bit complex.
>
> **[1:45](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=105)** There are many ways to create a tensor, such as with pre-existing data.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=110)** There are also many tensor operations in PyTorch, but they can be grouped into two categories, including slice and math.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=118)** Autograd is what earns PyTorch it's popularity for fast and flexible iteration.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=125)** PyTorch traces the computation dynamically at runtime to get correct gradients to drive learning.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=133)** The key for model training is to minimize the loss through adjusting the model's learning weights.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=140)** The gradients over the learning weights tells us what direction to change each weight to reduce the loss function.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=148)** With deep learning, the number of derivatives goes up exponentially.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=153)** Autograd tracks the history of every computation, and as a result, greatly speeds the local derivative computation.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=163)** The primary API to PyTorch is Python.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=166)** These APIs allow you to interact with PyTorch through tensors, views, CUDA, autograd, quantization, and storage.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=177)** PyTorch also provides you with a C++ interface with access to PyTorch functionalities, including tensor and autograd, serializing PyTorch models, and building C++ extensions through TorchScript.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=193)** The C++ APIs can also be used to write compact, performance-sensitive code with deep learning capabilities to perform ML inference on mobile platforms.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=205)** There are five main PyTorch libraries.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=208)** The first is Torchaudio for audio signal processing.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=212)** Next, we have Torchtext containing data processing utilities and data sets for natural language processing.
>
> **[3:40](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=220)** The third library, Torchvision with computer vision data sets, model architecture and common image transformation.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=229)** Fourth is Torchserve, a highly performant and flexible serving tool for PyTorch eager modes and models.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=238)** And finally, Torch_xla that runs PyTorch on xla devices such as TPU.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=246)** Now that you have a high level overview, let's dig deep into the top features of PyTorch.

> [!info]- Semantic Content
>
> **Code Keywords:** extends (1), function (1), interface (1), finally, (1), let (1)
> **Env Vars:** cpu (1), gpu (1), api (1), cuda (1), tpu (1)
> **Analogies:** such as (3), similar to (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** python (1)
> **Versions:** 1.10 (1)
> **Speakers:** - [instructor] (1)

#### PyTorch environment setup
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=0)** - [Instructor] To set up the PyTorch environment, we first download the PyTorch library from the PyTorch website.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=7)** Click on the Install button here.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=10)** And use the default tab here, Start Locally.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=14)** Scroll down to go to the selection grid.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=17)** You first select the build.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=20)** You'll then choose the OS.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=22)** The options are Mac, Windows, and Linux.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=25)** And we'll choose Mac.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=28)** For the package manager, we'll choose Pip.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=31)** You can also select Conda, LibTorch, or build it using the source code from GitHub.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=37)** There are two language options, Python and C++/Java.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=42)** We'll choose Python.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=43)** The compute platform is default here because we're using the Mac OS.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=50)** Once you make all of the selections, the site will give you a command to install PyTorch: pip3 install torch torchvision torchaudio.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=61)** And you just run this command to install PyTorch if you prefer to use the most recent stable version.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=69)** The previous versions of PyTorch are available here on this website.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=75)** Just click on this Previous PyTorch Versions tab.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=80)** I'll be using the 1.10.1 for this course.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=90)** And you copy and paste this command and run it in iTerm.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=96)** So here is the command, I'll run it here, but I also added an optional parameter to suppress warnings here.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=103)** So it says, "no warning script location."
>
> **[1:47](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=107)** If you receive a message saying "Command Not Found," this is probably because you don't have Pip3 environment set up properly.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=115)** You need to use a package manager on Mac OS called Homebrew to install Pip3.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=121)** So here's the command.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=124)** Now your first command to run PyTorch installation can be resumed right here.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=132)** With this installation, it includes numpy, pillow, torch, torchaudio, torchvision, and typing-extensions.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=141)** We'll use these packages in our later modules.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=145)** Once you see your screen saying, "Successfully installed those packages" or "These requirements already satisfied," then you're ready to go.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=156)** A few other module installations that are useful for this course include: Matplotlib and Jupyter Notebook.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=164)** To install Matplotlib, I'll use the command pip3 install matplotlib.
>
> **[2:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=177)** This command will install Matplotlib along with a number of packages, including: Pyparsing, python-dateutil, Packaging, Kiwisolver, Fonttools, and cycler.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=191)** Once it is all and completed, you'll receive the following message here.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=196)** To install the Jupyter Notebook, you can either use Anaconda or Pip3.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=200)** Similar to installing PyTorch, we'll use Pip3 as follows.
>
> **[3:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=210)** To verify the installation, try the following command: python3 -m notebook.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=218)** You should see the console launching the Notebook environment in the browser here.
>
> **[3:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=223)** There will be additional environmental setup in later modules, but this concludes the general setup.

> [!info]- Semantic Content
>
> **Prerequisites:** install (9), set up (2), setup (2)
> **CLI Commands:** pip3 (6), python (3), pip (1), make (1), python3 (1)
> **Tools:** jupyter (2), github (1), iterm (1), anaconda (1)
> **UI Navigation:** click on (2), scroll down (1), go to (1), select the (1)
> **Code Keywords:** module (1), include: (1)
> **Exercise Files:** download the (1), source code (1)
> **Code Identifiers:** iterm (1)
> **Versions:** 1.10.1 (1)

#### PyTorch use case description
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=0)** - [Instructor] The use case I'll be using throughout this course is based on a project called Piraeus.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=5)** The overall objective of Project Piraeus is to democratize knowledge.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=11)** Piraeus is a portal that brings together learners and tutors in a digital portal.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=17)** It then leverages machine learning and AI to find the best tutors for every learner and to help tutors and learners to devise a customized learning plan.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=28)** Many students struggle in rigid linear learning systems.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=32)** Education and learning is personal.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=35)** Unfortunately, one-on-one learning, private tutoring, and custom-designed learning paths are just too expensive for many students and communities to access.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=46)** AI may be able to help.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=49)** Artificial intelligence, AI, can play a key role to achieve this objective and vision.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=55)** AI provides the capability to mimic human judgment.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=60)** In this case, it'll mimic the judgment of a tutor or a teacher with dedicated attention to a student's unique learning needs.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=69)** The focus of our use case is to develop AI models to better match tutors with learners based on learning, characteristics, and learning objectives.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=79)** We look to generate a guided learning path, select learning material, weave in checkpoints and assessment through feedback along the way, and continue to refine and adapt the next set of milestones.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=95)** In this course, I'll demonstrate how to develop and train the machine-learning models, using as inputs the characteristics of the learners and tutors, the performance of the learner, along with the metrics associated with the tutoring sessions including number of sessions, duration of sessions, time between sessions.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=117)** The inputs to the models and predictive methods must be consistently monitored to determine the most critical inputs that produce the best possible outcome for both learners and tutors.
>
> **[2:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=131)** This type of rapid iteration of exploration, experimentation, and productization makes PyTorch the ideal choice for the AI and ML framework.

> [!info]- Semantic Content
>
> **Code Keywords:** private (1), case, (1), continue (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### PyTorch data exploration
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=0)** - PyTorch can be used to explore a dataset for model development.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=4)** PyTorch provides two data primitives DataLoader and Dataset.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=10)** The Dataset class stores the samples and the corresponding annotation labels.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=15)** The DataLoader class wraps in iterable around the Dataset class to enable easy access to the samples.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=23)** These two classes allow you to use preloaded data sets and upload your own data.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=30)** PyTorch comes with a set of domain libraries that provide many preloaded data sets.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=35)** They are subclasses of torch utils: data, dataset.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=39)** These libraries and subclasses implement specific functions to the particular data.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=45)** One great example is Fashion MNIST which we will explore later.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=50)** These preloaded data sets and functions enable ML engineers to prototype and benchmark their models.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=58)** You can find these data sets and functions on the PyTorch website with the links included in this slide.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=65)** For example, for image dataset go to [pytorch.org/vision/stable/datasets.html](https://pytorch.org/vision/stable/datasets.html).
>
> **[1:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=74)** For text datasets go to [pytorch.org/text/stable/datasets.html](https://pytorch.org/text/stable/datasets.html).
>
> **[1:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=81)** And lastly, for audio data sets go to [pytorch.org/audio/stable/datasets.html](https://pytorch.org/audio/stable/datasets.html).
>
> **[1:29](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=89)** Now let's take a look at the Fashion MNIST dataset.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=93)** I'll first import the needed libraries here.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=97)** I'll then create two data sets one for training and one for testing.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=106)** The only difference is to set the parameter of train to true for training data set and false for testing data set.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=115)** Next, I'll create a validation sample from the training data set.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=122)** Next, I'll create three DataLoaders one for training, one for validation, and one for testing.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=130)** Next, I'll create a data iterator to populate the image and label tensors.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=138)** Lastly, I'll use the mat plot lib to plot the data.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=144)** Next, let's upload and look at our own dataset.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=149)** We'll go through four steps to load our data set.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=153)** Step one, import all necessary libraries for loading our data.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=158)** We will be uploading a CSV file that contains tutor's data.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=163)** For that, we need to import the following libraries.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=168)** Step two, find the file path.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=171)** For this exercise I'll just upload our CSV file from a local drive.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=176)** And here is the file path, here in the documents folder.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=182)** And we'll put this path into a variable called data path.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=186)** Step three, loading the data.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=190)** We'll load the data using the pandas library we imported in step one.
>
> **[3:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=194)** If you don't have pandas installed just run the following command: pip3 install pandas.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=202)** Here we created a pandas dataframe called df to store the dataset.
>
> **[3:29](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=209)** Now let's visualize the data using the pandas function display.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=216)** And this is our dataset.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=218)** Step four, convert a pandas dataframe into a PyTorch tensor.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=225)** In order to use the data set and PyTorch for model training we'll need to convert it into a PyTorch tensor.
>
> **[3:52](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=232)** Here's the code to do that.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=237)** And we also printed out the tensor in this format.
>
> **[4:03](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=243)** Now this wraps up our overview chapter.
>
> **[4:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=247)** In the next chapters we'll dig into the details of the PyTorch libraries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1)
> **Env Vars:** mnist (2), csv (2)
> **File Paths:** pytorch.org/vision/stable/datasets.html (1), pytorch.org/text/stable/datasets.html (1), pytorch.org/audio/stable/datasets.html (1)
> **CLI Commands:** find (2), pip3 (1)
> **URLs:** [pytorch.org](https://pytorch.org) (3)
> **UI Navigation:** go to (3)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)


### 2. PyTorch Basics

#### Understand PyTorch tensors
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=0)** - [Instructor] Tensors are the building blocks of a neural network.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=4)** A PyTorch tensor is the central data abstraction as a generalized form of arrays in n dimensions to run arbitrary computations.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=14)** A tensor can be of any dimension.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=16)** For example, zero dimensional tensors are a scale numbers like 0, 10, 100, et cetera.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=24)** One dimensional tensors are array of numbers like an array of 9, 8, 7, or an array of 50, 30 10, et cetera.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=35)** Tensors can also be two-dimensional.
>
> **[0:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=38)** They are matrix of numbers like in 2x3 matrix with a two element array of an array.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=45)** So for example, an array of 1, 2, 3 and a 7, 5, 3.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=50)** So now let's create some tensors by importing torch and using the torch.Tensor methods.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=58)** Here's our notebook, and here we are.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=62)** We're creating some torch.Tensors, and here is the output of those tensors.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=68)** The simplest way to set the underlying data type of a tensor is with an optional argument at creation time.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=75)** Here is an example.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=77)** We're setting the torch data type, the tensor data type, to be int16.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=84)** There are 10 data types available.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=86)** I have listed here boolean int8, uint8, int16, int32, int64, half, float, double, or bfloat.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=99)** While training the model, you'll deal with higher dimensions.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=103)** The neural network only accepts the dimension which is defined at the input layer while architecting the model.
>
> **[1:51](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=111)** The dimension basically tells whether the tensor is zero-dimension, or one-dimension, or two-dimension, or even higher than that.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=120)** Dimension of the tensor is also called the rank of the tensor.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=124)** To get the size, you can use tensor.size method, or tensor.shape property, and to get the dimension of the tensor, use tensor.ndimension method, or tensor.ndim property.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=139)** Let's take a look.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=140)** There you have it.
>
> **[2:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=141)** These are the examples.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=143)** Sometimes working with a neural network, you need to change the dimension of the tensor.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=148)** This can be done by using the tensor.view nrows, ncols method of the tensor.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=155)** PyTorch tensor also provides flexibilities, such as in-place alterations, tensor copying, and changing the shape of the tensor, such as altering the dimensions of the tensor.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=168)** One of the major advantages of PyTorch is its robust acceleration on CUDA-compatible NIVIDIA GPUs.
>
> **[2:56](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=176)** CUDA stands for compute-unified device architecture, which is NIVIDIA's platform for parallel computing.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=184)** By default, new tensors are created on the CPU, so we have to specify when we want to create our tensor on the GPU with the optional device argument.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=196)** If you have an existing tensor living on one device, you can move it to another with a to method.
>
> **[3:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=203)** It is important to know that, in order to do computation involving two or more tensors, all of the tensors must be on the same device.

> [!info]- Semantic Content
>
> **Env Vars:** cuda (2), nividia (2), cpu (1), gpu (1)
> **Code Keywords:** let (2), type, (2), default, (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** is an  (1), stands for (1)
> **Speakers:** - [instructor] (1)

#### Understand PyTorch basic operations
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=0)** - [Instructor] PyTorch Tensors allow you to apply arithmetics on your tensors.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=5)** PyTorch Tensors have over 300 operations that can be performed on them.
>
> **[0:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=10)** You can apply these operations on Scala and multiple dimensions of tensors.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=16)** The very basic operations on tensors are additions, subtractions, multiplications, and divisions.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=23)** Here's an example for addition and subtraction.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=27)** So we have two tensors and we are performing some additions and subtractions here, and you'll get those output.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=37)** The major categories of operations include common functions such as abs, ceil, floor, clamp, trigonometric functions and their inverses such as pi, sin, asin, bitwise operations, comparisons, reductions such as max, min, standard, prod, unique, vector/matrices, and linear algebra operations.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=63)** Now let's go over some more examples.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=66)** First, here are some common functions like abs, ceil, floor, and clamp, and these are the output.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=74)** Next, let's try a reduction function using the mean operator, and there you have the output.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=82)** Finding maximum or minimum values in the Tensor can also be done by using tensor.max and tensor.min respectively.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=92)** The expected output is right there.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=95)** Now let's take a look at the trigonometric functions and their inverses.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=100)** Supposed you have a tensor containing various values of pi and you want to apply the sine and cosine function on it.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=108)** You can use the torch.sin tensor and torch.cos tensor as follows.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=115)** And we import NumPy here as well.
>
> **[1:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=118)** You can expect the output here.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=122)** Sometimes you have to get an evenly spaced list of numbers between a range.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=128)** You can use torch.linspace, start, end, and step to do that.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=134)** Let's make it more interactive by plotting the sin minus pi to sin pi and cos minus pi to cos pi, making the dataset first here.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=147)** Here we have the dataset.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=150)** And last but not least, let's use Matplotlib to create the graph.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=158)** Here you see the plotted output.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=161)** The basic PyTorch operators offer a lot of functionalities and here is an example of that and hope you get the opportunity of exploring more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Understand PyTorch NumPy Bridge
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=0)** - [Instructor] Broadcasting is a way to perform an operation between tensors that have similarities in their shapes.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=7)** This is an important operation in deep learning.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=9)** The common example is multiplying a tensor of learning weights by a batch of input tensors, applying the operation to each instance in the batch separately and running a tester of identical shape.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=24)** Here's an example with two by four multiplying one by four returns a tester of shape two, with dimension of one, with values of two and 16.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=37)** If you're familiar with broadcasting semantics and NumPy ndarrays, you'll find the same rules apply with PyTorch.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=45)** The exception to the same shape rule is tensor broadcasting.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=50)** The rules for broadcastings are, one, each tensors must have at least one dimension, no empty tensors.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=59)** Comparing the dimension sizes of two tensors, going from last to first, each dimension must be equal or one of the dimensions must be of size one or the dimension does not exist in one of the tensors.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=75)** Tensors of identical shape, of course, are trivially broadcastable, as you saw earlier.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=82)** Here are some examples of situations that honor the rules and allow broadcasting.
>
> **[1:29](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=89)** We first have tensor A and tensor B, here, has the third and second dimensions identical to tensor A, with dimension one absent.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=103)** Tensor C has third dimension equals to one, second dimension identical to A and first dimension empty.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=113)** Tensor D has third dimension identical to A, second dimension equals to one and first dimension empty, and it is broadcastable as well.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=126)** PyTorch's broadcast semantics are compatible with NumPy's, but the connection between PyTorch and NumPy goes even deeper than that.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=135)** If you have existing ML or scientific code with data stored in NumPy ndarrays, you may wish to express the same data as PyTorch tensors.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=146)** Whether to take advantage of PyTorch's GPU acceleration or its efficient abstractions for building ML models.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=154)** It's easy to switch between ndarrays and PyTorch tensors.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=159)** Let's take a look at some examples.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=162)** Here's a conversion and here is the expected output.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=168)** PyTorch creates a tensor of the same shape and containing the same data as NumPy array, going as far as to keep NumPy's default 64 bit float data type.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=180)** The conversion can just as easily go the other way, here, as the example of a version.
>
> **[3:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=187)** And the expected outcomes are here.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=190)** It's also important to know that these converted objects are using the same underlying memory as their source objects, meaning that changes to one are reflected in the other.
>
> **[3:22](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=202)** And here's an example, and the expected output is shown here.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=208)** And this concludes the Intro to PyTorch NumPy Bridge.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (1), let (1), type. (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Env Vars:** gpu (1)
> **Cross-References:** as you saw (1)
> **Speakers:** - [instructor] (1)

#### Understand PyTorch autograd
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=0)** - [Narrator] Automatic differentiation is a building block of every deep learning library out there.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=6)** PyTorch's automatic differentiation engine called Autograd is a tool to understand how automatic differentiation works.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=15)** Modern neural network architectures can have millions of learnable parameters.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=20)** From a computational point of view, training a neural network consists of two phases.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=26)** The forward pass computes the value of the loss function.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=30)** In forward prop, the neural network makes its best guess about the correct output.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=36)** It runs the input data through each of its functions to make this guess.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=41)** The backward pass computes the gradients of the learnable parameters.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=47)** In backdrop, the neural network adjusts its parameters proportionate to the error and its guesses.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=55)** It does this through three steps.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=57)** First, it traverses backwards from the output, then it collects the derivatives of the error with respect to the parameters of the functions, aka gradients.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=68)** And lastly, it optimizes the parameters using gradient dissent.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=74)** The forward pass is pretty straightforward.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=77)** The output of one layer is the input to the next and so forth.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=81)** Backward pass is a bit more complicated since it requires us to use the chain rule to compute the gradients of the weights to the loss function.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=91)** It is impractical to calculate gradients of such large composite functions by solving mathematical equations, especially because these curves exist in a large number of dimensions and are impossible to fathom.
>
> **[1:46](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=106)** This is where PyTorch's Autograd comes in.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=110)** It abstracts complicated mathematics and helps us magically calculate gradients of high-dimensional curves with only a few lines of code.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=121)** Let's run through an example.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=123)** First, we need to import the libraries using Torch and Torch Autograd.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=130)** Next, we'll use the Autograd variable function to create a variable.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=135)** Let's now perform an operation of the variable.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=140)** Y was created as a result of an operation, so it has a grad function.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=148)** Next, let's perform more operations on y.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=152)** Time to calculate the gradients now.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=155)** Let's back prop now using out.backward which is equivalent to doing the following.
>
> **[2:44](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=164)** And once we print, you should have got a matrix of 4.5.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), function (4), let (4)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Versions:** 4.5 (1)
> **Speakers:** - [narrator] (1)

#### Advanced PyTorch autograd
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=0)** - [Instructor] There's a lot more to AutoGrad and PyTorch.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=3)** Let's try something more complex.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=5)** In this first example, we first generate three random numbers, assign them to a variable called X, and we require, in this case, gradients for X.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=16)** We then provide some operations on X to generate a new variable called Y, which will have a gradient function attached to it.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=25)** Now, let's print out the gradient for X.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=28)** So in your Neural Network, parameters that don't compute gradients are usually called frozen parameters.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=36)** It is useful to freeze part of your model if you know in advance that you won't need the gradients of those parameters.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=43)** This offers some performance benefits by reducing AutoGrad computations.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=48)** Let's walk through a small example to demonstrate this.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=52)** We'll first import some libraries, including torchvision, in this case.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=57)** We load a pre-trained resnet18 model, in this case, and then freeze all of the parameters.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=70)** Assume we want to fine tune the model on a new dataset with 10 labels.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=74)** In ResNet, the classifier is the last linear layer, model.fc.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=80)** We can simply replace it with a new linear layer, unfrozen by default, that acts as our classifier.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=88)** Now, all parameters in this model, except for the parameters of model.fc, are frozen.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=93)** The only parameters that compute gradients are the weights and bias of model.fc.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=101)** Notice that although we register all the parameters in the optimizer, the only parameters that are computing gradients and hence, updated in the gradient descent, are the weights and the bias of the classifier.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=114)** The same exclusionary functionality is available as a context manager in torch.no_grad.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), require (1), function (1), this. (1)
> **Code Identifiers:** no_grad (1)
> **Speakers:** - [instructor] (1)


### 3. Torchvision

#### Torchvision introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=0)** - [Instructor] TorchVision is a library within PyTorch for image and video processing, it contains a number of important and useful data sets, model architecture, as well as models and transformation operations that are commonly used for computer vision projects.
>
> **[0:18](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=18)** There are seven main packages for the TorchVision library: dataset, IO, models, feature extraction, ops, transforms, and utils.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=31)** Let's look at each one of them.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=34)** TorchVision dataset, this package, as the name suggests, contains some of the most popular computer vision data sets.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=42)** All data sets are subset of torch.util.data.Dataset, they have getitem and lamp methods implemented, as a result, you can pass any of them to torch.utils.data.DataLoader, which can load multiple samples in parallel using multiple processing workers.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=61)** We covered the PyTorch DataLoader in previous chapters.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=65)** One thing to note is that all data sets have identical implementations and signatures.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=71)** All of them have these two common arguments: transform, and target transform.
>
> **[1:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=77)** The former will transform the input, and latter, to transform the target.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=83)** Some of the most popular data sets are CalTech, which refers to the CalTech 101 project that contains pictures of objects belonging to 101 categories, each category has about 40 to 800 images.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=98)** CIFAR.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=100)** The CIFAR 10 and CIFAR 100 are labeled data sets of the 80 million TinyImage data set.
>
> **[1:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=108)** Cityscapes.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=109)** The Cityscapes data set focuses on semantic understanding of urban street scenes, with 50 cities across different seasons, with 5,000 images finely annotated, and 20,000 coarsely annotated.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=125)** ImageNet contains 14,197,122 annotated images
>
> **[2:13](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=133)** according to the WordNet hierarchy.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=136)** Since 2010, the dataset is used in the ImageNet Large Scale Visual Recognition Challenge, a benchmark in image classification and object detection.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=148)** Many of you have heard the MNIST dataset, which was developed by none other, Yann LeCun, the chief scientist at Meta who was dubbed as one of the god fathers of deep learning.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=160)** The MNIST dataset has become a standard benchmark for learning, classification, and computer vision systems.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=168)** Torch Vision Dataset also has a number of extended dataset from MNIST, including EMNIST, Extend MNIST that constitutes more challenging classification tasks involving letters and digits, and that shares the same image structure and parameters as the original MNIST tasks, allowing for direct compatibility with all existing classifiers and systems.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=196)** Fashion-MNIST, consisting of a training set of 60,000 examples, and a test set of 10,000 examples.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=205)** Each example is a 28 by 28 gray scale image associated with a label from 10 classes.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=212)** KMNIST, it's a data set which is a replacement for the MNIST data set, 28 by 28 gray scale, with 70,000 images provided in the original MNIST format, as well as NumPy format.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=228)** [Torchvision.io](https://Torchvision.io), this package provides functions for performing IO operations, including reading and writing images and videos.
>
> **[4:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=240)** Images, the Torch Vision IO read_image reads a JPEG or PNG image into a three-dimensional RGB tensor, optionally converts the image to the desired format.
>
> **[4:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=254)** The values of the output tensor are unit 8, between 0 and 255.
>
> **[4:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=261)** decode_image detects whether an image is a JPEG or PNG, and performs the appropriate operations to decode the image into a three-dimensional RGB tensor.
>
> **[4:34](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=274)** encode_jpeg takes an input tensor and CHW layout, and returns a buffer with the content of its corresponding JPEG file.
>
> **[4:46](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=286)** decode_jpeg decodes a JPEG image into a three-dimensional RGB tensor, optionally converts the image to the desired format.
>
> **[4:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=295)** The value of the output tensor are unit 8 between 0 and 255.
>
> **[5:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=302)** write_jpeg takes an input tensor and CHW layout and saves it to a JPEG file.
>
> **[5:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=310)** For each of the JPEG method above, there is an equivalent for PNG format.
>
> **[5:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=315)** For videos, read_video reads a video from a file, returning both the video frames as well as the audio frames.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=324)** read_video_timestamps list the video frames' timestamps.
>
> **[5:29](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=329)** write_video writes a 4D tensor in THWC format, and a video file.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=337)** VideoReader is a high performance, low-level API for more fine grain control video reading API, it supports frame by frame reading of various streams from a single video container.
>
> **[5:51](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=351)** Models.
>
> **[5:52](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=352)** The Models sub package contains definitions of models for addressing different tasks, including image classification, pixel-wise semantic segmentation, object detection, instant segmentation, person key point detection, and video classification.
>
> **[6:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=371)** There are four model sub-packages, including Classification, Semantic segmentation, Object/keypoint detection, and Video classification.
>
> **[6:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=381)** Operations.
>
> **[6:22](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=382)** Feature extraction utilities enable ML engineers to access intermediate transformations of the model inputs.
>
> **[6:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=392)** TorchVision provides great feature extractors for this purpose.
>
> **[6:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=397)** The torch.fx.documentation provides a more general and detailed explanation of the above procedure and the inner workings of the symbolic tracing.
>
> **[6:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=408)** TorchVision Ops, it implements operators that are specific for computer vision.
>
> **[6:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=415)** Here are the key operators.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=417)** batched_nms, it performs non-maximum suppression in a batched fashion.
>
> **[7:03](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=423)** box_area, it computes the area of a set of bounding boxes.
>
> **[7:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=430)** clip_boxes_to_image, clip boxes so that they lie inside an image of a size.
>
> **[7:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=437)** mask_to_boxes, it computes the bounding boxes around the provided masks.
>
> **[7:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=444)** remove_small_boxes, remove boxes which contain at least one size smaller than min size.
>
> **[7:33](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=453)** sigmoid_focal_loss, loss used in retina net for dense detection.
>
> **[7:39](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=459)** stochastic_depth implements the stochastic depth from deep networks with stochastic depth used for randomly dropping residual branches of residual architecture.
>
> **[7:52](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=472)** Transforms, this library allows ML engineers to perform various transformation steps on images, including rotation, cropping, composing, adjusting color jitter, converting to gray scale, adjusting padding, resize, amongst many others.
>
> **[8:13](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=493)** For details, check out the documentation in the link below.
>
> **[8:18](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=498)** utils, this library provides a number of processing utilities for computer vision tasks, including making a grid of images, saving a tensor into an image file, and drawing segmentation masks on object detection.
>
> **[8:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=515)** And the details and examples can be found at the PyTorch documentation site as well.

> [!info]- Semantic Content
>
> **Env Vars:** mnist (8), jpeg (6), cifar (3), png (3), rgb (3)
> **Code Identifiers:** read_image (1), decode_image (1), encode_jpeg (1), decode_jpeg (1), write_jpeg (1)
> **Definitions:** is a  (5), refers to (1), is an  (1)
> **Code Keywords:** implements (2), let (1), pass (1)
> **URLs:** [torchvision.io](https://torchvision.io) (1)
> **Cross-References:** we covered (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Torchvision for video and image understanding
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=0)** - [Instructor] Now that you have a good understanding of the TorchVision library, let's walk through a lab, continuing with the use case of Piraeus.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=9)** When presenting a set of tutors to a student for selection, it'll be helpful to include some photos of the instructions in the lectures.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=17)** We'll use the TorchVision image library and try a few transformation actions.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=23)** First, we have to import some libraries.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=28)** We then define a function to display images, here, called show.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=35)** Say this is a Padre class.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=37)** We'll load the images and show them here.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=41)** Now, we define a function to plot various images through transformation, and the function is called plot, right here.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=52)** Most transforms natively support tensors on top of the PIL images.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=57)** Let's add some paddings to the image.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=62)** We then try a few image transformations such as random crop, color jitter, random perspectives.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=76)** And finally, let's crop to the center and find the best centered image.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), class. (1), finally, (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **Env Vars:** pil (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Torchaudio

#### Torchaudio introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=0)** - [Instructor] TorchAudio is a library for audio and signal processing with PyTorch.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=5)** It provides IO, signal, and data processing functions, datasets, model implementations, and application components.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=14)** TorchAudio offers a set of APIs, including backend, functional, transforms, datasets, models, pipelines, sox_effects, compliance.kaldi, kaldi_io, and utils.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=30)** Similar to TorchVision, TorchAudio also provides a number of popular datasets out of the box.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=37)** Examples include CMUDict, CMU pronouncing dictionary, Common Voice, GTZAN, which is music genre classification of audio signals, speech commands, and VCTK, which is speech data uttered by 110 English speakers with various accents.
>
> **[0:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=58)** Details of these datasets can be found at PyTorch dataset documentation.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=64)** Audio I/O package allow you to query audio file metadata, loading audio data into a tensor, and saving audio to files.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=74)** Audio resampling.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=75)** To resample an audio wave form from one frequency to another, you can use transforms.Resample or functional.resample.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=85)** transforms.Resample pre-computes and caches the kernel used for resampling, while functional.resample computes it on the fly.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=96)** TorchAudio's resample function can be used to produce results similar to that of Librosa, which is resampy's kaiser window resampling, with some noise.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=109)** TorchAudio provides a variety of ways to augment audio data.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=113)** TorchAudio SoX effects allows for directly applying filters, similar to those variables in SoX to tensor objects, and file object audio sources.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=125)** Convolution reverb is a technique that's used to make clean audio sound as though it has been produced in a different environment.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=134)** Using room impulse response, RIR, for instance, we can make a clean speech sound as though it has been uttered in a conference room.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=145)** To add background noise to audio data, you can simply add a noise tensor to the tensor representing the audio data.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=153)** A common method to adjust the intensity of noise is changing the signal-to-noise ratio.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=160)** torchaudio.functional.apply_codec can apply codecs to a tensor object.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=167)** Combining all of the above techniques, TorchAudio can simulate audio.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=173)** that sounds like a person talking over a phone in an echoey room with people talking in the background.
>
> **[3:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=180)** Similar to TorchVision, TorchAudio implements feature extractions commonly used in the audio domain.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=188)** They are available in torchaudio.functional and torchaudio.transforms.
>
> **[3:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=195)** There are also augmentation techniques available in TorchAudio, including TimeStretch, TimeMasking, and FrequencyMasking.

> [!info]- Semantic Content
>
> **Analogies:** similar to (4), for instance (1)
> **Env Vars:** cmu (1), gtzan (1), vctk (1), rir (1)
> **Code Identifiers:** sox_effects (1), kaldi_io (1), apply_codec (1)
> **CLI Commands:** make (2)
> **Code Keywords:** function (1), implements (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Torchaudio for audio understanding
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=0)** - Now let's continue with a pyrees use case.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=2)** We would like to transcribe the audio and video lectures into scripts.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=7)** We'll go through an example using Pie Torch's Torch Audio Library to transcribe some audio speech.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=13)** This example is provided by Hiro Moto and can be found at the Pie Torch website will be using pre-trained models from web to back 2.0 through Torch Audio.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=26)** The high level steps of this pipeline includes extract the acoustic features from audio waveform and then estimate the class of the acoustic features framed by frame and then generate hypothesis from the sequence of the class probabilities.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=44)** Torch audio provides an easy access to the pre-trained weights and associated information such as the expected sample rate and class labels.
>
> **[0:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=55)** They're bundled together and available under the Torch Audio dot pipelines module.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=62)** First, we import map plot lib.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=66)** Next, we'll create a Wave two VAC two model that performs the feature extraction and the classification.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=74)** We will use the torch audio dot pipelines dot wave two VAC two, ASR Base nine 60 H here.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=83)** The bundle object provides the interface to instantiate model and other information.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=88)** Sampling rate and the class labels are also found as follows.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=95)** We'll create a model through automatically fetching the pre-trained weights and loaded into the Model.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=104)** Importing S S L module is important to set the context so that the model can be downloaded through HTTPS via the secure sake layer.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=114)** Next, we load data.
>
> **[1:56](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=116)** We use the speech data from Voices dataset which is licensed under Creative Commons by 4.0.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=128)** Let's listen to the output here.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=130)** - [Male Computer Voice] I had that curiosity beside me at this moment.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=134)** - Next, let's load the data into the model and run the resample if necessary for efficiency and performance.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=145)** Next, we extract acoustic features frame by frame.
>
> **[2:29](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=149)** The returned features is a set of tensors.
>
> **[2:31](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=151)** Each tensor is the output of a transformer layer.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=158)** Now let's visualize these features.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=163)** All right. The result is back.
>
> **[2:51](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=171)** As you can see, there are a total of 12 layers.
>
> **[2:54](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=174)** Next, we'll classify these features into categories.
>
> **[2:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=178)** Wave two, VAC two model provides method to perform the feature extraction and classification in one step.
>
> **[3:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=188)** Let's visualize the classification.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=191)** It's in the form of logics instead of probabilities.
>
> **[3:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=197)** Next, we'll generate the transcript using a greedy decoding algorithm, meaning we'll simply pick up the best hypothesis at each timestamp and do not require external resources such as a dictionary.
>
> **[3:32](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=212)** Now we will create the decoder object and decode the transcript.
>
> **[3:39](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=219)** Lastly, let's check the result, and this is the output.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=225)** I had that curiosity beside me at this moment.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=230)** Let's listen to the audio and see if the transcription is correct.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=235)** - [Male Computer Voice] I had that curiosity beside me at this moment.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=238)** - Yes, it is correct.
>
> **[3:59](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=239)** That wraps up the Torch Audio Lab.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (2), continue (1), case. (1), interface (1)
> **Env Vars:** vac (3), asr (1), https (1)
> **Speakers:** - [male (2), - now (1), - next (1), - yes (1)
> **Versions:** 2.0 (1), 4.0 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)


### 5. Torchtext

#### Torchtext introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=0)** - TorchText is PyTorch's Library for Natural Language Processing.
>
> **[0:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=5)** It consists of data processing, utilities, and useful data sets for natural language processing.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=11)** It also comes with pre-trained word embedding, dataset API.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=16)** Iterator API ought to be used for training models with PyTorch.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=21)** TorchText comes equipped with some popular data sets for text classification, language modeling, machine translation, sequence tagging, question and answers, and also unsupervised learning.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=35)** Please note that these are actually data pipes from the Torch Data Project, which is still in beta status.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=43)** So, be aware that APIs might change.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=46)** Couple of recommendations while using these data sets.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=50)** Use data loader for shuffling the data pipe.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=53)** Use the built-in worker n-net function for multi-processing.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=57)** And use drop last equals to true, to ensure that all batch sizes are equal.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=64)** In addition to popular data sets, TorchText package also provides utilities for text data processing for training.
>
> **[1:12](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=72)** Functional. The TorchText data functional module contains the following set of utilities.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=79)** Generate SP model for training a sentence piece tokenizer.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=83)** Load SP model for loading a sentence piece model for file.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=88)** Sentence piece numericalizer is a sentence piece model that numericalizes a text sentence into a generator over the IDs.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=98)** Sentence piece tokenizer is a sentence piece model to tokenize a text sentence into a generator over the tokens.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=107)** Custom replace converts text strings.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=110)** Simple space split splits text strings by spaces.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=115)** Mericalize tokens from literator yields a list of IDs from a token iterator with a vocab.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=123)** Filter Wikipedia XML filters Wikipedia XML lines.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=128)** To map style dataset converts iterable style dataset to map style dataset.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=136)** The metrics modules with blue score computes the blue score between a candidate translation corpus and a reference translation corpus.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=145)** The data utils module contains get tokenizer function that generates tokenizer function for a string sentence.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=155)** TorchText offers some common text transforms, including a few tokenizers, such as a sentence piece tokenizer, clip tokenizer, bert tokenizer, vocab transform, ToTnesor, label index, truncate, add token, sequential, pad transform, and string to int transform.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=179)** They can also be trained together using torch.nn, sequential, or using TorchText, transforms, sequential to support torch's credibility.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=191)** TorchText also contains a number of pre-trained models, including Roberta, that iterates on bert's pre-training procedure, including training the model longer with bigger batches over more data, removing the next sentence, prediction objective, training on longer sequences, and dynamically changing the masking pattern applied to the training data.
>
> **[3:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=216)** We'll go through an example next.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), module (2)
> **Env Vars:** api (2), xml (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), be aware (1)
> **Analogies:** such as (1)
> **Speakers:** - torchtext (1)

#### Torchtext for translation
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=0)** - [Instructor] In this lab, we continue with the Piraeus use case.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=4)** I'll walk you through the tutorial called "Classifying Names with a Character-Level RNN" by Sean Robertson.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=11)** We will be building a text classifier to identify the language used in the course by the tutor.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=17)** The character-level RNN reads words as a series of characters, outputting a prediction and hidden state at each step, feeding its previous hidden state into each next step.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=30)** We take the final prediction to be the output, which class the word belongs to.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=36)** Specifically, we'll train on a few thousand surnames from 18 languages of origin and predict which language a name is from, based on the spelling.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=47)** First, we import the matplotlib.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=53)** We then load the data files from the directory and build our category lines.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=59)** Now we have category lines, a dictionary mapping each category, which is the language, to a list of lines, which are names.
>
> **[1:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=67)** We also kept track of all categories, just a list of languages, and categories for later references.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=75)** Let's print the first five lines of the Italian category.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=81)** Now we have all the names organized.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=84)** We need to turn them into tensors to make any use of them in our model.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=93)** Next, let's create the network.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=97)** To run a step of this network, we need to pass an input, in our case, the tensor for the current letter, and a previous hidden state, which we initialize as zeros at first.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=110)** We'll get back the output probability of each language and a next hidden state, which we keep for the next step.
>
> **[2:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=120)** We will use the lineToTensor to avoid creating a new tensor every step.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=125)** This is more efficient.
>
> **[2:07](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=127)** Before doing our training, let's create a few helper functions.
>
> **[2:12](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=132)** First one is to get category from output.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=139)** The second helper function is to quickly get training example.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=148)** We will train the network using NLLLoss function.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=155)** We set the learning rate accordingly, and define a function, train the model.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=163)** Now we'll run the train function that we defined in the previous step with some examples.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=170)** This will take a while.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=173)** So after the training is done, we will plot the learning results.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=179)** We are almost halfway through.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=182)** Okay, now let's plot the learning results.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=189)** Here we go.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=190)** Next step, we will evaluate the results.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=193)** We create a confusion matrix in order to do that, which indicate for every actual language, which are rows, which language the network guesses and predicts, which are the columns.
>
> **[3:26](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=206)** To calculate the confusion matrix, a bunch of samples are run through the network with the evaluate function, which is the same as the train function is set for minusing the backprop.
>
> **[3:42](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=222)** This is the evaluate function.
>
> **[3:46](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=226)** As you can see, the rows are the actual language and the columns are what the model predicts.
>
> **[3:54](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=234)** Lastly, let's see how the model work by giving it some examples through a predict function.
>
> **[4:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=242)** We're giving it four examples towards the end, and this is the prediction.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (5), continue (1), case. (1), from, (1)
> **Env Vars:** rnn (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** linetotensor (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Continuing your PyTorch learning process
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=0)** - [Instructor] Thanks for watching.
>
> **[0:01](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=1)** Understanding the basics of computer vision, natural language processing, and audio processing through PyTorch can be a lot to get your head around.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=11)** So if you need to go back and rewatch videos until you get it.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=15)** It's very common for new learners to take a couple of passes through this material before it really sinks in.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=23)** If you want to keep learning about PyTorch or Machine Learning, the next step is to dive into the documentation and build something, create an implementation for an idea you have.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=37)** And if you want to learn more about AI, there is a 10 course learning series on LinkedIn called Master The Fundamentals of AI and Machine Learning.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=47)** Courses such as Artificial Intelligence Foundations Neural Networks with Doug Rose, or AI Algorithms for Gaming with Eduardo Corpeno will both be super informative and fun.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=62)** If you want to keep in touch with me, please follow me on Twitter or LinkedIn or look me up on Facebook and Instagram.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=71)** Thank you and bye.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started with AI and Machine Learning]]
← [[Reinforcement Learning Foundations]] | **6 of 7** | [[Artificial Intelligence Foundations- Neural Networks]] →

## Appears In

- [[Getting Started with AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)