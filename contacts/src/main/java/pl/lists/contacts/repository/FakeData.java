package pl.lists.contacts.repository;

import org.apache.commons.lang3.RandomStringUtils;
import pl.lists.contacts.model.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class FakeData {


    public List<Contact> createFakeContacts() {
        List<Contact> contacts = new ArrayList<>();
        contacts.add(getFakeContactPerson());
        contacts.add(getFakeContactCompany());
        return contacts;
    }

    private Contact getFakeContactCompany() {
        Contact contact= new Contact();
        contact.setId(new Random().nextInt());
        contact.setAdditionalInfo(randomString());
        contact.setEmail(randomString());
        contact.setPhoneNumber(randomString());
        contact.setAddresses(generateAddresses(contact));
        contact.setCompany(generateCompany(contact));
        contact.setWayOfObtaining(WayOfObtaining.RECOMENDATION);
        return contact;
    }

    private Company generateCompany(Contact contact) {
        Company company = new Company();
        company.setContact(contact);
        company.setId(new Random().nextInt());
        company.setKrs(randomString());
        company.setLegalFormOther(randomString());
        company.setName(randomString());
        company.setNip(new Random().nextLong());
        company.setRegon(new Random().nextInt());
        company.setLegalForm(LegalForm.OTHER);
        return company;
    }


    private Contact getFakeContactPerson() {
        Contact contact= new Contact();
        contact.setId(new Random().nextInt());
        contact.setAdditionalInfo(randomString());
        contact.setEmail(randomString());
        contact.setPhoneNumber(randomString());
        contact.setAddresses(generateAddresses(contact));
        contact.setPerson(generatePerson(contact));
        return contact;
    }

    private Person generatePerson(Contact contact) {
        Person person = new Person();
        person.setContact(contact);
        person.setFirstName(randomString());
        person.setLastName(randomString());
        person.setId(new Random().nextInt());
        person.setPesel(new Random().nextLong());
        return person;
    }

    private List<Address> generateAddresses(Contact contact) {
        List<Address> addresses = new ArrayList<>();
        Address address = new Address();
        address.setContact(contact);
        address.setId(new Random().nextInt());
        address.setCity(randomString());
        address.setFlatNumber(randomString());
        address.setHouseNumber(randomString());
        address.setName(randomString());
        address.setStreet(randomString());
        address.setZipCode(randomString());
        addresses.add(address);
        return addresses;
    }

    private String randomString(){
        return RandomStringUtils.randomAlphabetic(10);
    }
}
