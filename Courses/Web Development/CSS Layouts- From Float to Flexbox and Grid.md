---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: css-layouts-from-float-to-flexbox-and-grid
url: "https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 10/21/2025
learners: 5568
skills:
  - CSS Grid Layout
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHliL819SNhiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668687340?e=2147483647&amp;v=beta&amp;t=b48vZ4onuKXTSIizDzljCLkawojHNuI4ucBSaNTDaCY"
linkedin_topic: Web Development
learning_paths:
  - '[[Learn CSS]]'
prev_courses:
  - '[[CSS- Variables and Fluid Layouts]]'
next_courses:
  - '[[CSS- Print Style Sheets]]'
path_nav: '[{"path":"Learn CSS","position":11,"total":12,"prev":"CSS- Variables and Fluid Layouts","next":"CSS- Print Style Sheets"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/css-grid-layout
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS%20Layouts-%20From%20Float%20to%20Flexbox%20and%20Grid.md)

![CSS Layouts: From Float to Flexbox and Grid](https://media.licdn.com/dms/image/v2/C4E0DAQHliL819SNhiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668687340?e=2147483647&amp;v=beta&amp;t=b48vZ4onuKXTSIizDzljCLkawojHNuI4ucBSaNTDaCY)

# CSS Layouts: From Float to Flexbox and Grid

> For decades, CSS developers fiddled with floats to create flexible layouts that worked across browsers. But their brilliant hack had a lot of downsides. The latest generation of CSS specs offers a better and vastly more intuitive set of tools, but moving from floats to Grid, Flexbox, or both means adjusting how you think. In this course, Christina Truong guides you though this process, from initia

> [LinkedIn Learning](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid) | 1h 42m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. An Overview of Page Layouts**](#1-an-overview-of-page-layouts) (3 videos)
  - [Layouts with HTML](#layouts-with-html)
  - [Layouts with CSS](#layouts-with-css)
  - [Browser support and CSS standards](#browser-support-and-css-standards)
- [**2. Float, Display, and Position**](#2-float-display-and-position) (10 videos)
  - [Inline and block elements](#inline-and-block-elements)
  - [The box model properties](#the-box-model-properties)
  - [The display property](#the-display-property)
  - [The box model and layouts](#the-box-model-and-layouts)
  - [The float property](#the-float-property)
  - [Clearing floats](#clearing-floats)
  - [Setting up your project](#setting-up-your-project)
  - [Exercise: Build a layout with float](#exercise-build-a-layout-with-float)
  - [Position: Relative and absolute](#position-relative-and-absolute)
  - [Position: Fixed, sticky, and static](#position-fixed-sticky-and-static)
- [**3. Flexbox**](#3-flexbox) (8 videos)
  - [Getting started with Flexbox](#getting-started-with-flexbox)
  - [Orientation with flex-direction and flex-wrap](#orientation-with-flex-direction-and-flex-wrap)
  - [Flexible sizing](#flexible-sizing)
  - [Sizing multiple flex items](#sizing-multiple-flex-items)
  - [The order property](#the-order-property)
  - [Nesting flex containers](#nesting-flex-containers)
  - [Exercise: Build a layout with Flexbox, part 1](#exercise-build-a-layout-with-flexbox-part-1)
  - [Exercise: Build a layout with Flexbox, part 2](#exercise-build-a-layout-with-flexbox-part-2)
- [**4. Grid**](#4-grid) (7 videos)
  - [Grid vs. Flexbox](#grid-vs-flexbox)
  - [Grid, grid systems, and CSS Grid](#grid-grid-systems-and-css-grid)
  - [Create a basic Grid layout](#create-a-basic-grid-layout)
  - [Columns, rows, and gutters with Grid](#columns-rows-and-gutters-with-grid)
  - [Positioning with Grid](#positioning-with-grid)
  - [Exercise: Build a layout with Grid](#exercise-build-a-layout-with-grid)
  - [Exercise: Create a sticky footer with Grid](#exercise-create-a-sticky-footer-with-grid)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps and resources](#next-steps-and-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/welcome-26990147?u=76281980&t=0)** - Creating page layouts is one of the cornerstones of writing CSS, and it's gone through a lot of changes since the early days of [[HTML]] tables. From floating and positioning elements to creating rows and columns, there are many different options. Hi, I'm Christina Truong, and I've been building websites for almost 20 years. Together, we'll explore working with floats and all its quirks, how to use the position property for laying out smaller page components, and how to transition to modern CSS with Grid and Flexbox. By the end, you'll understand the difference between the various techniques, and how to support new and legacy projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** css (2), html (1)
> **Speakers:** - creating (1)

#### [What you should know](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/what-you-should-know?u=76281980&t=0)** - [Instruktor] Da biste izvukli maksimum iz ovog kursa, ne morate biti stručnjak za [[HTML]] ili CSS. Fokusiraću se na različite tehnike CSS rasporeda iz temelja, tako da će biti nekih instrukcija o osnovnim temama. Ali preporučuje se osnovno znanje o HTML i CSS sintaksi i nekim osnovnim konceptima. Trebalo bi da budete u stanju da imate opšte razumevanje ovog primera koda. Ako u bilo kom trenutku imate bilo kakvih pitanja o HTML-u ili CSS-u, preporučujem da prvo pogledate [[HTML Essential Training]] i CSS Essential Training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Env Vars:** css (5), html (4)
> **Speakers:** - [instruktor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/using-the-exercise-files-26971303?u=76281980&t=0)** - [Christina] The exercise files for this course can be found underneath this video, next to the instructor details. Click the show all link to download the zip file. You can also get a copy from my [[GitHub]] account. Just select code, then download zip. Unzip the folder, and save it somewhere easy to find, like your desktop. We'll also be linking to a lot of online resources and examples, so for your convenience a links PDF is also included in the exercise files. As we're going through the course, the exercises will be presented in two formats. The first will be small code samples using an online tool called [[CodePen]], which is great for experimenting and seeing the output right away. All of the CodePen exercises in this course can be found in my collection. You're not required to sign up for the service, but if you'd like to keep a personal copy, then you'll need to sign up for a free account. The second format will be building out page layouts with different techniques in a text editor. I'll be using Visual Studio Code, but you can use any editor you prefer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (2), [[GitHub]] (1)
> **Exercise Files:** exercise files (2), download the (1), zip file (1)
> **CLI Commands:** unzip (1), find (1)
> **Tools:** github (1), visual studio (1)
> **Prerequisites:** required to (1), you'll need (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [christina] (1)


### 1. An Overview of Page Layouts

[↑ Back to Table of Contents](#table-of-contents)

#### [Layouts with HTML](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=0)** - [Instructor] In the early days of the web, it was common to use [[HTML]] Tables for page layouts because of its ability to create columns and rows. As CSS matured, it became standard practice to separate content from style, and eventually, it became a recommendation not to use tables for layouts. HTML Tables were originally intended for tabular data, and can still be used for this purpose. Let's look at a basic table layout on [[CodePen]]. Before we jump in the code, I just want to make a change to the Editor setting in CodePen. I'm going to select this Change View button and dock my code panels to the left. I'll also minimize the JS panel as well, since we won't be writing any [[JavaScript]]. And then I'll just resize this panel as well. Okay, let's look at this table. This is an example of displaying content as tabular data. It could be a list of names or maybe addresses. Basically, data that you would display similar to a spreadsheet layout. Each of the tr tags are used to create the table rows, and in each row, the th tags are used for table headings, and the td tags are used for table data. There used to be quite a few attributes for adding styles that are now deprecated and no longer supported. But as you can see, CSS can be applied to these table elements, just like any other element. Traditionally, the call span and row span attributes were added to make the table cells span across columns and rows.
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-html-26980336?u=76281980&t=94)** If I wanted to make this td tag span across both rows to create a sidebar look, I would add rowspan to the first td. (mouse clicks) (keyboard clicking) And I'll set that value to 2 so it gets spanned across both rows. Then I would have to remove this table data in the second row, because the one we added the rowspan to is now taking up both spots. This was great for building layouts, but using too many row spans and call span attributes as well as nested tables introduced accessibility issues. Screen readers may have issues navigating from one area to another in logical order. Back in the day, tables versus CSS was a big debate, but these days, the only time you'll see tables used extensively is with HTML emails. Different email applications have a variety of rendering engines, so, emails have to be built for the lowest common denominator, which means, older techniques such as tables and inline CSS must be used. If you find yourself in a situation where you have to use tables for more than just displaying some data, here is an extensive guide on CSS tricks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[CodePen]] (2), [[JavaScript]] (1)
> **Env Vars:** css (5), html (3)
> **CLI Commands:** make (3), find (1)
> **Analogies:** similar to (1), just like (1), such as (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### [Layouts with CSS](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/layouts-with-css-26966362?u=76281980&t=0)** - [Narrator] CSS includes a variety of layout methods. In this course, we'll cover these techniques. The normal flow, which defines the default layout behavior before any CSS is added. Floats, which was a technique used to create page layouts as we moved away from [[HTML]] table based layouts. Positioning is also used to move elements from the normal flow, but it's generally used for smaller components within a page layout. Flexbox introduced more efficient ways to align and distribute content in either columns or rows. Grid allows for more complex layouts since page content can be arranged in columns and rows at the same time. The multi-column layout is another newer technique that allows content to be displayed in newspaper style columns. It's not as commonly used for page layouts, so I won't be covering it in this course. But if you'd like to learn more, you can view these examples from the MDN, Mozilla Developer Network, web docs. You can also check out the official and latest published version maintained by the W3C. Each layout technique has its own purpose and understanding what each method is designed to do will help you choose the best layout solution for the task at hand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** css (2), html (1), mdn (1), w3c (1)
> **Documentation:** mdn (1), w3c (1)
> **Speakers:** - [narrator] (1)

#### [Browser support and CSS standards](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=0)** - [Instruktor] Na ovom kursu ću mnogo govoriti o starijim tehnikama i novijim tehnikama, a upravo sam spomenuo W3C u poslednjoj lekciji. Ali ko su oni tačno? Pre nego što pređemo na CSS rasporede, hajde da razgovaramo malo o tome gde se ovi standardi formiraju i kako odrediti šta je staro, a šta novo. Vorld Vide Veb konzorcijum ili skraćeno V3C je međunarodna zajednica koja se sastoji od organizacija članica, osoblja sa punim radnim vremenom i javnosti. Oni su odgovorni za razvoj veb standarda, smernica i tehničkih specifikacija. Poboljšanjima i standardizacijom CSS-a upravlja V3C CSS radna grupa. Sve specifikacije su javno objavljene na sajtu V3C-a, uključujući prošle, trenutne i radne nacrte. Tako da možemo da pogledamo istorijske specifikacije, pročitamo trenutne specifikacije, a takođe vidimo šta je u izradi gledajući nacrte. Kada gledate ove publikacije, obavezno obratite pažnju na statusne kodove, koji se koriste da ukažu u kojoj fazi je određena specifikacija. Proces standardizacije se uglavnom sastoji od šest faza. Samo pripazite na preporuku. To su dobri i trenutni su standard za veb. Kandidat i predložene preporuke su postavljeni da postanu formalizovana V3C preporuka, ali i dalje zahtevaju konačno odobrenje. Standardi u ovoj fazi su generalno u redu da počnu da se
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/browser-support-and-css-standards?u=76281980&t=94)** sprovode, ali samo imajte na umu da je to tehnički još uvek rad u toku. Radni nacrti su eksperimentalni u ovoj fazi i možda neće raditi u svim pretraživačima. Oni su podložni promenama i mogu čak biti potpuno uklonjeni. A zamenjena preporuka je specifikacija koja je zamenjena novijom verzijom. Ne morate da čitate sve publikacije V3C u celini da biste naučili i bili u toku sa CSS-om. Postoje mnogi drugi resursi i tutorijali koji su lako dostupni na mreži, ali pomaže da se s vremena na vreme proveri zvanični vodič. While the specifications Iako su specifikacije u različitim fazama standardizacije, are at the various phases of standardization, podrška pretraživača takođe varira. browser support varies, too. [Caniuse.com](https://Caniuse.com) is great reference for checking browser support [Caniuse.com](https://Caniuse.com) je odlična referenca za proveru podrške pretraživača za određene osobine i module. for specific properties and modules. You can do a search for a specific CSS property. Možete da uradite pretragu za određenu CSS imovinu. The results will show browser support Rezultati će pokazati podršku pretraživača i sve srodne informacije. and any related information.

> [!info]- Semantic Content
>
> **Env Vars:** css (6), v3c (5), w3c (1)
> **URLs:** [caniuse.com](https://caniuse.com) (2)
> **Documentation:** w3c (1)
> **Speakers:** - [instruktor] (1)


### 2. Float, Display, and Position

[↑ Back to Table of Contents](#table-of-contents)

#### [Inline and block elements](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=0)** - [Pripovedač] Normalan tok je način na koji pretraživač podrazumevano postavlja [[HTML]] elemente kada CSS nije primenjen. Elementi su prikazani u istom redosledu u kojem se pojavljuje u HTML-u. Većina elemenata će se pojaviti naslagani jedan na drugi i poznati su kao elementi na nivou bloka. Neki uobičajeni primeri su elementi sekcije, kao što su zaglavlje i stranu, kao i naslovi, paragrafi i liste. Postoje i drugi elementi koji se prikazuju unutar horizontalne linije, rame uz rame. Oni se nazivaju inline elementi, i mogu biti uključeni u blok element, kao link u paragrafu ili samostalno. Nešto što treba napomenuti, kategorija blokova na nivou u odnosu na inline elemente je korišćena u HTML specifikacijama do verzije 4.01, ali u HTML5, ovo je zamenjeno složenijim skupom kategorija sadržaja grupisanih po sličnim karakteristikama. Kategorizacija elemenata na nivou inline i bloka i dalje se primenjuje u smislu CSS-a, koji ćemo dalje istraživati, ali možda ćete videti i određene elemente na koje se odnose ove HTML5 kategorije sadržaja. Kada koristite CSS za kreiranje rasporeda, elementi se udaljavaju od normalnog toka kako bi kreirali kolone i redove i postavili elemente u određene delove stranice. Međutim, možda ćete otkriti da su mnogi elementi na vašoj stranici u redu u normalnom toku. Na primer, za mobilne rasporede, sa ograničenjem veličine ekrana, većina elemenata je ionako obično složena u jednu
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/inline-and-block-elements?u=76281980&t=94)** kolonu. Zbog toga je početak sa dobro strukturiranim HTML that lays all the content in a logical manner dokumentom koji postavlja sav sadržaj na logičan način is important for readability and accessibility. važan za čitljivost i pristupačnost. Organize the content first, Prvo organizujte sadržaj, a zatim koristite CSS da biste then use CSS to only change what you need. promenili samo ono što vam je potrebno.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Env Vars:** css (5), html (4), html5 (2)
> **Versions:** 4.01 (1)
> **Speakers:** - [pripoveda (1)

#### [The box model properties](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=0)** - [Instruktor] Sada kada smo malo razgovarali o normalnom toku, hajde da pričamo o tome kako ovi elementi međusobno deluju. Svaki element pretraživač posmatra kao pravougaoni okvir. CSS Bok model opisuje kako se ove kutije generišu za svaki [[HTML]] element. Postoji pet osobina koje se mogu koristiti za definisanje modela kutije. Širina se koristi za podešavanje širine područja sadržaja, koji sadrži stvarni sadržaj dodat između oznaka. Visina postavlja visinu područja sadržaja. Padding dodaje ili uklanja prostor unutar elementa. Margina dodaje ili uklanja razmak oko elementa. I granica se dodaje između oblaganja i margine. Pogledajmo kako se ove osobine primenjuju na blok i inline elemente. Blok elementi su iste visine kao i sadržaj sadržan između njihovih oznaka, ali oni obuhvataju celu širinu njihovog sadržanog elementa, čak i ako sam sadržaj nema. To je razlog zašto blok elementi uvek počinju na novoj liniji. Elementi na nivou bloka će se slagati jedan na drugi, ali će biti razdvojeni bilo kojim marginalnim prostorom. Ako dva susedna elementa imaju marginalni prostor, područje u kojem se dodiruju dve margine završava zauzimanjem istog prostora. To se zove urušavanje marže. Padding dodaje prostor unutar elementa, a margina dodaje prostor oko elementa. Dodaci oba će gurnuti ostale elemente dalje na vertikalne i horizontalne ose.
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=94)** Inline elementi zauzimaju istu visinu i širinu kao i sadržaj sadržan u njihovim oznakama. Elementi se poravnavaju jedan pored drugog, počevši sa leve strane, sve dok postoji prostor unutar elementa koji sadrži. Ako nema dovoljno prostora, onda će se tekst ili elementi pomeriti dole u novu liniju. Oblaganje i margina mogu se primeniti na ugrađene elemente, ali element će samo gurnuti okolne elemente dalje na horizontalnoj osi. Pogledajmo ove osobine u primeru. Jednostavan način da proverite da li je element blok ili inline je da dodate boju pozadine. Hajde da un-komentarišemo pozadinske stilove i za p i za selektor. Ako se boja proteže širinom kontejnera, to je blok element. Ako obuhvata samo veličinu sadržaja, onda je to ugrađeni element. Sada, hajde da pokušamo da dodamo svojstvo širine u paragraf. Takođe možemo da ga dodamo u vezu, takođe, ali ugrađeni elementi ignorišu svojstva širine i visine. Postoji određeni razmak između elemenata jer postoje podrazumevane gornje i donje margine na ovim oznakama pasusa. Ali primetite kako je razmak između paragrafa isti kao i razmak na margini na vrhu prvog paragrafa. Zapamtite, kada su dve margine susedne, one zauzimaju isti prostor, inače poznat kao urušavanje margine. Hajde da povećamo marginu na svim stranama paragrafa. Elementi će sada biti premešteni vertikalno i horizontalno
>
> **[3:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-properties?u=76281980&t=188)** kako bi se prilagodio dodatni prostor. Isto je i sa podstavom. Kada se margina primeni na ugrađene elemente, oni će biti premešteni samo horizontalno. Isto je i sa podstavom. The display property can be used Osobina prikaza može biti korišćena da se podesi ovo to adjust this default behavior. podrazumevano ponašanje. Let's talk more about display in the next lesson. Hajde da pričamo više o prikazu u sledećoj lekciji.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** css (1), html (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instruktor] (1)

#### [The display property](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=0)** - [Instruktor] Da biste napravili promene rasporeda, mnoge metode, ali sve, koristite svojstvo prikaza. Blok, inline, i inline-blok vrednosti menjaju podrazumevano ponašanje prikaza elemenata u normalnom toku. prikaz se takođe koristi za pokretanje rasporeda Grid i Flekbok, o čemu ćemo detaljnije govoriti kasnije u ovom kursu. Hajde da otvorimo vežbu i testiramo različite vrednosti prikaza. Trenutno, elementi koje koristim, odeljak, div i span, nemaju podrazumevane margine ili stilove oblaganja. Hajde da dodamo neke boje pozadine kako bismo lakše videli granice svakog elementa. Takođe možemo dodati elemente visine i širine, ali zapamtite, podrazumevano, inline elementi će ignorisati vrednosti visine i širine. Dakle, hajde da dodamo prikaz sa vrednošću bloka, prvo na inline elemente. Sada će se prikazati baš kao element bloka. Visina i širina se primenjuju, a elementi se slažu. Sada, hajde da pokušamo da podesite prikaz u liniji na element bloka, prikaz: u liniji i završimo ga tačka-zarezom. Sada, ovo će učiniti da se elementi bloka ponašaju kao ugrađeni element. Iako to može biti korisno u nekim slučajevima, postoji još jedna vrednost koja je korisnija za rasporede, inline-block. Ova vrednost će primeniti karakteristike i inline i bloka na elemente. Hajde da promenimo vrednost i za div i span selektore.
>
> **[1:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=96)** Tako da ću ga promeniti u inline-block, a sada se primenjuju vrednosti širine i visine, baš kao i elementi bloka, ali elementi su prikazani jedan pored drugog, baš kao i inline elementi. Postoje neke hirove sa ovom metodom. Iako nema margine ni na jednom od ovih elemenata, postoji mali razmak između elemenata. Ovo zapravo dolazi iz preloma reda u [[HTML]]-u. Ako stavimo oznake na istu liniju, prostor će biti uklonjen. Postoje i druge neobične ispravke kao što je korišćenje HTML komentara sa početnom oznakom u jednoj liniji i završnom oznakom komentara u sledećoj liniji. Iako ove tehnike uklanjaju razmaka, pisanje vašeg HTML-a ovako bi otežalo čitanje, pa hajde da samo preoblikujemo taj HTML. Još jedno rešenje za uklanjanje prostora je da koristite marginu sa negativnom vrednošću samo da biste je malo gurnuli. Hajde da dodamo našu osobinu margin-left, i negativna četiri piksela bi trebalo da bude dovoljno, i možemo dodati ovu osobinu i divu i rasponu. Ovo će raditi samo sa marginom, a ne sa paddingom, jer padding ne prihvata negativne vrednosti. Druga opcija je da se smanji razmak između elemenata postavljanjem osobine font-size na nulu u elementu kontejnera. Dakle, hajde da uklonimo negativnu marginu i umesto toga
>
> **[3:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=190)** dodamo nulu veličine fonta u kontejner. Ova tehnika će se osloboditi prostora jer se veličina fonta ne odnosi samo na slova i brojeve, već se odnosi i na znakove prostora. font-size je nasledni stil, tako da font-size će morati da bude ponovo deklarisan da bi potomački element premostio ovaj nasleđeni stil. Tako da možemo ponovo proglasiti veličinu fonta u div i span oznakama. Dakle, osim estetike, drugi put kada biste morali da uklonite taj prostor je ako ste koristili ugrađene elemente koji su bili određene širine unutar kontejnera koji je takođe bio određene veličine. Trenutno imamo četiri elementa koji su široki 200 piksela. Dakle, ako podesim širinu kontejnera na 800 piksela, svi elementi bi trebalo da se uklope, ali ako uklonim nultu veličinu fonta, dodatni prostor je uključen u stavke i više se neće uklopiti u kontejner. Kada su plovci još uvek bili primarni način za kreiranje rasporeda stranica, prikaz se često koristio za kreiranje for creating smaller components within the page. manjih komponenti unutar stranice. At the time, there were a lot of discussions U to vreme, bilo je mnogo diskusija o korišćenju prikaza u about using display versus floats for page layouts odnosu na plovke za raspored stranica, jer plovci takođe since floats also come with its own quirks. dolaze sa svojim kuirks. Here's an article that goes into detail Evo članka koji ide u detalje ako ste zainteresovani za if you're interested in the history of the display versus float conversation. istoriju razgovora o prikazu u odnosu na float. Fast forward to now, and it's really not necessary
>
> **[4:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-display-property?u=76281980&t=281)** Brzo napred do sada, i zaista nije neophodno više voditi to have this debate anymore ovu raspravu jer su Grid i Flekbok prilično zamenili prikaz since Grid and Flexbox have pretty much replaced i plovak za kreiranje rasporeda cele stranice, ali još uvek display and float for creating full page layouts, postoje neki slučajevi korišćenja za promenu ponašanja but there are still some use cases for changing the display behavior prikaza, kao što je stilizovanje ugrađenih elemenata sa such as when styling inline elements različitim svojstvima modela kutije. with various box model properties.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **Env Vars:** html (4)
> **Analogies:** such as (1)
> **Speakers:** - [instruktor] (1)

#### [The box model and layouts](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=0)** - [Instruktor] Važan deo kreiranja rasporeda bilo kojom tehnikom je razumevanje kako elementi zauzimaju prostor. CSS bok model uključuje pet svojstava koja se mogu koristiti za definisanje modela kutije. Sve ove osobine zajedno određuju ukupnu površinu svakog elementa. Pogledajmo primer. Trenutno imam samo div sa nekom bojom i visinom i širinom koja se primenjuje na njega. Hajde da dodamo u podlogu. Obratite pažnju da je element povećan u veličini, iako nismo napravili nikakve promene u širini ili visini. Element je sada veličine širine i visine plus prostor za oblaganje. Ako dodamo granicu, element će se takođe povećati. Ako dodamo marginu, to neće povećati veličinu elementa, ali povećava količinu prostora koji element zauzima. Kada elementi ostanu u svom normalnom toku, to ne utiče previše na podrazumevani raspored. Ali kada počnemo da kreiramo rasporede koji zahtevaju da se ove komponente poravnaju jedna pored druge, razumevanje kako ove osobine kutije zauzimaju prostor će biti neophodno da bi se osiguralo da se poravnaju kako se očekuje. Uobičajeno ponašanje može biti izmenjeno sa osobinom veličine kutije. Početna vrednost veličine kutije je content-box. To znači da kada se dodaju stilovi oblaganja i granica, oni povećavaju veličinu elementa. Međutim, vrednost okvira granice će gurnuti sadržaj prema unutra kako bi uključila prostor za oblaganje i granicu
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=94)** kako bi se održale vrednosti širine i visine postavljene u CSS-u. Margina samo dodaje prostor oko elementa i ne utiče na veličinu samog elementa. Ovo se često naziva popravkom modela kutije, a prvi put je dokumentovao Paul Irish. Da biste koristili ovaj popravak, dodajte isječak CSS koda svim svojim projektima na vrhu CSS datoteke. Ovaj isečak je već dodan u našem primeru kodnog pina, pa hajde da se vratimo i dodamo ga. Ukloniću komentare, a sada će element zadržati povećane vrednosti širine čak i kada je dodato oblaganje i granica. Postoji još jedna stvar koju treba da znamo o svojstvima i rasporedu modela kutije, posebno o osobini margine. Margina se koristi za dodavanje određene količine prostora oko elementa. Ali ako podesimo levu i desnu vrednost na auto, to će horizontalno centrirati naše elemente na nivou bloka linija. Hajde da se vratimo na [[CodePen]] i ažuriramo vrednost margine. Prvi broj se odnosi na gornje i donje vrednosti. Dakle, to bi moglo biti postavljeno na bilo šta. Ostaviću ga kako jeste. Drugi broj se odnosi na levu i desnu vrednost. Mi ćemo to podesiti na auto. Da bi ovo funkcionisalo, potrebno je podesiti našu širinu. Ovo sprečava element da se proteže po celoj širini svog from spanning the entire width of its container. kontejnera. If I was to remove it, Ako bih ga uklonio, ova kutija bi išla skroz preko. this box would go all the way across. So the element will span the specified width,
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-box-model-and-layouts?u=76281980&t=187)** Dakle, element će obuhvatiti određenu širinu, a preostali then the remaining space prostor će biti podeljen između dve margine koje će ga will be split between the two margins centrirati u svom kontejneru. which will center align it within its container.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (1)
> **Env Vars:** css (4)
> **Speakers:** - [instruktor] (1)

#### [The float property](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=1)** - [Narator] U ranim danima, veb stranice su često bile rekreacije uobičajenih rasporeda koji se koriste u štampanim medijima, kao što su brošure i časopisi. Svojstvo float je uvedeno za implementaciju jednostavnih rasporeda kao što je omotavanje teksta oko slike. Element se pomera levo ili desno od svog kontejnera i uklanja iz normalnog toka. Plutajući element menja ponašanje tog elementa i elemenata koji ga prate. Svojstvo float ima četiri vrednosti. Nijedan, koji određuje da uopšte nema plutanja i to je podrazumevana vrednost. Levo i desno, lebdi elemente levo ili desno. I naslediti, koji određuje da float vrednost treba da bude nasleđena od roditeljskog elementa. Pošto se float može primeniti na bilo koji element, nije prošlo mnogo vremena dok su čitavi rasporedi kreirani plutajućim delovima stranice, stvarajući kolone unutar traka. Sa standardizacijom flekbok-a i mreže, float se može vratiti da se koristi za svoju prvobitnu svrhu. Ali i dalje je korisno razumeti hirove korišćenja plovaka za izgled, bez obzira da li podržavate nasleđeni projekat ili samo plutate sliku. Pogledajmo primer olovke. Trenutno postoje dva odvojena razvoja sa klasom omotača. Svaki od ovih programera se koristi da sadrži elemente ugnežđene u njima. Proširiću svoj panel kako bih napravio više prostora za [[HTML]]. Tu je moj prvi omot i tu je moj drugi omot. U redu, hajde da nastavimo i dodamo plovak elementu slike.
>
> **[1:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=97)** Pomerite se nadole do linije 16 i odkomentarišite ovaj stil da biste dodali plovak. U redu, sada je moj tekst lebdio oko slike. Ali zapamtite, postoje dva programera kontejnera. Pa zašto bi se tekst u drugom kontejneru omotavao oko slike u drugom kontejneru? Hajde da dodamo stil granice u klasi omotača. Sada možemo da vidimo dva kontejnera malo jasnije. Takođe možemo dodati i dno margine samo da dodamo malo prostora između dva kontejnera. Sada možemo videti da će bilo koji element koji prati plutajući element popuniti prostor oko njega. Takođe, može izgledati kao da su paragrafi poredani pored plutajućeg elementa, ali on zapravo radi iza plutajućeg elementa. Hajde da dodamo ovu boju pozadine paragrafima. Takođe možemo dodati malo margine oko slike samo da dodamo malo prostora oko nje kako bismo pomogli da se ovaj efekat vidi malo lakše. Dodavanje boje pozadine pokazuje da paragraf zapravo radi iza plutajuće slike. Ali sadržaj unutar, stvarni tekst, će se uskladiti unutar raspoloživog prostora. Takođe primetite da je omotač obrisa samo oko paragrafa, ne plutajući elementi. Roditeljski kontejner će se srušiti kada se elementi plutaju i prepoznaće samo visinu neplutajućih elemenata. Dakle, da se vrati u normalan protok nakon što je element plutao moramo da obrišete plovak.
>
> **[3:14](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-float-property?u=76281980&t=194)** Ovaj primer ćemo ponovo koristiti u sledećoj lekciji, pa ga držite otvorenim da biste ga pratili. so keep it open to follow along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Speakers:** - [narator] (1)

#### [Clearing floats](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=0)** - [Instructor] Elements are floated, so other elements will wrap around it, but sometimes we need to be able to have control over which elements will wrap around the floated element. To return the elements back to the normal flow, use the clear property with one of the following values, left, right, or both. To decide which element to apply the clear to depends on where you want the layout to return to the normal flow. Let's go back to the code pin example from the previous lesson. I've already created a class for the clear, also named clear down on line 12. So we can add this to any element. The value is set to both to clear a left or a right float. So let's say I wanted just the first paragraph to wrap around the image. I can apply the clear to the second paragraph. So let's add that to the [[HTML]]. Here's my second paragraph, so I'll give it the class of clear, class equals clear in quotes. And now the elements will return to the normal flow from this point on. The image no longer appears outside of the boundaries of its wrapper. But what if you wanted the second paragraph to wrap as well? Then applying the clear here won't work. We could try adding it to the next element instead, the second wrapper. Let's remove the clear from here and add it to the second wrapper. When using multiple classes, just remember to add a space
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=95)** in between the different class names. Well, this kind of worked. The second wrapper has now been returned to the normal flow and appears underneath the image, but the parent element still doesn't wrap around the floated element. Let's hide the second container. In this scenario where there's no element to apply the clear to, we'll have to find another way. The clear must then be applied to the parent container instead. This is often referred to as self clearing, and there are three ways to do this. One way is adding this snippet, usually referred to as the clear fix hack. This involves using the content property and the after sudo element to generate a space after the element and applying a clear to it. This class is applied to the parent of the floated element. When adding the class to the HTML, don't include the after. This is a sudo element and is used in conjunction with another selector in the CSS. This fix is commonly referred to as the clear fix hack because when it was first created, that was the class name that was being used. But you can use any other class name. Just make sure it matches to the CSS and the HTML. Similar to the box model fix, this has been created and maintained by the developer community. It is gone through some iterations over the years as browsers have updated. CSS-tricks has an article documenting the history of this fix.
>
> **[3:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=189)** Another option is to use the overflow property. When size dimensions are added to a container element, there may be times where the content may extend past the dimensions and overflow. Different overflow values can be used to determine how to display the overflow of content. Hidden clips the overflow of content. Auto adds a scroll bar, but only when there is overflowing content. And scroll will always show a scroll bar on the x and y axis even when the content does not flow outside of its container. In the context of self clearing floats, hidden works best because it won't show any scroll bars. This option works fine in most cases, but if you need to use overflow for the purposes of maintaining overflowing content, then you may run into some issues. This option works fine in most cases, but if you need to use overflow for the purposes of maintaining overflowing content, then you may want to use another option. The newest solution for this issue is with the display property set to flow-root. It's supported by modern browsers, so unless you need to support older browsers, this is the recommended option. Let's go back to the example and try out these different methods. In this example, there's no overflow of content, so we were able to self clear the float in the parent element without clipping any content. In this case, we didn't have to worry about any overflowing content. So this method self cleared the parent element just fine.
>
> **[4:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/clearing-floats-26969324?u=76281980&t=283)** It now wraps around the floated image. Now let's hide the overflow property and use display with flow-root instead. This will also self clear the float in the parent element since this value was created specifically for this purpose. And now let's comment out the display property and try the clear fix option. I've already added the snippet to the CSS, so all we have to do is add the class name to the class attribute in the parent element. I'll add it after the wrapper class and that works as well. To recap, clear the float on the following sibling element if one exists in the layout. If one doesn't exist, then self clear the float on the parent element. Use the display flow-root option unless you need to support older browsers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **Env Vars:** css (4), html (3)
> **CLI Commands:** sudo (2), find (1), make (1)
> **Cross-References:** go back to (2)
> **Best Practices:** remember to (1), recommended (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Setting up your project](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=0)** - [Speaker] In this course, we're going to build the same layout using Float, Flexbox, and Grid to compare the different methods. In the exercise files, there's a start folder containing an [[HTML]] file and three CSS files. For each exercise, we'll use the same HTML and just swap out the CSS file. I like having backups, so I'm going to make a copy of the entire start folder. Then I'll rename this folder to layout exercises.
>
> **[0:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=38)** The other folders in the exercise files named by chapter and video numbers contain the final versions of each exercise. If you don't have access to the exercise files, you can also download them from my [[GitHub]] repo. Just select the clone or download button and download zip. I like having backups, so I'm going to make a copy of the whole start folder and then save the copy to my desktop and rename the folder to CSS layouts. These will be the files that I'll be working from for the remainder of these exercises. These other folders in the exercise files are named by chapter and video and contain the final version of each exercise for that chapter. Let's look at the index.html file in the browser and go over what we're going to build. You can use any browser you'd like. I'm using Firefox. The layout will be basic, but a commonly used layout. We're going to have the header and footer span across the top and the bottom, and then we're going to have the nav lineup on the left, main content in the middle and the sidebar on the right. Earlier, I mentioned having your HTML and content arranged in logical order. Well, the header and the footer are usually at the top and the bottom, and then what often follows the header is the navigation, but I've decided to add the main content first,
>
> **[2:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/setting-up-your-project-26973324?u=76281980&t=131)** and here's why. For accessibility, having the main content come before the navigation will help keyboard and screen reader users get to the content without moving through a list of navigation links, possibly a sub-list of links, search bars, or any other items normally added in the navigation or header area. This article on [webaim.org](https://webaim.org) goes into more detail about this, but they also recommend adding a skip navigation link that takes the user straight to the main content. And this will be especially useful for when we can't put the navigation after the main content. We'll talk more about that when we start adding to our float-based CSS. And speaking of CSS, let's look at what is currently there now. Let's open our project files in your text editor of choice. I'll be using Adam. Let's open up the index page and the float CSS file since we'll be working on this one first. All the CSS files have the same base CSS, and right now, there's just some simple styles, such as background colors for each section just to help us identify the boundaries of these elements. And I've also included some basic font styles and the border box fix. Alright, we got all our files ready-to-go. In the next lesson, we'll use float to create the page layout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[GitHub]] (1)
> **Env Vars:** css (8), html (3)
> **Exercise Files:** exercise files (4), github repo (1)
> **CLI Commands:** make (2)
> **Tools:** github (1), firefox (1)
> **File Paths:** index.html (1)
> **URLs:** [webaim.org](https://webaim.org) (1)
> **Cross-References:** in the next (1)

#### [Exercise: Build a layout with float](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=0)** - [Instructor] We'll first take a look at the [[HTML]] markup to decide which elements to apply the CSS styles to. We have a header nav tag at the top, followed by a main tag for the main page content. There is also an aside tag used for related sidebar content and the footer to close out the page. All of these components are contained within a div with a class of "container". For this exercise, we'll start by setting the width for the entire page layout. We'll do this by adding the style to the container element. Let's switch over to the float.css file. Using the existing container block down in line 21, we'll add the width property. I'll set this value to 1200 pixels and end it with a semicolon. I'll also add margin and set it to zero for the top and bottom and auto for the left and right. This will center align it horizontally. Let's save the file and switch over to the browser. Refresh the browser to see the changes. The width has been applied and the container is now center aligned, but since it's set to a fixed size, any viewport width or resolution smaller than 1200 pixels will not have enough space to display the content.
>
> **[1:38](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=98)** You'll need to scroll horizontally to see all of the content. Back when float-based layouts were used, [[Responsive Web Design]] wasn't a standard practice yet. The two common resolutions to target based on width were either 1280 pixels or 1024 pixels. To make this layout flexible for both of these sizes, let's go back to the CSS file and make an adjustment. We'll use the max-width property instead of width. Now, let's save this file, and see how this change displays in the browser. When using max-width, when the browser viewport reaches the maximum value of 1200 pixels or larger, the container width stops at 1200 pixels. When it's smaller, it becomes a hundred percent of its container.
>
> **[2:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=156)** Now let's go back to the CSS file to add the three columns in the middle. We'll keep it simple and make the nav and sidebar the same size. We have 1200 pixels to work with, so we could set them both to 300 pixels, which would leave 600 pixels for the main section, but we can also use percentage values instead to keep the layout flexible. So let's set the width for the nav inside bar, which is contained in the aside element, to 25%.
>
> **[3:12](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=192)** I'll just copy this and add it to the aside block, which then leaves 50% for the main element.
>
> **[3:26](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=206)** All right, let's save the file again, and see how it looks in the browser. The widths have been applied, but they're still stacked on top of each other. So here's where we can apply the float. Let's go back to the CSS file. Since we've set the widths of the nav, main and sidebar to equal a hundred percent of its container, we can set a float left to all three elements to get them to line up side by side in the order that they appear in the HTML. We can use a selector list to apply the style to all three sections at once. I'm going to add it just before the nav block, nav, comma, main, comma, then aside, and the curly brackets. Inside here, I'll add the float property set to left. Let's save the file and see the changes in the browser. The elements are now lined up side by side, but now the footer is doing something funny. You can see a bit of it here as well as some of it here. When elements are floated, they're moved outside of the normal flow, so the footer has moved up to occupy any available space. So here is where we can apply the clear to return the footer and any content that may come after back to the normal flow. Let's go back to the CSS file. In the existing footer selector, we'll add the clear property.
>
> **[5:02](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-float-26988338?u=76281980&t=302)** Even though we only used left floats, I like to use a value of both. This will clear any left or right floats. So if the layout changes later to require a right float, this clear value will still apply. Let's save the file and return to the browser. Refresh to see the changes, and now the footer has been cleared. We've also created a flexible three-column layout. By using percentage widths for the nav, sidebar and main section, if we change the width of the container, the three columns will adjust proportionally. Using the max width property gives you control over the size, while also maintaining flexibility. Even though we were able to create the desired layout with floats, there are some quirks and limitations, for example, the lack of equal column heights. Notice how the background color in the nav and sidebar doesn't extend all the way down. The element is only as tall as its content. There are workarounds, but with the widespread browser support for Flexbox and Grid, we now have much better solutions. The purpose of this exercise was to understand how basic float based layouts were created for reference in case you need to work with legacy code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Responsive Web Design]] (1)
> **Env Vars:** css (5), html (2)
> **Cross-References:** go back to (4)
> **CLI Commands:** make (3)
> **File Paths:** float.css (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Position: Relative and absolute](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=0)** - [Instruktor] Osobina pozicije se takođe može koristiti za promenu toka dokumenta raspoređivanjem elemenata u odnosu na njegovu trenutnu poziciju, element koji sadrži ili prikaz pretraživača. Iako se pozicija ne koristi za kreiranje rasporeda cele stranice, korisna je za fino podešavanje komponenti unutar stranice. Pogledajmo kako funkcioniše relativno i apsolutno pozicioniranje u primeru [[CodePen]]-a. Napravio sam osnovni raspored stranice bez plovaka ili drugih stilova rasporeda. Samo neki stilovi za razlikovanje komponenti jedni od drugih. Počnimo tako što ćemo pogledati relativnu vrednost. U ovom primeru, kutija se nalazi u glavnom području sadržaja. Koristi klasu koja se zove relativna. Hajde da ga nađemo u CSS panelu. To je dole na liniji 31. Hajde da nastavimo i dodamo taj stil. Relativni je jedini pozicionirani element koji ostaje u toku rasporeda. Dakle, dodavanje ove vrednosti ne menja automatski svoju poziciju. Ali sada možemo dodati jednu od četiri svojstva ofseta kutije, gore, desno, dole ili levo, da odredimo pravac i položaj elementa. Ova svojstva se mogu koristiti sa bilo kojom jedinicom dužine, kao što su pikseli ili procenat. Dodajmo tu levu vrednost od 50 piksela. Ovo će gurnuti element 50 piksela dalje od leve strane njegove trenutne pozicije. Dodajmo donju vrednost od 20 piksela. Ovo se može osećati pomalo kontraintuitivno jer izgleda kao da se element upravo pomerio gore.
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=95)** Pa, pomerio se jer je element gurnut 20 piksela odavde, na dno njegovog pozicioniranja. Dakle, ako bismo umesto toga koristili najvišu vrednost, ona bi gurnula dole jer sada gura element iz gornjeg dela svoje trenutne pozicije. Dok su elementi pozicionirani sa relativnim ostaje u toku rasporeda, drugi elementi se ne vrše pozicioniranim elementima, za razliku od plovaka. To može dovesti do ponekad preklapanja elemenata, što može ili ne mora biti vaša namera. Hajde da pogledamo sledeće apsolutno pozicioniranje. Kada dodamo apsolutnu poziciju elementu, on ga potpuno pomera iz normalnog toka rasporeda stranice. Sada je u osnovi u svom sloju. Element koji ga prati, u ovom primeru, relativna kutija će se pomeriti gore da popuni sada prazno mesto. Leva i gornja vrednost za relativnu kutiju je sada pozicionirana sa svog novog mesta u toku stranice. Elementi se poravnavaju na horizontalnoj i vertikalnoj osi, ali zapravo postoji i treća, z-osa, gde se elementi slažu jedan na drugi u slojevima. Zbog toga se ova dva elementa preklapaju. Za pozicionirane elemente, ovaj redosled slaganja se zasniva na njihovom redosledu u [[HTML]]-u. Onaj koji dolazi posle relativne kutije u ovom primeru ima veći redosled slaganja. Dakle, ako bih želeo da apsolutni okvir sedi na vrhu relativnog okvira, mogao bih samo da promenim redosled u HTML-u. Ali ponekad, nema smisla menjati HTML redosled na osnovu
>
> **[3:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=189)** sadržaja koji je sadržan u njemu. Ako je to slučaj, redosled rasporeda može biti promenjen sa osobinom Z-indeksa. Ova osobina radi samo sa pozicioniranim elementima. Podrazumevana vrednost Z-indeksa je nula, tako da što je veća vrednost, to je veći redosled steka. Dakle, ako dam ovom apsolutnom pozicioniranju Z-indeks od samo jednog, sada će biti veći od podrazumevane vrednosti Z-indeksa relativnog nula. Elementi sa pozicioniranim apsolutom će biti u odnosu na najbliži pozicionirani element predaka. Ako ne postoji, to će biti u odnosu na element tela. Ovom pozicioniranom apsolutnom elementu dali smo vrednost Z-indeksa, ali još uvek nismo definisali nikakve osobine ofseta, tako da kutija i dalje sedi na istom mestu. Dakle, hajde da dodamo te vrhunske i desne osobine. Apsolutni okvir je sada trenutno pozicioniran u odnosu na telo, što je vidljivo područje u pretraživaču. Dakle, to je 20 piksela sa desne strane i 20 piksela sa vrha početnog vidljivog područja. Većinu vremena kada koristite apsolutno, želećete da sadržite element u određenoj oblasti, a to možemo uraditi dodavanjem pozicije elementu koji sadrži. Hajde da ga dodamo ovom glavnom elementu, ovoj žutoj kutiji ovde. Ovo je roditeljski element apsolutne kutije. Dakle, hajde da se pomerimo do linije 21 i dodamo u poziciji relativno. Može se koristiti bilo koja pozicionirana vrednost, ali u
>
> **[4:43](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-relative-and-absolute?u=76281980&t=283)** ovom slučaju, relativna je dobar izbor jer ne želimo da glavni element bude uklonjen iz prirodnog toka stranice. Mi samo želimo da sadržimo apsolutnu kutiju. Dakle, sada je pozicioniran unutar glavnog elementa. Apsolutna kutija je sada pozicionirana 20 piksela od vrha i 20 piksela desno od najbližeg pozicioniranog elementa pretka. There are three more position values, Postoje još tri vrednosti pozicije, pa držite ovu vežbu otvorenom. so keep this exercise open. We're going to come back to it in the next video. Vratićemo se na to u sledećem videu.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[CodePen]] (1)
> **Env Vars:** html (3), css (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instruktor] (1)

#### [Position: Fixed, sticky, and static](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=0)** - [Speaker] Continuing from the last exercise. Let's jump back in with fixed positioning. Go to the nav selector block on line 14 and add-in position fixed. We're going to create a navbar that's always displayed in the viewport, even on page scroll, but it looks like it just disappeared. It didn't. It's actually under the main element. Remember, we talked about position in the z-index, right? Well, we added position relative to the main element, and it comes after the nav in the [[HTML]]. So by default, it has a higher stack order. So the nav is just underneath the main content. We can just add a z-index value to the nav to make sure it stays on top. And often when creating a fixed nav, it's good to give it a high number because we want that to always be on top of all elements. So let's add that in. And the navigation bar is back. With position fixed and absolute. If the block element doesn't have a width applied to it, it will automatically adjust to the size of the content. So we can set the width to 100% here to make it span all the way across. And you may have noticed that the navigation bar is now on top of the absolute box as well, and that's what we want. We want that navigation bar to sit on top of everything. So let's just give it a top value so we can move it right to the top of the page. So we'll set that to zero and now it's moved up. So I'm going to resize the view-port
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=94)** so we can get the page to scroll. Now the navigation bar is always fixed at the top, but we need to push that header down since the navigation bar is now sitting on top of that as well. So we can just add a margin top here in the header and just make it the same size as the navigation bar. Next, we'll take a look at how the newest value sticky works with positioning. Back in line 14, we'll update the position of the nav by changing the value to sticky. So now, we see it's back under the header. With sticky positioning, it stays in its initial spot until you scroll the page. Then it becomes fixed when the value in the offset property has been met. So in this example, that's zero from the top. So when we scroll, the navigation bar is going to stay where it is, and once we hit zero from the top, it becomes fixed. So it's kind of a mix between relative and fixed positioning. So now we can also remove the margin from the header.
>
> **[2:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=166)** There's one more value, static, which is the initial default value. Elements are not positioned at all and will display in the normal flow. So if you don't want to position an element, you don't need to declare this value in the CSS unless you want to override the value. For example, you may want to remove the position absolute for a smaller screen size. Let's go down to the media query right at the bottom of the panel. Here, we can add styles for a specific condition. In this case, view-ports that are 600 pixels or smaller and will add-in the static value. So now the absolute box will not be positioned until the viewport is 600 pixels or larger.
>
> **[3:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/position-fixed-sticky-and-static-26984305?u=76281980&t=220)** When learning how to use the position property, it can be tempting to use it for creating entire page layouts since you can arrange components in specific positions. But positioning should not be used in this way since it takes the element out of the natural stacking order and the normal flow with the exception of relative. If you find that you're using large offset values to position your elements, consider using alternative layout methods instead, such as grid or flexbox, and stick to using physician for styling smaller page components rather than full-page layouts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** html (1), css (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [speaker] (1)


### 3. Flexbox

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with Flexbox](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=0)** - [Pripovedač] Fleksibilni raspored kutija ili skraćeno Flekbok, pruža mnogo načina za usklađivanje sadržaja, naručivanje stavki i implementaciju fleksibilne veličine. Dugo vremena, plovci su korišćeni za kreiranje rasporeda stranica. To nam je omogućilo da kreiramo složenije rasporede od tabela, ali bilo je i drugih ograničenja kao što je stvaranje jednakih visina kolona, koje smo videli u prethodnoj vežbi float. Flekbok je olakšao rešavanje ovih vrsta problema sa rasporedom. Flekbok je potpuno novi modul rasporeda, tako da to znači novu terminologiju i mnoštvo svojstava zasnovanih na flek-u. Takođe se često naziva jednodimenzionalnim rasporedom, jer su stavke postavljene na jednoj osi ili kao kolone ili redovi. Mi ćemo dobiti više u to znači malo kasnije. Flek kontejner je roditeljski element i samo potomci elementi flek kontejnera su flek stavke, a ne potomci elementi. Možete, međutim, gnezdo flek kontejnera u drugom flek kontejneru. Da biste koristili Flekbok, prvo mora biti definisan kontejner za flek. Ranije smo koristili osobinu prikaza da promenimo ponašanje elemenata na nivou inline i bloka, ali prikaz se takođe koristi za podešavanje kontejnera flek sa jednom od dve vrednosti, flek ili inline-flek. Evo primera dva kontejnera koji sadrže pet blok elemenata u normalnom toku. Elementi su složeni i obuhvataju širinu kontejnera. Kada se displej flek doda u roditeljski element, on je sada
>
> **[1:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=76281980&t=97)** definisan kao flek kontejner i svaki potomak element je sada flek stavka. Flek stavke se prikazuju u nizu i postaju iste veličine kao i njihov sadržaj, ali flek kontejneri i dalje obuhvata širinu svog kontejnera. Ako podesite vrednost prikaza na inline-flek - flek kontejner će obuhvatiti širinu svog sadržaja, flek stavke i prikazuje u liniji na druge flek kontejnere. Dakle, to ne menja način na koji se prikazuju flek stavke, umesto toga čini flek kontejner prikaz u liniji. Iako se fleksibilne stavke automatski menjaju veličinu prema veličini njihovog sadržaja, možete podesiti i određene veličine, o čemu ćemo uskoro govoriti. Kada koristite nasleđene tehnike kao što je float, svaka stavka je iste visine kao i njen sadržaj, što smo upravo videli u našoj prethodnoj vežbi. Just by adding the flex display value, Samo dodavanjem vrednosti flek prikaza, flek stavke se the flex items are automatically arranged automatski raspoređuju u fleksibilne stavke jednake visine, into flexible equal height items, međutim, ima više flek svojstva da dodatno prilagodite however, there are more flex properties svoje rasporede. to further customize your layouts.

> [!info]- Semantic Content
>
> **Speakers:** - [pripoveda (1)

#### [Orientation with flex-direction and flex-wrap](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=0)** - [Instruktor] Ranije u ovom kursu smo razgovarali o korišćenju svojstva prikaza za poravnavanje elemenata kao inline ili blok ili inline-block. Što bi se u suštini moglo koristiti za kreiranje redova i kolona, ali sa nekoliko hirova. Isto je i sa plovcima, sa flekbok-om, flek stavke se lako mogu rasporediti u redove ili kolone bez ikakvih dodatnih ispravki. Flekbok poravnava stavke na osnovu dve ose, glavne ose i poprečne ose. Stavke su takođe raspoređene na osnovu početne i krajnje tačke. Glavni početak i glavni kraj na glavnoj osi i unakrsni početak i unakrsni kraj na poprečnoj osi. Pravac glavne ose određen je svojstvom flek-pravca. Kada je smer flek-podešen na red, što je podrazumevano, glavna osa je horizontalna, a glavni početak i glavni kraj će se odvijati s leva na desno počevši od leve strane. Kada su flek stavke postavljene na kolone, glavna osa je vertikalna i glavni kraj radi od vrha do dna počevši od vrha. Smer Flek-a takođe prihvata još dve vrednosti, obrnuti red i obrnutu kolonu. Kada se koriste ove vrednosti pravac glavnog početka i glavnog kraja se okreće. Za pristupačnost, korišćenje obrnutih vrednosti ne bi trebalo da bude zamena za stvarni redosled sadržaja u [[HTML]]-u. Preuređivanje je samo vizuelno. Glavni početak i glavni kraj takođe zavisi od načina pisanja dokumenta. Na primer, glavni početak i glavni kraj će se pokrenuti s
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/orientation-with-flex-direction-and-flex-wrap?u=76281980&t=94)** leva na desno za jezik s leva na desno kao što je engleski. A za jezik s desna na levo onda će glavni početak i glavni kraj takođe raditi s desna na levo. Kada koristite flekbok, sve stavke će se poravnati na jednoj osi, čak i ako se stavke mogu preliti. Svojstvo flek-vrap može da se koristi za promenu ovog ponašanja. Novrap je početna vrednost što znači da se flek stavke neće umotati i promeniće veličinu da se uklope u jednu liniju. Vrednost omota će postaviti stavke u više redova ako nema dovoljno prostora da stane sve stavke u jednu liniju. Iako Flekbok koristi raspored jedne ose, stavke za pakovanje mogu stvoriti izgled redova i kolona. Takođe možemo istovremeno promeniti pravac koristeći obrnutu vrednost. Imajte na umu da su samo unakrsni početak i unakrsni kraj obrnuti. The items are still in the same order on the main axis. Stavke su i dalje u istom redosledu na glavnoj osi. Flex-wrap and flex decoration can also be applied Flek-vrap i flek dekoracija može da se primeni korišćenjem skraćenice imovine flek-protok. using the shorthand property flex-flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Speakers:** - [instruktor] (1)

#### [Flexible sizing](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=0)** - [Pripovedač] Kada se pokrene flek kontejner, flek stavke automatski menjaju veličinu. Ali ponekad ćete možda morati da podesite određenu veličinu za flek stavke. Definisanje aspekt flek rasporeda je sposobnost da se flek stavke flek, menja njihovu širinu ili visinu da popuni raspoloživi prostor u glavnoj dimenziji. Postoje tri osobine koje se koriste zajedno za podešavanje veličine flek stavki. Flek-baza postavlja početnu veličinu. Flek-raste određuje kako će se stavke proširiti ako postoji dodatni prostor u kontejneru. I flek-shrink određuje kako će se predmeti smanjiti ako nema dovoljno prostora u kontejneru. V3C preporučuje korišćenje skraćenog svojstva, flek, kako bi se izbeglo resetovanje bilo koje vrednosti koje nisu posebno definisane. Da biste koristili skraćenicu svojstvo, prvo proglasite vrednost flek-rast. Zatim vrednost flek-shrink, završava sa flek-bazne vrednosti. Flek-raste i flek-skuplja svojstva su definisana sa numeričkom vrednošću bez jedinica. Osnovna vrednost se može koristiti sa bilo kojim vrednostima dužine, procentima ili ključnim rečima. Hajde da otvorimo [[CodePen]] primer da vidimo pregled kako se ove vrednosti primenjuju na flek stavke. Prvo, mi ćemo definisati flek kontejner dodavanjem displeja flek. Dole u liniji sedam, hajde da to odkomentarišemo. Stavke će automatski promeniti veličinu na veličinu svog sadržaja i poravnati u nizu. Hajde da se spustimo na flek stavke i eksperimentišemo sa vrednostima flek-a.
>
> **[1:36](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=96)** Vrednosti koje su ovde trenutno deklarisane, nula, jedan i auto, su podrazumevane vrednosti. Dakle, dodavanje ove osobine neće napraviti nikakve promene. Dakle, počnimo sa bližim pogledom na treću vrednost prvi. Flek-osnova. Razmislite o tome kao o svojoj idealnoj veličini. Hajde da promenimo ovu vrednost na 100 piksela. Budući da postoji šest stavki unutar kontejnera širine 600 piksela, svaka stavka je savršeno dimenzionisana prema deklaraciji o flek-osnovi. Ali ako promenim kontejner na 400 piksela ... Druga vrednost preuzima, flek-shrink, koji je postavljen na jedan. To u osnovi znači, smanjite sve stavke za istu količinu prostora kako bi se uklopili u niz. Dakle, to je razlog zašto se flek-baza naziva početnom veličinom, jer nije zagarantovana. Ako ima dovoljno prostora, napravite sve flek stavke veličine deklarisane sa flek-baznom vrednošću. Ako ne, onda se smanjite ili raste u skladu sa prve dve vrednosti. Dakle, prva vrednost je flek-rast, i podrazumeva se na nulu. To znači da ako u kontejneru ima dodatnog prostora, nemojte se širiti da biste popunili prostor. Hajde da promenimo širinu kontejnera na 800 piksela. Svaka stavka je sada široka 100 piksela, jer ima dovoljno prostora. Ali sada je ostalo i malo prostora. Ako promenimo vrednost flek-raste na jedan, dodatni prostor će biti ravnomerno podeljen između svih flek stavki. I proširiće se za isti iznos da popuni prostor.
>
> **[3:13](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=193)** Sada, ako podesite vrednost flek-shrink na nulu, druga vrednost, to znači da se neće smanjiti uopšte. Trenutno nećemo videti promenu, jer postoji 200 piksela dodatnog prostora koji se popunjava vrednošću flek-a. Ali ako vratimo kontejner na 400 piksela, videćemo promenu. Sada će se sadržaj preliti izvan kontejnera za flek jer smo postavili vrednost flek shrink na nulu, što znači da se neće smanjiti. A Flekbok je jednodimenzionalni raspored. Pokušaće da organizuje sve stavke u jednoj liniji, čak i ako se ne uklapa. Hajde da dodamo u flek-vrap, podesite da završi. Predmeti će se sada zamotati i više neće preplaviti. Ali kako to da je drugi red predmeta sada širi od prvog reda? Pa omogućava da se razbiju trenutne vrednosti fleka. Flek je trenutno postavljen na jednu nulu 100. Dakle, ova deklaracija kaže, ako ima dovoljno prostora, neka svaka stavka bude 100 piksela. Ako ne, nemojte se smanjivati. Pošto smo proglasili flek-vrap, dve stavke koje se nisu uklopile u prvi red umotane su u drugi red. Flek-raste vrednost jednog kaže, ako postoji dodatni prostor, primenite ga ravnomerno na trenutni broj stavki u tom redu. A pošto postoje samo dve stavke, pet i šest, u drugom redu, ima više dodatnog prostora za distribuciju među fleksibilnim stavkama. I zato su veći od četiri stavke u gornjem redu. And that's why they're bigger than the four items in the top row.
>
> **[4:47](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/flexible-sizing?u=76281980&t=287)** Sada, ako promenimo smer flek-a u kolone, vrednosti flek-a Now if we change the flex direction to columns, the flex values will now apply to height instead of width. će se sada primenjivati na visinu umesto na širinu. Da bi se kolone završile, potrebno nam je podesiti vrednost To make the columns wrap, we need set a height value. visine. So when we set the flex-direction to column, Dakle, kada smo postavili flek-smer na kolonu, ista pravila the same rules apply, except for now, važe, osim za sada, to se primenjuje na vrednosti visine. it's being applied to the height values. We can also apply different flex values Takođe možemo da primenimo različite vrednosti fleksa na pojedinačne stavke fleksa kako bismo ih različito to individual flex items to size them differently from each other. dimenzionisali. We'll discuss these additional options in the next lesson. Razgovaraćemo o ovim dodatnim opcijama u sledećoj lekciji.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** v3c (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [pripoveda (1)

#### [Sizing multiple flex items](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=0)** - [Instructor] In the last lesson, we talked about sizing flex items using the flex property. But we applied the same flex values to all of the items within the container. But sometimes you may want to have flex items that are not all the same size. The numerical value used for flex-grow represents a ratio. If you want all items to grow by the same amount, then set the flex-grow to 1. But if you want the items to be different sizes, then define different flex-grow values for the individual flex-items. For example, if one item is set to a flex-grow value of 1, and another is set to a flex-grow value of 2, that doesn't mean that one will be twice as big as the other. Flex looks at the flex-basis value first and applies it if there is space. Any extra space is what gets divided among the flex-grow distribution. So the item with the flex-grow value of 1 will get one third of the extra space, and the other will get two thirds of the extra space. And that space is added in addition to the amount of space the item already occupies, which was determined by the flex-basis value. For a more even space distribution setting the flex spaces to zero will reduce the elements to its smallest possible width, depending on the content. And then, the flex-grow space distribution will be based on all the available space rather than just the extra space. Flex-grow can be used with any numeric value, such as 45 or 93 or 1.7,
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/sizing-multiple-flex-items-26985334?u=76281980&t=95)** but personally I find it easier to just stick with simple numbers. When we create our page layout with Flexbox, we'll be incorporating different flex sizes for different flex-items.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), we talked about (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** find (1)
> **Versions:** 1.7 (1)
> **Speakers:** - [instructor] (1)

#### [The order property](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/the-order-property-26968366?u=76281980&t=0)** - [Narrator] Another new Flexbox property is order, which is used to change the layout order of flex items without changing the [[HTML]]. This is something that was previously unavailable with traditional layout techniques, but note this will only visually change the order. To make sure the content itself is still accessible, the source order of the content in the HTML should make sense. The order value is defined by a single number. By default, all flex items have an order value of zero and are laid out in the same order as they appear in the HTML. When using order, the flex container will lay out its flex items starting from the lowest number. You can also use negative values to make items appear earlier than items set at zero. Again, this is only for making a visual change. Make sure the content in the HTML follows a logical order. In the floats layout exercise, we weren't able to align the navigation before the main content without changing the HTML. So instead, we added a skip navigation link to increase accessibility for keyboard and screen reader users to avoid cycling through a potentially long list of navigation links with the order property. We'll be able to keep the logical order in the HTML, but change the visual order with CSS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6)
> **Env Vars:** html (6), css (1)
> **CLI Commands:** make (4)
> **Speakers:** - [narrator] (1)

#### [Nesting flex containers](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=0)** - [Insructor] Flekbok se prvenstveno koristi za raspored flek stavki u jednoj osi. Ali možemo stvoriti izgled redova i kolona tako što ćemo omotati stavke fleka. Takođe možemo gnezditi fleksibilne kontejnere kako bismo kreirali složenije rasporede. Flek stavka takođe može biti flek kontejner za svoje dečije elemente. Flek stavke u ugnežđenom flek kontejneru mogu biti raspoređeni duž iste ili suprotne ose svog roditeljskog flek kontejnera. Pogledajmo primer u [[CodePen]]-u. U ovom primeru, kontejner za omotavanje stranice ima dva potomečka elementa, bočni i glavni element. Glavni element takođe sadrži neke dečije elemente, ali do toga ćemo doći malo kasnije. Počnimo dodavanjem prikaza: flek na stranicu-vrap. Sada su bočni i glavni elementi fleksibilni stavke unutar kontejnera za omotavanje stranica i raspoređeni su rame uz rame u redovima. Sada, hajde da definišemo veličinu bočnih i glavnih elemenata sa svojstvima flek. Hajde da dodamo stilove u liniji 9 i liniji 14. Glavne osobine rastu vrednost je postavljena tri puta veća od strane raste vrednost. Zato što želim da bude veći od strane. Za oba elementa vrednost skupljanja je podešena na jedan. Tako da se mogu smanjiti za isti iznos. Flek-osnova je postavljena na nulu, tako da veličina stavke nije uključena u obračun kada se radi raspodela prostora sa flek-rast. Tada glavni element takođe ima dečije elemente, ove tri kutije sa sadržajem. Hajde da ovo pretvorimo u fleksibilni kontejner, osim što
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=94)** ćemo ih ovog puta poravnati u kolonama umesto u redovima. Hajde da dodamo displej: flek na glavni element, dole na liniji 15. Po defaultu, oni će se rasporediti u redove, ali želim da budu u kolonama, pa hajde da dodamo kolonu flek-pravac. Sada želim da ove kolone imaju jednaku visinu unutar svog kontejnera. Hajde da podesite veličinu stavki sa flek-om. Ove kutije su sadržane u elementu odeljka. Ovde na liniji 20 je mesto gde ćemo dodati flek-stil. Obratite pažnju na to kako, iako smo koristili isti odnos za fleks-scroll i flex-shrink, oba su postavljena na jedan, prvi okvir sa sadržajem je veći od druga dva. To je zato što auto, veličina koja je trenutno podešena za flek-bazu, uzima u obzir veličinu sadržaja, a zatim dodaje deo raspoloživog prostora postojećoj veličini sadržaja. Dakle, ako podesite flek-bazu na nulu umesto kao što smo uradili sa spoljnim flek kontejnerom, trenutna veličina sadržaja nije uključena u proračun. Sada su sve tri kutije iste visine. Takođe, zapamtite, pošto smo promenili smer flek-u u kolonu, vrednosti flek-baze se primenjuju na visinu umesto širine. Postoji važna stvar koju treba napomenuti, ako je ukupni prostor kontejnera manji od sadržaja, onda će se samo smanjiti koliko god može bez obrezivanja sadržaja. Recimo, visina preloma stranice je 350 umesto toga. Ja ću ići ovde i promeniti vrednost visine na liniji 3,
>
> **[3:08](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/nesting-flex-containers?u=76281980&t=188)** sada će stavke pokušati da se smanji proporcionalno, ali prvi okvir sa sadržajem je veći od druga dva kako bi se izbeglo prelivanje sadržaja. Gniježđenje fleksibilnih kutija unutar drugih fleksibilnih kutija omogućava kreiranje složenijih rasporeda. Ali Flekbok je jednodimenzionalan po dizajnu. So, while we're creating the looks of rows and columns, Dakle, dok stvaramo izgled redova i kolona, još uvek we're still laying out the items on a single axis. postavljamo stavke na jednoj osi. Rows in the outer flex container Redovi u spoljnom kontejneru flek i kolone u unutrašnjem and columns in the inner flex container. kontejneru flek.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (1)
> **Speakers:** - [insructor] (1)

#### [Exercise: Build a layout with Flexbox, part 1](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=0)** - [Speaker] Since we're using the same [[HTML]] for all three layout exercises, let's start by switching to the flexbox.css file. This gives us a fresh place to start with just the base presentational styles and no float CSS from the previous layout exercise. Now we can decide which element we can make our flex container. Since the container Div wraps all of the content, we'll use this as the flex container. Let's close the floats.css file and open the flexbox.css file instead. The first thing we'll do is initiate the flexbox layout. In the existing container block. Let's add display set to flex. We also want the items to wrap, so we can style the header and footer on their own row and the nav, main, and side as another row. So we could use the flex-wrap property set to wrap.
>
> **[1:10](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=70)** Then save the file and see how it looks in the browser. By default, the width of a flex item is equal to its content and they line up side-by-side in a row. But since the main area has a lot of content, it spans the entire width. Let's use the flex property to size them. Back in the CSS file. We'll start by sizing the header and footer. We want both of these areas to span the width of the container. So for the flex value, I'll set it to one, zero, 100%.
>
> **[1:49](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=109)** By setting the flex bases to 100%, we're setting the initial value to equal 100% of its container. This will make it the only item in the row, but for good measure, we set the flex grow value to one, to apply any extra space to this item. The flex shrink value of zero will ensure that it won't shrink to a size less than 100% set with the flex bases value. Let's add this style to the footer selector as well.
>
> **[2:21](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=141)** Then save the file so we can see the changes in the browser. The header and footer now span the entire width of the container. Next, we'll resize the remaining blocks. Just like the layout exercise, we'll make the nav sidebar the same size and align them to the left and right sides of the container with the main content in the middle. Let's go back to the CSS file. With the flex property, we can combine fixed values with flexible values to retain some precise control over the sizing of elements without giving up flexibility. For the nav, I'll set the flex value to one, zero, 200 pixels.
>
> **[3:07](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=187)** The flex grow value of one will ensure that extra space will be distributed evenly. The flex shrink value of zero will keep the flex item from shrinking any smaller than 200 pixels, which is the flex space's value. Let's add this to the aside selector as well. To make it the same size as the nav. (clicks loudly) For the main content, I want it to be bigger. So let's set the flex property value to one, one, 500 pixels. The flex grow value of one will ensure that extra space will be distributed evenly. The flex shrink value is set to one, because for this flex item, we want it to shrink for smaller screens. The third value is the flex bases set to 500 pixels. Let's save the file and see how the different flex settings will work in the browser. Even though I use a fixed value for the flex bases, the flex grow property adds the ability to create a flexible layout by proportionally distributing the extra space on larger screens. Also, all of the flex items in the same row have the same column heights equal to the flex item with the most content. We can tell because the background color spans the full height of the row. This was something we couldn't achieve using float-based layouts without complicated hacks. Right now, the flex container is the same size as the browser viewport. The total of the flex bases widths
>
> **[4:40](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=280)** for the nav, main, and sidebar is equal to 900 pixels. So when the container or viewport is larger than 900 pixels, the extra space is distributed evenly among the flex items. But when it's smaller than 900 pixels, the items that don't fit will wrap to the next line. The nav and sidebar sections are set to a flex shrink value of zero, meaning they will not shrink, so when the screen gets too narrow, the sidebar will wrap to the next line because it can't fit in the same row while maintaining the width-defined, width of flex basis value of 200 pixels, the nav sidebar and main sections also have a flex grow value set to one. When the sidebar wraps to the next line, it spans all the way across because now it's the only item in that row, so all the extra space gets applied to it. For the nav and main sections, it will redistribute any extra space between these two areas. Once you get to a smaller viewport size where the nav and main content doesn't fit in the same row, the main section will wrap to the next line, and all the sections will be displayed in one column.
>
> **[6:09](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-1?u=76281980&t=369)** So I'm basically creating a responsive layout without media queries. In the previous layout exercise with floats, we added a width to the whole page layout and center aligned it. If you'd like to do that with this layout as well, keep your project files open and join me in the next exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** css (3), html (1)
> **File Paths:** flexbox.css (2), floats.css (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** open the (1)
> **Analogies:** just like (1)
> **Speakers:** - [speaker] (1)

#### [Exercise: Build a layout with Flexbox, part 2](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=0)** - [Speaker] Continuing from the previous layout exercise, let's add a width to the container and center align it so the content doesn't span all the way across on larger screens. We could use the same technique as with the float layout exercise, use margin set to auto, to center align it. But since this is a flexbox layout, let's try using a flex-based property instead. Let's go back to the index.[[HTML]] file. Flex items are aligned horizontally with the justify content property, which is added to the flex-container. Looking at the HTML, let's decide which element to apply this style to. We can't add it to the container div because we want to align the whole container, not the flex items within, however the container is nested within the body element. This means, we can use body as the flex-container, which would then in turn make the container div its flex item. Remember, you can nest flex-containers within another flex container. Let's switch over to the flexbox CSS file. Using the body selector, add the display property set to flex. Now we'll be able to align the container div as a flex item. Add the justify-content property, set to center. If we leave this as is, we won't see a change
>
> **[1:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=101)** because we still need to define the size of the container like we did with the float exercise. So scroll down to the container style block and we'll add the max width property. (clicks loudly) I'll set it to 1200 pixels for this layout as well. Save the file and go back to the browser and refresh to see the changes. Now, when the browser viewport is wider than 1200 pixels, the container in its content doesn't span the whole width of the page. It maxes out at 1200 pixels and stays centered. When it's smaller, the different sections will still grow or shrink according to its flex values.
>
> **[2:37](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=157)** In the float exercise, we added the width to the container first, but if you use flexible sizing, it doesn't matter if you added at the beginning or at the end. The items inside of the container will always adjust based on the container's width.
>
> **[2:58](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-flexbox-part-2?u=76281980&t=178)** This is just one way to use Flexbox for page layouts. Another option is to treat each row as its own flex-container rather than using flex-wrap. No two projects are the same, and there are often different ways to do the same thing. Take some time to experiment and practice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** html (1), css (1)
> **Cross-References:** go back to (2)
> **Non-Speech:** (typing loudly) (2)
> **File Paths:** index.html (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)


### 4. Grid

[↑ Back to Table of Contents](#table-of-contents)

#### [Grid vs. Flexbox](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=0)** - [Narator] Glavna razlika između Grid i Flekbok je Flekbok je dizajniran za jednodimenzionalne rasporede ili red ili kolonu. Ali, kao što smo videli u našoj poslednjoj vežbi rasporeda, postoje načini da koristite Flekbok za kreiranje izgleda redova i kolona bilo omotavanjem flek stavki ili gnežđenjem flek kutija. Ali čak i sa ovim tehnikama flek i dalje radi samo u jednoj dimenziji. Iako ovo nije nužno loša stvar, Grid je generalno bolji za rad sa redovima i kolonama u isto vreme. Za to je dizajniran. Na primer, Grid kreira rasporede koji se poravnavaju duž obe dimenzije čak i ako kutije nisu iste veličine ili u istom položaju. U rasporedu Flekbok-a, svaki red ili kolona poravnava svoje stavke nezavisno od drugih redova ili kolona. Između ova dva modela, Grid je noviji, ali sada kada su oba modula rasporeda VKSNUMKSC preporuke to ne znači da će Grid zameniti Flekbok. Svaki od njih ima svoje specijalitete. Iako obe ove metode mogu biti korisne za rasporede, Flekbok je odličan za raspodelu prostora stavki unutar iste ose. Veliki slučaj upotrebe bi bio za horizontalnu navigaciju, jer su stavke raspoređene u jednom pravcu. Mreža je idealna za rasporede koji zahtevaju veću kontrolu sa redovima i kolonama. Takođe se mogu koristiti zajedno. For example, you may create the Na primer, možete kreirati raspored stranice pomoću mreže, page layout with Grid, but align ali poravnati horizontalnu navigaciju sa Flekbok-om. your horizontal nav with Flexbox. The two layout modules do share Dva modula rasporeda dele neke zajedničke karakteristike i some common features and properties.
>
> **[1:30](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-vs-flexbox?u=76281980&t=90)** svojstva. So as we go through the specification Dakle, dok prolazimo kroz specifikaciju, neki delovi će se some parts of it will feel familiar osećati poznato, jer smo upravo saznali za Flekbok. since we just learned about Flexbox.

> [!info]- Semantic Content
>
> **Env Vars:** vksnumksc (1)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - [narator] (1)

#### [Grid, grid systems, and CSS Grid](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=1)** - [Instruktor] Pre nego što zaronimo u raspored CSS mreže, Hajde da pređemo na neke potencijalno zbunjujuće pojmove. mreža, mrežni sistem i CSS mreža. Mreža je u osnovi obrazac, koji koriste grafički i veb dizajneri da postroje elemente dizajna kako bi pomogli u stvaranju konzistentnog protoka i simetričnih rasporeda. Rešetke su podeljene na jednake širine i ravnomerno raspoređene kolone. Ponekad se redovi dodaju kao vodič, kako bi se komponente poredale i horizontalno. Oluci, prostor između redova ili kolona, obično se dodaju kako bi se omogućio dosledan razmak između kolona. Komponente stranice su zatim raspoređene unutar kolona i mogu se protezati preko jedne ili više kolona. Postoje različiti načini za definisanje mreže, ali uobičajeni raspored za veb stranice je da koristite mrežu jednakih kolona KSNUMKS. KSNUMKS je lako deljiv sa dva, tri, četiri i šest, što olakšava kreiranje konzistentnih responzivnih dizajna. Rasporedi zasnovani na mreži bili su uobičajeni u štampanju i veb dizajnu, pre nego što je uveden modul CSS mrežnog rasporeda. Prilikom prevođenja ovih dizajna na veb stranice, jedna tehnika je postavljanje svake komponente stranice blok po blok i njihovo dimenzionisanje u skladu s tim. Slično onome što smo radili sa našim prethodnim vežbama rasporeda. Iako nema ništa loše u ovom pristupu, stvaranje CSS mrežnog sistema, počelo je da postaje popularno, posebno za složenije rasporede. U mrežnom sistemu, kolone i oluci se ponovo kreiraju pomoću CSS-a - Gomila unapred dizajniranih CSS skupova pravila je
>
> **[1:34](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/grid-grid-systems-and-css-grid?u=76281980&t=94)** definisana i vezana za imena klasa specifična za mrežu. Ta imena klasa se koriste za raspored komponenti stranice. Na primer, ako bih želeo da napravim komponentu koja se protezala preko četiri kolone, a drugu koja se protezala preko osam kolona, koristio bih klasu koja se zove cal-4 i cal-8. Ili nešto slično. Kako je koncept CSS mrežnih sistema rastao u popularnosti, pojavila su se mnoga rešenja nezavisnih proizvođača. Neki su ponudili osnovni CSS mrežni šablon, dok su drugi kreirali okvire u punom obimu. Jedan od najpopularnijih okvira je Bootstrap. Iako ovaj okvir uključuje unapred napisane komponente, kao što su značke, dugmad, kartice i još mnogo toga, sam okvir je izgrađen na mrežnom sistemu. Čak i pre nego što je uvedena CSS mreža, bilo je nekih prednosti i mana koje treba uzeti u obzir kada se koriste okviri nezavisnih proizvođača, kao što su naduvavanje koda ili ograničenja i prilagođavanja. Ali sada kada je CSS mreža dostupna, postalo je mnogo lakše kreirati redove i kolone sami. Nećemo pokrivati okvire na ovom kursu, ali ako planirate da ga koristite, preporučio bih da uradite neko istraživanje o I would recommend doing some research on the pros and cons of CSS frameworks, and checking to see prednostima i nedostacima CSS okvira i proverite da li je if it's been updated to the latest CSS layout techniques. ažuriran na najnovije tehnike CSS rasporeda.

> [!info]- Semantic Content
>
> **Env Vars:** css (14), ksnumks (2)
> **Speakers:** - [instruktor] (1)

#### [Create a basic Grid layout](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=0)** - [Instruktor] Da biste započeli sa Grid-om, prvo se mora definisati kontejner mreže. Slično rasporedu flekbok-a, mreža-kontejner je roditeljski element, a direktni potomci elementi su stavke mreže. Da biste definisali kontejner mreže, koristite osobinu prikaza. I mreže i inline-grid vrednosti će označiti potomke elemente kao stavke mreže. Sa mrežnom vrednošću, kontejner će biti prikazan kao element na nivou bloka i slagati će se na vrh drugih mrežnih kontejnera. Sa inline-grid vrednosti, grid stavke će i dalje prikazati u koloni, ali osim ako nije drugačije definisano, grid-kontejner i grid stavke će biti iste širine kao i njihov sadržaj. Mreža-kontejner će takođe prikazati inline, i da će se postrojiti sa drugim inline-grid kontejnera. Da biste kreirali kolone i redove, koristite svojstvo kolona šablona mreže i svojstvo redova šablona mreže definisano u kontejneru mreže. Vrednosti se mogu deklarisati sa procentom ili bilo kojom jedinicom dužine CSS-a. Hajde da otvorimo primer u [[CodePen]]-u. Počnimo dodavanjem u mrežu prikaza. Ovde, na liniji osam, hajde da odkomentarišemo ovo, i dodamo stil. Trenutno nećemo videti nikakve promene, ali možemo početi da kreiramo naše redove i kolone. Hajde da dodamo u imovinu kolona šablona mreže. Ovde imamo definisane tri vrednosti, tako da to znači tri kolone. Dakle, stavke četiri i pet automatski počinju u novom redu, iako još uvek ima prostora u kontejneru. Samo ću proširiti ovaj panel tako da možemo imati kod u jednoj liniji.
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=95)** Takođe možemo definisati redove sa redovima šablona mreže. Postoje dve vrednosti, tako da to znači dva reda. Takođe, primetite da stavke mreže ne pokušavaju automatski da popune dodatni prostor. Sada, recimo da se predomislim, i umesto toga želim četiri kolone. Mogao bih samo da dodam još jednu vrednost, ali postoji još jedan način. Možemo koristiti funkciju ponavljanja. Da biste koristili funkciju ponavljanja, počnite sa ponavljanjem i zagradama, a umesto pisanja 100 piksela četiri puta, počećemo sa količinom kolona, četiri, zatim zarezom, a zatim veličinom kolona. Dakle, u ovom primeru, 100 piksela. Funkcija ponavljanja se takođe može koristiti za ponavljanje svih ili samo dela liste numera. Ovo bi bilo korisno za podešavanje različitih vrednosti za svaku kolonu ili red. Različite jedinice se takođe mogu koristiti zajedno. Na primer, mogu da podesim svoju prvu kolonu na 25%, a zatim se preostala tri mogu podesiti na 100 piksela. Prvo ću dodati 25% i razmak, a preostale tri kolone mogu se podesiti na 100 piksela. Recimo da sam želeo da napravim mrežu fleksibilnom i popunim prostor. Mogu da ažuriram vrednost ponavljanja na četiri kolone, svaka na 25%. Sada, oni popunjavaju dodatni prostor. Takođe možemo da koristimo GAP da dodamo oluke između kolona i redova, ali sada imamo mali problem.
>
> **[3:11](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=191)** Oluk izaziva stavke da se prelivaju horizontalno. Izgleda da ne utiče na to vertikalno, jer dodatni prostor samo čini stavke mreže dužim. Širina kolone od četiri stavke, podešena na 25% svaki, sada zauzima 100% svog kontejnera, tako da nema prostora za GAP. Mogao bih da smanjim veličinu kolone i koristim procenat za oluk, ali mreža je uvela novu fleksibilnu jedinicu dužine koju možemo koristiti umesto da radimo sve ove procentualne proračune. FR je fleksibilna jedinica, koja predstavlja delić raspoloživog prostora u kontejneru mreže. Dakle, hajde da ažuriramo kolone šablona mreže i podesite ga na jedan FR četiri puta umesto toga. Ovo će sada podeliti mrežu na četiri jednake staze. I, sada, GAP radi sasvim dobro sa vrednošću piksela. Pošto je FR frakcija, ona deli preostali prostor i raspoređuje ga u skladu s tim. Takođe možemo koristiti FR jedinicu za kreiranje kolona i redova različitih veličina. of different sizes. Dakle, hajde da podesite prvu kolonu na dva FR izvan So, let's set the first column to two FR outside of the repeat function, funkcije ponavljanja, a zatim, u funkciji ponavljanja, and then, in the repeat function, we'll bring it back down to two columns vratićemo je na dve kolone po jednom FR. at one FR each. Vratili smo se na tri kolone, ali prva je dvostruko veća od We're back down to three columns, but the first one is twice as big as the other two. druge dve. Ako već niste primetili, mreža ima jednostavniji pristup If you haven't already noticed, grid has a more straightforward approach kreiranju redova i kolona, jer je to prilično ono za šta je to creating rows and columns, since this is pretty much what it was created for. stvorena. U poređenju sa flekbok-om, ovo je prilično osnovni
>
> **[4:41](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/create-a-basic-grid-layout?u=76281980&t=281)** In comparison to flexbox, this is a pretty basic layout, raspored, tako da nije baš očigledno da li je jedan bolji so it's not really obvious if one is better than the other od drugog u ovom scenariju, ali lepa stvar u vezi sa mrežom in this scenario, but the nice thing about grid je da možemo proglasiti različite veličine za redove i is we can declare different sizes for rows and columns kolone u istoj osobini, umesto da dodajemo vrednost svakoj in the same property, rather than adding a value to each individual item. pojedinačnoj stavci.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (1)
> **Env Vars:** gap (3), css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instruktor] (1)

#### [Columns, rows, and gutters with Grid](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=0)** - [Instructor] In the last lesson, we were able to create a basic grid with just a few properties, gap, grid template columns, and grid template rows. Well, there's a little more to know about these properties. Gap is used for creating grid gutters, and is shorthand for row-gap and column-gap. One value sets the gutter for both rows and columns, and two values sets the gutter for the rows then the columns. Gap can be used with any length unit, calc function, or a percentage, but not an FR unit. And one last thing about gap. Originally, the grid layout defined the gap property as grid gap and the longhand properties as grid row gap and grid column gap. The property was updated to be used for both Flexbox and grid, but right now gap is only supported for Flexbox in Firefox. Gap for grid layouts and the previous grid prefixed properties are supported in all modern browsers. To check for current browser support for specific CSS properties, you can do a search for the property on [canIuse.com](https://canIuse.com). In the last lesson, we created columns and rows with various types of values using the grid template columns and grid template rows property. We used pixels, length units, and percentages. We also tried out the new grid unit fr, a flexible unit which represents a fraction, and the repeat function, making it easier to make multiple columns in rows. Rows and columns can also be defined
>
> **[1:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=93)** with the MinMax function to set a range greater than or equal to a minimum value and less than or equal to a maximum value. For example, if I set the grid template rows value to 100 pixels, it means the row height will equal exactly 100 pixels. But if I use the min-max function and set it to 100 pixels and auto, the minimum row height will be a hundred pixels. But if the content is longer, it will expand to fit. You can even use the MinMax function as a value of the repeat function. In this example, we've defined the height for two rows, which will both have a minimum value of 100 pixels and a maximum value of auto. You can get quite advanced and create specific conditions with the repeat notation. All of the possible values are listed here in the Mozilla developer networks documentation. Let's go to the previous Code Pen example and try out the MinMax value. I'll change the grid template rows to a MinMax of a hundred pixels in auto. The syntax for MinMax is MinMax, no space, all lowercase. And in the parentheses I'll set it to a hundred pixels as my minimum value and auto as my max. I'm also going to use the repeat notation, so I can define the size for both rows. So I'm going to add in the repeat notation first, repeat with the parentheses,
>
> **[3:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=186)** and then I want to define two rows followed by a comma, and then I'll copy this MinMax value and paste it into my repeat notation. This won't look different from how it was before because the min value is the same as the value I set before. But if I go up to the [[HTML]] panel and add in the extra content, we'll be able to see some changes.
>
> **[3:33](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/columns-rows-and-gutters-with-grid-26992165?u=76281980&t=213)** Since the max value is set to auto, the row will expand to make space for the extra content. But if I was to set the max to a smaller value, let's say 200 pixels, the content will now overflow because it's longer than the max value. So it's probably best to leave it at auto. The min-max value would be useful for when you want to send a minimum height or width for when there's not enough content to fill the grid item space, but keep it flexible for longer content.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Exercise Files:** template (6)
> **CLI Commands:** make (2)
> **Env Vars:** css (1), html (1)
> **Cross-References:** in the last (2)
> **Code Identifiers:** caniuse (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)
> **Tools:** firefox (1)

#### [Positioning with Grid](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=0)** - [Ženski glas] Sada kada smo prešli na to kako da kreiramo mrežu i definišemo redove i veličine kolona, hajde da pričamo o tome kako da pozicioniramo stavke na mreži. Mrežne linije dele mrežu na kolone i redove i numerisane su s leva na desno i odozgo na dno. I vertikalne i horizontalne linije mreže počinju u jednom. Za jezike s leva na desno kao što je engleski, linija jedan počinje na levoj strani mreže. A stavka će obuhvatiti jednu mrežnu ćeliju, koja se završava na drugoj liniji. Ako radite na jeziku s desna na levo, onda su linije mreže numerisane s desna na levo počevši sa desne strane. Takođe možete koristiti negativan numerički indeks da biste upućivali na suprotni kraj mreže. Podrazumevano, stavke se pojavljuju u istom redosledu kao i [[HTML]] unutrašnji smešten u jednu mrežnu ćeliju. Možemo da promenimo položaj stavki mreže tako što ćemo odrediti početnu i završnu liniju sa sledećim svojstvima. Početak mrežne kolone, kraj mrežne kolone, početak mrežnog reda i kraj mrežnog reda. Ove osobine su skraćenica za mrežnu kolonu i mrežni red. Do sada smo gledali svojstva koja se primenjuju na kontejner mreže kako bi definisali strukturu mreže. Ove osobine zasnovane na položaju moraju se primeniti na specifične stavke mreže kako bi se odredilo njihovo postavljanje unutar mreže. Ove osobine se koriste ne samo za postavljanje stavke mreže u određenu liniju mreže, već se mogu koristiti i za obuhvat jedne ili više ćelija mreže sa početnom i krajnjom vrijednošću. Na primer, ako bih želeo da određena stavka mreže počne u drugoj koloni i da se proteže preko dve kolone, početna
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=95)** vrednost mrežne kolone bi bila dva. Krajnja vrednost kolone mreže bi bila četiri. Da biste to proglasili koristeći skraćenu vrednost, koristite mrežnu kolonu sa vrednošću dva za početak odvojen naprednom kosom crtom i četiri za krajnju vrednost. Hajde da probamo ovo na primeru. Uzećemo ovaj podrazumevani raspored blokova i koristiti postavljanje zasnovano na mrežnoj liniji da bismo kreirali ovaj izgled. Prva stvar koju treba da uradimo je da odlučimo koliko redova i kolona nam je potrebno. U željenom rasporedu nalaze se tri kolone i dva reda. Hajde da otvorimo ovaj primer u [[CodePen]]-u. Prva stvar koju ćemo uraditi je da ćemo dodati u mrežu šablona kolone i osobine redova. Ovde sam koristio funkciju ponavljanja da bih dodao tri kolone i dva reda. Pogledajmo sada prvu kutiju. Želeli smo da počnemo od vrha i završimo na dnu. Dakle, startna linija će početi u jedan, krajnja linija će biti jedan, dva, tri. Tako da sam koristio n-ti selektor za odabir prve stavke, a takođe sam koristio skraćenicu mrežnog reda da podesim početnu vrednost na jedan i krajnju vrednost na tri. Dakle, sledeće u željenom rasporedu, želeli smo da obuhvatimo ovu kutiju počevši odavde i završavajući ovde. starting from here and ending here. So to do so my start line is going to be one, two. Dakle, da to uradim moja startna linija će biti jedan, dva. And then my end line will be three, four. A onda će moja krajnja linija biti tri, četiri. So this is item two.
>
> **[3:06](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/positioning-with-grid?u=76281980&t=186)** Dakle, ovo je tačka dva. Let's go down to nth-child two. Idemo dole na n-to dete dva. With a start value of two ending at four. Sa početnom vrednošću dva koja se završava na četiri. And that's it. I to je to. Comparing this to using floats for layout, Upoređujući ovo sa korišćenjem plovaka za raspored, uspeli we were able to complete this fairly easily. smo da to završimo prilično lako. No extra container divs, Nema dodatnih kontejnerskih divova, nema kliringa plovaka. no clearing floats. Comparing this to the flex layout, Upoređujući ovo sa fleksibilnim rasporedom, takođe možemo we can also see how being able to videti kako mogućnost kontrole stavki mreže u redovima i control the grid items in both rows and columns kolonama samo čini malo jednostavnijim prilikom just makes it a little bit more straightforward postavljanja stavki u oba smera koje se protežu preko when laying out the items in both directions redova i kolona. spanning across rows and columns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[CodePen]] (1)
> **Env Vars:** html (1)

#### [Exercise: Build a layout with Grid](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=0)** - [Speaker] In our previous [[CodePen]] exercise, we got some practice building a basic grid layout. In this exercise, we're going to do the same, but take it a step further and create a 12-column grid system to lay out the page components. Let's update the CSS file path to grid CSS and open the file. (clicks loudly) The first thing we'll do is set up the dimensions. In the container block, add display grid to define this div as the grid container. (clicks loudly) Then we'll use grid template columns with the repeat function.
>
> **[0:46](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=46)** Inside the parentheses, let's set the first value to 12 for 12 columns, followed by a comma. For the size value, we'll use the minmax function. The space between the comma and the minmax isn't required, but I like to add it for readability. For the minmax value, we'll set the first value, which is the minimum to zero. When there's no content, an empty column will not be displayed. Then add a comma and set the max value. I'll use 1fr to make all 12 columns the same size. Let's save the file and see how this looks in the browser. There are currently only five-grid items, so they'll automatically fit into the first five columns. Each will span one grid cell by default, the header and footer should span all the way across. Just like the last exercise, we can use grid column to change their position and make them span across multiple columns. The start value is going to be one, and the end value is going to be 13. It kind of feels like the end value should be 12 since there are 12 columns. But remember, the grid lines are numbered on the left and right side of the grid items. For example, this last grid item is currently ending in line six, one, two, three, four, five, six. Let's go back to the grid CSS file.
>
> **[2:22](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=142)** Starting with the header, add the grid column property, set to one for the start value, which is the left side. Then add a forward slash followed by 13 for the end value. Add the same style to the footer. (clicks loudly)
>
> **[2:51](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=171)** Let's save this update and see how it looks in the browser. The header and footer now span across all 12 columns, which currently equals the full width of the browser viewport. For the remaining three-grid items, we can distribute them across the 12 columns by allocating three columns each to the nav inside bar, which leaves six columns for the main content. Let's go back to the CSS file. Let's scroll-up to the nav section and we'll add the grid column property. And for the value, we'll start with one for the left-edge, followed by a forward slash and four for the end value. This will make it span across the first three columns. For the main section. For the main section, we'll set the start grid column value to four. This will make it line up right next to the nav. Add the forward slash and the end value of 10 to make it span across the next six columns. For the aside, we'll add the grid column property here as well. The start value is going to be 10 to line up next to the main element and the end value will be 13 to line up to the right-end of the grid container. Let's save this update and switch over to the browser. And there you have it. The nav, main, and sidebar sections are now distributed across our 12-column grid layout. If you need to adjust the dimensions,
>
> **[4:24](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-build-a-layout-with-grid-26989221?u=76281980&t=264)** just modify the grid column, start and end values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CodePen]] (1)
> **CLI Commands:** make (5)
> **Env Vars:** css (4)
> **Cross-References:** go back to (2)
> **Analogies:** just like (1), for example (1)
> **Non-Speech:** (typing loudly) (2)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)

#### [Exercise: Create a sticky footer with Grid](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=0)** - [Instructor] When the overall page content is shorter than the height of the browser, we'll see empty space after the last page component. But we also tend to expect a footer to be displayed at the bottom of the page. But by default, any container element is only as tall as its content. To make the footer stay at the bottom of the page, often referred to as a sticky footer. We can use CSS grid to size the rows to fit the height of the view port. Let's switch over to the grid CSS file. All page content is added inside the body element, and even though it represents the browser view port, the height of the body element is the same as its content. So the first style we need to add is height to the body element to make it expand the height of the view port. It's common to add this style to both the [[HTML]] and body selector. So let's create a new selector list. I'm going to put it right above the body, starting with HTML comma body, add the left and right curly brackets, and we'll set the height to a hundred percent. This will make the HTML and body elements span 100% of the view port height when the content is shorter than the view port. If the content is longer, they will expand to match the height of the content. Next, we'll add a height to the container. We'll set this to a hundred percent as well
>
> **[1:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=95)** to make the grid span the height of its parent element, the body element. Let's save the file and see how this looks in the browser. Now we can see that the grid container has spanned the full height of the browser view port. The height of the rows automatically adjusts to fill the space. However, a typical page layout tends to keep the header and footer sized to the height of their content. This approach is more common than evenly distributing the extra space across all rows. I'm going to [[Zoom]] out a bit in my browser to show how the page would look on a larger screen. The taller the view port, the more space will be added below the content in each row. Let's go back to the CSS file one more time and specify the row heights. In the container block, add the grid template rows property.
>
> **[2:35](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=155)** For the three rows, we'll set the following height values, auto for the header, 1FR for the middle content area and auto for the footer, save the file and go back to the browser. Now that the header and footer is set to a row height of auto, it makes them the same height as their content. The middle row was set to a height of 1FR so it expands to fill the remaining space. As a result, the footer will always be placed at the bottom of the page, no matter how tall your browser view port.
>
> **[3:19](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/exercise-create-a-sticky-footer-with-grid?u=76281980&t=199)** You can also create a sticky footer using Flexbox, though it works better if you are working only with columns. When creating layouts with both rows and columns, grid is usually the better choice. However, there's no one size fits all solution. It depends on what you're trying to accomplish, and both Flexbox and Grid offer many options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[Zoom]] (1)
> **Env Vars:** css (3), html (3)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and resources](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/next-steps-and-resources-26970311?u=76281980&t=0)** - In this course, we've explored the evolution and core concepts of CSS layouts. If you're wondering where to go next, here are some suggestions. Practice the exercises again, independently, and use the videos to check your work. You can also dive deeper into the Flexbox and Grid Layout Modules. The Mozilla Developer Network is my go-to resource. They have reference guides, and I've also included links to additional tutorials. We covered a lot in this course, so maybe your next step might be to just take a little break, because you've definitely earned it, and just come back when you're ready and learn some more.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Cross-References:** we covered (1)
> **Speakers:** - in (1)


## Instructor

- [[Christina Truong]]

## Resources

- Exercise files available

## Skills Covered

- CSS Grid Layout
- Cascading Style Sheets (CSS)

## Path Context

### In [[Learn CSS]]
← [[CSS- Variables and Fluid Layouts]] | **11 of 12** | [[CSS- Print Style Sheets]] →

## Appears In

- [[Learn CSS]]

## Related Courses

_Courses sharing skills:_

- [[CSS- Advanced Layouts with Grid]] — Cascading Style Sheets (CSS), CSS Grid Layout
- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Cutting-Edge CSS]] — Cascading Style Sheets (CSS)
- [[Building Great Forms with HTML and CSS]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)