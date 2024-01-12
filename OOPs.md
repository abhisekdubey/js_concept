# JavaScript and classes

## OOPs

- Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects, which can contain data and code: data in the form of fields, and code in the form of procedures.

* three main concepts: classes and instances, inheritance, and encapsulation

* Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data.

## 4 Pillers

- Abstraction
  is the process in which we only show essential details/functionality to the user. The non-essential implementation details are not displayed to the user.
- Encapsulation
  is a way of hiding the implementation details of a class from outside access and only exposing a public interface that can be used to interact with the class.
- Inheritance
  It is the mechanism in which one class is allowed to inherit the features(fields and methods) of another class.
  A class that inherits from another class can reuse the methods and fields of that class.
- polymorphism
  allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word “poly” means many and “morphs” means forms, So it means many forms.

## why use OOPs

### this keyword

- this keyword is not return anything in Arrow function - undefined
- In Case Of Global Context in \*Node environment -
  this return empty object {}
- In Case Of Global Context in \*Browser -
  this keyword return \*window\* object

### new keyword

- new keyword always create empty object {}
