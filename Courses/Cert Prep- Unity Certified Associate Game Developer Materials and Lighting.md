---
type: course
slug: cert-prep-unity-certified-associate-game-developer-materials-and-lighting
url: "https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting"
duration_minutes: 160
duration: 2h 40m
level: Intermediate
updated: 1/28/2021
learners: 12156
skills:
  - Unity
exercise_files: true
tags:
  - course
  - topic/software-development
  - skill/unity
status: not-started
created: 2026-04-17
---

# Cert Prep: Unity Certified Associate Game Developer Materials and Lighting

> Become Unity certified and show employers you have the Unity skills they are looking for. Improve your chances of landing that dream job doing what you love most—making games, architectural visualizations, or films. This course helps you study for the lighting and materials portion of the Unity Certified Associate: Game Developer exam. Instructor Alan Thorn discusses the basics of creating materia

> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting) | 2h 40m | Intermediate | 12K learners

## Instructor

- [[Alan Thorn]]

## Resources

- Exercise files available

## Skills Covered

- Unity

## Table of Contents

### Introduction

#### Material and lighting foundations
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980&t=1)** - [Instructor] Greetings, and welcome to Unity-certified Associate Materials and Lighting.
>
> **[0:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980&t=7)** In this course, we'll explore the fundamentals of lighting, rendering, and post-processing inside Unity for creating games, simulations and other interactive content.
>
> **[0:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980&t=20)** My name is Alan Thorn, and I'll be your instructor as we move and explore Unity's amazing feature set.
>
> **[0:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980&t=27)** We'll see how to create materials, how to work with Unity's three major render pipelines, how to import and configure textures like normal maps, how to work with lights and shadows, and how to create post-processing effects to enhance the visual appeal of your scenes.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980&t=47)** This course also explores key concepts in lighting and optimization, such as global illumination, and how both light mapping and light probes can help you get amazing results.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980&t=61)** By the end of this course, you'll have established a solid foundation for creating interesting lighting and material setups inside Unity.
>
> **[1:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/material-and-lighting-foundations?u=76281980&t=71)** So let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Companion files
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980&t=0)** - [Instructor] As you follow along with this course, you have access to the course exercise files.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980&t=6)** These are primarily Unity projects that you can open up to follow along with different videos.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980&t=13)** And each video will signpost which project you should go to.
>
> **[0:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980&t=17)** You can complete this course without using the exercise files, but to get the most from it, I recommend you use them.
>
> **[0:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980&t=24)** When you've downloaded the exercise files, you just need to open the exercise files folder here, and you can see a range of different folders that'll be signposted in different videos.
>
> **[0:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980&t=35)** So, for example, we have an assets to import folder.
>
> **[0:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/companion-files?u=76281980&t=39)** You'll see later that this contains files and folders that you should drag and drop into Unity, while all the other folders are Unity projects that you can open up inside the Unity editor, and follow along with each video.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (4)
> **UI Navigation:** go to (1), open the (1), drag and drop (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Materials

#### Render pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=0)** - [Instructor] In this course, we're going to focus on materials, lighting, and post-processing right here inside Unity.
>
> **[0:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=8)** These three subjects are intimately connected and are critically important for determining how your games and your visualizations end up looking.
>
> **[0:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=19)** Now, in this long process of materials, lighting, and post-processing, your decision-making begins right here at Unity Hub at the project creation stage.
>
> **[0:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=29)** Unity has at least three different systems for rendering.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=34)** And so the settings for materials, lights, and post-processing are slightly different, depending on the type of project you decide to create.
>
> **[0:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=43)** Now, this stage I'm using the latest version of Unity which is 2020.1.8.
>
> **[0:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=51)** I'm going to create a new project here by simply choosing the new button, clicking on the dropdown and making sure that I select the latest version available.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=61)** When I do this, I'm presented with the Create a new project dialogue allowing me to fill in the names of the project settings, the path where the project will be stored on my computer.
>
> **[1:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=73)** But most importantly, over here in the left-hand side, in the Template section, I get to choose the project template to apply to my project.
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=83)** And this is where we're choosing automatically which version, which renderer Unity is going to be using for our project.
>
> **[1:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=92)** By default, we have 3D selected.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=95)** If we choose 3D, we're going to get a straightforward project with some pretty standard materials.
>
> **[1:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=101)** And we're going to be able to support a lot of the different Assets we can download from the Asset Store.
>
> **[1:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=108)** By choosing 3D, we ensure the widest compatibility with Assets from the Asset Store, but it's an legacy option.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=116)** Because a lot of the newer features being added inside Unity apply to these two other templates which are the render pipelines.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=124)** So the 3D option is great if you want to create a simple project that can run on a wide range of devices and can access a load of Assets.
>
> **[2:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=133)** And we'll see shortly how the 3D system works when creating materials and lights.
>
> **[2:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=140)** There's also the newest systems, the High Definition Render Pipeline which is a great option to choose if you want to get the greatest results and the best quality possible from the Unity renderer.
>
> **[2:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=152)** The downside to the High Definition Render Pipeline is that it doesn't support the widest range of devices.
>
> **[2:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=159)** This is intended for high-end hardware, high-end PCs and consoles, and other kinds of hardware that have a lot of power to support that extra graphical quality.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=171)** We also have the Universal Render Pipeline, and this really gives us, or tries to gives us the best of both worlds between the 3D version and the High Definition Render Pipeline.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=182)** It allows us to support some of the newer range of material types available that Unity has to offer giving us great graphical quality, but it also supports a wide range of devices.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=195)** So when creating new Unity projects, your first decision as to which pipeline you should use will determine the types of materials that you can work with and the kinds of Assets that you can use from the Asset Store.
>
> **[3:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=209)** In the next movie, we're going to take a look at the 3D system and the material types there.
>
> **[3:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=215)** So I'm going to go ahead and choose the 3D option, and I'll create a 3D project.
>
> **[3:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/render-pipelines?u=76281980&t=220)** In the next movie, we'll begin from a 3D project and have a look at how to create materials in that pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), default, (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** dropdown (1), select the (1)
> **Exercise Files:** template (2)
> **Versions:** 2020.1.8 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Standard 3D
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=0)** - [Instructor] In this movie, we're going to be exploring the fundamentals of materials and material creation using the standard 3D pipeline right here inside the Unity.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=9)** Now, to demonstrate this, I've opened up a sample project which you can see inside the Viewport.
>
> **[0:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=15)** This is a sample project that is included inside the exercise files, but you can also download it from the Unity asset store.
>
> **[0:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=23)** It's the puzzle creator kit, a kind of fun mouse-trap scene in which you have to guide a marble from the start of the environment to the end.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=34)** This is a vibrant, fun, colorful, playful environment, and that's thanks largely to the materials and the lighting and the way they come together inside this scene here.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=47)** I'm going to start by exploring how we can access the material for a particular object, how we can change it and how we can create and reassign materials to objects here inside the scene.
>
> **[0:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=59)** To start, I'm going to take a look at this slide here, which is a kind of shiny plastic material that you can see inside the scene.
>
> **[1:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=69)** I'm going to click to select one of the slide pieces and you can actually see that based on the structure of these objects, that it's actually a modular environment.
>
> **[1:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=79)** These ramps here are in different sections, and yet they kind of appear seamless.
>
> **[1:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=85)** And again, this is because they all share the same material.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=89)** Now, when I select an object such as this ramp object inside the scene and I check out its properties here in the object inspector, you want to take a look at the Mesh Renderer component.
>
> **[1:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=102)** The Mesh Renderer is really where materials hide out.
>
> **[1:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=105)** Now, if you're working with characters, like animated characters, then you won't see a Mesh Renderer component.
>
> **[1:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=112)** Instead, you will see a skinned mesh renderer component which is an a special alternative, dedicated to character objects.
>
> **[2:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=121)** I'm going to move to the Mesh Renderer and you'll see that there is a materials rollout section.
>
> **[2:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=126)** It may appear expanded for you or contracted, but I'm going to expand it and here you'll see a list of all the materials associated with the surface of this object.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=138)** Now, most objects are associated with just one material, one material per object.
>
> **[2:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=144)** But more complex objects can have multiple materials, it's not restricted to just one.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=151)** By moving down to element zero, I can see the material associated with his object and by left clicking on it here in the inspector, the material is selected inside the project panel.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=162)** It selects the material itself that I can see listed here.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=166)** And you can always tell it's a material because we get this globe preview here inside the project panel.
>
> **[2:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=173)** I can see that the folder location for this material is Assets Creator Kit, alt materials here.
>
> **[3:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=180)** If I left click to select the ramp material, I get a preview of it on the bottom right-hand side here inside the inspection.
>
> **[3:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=188)** I can click and drag my mouse to get a preview of how this material is looking.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=195)** Now, the really interesting thing is that this material is not just applied to this single section of the ramp.
>
> **[3:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=202)** It is shared by all the different ramp sections throughout the entirety of the level.
>
> **[3:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=207)** This is important because on the positive side, I can make one change to this material.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=213)** For example, I can move up here to this color swatch listed beside the Alberto Slot.
>
> **[3:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=219)** And I could change the color, for example, I could change it from this kind of pink value here and I can see the hexadecimal representation for this color.
>
> **[3:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=230)** I could change it, for example, to green.
>
> **[3:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=233)** And in doing that, all the ramp sections change immediately to green.
>
> **[3:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=238)** That's the great thing, an instantaneous change to multiple objects.
>
> **[4:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=243)** Of course, the downside is that if you just wanted to change one section, this really isn't the way to do it.
>
> **[4:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=250)** You would need to have multiple materials on each of the different sections.
>
> **[4:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=254)** I'm going to move back to the hexadecimal field and restore that color value back to how it was.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=260)** Let's take a look at some of the properties that apply to this material here over in inside the inspector.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=267)** The key value to note, first of all, right at the top here inside the inspector is the shader type for the material.
>
> **[4:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=273)** This material is listed as standard.
>
> **[4:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=276)** And in fact, many materials using the standard 3D pipeline will all use the standard material.
>
> **[4:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=283)** The shader type for the material determines the properties that we get below it.
>
> **[4:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=289)** So here I can see quite a range of properties, all of which control how this material is going to look inside the scene and how it will respond to lighting.
>
> **[5:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=300)** Two key properties that are going to define how this material look are the Alberto Slot here, which in all the versions of Unity used to be called Diffuse.
>
> **[5:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=310)** And sometimes if you download Asset Packs from the asset store, they'll still use this naming convention, but wherever you see Diffuse, just know that they're talking about Alberto here.
>
> **[5:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=320)** And this has two properties.
>
> **[5:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=322)** On the right hand side, it has a color and on the left-hand side, it has the ability to supply a texture file allowing us to project an image onto the surface of this model.
>
> **[5:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=335)** Now, in the case of these ramps, because they're just a smooth, plastic of one consistent color, it doesn't have any texture here inside the Alberto Slot.
>
> **[5:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=345)** Instead, it just has this color.
>
> **[5:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=348)** Now, in addition to this, by looking further down, you'll see that we have a metallic field.
>
> **[5:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=354)** This allows us to control whether this object is metal or non-metal.
>
> **[5:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=359)** And most objects inside Unity are divided into one of those two groups.
>
> **[6:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=363)** So usually when you look at materials, this slide of a metal here is either going to be over to the left for an object that is not metal, and then moved to the right for an object that is metal.
>
> **[6:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=376)** And now notice that in bringing that object and changing that metallic value from zero to one, if you check out those ramps here inside the Viewport, you'll notice that we get these shiny ramps here and now they look like they're made of metal.
>
> **[6:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=390)** But I'm going to bring this back to the left hand side.
>
> **[6:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=394)** Beneath the metallic field, we also have the ability to control the smoothness of the material, and really this determines how shiny the object is and how susceptible it is to reflectivity.
>
> **[6:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=408)** By moving an object directly to the left here, I'm turning this into an object that is not at all reflective.
>
> **[6:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=415)** We don't see any real highlights, is not reflecting the environment.
>
> **[7:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=420)** If I move the smoothest line up all the way to the right, however, it's going to be a very different story.
>
> **[7:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=426)** Suddenly, we get a really, really super shiny object, but I'm going to switch that back down here.
>
> **[7:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=431)** And as I change the slider, you can see here the value is changing.
>
> **[7:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=436)** By moving it to the right hand side, I'm turning this object pretty close to a mirror.
>
> **[7:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=441)** And you can already see some of the real highlights here but I don't really want that at all.
>
> **[7:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=445)** I'm going to move that to the left, to about not 0.75, which is pretty close to what it was at the beginning.
>
> **[7:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=453)** So here we have three main settings; Alberto, to determine the color of the material, metallic to determine whether this object is a metal or non-metal, and then smoothness to control how shiny and reflective the object should be.
>
> **[7:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=470)** Let's take a look at another material.
>
> **[7:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=473)** In this case, I want to check out the floor of the level here.
>
> **[7:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=477)** By zooming out, you can see this environment has a floor, is kind of shiny because you can see the highlight down here.
>
> **[8:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=485)** I'm going to select the level background object and expand that, which allows me to select the floor directly from the hierarchy panel.
>
> **[8:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=494)** If I select the floor by left-clicking on it and move again to the Mesh Renderer component, remember it's here inside the Mesh Renderer where you're going to find the list of materials associated with the object.
>
> **[8:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=506)** Going to move to element zero here, left-click and it will select the material it's assigned to.
>
> **[8:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=511)** By selecting that concrete floor, I can check out the preview panel again.
>
> **[8:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=516)** Notice this time, the object for the Alberto Slot has both a color, kind of gray here, but it also has a texture assigned, an image file.
>
> **[8:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=527)** I can even left-click on that to select the texture here inside the project panel and notice that this is not a material, this a texture, an image file, dragged and dropped directly here into Unity.
>
> **[9:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=541)** And this texture is projected onto the floor and repeated.
>
> **[9:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=546)** If I can change the property here, I'll change here the preview shape.
>
> **[9:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=552)** You can see that by default, the preview shape is set to a sphere, but I can click that to change the kind of shape that I'm previewing the material on.
>
> **[9:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=562)** I'm going to change the range of shapes, again cylinder.
>
> **[9:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=565)** Of course, that's not particularly a useful preview for this kind of texture because this material is being assigned to a perfectly flat, planer surface here.
>
> **[9:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=576)** So I'm going to set this back to either a planer surface in the case of this material or a sphere, which is a pretty good way to check out the reflectivity and the highlights of an object.
>
> **[9:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=588)** Now, if I wanted to create my own material from scratch right here inside Unity, I can do that too pretty easily.
>
> **[9:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=597)** I'm going to go back to the project panel and select Assets, move out here and right click with my mouse and choose Create and then choose Material from the context menu.
>
> **[10:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=608)** Whenever I create materials, I like to name them to a certain convention.
>
> **[10:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=613)** I like to prefix all my materials with M-A-T, Mat form material.
>
> **[10:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=619)** By prefixing them in this way with the same name, it makes it really easy to sort and arrange your material alongside other assets, arranging all the materials together alphabetically in a list.
>
> **[10:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=633)** So I'm going to choose Mat and I'm simply going to call this Test.
>
> **[10:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=637)** Press enter on the keyboard.
>
> **[10:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=639)** Now in selecting Mat Test, you can see by default here inside the project panel and the preview panel, that is a pretty standard material.
>
> **[10:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=648)** Pretty gray not too shiny, not too metallic.
>
> **[10:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=651)** It's very, very undefined.
>
> **[10:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=654)** I can now apply this material to any object that I want inside the scene, just by dragging and dropping.
>
> **[11:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=661)** For example, by dragging and dropping onto the floor, I can see what the floor would look like with that material on it.
>
> **[11:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=668)** Now I've not released my mouse to confirm the assignment which means that when I move my mouse away, I see back the material that was previously there.
>
> **[11:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=677)** I can apply it to other types of objects like the funnel here, can assign it to the ramps inside the scene.
>
> **[11:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=683)** We can see how that looks, it's pretty good.
>
> **[11:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=686)** Over here to the plant pot at the back, or I can move even onto these spheres here.
>
> **[11:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=692)** I'm going to drag and drop it onto one of these spheres here, so this smaller one next to the plant pot, and zoom my camera in to see that in more detail.
>
> **[11:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=702)** I can already see how this material is responding to light here, inside the scene.
>
> **[11:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=708)** I'm going to select the material and again make this metallic by moving it to the right hand side.
>
> **[11:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=715)** So suddenly this has transformed into being a metal here.
>
> **[12:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=720)** I'm also going to grab the smoothness and move that all way to the right.
>
> **[12:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=724)** So suddenly this object takes on some pretty intense reflectivity here.
>
> **[12:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=730)** Change the smoothness, just down just a little bit, so that we still get the reflectivity.
>
> **[12:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=736)** But it's slightly missed it so that we have this kind of super shiny metal object.
>
> **[12:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=742)** And I can even assign this to multiple other types of objects, again, to apply these to these separate objects here to check out how they look here inside the Viewport.
>
> **[12:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=753)** And the great thing is, is that each of these three objects maintain the link to that one material.
>
> **[12:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=759)** Meaning, if I change that material all the other objects are going to change.
>
> **[12:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-3d?u=76281980&t=765)** So that's the basics here of how to create and edit materials using the standard 3D render pipeline right here in Unity.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (2), super (2), switch (1), case, (1)
> **UI Navigation:** select the (7), click on (1), drag and drop (1)
> **Definitions:** is a  (7), is an  (1), means that (1)
> **Analogies:** for example (4), such as (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 0.75 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### URP materials vs. HDRP
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=1)** - [Man] In this movie, I've gone ahead and created two new Unity projects.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=6)** One is the High Definition Render Pipeline template, so I selected High Definition Render Pipeline, created a new project with my own name, selected "create", and then I did the same thing for the Universal Render Pipeline, and then chose "create".
>
> **[0:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=23)** And what I have here inside the Unity engine, first of all, is the Universal Render Pipeline project.
>
> **[0:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=31)** This is the sample scene that ships automatically with this project.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=36)** If you don't see this scene, you can simply move to the scenes folder here and double click on "sample scene" to display this inside the scene viewpoint here.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=48)** And we have a pretty sample scene which is a construction site.
>
> **[0:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=53)** You can see that we have a work bench here, a floor with walls.
>
> **[0:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=58)** And interestingly, all of these objects are not created using the standard materials that we saw in the preceding movie.
>
> **[1:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=66)** Although in many ways, the plastic hat, for example looks kind of plastic-like just as we have plastic in the preceding movie but it's not created using the same material type.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=77)** Because the Universal Render Pipeline has its own associated materials but they work pretty much like the original materials.
>
> **[1:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=86)** So for example, if I select the hat on the workbench my view is occupied by the strange spheres here, which are light probes.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=95)** Now, these are important for lighting as we'll see later in this course, but I don't want them getting in the way of my view here inside the view port.
>
> **[1:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=104)** So I can deactivate them pretty easily by here inside the scene tab, simply moving to the toolbar and clicking the gizmos button just to hide those light probes.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=116)** They're still in the scene, but I just can't see them in the view port.
>
> **[2:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=120)** Now by selecting the hard hat here inside the scene I can check out its material just as I could in the standard pipeline here, by moving to the inspector, taking a look at the mesh renderer component and here in the materials section in element zero I can see the material associated with this object.
>
> **[2:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=141)** I can even left click to select it inside the project panel.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=145)** And also down here at the bottom, it shows me the material properties in a kind of quick selection way.
>
> **[2:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=153)** By selecting an object, I can instantly see its material properties down here at the bottom.
>
> **[2:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=159)** It just saves me that extra troll of going to the project panel and finding the object independently.
>
> **[2:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=167)** I'm going to select material by left clicking on it here, inside the project panel.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=172)** So this is a material for the hard hat.
>
> **[2:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=175)** You can see that the shader type immediately is not set to standard as it was in the 3D pipeline, but it's being sent to 'Universal Render Pipeline lit" which is the default material, for most objects that you will find.
>
> **[3:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=190)** Most of the materials in a 3D scene, for the Universal Render Pipeline, will be of this lit variety, except for exceptional cases.
>
> **[3:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=200)** I can click on the dropdown to select other shader types here.
>
> **[3:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=205)** But I'm going to leave this material left as it is.
>
> **[3:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=209)** We get some additional properties that we can choose from.
>
> **[3:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=212)** For example, the surface type allows us to choose whether this is a regular solid object or whether this is something like glass that has transparent components.
>
> **[3:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=223)** You'll notice down here for the surface inputs that we get this section called "base map".
>
> **[3:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=229)** This is the equivalent of the Albedo slot that we saw in the standard 3D pipeline.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=234)** And just like that slot, it has those two core parts.
>
> **[3:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=239)** The color that's being multiplied to that material and then any texture file associated with it on the left-hand side.
>
> **[4:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=248)** In addition, we also have the ability to choose whether this is really smooth or not by adjusting this slider.
>
> **[4:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=256)** So it's pretty straight forward.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=258)** We also have some really nice other features that we don't immediately see in the standard pipeline.
>
> **[4:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=264)** For example, if I move to render face you can see that we have front, back or both.
>
> **[4:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=271)** We can turn objects inside out by changing that to "back" and we can make objects polygons double-sided by selecting "both".
>
> **[4:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=281)** So we have some additional properties here with these shaders that we did not have in the standard render pipeline.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=288)** I'm going to switch over now, to the High Definition Render Pipeline.
>
> **[4:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=294)** Now in the High Definition Render Pipeline we have basically the same startup scene.
>
> **[5:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=301)** And you can find this just as you did with the Universal Render Pipeline here in the scenes folder, in the sample scene folder where we have this construction site and some basic objects with materials assigned to them.
>
> **[5:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=315)** But here in the High Definition Render Pipeline, yet again, these material types are distinct.
>
> **[5:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=322)** They are different from the standard 3D ones and from the Universal Render Pipeline ones.
>
> **[5:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=328)** For example, let's select maybe the hammer here that is on the bench.
>
> **[5:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=333)** You can see from the hammer again it has that mesh renderer, select "element zero" to identify its material.
>
> **[5:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=340)** And then I can left click to select that material.
>
> **[5:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=344)** But you'll notice that this time we actually get quite a few more options that are specific to the High Definition Render Pipeline.
>
> **[5:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=352)** The material has the shade of type of HDRP lit.
>
> **[5:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=357)** And this time we can choose simply with the check box whether it's double-sided or not, so that's pretty neat.
>
> **[6:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=364)** Notice also that we have this mask map field.
>
> **[6:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=368)** This allows us to use an image file, the red, green and blue, and the alpha channel pixels to control whether this object has smoothness or is metallic.
>
> **[6:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=380)** So it's actually using the pixels of a texture file to control those settings.
>
> **[6:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=386)** I can left click on that slot to see the image file itself.
>
> **[6:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=391)** And of course we don't have a traditional file with pixels inside it, sure, these are pixels but these pixels are being used to define the settings of the material itself.
>
> **[6:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=403)** So that we're getting quite a lot of control just by using image files to tweak these materials.
>
> **[6:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=409)** So that's pretty interesting.
>
> **[6:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=411)** Now, just as we could in the 3D pipeline we can easily create our own materials inside the HD Render Pipeline by right-clicking, choosing "create" and then selecting "material".
>
> **[7:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=425)** That's pretty impressive.
>
> **[7:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=427)** But here's another thing that you can do inside either of the render pipelines.
>
> **[7:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=432)** You can move up to the option that says "shader" and then you can select the shader graph options here.
>
> **[7:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=439)** We have an "unlit shader" here.
>
> **[7:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=441)** We have a "PBR graph".
>
> **[7:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=443)** We have the HD Render Pipeline and we have all these other options.
>
> **[7:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=446)** Like the lit graph.
>
> **[7:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=448)** These options will allow you to create your very own shade of types, so that when you create your material and you view your material, for example, in the inspector, you can have your own type listed up here.
>
> **[7:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=463)** It's a completely reprogrammable render pipeline.
>
> **[7:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=467)** And that's pretty interesting.
>
> **[7:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=469)** The shader graph is not covered in this course.
>
> **[7:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=472)** And for many projects, you will never need to use it.
>
> **[7:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=476)** But it's important to know it's there, because it can let you customize materials significantly.
>
> **[8:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=482)** The last thing that is important to know about, when you're using either of the render pipelines the HD or the Universal, is that Unity has particular settings inside its project settings tab that are specific for choosing the Render that were using.
>
> **[8:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=499)** For example, here I am in the HD Render Pipeline.
>
> **[8:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=503)** The reason this is classified as a HDRP project and the reason that we're using all of these materials and they're showing up fine, is because user has been configured to use the HD Render Pipeline.
>
> **[8:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=517)** We can access the settings for the HD Render Pipeline to customize its rendering and its functionality by moving to the menu and choosing "edit", and then selecting project settings.
>
> **[8:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=530)** Now from this option menu here, make sure that you hit the graphics tab here.
>
> **[8:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=535)** And you'll see from the graphics option that we have the option "scriptable render pipeline settings".
>
> **[9:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=542)** This is telling Unity, which render system were using which could be the Universal Render Pipeline or the HD Render Pipeline.
>
> **[9:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=550)** In this case, I'm looking at the HD Render Pipeline project.
>
> **[9:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=553)** When I left click to select that asset it actually selects it down here inside the inspector in the project panel.
>
> **[9:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=561)** I can left click on that asset and view its properties from the inspector and even change them.
>
> **[9:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=568)** And actually there are ton of settings here that I can expand and contract, to change the way that the render pipeline behaves.
>
> **[9:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=579)** So we have settings for lighting that I can look at here allowing me a lot of control over how the lighting works even how the shadows work in this system here that can really have a big impact on the quality that we're using.
>
> **[9:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=594)** Now, this sample project is already set up for us and it's good to go.
>
> **[9:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=599)** So we don't need to change any of these settings.
>
> **[10:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=602)** But it's certainly worth knowing that these settings are here because if ever you want to increase the quality or reduce the quality or change the performance of your materials and your lighting.
>
> **[10:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=615)** This is one of the places to check out, because a lot of the settings have a big impact on how your scene will look.
>
> **[10:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=623)** So we've seen here the basics for creating and editing materials right here inside the render pipelines.
>
> **[10:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=630)** The process is not too dissimilar to the 3D system.
>
> **[10:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/urp-materials-vs-hdrp?u=76281980&t=636)** It's just that there are some additional settings you need to be aware of.

