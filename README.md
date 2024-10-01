# DSA-Group-projectclass Contact {
    String name;
    String phoneNumber;
    
    Contact(String name, String phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Name: " + this.name + ", Phone: " + this.phoneNumber;
    }
}


import java.util.ArrayList;
import java.util.Collections;

class PhoneBook {
    ArrayList<Contact> contacts;

    PhoneBook() {
        contacts = new ArrayList<>();
    }

    // Insert Contact
    public void insertContact(String name, String phoneNumber) {
        contacts.add(new Contact(name, phoneNumber));
        System.out.println("Contact added: " + name);
    }

    // Search Contact
    public Contact searchContact(String name) {
        for (Contact contact : contacts) {
            if (contact.name.equalsIgnoreCase(name)) {
                return contact;
            }
        }
        return null;
    }

    // Delete Contact
    public boolean deleteContact(String name) {
        Contact contact = searchContact(name);
        if (contact != null) {
            contacts.remove(contact);
            System.out.println("Contact deleted: " + name);
            return true;
        }
        return false;
    }

    // Update Contact
    public boolean updateContact(String oldName, String newName, String newPhoneNumber) {
        Contact contact = searchContact(oldName);
        if (contact != null) {
            contact.name = newName;
            contact.phoneNumber = newPhoneNumber;
            System.out.println("Contact updated.");
            return true;
        }
        return false;
    }

    // Display All Contacts
    public void displayContacts() {
        if (contacts.isEmpty()) {
            System.out.println("No contacts found.");
        } else {
            for (Contact contact : contacts) {
                System.out.println(contact);
            }
        }
    }

    // Sort Contacts (by name)
    public void sortContacts() {
        Collections.sort(contacts, (a, b) -> a.name.compareToIgnoreCase(b.name));
        System.out.println("Contacts sorted by name.");
    }
}


import java.util.Scanner;

public class PhoneBookApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PhoneBook phoneBook = new PhoneBook();
        
        while (true) {
            System.out.println("\nPhonebook Menu:");
            System.out.println("1. Insert Contact");
            System.out.println("2. Search Contact");
            System.out.println("3. Display All Contacts");
            System.out.println("4. Delete Contact");
            System.out.println("5. Update Contact");
            System.out.println("6. Sort Contacts");
            System.out.println("7. Exit");
            System.out.print("Choose an option: ");
            
            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline
            
            switch (choice) {
                case 1:
                    System.out.print("Enter name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter phone number: ");
                    String phone = scanner.nextLine();
                    phoneBook.insertContact(name, phone);
                    break;
                case 2:
                    System.out.print("Enter name to search: ");
                    String searchName = scanner.nextLine();
                    Contact foundContact = phoneBook.searchContact(searchName);
                    if (foundContact != null) {
                        System.out.println("Contact found: " + foundContact);
                    } else {
                        System.out.println("Contact not found.");
                    }
                    break;
                case 3:
                    phoneBook.displayContacts();
                    break;
                case 4:
                    System.out.print("Enter name to delete: ");
                    String deleteName = scanner.nextLine();
                    boolean deleted = phoneBook.deleteContact(deleteName);
                    if (!deleted) {
                        System.out.println("Contact not found.");
                    }
                    break;
                case 5:
                    System.out.print("Enter current name: ");
                    String oldName = scanner.nextLine();
                    System.out.print("Enter new name: ");
                    String newName = scanner.nextLine();
                    System.out.print("Enter new phone number: ");
                    String newPhone = scanner.nextLine();
                    boolean updated = phoneBook.updateContact(oldName, newName, newPhone);
                    if (!updated) {
                        System.out.println("Contact not found.");
                    }
                    break;
                case 6:
                    phoneBook.sortContacts();
                    phoneBook.displayContacts();
                    break;
                case 7:
                    System.out.println("Exiting...");
                    scanner.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }
    }
}

