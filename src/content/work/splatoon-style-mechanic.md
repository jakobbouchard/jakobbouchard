---
title: Splatoon-style mechanic
description: I was in charge of recreating Splatoon’s ink mechanic for a project.
publishDate: 2023-04-28 00:00:00
attribution: Created as game dev student at <a href="https://uqat.ca">UQAT</a>
videoPreview: /splatoon-style-mechanic.mp4
img: ./splatoon-style-mechanic.png
tags:
  - Game mechanic
  - UE 5
---

## Project overview

In my second semester at UQAT, I was part of a team of 8 people, including 3 artists, 4 designers, and myself as the main developer/tech designer. We had to randomly draw a pop culture character and create a game inspired by it. We got Splatoon's Inkling, and took the bold decision to replicate the ink mechanic as our main game mechanic, which ended up being quite the technical challenge.

## My role

I was in charge of developing the ink mechanic, debugging and fixing performance issues, as well as helping my team with developing the other features. Multiple difficulties have been encountered, mostly around correctly mapping the hit coordinates to the hit mesh's UV coordinates. This proved to be particularly difficult on walls due to them being at different angles and requiring a bit more math to get correctly. It's still not 100% accurate, but it usually looks pretty okay. Floors usually have no issues however.

Another big issue we encountered was performance, though this was partially my fault as I inadvertendly set the render target's texture size way too high while testing, which caused performance issues in later builds. By using Unreal's CPU and GPU profiling tools, I was able (with the assistance of my great teacher) to identify the issue and promptly fix it, as well as some other problematic functions in other features.

Here it is in action in a testing gym, followed by a little bit of gameplay from our completed project. Note that the performance while recording is affected due to CPU and GPU overhead and is not representative of the game's actual performance, even if we did have lower performance than other projects.

<iframe src="https://www.youtube-nocookie.com/embed/nzv1gIhrnms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
