---
title: Tiny Space Ninja
description: Slash through an invasion of peeping aliens to save the mental health of the Space Station's astronauts.
publishDate: 2023-09-25 07:00:00
attribution: Created for <a href="https://itch.io/jam/gbjam-11">GBJam 11</a>
url: https://croustade.itch.io/tiny-space-ninja
img: ./tiny-space-ninja.png
filters:
  - Game jam
  - Godot 4
tags:
  - Game jam
  - Godot 4
  - Aliens
---

## Technologies used

- Godot 4.1.1
  - Custom HTML shell
  - Custom theme
  - GDScript static typings
  - TileMap
  - Shaders for the black & white flash effect
- Sketch, to create the macOS icons using Apple's templates

## Project overview

When we saw the announcement for the [GBJam 11](https://itch.io/jam/gbjam-11), my friends ([Cédric](https://cedriclaroche.com) and [Gabby](https://gabbyrondeau.itch.io/)) and I knew we had to participate. It was a simpler jam, with fun restrictions and we wanted to take a stab at it. The theme, _Space_, somehow inspired us to create a game about a ninja that must slash through aliens in low gravity. It's a fun and quirky control scheme to work with, and it ended up being a great experience and game!

## My role

In _Tiny Space Ninja_, I was in charge of most of the programming aspects. I programmed the movement/strike mechanic, which actually just teleports you to your next position, depending on how much you charged the strike. It was my first time implementing something like that, and I learned quite a lot with it. It turns out that with these types of thing, order of operation can matter quite a bit if you don't want the player to be able to teleport into walls or something similar. In the end, using a raycast that gets force updated right before the check seemed to be the most optimal solution to this problem. If the raycast collides with something in the environment, it forces the teleport position to be on the collision point. To kill the enemies, the swoosh sprite actually has its own hitbox, where it will only detect enemies and then kill them when you strike.

I also had my first experience with writing shaders (for games, since I used shaders in my [Flibbert](/work/flibbert-engine) project), though it's an incredibly simple one. It sets every pixel's colour to white, except for perfectly black ones, and we used it to create a flash effect when you hit an enemy. It probably could've been done in another way, but I wanted to try shaders.