> [!info]- Semantic Content
>
> **Analogies:** for example (7), just like (1)
> **UI Navigation:** click on (4), select the (2), dropdown (1)
> **Code Keywords:** let (2), type. (1), from. (1), switch (1), case, (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** hdrp (2), pbr (1)
> **Definitions:** is a  (3)
> **Cross-References:** later in (1)
> **Exercise Files:** template (1)

#### Upgrading materials
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=0)** - [Instructor] When you're working with either the High Definition Render Pipeline, or the Universal Render Pipeline, you might want to import assets from the Unity Asset Store into your project.
>
> **[0:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=12)** And that's what we're going to be doing here.
>
> **[0:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=14)** But when you do that, you might encounter a problem, especially if the asset was made quite a while ago, like a mesh or material and you're importing that into your project using the newer render system you might find incompatibilities.
>
> **[0:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=31)** And in this video, I want to show you how we can upgrade older materials to the newer render pipeline.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=38)** So to do that, I'm going to start by importing an asset from the Asset Store.
>
> **[0:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=43)** I've already gone ahead and downloaded that, and I'm just going to show you using the Unity Package Manager, how we can access and import a new asset by choosing window Package Manager to display the Package Manager window.
>
> **[0:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=57)** And I've gone ahead here in shows and under packages, my assets here to view the my assets, the assets that I've downloaded from the Unity Asset Store, I just went to the Asset Store, and I searched for car here.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=70)** And this is a completely free asset that you can download and import into your projects.
>
> **[1:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=75)** You can see from the release details that this asset was created here in 2014, on July 29, so that was quite some time ago before any of the render pipelines were ever created.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=89)** And from the screenshots, this mesh looks pretty good, you can see we've got a luminous kind of green car orange texture applied to this one here.
>
> **[1:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=99)** Now for you, when you move to the bottom right hand side of the Package Manager, you may see the download button if the asset hasn't already been downloaded to your computer.
>
> **[1:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=109)** In my case, I've already gone ahead and downloaded that.
>
> **[1:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=112)** So for me, the Import button is activated.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=116)** So you can just click Import.
>
> **[1:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=119)** When you do that, you'll see the Unity import package dialog here.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=123)** So these are just materials and textures and the meshes that we can import into our project, there'll be installed to the vehicles Jeep, final Jeep folder, and that's absolutely fine.
>
> **[2:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=134)** I'm going to hit import to import those assets.
>
> **[2:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=137)** And lightning fast, it's already imported them.
>
> **[2:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=141)** I'm going to close the project managers just go back to the project panel, and you'll see hidden away here inside the project panel, we have a vehicles folder where the asset has installed itself.
>
> **[2:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=153)** Now if I double click on the vehicles folder, and go inside the Jeep folder, and then the final Jeep folder, you'll begin to see some interesting problems.
>
> **[2:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=163)** For example, if I move to the materials folder to check out the materials for this Jeep, you'll see that we get to luminous purple materials.
>
> **[2:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=175)** If I go back to the final Jeep folder, and I drag and drop the Jeep into the scene, and scale that up just a little bit here inside the view, you'll see that the Jeep is also a luminous purple.
>
> **[3:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=189)** This is Unities indication that there's a problem with the material.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=195)** I'll select the Jeep from the sample scene here, right click and choose Delete.
>
> **[3:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=200)** Now if I go back to the materials folder, and select any one of these materials, let's for example, select the left hand one.
>
> **[3:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=208)** By selecting it and viewing its properties inside the inspector.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=213)** You can see it's detected the material type is listed as a legacy shader, meaning that it's compatible with the standard 3D pipeline.
>
> **[3:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=223)** But this project here, and any project that begins with this sample scene will be using either the Universal or the HD Render Pipeline, and it's not compatible with these materials.
>
> **[3:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=235)** So how do we go about fixing this?
>
> **[3:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=237)** Well, there are really two methods.
>
> **[3:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=239)** One is automatic.
>
> **[4:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=241)** And it's kind of convenient, but it doesn't always work.
>
> **[4:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=245)** And the other method is the manual method.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=247)** And I'm going to show you both methods for upgrading your materials.
>
> **[4:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=252)** So your meshes can continue to look good in your scenes.
>
> **[4:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=255)** Let's start with the automatic method.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=258)** I'm going to select one of the materials down here.
>
> **[4:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=262)** Let's take the right hand side material, this Jeep texture six dot matte here.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=267)** To try to upgrade this automatically.
>
> **[4:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=269)** I just need to select the material here in the Project panel.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=274)** And I'm going to move to the menu and choose Edit render pipeline.
>
> **[4:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=279)** And then move down to the option here that says, upgrade selected materials to high definition materials.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=288)** So by choosing that option, it's going to analyze all of the selected materials, and it's going to try to upgrade them to the latest version.
>
> **[4:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=297)** I'm going to select that option here and it prompts me to confirm that I want this to happen.
>
> **[5:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=304)** And be careful because this process is irreversible.
>
> **[5:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=308)** So I'm going to select proceed here.
>
> **[5:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=312)** Now in this case, nothing has happened, it's had no effect at all.
>
> **[5:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=318)** And the reason is because this material is set up in a particular way, that it can't automatically be upgraded.
>
> **[5:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=326)** And so we have to do that manually.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=329)** So I'm going to select both materials here, and upgrade them manually.
>
> **[5:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=333)** And here's how we do that.
>
> **[5:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=336)** I'm going to select the materials, and move to the shader and click from the drop down, and then choose HDRP for High Definition Render Pipeline, and then select the lit material, which is the standard illuminated material for that render pipeline.
>
> **[5:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=351)** Going to select that option here.
>
> **[5:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=353)** And immediately, you can see in the preview here, that our materials are now turned into valid compatible materials.
>
> **[6:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=363)** Unfortunately, in upgrading this material manually, we've lost the references here inside the basemap inputs.
>
> **[6:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=371)** So previously, there was a texture plugged into those albedo or diffuse slots.
>
> **[6:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=376)** But here using the newest system and upgrading manually, we don't get that luxury.
>
> **[6:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=381)** So we have to reassign those values manually.
>
> **[6:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=385)** It's not too difficult.
>
> **[6:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=386)** In this case, I can just select the left hand Jeep material, click on the basemap selection here.
>
> **[6:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=394)** And I'm going to select this texture, this was the original texture plugged into this, I'm going to select that, I'm going to change the smoothness and just move that down to the left here and do the same thing with the other material.
>
> **[6:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=409)** So for the basemap I'm going to select the orange texture here you can see that was included as part of the package, move the smoothing slider all the way to the left hand side.
>
> **[7:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=421)** And now when I go to the Jeep folder and drag and drop the Jeep in the scene, let's just scale that up.
>
> **[7:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=428)** I can now see that this texture and this material on the Jeep is now displaying correctly and things are looking good.
>
> **[7:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=438)** So we went through the process of manually upgrading this material to the newer render pipeline.
>
> **[7:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=445)** You can try to do it automatically.
>
> **[7:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/upgrading-materials?u=76281980&t=447)** It may work but if it doesn't, you now know how to do this manually.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (3), import. (1), delete (1), continue (1)
> **UI Navigation:** select the (5), click on (2), drag and drop (2), go to (1)
> **Cross-References:** go back to (3)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Env Vars:** hdrp (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)

