package pl.lists.contacts.model;

public enum LegalForm {

    STOCK_COMPANY(1,"Spółka akcyja"),

    PARTNERSHIP_COMPANY(2, "Spółka cywilna"),

    LAW_COMPANY(3,"Spółka prawna"),

    LIMITED_COMPANY(4, "Spółka zoo"),

    OTHER(5,"Inna");


    private int id;

    private String name;

    LegalForm(int id, String name){
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
