package pl.lists.contacts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.lists.contacts.model.Contact;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ContactRepository extends  JpaRepository<Contact, Integer> {

}
