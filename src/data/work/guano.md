---
title: Guano
description: Play as a delightfully dumb seagull, find food and complete quests to help free the Grand Masters and gain their powers.
publishDate: 2024-03-01 12:00:00
attribution: Final project as game dev student at <a href="https://www.uqat.ca">UQAT</a>
url: https://store.steampowered.com/app/2779220/Guano/
# videoPreview: /guano
img: ./guano.jpg
filters:
  - Unreal Engine 5
  - C++
tags:
  - Video game
  - Unreal Engine 5
  - C++
  - Poopy
---

## Technologies used

- Unreal Engine 5.2
  - C++
  - Profiling
  - Post-processing materials
- Voxel Plugin
- Steamworks

## Project overview

Guano is a navigation game published on Steam created by a [team of 27 students](https://guanothegame.com/credits.html). In this game, the player embodies a seagull that must steal food from humans by any means, whether by defecating or screaming, and complete quests to reclaim the island. The game was built using Unreal Engine 5.2 over the course of two university semesters at UQAT. It was one of two final projects, the other one being Bolt'N'Punch, that you can [check out on Steam too](https://store.steampowered.com/app/2779390/BoltNPunch/).

## My role

I have been part of Guano from the beginning of the project in September 2023 right up until the release in March 2024. My role shifted from being the technical lead during the project's conception to being more of a jack-of-all-trades on the technical side, while still helping the technical director on some decisions.

Since the marketing was also handled by us, I offered to lend a hand for the technical side of it. I set up a **one-pager website** with a newsletter sign up to get an email when the game released.

### Project conception

In September 2023, the class was split in 11 teams and every team was to pitch a game idea. In the end only 2 games would remain, and I was lucky to be part of the Guano team from the beginning. This meant I was part of **all the technical discussions** from the beginning, and I was the one evaluating whether features were feasible or not with our small student team. Based on what we managed to accomplish in our previous semesters, the designs we presented were all very attainable.

### Technical planning

Once the full team was assigned, the technical director -- [Vincent Nadeau](https://www.linkedin.com/in/vincent-nadeau-570b8a1b6/) -- and I decided to take a step back and get an overview of the project so far. Following this, we implemented a crude **code review** system, where we shelved our changes and posted a thread on Discord to request a review from one of the other technical team's member. This ended up being very useful to catch bugs earlier and ensure that the code quality was similar among the team. Despite this, a lot of features ended up being rushed or changed too quickly for us to be able to plan them accordingly, which lead to some parts of the game being more clunky than we would've liked, as well as a lot of issues when doing the weekly build.

### Voxel Plugin

Because you played as a bird on an island, our level designers wanted to create a sort of cave system to enable the player to fully use the vertical real estate available to them. We had a lot of discussions about it with the whole team, but at some point the Voxel Plugin 1.2 was added as a last minute attempt for our technical proof of concept. This ended up being a bigger decision than we expected. Our level designer team liked to work with it, as it enabled them to work with a system similar to Unreal's landscape, but with a lot more power. It also saved a lot of time for the artists, which was really good. At MIGS, we got the chance to meet its developer, Victor Careil -- an amazing guy by the way, all the love to him -- and he generously offered some of his time as well as access to the **Voxel Plugin 2 preview**.

After a lot of technical discussions, we realized we were quite involved with the plugin already, so we decided to migrate to the VP 2 preview. There were a lot of advantages in doing so, notably the addition of brushes (now called stamps), which made it much easier to quickly build terrain instead of needing to sculpt everything. However, this came at the cost of a lot of instability, since the plugin was in very active development. It ended up taking a lot of my time in the technical team, as well as a lot of [Sasha](https://sashafortier.com/)'s time in the level design team (though they did an *amazing* job at documenting and learning the plugin). It's an amazingly powerful plugin, and I would work with it again now, but as a student, it was a much bigger challenge than we expected.

### Steam integration & Steam Deck support

From January to March, we started working on everything that would be needed for the release of the game. One of the necessary feature for the release of the game was Steam integration, which was something I wanted to do. I also decided to attempt and make the game compatible with the Steam Deck. Using the built-in **Online Subsystem** plugin, I created and programmed all of the **Steam achievements**, during which I learned that the plugin seems to not be super-well maintained, since the achievements did not always work. In the end, we used a third-party plugin, but I believe a custom implementation would've worked better. Because neither plugin provide overlay integration, I had to create my first C++ class to add a `BlueprintAssignable` delegate for the overlay activation event of the Steamworks SDK.

Despite our best efforts, we were not able to optimize the game well enough for it to run adequately on the Steam Deck. It did however enable me to learn about some of the differences between Linux and Windows packaging. Some of the C++ code doesn't always compile on Linux when it does on Windows, which can lead to some frustrating issues.