#### Textures and normal maps
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=0)** - [Instructor] In this movie, we're going to look at normal map textures.
>
> **[0:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=4)** These are special kinds of image files that can control how bumpy or smooth a surface inside our scene can look.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=13)** To demonstrate normal maps and how to control them, I've opened up the sample scene that comes with all High-Definition Render Pipeline projects.
>
> **[0:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=23)** That's right, it's this bizarre construction scene that you see in front of you here, and down inside the Project panel in the Assets, ExampleAssets, Materials folder, you'll find a big selection of materials that come with this project, and pretty much each of these materials is present inside this scene.
>
> **[0:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=44)** Now, some of these materials do not have normal maps and some do.
>
> **[0:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=49)** Let's take a look at a material that does have a normal map and see how that is set up.
>
> **[0:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=55)** I'm going to move down here to the Project panel, select the ground material, and when I select that from the Inspector we get a preview of how that material looks here, and this material is currently applied to the floor surface inside this level.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=70)** You'll see from the properties that under the normal maps slot here on the left-hand side this actually links to a texture inside our project.
>
> **[1:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=81)** You'll see the normal base map slot.
>
> **[1:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=84)** This controls the color of a surface under normal lighting conditions and so it defines how this floor looks, but the normal map is an additional texture and the pixels of that texture control the smoothness and bumpiness of a surface, and the slider on the right-hand side can accelerate those effects.
>
> **[1:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=107)** So for example, this slider here is currently set to one, and I can increase this to multiply or to accentuate the effect.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=116)** To demonstrate this, I'm going to slide into the floor here to take a look at how that's set up, and I'm going to move it to an angle where the light catches the surface, and then I'm going to increase this slider and take a look at the effect on the floor.
>
> **[2:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=133)** You can see that as I begin to increase this slider, and now I've changed it all the way to eight, it was at one and has been increased to eight times the effect, you can see that what has happened here is the surface increases its bumpiness look.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=151)** We're getting brighter areas where the reflections are happening and darker areas to accentuate these recesses and these crevices.
>
> **[2:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=159)** Now, this effect, the normal map itself is not actually changing the mesh itself.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=166)** When I select the floor it's still a single straight cube mesh, so a normal map does not change the mesh at all.
>
> **[2:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=175)** It simply changes how the material is controlled and applied to that surface.
>
> **[3:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=181)** If a texture were to change the mesh that will be called a displacement map and not a normal map, so normal map do not change the topology.
>
> **[3:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=190)** They just change the way an object is shaded.
>
> **[3:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=194)** I'm going to set that value back down to one, and let's check out the normal map itself.
>
> **[3:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=200)** So I'm going to move to the normal map slot here, left-click, and it will automatically select the normal map texture inside the Project panel, and this really is just an image file, a JPEG or a PNG file.
>
> **[3:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=215)** I'm going to left-click to select that normal map here.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=218)** You can see that this is actually a TIF file, T-I-F, and in selecting this file, you can see from the Preview panel here that we have it's a 512 by 512 map, and you can see the details of this map.
>
> **[3:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=232)** Now, it's a strange, purple-looking kind of image, and it's difficult to determine exactly what these different pixels are representing, but the pixels themselves are determining how rough or smooth a surface is.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=247)** Now, whenever you import a normal map just by dragging and dropping your image files into the Project panel here, you'll want to make sure that you select those textures, the normal map textures, and from the Inspector here under the Texture Type field make sure you set that to normal map so that Unity recognizes this image correctly as a normal map and will use it for that purpose.
>
> **[4:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=273)** So any imported textures, make sure you label them as normal map.
>
> **[4:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=278)** Now, the normal map images themselves, well, they're generated by a 3D-modeling software.
>
> **[4:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=285)** However, if you don't have a normal map for a texture, for example, take the ground texture here.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=291)** If you've just imported a standard, regular texture and you want Unity to generate you a normal map from your imported albedo or diffuse map texture, you can do that.
>
> **[5:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=304)** The preferred method is to get the 3D software to generate the normal map for you.
>
> **[5:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=309)** Software such as Maya or Blender, whatever content-creation software you are using.
>
> **[5:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=315)** It's preferable if that software generates the normal map for you, but if you don't have that luxury and you just want to take a diffuse map like this and generate a normal map from it, here is how you do that.
>
> **[5:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=328)** I'm going to select the diffuse texture here, or the albedo texture, and I'm going to duplicate it.
>
> **[5:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=334)** So making sure that this is selected, I'm going to hit Command + D on a Mac or Control + D on a PC to duplicate the texture, so I now have two of these.
>
> **[5:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=344)** I have the original ground albedo and I have the duplicate that has been postfixed with the number one, but I'm going to right-click to rename that, and I'm going to delete the one at the end but put _NormalAutogenerate, and then simply select the auto-generated version.
>
> **[6:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=365)** That is the second texture here.
>
> **[6:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=368)** The next thing that I'm going to do is in selecting this texture, I'm going to move to the Texture Type field and click on the drop-down and choose normal map, and I'm going to make sure that is selected, and then the next thing I'm going to choose is choose Create from Grayscale and enable that option.
>
> **[6:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=387)** I can then even use these options here to control the normal map that's generated.
>
> **[6:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=393)** In this case, I'm going to change the Filtering from sharp to smooth and then choose Apply.
>
> **[6:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=399)** Now, when I do this, you can see that it's now automatically generated the original diffuse texture here as a normal map.
>
> **[6:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=409)** I might not want this to be so bumpy, so I can move to the Bumpiness slider and just reduce that down and choose Apply to get something looking like this, and that's pretty good, and actually, let's check out the difference between our auto-generated normal map, the one that we have here, with the actual normal map that's been imported and select them too.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=434)** You can see there is a bit of difference, but it's not too dramatic here.
>
> **[7:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=439)** I'm going to select this one and maybe reduce the strength a bit further and choose Apply.
>
> **[7:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=445)** I can jump between the two, and it's not too bad.
>
> **[7:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=449)** So you can see we have two options for generating normal maps.
>
> **[7:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=452)** We have the original option where you can import your normal maps that are generated alongside your 3D models, just drag-and-drop those images directly into Unity here, and we also can generate a normal map from an original texture.
>
> **[7:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/textures-and-normal-maps?u=76281980&t=469)** The key thing is that when you're creating your materials, as in the case of this ground here, when you're creating your materials make sure that in these material slots you're dragging-and-dropping your normal map, setting the slider properties to control the strength, and then you'll end up with materials that look bumpy or smooth all controlled by a normal map.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), delete (1), case, (1)
> **CLI Commands:** make (5), find (1)
> **UI Navigation:** select the (4), right-click (1), click on (1)
> **Env Vars:** jpeg (1), png (1), tif (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Tiling materials
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=0)** - [Instructor] In this movie, I'm going to look at material tiling, which is really powerful technique for taking a material and making it repeat across a surface.
>
> **[0:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=10)** This is especially useful when you want to take a relatively small material, and have it appear in many places.
>
> **[0:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=17)** Perhaps, expanding across a large area in your scene.
>
> **[0:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=22)** For example, what I'm looking at here is the 3D sample materials project included in the exercise files.
>
> **[0:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=30)** This contains the creator kit puzzles scene, where we have three different puzzle levels.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=36)** And this in front of us in the scene is just one of them.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=40)** If you take a look at the floor of this world here, you'll notice that it has a material spanning across it.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=48)** Now, this material is repeated across the floor.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=52)** It looks pretty seamless and that's because the texture being used is a tillable texture.
>
> **[0:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=59)** It's a texture that is the same and identical at each of its edges, so that it can repeat seamlessly.
>
> **[1:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=66)** I'm going to be importing a new and different texture and showing you how to set up texture repeating across a surface.
>
> **[1:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=74)** To do that, I'm going to bring in the assets to import folder.
>
> **[1:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=78)** This is part of the exercise files.
>
> **[1:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=79)** And inside that folder, you will find Checker .PNG, which is a pretty standard Checker map.
>
> **[1:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=87)** I'm going to drag and drop that into the project panel to import that texture and select the file.
>
> **[1:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=94)** You can see that it's a P-N-G file.
>
> **[1:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=97)** And from the inspector, you can see that it's 64 pixels by 64 pixels.
>
> **[1:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=102)** And it contains just this standard checker pattern.
>
> **[1:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=106)** I'm going to just select here, the floor, and duplicate it.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=111)** So, I'm going to make sure that the floor in the scene is selected.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=114)** You can see the border around the floor.
>
> **[1:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=117)** And I'm going to duplicate it just by using Command D or Control D on the keyboard.
>
> **[2:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=122)** And just move that off to one side.
>
> **[2:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=125)** I may even select this object and vertex snap it into place.
>
> **[2:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=129)** Do check out the fundamentals course on Unity Certification here at LinkedIn Learning to learn more about vertex snapping.
>
> **[2:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=137)** But that just means holding down the V key on the keyboard and dragging corner point to corner point to line up these objects.
>
> **[2:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=144)** Now, for this object here, this floor piece, the second one that I've duplicated, I want to apply a checker pattern across its surface.
>
> **[2:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=154)** To do that, I'm going to assign it a completely new material.
>
> **[2:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=158)** Now, I could create a material from scratch by default by moving down to the project panel.
>
> **[2:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=164)** Right clicking, choosing create, and then selecting material from the list.
>
> **[2:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=169)** But I'm not going to do that.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=171)** I'm going to have Unity create a material for me.
>
> **[2:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=174)** And that's really easy to do.
>
> **[2:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=176)** I just need to take the texture file, the image file itself that we just imported and just drag and drop that onto the surface and release your mouse.
>
> **[3:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=184)** When you do that, you'll notice that the checker pattern is applied across a surface.
>
> **[3:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=189)** I can see it here in the viewport.
>
> **[3:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=191)** And the material that Unity automatically created is down here in the materials folder.
>
> **[3:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=197)** So, I can just double click the materials folder.
>
> **[3:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=200)** And there we have it.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=201)** An automatically created material.
>
> **[3:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=203)** Unity has gone up in the set the Alberto slot for us to link to the texture that we imported.
>
> **[3:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=210)** So that's a really quick way to generate a material.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=213)** I'm going to change some properties for this material.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=217)** In fact, here, I'm going to grab, make sure the metallic slider is moved all the way to the left.
>
> **[3:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=222)** Grab the smoothness.
>
> **[3:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=223)** Move that all the way to the left too.
>
> **[3:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=225)** So, this is really not a shiny object at all.
>
> **[3:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=230)** I can see that my checker pattern is now applied to this surface.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=234)** But it's not repeating.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=236)** What happens if I want to have more tiles and more checker patterns?
>
> **[4:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=240)** Well, guess what?
>
> **[4:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=241)** You don't need to create a new texture file.
>
> **[4:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=244)** So, I don't need to go back to this texture file and begin to add more rows and columns.
>
> **[4:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=249)** We don't need to do all that work at all.
>
> **[4:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=252)** Instead, make sure the material is selected.
>
> **[4:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=255)** And from the inspector here, I can move down to this section that says tiling.
>
> **[4:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=261)** Now be careful that you select the right one, because of the tiling option here.
>
> **[4:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=266)** And there's a tiling option down here under the secondary maps category.
>
> **[4:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=272)** I don't want to choose the secondary maps category one.
>
> **[4:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=275)** I want the top one here, tiling, which is currently set to one by one.
>
> **[4:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=281)** Meaning that the texture is using and being pasted across only once.
>
> **[4:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=287)** I can change the X and Y values to increase the number of repetitions in each of those dimensions.
>
> **[4:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=293)** So for X, for example, I'm going to change that to, well let's say a value of four.
>
> **[4:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=299)** And you can see that in choosing four, it is changing horizontally the number of repeats that we have.
>
> **[5:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=305)** And I can move to Y and choose that to four two.
>
> **[5:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=308)** And now, we have an eight by eight chess board like floor by simply taking the same texture and repeating it across the surface.
>
> **[5:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=318)** We also have the offset properties that allow us to slide a texture along to different areas, if I want to do that.
>
> **[5:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=323)** And the really interesting thing about this property is that you can even animate it from script to create the illusion of moving surfaces such as a sky, floating past or water floating beneath us.
>
> **[5:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=335)** But I'm going to change these values back to zero zero.
>
> **[5:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=338)** And there we have it, a really simple way in which you can reuse smaller textures by repeating them across larger surfaces.
>
> **[5:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/tiling-materials?u=76281980&t=347)** This is a critical skill, especially, when you're creating simulations, visualizations such as architectural visualizations and video games, where you're creating expansive environments, where your textures and your materials will need to be stretched to their maximum in order to give you the best results possible.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1), snap (1)
> **UI Navigation:** drag and drop (2), select the (2)
> **Analogies:** for example (2), such as (2)
> **Definitions:** is a  (3)
> **Exercise Files:** exercise files (2)
> **Code Keywords:** let (1)
> **Env Vars:** png (1)
> **Cross-References:** go back to (1)


### 2. Lighting

