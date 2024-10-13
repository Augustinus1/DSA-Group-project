Group Members

Uakengeza Mujetenga,224088327,Bachelor of informatics 

Katrina Angala,224020560, Bachelor Computer science

Chamelda Gertze,224022024, Bachelor of Computer Science

Uasora Hukura,222132892, Bachelor of Computer Science

Chaze musunga,223105775, Bachelor of computer science

Iipinge K Augustinus,223052043, Bachelor of computer science


Project Overview
This project is a simple Phonebook Application implemented using an array data structure. The application allows users to insert, search, display, delete, and update contacts. It also includes an optional feature to sort contacts by name.

The project simulates the core functionalities of a phonebook, demonstrating how arrays can be used to efficiently manage and manipulate data.

Features
The Phonebook Application provides the following features:

Insert Contact: Add a new contact (name and phone number) to the phonebook.
Search Contact: Find a contact by name or phone number.
Display All Contacts: View all contacts currently in the phonebook.
Delete Contact: Remove a contact by name or phone number.
Update Contact: Edit the details of an existing contact.
Sort Contacts (Optional): Sort contacts by name for easier searching and organization.
Data Structure: Array
The phonebook is built using an array, where each contact is represented as an object containing:

name: The contact's name.
phone: The contact's phone number.
The array structure allows for efficient access to contacts, making it straightforward to insert, delete, and update contacts. However, resizing the array when it reaches capacity may require additional memory allocation.

How It Works
Each operation in the application is implemented using basic array operations:

Insert: Adds a new contact to the end of the array.
Search: Iterates through the array and checks each contact for a match with the search term (name or phone).
Delete: Finds the matching contact and removes it by shifting the subsequent elements in the array.
Update: Finds the matching contact and updates the contact's details.
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
