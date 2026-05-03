---
type: course
cssclasses:
  - lle-course
slug: figma-designing-with-variables-and-conditionals
url: "https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals"
duration_minutes: 61
duration: 1h 1m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFzKC8XFxiUhg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709242496201?e=2147483647&amp;v=beta&amp;t=rqwJOu_pzEzfqI6uN0B9sgt96TEklCcgyBUYH_dLoiM"
linkedin_topic: Web Development
learning_paths:
  - '[[Design User Experiences with Figma]]'
prev_courses:
  - '[[Accessibility and Inclusion with Figma]]'
next_courses:
  - '[[Designing Microinteractions with Figma]]'
path_nav: '[{"path":"Design User Experiences with Figma","position":4,"total":6,"prev":"Accessibility and Inclusion with Figma","next":"Designing Microinteractions with Figma"}]'
path_count: 1
tags:
  - course
  - topic/web-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Figma-%20Designing%20with%20Variables%20and%20Conditionals.md)

![Figma: Designing with Variables and Conditionals](https://media.licdn.com/dms/image/v2/D560DAQFzKC8XFxiUhg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709242496201?e=2147483647&amp;v=beta&amp;t=rqwJOu_pzEzfqI6uN0B9sgt96TEklCcgyBUYH_dLoiM)

# Figma: Designing with Variables and Conditionals

> Digital designers often face unforeseen circumstances, which makes it difficult to control the experience. In this course, join instructor Joseph Labrecque as he shows how to create variables for your design elements in Figma and specify the conditions in which those variables are used. Along the way, get quick, easy-to-apply tips on setting modes in your design strategy, using conditional logic t

> [LinkedIn Learning](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals) | 1h 1m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Working with variables and conditionals](#working-with-variables-and-conditionals)
  - [Getting set up](#getting-set-up)
- [**1. Exploring Figma’s Approach to Variables**](#1-exploring-figmas-approach-to-variables) (5 videos)
  - [Figma design file overview](#figma-design-file-overview)
  - [Creating local variables](#creating-local-variables)
  - [Organizing variables into groups](#organizing-variables-into-groups)
  - [Adding variable collections](#adding-variable-collections)
  - [Working with variable modes](#working-with-variable-modes)
- [**2. Designing with Variables and Conditional Logic**](#2-designing-with-variables-and-conditional-logic) (7 videos)
  - [Assigning variables to text elements](#assigning-variables-to-text-elements)
  - [Prototyping with conditional logic](#prototyping-with-conditional-logic)
  - [Developing a reset function](#developing-a-reset-function)
  - [Controlling visibility with Booleans](#controlling-visibility-with-booleans)
  - [Adding products to the cart](#adding-products-to-the-cart)
  - [Adding quantities to the cart](#adding-quantities-to-the-cart)
  - [Removing quantities in the cart](#removing-quantities-in-the-cart)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with variables and conditionals](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variables-and-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variables-and-conditionals?u=76281980&t=0)** - [Joseph] Tools like [[Figma (Software)|Figma]] are great for designing and [[Prototyping]] user experiences. Until recently, a designer wasn't quite able to relay certain actions in a realistic way across a Figma prototype. We'll create a set of numeric and Boolean variables within a Figma design document and organize them using collections, groups, and modes. We'll then use both design and prototype workspaces to either bind those variables to design elements, like text values or object visibility, or to bind actions upon user interactions, to set variable values, make conditional choices based on those values, and calculate new values. I'm Joseph Labrecque, and I've spent most of my career at the intersection of design and development across a variety of platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[Prototyping]] (1)
> **Tools:** figma (3)
> **CLI Commands:** make (1)
> **Speakers:** - [joseph] (1)

#### [Getting set up](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/getting-set-up?u=76281980&t=0)** - [Narrator] Before we get started, here are a few things to know about preparing for this course. The exercise files are [[Figma (Software)|Figma]] Design documents that have been exported to local .fig files for distribution. Starter files for specific movies are accessible through the naming convention that corresponds to those movies. For instance, you'll want to start with 01_01.fig. This is the starter file for the entire course. Drag that into your Figma dashboard in order to import it and launch it within Figma Design.
>
> **[0:41](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/getting-set-up?u=76281980&t=41)** You should also have access to Figma, of course, to complete the course in a hands-on manner. Just open the .fig file that corresponds to the movie you're starting with. With that in mind, let's get going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (4)
> **Tools:** figma (4)
> **Exercise Files:** exercise files (1), starter files (1), starter file (1)
> **UI Navigation:** open the (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)


### 1. Exploring Figma’s Approach to Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [Figma design file overview](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/figma-design-file-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/figma-design-file-overview?u=76281980&t=0)** - [Instructor] Before getting into variables and the functionalities they empower, we'll have a look at the [[Figma (Software)|Figma]] design file that we'll use in this course. The existing starter prototype includes all the screens and components we'll need with basic navigational interactions already configured. Here we can see all the screens laid out. We have a home screen, screens for all six product variants, a cart, and some additional things like a profile screen, a preferences screen, thank you, and a simple splash screen. We also include a small design system, which contains our colors, [[Typography]], and components. If we look on our Assets, we can see all the components that have been defined. Over in our Design Properties, for the entire document, we can see different textiles that have been defined and also color styles based off of the color guide.
>
> **[1:09](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/figma-design-file-overview?u=76281980&t=69)** Switching to prototype. We're able to see all the interactions that have already been defined across different components and screens. Let's go ahead and launch our design.
>
> **[1:26](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/figma-design-file-overview?u=76281980&t=86)** We're taken to the welcome screen and it prompts us to explore different [[Microsoft Products|products]]. From here, we're able to select a product, read more about it, and add it to the cart. Of course, nothing gets added yet, but we are taken to the cart. From here, we can check out and the process restarts. We also have the ability down below to visit our user profile, which can be edited,
>
> **[2:03](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/figma-design-file-overview?u=76281980&t=123)** and a preferences page, which allows us to choose our specific user preferences. There's a button to reset our preferences to the defaults or to save our preferences, which takes us back to the welcome screen. We can visit the cart at any time and go home from any other page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (1), [[Typography]] (1), [[Microsoft Products|Products]] (1)
> **Tools:** figma (1)
> **Speakers:** - [instructor] (1)

#### [Creating local variables](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/creating-local-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/creating-local-variables?u=76281980&t=0)** - [Instructor] Before we're able to make use of any variables within a [[Figma (Software)|Figma]] design file, we must first create them within the design workspace. A fresh Figma document will not include any variable definitions until you enter into the local variables dialog and begin creating them. You can find local variables in the design workspace along the side here. When you initially open the dialog, it will prompt you to create a variable since you won't have any to start with. The first variable I create is going to be a number variable for the cart total. As you can see, there are four variable types that you can define inside of a Figma design file. Color allows you to define color variables, which can be applied to different design elements. Number variables, which we'll make extensive use of in this course. Hold numeric values for calculations on design elements, but also for output into text. String variables, hold strings, so text characters. And Boolean variables, which we'll also make extensive use of in this course are either true or false. They can be used to show and hide things in the design workspace or to check on certain things through conditionals as you're [[Prototyping]]. For this first variable, I'm going to choose number and we have to give the variable a name. This is going to represent the total amount in the cart
>
> **[1:36](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/creating-local-variables?u=76281980&t=96)** in terms of price, so I'm going to name it cart_total, and its initial value will be zero, which is just fine. But if we wanted to change that, we could, of course, click on it and enter a new number. I'll also need to define a set of numeric variables to keep track of the quantities of each product that are in the cart. So let's create a new number variable, and this time, I'll call it number, and then we'll have one for each product: delicate, medium, bold, basil, garlic, and rosemary. There we are. Each one of these is set to a value of zero because at the beginning of the experience, the user hasn't added any bottles to their cart yet. We'll also add in some Boolean values, so these are going to control things like whether we can see certain [[Microsoft Products|products]] based on preferences, the preferences themselves, and also a set of Booleans to control which products actually show up in the cart at any specific time based on user input. First, let's create some Boolean variables for our three preferences named pref intense,
>
> **[3:09](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/creating-local-variables?u=76281980&t=189)** pref lighter,
>
> **[3:18](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/creating-local-variables?u=76281980&t=198)** and pref_experimental. Each of these preferences, by default, should be set to true, so we can set it to true on each one through this little toggle right here. We'll now add the visibility Booleans for our product cards that show up in the home screen. These will show or be hidden based on the user preferences chosen. Create a new Boolean variable and we'll name this prod for product_delicate. Of course, we're going to need six of these, one for each product. There we are. Now, it's taking us a while to type in all of these. We're going to have the same sort of Booleans, but instead of for the product cards, we're going to need some that control the visibility of items within our cart as well. What we can do inside of the local variables dialog is hold down our Shift key and select a set of variables that we want to duplicate, right-click and choose to duplicate variables.
>
> **[4:48](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/creating-local-variables?u=76281980&t=288)** There we are. The variables have been duplicated. Since we're dealing with a cart, we're going to change prod to cart, and of course get rid of that number two at the end. The only thing left to do is to switch false to true on all of the prod variable Booleans because we want everything in the product area to show up by default. However, nothing should show up in the cart right away until the user adds it, so those Boolean variables will remain false. Our initial set of variables is now complete and can be used within the design document. However, we still have some organizational work to do before making use of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[Microsoft Products|Products]] (2), [[Prototyping]] (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** open the (1), click on (1), toggle (1), right-click (1)
> **Code Identifiers:** cart_total (1), pref_experimental (1), product_delicate (1)
> **Tools:** figma (3)
> **Speakers:** - [instructor] (1)

#### [Organizing variables into groups](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/organizing-variables-into-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/organizing-variables-into-groups?u=76281980&t=0)** - [Instructor] The proper organization of data is an important aspect of working with variables, as it is with other aspects of a [[Figma (Software)|Figma]] design document through the use of pages, sections, and frames. We can further organize our variables within each collection into named groups for even better recognition. As you can see right now, inside of the variables dialogue, it has all variables inside of a collection named Collection 1. Let's organize these into groups. So we have our preferences right here. If I hold down the Shift key and click on all the preferences, I can highlight them all, right click and choose new group with selection. I now have a new group that contains only my preferences variables. Let's rename this new group. If I double click on the new group name, I can give it the name of Preferences. Click on all variables once again to access all the variables in that group and without. We're also going to define some variables that go along with everything to do with our cart, including the cart total, and the quantity of items for each product that exist in the cart. Once again, holding down the Shift key, we'll choose cart_total,
>
> **[1:33](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/organizing-variables-into-groups?u=76281980&t=93)** all the way down to num_rosemary. Right click and choose new group with selection, double click on new group and rename it to Cart. We'll also create a group for all of the Boolean values that control visibility, both within the cart and within the home screen. For that, we'll choose prod_delicate, all the way down to cart_rosemary. You'll notice here that Figma does this very smart. When you choose all variables, anything that's in a group shows up with a group header below anything that isn't yet in a group. It makes it very easy to select these items. With these items selected, right click, and again, new group with selection. We'll name this group Visibility. All of our general variables are now organized into meaningful groups for more precise identification as we work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (2)
> **Code Identifiers:** cart_total (1), num_rosemary (1), prod_delicate (1), cart_rosemary (1)
> **UI Navigation:** click on (4)
> **Tools:** figma (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Adding variable collections](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-variable-collections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-variable-collections?u=76281980&t=0)** - [Presenter] Collections in [[Figma (Software)|Figma]] are a mechanism through which sets of variables can be organized as defined clusters, set apart from one another. Whenever you create new variables, they're automatically added to the default collection, but you can establish additional collections for specific purposes in your design file. We'll create a new collection of variables to represent our product pricing within the design. Note that we have a default collection already defined, Collection 1. It's important to note that you cannot move variables between collections, so you have to be intentional about the collections you create and the variables you create within them. We'll rename this collection to General. Using the More options button to the side, choose Rename Collection, General. To create a new collection, we use the same menu, More options, and choose to Create collection. We now have an empty collection named Collection, and we're prompted to create a variable, but before we do that, let's go ahead and give this a specific name. This is going to be all about our product pricing, so let's name it Product. We can now switch between our general collection of variables and the product collection,
>
> **[1:35](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-variable-collections?u=76281980&t=95)** which doesn't have any variables quite yet. Let's go ahead and create those variables right now. Click on Create variable, and for this we're going to choose Number because these are going to represent prices for each product. We're going to have a price for each particular variant of our olive oil product. So, price_delicate, and we'll set that value to $25. Price_medium, which is a little bit cheaper at $24. You'll notice that the prices displayed within our design are not updating. The text elements present within each frame will not update to reflect these variable values until we bind them to variables in the movies that follow. price_bold, which is a more complicated process. It takes more materials, so it's a little higher in price at 26.
>
> **[2:51](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-variable-collections?u=76281980&t=171)** price_basil, this is the most expensive to produce at $28.
>
> **[3:04](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-variable-collections?u=76281980&t=184)** Then we have price_garlic, which is the least expensive of our experimental flavors at $25. And then sitting between these two, price_rosemary, which is going to be $27. Variables within the product collection don't really require any groups as our other collection does because there are so few of them, and it's so focused.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (1)
> **Code Identifiers:** price_delicate (1), price_bold (1), price_basil (1), price_garlic (1), price_rosemary (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)
> **Tools:** figma (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [presenter] (1)

#### [Working with variable modes](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variable-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variable-modes?u=76281980&t=0)** - [Instructor] Even though we haven't created any groups for variables within the product collection, there is one other feature that will be very useful here. Modes. Modes allow us to define alternative sets of values for specific variables. The ability to use modes depends upon your subscription. Modes cannot be used in draft design files. Those files must be part of a project, defined within [[Figma (Software)|Figma]]. We'll create a new mode to prototype a sale through a decrease in the price assigned to each product. To create a new mode, you have to scroll over a little bit, within this tiny little window here. You've got this other column where you can create a new variable mode and also access your Edit Variable dialog, which we'll look at in a little bit. For now, we're going to click New Variable Mode and it shows up as Mode 2. All of the variable values are duplicated, so if we scroll over to Mode 1, we can see that the values are the same. We're going to rename Mode 1 to Regular because these are the regular prices for our [[Microsoft Products|products]]. Mode 2, we're going to rename to Sale, and of course, we'll adjust the price
>
> **[1:36](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variable-modes?u=76281980&t=96)** to represent that sale by changing the variable values. Again, note that any text elements in our design are not updating quite yet. We'll bind all the price variables to these text elements in the next movie. We'll drop everything by about a dollar, so 25 becomes 24. The medium price goes from 24 to 23. For bold, we'll drop it down to 25. Basil will go to 27, garlic to 24, and Rosemary goes down to 26. I'm going to close the Local Variables dialog temporarily, where we can see how to switch modes inside of the design workspace. So if I choose one of the product pages here, such as Delicate, and look over in our Design Properties, you'll notice for the specific layer property, we have the ability to change variable mode. If I click on this, we can see that we have modes only available for our product collection, and inside of here, it's set to Auto, which is going to be the value, the initial value here, but we can switch it to Sale if we wish. And then over in the side, we can see that the Sale mode applies to everything inside of that container.
>
> **[3:11](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variable-modes?u=76281980&t=191)** Let's switch it back to Auto. If I click off of the Delicate frame, making sure nothing is selected, I again get access to my local variables. Notice you can also go through and change the variable mode for the entire page from Regular to Sale. Let's enter our local variables once again. We should note that at this time, modes cannot be switched by a user action while the prototype is running and can only be switched within the Design environment. Before we leave, let's have a look at those Variable Edit dialogs. So if we click on any of these, a small dialog opens where we're able to rename the variable, give it a small description, change its particular values for each mode, and we can also see where these variables can be applied within our Figma design file. Here, we're looking at numeric values, so things like corner radius, width and height, gap, and so forth. If we switch to our General collection, and go to visibility, we of course have these Booleans, and if we summon the Edit Variable dialog here, we can see that there's not a lot that that can be applied to,
>
> **[4:43](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/working-with-variable-modes?u=76281980&t=283)** because it's True or False. Each particular variable type can be applied to different design elements within your Figma design file. At this point, we have all our variables defined, grouped, and organized into collections and modes. We're ready to begin working with them in the design document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[Microsoft Products|Products]] (1)
> **UI Navigation:** go to (2), click on (2), switch to (1)
> **Tools:** figma (3)
> **Warnings:** note that (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Designing with Variables and Conditional Logic

[↑ Back to Table of Contents](#table-of-contents)

#### [Assigning variables to text elements](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/assigning-variables-to-text-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/assigning-variables-to-text-elements?u=76281980&t=0)** - [Instructor] We've defined a set of numeric variables that represent the prices of various [[Microsoft Products|products]], the quantity of each product added to the shopping cart, and the overall shopping cart total. Variables can be assigned directly to text objects within the design workspace. Make sure you're within the design workspace and start with the home frame. Within the home frame, we have a number of cards which represent our different products. And inside this mock-up design, they all share the same price. We want these text fields to represent the actual prices from the variables we've established. What we'll do is double click on one of these card instances until we get down into the actual numeric value 30. We can see this over in our layers panel here. Within a price component, we have a dollar sign, which is to be static text. We're not going to mess with that, but we also have the actual price. So with that price selected, if we look over to our text area of the design workspace here, there's this little symbol. This allows us to apply a variable to our text. If we click on this, we get a list of the different variables, variable groupings, and collections that we created.
>
> **[1:35](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/assigning-variables-to-text-elements?u=76281980&t=95)** We want to find the price of the delicate olive oil, which we can see a preview of that value right there, 25. If I click on this, our text field automatically adjusts to represent that variable value. We'll go down and do the same for every one of our cards here. Price medium, price bold, basil, garlic, and finally, rosemary. Each one of these cards gives the true price of the product. In a similar way, we're going to want to do this to each of the detail screens for each product, and they're set up in the same exact way. If we click on the price, which is represented by 30 right now, we can apply a variable to this as well. Once again, price delicate and so on. Notice that inside the variables that are presented to us, we only have variables that are numeric in nature. That's because those are all that can be applied
>
> **[3:09](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/assigning-variables-to-text-elements?u=76281980&t=189)** to this particular type of object inside of [[Figma (Software)|Figma]]. Finally, we'll go down to our cart and there are a number of things to apply here. We'll start with the prices, since we're already there. We have our product list, and inside the product list are different component instances that represent each product, and that of course includes a price. These variables are assigned in the exact same way as we've already done. In addition, we have our cart total, and if you recall, we created a variable for this also, cart total, which right now equals zero, so nothing really changes. However, we can see right here that it is bound to our cart total variable. We can always unlink it through the detach variable option. The last thing we need to do is adjust our product quantities inside of each list item. They will also match zero, and we're going to bind those to the number or num variables, so num delicate, num medium, and so on. Now, when variable data is adjusted
>
> **[4:44](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/assigning-variables-to-text-elements?u=76281980&t=284)** within a running prototype through the user interaction, the text associated with these variable bindings will automatically adjust to display the new values. This is also a great way to cascade values across the design in meaningful ways, even if you will not be [[Prototyping]] with the assigned variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Figma (Software)|Figma]] (1), [[Prototyping]] (1)
> **UI Navigation:** click on (4)
> **CLI Commands:** make (1), find (1)
> **Tools:** figma (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Prototyping with conditional logic](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/prototyping-with-conditional-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/prototyping-with-conditional-logic?u=76281980&t=0)** - [Instructor] Within the prototype workspace, we're able to do more than simply bind variables to visual design elements. We can perform conditional logic against variables and adjust the values of variables based upon user interactions. We'll look to the user preferences screen to set up our first few conditionals Focus on the preferences frame, which looks like this. Now, before we go into the prototype workspace, we want to spend a little bit of time inside of the design workspace because we're actually able to bind boolean values to our checkbox elements. We can see three different check boxes here. One, if the user would like to be offered intense flavors like bold. One, if they want to include lighter flavors, like Delicate. And then one, if they would like experimental flavors like basil, garlic, and rosemary. Notice for each of these right now, when I select one of these component instances, we can see in our design values here that we have a checkbox and it's set to clicked, so it's set to on. We could also set it to unclicked. These are just two variable states here. However, we also have the ability to assign a variable to this. The variable state will determine the state of the checkbox. So, if I click on Assign variable, here are our preferences. We want to bind pref_experimental
>
> **[1:37](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/prototyping-with-conditional-logic?u=76281980&t=97)** to this particular checkbox. We can see it's now changed. So, that click is bound to that particular boolean. We'll do the same thing to the other two. So, for lighter flavors, assign variable, pref_lighter. And for intense flavors, we'll choose pref_intense. We'll now switch to the prototype workspace. What we're going to do is test and see what the current value of each of these are on tap and then adjust it accordingly, switching from true to false, clicked to unclicked. So, selecting this first one here, intense flavors. There already exists a tap interaction, which by default, if we click on this, is going to change our clicked to an unclicked state. However, adding an additional tap interaction through this button right here is going to override that. So, now everything's going to be driven by our variables instead of by the actual tap interactions on the parent or main component. So, on tap, what we want to have happen when user taps on this is we want to perform some conditional logic. There are many things that you can choose to assign here,
>
> **[3:11](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/prototyping-with-conditional-logic?u=76281980&t=191)** like setting variables directly, which we'll of course do in this course. But for right now, we want to perform some conditional logic. When you choose conditional, you can choose an if-else statement to populate. And what is our condition? We want to check if pref_intense is equal to true. So, if this is true, which is the default state, then we want to add an action underneath this if. And that action is going to be to set our variable, pref_intense once again to false, basically switching it from true to false and changing the state since we've bound that state in the design workspace to that checkbox instance. The else statement will fire off in case pref_intense is equal to false. So, if it's true, this happens. If it's false, then of course, we want to set our variable and it's going to be pref_intense. And instead of setting it to false, we're going to set it to true. This is going to allow us to basically create a checkbox toggle which is driven by our variable values.
>
> **[4:46](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/prototyping-with-conditional-logic?u=76281980&t=286)** Notice, a conditional is represented by this icon as a trigger on our element. The other two check boxes are set up in the exact same way. So, for lighter, we choose to add an additional tap, which works on a conditional. This time, we check against pref_lighter and see if that is equal to true. If it is, then we add the action to set a variable, pref_lighter to false. And if pref_lighter is not equal to true, then the else action fires, and we can set our variable of pref_lighter to true. We do the same thing to this last checkbox.
>
> **[6:03](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/prototyping-with-conditional-logic?u=76281980&t=363)** Except this time, of course, we do it for pref_experimental. It's basically the same thing each time. Let's try it out. I'm going to select Preferences, adjust this to preview and launch a preview. Now, as I click on each one, the conditional fires and changes from its current state to its opposite. Eventually, these user preferences will determine which [[Microsoft Products|products]] appear to the user based upon their preferences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Code Identifiers:** pref_lighter (5), pref_intense (5), pref_experimental (2)
> **UI Navigation:** checkbox (7), click on (3), switch to (1), toggle (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### [Developing a reset function](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/developing-a-reset-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/developing-a-reset-function?u=76281980&t=0)** - [Instructor] If a user wishes to reset their preferences to the default values, we can make this easy for them to do so through the use of a reset button. Resetting preferences in this case will make all [[Microsoft Products|products]] available to the user. We do not need any conditionals here. We instead simply assign Boolean values to all three preferences. So I'm going to choose my Reset button here and add a tap interaction to this button. Here we'll simply choose Set variable and find all of our preferences, pref_intense. Set that to true. Add another action to Set variable for the second preference, pref_lighter. Set that to true. And finally, a third variable for our third preference, pref_experimental. Set to true. When someone taps the reset button, all three variables will be set to true. Let's try this out. Choose the Preferences frame and click on Preview.
>
> **[1:36](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/developing-a-reset-function?u=76281980&t=96)** So if I make some choices here, those choices are reflected in my preferences. And if I hit Reset, it will reset all of those preferences to true, turning those check boxes back on. It's now very convenient for the user to reset all preferences to their default values within the prototype.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** pref_intense (1), pref_lighter (1), pref_experimental (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Controlling visibility with Booleans](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/controlling-visibility-with-booleans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/controlling-visibility-with-booleans?u=76281980&t=0)** - [Instructor] Earlier in this course, we were able to bind data values for product price and quantity to text elements within the design workspace. Now, we'll make use of the design workspace to set the visibility of various objects based upon the value of both the user preferences and cart visibility Booleans. Switch to the design workspace if you're not in it already, and focus upon the product cards within the Home frame. We're going to select individual cards and bind those visibility Booleans to them based on preferences. Let's start with Delicate. Now, this control is a bit more hidden than others, but it's very important when [[Prototyping]] with variables, as it allows you to show and hide objects based on these Boolean values. If we move over into the properties in our design workspace, and we go to our Layer section, we have the little eyeball for visibility, and of course, we can manually turn this off and on and our objects are going to either hide or be made visible based upon that. You can also right click on the eyeball in order to bind a Boolean to trigger a hidden or shown object. So for here, we want to show Delicate if pref_lighter is True and we want to hide it if it's False.
>
> **[1:34](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/controlling-visibility-with-booleans?u=76281980&t=94)** So we bind that Boolean variable to this particular object. The Medium card represents just regular olive oil. There's no preference that impacts this whatsoever, so we leave it be, it's always visible. Moving on to Bold, right click on the eyeball. And for this one, choose pref_intense. If someone has chosen to view intense flavors, they'll be presented with the Bold card, and if they don't want to see that, it'll be hidden from their view. For Basil, this will be controlled of course, through pref_experimental. Same with Garlic. And of course, the same with Rosemary. The visibility of all three of these more experimental flavored olive oils are determined by pref_experimental. That takes care of our product visibility. Let's move along to the cart. Now, inside of our cart, we have our invoice. If we double click there, we get a [[Microsoft Products|products]] list. And within our products list are component instances that include the name of the product, a minus button, a plus button, the quantity, which we already are binding a variable to,
>
> **[3:09](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/controlling-visibility-with-booleans?u=76281980&t=189)** and the price which we are already binding a variable to. What we want to do is make sure we have the entire instance selected, and then we'll do the same thing. Except this time, instead of basing it off a preference value, we're going to base it off of one of our visibility Booleans. So if I right click on the eyeball, we have visibility for product and visibility for cart. Since we're in the cart, this is where we want to go. So I'm going to choose cart_delicate. And as you can see in the design workspace, it's already gone. It's disappeared from view. Click on Medium, right click and choose
>
> **[4:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/controlling-visibility-with-booleans?u=76281980&t=240)** cart_medium. We'll do the same for each one of these, just binding it to its visibility property. Let's go ahead and test this. Go to Prototype and Launch. So initially, we see every product. Let's go to our Preferences and maybe we don't want to see the lighter flavors, and perhaps we don't want to see experimental flavors either. If I save, we'll return to the Home screen and then all I see are Medium and Bold. If I click on the Preferences again, reset our preferences and hit Save once more. Sure enough, we have access to every single one of these products. Note, inside of our cart, that with some of these Booleans initially set to False as they are, elements are hidden even in the design workspace. Other elements [[React.js|react]] and adapt per user interactions within the running prototype.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[Prototyping]] (1), [[React.js|React]] (1)
> **UI Navigation:** click on (5), go to (3), switch to (1)
> **Code Identifiers:** pref_experimental (2), pref_lighter (1), pref_intense (1), cart_delicate (1), cart_medium (1)
> **CLI Commands:** make (2)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Adding products to the cart](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980&t=0)** - [Instructor] In our design upon each product page there is already a button that navigates to the shopping cart screen. The idea here is that when a user clicks the Add to Cart button that the prototype performs a set of actions. We must update the quantity of the specific product and set the visibility for that product in the cart. Not only that, but we must perform the set of actions for each product, assuming we want them all to be functional. Note that we will need to temporarily adjust the visibility Boolean variables that control cart item visibility in order to work with them since they are hidden by default. Within the Design workspace click anywhere in the pasteboard to access local variables. Within the General variable collection in the Visibility group we want to set cart_delicate, medium, bold, basil, garlic, and rosemary to true. Again, this is temporary so we can work with these objects. If we look now in our cart the list items appear once again.
>
> **[1:26](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980&t=86)** Let's start with Delicate. Click on Add to Cart and switch back to the Prototype workspace. As you can see, we already have a few things here. There is a Tap Interaction, which takes us to the cart, and the Variant Interaction is a Hover Interaction, which changes from the normal state to a hover state. If we click on the Tap Interaction we can collapse the Navigate to Cart and then add in an additional variable. We're going to Set variable, and what we're going to do first is increase the num_delicate variable. And we want to set num_delicate to num_delicate plus one.
>
> **[2:23](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980&t=143)** There we go. Next, we're going to set the visibility of the line item in our cart to True. So, we'll add an action and set a new variable. This time we'll go all the way down to cart_delicate, and we'll set that to True. The last thing we want to do is increase the cart total based on the price of the Delicate product. So, what we're going to do is set a new action, Set variable, cart_total, and we're going to set that to cart_total plus, so Addition, and then find the price_delicate variable under Product. So, no matter what the total is it's going to increase by 25 in this case. Now we can collapse all of these, and once they're collapsed we can reorder them. So, what I want to do is move Navigate to Cart all the way to the bottom because I want to set these variables first and then proceed to navigate to the cart once they're set. That way it'll be all set up for the user once they get to the cart.
>
> **[3:56](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980&t=236)** Let's do this one more time within the video for the Medium product. Click on Add to Cart and choose Tap. Again, we already have a Navigate to Cart action right here. I'm going to collapse that and add a new action. The first thing we want to do is increase the number of Medium [[Microsoft Products|products]]. So, let's go ahead and Set variable, and this is going to be num_medium. We're going to set that to num_medium plus one.
>
> **[4:41](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980&t=281)** Add a new action. This time we'll control the visibility of that list item in the cart for the Medium product. Set variable, and this is going to be cart_medium and we'll set that to True. Finally, our last action is going to set a variable to increase the total in the cart based on the price of the Medium bottle we just added. So, we'll Set variable cart_total to cart_total plus price_medium, which happens to be 24.
>
> **[5:33](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980&t=333)** Let's give this a test. I'm going to choose my Delicate frame here and click Preview.
>
> **[5:45](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-products-to-the-cart?u=76281980&t=345)** Now if I Add to Cart we can see sure enough one has been added to Delicate in the list item, and the cart has increased to $25 from zero. If we had turned all of these Booleans off delicate would be the only one that shows. We'll, of course, take care of that after we do all of the [[Representational State Transfer (REST)|rest]]. If we go back home and go to Medium we can add a Medium bottle to the cart as well. There we go. Sure enough, we have one represented here, and the price has increased by $24, making it $49 in total. You'll want to do the same thing to each Add to Cart button for Bold, Basil, Garlic, and Rosemary. Clicking the Add to Cart button for each item will then add those items to the cart.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** cart_total (4), num_delicate (3), cart_delicate (2), num_medium (2), price_delicate (1)
> **UI Navigation:** navigate to (4), click on (3), go to (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Adding quantities to the cart](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-quantities-to-the-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-quantities-to-the-cart?u=76281980&t=0)** - [Instructor] Once we've added at least one product to the cart from one of the six product screens, we're able to manage the number of bottles for each product through a simple set of controls aligned with each listed item. We'll first handle the ability to add quantities to the cart by setting new data values for a product quantity and adjust the cart total as appropriate. Just like before, we'll want to do this for all six [[Microsoft Products|products]]. Select the Delicate list item, and within that list item, you'll find this little plus button. Sometimes it's easier to do things from the layers panel to make sure you have the exact instance you want selected. Plus button. We'll want to set two variables here on tap. So for interactions under the prototype workspace, we'll click the plus button and add an ONTAP action. From here we'll set a variable, which is going to take the number of delicate, so num_delicate and add one to it. So num delicate equals num_delicate + 1.
>
> **[1:27](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-quantities-to-the-cart?u=76281980&t=87)** We also need to increase the cart total each time we do this. So adding an additional action to this tap, and we're going to set variable once again and setting cart total equal to cart_total + price_delicate.
>
> **[1:55](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-quantities-to-the-cart?u=76281980&t=115)** Let's test this out. If I click on the cart frame and choose preview and click this button. Sure enough, with every click, the quantity changes and the total cart price changes. We'll want to do this for the remaining five list items Going down to medium. Once again, make sure you have the plus button instance selected within the medium list item and click to add an interaction. Within this tap interaction we'll add an action to set a variable and once more, we'll want to increase the quantity, this time of medium. So choose numb_medium, set it to numb_medium + 1. Add an additional action for the price adjustment, set variable cart total to cart_total + price_medium.
>
> **[3:09](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/adding-quantities-to-the-cart?u=76281980&t=189)** You'll want to go on and do the same thing for bold, basil, garlic, and rosemary. Once complete, we'll now be able to add additional bottles to each product and the quantity will be reflected in the user interface. The cart total is updated to reflect the change in quantity based upon the product price.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Code Identifiers:** num_delicate (2), cart_total (2), numb_medium (2), price_delicate (1), price_medium (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** select the (1), click on (1)
> **Prerequisites:** make sure you have (2)
> **Env Vars:** ontap (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Removing quantities in the cart](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=0)** - [Narrator] Removing the quantity of bottles for each item displayed in the cart is a bit more complicated than increasing the quantity. Aside from decrementing the quantity variables and updating the cart total, we'll also need to hide the list item entirely if the quantity ever reaches zero. We'll start with the delicate minus button. Inside the product list, choose the delicate list item and make sure to choose the minus button from the layers panel. We'll add an interaction through prototype workspace by clicking the add interactions button to add a tap interaction. And from here we want to initially set a variable. This is going to decremate the number of delicate bottles in the cart. So we'll choose set variable and we're going to set that to the number of delicate that we currently have, minus one. So basically the inverse of what we initially did with the plus button, setting the quantity, num_delicate to num_delicate - 1. We'll then make that same adjustment to the price. This time, once again, just decremating the price from the total of the cart. Add an action. Set a variable.
>
> **[1:32](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=92)** This is going to be cart total. We're going to set it to cart total, minus, so subtraction, and we're going to remove the price of a delicate bottle. So finding price_delicate and choosing that. So what we have right now is basically the inverse on the minus button of what we did for the plus button. However, as noted, we do need to do some additional checks to see if we're at zero or not. If we are at zero, we obviously don't want to decrement anymore because then our quantity will be a negative number, which doesn't make any sense. Also, we'll want to remove the item from the list visibly since it doesn't exist anymore in the cart. For this, we'll use a conditional, so add an action, choose conditional, and again, we see our if/else conditionals here. In this case, we're going to only use the if condition and that condition is going to be, if the number of delicate bottles is equal to zero,
>
> **[2:51](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=171)** then we'll add an action to set a variable. That variable is going to be cart_delicate. We're going to set that to false, and there we have it. Initially, we decrement the number, the quantity by one for that particular product. We remove the price of that product from our cart total, and then we check and see, are we at zero quantity? If we are, then we want to simply hide that entire list item from our cart. Of course, the user will be able to go back in to the product details page and add it once again if they desire. Let's run through that one more time with the medium minus button,
>
> **[3:55](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=235)** locating the minus button right here on our layers panel and adding a tap interaction to set a variable for the number of medium bottles. Set it to num_medium - 1. Then we set a new action to set a variable. This time we're dealing with our cart total, and we want to set that to the cart total minus the price of a medium bottle. So we'll find price_medium and select that. Finally, we'll add in our conditional statement, checking here to see if the number of medium bottles is equal to zero. If it is, then we want to make sure to set our variable of carts_medium, which determines visibility for that medium list item. We're going to set that to false. You're going to want to do this for the last four items as well, bold, basil, garlic, and rosemary. All right, as you can see, I've gone ahead and added all of this logic to every other one of these cart items. Let's go ahead and test out the experience.
>
> **[5:30](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=330)** Before we do so, though, we're going to have to set those cart visibility Booleans back to their default value of false in order to let actions within the prototype determine their visibility based on the user's intentions. So I'm going to go back to my design workspace, open up my local variables, and then under visibility, turn all of my cart visibility options back to false.
>
> **[6:07](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=367)** Recall that we also created a group of product display Booleans that can be used to perform additional visibility actions for our [[Microsoft Products|products]], such as when a product may be out of stock or in other use cases. While we do not employ these variables directly in this course, they exist for you to experiment with and take things a bit further if desired. Let's also go ahead and switch modes to use our sale mode pricing structure. Inside of our page right above local variables here, we can set the mode for the entire page to our sale prices. And sure enough, if we look up here, the prices now reflect our sale values for that mode. We'll now run through and test the entire prototype. Go to prototype mode, and for splash begin, hit launch.
>
> **[7:15](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=435)** Here's our welcome screen. Let's go ahead and change some preferences. I don't want to see lighter flavors, so I'm turning that off. Hit save. Sure enough, I don't get my delicate flavors anymore. Let's add some bold to the cart. That sounds pretty good. Once I add that to the cart, I can see I have one bottle of bold and it's $25 as my cart total. If I go back home, let's buy some basil-flavored as well. I'm going to add that to my cart. Sure enough, there it is. Let's add one more. I'll go back home, scroll down, and let's go with some rosemary. Add that to the cart. Perfect, perhaps I want some additional bottles of basil, and maybe one more bottle of bold, and it might be that I don't really want any rosemary. I've changed my mind. So let's click that minus button. Sure enough, the rosemary goes away and the cart reflects the new price. I can continue to make adjustments to this as much as I like until I'm happy with my choices. At that point, I can check out and there we go.
>
> **[8:53](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/removing-quantities-in-the-cart?u=76281980&t=533)** The prototype is now complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Code Identifiers:** num_delicate (2), price_delicate (1), cart_delicate (1), num_medium (1), price_medium (1)
> **CLI Commands:** make (5), find (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Best Practices:** make sure to (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/figma-designing-with-variables-and-conditionals/what-s-next?u=76281980&t=0)** - [Narrator] With the course concluded, you should have a lot of ideas on how you can apply variables and conditionals to your own interactive prototypes using [[Figma (Software)|Figma]]. This set of features is very exciting and is sure to gain more functionality in future releases. In this course, we created a set of numeric and Boolean variables within an existing Figma Design document and organized them using collections, groups, and modes. We proceeded to use both design and prototype workspaces to either bind those variables to design elements, like text values or object visibility, and also bind actions to user interactions to set variable values, make conditional choices based on those values, and calculate new values across the prototype. All of this adds an additional level of realism to the overall [[User Experience (UX)|user experience]]. I'm Joseph Labrecque, and I hope you enjoyed working with variables and conditional statements using Figma. Thank you for joining me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[User Experience (UX)|User experience]] (1)
> **Tools:** figma (3)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Joseph Labrecque]]

## Path Context

### In [[Design User Experiences with Figma]]
← [[Accessibility and Inclusion with Figma]] | **4 of 6** | [[Designing Microinteractions with Figma]] →

## Appears In

- [[Design User Experiences with Figma]]

---

[↑ Back to top](#)