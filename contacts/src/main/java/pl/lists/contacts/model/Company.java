package pl.lists.contacts.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonRootName;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Company")
@JsonRootName(value = "Company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "nip")
    private long nip;

    @Column(name = "regon")
    private int regon;

    @Column(name = "krs")
    private String krs;

    @JoinColumn(name = "legalForm")
    private LegalForm legalForm;

    @Column(name = "legalFormOther")
    private String legalFormOther;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name = "contract")
    @JsonIgnore
    private Contact contact;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "company")
    private List<Employee> employees;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getNip() {
        return nip;
    }

    public void setNip(long nip) {
        this.nip = nip;
    }

    public int getRegon() {
        return regon;
    }

    public void setRegon(int regon) {
        this.regon = regon;
    }

    public String getKrs() {
        return krs;
    }

    public void setKrs(String krs) {
        this.krs = krs;
    }

    public LegalForm getLegalForm() {
        return legalForm;
    }

    public void setLegalForm(LegalForm legalForm) {
        this.legalForm = legalForm;
    }

    public String getLegalFormOther() {
        return legalFormOther;
    }

    public void setLegalFormOther(String legalFormOther) {
        this.legalFormOther = legalFormOther;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }
}
