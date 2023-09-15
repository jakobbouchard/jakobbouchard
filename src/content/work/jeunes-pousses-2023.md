---
title: NFB's Jeunes Pousses 2023
description: A mobile-only web experience. More details will be revealed once the project is published.
publishDate: 2023-07-27 00:00:00
attribution: Created for my internship at the <a href="https://nfb.ca">NFB</a>
img: ./jeunes-pousses-2023.png
filters:
  - Web
tags:
  - Mobile-only web experience
  - PixiJS
  - howler.js
---

## Technologies used

- PixiJS
- howler.js
- GSAP
- pnpm
  - ESLint, Prettier, Husky, lint-staged and Vite for project setup
- ES2022 features such as [private class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) (though they are transpiled by Vite)

## Project overview

Around November 2022, [call for applications](https://production.nfbonf.ca/en/lab/jeunes-pousses-digital-apprenticeship/) by the NFB for six interns to build a mobile-only web experience centered around the _Optimus_ theme. I was one of the two developers chosen for the internship, and you can learn more about the rest of my amazing team on [the NFB's blog](https://blog.nfb.ca/blog/2023/05/17/meet-the-fourth-crop-of-jeunes-pousses-at-the-nfb/).

## My role

In the beginning, the tasks split between the other dev and I were pretty similar. He worked on half the "levels", I did the other half, but over the following weeks it became clear that one of us would be working more on the core of the application, as well as on optimizations. I chose to work on this part, as I had prior experience with building similar apps, and he had more experience with programming interactive applications (he has a lot of experience with Processing).

## Technical challenges

### Size of the experience

On a mobile device supporting AVIF, the French experience weighs ~49.5MB, split in the following way:

- 34.85MB for 1696 images (excluding inline SVGs).
  - 32.46MB of which are 1655 1000x1800 pixels, that are part of multiple full-screen stop-motion animations shown throughout the experience.
- 11.04MB for 36 Opus audio files.
- 2.81MB for the NFB framework and its dependencies (jQuery, fonts, GTM)
- The rest is a mix of HTML, CSS, JavaScript, JSON and a font.

The English experience might have a slightly different weight due to differing text lengths.

### Stop-motion JS implementation

While a video could've been used for the stop-motion animations, modern video codecs are not as well supported as modern image formats such as AVIF and WebP. We could've used H264 or VP8 as the video codec, which I expected would've made the experience heavier or of lesser quality, or we could've used AV1, with VP9, VP8 and H264 fallbacks. I didn't test these theories until late in the internship, because I didn't want to test with placeholder assets, and when I had the final assets, we were rushing already. After testing during the last week, I realized that a video would've in fact been less heavy than all the images. In any case, 33MB for over 1600 high resolution images was good enough in our opinion, so we went with that. Of course, this meant implementing the stop-motion animations with JavaScript, which had its own set of challenges.

I initially used one `<img />` tag and changed the image every frame, but this ended up causing flashes, even if the image was preloaded. I then tried using two of them, flipping the visibility between them and loading the next frame in the hidden one, but this also had some flashes in the first couple of frames (again, despite the preloading). The final solution ended up being a full-screen canvas, which completely eliminated the flashing issues and was also probably much more performant. Along the way, I optimized part of the code, unloading the previous frame when showing a new one, to ensure the next GC run would free them from memory. Since the code used `requestAnimationFrame()`, putting the tab in the background slowed down the animation, causing a desync with the audio, which meant I had to refactor the way I showed frames, ensuring I skipped frames when necessary.
