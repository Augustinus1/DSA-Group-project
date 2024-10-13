let contacts = [];

function insertContact(name, phone) {
    contacts.push({ name, phone });
    alert("Contact added successfully!");
}

function searchContact(name) {
    const result = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (result) {
        return `Name: ${result.name}, Phone: ${result.phone}`;
    } else {
        return "Contact not found!";
    }
}

function displayContacts() {
    return contacts.length ? contacts.map(c => `Name: ${c.name}, Phone: ${c.phone}`).join("<br>") : "No contacts found!";
}

function deleteContact(name) {
    const index = contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        contacts.splice(index, 1);
        alert("Contact deleted successfully!");
    } else {
        alert("Contact not found!");
    }
}

function updateContact(name, newPhone) {
    const contact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (contact) {
        contact.phone = newPhone;
        alert("Contact updated successfully!");
    } else {
        alert("Contact not found!");
    }
}
