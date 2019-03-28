---
layout: post
title: Artillery 3 and Design Patterns
date: 2019-03-29
excerpt: "The process and development of Artillery 3"
tags: [engineering, programming, csharp, design patterns]
comments: true
---

# Design Patterns and a University Project

When we have a problem, as engineers, we find solutions. Often, there are smarter people who have had the exact same or very similar problems and thus, have also found solutions. More often than not, their solutions are often a lot better than what we could produce in our limited time we have to deal with the problem, be it a technical or temporal constraint. 

The entire idea behind frameworks and standard libraries is to save time for us measly programmers as they provide solutions for common problems. The concept of design patterns extends this to the more abstract domain.

Design patterns are programming are used to address common problems that come up when developing an Object-Oriented (OO)-solution. The fundemental framework of OO Design patterns are the 23 by the Gang of Four (GoF). 

Divided into three categories, the patterns are:

- **Creational Patterns**
  - Abstract Factory
  - Builder
  - Factory Method
  - Protype
  - Singleton
- **Structural Patterns**
  - Adapter
  - Bridge
  - Composite
  - Decorator
  - Facade
  - Flyweight
  - Proxy
- **Behavioural Patterns**
  - Chain of Responsibility
  - Command
  - Interpreter
  - Iterator
  - Mediator
  - Memento
  - Observer
  - State
  - Strategy
  - Template Method
  - Visitor

Of course, those are "just" the 23 base patterns for OOP-based programming written in a book that's been dated to almost 20 years ago. What I'm interested in is design patterns related to creating a game. 

For my High-Distinction (HD) project I plan to undertake for one of my programming units, I will be attempting to incorporate modern design patterns into a C# game.

---



# Artillery 3

Artillery was the HD project for the preceding unit and therefore it felt reasonable to both re-write and extend on the concepts explored in Artillery. This post will be dedicated to the conceptualisation and the research I will be doing to realise Artillery 3 as a HD project.



#### Version Information

To simplify and seperate the different versions and iterations. The following format will be used to describe different versions:

`iteration . minor - [e|r]`

* Iteration: Major development milestone.
* Minor: Build.
* Experimental or Release: Build stability.
  * Experimental encompasses straight up incomplete code.
  * Release means it works.

For example, 

Iteration 1 Update 1 Experimental: `1.1-e`

Iteration 5 Update 6 Release: `5.6-r

#### Iteration 1







---

Design patterns are the programming equivalent to mathematical theorems: they're a great for paper warriors who like to explore the realm of the theoretical to solve a very specific problem, but it's difficult to find or recognise an appropriate situation to apply design patterns to.

**State Design Pattern**

[intro]

States are useful as they allow for stronger adhesion to OOP principles. As states are their own class each state has access to only the information it needs.



**Observer Design Pattern**

* Acheivements!
* Audio
* UI Elements

The observer design pattern is used widely as event-driven programming due to the nature of the observer pattern and it's actually baked into C# using the `event` keyword. See [this](https://www.tutorialsteacher.com/csharp/csharp-event) for a fairly good tutorial.

 **Component Design Pattern**

Prefer composition over inheritance. --  Unless you really need inheritance, don't use it.

Composition composes of both interfaces (for casting, good as faux-inheritance) and object components . An important thing to remember is where we get components:

* If the object creates its own components
  * Object always has components it needs
  * Harder to reconfigure
* Object is provided components
  * More flexible
  * Decoupled from concrete component types (neutral)

*Components communicating to each other*

* Modifying the container object's state
  * Input chances velocity, physics chances position based on velocity of parent.
* Referring directly to each other
  * Get one component to know about another component directly
* Messaging
  * I won't touch this.



**Prototype Pattern**

* Lots of the same kind of entities (variations of the same object)



If we stretch our definitions of *design patterns* a little, game design often incorporates the following:

* OOP Principles
  * Polymorphism
  * Inheritance
    * And composition, though Inheritance vs. Composition is something for another day
  * Virtual and Abstract Classes
    * The implementation of Interfaces and their uses
* Game Design Patterns
  - Game Loop
  - Double Buffer
  - Update Method
* Design Patterns (Traditional, GoF 23)
  * Factory
    * *An object who's sole purpose is for creating other objects*. In reality, the factory design pattern is useful for a variety of reasons and sees extensive implementation in games development which will be discussed in more detail later (if you're reading this then the author forgot to write a more detailed description here and thought delegating to a later post might be good temporary solution.)
  * Observer
    * (TODO)
    * Used for animation and other user-driven interactive events. Will explore and write about later.
  * State
  * Composite
  * Facade
  * Chain of Responsibility
  * Command
  * Strategy
  * Template
* To Do for me:
  * Abstract Factory/Factory for UI versions
  * Composite for vehicle stats
  * Singleton for factory and/or config?
  * Game State/Stack 

---



## The implementation of OOP Principles in Game Development



- Polymorphism
- Inheritance
- Virtual and Abstract Classes




## Game-Specific Design Patterns

- Game Loop
- Double Buffer
- Update Method

## The use of <u>Design Patterns</u> in Game Development

- Factory
  - Being able to create object instances based on a string read from a file, e.g. NPCs, GUIs.
  - Might not be as useful for be since this might imply some bigger programs, though it might be useful for other projects such as an RPG
- Observer
  - Renderable representation of, for example, the player, that listens to the logical representation of the player by checking the state of the player. This isolates the rendering logic from the game code itself. 
  - I'm not sure of the direct implementation of this though I can imagine the "whole" character composed of both a RenderableObject and the GameObject.
- State
  - Store a game character's states such as walking, wandering, fleeing, with their own update methods and whatever data is required (wandering where, fleeing from what).
  - http://gameprogrammingpatterns.com/state.html
  - Possibly making a GameState stack
- Composite
  - Make a scene out of renderable objects or GUI elements.
  - "Compose" objects into tree structures.
  - Try to use this somehow
- Chain of Responsibility
- Command
- Strategy
- Template

---

**Disclaimer**

These are my notes when it comes to this topic, as I'm learning with you, I can't say for certain if any or everything of what I say is even remotely correct, other than citing sources incorrectly. If I make a mistake, please don't get mad, I'm just a simple engineering student trying to make ends. Comment down below if something's off and I'll do my best to fix issues as they arise.