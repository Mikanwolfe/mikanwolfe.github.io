---
layout: post
title: Design Patterns for games in C#
date: 2019-03-14
excerpt: "Delving into design patterns and their use in OOP"
feature: https://images.pexels.com/photos/415945/pexels-photo-415945.jpeg
tags: [engineering, programming, csharp, design patterns]
project: true
comments: true
---

### Design Patterns, especially in games.

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



### Artillery 3

Artillery was the HD project for the preceding unit and therefore it felt reasonable to both re-write and extend on the concepts explored in Artillery. This post will be dedicated to the conceptualisation and the research I will be doing to realise Artillery 3 as a HD project.

Design patterns are the programming equivalent to mathematical theorems: they're a great for paper warriors who like to explore the realm of the theoretical to solve a very specific problem, but it's difficult to find or recognise an appropriate situation to apply design patterns to.

If we stretch our definitions of *design patterns* a little, game design often incorporates the following:

* OOP Principles
  * Polymorphism
  * Inheritance
    * And composition, though Inheritance vs. Composition is something for another day
  * Virtual and Abstract Classes
    * The implementation of Interfaces and their uses
* Design Patterns (Traditional, GoF 23)
  * Singleton
    * *Only one instance exists within the game*, used in conjunction with the Factory Design Pattern and/or for caching settings.
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
* Game Design Patterns
  * Game Loop
  * Double Buffer
  * Update Method





---

**Disclaimer**

These are my notes when it comes to this topic, as I'm learning with you, I can't say for certain if any or everything of what I say is even remotely correct, other than citing sources incorrectly. If I make a mistake, please don't get mad, I'm just a simple engineering student trying to make ends. Comment down below if something's off and I'll do my best to fix issues as they arise.