---
layout: post
title: "The Submarine Project"
project: true
date: 2019-08-19
modified: 2019-12-13
excerpt: "Part 1: The motivations and first steps of the Submarine Project"
feature: https://nekox.net/assets/img/submarine/type-2.jpg
tags: [Submarine, Mechatronics, Project]
comments: true
---



**This post is a work in progress!**

Drones are a fascinating topic and have become very pervasive throughout military and civilian sectors. Though the word *drone* is thrown around a lot, in the technology space it typically refer to Unmanned Aerial Vehicles (UAVs), such as the quintessential quadcopter. There are many, many uses for UAVs, notably, they allow the survey, navigation, and inspection of uncertain or tight locations without risking human life (Kendoul, 2012). Of course, there are a number of limitations with UAV technology, with one of the key limitations being the weight capacity of rotorcraft drone systems.

One of my interests over the years has been water-based or underwater drones, or more formally *Unmanned Underwater Vehicles* (UUVs) stemming from a long-standing interest in all things military and maritime. Given the potential for long-range surveys of oceanic health, mapping in detail the topology of the seafloor, and the extended study of the impacts of climate change on our oceans, there are a significant number of motivations to pursue advances and the state-of-the-art in UUV technology.

Plus, submarines are just fascinating! The project here is best described as *half-boat half-submarine and totally awesome!*

# NXiS Kitakami

Describing the project as the "Submarine Project" is tiresome and no fun. In following with the nekox theme, the ship prefix used will be 'NXiS' or **N**eko**X** **I**ntegrated **S**hip. The first ship of the class was designated *Kitakami*, translating to *Northern God*.

### Purpose

The primary purpose of the Kitakami-class submarine is to facilitate the mounting and operation for scientific instruments on-board and within large, open bodies of water, for the purpose of research and scientific endeavour. 

The key focuses of the Kitakami-class submarines are the following:

* Flexibility
  * To act as a platform for the purpose of scientific data-gathering and research;
  * Allow for the mounting of equipment or instrument, through open and common standards, with direct and supported connections to the submarine's main computing equipment;
  * To have ample space for mounting and facilitate the removal and changing of all components;
  * To allow and work towards the possibility for future upgrades, such as the flexibility to upgrade or replace components, alongside the addition of new equipment for core systems such as navigation;
* Long-range Water-based
  * The ship must be able to navigate for long periods of time under its own power in open bodies of water, including in unfavourable environments;
  * The ship must be environmentally-sensible as to not disturb oceanic ecosystems, such as through creating unnecessary pollution or the use of unsustainable methods of construction;
  * The ship must be capable of unmanned navigation and obstacle avoidance;
* Submergence
  * The ship should be able to submerge for a "reasonable" amount of time. This doesn't imply that the ship should stay submerged, however, the ability *to* submerge is crucial, otherwise, it's a glorified boat;
  * The ship must be able to operate underwater, notably, be resilient and capable of diving to certain depths;
  * The ship should have fail-safe systems in the case of water breaches;
  * 







The mechatronics project is will underway now and we've received some new insights into the design of the device as well as the components in a nice big tub. This post will largely focus on the start of the mechatronics project along with some comments on design ideas and how the system works.

![A scene of the Tub](https://nekox.net/assets/img/mechatronics-part-2/IMG_20190819_112609.jpg)

---

## LabVIEW and MyRIO

The mechatronics arm will be programmed using LabVIEW software and the myRIO development package. A quick and dirty explanation is as follows:

* **LabVIEW:** Laboratory Virtual Instrument Engineering Workbench; discount Simulink.
* **myRIO:** My Reconfigurable Input/Output Embedded Device; like Mac to Android: overpriced, does the same thing, requires more know-how to do the same thing.

The installation process isn't so pretty either since it's quite complex, asks for the serial number **_after_** installation (SOLIDWORKS asks before), and installs to a default location without asking for alternate install locations.

Hello, National Instruments! We, the people, tend to use two drives: One for Windows, One for Everything else. Please wise up next time!

![Local disk filling up; hard drive almost empty](https://nekox.net/assets/img/mechatronics-part-2/explorer_BEGEr4YKbT.png)

The myRIO was also bricked:

![myRIO Unrecoverable Error](https://nekox.net/assets/img/mechatronics-part-2/IMG_20190816_155127.jpg)

It took a little while to get the myRIO replaced, and a bit longer to get the right software installed. For those wishing to develop with myRIO, search up 'myRIO Software Bundle' instead, it works a bit faster than trying to install it through the academic bundle.

After the installation hiccups, development process was fairly straightforward. Working in a similar manner to Simulink's graphical interface. I'll spare you the boring development details, though a more thorough explanation will be provided later.

## SOLIDWORKS Modelling

Along with the electrical and control component, we'll also need to build the robotic arm and the base. To facilitate this, I modelled the servo and electromotor we had on hand since we did not know which specific models they were. It allows us to better visualise the final product and saves us the hassle from doing it later. 

The modelling process itself was fairly straightforward -- grab a pair of callipers and start measuring. Measure from multiple places, and make sure the measuring is good. The rest is simply the process of modelling in SOLIDWORKS since the system has it's own quirks. The following two images are the SOLIDWORKS models of the Servomotor and the Electromagnet. Of particular note, the electromagnet is asymmetric, protruding out about 1mm on one side to make space for the wiring.

![Servo.gif](https://nekox.net/assets/img/mechatronics-part-2/JBWvYO4Kmb.gif)

![Electromagnet Model](https://nekox.net/assets/img/mechatronics-part-2/69162129_513482299398962_6224456107910234112_n.png)

## To Come:

* Designs!
* myRIO programming!

This blog post will be updated in due time as more interesting information and developments surface along with more opportunities for discussion!



## References

F, Kendoul, 2012, 'Survey of Advances in Guidance, Navigation, and Control of Unmanned Rotorcraft Systems', *Journal of Field Robotics*, vol 29, pages 315-378.