#### Standard lights
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=0)** - [Illustrator] In this chapter, we're going to consider a critically important topic in Unity, generally, not just the HD Render Pipeline or any pipeline for that matter.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=11)** It's the topic of lighting.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=13)** No matter which kind of scene your building lighting is really important for whatever visual style you are aiming for.
>
> **[0:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=22)** To demonstrate the way lighting works here, inside Unity in the HD Render Pipeline, I've created a new project which I've adapted slightly.
>
> **[0:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=33)** You can find this project in the exercise files in the light box folder.
>
> **[0:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=39)** This project has a scene inside it called main scene.
>
> **[0:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=43)** It's known as the Cornell box.
>
> **[0:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=46)** It's room with some colored walls and it demonstrates easily how light can bounce around and illuminate a scene.
>
> **[0:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=55)** If this is the first time you're opening this scene it may look something like this.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=61)** Depending on your settings, you may not see this dark box here.
>
> **[1:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=66)** Instead, the lighting may be deactivated by toggling the lighting icon and you can actually see the scene minus all of the lighting.
>
> **[1:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=76)** You may also see or not see the gizmos the camera, for example, on this cube, inside the viewport and you can toggle their visibility on and off using the gizmos icon.
>
> **[1:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=88)** I'm going to leave these active because they're useful when we're working with lights.
>
> **[1:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=94)** In addition to that, you'll notice inside the hierarchy panel, we have some pretty basic objects here.
>
> **[1:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=101)** We have a scene camera.
>
> **[1:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=103)** We have two volume objects here which we're going to be exploring later in this course.
>
> **[1:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=110)** And we also have the light box itself which consists of all of the meshes here.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=116)** That includes the cube at the center and all of these walls and this entire scene has been saved inside main scene here.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=124)** So you can easily open that or save that scene to view these changes.
>
> **[2:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=129)** This is a scene minus lighting.
>
> **[2:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=132)** You'll notice inside the hierarchy panel that we don't have any lights active in the scene.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=138)** That's why when we enable lighting we don't see anything at all, we just see darkness because there are no lights.
>
> **[2:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=146)** Let's take a look at some of the basic light types that Unity offers.
>
> **[2:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=149)** Let's see how to access them and how to add them to the scene, to begin to add some illumination.
>
> **[2:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=156)** Notice that I've deliberately removed all lighting from the scene because I want to build up a scene from scratch with lighting so you can see how lighting works and how we can improve upon the basics.
>
> **[2:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=169)** Let's start by adding some basic light types.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=171)** To do this, I'm going to move to the menu here and choose game object light.
>
> **[2:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=177)** Now under the light menu, we've got a range of different lights that we can add to the scene.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=182)** Not all of these objects are strictly speaking lights.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=186)** For example, we have the planner reflection probe the reflection probe, the light probe group.
>
> **[3:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=191)** These bottom three are related to lights but not lights themselves.
>
> **[3:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=197)** The key light types of these top three or four objects here.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=201)** Let's take a look at the directional light.
>
> **[3:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=204)** I'm going to click to select that to, add that to the scene and bring that into view here.
>
> **[3:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=211)** The directional light consists fundamentally of two things.
>
> **[3:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=215)** I can position the light wherever I want within the scene but its position is actually irrelevant to the light itself.
>
> **[3:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=221)** A directional light just represents a massive light source infinitely far away casting light in a particular direction.
>
> **[3:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=230)** They're really great for creating sun or moon or other natural light sources.
>
> **[3:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=235)** We're not really seeing the implications and the effects of that light, but that's simply because the brightness and the intensity haven't been tuned yet.
>
> **[4:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=244)** I'm going to make sure the light is selected here and then move over to the panel here on this side to take a look at the settings.
>
> **[4:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=253)** We have the emission section that controls the illumination being cast from this light.
>
> **[4:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=259)** Right now, the intensity is set to 3.14 in sums of Lux.
>
> **[4:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=262)** I'm going to change that to be a much larger value the unit is okay, but I'm going to change the value here to increase in intensity.
>
> **[4:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=270)** And as I start to do that, as I start to crank up that intensity, notice is getting here to about let's say 180 and we can begin to see illumination here inside the scene.
>
> **[4:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=282)** It's pretty faint but we can easily continue to increase the intensity.
>
> **[4:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=287)** I'm going to set this to a value of 1,200 and we can begin to see the effects that is having here.
>
> **[4:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=294)** The illumination being cast into the scene.
>
> **[4:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=297)** I can also rotate the light to control the direction in which this intensity is happening.
>
> **[5:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=303)** And if I rotate around the other side you can see that here the scene is representing the direction from which this light is coming here.
>
> **[5:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=310)** Now we can also do things like move to the shadows field and enable the shadow map option to begin to cast shadows.
>
> **[5:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=317)** Notice that we're also getting shadows from this wall and remember the position of the light doesn't matter.
>
> **[5:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=322)** So that even if I bring this inside the cube we're still getting the shadows of this because the only thing that matters with a directional light is its direction and not its position.
>
> **[5:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=337)** So I can just move this out just to move that out of the way, like so, looks pretty good.
>
> **[5:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=343)** So here we have some interesting properties for the directional light.
>
> **[5:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=346)** I can also move to the emissions field and to the color settings and tweak the color of the light if I want to some really bizarre shades but I'm not going to do that.
>
> **[5:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=358)** I'm going to select the directional lights right click and delete it to take a look at some of the other light types that we have.
>
> **[6:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=366)** Now, in deleting the directional light, the illumination has reset itself back to darkness since the light has been removed.
>
> **[6:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=373)** I'm going to add a new light by choosing game object, light.
>
> **[6:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=377)** And this time let's take a look at the points light.
>
> **[6:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=380)** I'm going to select the point light here and bring that into the scene.
>
> **[6:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=384)** Now with the point light two properties are critically important.
>
> **[6:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=389)** The position of the light and then this surrounding sphere that allows us to control the range of the light.
>
> **[6:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=396)** And point lights are really great for simulating artificial light sources things like lamps, ceiling lights, and wall lights.
>
> **[6:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=405)** So I'm going to bring this inside our room here and for this light, I'm going to make sure it's selected.
>
> **[6:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=413)** And I'm going to move to the intensity fields here.
>
> **[6:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=416)** Now with this light, we have a range of different units that we can use.
>
> **[7:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=421)** I'm going to be using EV 100 and that simply just allows me to crank up the value easily with relatively low numbers to increase the brightness of this light here.
>
> **[7:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=431)** We can already begin to see the effects that the point light is having.
>
> **[7:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=435)** We can also see how much its position within the scene matters.
>
> **[7:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=441)** So I can bring it over to this side, looking good, bring it over to that side, looking good.
>
> **[7:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=447)** Can change the intensity slider here, that's perfect.
>
> **[7:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=451)** And also here in the shadows field I can enable shadows and you can see that the shadows are being applied to this object you can see them here from the floor.
>
> **[7:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=465)** Great. So we've now applied some shadows to this objects in the game.
>
> **[7:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=468)** We can change things around and you'll see the shadows updating.
>
> **[7:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=472)** I'm going to delete the point light here, going to add the third and final light type.
>
> **[7:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=478)** And that's going to be the spotlight.
>
> **[8:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=481)** So I'm going to choose game object, light, and then select spotlight.
>
> **[8:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=487)** Now the spotlight has different properties.
>
> **[8:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=490)** One, it has a position.
>
> **[8:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=493)** It has a direction.
>
> **[8:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=494)** So I can also change the rotation.
>
> **[8:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=497)** And it also has this cone of influence that allows us to control the effect of the spotlight within this cone.
>
> **[8:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=505)** So I'm going to position this to the front of our Cornell box and raise that up inside the viewport here.
>
> **[8:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=513)** Again, move to the emission section here inside the inspector.
>
> **[8:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=516)** I'm going to change the values to EV 100 and then increase the intensity slider so we can begin to see the effect of the spotlight here inside the scene.
>
> **[8:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=528)** And just bring that up into view.
>
> **[8:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=530)** I might rotate that a little bit more and rotate it in this direction here and also increase the cone just by clicking on these handles to expand them.
>
> **[9:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=540)** You can also tweak the outer cone slider here inside the viewport.
>
> **[9:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=547)** So I can also increase the inner cone here the most intense area and then the outer cone being the distance over which the light attenuates from full intensity to nothing at all.
>
> **[9:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=560)** I may also increase the radius field and again, that allows us to choose how close to the light the illumination is being cast from the size of the light source itself.
>
> **[9:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=572)** So I'm just going to give that some volume here to something looking kind of like this.
>
> **[9:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=578)** And that's looking actually pretty nice.
>
> **[9:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=579)** So you can see the effect of the spotlight here.
>
> **[9:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=584)** Now, if you have studied lighting carefully, you may notice in our model, in this scene here that there are some important problems.
>
> **[9:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=595)** Take for example this spotlight casting illumination on this cube here inside of this room.
>
> **[10:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=603)** You'll notice that outside of this cone shape we're getting no illumination at all.
>
> **[10:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=610)** The entire scene is transitioning from fully illuminated from within the cone to completely black outside.
>
> **[10:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=619)** This scene is not accounting for indirect illumination.
>
> **[10:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=624)** That is the light that is emitted from the light source and continues to bounce around to illuminate other areas not directly in the way of the light.
>
> **[10:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/standard-lights?u=76281980&t=634)** We'll see in a later movie how we can add the indirect illumination to our scene, but next up, we're going to take a look at area lights.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), delete (2), for. (1), this, (1)
> **Analogies:** for example (3), kind of like (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** select the (2), toggle (1)
> **Definitions:** known as (1), is a  (1)
> **Versions:** 3.14 (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)

#### Area lights
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=1)** - In the preceding movie, we saw three core light types.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=5)** These are the directional light for things like the sun and the moon.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=9)** We also saw the point light for artificial lights like light bulbs and wall lamps, and ceiling lamps.
>
> **[0:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=15)** And we also saw the spotlight, which is well for spotlights.
>
> **[0:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=20)** But in this video, we're going to take a look at a more sophisticated type of light and that is the area light.
>
> **[0:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=26)** Let me show you how to set that up.
>
> **[0:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=28)** I'm going to move to the menu here choose game object light, and then select area light to bring that into the scene.
>
> **[0:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=35)** At first glance, it looks pretty similar to the point light.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=40)** We can see a point light icon, and we can also see a surrounding sphere indicating the range of the light but the area light is different.
>
> **[0:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=50)** It not only has a position and a direction and range all of which we've seen before but the area light also has a size.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=61)** It has a dimension.
>
> **[1:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=62)** We can specify the shape and the size of the area light.
>
> **[1:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=67)** If you check out the inspector panel you can see from the shape section I can specify the kind of shape that the area light is.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=77)** And then I can also use the size X and Y fields, to control the dimensions of that.
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=83)** I can zoom in closer to the light here and by the lights you can check out the handles that allow me to click and drag to change the size of the area light.
>
> **[1:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=97)** Now, right now, I don't see very much in a game that's just because the intensity, I can move to the inspector here, to the emission field and change the values of again to EV100 and then click on the intensity to increase that.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=114)** And as I continue to do so, and in my case getting to about 20, I can begin to see the illumination of the area light inside the scene.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=124)** I'm going to raise that up inside the scene and maybe bring that closer to the center of the view here, somewhere around here I can begin to tweak the size of the area light something kind of like this, is looking pretty good.
>
> **[2:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=140)** I might tweak the range a bit more here to increasingly affect the area I'm going to be affecting here.
>
> **[2:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=149)** So that's looking pretty good.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=151)** You'll notice that as I begin to move the light around we still have the same problem that we had before with all the other lights we've seen so far including the point the directional and the spotlight, and that as soon as the illumination from the light moves away from a particular face on this cube mesh it doesn't just begin to fade or gradiate from illuminated to darkness.
>
> **[2:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=179)** It actually turns completely black and that's completely unrealistic because this is not accounting for indirect illumination.
>
> **[3:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=188)** In the next movie we'll see how to solve that problem, not just for the area light, but for all the lights in the scene.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=195)** I'm going to move this back to the front of the object here, but front of the weld can see the illumination here on this object.
>
> **[3:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=202)** I can move to the shadows panel and enable some shadows if I want.
>
> **[3:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=206)** The great thing about the area light is that pretty quickly it gives you some nice, soft looking shadows as opposed to bold, dark hard edged shadows.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=217)** And that's great.
>
> **[3:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=219)** So here we've seen an example of the area light in action.
>
> **[3:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=223)** One thing to be careful of with the area light is that in terms of its computational complexity, it's super expensive.
>
> **[3:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=232)** You don't want too many area lights in a similar place in the scene.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=236)** You don't want them cluster together in many areas of the scene because that could pose some serious performance problems.
>
> **[4:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=244)** And I'm guessing that you don't want that.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/area-lights?u=76281980&t=247)** So area lights, they give you great results but do use them sparingly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), continue (1), raise (1), this, (1), super (1)
> **Analogies:** similar to (1), kind of like (1)
> **Env Vars:** ev100 (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Warnings:** be careful (1)
> **Speakers:** - in (1)

#### Lightmapping: Getting started
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=0)** - [Instructor] Over the previous two movies, we've seen Unity's core lighting types, the directional light, the point light the spotlight and the area light.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=9)** So four critical types, all of them are pretty impressive stuff, they can give you lighting in a scene really quickly but all of them suffer from a key problem.
>
> **[0:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=18)** They don't account for bounced lighting, that is light that bounces around the scene, we simply get illuminated areas and dark areas.
>
> **[0:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=27)** And in this movie, we're going to solve that by using Unity's lighting system in particular we're going to be using light mapping, I'm going to show you how to set that up.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=36)** The first thing that you want to do here is to select all of the geometry in your world that doesn't move.
>
> **[0:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=44)** So if you're building an architectural visualization, that is pretty much going to be everything including the walls, the floors, the ceiling because all of this stuff is stationary, it doesn't move while your game or your visualization is taking place.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=61)** This is going to deactivate the lighting just so that I can see the room that we have here.
>
> **[1:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=65)** So I'm going to make sure that I select the light box object, now, in this case, it's already marked as static, you're going to want to Mark all of these non-movement pieces as static and the way you do that is you put a tick in that static check box.
>
> **[1:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=80)** It will ask you, do you also want to change the children?
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=83)** I'm going to say yes, I do.
>
> **[1:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=85)** Now in this case, I've just deactivated it back to how it was and how it probably looks in your case but I'm just going to activate the static again, just choose yes, change children, make sure this is on for the root object and for all of the children.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=100)** Every single element in your world, every single architectural element, rocks, trees and other kinds of prompts and scenery items too, you want to make sure they're all labeled as static.
>
> **[1:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=113)** That is step number one.
>
> **[1:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=115)** The next step then is to go to the lighting tab and if you don't see the lighting tab here inside the inspector, you can easily display the lighting tab by choosing window and then selecting rendering and then choosing lighting, it may initially appear as a free floating window but you can just talk that over here, next to the inspector.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=138)** When you move to the lighting tab, be sure that you've selected the scene option here, that this is active so that we can see the properties for light mapping.
>
> **[2:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=149)** By default, they're all going to be grayed out and you can't change them.
>
> **[2:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=153)** The way you can access the settings is by generating new lighting settings.
>
> **[2:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=158)** So you need to hit that button here that says new lighting settings.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=162)** You may notice a small change inside the viewport.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=166)** It will only be a minor change but a change perhaps nonetheless.
>
> **[2:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=170)** The next I'm going to do is I'm going to activate the lighting settings, so I've activated those inside the scene and unscene has gone back to black because we don't have any lightings inside scene.
>
> **[2:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=179)** Notice that here inside the project panel, Unity has generated a new lighting settings asset.
>
> **[3:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=187)** And I know that it's related to the lighting settings because it ends with the extension of .lighting and it's automatically being plugged into this slot here.
>
> **[3:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=197)** Now new lighting settings is not terribly descriptive on its own, so I'm going to get some organization into here by renaming that asset.
>
> **[3:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=206)** I'm going to move to the project panel and right click and simply choose a rename from the menu and I'm going to call this light box settings, press Enter on the keyboard, notice Unity is smart enough to detect the name change and it also changes up here.
>
> **[3:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=224)** And in creating this asset, we now get access to this whole range of settings which are all critically important for creating indirect elimination as we will see shortly.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=234)** But of course the next thing we need to do to actually get indirect illumination into our scene is add a light itself.
>
> **[4:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=242)** In this instance, I'm going to be adding a point light to the scene then to choose game object, light and then select point light and bring that into the scene.
>
> **[4:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=255)** Now, before we can start worrying about indirect illumination and bounced illumination, we need to think about our direct illumination because we certainly don't see that in the scene.
>
> **[4:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=264)** And we've seen that before, we know that the reason is because of the intensity of this light.
>
> **[4:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=268)** So with the light selected here in the hierarchy panel, I'm going to jump back to the object inspector and move to the emission section here, where we can take a look at the intensity field to control the brightness of this light, to do that I'm going to switch from lumen to Evie 100 and select, well, let's try 20.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=288)** You can see the result that 20 is having here.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=291)** Position this into the scene and I think 20 is perhaps a little bit too bright, I'm going to change that down to about 14, maybe even a bit more than that, something kind of like this, Just to give us some initial illumination.
>
> **[5:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=308)** Now you can see if I move the light just over here, that again, we go back to this scenario of only getting the direct illumination.
>
> **[5:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=317)** So, to fix this problem, I want to select the point light inside the scene and moved to the inspector, for the general section under the light options we have mode and it's by default set to real time, This means that the lighting is going to be calculated on the fly by Unity, which is incredibly expensive but I'm going to change this, from real-time to mixed, which is going to calculate the direct illumination in real time.
>
> **[5:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=346)** But the indirect illumination, which we don't see yet, is going to be precalculated by Unity ahead of time.
>
> **[5:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=354)** But of course we don't see the indirect illumination and that's because we need to jump back to the lighting tab here.
>
> **[6:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=361)** I'm going to move to the lighting tab and before I go ahead and calculate the indirect illumination, I want to visit the section here that says light map resolution.
>
> **[6:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=371)** This controls the quality of our lighting and basically the higher this number, the better quality our lighting is going to be but the longer it's going to take for Unity to calculate.
>
> **[6:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=384)** Now depending on what you set this, it's going to radically change the calculation time considerably.
>
> **[6:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=391)** So value is like 40 and even higher or often way too higher, this could end up with a calculation time of hours and perhaps for really large environments, maybe even days.
>
> **[6:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=405)** So I'm going to change this setting from 40 to six and moved down to the bottom, to the bottom that says generate lighting, I'm going to click that and Unity we'll think about that for a while to calculate the illumination but check out here inside the view port to see what happens.
>
> **[7:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=424)** Notice what happened here, we've changed the appearance of this view, you'll notice that we get not only the direct illumination from the point light but with this area here, previously it was completely black but now we're seeing something quite different, in fact, if I scroll in a bit further, you can see that the lighting that has hit this red wall, has bounced off of it, to hit the side of this cube.
>
> **[7:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=453)** And this cube is tinted slightly red where it's inheriting the illumination from this wall.
>
> **[7:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=460)** If I go to the other side and you look carefully here, you'll see, we have a similar thing, the illumination that has hit this wall has bounced from it to hit this.
>
> **[7:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=469)** And we've picked up some of the blue color here.
>
> **[7:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=474)** Now I can make the indirect illumination even stronger if I want, by moving back to the inspector and moving to the indirect multiplier slide, that is selecting the point light, moving to the indirect multiplier and tweaking this value, so I could choose 1.4 and make the indirect illumination stronger.
>
> **[8:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=495)** We don't see an immediate result and that's because I need to go back to the lighting tab and choose generate a gain, to see the change.
>
> **[8:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=505)** But in calculating that change, you can already begin to see that things here are slightly brighter and the same thing on the other side too.
>
> **[8:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=514)** Now it's quite tedious when I make changes to the light and then I have to switch back to the lighting tab and choose generate, which is why we have this box on the left hand side that says auto-generate, which I can enable and it will automatically click the generate button for me every time it detects that I've made a change to the lighting inside the scene.
>
> **[8:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=538)** So if I switch back to the inspector and I grab my point light and then I change the indirect multiplier to say three, it is going to recalculate the illumination for me here to get those settings and to get that bounce lighting in the scene.
>
> **[9:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=552)** And now things are looking quite nice here.
>
> **[9:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=555)** I'm going to enable shadows as well, to get the shadows inside this sene, looking pretty good and I might reposition the light just a little bit, you can see the change in the shadows and the indirect illumination and everything updating here.
>
> **[9:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=569)** So that's looking pretty nice, when I've got a situation where we can add a light and it's not just a point light but any one of the lights we've seen already, we can add them to a scene and have the indirect elimination calculated automatically.
>
> **[9:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=584)** In the case of this scene because we set the resolution pretty low and we're only dealing here with a few objects, the lighting is being calculated pretty quickly.
>
> **[9:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-getting-started?u=76281980&t=596)** But I can tell you this, if you have a lot more lights and a much bigger scene, your calculation times will be significantly longer, so do take care when creating the lighting for your scenes.

> [!info]- Semantic Content
>
> **Code Keywords:** static (5), this, (4), switch (3), case, (2), default, (1)
> **CLI Commands:** make (6)
> **UI Navigation:** select the (2), go to (2)
> **Cross-References:** go back to (2)
> **Versions:** 1.4 (1)
> **Definitions:** means that (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### More lightmapping
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=0)** - [Instructor] This movie continues from the previous, and we're going to take a look at some more Lightmapping Settings.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=6)** In the previous movie, we saw that lightmapping can help us calculate the indirect illumination here inside the scene.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=13)** There's a lot more that we can do with it as it turns out.
>
> **[0:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=17)** To start, I'm going to go back to the Lighting tab so that I can see all the lighting settings that I created previously.
>
> **[0:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=26)** Now, in addition to the settings that we've already used, for example, the Lightmap Resolution to control the quality of the illumination.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=36)** We can tweak some other settings too.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=38)** For example, check out the Baked Lightmaps tab.
>
> **[0:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=42)** Now, when I select the Baked Lightmaps tab, you'll see a small texture here inside the viewport.
>
> **[0:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=50)** You'll see that its size is set to 256 by 256.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=54)** And actually down the bottom here in the inspector, if you still have that available, you can see that it was using the Lightmap settings here to generate a texture.
>
> **[1:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=66)** And this texture, no one has the lightmap is projected onto the surfaces of the scene here.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=72)** In addition to the materials that we've given them to simulate the lighting while our game or our visualization is running.
>
> **[1:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=80)** So this pixel data here is the data that was generated when we hit the Generate Lighting button, and these pixels are being pasted onto the surfaces of our scene.
>
> **[1:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=92)** Every time we regenerate the lighting, a new one of these images is being created.
>
> **[1:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=98)** Now, depending on the surface area of your scene, the more surfaces you have, the more pixels it's going to need to hold all of that data.
>
> **[1:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=107)** So the size of this texture is related to the surface area of your scene.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=114)** I'm going to go back to the Scene tab here.
>
> **[1:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=117)** Now we can improve the quality of the lighting further if we want to by changing the Lightmap Resolution.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=123)** We can also use the Filtering and change that from Auto to Advanced that gives us control over the compression of the texture.
>
> **[2:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=134)** Now I'm going to put that back to Auto because in most cases, those settings work pretty well.
>
> **[2:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=141)** The other setting you can change is the Bounces setting which is specified as 2.
>
> **[2:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=146)** This means that during the generation process up to 2, light bounces are going to be allowed inside this scene.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=155)** So the light is cast from this light here.
>
> **[2:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=158)** It hits the wall, it bounces from the wall.
>
> **[2:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=160)** And that's the first bounce here.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=162)** It's going to hit another surface.
>
> **[2:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=164)** And that's going to be the second one.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=166)** So up to 2 bounces are allowed.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=168)** We can increase it if we want to.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=171)** But in most cases, 2 should work absolutely fine.
>
> **[2:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=176)** Now, depending on whether you're creating interior or exterior scenes, you may want to change these values between the Direct and the Indirect, and the Environment Samples.
>
> **[3:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=187)** Generally, if you're creating outdoor scenes, then you'll want to increase the Environment Samples.
>
> **[3:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=193)** If you're creating indoor scenes where there's more corridors and winding spaces, then you may find you get better results by increasing the Indirect Samples, say from 512 to 1024.
>
> **[3:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=208)** One setting that I am going to be changing here, however, is the Ambient Occlusion settings.
>
> **[3:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=214)** Ambient Occlusion adds contact shadows to our scene, such as where the floors meet the walls.
>
> **[3:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=221)** For example, I'm going to zoom my view in at the meeting point between the green floor with the red wall.
>
> **[3:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=229)** And you can simply put a pretty sharp line here at the point where they meet.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=234)** Now, if I activate Ambient Occlusion and make sure that Auto Generate is activated so that as I changed that setting is going to recalculate, you'll see the difference it makes along this edge.
>
> **[4:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=246)** So I'm going to activate Ambient Occlusion.
>
> **[4:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=248)** And straightaway you can see this darkening appear because in these crevices, it's kind of harder for light to get in there so these crevices appear slightly darker.
>
> **[4:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=259)** Now I can tweak the Ambient Occlusion when I activate that checkbox, I get access to more settings.
>
> **[4:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=266)** For example, the Max Distance and the Indirect Contribution.
>
> **[4:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=271)** So by increasing that slider, I can increase the intensity of the effect making that darker.
>
> **[4:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=277)** And I think that, that is too dark.
>
> **[4:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=280)** So I'm going to go back to maybe 2, a setting of 2 looks pretty good here.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=288)** That looks pretty good.
>
> **[4:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=289)** But I can change the Max Distance.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=291)** This really controls how far out the darkening is going to come here.
>
> **[4:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=296)** And I'm going to leave that setting as 1 that looks pretty fine.
>
> **[5:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=300)** Zoom back out to view the light.
>
> **[5:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=302)** The other thing that we can control switching back to the Inspect tab and selecting the Light here is I can move to the Volumetrics field.
>
> **[5:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=311)** And make sure that Volumetrics is enabled.
>
> **[5:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=314)** When Volumetrics is enabled, we're going to get a slight fogging or thickness around the light.
>
> **[5:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=321)** By increasing the Multiplier, we can really begin to crank that value up and add some ambience to the scene.
>
> **[5:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=329)** For example, if I change the Multiplier from 1 and I increase that to something pretty high, you can see around the light here or where the light is that we're getting this kind of thickness that you can see inside the scene being cast from the illumination.
>
> **[5:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=346)** This is a pretty good value to add in dark, dusky scenes.
>
> **[5:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=351)** Perhaps if you're creating a horror game or some darker visualization with a thicker heavy environment, that's a pretty good setting to enable.
>
> **[5:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=359)** So we have some really interesting settings that we can tweak both of the direct elimination level and the indirect illumination to really enhance the indirect illumination for our scenes.
>
> **[6:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=372)** And this is now looking pretty good.
>
> **[6:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=373)** We have control over direct and indirect illumination.
>
> **[6:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=378)** At this point, there may be one burning question that you have.
>
> **[6:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=383)** I know it was a question.
>
> **[6:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=384)** I had when I very first learned this whole indirect illumination puzzle.
>
> **[6:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=389)** And it's this, to create the illumination for this scene with the cube at the center and the walls and the floors, we had to actively select these objects and mark them as static to indicate that these objects will never move.
>
> **[6:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=404)** But what happens if we have an object that does move?
>
> **[6:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=408)** For example, if I choose GameObject, 3D Object and then I select, for example, a Sphere and bring that into the scene.
>
> **[6:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=419)** We're going to increase the size of that sphere here.
>
> **[7:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=423)** Now this object, this sphere is not marked as static, meaning that potentially it can move.
>
> **[7:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=431)** It may not move, but potentially it can.
>
> **[7:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=434)** And when I take a look of the illumination on this sphere, you can see on this side, we're getting that whole problem again of direct illumination, contrasted with nothing.
>
> **[7:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=446)** So this whole lightmapping process applies to objects that don't move.
>
> **[7:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=452)** But objects that do move.
>
> **[7:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=454)** Well, they are exempt.
>
> **[7:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=456)** How can we get indirect illumination on these objects?
>
> **[7:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=460)** And we are going to see the answer to that particular puzzle in the next chapter of this course when we look at Light Probes.
>
> **[7:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/more-lightmapping?u=76281980&t=468)** I'm going to select the Sphere here and choose Delete to remove that from the scene and otherwise leave this rather splendid looking Cornell box just as it is.

