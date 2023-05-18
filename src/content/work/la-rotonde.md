---
title: La Rotonde
description: |
  We developed a new custom WordPress-based website for the oldest French-language student newspaper outside of Québec.
publishDate: 2021-09-15 00:00:00
attribution: Created as web developer at <a href="https://distantia.ca">Distantia</a>
url: https://www.larotonde.ca
img: ./la-rotonde.png
tags:
  - Website
  - WordPress
---

## My role

I was in charge of programming the whole website, based on the design from our Senior Designer [Michel Thérien](https://micheltherien.com), with the exception of the home page's post grid filtering. Since the website is content-focused, we have chosen to not integrate too many animations and transitions, so as not to distract from the content. I also had to create a good layout for the print style of article pages, for cases where people want to download or, obviously, print the article.

The website has a "subscriber portal" where readers can create an account, save articles, and enable notifications for individual categories. Every morning, one email per category is sent out to subscribed readers, so they can always be up to date on the latest news that have been posted. I also integrated the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API) in supported browsers, so that the OS share sheet can be used for sharing, enhancing the user experience. For unsupported browsers, this gracefully falls back to a tooltip with some sharing options.

The transfer of articles from the old website was a relatively easy task since their website was already using WordPress. This allowed article links that were shared before the redesign to still work correctly, without any complex redirection setup.

### Technologies used

- Figma, to get design tokens
- WordPress
  - In-house theme
  - Subscriber portal with email notifications
  - ACF Pro
  - JS Composer
  - Select2
  - Mailchimp
  - Web Share API
