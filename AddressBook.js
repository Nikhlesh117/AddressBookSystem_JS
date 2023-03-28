console.log("Welcome To The Address Book System using JavaScripts")

//UC-02--->Ability to ensure Valid Contacts are added... 
const name = RegExp("^[A-Z]{1}[a-z]{2,}$");
const address = RegExp("^[a-zA-z0-9#,]{4,}$");
const cityState = RegExp("^[a-zA-z]{4,}$");
const zip = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumber = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
const email = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

// UC-03----->Using array to store the contacts.
let addressBookArray = new Array();

//UC-04---->Function to check if the contact exists in array.
function contactExists(firstName, lastName) 
{
    return addressBookArray.some(
      (contact) => contact.firstName == firstName && contact.lastName == lastName
    );
  }

 //UC-05---->Function to delete a contact
function deleteContact(firstName, lastName) 
{
    if (contactExists(firstName, lastName)) 
    {
      addressBookArray = addressBookArray.filter(
        (contact) =>
          contact.firstName != firstName && contact.lastName != lastName
      );
    } 
    else 
    {
      console.log("Contact Does Not Exist");
    }
}