> [!info]- Semantic Content
>
> **Analogies:** for example (7), such as (1)
> **Code Keywords:** static (2), this, (1), delete (1)
> **Cross-References:** go back to (3), in the next (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** select the (2), checkbox (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Reflections
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=0)** - [Narrator] If you want your scenes to feature reflections, then you'll need to use reflection probes.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=6)** These are pretty straightforward to set up.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=9)** To demonstrate this, I'm using the light box scene continued from the previous project.
>
> **[0:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=14)** This begins from the standard Cornell box where we've configured some lights in the scene, we have a cube at the center of a room.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=21)** But if you take a look at the different materials around the room, they're pretty samey.
>
> **[0:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=26)** There's no reflectivity in any of these materials.
>
> **[0:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=29)** Now, Unity does give you the ability to increase materials reflectivity pretty easily, you just need to do that by selecting, for example, the red material here.
>
> **[0:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=41)** And from the inspector, you'll see a range of different properties.
>
> **[0:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=44)** But the key ones to look at are metallic and smoothness.
>
> **[0:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=49)** And my setting for the smoothness is naught .4, yours should be there or roundabout there.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=54)** But you can increase the reflectivity by moving that slider to the right hand side to increase its reflectivity.
>
> **[1:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=62)** So here, it's pretty reflective.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=64)** If I wanted to make this a mirror, I would not only crank up the reflectivity to the top, but I could also increase his way up to be some kind of super metallic surface like this.
>
> **[1:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=75)** But you'll see that it's completely black in here, we're not getting any reflections.
>
> **[1:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=80)** Even when I take away the metallic component of the material, we're still not getting any reflectivity in here, the only thing that we can see is a pretty tiny point here, matching up to the light in the scene, but that is about it, we see no reflectivity at all.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=100)** To fix that, we'll need to use a light probe.
>
> **[1:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=101)** And here's how that works.
>
> **[1:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=104)** You want to move to the menu here and choose game object, light, and under the light group, you'll find two different types of reflection probes.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=114)** One is a planner reflection probe and this is really great if you have a really shiny floor, for example, that needs to reflect the environment above creating a kind of reflective watery surface.
>
> **[2:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=128)** But for most cases, you'll want to use the standard reflection probe, which is great for semi reflective materials that need to reflect the environment.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=138)** So I'm going to select reflection probe to add that to the scene.
>
> **[2:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=142)** Now when I do this, you'll see that it creates this kind of cube environment here.
>
> **[2:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=148)** And actually taking a look at the wall, you can begin to see a lot more reflectivity in here, you can even see some elements in here.
>
> **[2:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=156)** So that's looking much better.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=157)** I could even move this probe around, for example to here.
>
> **[2:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=161)** And when I do this, and I move the probe around, make sure that from the lighting tab, you have auto generate activated so we can see the instant results of these here.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=172)** You'll see inside the panel here that we can see some reflectivity going on, it's pretty bright in terms of the illumination for the preview here.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=182)** But I can just drag that light slider down to get a better result of what I can see inside the preview.
>
> **[3:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=189)** So we can begin to see exactly what this is doing, you'll see that this is beginning to capture the surrounding environment using a cube map, you can see here is the cube and then the surrounding walls, including the massive red wall that the probe is located next to.
>
> **[3:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=206)** I can move to this material here, you can see the smoothness is cranked up, I can increase that a bit further here, begin to see some of what is going on here.
>
> **[3:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=215)** Again, we're getting a change, but I can grab that reflection probe.
>
> **[3:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=219)** And as I begin to move that around, you can see what's happening here.
>
> **[3:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=225)** So the idea behind this reflection probe is I want to position this to a location where it's going to be affecting surrounding surfaces.
>
> **[3:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=235)** This box represents the surfaces in the scene that's going to be affected if they are reflective.
>
> **[4:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=244)** So I want to position this somewhere around the center of the room to indicate that the floors, the walls, the ceiling, and all of that stuff are going to be affected.
>
> **[4:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=254)** And I'm going to increase the size of the box by moving to the influence volume section.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=260)** And I can tweak the x, y and z fields just a little bit so that they contain the entirety of the room.
>
> **[4:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=268)** You can already see here on the wall what's beginning to happen.
>
> **[4:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=273)** Now the center of this box represents the camera in this scene.
>
> **[4:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=280)** Effectively what is happening is a snapshot of the environment, is being taken from the point of this object here.
>
> **[4:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=289)** So right now it's positioned just on the surface of the cube, as though there were a camera here, photographing the surrounding environment, which is why showing up here we've got this really bizarre view, almost as though the camera slightly penetrating the cube.
>
> **[5:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=306)** Now I'm going to increase the y value, you can see here that maybe it's still a little bit too short.
>
> **[5:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=312)** So I'm going to bring up the y value here.
>
> **[5:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=316)** But I want to change the snapshot area.
>
> **[5:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=319)** Right now the cameras kind of positioned here, and I want the reflection showing up in this wall here.
>
> **[5:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=326)** So I'm going to move down to the capture settings to where it says, capture position.
>
> **[5:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=332)** And next to capture position, we have this icon for moving the camera around.
>
> **[5:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=338)** I'm going to click on that icon, nothing initially appears to change.
>
> **[5:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=344)** But this time when I begin to move this Gizmo, I'm not changing the position of this object, but I'm changing the capture position here.
>
> **[5:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=354)** So I'm going to position the camera, the capturing camera, maybe somewhere around here.
>
> **[6:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=360)** And you can begin to see already that we're getting this showing up here now inside the wall.
>
> **[6:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=365)** So that's looking pretty good, just going to position it to about here.
>
> **[6:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=369)** And I'm going to make sure that having activated that, I'm also going to move to the reflection probe section.
>
> **[6:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=376)** And for use influence volume, I'm going to activate that, so that the camera is only capturing the area from within side this influence volume.
>
> **[6:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=386)** And now this is looking much better, you can already see the reflectivity showing up here.
>
> **[6:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=390)** And to show that this is part of the material, I'm going to move to the material here.
>
> **[6:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=397)** And as I change, for example, the metallic slider, you can still see in here, the reflectivity of that cube showing up.
>
> **[6:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=404)** So that's looking pretty good.
>
> **[6:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=406)** I can adjust the smoothness to kind of make that reflection a bit more diffuse to choose exactly how reflective I want it to be on that surface.
>
> **[6:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=416)** And that's looking pretty good here.
>
> **[6:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=418)** What I'm going to do next, having then set this, is I can also control the intensity of this reflection here.
>
> **[7:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=425)** So by going back to the reflection probe, and moving down to the capture settings here, there's a slider here further along the render settings, where I can control the multiplier for the effect.
>
> **[7:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=438)** Notice what happens when I begin to raise this, I'm going to change this to two, and you can see we're brightening and intensifying the clarity of those reflections.
>
> **[7:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=448)** I'm going to set that to a value of four to set it here.
>
> **[7:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=451)** Now already you can see what a difference that begins to make here with the reflectivity of this object.
>
> **[7:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=457)** You can check that out in the scene tab 2, to see how this is working here in the scene.
>
> **[7:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=462)** So by selecting the reflection probes, positioning to them to a location where they're going to be affecting all of the surfaces, and then positioning the capture position, you can effectively photograph different areas of your environment, capture that inside a map that you can see in the preview here.
>
> **[8:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=480)** And this cube map is then used on objects to add reflectivity to them.
>
> **[8:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=486)** You can also have multiple reflection probes scattered around the scene, and they'll be blended by the camera depending on where the camera is as the camera moves from one area to another.
>
> **[8:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/reflections?u=76281980&t=497)** In the world, looking at different objects and different probe regions we'll see slightly different reflections.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (5), super (1), this. (1), raise (1)
> **CLI Commands:** make (5), find (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (1), set up (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [narrator] (1)

#### Emissive lighting
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=0)** - [Instructor] In this video, we're going to check out emissive lighting, which allows us to use materials and objects combined to act like a light source.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=11)** They really impressive, they allow you to take a mesh for example to apply a material to it and have the entirety of its surface act like a light source.
>
> **[0:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=21)** To demonstrate this I've opened up the Cornell box scene that we've been working through in this chapter, which contains walls and ceilings of different colors and a cube at the center.
>
> **[0:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=31)** Now, the scene that I have in front of me here already has a point light located in at the center here, which is one of unity's standard light types.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=40)** But in this movie, I want to demonstrate emissive lighting, so I'm just going to deactivate the point light that we already have just by taking the tick out of that box to deactivate the point light.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=52)** If you have lighting auto-generate activated as I do from the lighting tab here, then this lighting in the scene will calculate or recalculate and then we'll go back to black because I've removed all the light sources.
>
> **[1:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=66)** Now let's add a new object that's going to act as a light source using emissive lighting.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=72)** To do that I'm going to create a new object actually before creating a new object, I'm going to avoid all the lighting in the scene here just by clicking this toggle icon so that I can see what the scene looks like without any lighting in it.
>
> **[1:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=87)** Next up, I'm going to create an object and it could be any object here, I'm going to go for a cylinder by choosing game object, 3D object, and then select cylinder and position this somewhere in the scene.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=100)** In my case, I'm going to position this just in front of the cube here.
>
> **[1:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=104)** I'm going to be using this cylinder as a new light source in the scene.
>
> **[1:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=110)** Now to do that, I'm going to move to my materials folder where I already have the materials that we're currently using for the walls, floor and the ceiling and I'm going to make a completely new material.
>
> **[2:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=121)** To do that I'm just going to hover my mouse in the project panel, right-click choose create and then select material from the list.
>
> **[2:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=130)** I'm going to call this matte light and then simply drag and drop the material onto the cylinder.
>
> **[2:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=139)** And the cylinder now has the light material attached to it.
>
> **[2:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=144)** Now having selected this material the next thing that I'm going to do for this cylinder here is I'm going to select the material that we've just created to take a look at its properties here inside the object inspector.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=157)** You can see it has a range of properties all of which we have seen before.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=162)** But if I scroll down just a bit further, we'll come to a section that says emission now to preview the results of the property tweaks we're going to make here, I'm going to switch lighting back on again it's still black because there's no light source yet.
>
> **[2:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=179)** Now having selected this emission section I'm going to activate the emission properties by enabling the tick box here that says use emission intensity.
>
> **[3:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=191)** The next thing we can do is we can control the color of the light that we want to create by selecting its value here, inside the color swatch.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=201)** Just going to click on the color swatch and from the color picker I get to pick the color of the light source.
>
> **[3:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=207)** I'm going to set this to white here and close the dialogue and I'm going to change our units here from nits to EV100, and I'm going to just crank up the brightness of this light here.
>
> **[3:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=222)** You can already see here inside the scene how this is looking in fact the higher I go here we begin to add brightness to this object.
>
> **[3:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=232)** I can even reduce the exposure weight if I want to make the illumination of this object more intense for the camera here, but I'm going to leave it down to, or at one, just for the moment.
>
> **[4:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=245)** The next thing that I want to make sure I activate is the property here that says baked emission.
>
> **[4:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=251)** This makes sure that the illumination cast from this object is going to feature in our lighting calculations here.
>
> **[4:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=259)** But of course nothing is showing up in our scene, and that's simply because the last critical ingredient is missing and we're going to add that right now.
>
> **[4:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=270)** To do that I'm going to select the cylinder object and you just need to make sure that the cylinder is enabled as static.
>
> **[4:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=277)** So I'm going to move to the top right-hand side to the checkbox here and activate static, lighting will already begin to calculate and you can see the difference.
>
> **[4:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=287)** This is now making in the scene, we have our light source.
>
> **[4:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=293)** I might select the material here and move down and change the exposure weight just a little bit to intensify the effect here, can grab the cylinder if I want to move it to a different location and the lighting will update to reflect that location.
>
> **[5:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=312)** Great, this is now an example of how we can take nearly any kind of mesh we could imagine of any kind of shape and apply an emissive material to it to give it illumination.
>
> **[5:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=325)** A really great feature of the emissive material here when I selected, is that notice for the emissive color we can select not only a bold color but we can also select image files themselves.
>
> **[5:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=341)** So for example, I could select this default particle material or some other types of materials.
>
> **[5:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=347)** And in the case of materials the black color means no emission and the white color means completely emissive.
>
> **[5:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=355)** So we have all of these different properties we can tweak to add emissive lighting to our meshes.
>
> **[6:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=362)** Emissive lighting is particularly great for creating lighting for example the glowing windows of a house at night, or the control consoles on a spaceship.
>
> **[6:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/emissive-lighting?u=76281980&t=372)** There's no end to where you could apply emissive materials, so make them your friend for getting great looking results.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (3), toggle (1), right-click (1), scroll down (1), click on (1)
> **CLI Commands:** make (6)
> **Code Keywords:** static (2), let (1), case, (1), switch (1)
> **Analogies:** for example (3), imagine (1)
> **Env Vars:** ev100 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Lighting and Performance

