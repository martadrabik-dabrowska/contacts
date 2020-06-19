package pl.lists.contacts.controller;

import org.springframework.web.bind.annotation.*;
import pl.lists.contacts.model.Contact;
import pl.lists.contacts.repository.ContactRepository;


import java.util.Arrays;
import java.util.EmptyStackException;
import java.util.List;

@RestController
@CrossOrigin
public class ContactsController {

    private final ContactRepository repository;

    ContactsController(ContactRepository repository){
        this.repository = repository;
    }

    @GetMapping("/contacts")
    List<Contact> all(){

        return repository.findAll();
    }

    @PostMapping("/contacts")
    Contact newContract(@RequestBody Contact newContact) {
        newContact.updateContact();
        return repository.save(newContact);
    }

    @RequestMapping(path="/contact/{id}", method = RequestMethod.GET)
    List<Contact >one(@PathVariable Integer id){
        return repository.findById(id).map(p-> Arrays.asList(p)).orElseThrow(()-> new EmptyStackException());
    }

    @PutMapping("/contacts/{id}")
    Contact replaceContract(@RequestBody Contact newContact, @PathVariable Integer id) {

        return repository.findById(id)
                .map(contract -> {
                    return repository.save(contract);
                })
                .orElseGet(() -> {
                    newContact.setId(id.intValue());
                    return repository.save(newContact);
                });
    }

    @DeleteMapping("/contacts/{id}")
    void deleteContact(@PathVariable Integer id) {
        repository.deleteById(id);
    }
}
