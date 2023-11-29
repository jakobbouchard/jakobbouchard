---
title: NFB's Jeunes Pousses 2023
description: A mobile-only web experience. More details will be revealed once the project is published.
publishDate: 2023-07-27 00:00:00
attribution: Created for my internship at the <a href="https://nfb.ca">NFB</a>
img: ./jeunes-pousses-2023.png
filters:
  - Web
tags:
  - Mobile experience
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

Around November 2022, [call for applications](https://production.nfbonf.ca/en/lab/jeunes-pousses-digital-apprenticeship/) by the NFB for six interns to build a mobile-only web experience centered around the _Optimus_ theme. I was one of the two developers chosen for the internship, and you can learn more about the rest of my amazing team on [the NFB's blog](https://blog.nfb.ca/blog/2023/05/17/meet-the-fourth-crop-of-jeunes-pousses-at-the-nfb/). If you want to test the experience before it has been released, please [contact me](/contact) and I will provide you with a link and password!

## My role

In the beginning, the tasks split between the other dev and I were pretty similar. He worked on half the "levels", I did the other half, but over the following weeks it became clear that one of us would be working more on the core of the application, as well as on optimizations. I chose to work on this part, as I had prior experience with building similar apps, and he had more experience with programming interactive applications (he has a lot of experience with Processing).

## Technical challenges

### Size of the experience

On a mobile device supporting AVIF and AV1, the French experience weighs ~28MB, split in the following way:

- 7.44MB for 479 images (excluding inline SVGs).
  - 4.02MB (or 429 images) of which are part of a couple of full-screen stop-motion animations shown in the experience, as well as the logo in the beginning.
- 5.57MB for 4 videos.
- 11.94MB for 37 Opus audio files.
- 2.81MB for the NFB framework and its dependencies (jQuery, fonts, GTM)
- The rest is a mix of HTML, CSS, JavaScript, JSON and a font.

The English experience might have a slightly different weight due to differing text lengths.

### Initial stop-motion JS implementation

While a video could've been used for the stop-motion animations, modern video codecs are not as well supported as modern image formats such as AVIF and WebP. We could've used H264 or VP8 as the video codec, which I expected would've made the experience heavier or of lesser quality, or we could've used AV1, with VP9, VP8 and H264 fallbacks. I didn't test this theory until late in the internship, because I didn't want to test with placeholder assets, and when I had the final assets, we were rushing already. After testing during the last week, I realized that a video would've in fact been less heavy than all the images. In any case, 33MB for over 1600 high resolution images was good enough in our opinion, so we went with that. Of course, this meant implementing the stop-motion animations with JavaScript, which had its own set of challenges.

I initially used one `<img />` tag and changed the image every frame, but this ended up causing flashes, even if the image was preloaded. I then tried using two of them, flipping the visibility between them and loading the next frame in the hidden one, but this also had some flashes in the first couple of frames (again, despite the preloading). The final solution ended up being a full-screen canvas, which completely eliminated the flashing issues and was also probably much more performant. Along the way, I optimized part of the code, unloading the previous frame when showing a new one, to ensure the next GC run would free them from memory. Since the code used `requestAnimationFrame()`, putting the tab in the background slowed down the animation, causing a desync with the audio, which meant I had to refactor the way I showed frames, ensuring I skipped frames when necessary.

### Updated stop-motion implementation

As previously said, during the last week of the internship, I decided to test my theory that videos were heavier than images, and it turned out that I was completely wrong! Even H264 videos are much lighter than loading images. I kind of forgot that videos only store the difference between frames, and that despite H264 not being the most optimized format, it would still be better with the images we were using. However, the NFB wanted to make some changes to the experience (mostly making it a bit longer and difficult), and it was decided that I would be given time to optimize the stop-motions that could be converted to video.

So, armed with some FFmpeg knowledge from converting audio files, I converted 4 of the stop-motions to AV1 and H264 videos (VP9 turned out to not be worth it), and quickly adapted the script for the regular stop-motion to be using videos instead. Some of the stop-motion animations (the loop at the beginning and the end, as well as the logo) were kept as images, due to them being played before user interaction (meaning they couldn't autoplay as videos). The credits also have another stop-motion that's overlayed on top of the beginning loop, so this had to be kept as an image due to it being transparent.

In total, this saved us around 20MB of data, over 1200 images, as well as fixing a crashing issue we had on older devices. In theory, I *could* convert the last loop to a video too, which would save another 279 images, but since the loops aren't perfectly aligned, I preferred to keep them as images for now. Plus, the images are very lightweight since they have transparency.