#### Shadows and quality
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=1)** - [Narrator] In this chapter of the course, we're going to focus on a range of different light settings, additional light settings that can help us optimize the rendering of our scenes and improve the running of our projects.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=13)** To demonstrate the first set of settings that I want to review are the shadow settings that apply to pretty much any light type you can create inside unity.
>
> **[0:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=22)** To take a look at these, I've opened up this project here that you can find inside the course exercise files.
>
> **[0:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=29)** And inside this scene, you will see the familiar lightbox, the Cornell box that we've been working with here.
>
> **[0:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=36)** There really isn't very much to this scene apart from walls, floor, cube at the center.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=40)** And most importantly, we have this point light that has been added to the scene.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=48)** Now to update the lighting settings automatically, I'm going to make sure that I go to the lighting tab, moved down to the bottom and activate the auto-generate checkbox.
>
> **[0:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=58)** If you're not familiar with the lighting tab, do check out the preceding chapter of this calls, where we cover this in a bit more detail, we're going to be reviewing some of these light mapping settings shortly.
>
> **[1:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=68)** But here I want to focus on shadows particularly.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=70)** When I select the point light inside the scene here, you can check out the shadows section.
>
> **[1:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=76)** Now here the shadows are enabled, they have this tick box to say they're enabled.
>
> **[1:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=80)** And you can also check out inside the scene here that we have some shadows being cast around the floor area.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=89)** Of course, if I move this light to a different location for example, if I bring this light forward, you will see that the shadows update the lighting rebates.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=100)** It might take a little while for it to do that, but when it's done that the shadows will update.
>
> **[1:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=105)** And you can see inside the scene, we have the shadows here.
>
> **[1:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=109)** But you'll see that from the shadows rollout.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=111)** There are actually quite a few more settings that I want to review and explain how they work.
>
> **[1:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=117)** So you can set up shadows to work the best they can for your projects.
>
> **[2:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=122)** The first setting here that you'll notice is the update mode.
>
> **[2:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=126)** And by default, for every light this will be set to every frame.
>
> **[2:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=131)** This simply means that the shadows, their angle, their intensity are always going to be calculated by the light on every frame quite literally.
>
> **[2:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=141)** Now, this is a great option to select particularly if you're going to have objects moving around in the scene frequently.
>
> **[2:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=149)** But if you have objects that don't move around very much or infrequently, you might want to check out some of these other two settings.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=157)** We have the all enable option.
>
> **[2:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=159)** This will allow us to dramatically reduce the amount of times shadows calculated in our scene.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=165)** It will simply calculate the shadows whenever the light is activated.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=168)** That is when the on enable event happens.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=172)** Now, this is great if we are activating the light and you're turning it on and turning it off and you just want to activate and reactivate the shadows every time a light switches on and off, such as when somebody presses the light switch on a wall.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=186)** The other setting here on demand, simply means that when we run a particular functioning code, when we tell the light explicitly to update it will update.
>
> **[3:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=196)** And otherwise it will make no change.
>
> **[3:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=199)** This is quite useful if you have a particular very customized type of light.
>
> **[3:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=204)** In most cases, you'll want this option to be every frame to get the most accurate kinds of shadows for your scene.
>
> **[3:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=211)** The other setting we have is the resolution setting.
>
> **[3:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=214)** And again, by default it's sent to the custom value of 512 here.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=218)** This simply refers to the size in memory in pixels of an image file that's being used to shave the shadow information for this light.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=227)** So currently we have a square texture of 512 by 512 pixels.
>
> **[3:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=231)** And for this scenario, it looks okay.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=234)** If I wanted to improve the shadow quality, I can change this for example to ultra.
>
> **[4:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=240)** And when I do you check out the shadow here inside the scene, I'll change this to ultra, and you can see we get this super sharp edge to our shadow because now this shadow is using a ton of pixels to store its lighting information.
>
> **[4:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=255)** The lower we take this setting.
>
> **[4:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=257)** For example, if I take this pretty low, the lower we take it, the less accurate the shutter becomes and also the blurrier the edges.
>
> **[4:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=266)** Now take care because in some scenes having this kind of blurry gradiation inside your shadows for various kinds of aesthetics can really work quite nicely.
>
> **[4:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=277)** So sometimes you can have an advantage by setting these settings pretty low.
>
> **[4:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=281)** I'm going to set them back to custom here, to reconfigure back to the default.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=288)** So these are some major settings that we have for the shadows panel.
>
> **[4:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=292)** We also have the contact shadows option which we can enable.
>
> **[4:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=296)** This gives us a kind of ambient occlusion effect.
>
> **[5:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=300)** But be careful if your light has multiple scenes, there is only one light in the scene at any one time that these contact shadows can apply to.
>
> **[5:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=310)** Now, we're looking here at some shadows that are on the light object itself.
>
> **[5:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=315)** So these shadow settings are per light settings.
>
> **[5:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=318)** Meaning that you can set them to different values for different lights.
>
> **[5:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=321)** But if you want to tweak global settings to control shadows scene wide, then here's how you do that.
>
> **[5:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=327)** You need to access the render pipeline settings.
>
> **[5:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=331)** You can do that by choosing edit and then choosing project settings and then select product settings to display the project settings dialogue.
>
> **[5:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=340)** When you get access to the project settings dialogue, just go over here and check the graphics option.
>
> **[5:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=346)** And you'll see we've got a ton of different options here but way up at the top you will see the HD render pipeline asset.
>
> **[5:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=354)** I can just left-click that asset.
>
> **[5:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=356)** And here in signed the project panel right at the bottom I can just select the render pipeline asset to get access to all of its settings here.
>
> **[6:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=364)** And there are quite a few settings.
>
> **[6:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=365)** The settings that I want to access the shadow settings are under the lighting rollout.
>
> **[6:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=371)** So I can click on the lighting rollout to reveal these settings.
>
> **[6:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=375)** Slightly further down you will see shadows here so I can expand those settings to get access to these here.
>
> **[6:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=383)** You'll notice that there is the setting maximum shadows and it's currently set to 128.
>
> **[6:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=389)** That means that there can be up to, and not more than 128 shadows on the screen at once.
>
> **[6:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=396)** Which is actually a ton of shadows.
>
> **[6:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=398)** But if you have a scene with a lot of objects, it might not be enough.
>
> **[6:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=401)** In which case you can increase this.
>
> **[6:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=403)** But keep in mind that the higher you take this value the more computationally expensive your scene will be.
>
> **[6:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=410)** So you can significantly damage the performance of your games or visualizations by increasing this above 128.
>
> **[6:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=418)** So be very careful about doing that.
>
> **[7:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=422)** We then have some more global settings that we can apply.
>
> **[7:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=424)** For example, to directional lines to set those shadows in particular, I can change the default sizes for the shadow maps here, the maximum resolution that they can go to.
>
> **[7:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=436)** And these refer to the shadow map sizes that we saw on each of the lights but I'm going to leave these exactly how they are.
>
> **[7:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=444)** So these are some global parameter tweaks that you can apply to all the shadows in your scene.
>
> **[7:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=452)** By using this combination of these global parameters and the per light parameters, you have a lot of flexibility for how shadows work.
>
> **[7:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=460)** Of course, in an ideal world if you really don't shadows for a particular light at all, then just make sure that you switch them off and you don't use them.
>
> **[7:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/shadows-and-quality?u=76281980&t=470)** Only make sure this setting is enabled for lights when you rarely need those shadows because shadows are very, very expensive.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), default, (1), super (1), default. (1), this. (1)
> **UI Navigation:** go to (2), select the (2), checkbox (1), click on (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** means that (3), is a  (1), refers to (1)
> **Analogies:** for example (4), such as (1)
> **Warnings:** be careful (1), keep in mind (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)

#### Lightmapping settings
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=0)** - [Instructor] In the preceding chapter, we took a look at light baking otherwise known as lightmapping which lets us precalculate the lighting inside the scene.
>
> **[0:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=10)** It was pretty simple to set that up.
>
> **[0:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=12)** All we had to do was select objects in the scene make sure from the inspector that they're marked as static and also make sure that the light inside of the scene, for example this point light here is set to the mixed mode.
>
> **[0:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=27)** And then from the lighting tab we can either hit the generate lighting button to calculate the lighting on demand or we can activate the autogenerate checkbox for the lighting to automatically be recalculated every time a significant change happens.
>
> **[0:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=43)** In this movie I want to take a look in more depth.
>
> **[0:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=46)** At the settings we find here on this lighting panel because they are critical to the quality of your lightmaps.
>
> **[0:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=55)** For this Cornell box we have some pretty straightforward settings and it's easy to get this looking pretty good.
>
> **[1:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=62)** But for larger scenes you're going to need to be much more careful about what you set these parameters to.
>
> **[1:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=69)** So let's take a general look at these parameters.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=72)** I'm going to start with the lightmap resolution parameter.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=77)** You can see for this Cornell box that it set to a value of six and six means Texels per unit.
>
> **[1:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=84)** Of all the settings on this panel, this lightmap resolution is one of the global controls that's critical for the quality of your lightmaps.
>
> **[1:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=94)** It simply means that for Every texture pixel per unit that is per meter, there are going to be six pixels.
>
> **[1:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=103)** We can actually check out a real time visualization of this setting by moving to the scene view here moving to where it says shaded.
>
> **[1:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=112)** Clicking on the dropdown and under the baked global illumination section, I can actually choose quite a view a few of these here.
>
> **[2:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=120)** I am going to select, for example, the Alberto slot.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=124)** And when I do that inside the scene view, we can see not only the walls and the floor but I can also see this checker pattern superimposed onto the scene.
>
> **[2:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=137)** Now you don't need to worry about this checker pattern showing up to the player or to the viewer, it's simply for our reference.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=145)** But each and every one of these squares is a texture pixel that is being used by unity to save the lighting information for the scene.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=155)** So obviously the lower we take this setting, for example let's say I change this lightmap resolution from six to two, you can see that we're getting a much much larger checker pattern.
>
> **[2:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=169)** Take this down again to one and again massive again.
>
> **[2:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=173)** These are individual pixels.
>
> **[2:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=175)** So here I have significantly reduced the quality of our lightmaps.
>
> **[3:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=181)** Of course, if I take this up to a pretty high value these squares are going to become pretty tiny because more and more information is being used to calculate the lighting.
>
> **[3:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=191)** But I'm going to switch that back to six and you can see the kind of quality setting that we have here.
>
> **[3:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=199)** In fact, by using that quality setting, you can take a look down the bottom to see that unity has calculated and saved all of that lighting data in a texture that is only two, five six by two, five, six pixels.
>
> **[3:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=214)** I can even view the texture by moving to the bait lightmap tab and check out the preview that has been saved here.
>
> **[3:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=223)** You can see there are some pretty large black areas and this could be for two reasons.
>
> **[3:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=229)** Either the lighting in that area is incredibly dark or those pixels are simply not being utilized.
>
> **[3:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=237)** If they're not being utilized, that is kind of wasted space.
>
> **[4:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=241)** And it actually means that I can go back to my scene tab and increase the setting for the lightmap resolution let's say from six to eight to try to squeeze more detailed into that lightmap.
>
> **[4:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=254)** By increasing the resolution in this way, I do increase the baking time.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=258)** You can see it being calculated here.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=260)** And this time notice it had to increase the size of the shadow map and move back to the bait lighting tab.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=267)** And you can see that we're beginning to utilize more pixels though we have a larger texture this time.
>
> **[4:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=272)** I'm going to go back to the scene tab here and change that down to six, to restore back those settings.
>
> **[4:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=279)** Now sometimes when you're calculating lighting you might encounter artifacting.
>
> **[4:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=284)** That is you might have some really strange pixel quirks inside your lighting.
>
> **[4:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=290)** I'm going to go back to the standard shaded view here.
>
> **[4:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=294)** In this scene everything is looking pretty smooth and pretty nice, but in some scenes you might encounter some strange artifacting or pixilation and there are several different ways you can smooth those aberrations out depending on the cause.
>
> **[5:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=310)** But you can check out this section here for the direct, indirect and environment samples.
>
> **[5:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=317)** By default, you can see the direct samples have 32 pixels five, 12 and two, five, six samples.
>
> **[5:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=324)** Now these control the quality of lighting.
>
> **[5:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=328)** And depending on the kind of environment you are building up you may want to tweak these.
>
> **[5:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=334)** For example, in an interior environment, there's going to be quite a lot of light bouncing around different surfaces of the scene, walls, doors, and tables.
>
> **[5:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=345)** So in that case, it makes sense to increase the value of the indirect samples.
>
> **[5:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=351)** If you have an exterior scene, a large forest and terrain and that's being illuminated by natural lighting and lighting surrounding the scene, it makes sense to increase the environment samples perhaps from two, five, six to five, 12.
>
> **[6:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=366)** In addition to this, if you want to improve the realism of your scenes, you can increase the bounces from two to four.
>
> **[6:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=375)** But if you increase this on a value above two, the calculation time for your lightmapping will go up exponentially.
>
> **[6:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=384)** The other option you want to check out here is the compressed lightmaps option.
>
> **[6:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=389)** By default, this is activated, which means that the life map data is saved to an image file and that data is compressed.
>
> **[6:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=399)** But if you deactivate this it is going to save that data uncompressed.
>
> **[6:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=402)** It's going to mean that it takes up more storage space but you're going to get better looking lightmaps.
>
> **[6:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=407)** So you may want to deactivate that option if you're getting any strange artifacting show up here in your lightmaps.
>
> **[6:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=416)** Don't forget to increase the realism of your scene.
>
> **[6:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=419)** You'll probably want to activate ambient occlusion here as I have done here.
>
> **[7:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=424)** You can also move down to the indirect intensity.
>
> **[7:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=428)** If you don't feel you're getting enough brightness from the indirect elimination in your scene you can crank up that slider.
>
> **[7:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=435)** But be careful because this is a global control and not a per light control.
>
> **[7:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=441)** It will boost the indirect illumination for all of your lights.
>
> **[7:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=445)** And if the problem is only with one of them then it's going to affect everything.
>
> **[7:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=449)** So be careful about that.
>
> **[7:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=450)** If you have a problem with an individual light it's better to go to the inspector to select the light itself and to use the indirect multiplier setting instead.
>
> **[7:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=463)** So for the lightmapping settings make sure you do check out these core quality values 'cause they can make a big difference.
>
> **[7:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=471)** When your lighting becomes pretty heavy, it may be recommended to take the tick out of the autogenerate checkbox and just leave the generate lighting button activated so that you can update the lighting when the time is right for you.
>
> **[8:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=486)** That's a judgment call depending on how big your scene gets.
>
> **[8:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=490)** So there you have it, some overview of the lighting settings that you will find for lightmapping.
>
> **[8:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=496)** Take a look at those settings and try them out for yourself.
>
> **[8:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=500)** It's very important for good quality lighting to make sure that you do refine the settings.
>
> **[8:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/lightmapping-settings?u=76281980&t=506)** Sure it can take a while, but the results and the effort here can really pay off.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), default, (2), static (1), switch (1), case, (1)
> **CLI Commands:** make (5), find (2)
> **Definitions:** means that (3), is a  (2), known as (1)
> **UI Navigation:** checkbox (2), dropdown (1), go to (1), select the (1)
> **Analogies:** for example (4)
> **Cross-References:** go back to (3)
> **Best Practices:** don't forget (1), recommended (1)
> **Warnings:** be careful (2)

