---
title: Open Source and a Tech Presence
layout: post
post-image: "https://nekox.net/assets/images/post-image/8OyKWQgBsKQ_post.jpg"
photo_author: "Markus Spiske" 
photo_link: "https://unsplash.com/@markusspiske"
author: Mikanwolfe
description: Moving from being anonymous on the internet to being a bit more open source
tags:
- blog
---

In a good way, I've avoided having an online presence since it can be quite risky. In this sense, it was the safe bet. However, it also meant that I might've missed opportunities to contribute and to make a change. Well, that'll change slowly. I want to embrace having an online presence and there's no better time to start than now.

## Contributing to Open Source Projects - A Tale of Two Forks

I had a unique opportunity to contribute to an open source project that I didn't realise I had. In the fumbling development of nekox.net, I refined the nav bar slightly. Not much, but for me, it made quite a difference. nekox.net is based on [WhatATheme](https://github.com/thedevslot/WhatATheme) by [thedevslot](https://github.com/thedevslot). A nice, simple, portfolio theme that has a strong showcase album. 

### The small change

The theme has a highlightable navigation bar, with your current scroll position on the page highlighting the item. This was taken quite literally in the original commit:

{% highlight html %}

<script>
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    var item = document.getElementsByClassName('navbar-item');
    /* console.log(scroll); */
    if (scroll < 565) {
      item[1].classList.add('is-active');
      item[2].classList.remove('is-active');
      item[3].classList.remove('is-active');
    }
    if (scroll > 565 && scroll < 1130) {
      item[1].classList.remove('is-active');
      item[2].classList.add('is-active');
      item[3].classList.remove('is-active');
    }
    if (scroll > 1130) {
      item[1].classList.remove('is-active');
      item[2].classList.remove('is-active');
      item[3].classList.add('is-active');
    }
  });
</script>
{% endhighlight %}

Though this worked fine for most devices, it created some challenges when viewed on other machines with differing aspect ratios. The prime example was my 1440p ultrawide. And, of course, magic numbers. 

At some point in my original development, I had written the following replacement.

{% highlight javascript %}
  var navItems = document.getElementsByClassName('navbar-item');
  var heroes = document.getElementsByClassName('hero');
  var magicScrollNumber = 200; 

  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    var position = window.pageYOffset;

    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('is-active');
    }

    for (var i = 0; i < heroes.length; i++) {
        var sectionTop = heroes[i].offsetTop-magicScrollNumber;
        var sectionBottom = heroes[i].offsetTop + heroes[i].offsetHeight-magicScrollNumber;

        if (scroll >= sectionTop && scroll < sectionBottom) {
          navItems[i+1].classList.add('is-active');
      }
    }
  });
{% endhighlight %}

In was, and still am, quite new to JavaScript, so optimisation or smarter syntax is slightly beyond me. The important aspect was that it was dynamic, which is important. This would come up later down the line when I added additional sections to the original theme. 

### The difficulty with Forks

As nekox.net is a fork of WhatATheme, I couldn't actually contribute to the original project! Git and by extension, GitHub, only allowed one fork at a time. Though this would work for most repositories - not keeping multiple forks - it made it difficult to contribute to the original project.

I could try to stash my changes, create a new branch, or try to forcibly clone items over, however, I don't want to run the risk of breaking too many things at once.

### The solution is organisation

As par for the course, the solution was on [StackOverflow](https://stackoverflow.com/questions/12338240/how-can-i-fork-the-original-repo-when-ive-already-forked-a-different-fork/12339396#12339396), but sort of hidden away in the final line:

> As said earlier there is actually a twisted way to have multiple forks,  which is to create organizations and fork in them. That way you can  "own" multiple repositories in the same graph.
>
> -- [*Sigma*](https://stackoverflow.com/users/753817/sigma)

The process of creating an organisation was simple, and it also let me make the contribution as my main account, Mikanwolfe. I forked a new version of WhatATheme to a nekox-net repository and worked on the changes there.

![image-20220416130933913]({{site.url}}{{site.baseurl}}/assets/images/2022-04-16-open-source-and-tech-presence.assets/image-20220416130933913.png)

I've always been slightly confused as to the nature of 'pull' and 'fetch' requests, and no amount of theorycrafting really made sense. I reckon this comes from our intuition on *where* we locate ourselves compared to a repository. Though one can say you 'pull' changes into a master file, it's quite difficult then to understand the nature of fetch. I think a good analogy and analogue is the *PLC Upload and Download*. 

When you copy a file from a PLC, you imagine the PLC as being underneath you. Oftentimes this is quite literal, as PLCs will be located close the the hardware it is controlling, and offices don't tend to be on the ground floor. As a result, the following confusing terminology is thrown born:

* You Upload from a PLC to get information from it
* You Download to a PLC to write to it

This it the complete opposite of how we imagine the relationship of computers and servers to work. We often upload information *to* the web and download *from*. This is an easier to understand example, but it doesn't help unless we have a truly intuitive grasp of it. A really good explainer can be found on the [FireShip Channel](https://www.youtube.com/watch?v=HkdAHXoRtos).

Back to WhatATheme, the next step was to push to the nekox-net fork's master. After that, create a pull request!

![image-20220416131542289]({{site.url}}{{site.baseurl}}/assets/images/2022-04-16-open-source-and-tech-presence.assets/image-20220416131542289.png)

So that's where we're at. The pull request is there and hopefully it gets accepted. 

This is my introduction into open source and trying to develop more of my online presence. I've also wanted to write more to my blog but never had the courage to do so. In doing this, I want to test out the formatting of the blog posts and if I can sneak in images in the ``_posts` folder.

I also have some ideas for further development of nekox.net and maybe even building it into a proper framework for others to use. A simple one would be Syntax highlighting. Others include `figcaptions` but I want to do so much more.

That's all for now

Mikanwolfe



