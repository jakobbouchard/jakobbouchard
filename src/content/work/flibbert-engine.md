---
title: Flibbert
description: A small framework/engine that I'm working on to learn C++.
publishDate: 2023-05-14 18:00:00
url: https://github.com/jakobbouchard/flibbert-engine
# videoPreview: /decluttering.mp4
img: ./flibbert-engine.png
filters:
  - C++
tags:
  - Game engine
  - C++
  - OpenGL
  - ImGui
  - My cat
---

## Technologies used

- C++ 17
  - Precompiled headers
  - stb_image
  - spdlog
- ImGui
- OpenGL
  - Basic GLSL Shaders
  - glm
  - glfw
  - glad
- LLVM
- Ninja
- CMake 3.20
  - `configure_file`
- ClangFormat

## Project overview

For one of my winter 2023 classes, we had to find a game dev-related subject to explore. As someone that is quite interested by the technical side of things, I decided to learn how to use OpenGL in C++. After around half the semester, we had to set ourselves a new goal, so I decided to flip my OpenGL framework into somewhat a game framework/engine.

## My role

For the first half of the semester, I watched The Cherno's excellent [OpenGL series](https://www.youtube.com/playlist?list=PLlrATfBNZ98foTJPJ_Ev03o2oq3-GGOS2) and also his [C++ series](https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb). His teaching style really worked well with me, and it enabled me to quickly get up and running with rendering some polygons and textures on screen, as well as a 3D camera. I also needed to get back on top of my linear algebra, so I watched 3Blue1Brown's [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab).

For the second half of the semester, I moved to The Cherno's [Game Engine series](https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT), but quickly realized that he did not organize the game engine project in the same way as the OpenGL project. Because of that, I had to reorganize a lot of the project and drop some of the series' feature due to time constraints.

Since The Cherno was using Windows and Visual Studio for the whole project, and I was on a MacBook using JetBrain's CLion, I had to learn CMake. This actually proved to be very helpful and interesting, as it made me learn how the internals of a build system work. It also enabled me to make my project multi-platform quite easily. CMake can be quite a pain, but once you actually know how to use it, it's definitely not as bad as some people say it is.