#### Light probes
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=0)** - [Instructor] One of the things that I promised to show you much earlier in this course was how we could get indirect illumination.
>
> **[0:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=8)** That is bounced lighting on objects that move.
>
> **[0:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=12)** If you take a look at the scene here, we have a pretty interesting Cornell box with a point light at the center.
>
> **[0:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=18)** And we're getting indirect illumination.
>
> **[0:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=20)** We can easily see that by, for example, checking out the side of this box.
>
> **[0:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=24)** And you can see we've got this kind of red illumination.
>
> **[0:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=28)** That's not because the side of this box is red, it's because the illumination from the light source is hitting the red wall and bouncing off of that wall to hit the side of the cube.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=40)** If I check out the other side here, we have a similar effect and you can see the blue here is reflecting the blue color of the wall.
>
> **[0:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=49)** So, we're getting some interesting bounced lighting.
>
> **[0:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=53)** But in this case, all of these objects are marked as static.
>
> **[0:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=56)** You can see from the inspector, they have the static option enabled.
>
> **[1:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=60)** Meaning that they never move.
>
> **[1:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=62)** But take a look at what happens when I add a moving object.
>
> **[1:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=66)** If I choose Game object, 3D object.
>
> **[1:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=69)** And then let's say I grab a sphere.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=72)** And I bring that into the scene.
>
> **[1:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=74)** And to make the effect more pronounced, I'm going to scale up that sphere.
>
> **[1:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=81)** Now, I can get some elimination on the sphere.
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=83)** You can see that the point light is illuminating the sphere.
>
> **[1:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=87)** But check out what's happening on these faces that are away from the light source.
>
> **[1:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=92)** At this point here, the light transitions from completely on to completely off.
>
> **[1:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=98)** Because none of the bounced illumination inside this scene is really affecting this sphere at all, because it's not marked as static.
>
> **[1:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=108)** So how can we fix that?
>
> **[1:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=110)** Unity's solution is to use a really clever object called light probes.
>
> **[1:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=116)** Now, before I use light probes, go on over to the lighting tab, and make sure that auto generate is activated so that as I add these light probes, this is going to take effect.
>
> **[2:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=128)** In addition to that, select your sphere.
>
> **[2:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=131)** And from the mesh renderer section, make sure you expand the probes here.
>
> **[2:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=136)** And make sure that light probes is set to blend probes and not off.
>
> **[2:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=142)** By default, it will be set to blend probes.
>
> **[2:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=144)** So this option will be activated.
>
> **[2:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=147)** The next thing that you'll want to do is to create the light probes themselves.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=150)** And do that is dead simple.
>
> **[2:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=152)** You just go to choose game object light.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=155)** And then move down here to the bottom where it says light probe group to add that to the scene.
>
> **[2:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=161)** So now I've added a light probe group.
>
> **[2:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=163)** You can see in the hierarchy panel, there we have light probe group.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=166)** I'm not even going to rename it.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=168)** I'm just going to leave it as it is.
>
> **[2:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=170)** And actually, if you check out the viewport, already when you look at the sphere, you can see that it's made a difference.
>
> **[2:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=178)** If I deactivate the light probe group, we're going to get that sphere go back to it's black and white transition.
>
> **[3:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=185)** And if I activate it, we're going to get some indirect illumination on that sphere.
>
> **[3:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=190)** So, that's pretty good.
>
> **[3:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=192)** But is that all there is to it?
>
> **[3:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=194)** Absolutely not.
>
> **[3:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=196)** We need to take a lot of care about how we position these probes inside the scene.
>
> **[3:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=202)** Each and every one of these yellow points is a probe.
>
> **[3:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=206)** And they are effectively light readings.
>
> **[3:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=209)** They're scanning the scene at the position of the probe, each one.
>
> **[3:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=213)** And it's recording what the level of light is inside the scene.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=218)** So, we want to position these strategically around the scene particularly in areas where our light might change or the light might bounce.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=227)** Now, I can adjust the individual probes themselves pretty easily.
>
> **[3:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=231)** I just select light probe group.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=234)** And from the inspector tab, under the light probe group here, I can click this button that says, Edit Light Probes.
>
> **[4:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=242)** So just hit that button.
>
> **[4:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=243)** And when you do that, you can select the individual probes just as though they were regular game objects.
>
> **[4:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=250)** So, I'm going to hold down the Shift key to multiple select the probes here.
>
> **[4:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=255)** Make sure I can select them easily.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=258)** So, grabbing all four on the right-hand side and just bringing them out into the level.
>
> **[4:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=265)** You can already see that as I begin to tweak the positioning of these probes, the indirect illumination on this sphere is changing.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=274)** So, I'm going to grab the four probes on this side too.
>
> **[4:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=279)** And I'm going to begin to just move them out here.
>
> **[4:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=283)** So, just move them to this side.
>
> **[4:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=285)** The lighting here will change yet again.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=288)** And notice this time, we're getting some of that blue tinting to the sphere.
>
> **[4:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=294)** But what's happening at the moment at least is that these probes positioned as they are, are only reading the light at the position of the probe.
>
> **[5:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=303)** So, it's not capturing any of the lighting or the bounced lighting that could be up here.
>
> **[5:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=310)** So, I'm going to fix that by grabbing these four probes, the top four probes.
>
> **[5:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=315)** So this one and this one.
>
> **[5:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=318)** And then simply bring them up to the maximum point.
>
> **[5:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=322)** And as you position these probes, you want to make sure that they're inside the room or the environment and they're not penetrating through a mesh.
>
> **[5:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=330)** The moment I bring that probe, for example, inside the ceiling here, I'm effectively cutting that off through the mesh from the lights in the scene.
>
> **[5:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=340)** So, I don't want to do that.
>
> **[5:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=341)** So, I'm going to grab these probes, this time the bottom four probes.
>
> **[5:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=345)** And I'm going to bring these closer to the floor without going through the floor.
>
> **[5:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=352)** So about there.
>
> **[5:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=354)** And then I'm going to grab it from this side.
>
> **[5:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=357)** You can see that they're pretty tightly packed here.
>
> **[6:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=360)** So, I'm going to grab the top two and I'm going to grab the bottom two.
>
> **[6:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=363)** And I'm going to move them here inside the scene to maybe about there ish.
>
> **[6:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=371)** I'm going to grab these four at the front and just bring these forward so that I'm kind of mapping up these probes to the corners of the cube.
>
> **[6:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=382)** And that's looking pretty good.
>
> **[6:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=383)** I might just grab the four on this side and bring them over a bit more.
>
> **[6:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=388)** And the same with the probes on this side.
>
> **[6:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=392)** Now, when you've done that, you want to begin to start adding additional probes to create a grid through your environment so that we can capture the light as it moves through the 3D space here.
>
> **[6:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=405)** I'm going to do that by selecting the top four.
>
> **[6:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=409)** I could have chosen the bottom four either.
>
> **[6:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=411)** It doesn't really the matter, which is the top four.
>
> **[6:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=415)** And I'll duplicate them by moving to the inspector and choosing the duplicate selected button.
>
> **[7:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=422)** Now, as soon as I click that, nothing appears to change.
>
> **[7:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=426)** But actually, it has created four additional light probes.
>
> **[7:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=430)** They're just positioned on top of the original ones.
>
> **[7:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=433)** So just by using the transform gizmo, I can bring these new probes down.
>
> **[7:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=439)** And I'm going to duplicate selected again to do that.
>
> **[7:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=444)** Duplicate selected again.
>
> **[7:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=446)** And each of these probes are capturing the light as they move through the scene.
>
> **[7:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=451)** Great.
>
> **[7:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=452)** We have captured the light vertically.
>
> **[7:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=456)** I am now going to do a similar thing by bringing these across the scene.
>
> **[7:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=459)** So, I'm going to go duplicate selected.
>
> **[7:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=463)** And then bring these probes here like so.
>
> **[7:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=467)** And duplicate selected again to bring these probes into the scene.
>
> **[7:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=471)** And duplicate selected to bring these probes somewhere like that.
>
> **[7:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=476)** I'm going to grab these probes closer to the front.
>
> **[8:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=480)** And do a similar thing, moving them into the scene.
>
> **[8:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=482)** So duplicate selected, bring these further into the scene.
>
> **[8:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=487)** Duplicate selected, further into the scene.
>
> **[8:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=490)** And one more time to create a grid of light probes.
>
> **[8:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=497)** And because the lighting is set to auto generate, these are being automatically baked.
>
> **[8:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=503)** Now, when I deactivate the edit probes, I can begin to access individual objects inside the scene.
>
> **[8:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=510)** If I now select the sphere, you will notice what it's doing.
>
> **[8:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=514)** You'll see that inside the scene, we have a probe here, a probe here, and one here.
>
> **[8:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=521)** And as I begin to move the sphere, Unity is giving me a visualization here so that I can see the nearest probes in the scene that it's selecting.
>
> **[8:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=533)** And the lighting for the scene is being blended across these probes and averaged over the sphere here to give me the most accurate representation of lighting inside the scene that it can in real time.
>
> **[9:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=549)** And as I move closer to this blue wall, you're seeing this is capturing the blueness of the wall.
>
> **[9:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=556)** And now that's looking pretty good.
>
> **[9:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=558)** And as I move close to the light, we're getting pretty intense here on that sphere.
>
> **[9:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=563)** And that's looking pretty great.
>
> **[9:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=566)** So, we have here an example of how we can add indirect illumination to objects that can move as well as the static ones.
>
> **[9:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=576)** And that is incredible.
>
> **[9:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=578)** So, when you use light probes inside your scene, space them out evenly to capture the light as it moves through the scene.
>
> **[9:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/light-probes?u=76281980&t=586)** And then for every movable object inside the mesh renderer, make sure blend probes is activated so they can pick up that indirect illumination and things can look amazing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Code Keywords:** static (4), case, (1), let (1), default, (1)
> **UI Navigation:** select the (3), go to (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Occlusion culling
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=0)** - [Man] In this movie we're going to cover a really neat optimization trick that you can perform in Unity to improve the performance of your games, or your visualizations.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=11)** It's called occlusion culling.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=13)** In short, occlusion culling makes sure that the camera in your scene is only ever rendering and processing the things that it can actually see as opposed to objects that are behind it or outside of the viewing area.
>
> **[0:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=28)** If you take a look at the scene I have in front of me here, we have this terrain object and we have the camera positioned here.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=34)** This scene is included inside the course exercise files, and really is just a very simple sculpted terrain.
>
> **[0:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=41)** But just look at how large it is, we have our tiny camera over here, and a massive environment here.
>
> **[0:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=47)** Now, the camera can only see a fraction of this environment.
>
> **[0:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=51)** You take a look at this camera, look at the viewing area, and there's only really a fraction of this terrain that the camera can actually see.
>
> **[0:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=58)** In fact, even if I wanted to shrink the viewing horizon of this camera, by moving to the clipping planes and changing the far distance, for example, to 400, and that would be 400 meters bringing the distance to here, still the camera only see a fraction of this environment.
>
> **[1:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=75)** But right now what's happening is that the entirety of this environment is being processed and rendered by Unity, and we want to cut out all of that stuff and optimize our render performance.
>
> **[1:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=86)** Now to get started with occlusion culling, the first thing you need to do is to create an object that is going to represent the area that the optimization will apply to.
>
> **[1:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=96)** In this case, I want the optimization to apply to the entirety of this terrain.
>
> **[1:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=101)** So to get started, I'm going to choose "game object" and choose "create empty" and just move this empty object pretty much somewhere to the center of the scene.
>
> **[1:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=110)** Maybe about there.
>
> **[1:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=113)** Now that I've positioned this at the center, I'm going to rename the object to, for example, occlusion area.
>
> **[2:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=120)** You don't have to call it that that's an optional name.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=123)** Then I'll click on add component and I want to add an occlusion area component.
>
> **[2:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=129)** Now it's difficult to see because of just how big this scene is, but pretty close to the gizmo here at the center, you can see these green handles.
>
> **[2:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=139)** These are going to allow us to stretch and resize this occlusion area to encompass the level.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=145)** Now I can click on these handles and drag them to resize them, but I'm not going to do that.
>
> **[2:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=151)** I'm simply going to move to the exclusionary area here and begin to type in values.
>
> **[2:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=156)** So I'm going to choose 500 by 500 by 500.
>
> **[2:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=160)** Is that too large? Is that too small?
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=162)** Well, actually it's too small.
>
> **[2:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=164)** So I can now drag these handles out to resize this area here to encompass the entirety of the level.
>
> **[2:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=173)** Looking good on that side, going to increase it on this side, bring this out to encompass all this side here.
>
> **[3:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=180)** Same thing on this side, bring that here.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=182)** And that's looking pretty good.
>
> **[3:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=184)** We now have this box surrounding the terrain.
>
> **[3:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=188)** It doesn't have to be exactly right so long as our world is contained within that box.
>
> **[3:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=194)** Now, the next thing that I need to do, is I need to access the occlusion culling tools.
>
> **[3:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=199)** Unity does a good job of hiding these, but I'm going to show you how to access them, move to the menu here and choose "window", and then select "rendering", and then select "occlusion culling" from the menu.
>
> **[3:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=211)** This may initially appear as a free floating window, but you can dock that over here to the inspector.
>
> **[3:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=217)** Now I'm going to switch to the bake tab where I have a range of different properties that I can specify, but I'm going to pretty much leave these at their default.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=227)** If you're using a scene that is sized to real-world proportions, then you can usually leave these settings just as they are.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=236)** So I'm going to move down to the bottom and hit the button "bake".
>
> **[3:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=239)** Now, when I do that, Unity might take a while to recalculate everything on how this scene is set up.
>
> **[4:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=245)** I need to let this process finish.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=247)** So I'm going to hit "bake".
>
> **[4:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=250)** When I choose "bake", you'll see that Unity begins to draw this grid inside the world.
>
> **[4:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=255)** The technical name for this grid is an Octree and it's subdividing the world into different regions.
>
> **[4:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=260)** And it's calculating quite a lot of different things.
>
> **[4:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=263)** That's going to allow us to optimize the rendering of our world.
>
> **[4:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=266)** Now, when that's completed, I'm going to resume the coring.
>
> **[4:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=269)** It might take a few minutes depending on the size of your world.
>
> **[4:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=272)** So now the bake process has been completed.
>
> **[4:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=276)** The world is now subdivided into this grid and not much seems to have changed, but that's just at first sight.
>
> **[4:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=285)** The next thing I want to do is to select the camera inside the same, which is located over here.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=291)** And from the inspector, I want to move to the panel here, the inspector panel, and for occlusion culling.
>
> **[4:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=298)** I want to make sure that option is activated.
>
> **[5:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=302)** Now, occlusion calling is being applied by default so long as that option is activated, but let's get a visualization of how that works exactly in our scene.
>
> **[5:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=312)** You can visualize the effects of occlusion culling by jumping back to the occlusion culling panel and then hitting the visualization tab to make sure you activate that.
>
> **[5:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=323)** You also want to check out the view here for the occlusion culling part, where it says, visualize, make sure this option is also activated.
>
> **[5:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=331)** And let's take a look at what we can see inside the scene.
>
> **[5:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=334)** Suddenly the grand terrain that we had has been decimated and we're seeing only a fraction of it.
>
> **[5:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=341)** Let's take a look at what happens when I move the camera to a different position.
>
> **[5:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=346)** I'm going to select the camera and begin to move it to a different location in the world.
>
> **[5:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=352)** And also check out what's happening here inside the camera view.
>
> **[5:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=356)** From the camera view, you wouldn't notice that anything was actually happening to the terrain, but as I move the camera around, different regions of it are being hidden.
>
> **[6:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=366)** This also applies if I rotate the camera to look at different areas of the environment here.
>
> **[6:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=372)** You can see what's happening is that it's only displaying us the areas of the terrain that the camera can actually see, which means that Unity can just focus on the stuff that the viewer is going to end up seeing inside our renders.
>
> **[6:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=387)** So occlusion calling is an amazing form of optimization.
>
> **[6:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=392)** The one thing you need to keep in mind with occlusion culling, is that if you later make changes to your world, if you change the terrain, if you add new objects, or if you remove objects from your scene, you will need to go back to the occlusion culling tab and rebake the environment.
>
> **[6:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=409)** There's no auto-generate button like there is with light baking.
>
> **[6:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=413)** With occlusion culling, you need to bake manually every time you make a change to your world.
>
> **[6:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=418)** So normally you would only ever visit this tab close to the end of your production pipeline, when you have most of your world in place.
>
> **[7:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/occlusion-culling?u=76281980&t=427)** But so long as you keep that in mind, occlusion culling is quick and easy and it makes a massive difference to how your games and visualizations perform.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), switch (1), default. (1)
> **CLI Commands:** make (5)
> **UI Navigation:** click on (2), select the (2), switch to (1)
> **Definitions:** is an  (2), means that (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)


### 4. Post-Processing

#### Volumes and effects
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=0)** - [Instructor] In this chapter of the course, we're going to look at post-processing.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=5)** These are the effects we can apply to a camera to enhance the visual fill of our scenes.
>
> **[0:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=10)** This includes things like blur, bloom, chromatic aberration, ambient occlusion, and all kinds of other effects.
>
> **[0:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=19)** To demonstrate this, I've loaded up this VR escape the room scene.
>
> **[0:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=24)** This is included on the Unity Asset Store and is part of the Universal Render Pipeline.
>
> **[0:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=31)** You can easily download and bring this into your project manually, but it's also included inside the course exercise files.
>
> **[0:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=39)** If you want to get access to this project independently yourself, using the Unity Asset Store, then here inside a browser is where you need to go.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=48)** So you've got the link up here.
>
> **[0:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=51)** It's the VR beginner, The Escape Room.
>
> **[0:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=54)** The project you download from the Asset Store contains a range of different features and functions inside that project.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=61)** I've removed some of the functionality just so that in our project, we can focus only on post-process effects.
>
> **[1:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=69)** I'mma go back to Unity here, back into the Unity editor and check out the scene inside the scene tab.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=77)** If I move to the scene tab, I can just move my camera free form around the environment.
>
> **[1:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=82)** I'm going to switch gizmos off so you can just see the scene that we have here.
>
> **[1:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=88)** And it looks pretty good. but we can enhance this even further by using post-process effects.
>
> **[1:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=96)** Now the way you set that up inside Unity, first of all, is you'll want to select the camera that the effects are going to apply to.
>
> **[1:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=104)** In the case of this sample scene here, we have a camera object selected at the bottom inside the hierarchy panel.
>
> **[1:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=112)** From the Inspector, you can see that we have the post-processing option activated.
>
> **[1:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=119)** It's really important that's activated, otherwise the effect simply won't show up.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=124)** Now, the next thing that I want to just confirm is that we're working here inside the Universal Render Pipeline, not the HD render pipeline and not the standard Unity renderer.
>
> **[2:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=135)** Across the pipelines from the Universal to the High Definition Render Pipeline post-processing works in a similar way, though there are some differences.
>
> **[2:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=145)** You can always check which pipeline you're using by simply going to the menu and choosing edit and choosing project settings.
>
> **[2:33](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=153)** And then from the graphics tab, you can see listed here I am using the Universal Render Pipeline asset.
>
> **[2:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=160)** I'm going to close that dialogue here and return back to the scene.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=165)** Now to start using post-processing, we need to add a volume object to the scene.
>
> **[2:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=170)** Really easy to do that.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=172)** I can choose game object, and then I can move down to where it says volume and simply choose global volume.
>
> **[3:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=180)** Now you'll notice there are a different range of volumes that I can add.
>
> **[3:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=184)** For example, there's a box and a sphere of volume.
>
> **[3:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=188)** Now these other volumes are useful if you want to have different effects apply to different areas of the scene.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=195)** Maybe you've got a scene where the player can walk around inside a forest and then go under the water, and you want some different effects to apply when you're under the water, compared to when you're wandering the forest.
>
> **[3:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=208)** In the case of this scene, I'm going to create one set of effects and it's going to apply everywhere.
>
> **[3:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=214)** So we're going to choose global volume from the menu here.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=218)** This adds an object to the scene that is a global volume but because it's global, it really doesn't matter where we position this object.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=227)** So I'm going to select the object and then position that to the weld origin at 000.
>
> **[3:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=234)** You can do expand the Inspector here and check out the volume component.
>
> **[4:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=240)** We have a few different settings here.
>
> **[4:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=243)** The first one is the mode and we're using a global volume, so I want to make sure that's set to global.
>
> **[4:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=249)** We have a white property that allows us to dial in the effect, the application of the effects.
>
> **[4:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=258)** Right now, we don't have any effects, but if I wanted to switch them off, I could move this to the left, to zero, and then fully on at one.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=267)** If I want to create a different blend of effects, I can move the slider to an intermediate position.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=274)** But I'm going to leave these set at one so that the effects are fully applied.
>
> **[4:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=280)** The next thing we need to do is to create a profile, and a profile is simply the complete collection of effects that we're going to be using.
>
> **[4:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=288)** These are stored as an asset.
>
> **[4:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=291)** To create this asset, I just have to hit the new button.
>
> **[4:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=295)** And as soon as I do that, when I left-click, you can see that it actually selects the effect here as an asset inside the project panel.
>
> **[5:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=304)** And the settings that I apply here in the Inspector will be added to the asset.
>
> **[5:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=310)** To start adding effects, I'm going to hit the add override button to begin to add effects, but I'm not going to do that just yet.
>
> **[5:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/volumes-and-effects?u=76281980&t=319)** In the next movie, we're going to start creating our very first effects that we can add to our post-processing profile.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), this, (1), override (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** select the (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Bloom
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=0)** - In the previous movie, we created a Volume object for adding effects to the camera.
>
> **[0:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=6)** That's already set up here inside the scene with the Global Volume object.
>
> **[0:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=10)** And it's going to apply scene-wide to everything.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=13)** The first effect I'm going to add is the Bloom effect.
>
> **[0:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=16)** Bloom allows us to apply blurriness to the highlights in the scene, meaning that the brightest areas of the scene will be slightly misty, slightly blurry.
>
> **[0:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=25)** And it can create a dreamy, fantasy feel.
>
> **[0:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=29)** So let's do that.
>
> **[0:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=30)** To start, I'm going to select the Global Volume object here in the Hierarchy panel and click the Add Override button here inside the Inspector.
>
> **[0:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=39)** From the list, we get a range of different things we can choose, but I want to select Post processing.
>
> **[0:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=46)** And from there, I'm going to select Bloom.
>
> **[0:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=50)** Now that I've selected Bloom, we have added this Bloom component.
>
> **[0:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=53)** It appears initially to be a new component.
>
> **[0:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=57)** But it's indented slightly.
>
> **[1:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=60)** And this indicates that it's not actually a component.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=64)** It's actually part of the data that gets saved in this Volume Profile in the Inspector.
>
> **[1:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=70)** So we're not adding a component called Bloom, rather we're adding bloom settings to our Volume Profile.
>
> **[1:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=78)** When we've added a profile like this, when we've added, for example, a Bloom effect, we get a range of different settings allowing us to control that effect and some tick boxes next to each of the effects.
>
> **[1:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=90)** The idea here is that you only want to enable the minimum amount of settings to that you need to get the effect you want.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=100)** You don't want to enable them all simply for the sake of it.
>
> **[1:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=104)** You only want to enable those you need.
>
> **[1:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=107)** In this case, I'm going to be enabling two settings, and they are Intensity and Threshold.
>
> **[1:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=115)** Intensity is going to control the brightness of the blur.
>
> **[1:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=118)** And the Threshold is going to control how much the effect applies to.
>
> **[2:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=123)** Let's see how this works.
>
> **[2:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=125)** So for Intensity, at least to start with, I'm going to set this to a pretty high value, maybe 19.
>
> **[2:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=132)** Now no change initially appears to happen.
>
> **[2:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=135)** If I check out the Game tab, you can see some change is applying here on the window areas or the floor outside the windows.
>
> **[2:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=143)** And if I grab the Intensity, you can see that begins to intensify the regions outside.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=150)** But it's still pretty high and changing minimally, here only the outside elements.
>
> **[2:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=156)** But notice that if I use the Threshold here, I can click and move that to the left all the way down to one.
>
> **[2:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=163)** And we're getting this ridiculous effect here.
>
> **[2:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=166)** The lower that you set the Threshold, the more things it's going to affect.
>
> **[2:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=172)** And the higher the threshold is, the less it will affect.
>
> **[2:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=177)** You can see here at a value of three, practically nothing is being affected.
>
> **[3:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=183)** So I'm going to set this pretty low, maybe to 0.5, and then grab my Intensity slider and begin to reduce that.
>
> **[3:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=193)** So we are adding bloom to a range of different things inside this scene.
>
> **[3:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=197)** We can see the change that is making here and we're controlling the application using Threshold.
>
> **[3:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=204)** You can easily see the impact of your choice by toggling the slider, the Bloom slider, on and off to see the before and after.
>
> **[3:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=214)** I might increase the Threshold to 0.6 and just increase the Intensity a little bit here to do a before and after.
>
> **[3:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=225)** And I think that's looking pretty good.
>
> **[3:47](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=227)** Now one of the really neat things that you can do with post-processing inside Unity is I can see in preview my effects here in the Game tab, which is great.
>
> **[3:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=237)** But if I switch to the Scene tab, at least initially, I don't see the same result.
>
> **[4:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=242)** I don't see my post-processing as though it were here in the scene, looking at this Scene view.
>
> **[4:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=248)** But you can enable them quite easily.
>
> **[4:10](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=250)** You move to the top toolbar here and click on this little dropdown here for Toggle Skybox.
>
> **[4:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=257)** Click on the dropdown and make sure that you activate Post Processings.
>
> **[4:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=261)** It's pronounced here with the plural, Post Processings.
>
> **[4:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=265)** And you can then toggle the effects on and see the result of them here inside the scene.
>
> **[4:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=271)** Now as these stand, these are actually pretty vibrant.
>
> **[4:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=274)** So I can again reposition my Scene camera to somewhere over here.
>
> **[4:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=279)** And I can begin to dial down a little bit of the Intensity so that it's still using post-processing here, we're still getting that bloom, but I'm tweaking the effect based on different angles in the scene.
>
> **[4:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=292)** You can still get the before and after.
>
> **[4:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=294)** And that's looking pretty neat here.
>
> **[4:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=297)** So we've now set up our first effect, Bloom.
>
> **[5:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/bloom-11610907?u=76281980&t=300)** Let's see what other effects we can add to our profile.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), dropdown (2), toggle (2), select the (1), switch to (1)
> **Code Keywords:** let (3), override (1), this, (1), case, (1), switch (1)
> **Versions:** 0.5 (1), 0.6 (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Color correction
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=0)** - [Instructor] In the proceeding movie we added bloom to our post-processing profile.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=5)** And in this movie I want to apply a color adjustment, that is to use color correction curves to change the color temperature of our environment, making it warmer or cooler depending on what we want.
>
> **[0:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=18)** To do that, I'm going to move back to our global volume object which we added in the very first movie of this chapter.
>
> **[0:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=25)** Move to the inspector and here down the bottom of bloom where we added this in the previous movie we still have the add override button, allowing us to add additional post process effects.
>
> **[0:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=38)** So I'm going to choose add override to bring up the menu that we have here.
>
> **[0:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=43)** Once again, I'm going to move to post processing.
>
> **[0:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=46)** We have quite a few different things here.
>
> **[0:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=50)** In fact, we have color adjustments and color curves and these are two similar effects we can apply.
>
> **[0:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=58)** In this case, I'm going to choose color curves.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=61)** It gives us access complete control over the pixels in our renders by adjusting these color curves here.
>
> **[1:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=68)** The next thing that I want to make sure I control is the master curve.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=72)** You have the ability to control the red, green, and the blue channels of the render independently if you want to.
>
> **[1:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=80)** In this case, I'm going to work with the RGB master channel and then choose the button here that says override.
>
> **[1:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=87)** The override button allows us to make changes to the curve itself.
>
> **[1:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=92)** And you can see that this corresponds to the histogram view that we might find in a photo editing application like Photoshop or Gimp.
>
> **[1:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=100)** Now in this case, I want to apply adjustments to this curve, on the left hand side of the curve on this horizontal axis on the left hand side, we have the actual values of the image themselves.
>
> **[1:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=113)** The left hand side refers to darkness, and the right hand side refers to brightness.
>
> **[1:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=118)** So pixels on the left hand side are currently darker.
>
> **[2:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=121)** Pixels on the right are currently brighter.
>
> **[2:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=124)** The vertical axis instructs Unity on what to do with those pixels.
>
> **[2:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=129)** By changing this curve here, we can make the dark pixels brighter by raising the curve, we can make them darker by lowering the curve.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=138)** So in this case, I want to add some additional contrast to our image.
>
> **[2:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=142)** Contrast means making the highlights brighter and the shadows darker.
>
> **[2:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=147)** So here's how we can do that using this curve, I'm going to position my cursor somewhere about the center of the curve and then double click on it.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=155)** When I double click the curve, it inserts a color adjustment point onto this curve, and I can move this up or down just by clicking and dragging.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=165)** So by clicking and dragging this upwards here, you can see that inside this image things are getting brighter.
>
> **[2:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=173)** In addition to the curve that we've added, you'll notice that we also get these bézier control handles that I can click on to adjust the interpolation of the curve to the next point.
>
> **[3:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=184)** If I click on the point at the top right-hand side, you can see this also has a bézier curve that I'm going to raise here.
>
> **[3:14](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=194)** Bring that down and you can see that in doing this I'm smoothing out the values to the highlights here.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=201)** And again, we can look at the before and the after.
>
> **[3:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=204)** You can see that I'm beginning to brighten up these values.
>
> **[3:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=206)** I could move that to the left even further to begin to brighten the image and I'm going to position my new control point about here.
>
> **[3:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=215)** Now, I'm going to add some extra darkness to the dark areas, adding contrast here.
>
> **[3:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=220)** So I'm going to double click a second point and bring that pretty close down to this point here, adjust the curve, and then just lower this point.
>
> **[3:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=232)** You can see that as I begin to lower it, the effect that's having inside the view port.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=236)** So something about thereish and adjust the bézier handle just a little bit to get that control here, and there we have our curve.
>
> **[4:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=247)** I'm just going to change and tweak the curve a little bit here.
>
> **[4:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=251)** This kind of S curve going on to change the brightness, move that to the left a bit so that we're effecting slightly fewer pixels in the dark area to something kind of like this here.
>
> **[4:22](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=262)** Flatten out the curve, bring that down just a little bit like so.
>
> **[4:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=267)** And we can see the before and the after, increasing the brightness and making the dark areas slightly darker and that's looking pretty good.
>
> **[4:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=276)** So that's how we can use a curve tool in the post process effects to change the contrast of our renders.
>
> **[4:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=283)** And this applies again, not just inside the game tab where we can see the results here but I can jump back to the scene tab and see the results of my work, toggling that on and off to see the result inside the scene.
>
> **[4:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/color-correction-11616373?u=76281980&t=297)** Great stuff.

