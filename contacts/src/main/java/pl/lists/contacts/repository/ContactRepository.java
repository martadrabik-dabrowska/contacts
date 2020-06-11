package pl.lists.contacts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.lists.contacts.model.Contact;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ContactRepository extends  JpaRepository<Contact, Integer> {

    @Override
    default List<Contact> findAll(){
        FakeData fakeData = new FakeData();
        return fakeData.createFakeContacts();
    }
}
