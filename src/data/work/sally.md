---
title: Sally
description: Sally is a life-sim game about community and belonging. Embark on a grand journey aboard a magic flying ship.
publishDate: 2024-06-10 12:00:00
attribution: Backend Programmer @ <a href="https://www.lucidtales.coop">Lucid Tales</a>
url: https://store.steampowered.com/app/2165040/Sally/
# videoPreview:
img: ./sally.jpg
filters:
  - Unreal Engine 5
  - C++
  - DevOps
tags:
  - Video game
  - Unreal Engine 5
  - C++
  - Flying ship!
---

## Technologies used

- Unreal Engine 5.3-5.5
  - C++
  - Custom K2 nodes
  - CommonUI
- Steamworks
- TeamCity
- Perforce

## Project overview

In Sally, you embark on a flying transport ship to guide passengers to their destination. To ensure the ship's success, you'll have to craft items, produce food, take care of other crewmates, maintain the ship and discover new ways to improve the travel experience.

## My role

I was brought in to the Lucid Tales team in February 2024 as an intern, but quickly learned the ropes of the project, and 2 months later I was an auxiliary member of the cooperative! The tasks I did during my internship helped me to get familiar with how things were structured, and I got to create a **tool to create rooms** in the Sally, which the kids now use to get a feel for the general layout of the ship.

Over the last year, I also got the chance to work on **dynamic level loading** for the floating islands, implementing features from **Lyra plugins** like the settings and the loading screen, custom build target, and a lot more small features than can fit in this page.

### DevOps

I am in charge of all **DevOps** aspects at Lucid Tales. When I was onboarded, the team was still manually building the game for every build review, which meant that some issues would only get caught a couple of hours before that. One of the first things I did was set up a **TeamCity** instance on the server that hosted our Helix Core Server installation, and I set up a basic pipeline that would build the game every night. Over the next year, I refined that pipeline, adding symbols upload and automatic version number updating, as well as using **our own Unreal Engine version** with a modified Crash Report Client.

### June 2024 Next Fest demo

With the DevOps pipeline set up a couple of months prior, the team's production speed was enhanced, which became especially helpful to meet the deadline for our Steam Next Fest demo that was due in June. During that time, I was tasked with refactoring the existing **quest system**, to make it easier to edit for our designers, as well as fit our new needs better. I also worked on adding a lots of new parts to the UI for the demo, notably a relatively simple **settings menu**, so that the game could run on lower-end hardware, which also came in handy when making it **compatible with the Steam Deck**.

### Gamescom 2024 demo

Since we were running a booth at Gamescom 2024, we decided to update our Next Fest demo with a feature that was highly requested, the **character creator**. This feature had already been worked on in the past, but its UI was not fully up to date, and a lot of options were missing. Therefore, I was tasked with reviving it, which was a great learning experience on UI navigation in Unreal, as well as **dynamically generating thumbnails** to give the player a better preview of what the clothes and styles would look like.