> [!info]- Semantic Content
>
> **Code Keywords:** override (4), case, (4), raise (1)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** click on (2)
> **Definitions:** refers to (2)
> **Env Vars:** rgb (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Vignette
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=0)** - [Instructor] In this movie, we're going to add to the post-processing effects that we started previously by looking at the vignette effect.
>
> **[0:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=8)** This allows us to add a frame of darkness around our image.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=13)** Initially, that might not seem to be helpful.
>
> **[0:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=16)** But, a vignette is very powerful in many different ways.
>
> **[0:20](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=20)** One, it allows us to focus the viewer's attention on different areas of the screen.
>
> **[0:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=25)** And also, it can add areas of tension, particularly for horror games in first person, where you want to create a sense of claustrophobia.
>
> **[0:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=34)** In this scene, we're going to be adding the vignette to help focus the player's view towards the center of the screen.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=40)** To do that, I'm going to move to the inspector making sure the global volume object is selected.
>
> **[0:46](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=46)** And then move down to the bottom and choose the Add Override button.
>
> **[0:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=50)** Now it appears outside the recording window, so let me just resize my view just a little bit, so you can see what's going on.
>
> **[0:57](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=57)** Choose Add Override again.
>
> **[0:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=59)** Move down to Post-processing.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=61)** Select that.
>
> **[1:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=63)** And then I'm going to scroll down slightly further here to the bottom where it says Vignette.
>
> **[1:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=69)** I can simply type in the value here, vignette 2, to get that Vignette option and select that to add this to the scene.
>
> **[1:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=77)** I'm going to resize my window back to the recording window, so we can see the vignette effect.
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=83)** Now with vignette, we have several different controls that we're going to want to use.
>
> **[1:28](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=88)** One is we have the color of the vignette.
>
> **[1:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=92)** I'm going to leave that black at least for the moment.
>
> **[1:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=95)** We also have the center, which is where on the screen we can choose where it is centered.
>
> **[1:39](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=99)** I'm going to leave that option as it is, which is currently 0.5 for X and Y, and those coordinates are normalized coordinates, 0.5 means halfway across the screen.
>
> **[1:54](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=114)** So on the X and the Y, 0.5, define the screen center.
>
> **[2:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=121)** Next, I'm going to control the intensity and the smoothness and the roundedness of the effect.
>
> **[2:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=127)** Let's start by grabbing the intensity slider and moving that pretty high.
>
> **[2:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=132)** And you can see when I do that, what we have is this elliptical effect circling the view.
>
> **[2:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=138)** I can also check that out inside the game tab where I can see the center on the view here.
>
> **[2:24](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=144)** Now the smoothness, when moved all the way to the left, gives us a perfectly hard edge for the vignette.
>
> **[2:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=152)** And by sliding that to the right, we have a completely feathered edge.
>
> **[2:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=157)** I can also use the rounded option here to enable and disable to effectively change whether this is a circle or ellipse.
>
> **[2:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=165)** I'm going to leave it at this setting here.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=168)** So now I've decided on this.
>
> **[2:50](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=170)** I can grab the intensity slider and move that closer to the left, so that the only areas that I'm adding darkening to are the areas around the edges of the screen, which you can see here.
>
> **[3:02](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=182)** I'm just going to reduce the smoothness just a bit, and increase the intensity a bit further, looking at the before and after.
>
> **[3:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=191)** And I might just bring, actually, I was actually activating color curves there.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=195)** I need to be careful about that.
>
> **[3:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=197)** Move down to the vignette.
>
> **[3:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=198)** Begin to change what we're affecting.
>
> **[3:21](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=201)** So, I'm going to increase the smoothness a little bit.
>
> **[3:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=205)** Move the intensity up, before and after.
>
> **[3:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=209)** And you can see the effect that is applying around the edges of the screen, just subtly to focus the user's attention here and the center.
>
> **[3:38](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=218)** This also works inside the scene view here.
>
> **[3:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=222)** So as I move around, the effect is moving with me, always darkening that edge of the screen, focusing our tension on the center.
>
> **[3:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=231)** That's great.
>
> **[3:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=232)** We've now added bloom, color curves, and vignette.
>
> **[3:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=236)** That's three important effects added to our profile.
>
> **[4:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/vignette-11616372?u=76281980&t=240)** Let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), override (2), this. (1)
> **Versions:** 0.5 (3)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Depth of field
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=0)** - [Narrator] One common effect that is really important and powerful is depth of field.
>
> **[0:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=7)** And it's an interesting effect because it only applies to the camera and not to the scene view.
>
> **[0:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=13)** To achieve depth of field you need to be using a camera inside the scene.
>
> **[0:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=18)** Depth of field allows you to effectively take an object, bring it to the foreground, make it nice, crisp and in focus, and then make the background slightly blurry so that you can focus the user's attention on nearby objects.
>
> **[0:32](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=32)** To demonstrate depth of field, I'm going to switch to the scene tab and position my view over here to this kind of ghost character so that the ghost character is here.
>
> **[0:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=44)** And then behind him we have the fireplace, the chest and all kinds of other interesting stuff.
>
> **[0:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=51)** So I'm going to set up this view here.
>
> **[0:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=53)** I'm going to maybe move the ghost character slightly to the left side of the view.
>
> **[0:58](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=58)** Just off center.
>
> **[1:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=61)** Select the camera object and choose game object and then select align with view to align the scene camera to the ghost object here inside the scene view.
>
> **[1:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=73)** And that's looking pretty good but we can make it look better with depth of field.
>
> **[1:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=78)** To do that, I'm going to select the global volume object, move down to the bottom to our familiar add override button, select that.
>
> **[1:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=87)** And inside the search field I'm going to type depth of field and straightaway the very top option depth of field.
>
> **[1:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=94)** Let's select that to add that option.
>
> **[1:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=97)** Now, by default, there really is only one parameter at least initially, and it's the mode parameter.
>
> **[1:43](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=103)** So I'm going to enable the mode parameter by default it set to off, which means the effect isn't enable at all.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=111)** Let's enable that by clicking on the dropdown and it asks you which two types of methods do we want, Gaussian or Bouquet.
>
> **[1:59](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=119)** And I'm going to select the Bouquet option, and then move down slightly further.
>
> **[2:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=125)** Now when I do this, take a look at the game tab here.
>
> **[2:08](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=128)** The ghost begins to turn blurry and the fireplace is in view.
>
> **[2:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=135)** So effectively I want my focus to be the other way around.
>
> **[2:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=139)** Notice also, if I switch to the scene tab, we don't see the effect of depth of field because we're not using a camera here inside the scene view.
>
> **[2:27](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=147)** So I'm going to go back to the game tab, now to change this, I want to change the focus distance currently set to 10.
>
> **[2:36](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=156)** I'm going to reduce it to a little bit further, all the way down to, for example, zero when things start to go blurry.
>
> **[2:42](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=162)** And I'm going to gradually increase this view here to something that brings the ghost character into focus.
>
> **[2:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=168)** So that's 0.52, bringing that into focus and blurring the background.
>
> **[2:56](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=176)** And so now we have that clear depth of field, allowing us still to have the pleasant background and the backdrop here.
>
> **[3:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=184)** And we can still kind of make out what's going on but we're now focusing our attention clearly on the foreground object.
>
> **[3:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=192)** So this is a really quick and easy way to add depth of field to our scenes.
>
> **[3:18](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=198)** Now obviously if you have a camera that is moving around the scene to different locations then be very careful because the focus distance is based on the distance away from the camera to determine the objects that are in focus.
>
> **[3:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/depth-of-field-11612871?u=76281980&t=214)** So normally you would want depth of field to apply to objects and cameras that are stationary.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), let (2), this, (2), override (1), default, (1)
> **UI Navigation:** select the (3), dropdown (1), switch to (1)
> **CLI Commands:** make (4)
> **Versions:** 0.52 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### Chromatic abberation
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=0)** - [Instructor] In this movie, I want to consider our last two post-process effects and they are chromatic aberration and white balance.
>
> **[0:09](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=9)** Let's see how they work.
>
> **[0:11](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=11)** I'm going to select the global volume object here, inside the hierarchy panel.
>
> **[0:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=15)** Move to the inspector, click on the add override button and I'm going to start by choosing chromatic aberration and just select that here and activate the intensity.
>
> **[0:26](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=26)** And this, really all there is to this chromatic aberration, is just one single intensity slider that we can move from zero to full power.
>
> **[0:37](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=37)** If I move it all the way to the right, check out what happens around the edges of the screen especially.
>
> **[0:44](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=44)** So I'm going to set that back to zero, then slide that up to one.
>
> **[0:48](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=48)** You can see we get this strange blurring and separation between the red, green and blue channels here.
>
> **[0:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=55)** Just bringing that here and it begins to add this strange distortion.
>
> **[1:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=60)** And this distortion also applies inside the scene view.
>
> **[1:04](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=64)** So as I move my camera around, that aberration is always applying to the left and the right edges of the screen.
>
> **[1:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=72)** Now, why would you ever want to apply such an effect as this?
>
> **[1:16](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=76)** Well, it looks pretty interesting, is the first reason.
>
> **[1:19](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=79)** You can use chromatic aberration for all sorts of purposes.
>
> **[1:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=83)** One is to help focus the user's attention, once again, on the center of the subject of your scene.
>
> **[1:29](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=89)** It can also add a dreamy, mystery feel to an environment.
>
> **[1:34](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=94)** It can also be used to, again, to describe, kind of, the influences that are applied to the player or the viewer character.
>
> **[1:45](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=105)** And in general, it can be used to add some surreal aspect to your environment.
>
> **[1:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=111)** So a pretty interesting effect.
>
> **[1:53](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=113)** Now, let's look at white balance.
>
> **[1:55](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=115)** To change white balance, I'm going to move down to the add override button once again, and choose white balance.
>
> **[2:01](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=121)** Let's just move my screen into view here, so I can see that a bit better.
>
> **[2:07](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=127)** So I'm going to choose white balance and then choose the white balance option to bring that into view.
>
> **[2:12](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=132)** Move to the bottom, where we can see the white balance option.
>
> **[2:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=135)** I'm going to activate the temperature control here and this allows me to change the main color temperature of the scene.
>
> **[2:23](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=143)** I can also activate the tint checkbox to apply a tint to the scene, also.
>
> **[2:30](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=150)** Something kind of like this, to kind of set this strange atmosphere.
>
> **[2:35](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=155)** And again, these effects are also applied to the environment here, inside the scene tab.
>
> **[2:41](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=161)** And notice how from this view, we've almost changed day into a kind of night here.
>
> **[2:49](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=169)** So that's pretty interesting.
>
> **[2:51](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=171)** So here, we've seen the combination of chromatic aberration and white balance and we now have a complete collection of post process effects all built up inside this global volume profile object being applied to the camera.
>
> **[3:06](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=186)** Remember back at the beginning, at the volume component stage, where I mentioned about the weight, we can easily, again, change and blend between these effects if we need to.
>
> **[3:15](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/chromatic-abberation?u=76281980&t=195)** So I can see the complete effect before and then the after and wow, what a difference that makes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), override (2), this, (2)
> **UI Navigation:** select the (1), click on (1), checkbox (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=0)** - Congratulations on reaching the end of this course.
>
> **[0:05](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=5)** In reaching this far, you've seen a wide range of material, and lighting and post processing features that span Unity's three major render pipelines.
>
> **[0:17](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=17)** These are the standard 3D pipeline, the universal render pipeline, and the high definition render pipeline.
>
> **[0:25](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=25)** Each one designed to get great results, under very different conditions.
>
> **[0:31](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=31)** And in reaching this point you've seen the basic light types, and also more advanced light types, such as emissive lighting.
>
> **[0:40](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=40)** You've seen Unity's key lighting systems, such as lightmapping, for baking static lighting, and light probes for getting indirect illumination on movable objects.
>
> **[0:52](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=52)** You've also seen the post processing workflow using volume component allowing you to get a ton of really interesting effects on to the renders of your scene.
>
> **[1:03](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=63)** And now in reaching this point you're ready to check out part 3 of the Unity certified associate training course, in preparation for that exam.
>
> **[1:13](https://www.linkedin.com/learning/cert-prep-unity-certified-associate-game-developer-materials-and-lighting/next-steps?u=76281980&t=73)** So great, let's move to the next part of this course.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), let (1)
> **Analogies:** such as (2)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Prepare for Unity Certification]]
← [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] | **4 of 7** | [[Cert Prep- Unity Certified Associate Game Developer Audio and Effects]] →

## Appears In

- [[Prepare for Unity Certification]]

## Related Courses

_Courses sharing skills:_

- [[Cert Prep- Unity Certified Associate Game Developer Design, Production, and Industry Awareness]] — Unity
- [[Cert Prep- Unity Certified Associate Game Developer Animation and Cinematics]] — Unity
- [[Cert Prep- Unity Certified Associate Game Developer Audio and Effects]] — Unity
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — Unity
- [[Cert Prep- Unity Certified Associate Game Developer UI and 2D Games]] — Unity
