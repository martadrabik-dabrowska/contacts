package pl.lists.contacts.model;

import com.fasterxml.jackson.annotation.JsonRootName;
import org.apache.commons.collections4.CollectionUtils;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Contract")
@JsonRootName(value = "Contact")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "additionalInfo")
    private String additionalInfo;

    @Column(name = "wayOfObtaining")
    private WayOfObtaining wayOfObtaining;

    @Column(name = "wayOfObtainingOther")
    private String wayOfObtainingOther;

    @OneToOne(fetch = FetchType.EAGER, mappedBy ="contact", cascade = CascadeType.ALL, orphanRemoval = true)
    private Company company;

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "contact", cascade = CascadeType.ALL, orphanRemoval = true)
    private Person person;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addresses;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public WayOfObtaining getWayOfObtaining() {
        return wayOfObtaining;
    }

    public void setWayOfObtaining(WayOfObtaining wayOfObtaining) {
        this.wayOfObtaining = wayOfObtaining;
    }

    public String getWayOfObtainingOther() {
        return wayOfObtainingOther;
    }

    public void setWayOfObtainingOther(String wayOfObtainingOther) {
        this.wayOfObtainingOther = wayOfObtainingOther;
    }

    public void updateContact() {
        if(person!=null){
            person.setContact(this);
        }
        if(company!=null){
            company.setContact(this);
        }
        if(CollectionUtils.isNotEmpty(addresses)){
            addresses.stream().forEach(address->address.setContact(this));
        }
    }
}
