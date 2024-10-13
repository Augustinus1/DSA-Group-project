Group Members



Phonebook Application Using Linked List

Project Overview

This project is a simple Phonebook Application implemented using a Linked List data structure. The application allows users to insert, search, display, delete, and update contacts. It also includes an optional feature to sort contacts by name.

The project simulates the core functionalities of a phonebook, demonstrating how linked lists can be used to efficiently manage and manipulate data.

Features

The Phonebook Application provides the following features:

Insert Contact: Add a new contact (name and phone number) to the phonebook.
Search Contact: Find a contact by name or phone number.
Display All Contacts: View all contacts currently in the phonebook.
Delete Contact: Remove a contact by name or phone number.
Update Contact: Edit the details of an existing contact.
Sort Contacts (Optional): Sort contacts by name for easier searching and organization.
Data Structure: Linked List
The phonebook is built using a singly linked list, where each contact is represented as a Node containing:

name: The contact's name.
phone: The contact's phone number.
next: A pointer to the next node in the list.
The Linked List structure allows for dynamic memory management, making it easy to insert, delete, and update contacts without reallocating memory.

How It Works

Each operation in the application is implemented using basic linked list operations:

Insert: Traverses to the end of the list and appends a new node.
Search: Traverses the list and checks each node for a match with the search term (name or phone).
Delete: Finds the matching node and removes it from the list by adjusting the pointers.
Update: Finds the matching node and updates the contact's details.
Sort: Uses the bubble sort algorithm to reorder the contacts based on their names.
Usage
Running the Application
The application can be executed by calling the different functions to perform various operations on the phonebook.

Function Descriptions
insertContact(name, phone): Adds a new contact to the phonebook.
searchContact(term): Searches for a contact by name or phone.
displayContacts(): Displays all contacts in the phonebook.
deleteContact(term): Deletes a contact from the phonebook by name or phone.
updateContact(term, newName, newPhone): Updates a contact's details based on the given term (name or phone).
sortContacts(): Optionally sorts the contacts by name.
