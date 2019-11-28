---
layout: post
title: "Modifications to the Moon-based Nekox Theme"
date: 2019-11-27
modified: 2019-11-27
excerpt: "nekox modificatioons to the Moon theme and the process of not knowing web design"
feature: https://nekox.net/assets/img/features/nekox-site-source-code.jpg
tags: [nekox, web development, general]
comments: true
---


This site, **nekox.net**, has evolved quite a lot within the past year, from a simple placeholder HTML webpage to a proper portfolio site with some background. 

The intent behind nekox.net was to provide a platform for the discussion and distribution of my mechatronics- and software-related projects; along with other opportunities such as the Swinburne Mechatronics Engineering Society's site under a nekox subdomain ([smes.nekox.net](https://smes.nekox.net)). This would group all the work I've done under one major domain - nekox - for both consistency and aesthetic reasons.

---

## The Moon Theme

{% capture images %}
	https://cloud.githubusercontent.com/assets/754514/14509720/61c61058-01d6-11e6-93ab-0918515ecd56.png
    https://cloud.githubusercontent.com/assets/754514/14509716/61ac6c8e-01d6-11e6-879f-8308883de790.png
{% endcapture %}
{% include gallery images=images caption="Moon TaylanTatli Theme" cols=2 %}

The Moon Theme was intended to be a clean, one-column experience that focuses on the delivery of content. The first step was to expand on this slightly due to the increased use of maths, code, and image features cluttering up posts. The expanding is quite literal -- with the width of the nekox columns increased to a little over 1100px compared to the original 850px. 

{% highlight scss %}
.wrapper {
	width: 75%;
	max-width: 1150px;
	margin: 4rem auto;
	background: $white;
	color: $color_tuatara;
	padding: 2em;
	border-radius: 2px;
	box-shadow: 0 0 10px 0 rgba($color_shark,0.3);
	@include transition(.5s);
	@media #{$small} {
		width: 90%;
		padding: 2em 0;
	    box-shadow: none;
	}
}
{% endhighlight %}

Having not done much web devlopment nor design before (and especially -- scss and Jekyll), the learning curve to modifiying the Moon Theme started.