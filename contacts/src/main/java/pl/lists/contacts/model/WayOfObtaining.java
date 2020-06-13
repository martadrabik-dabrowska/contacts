package pl.lists.contacts.model;

public enum WayOfObtaining {

    RECOMENDATION(1,"Rekomendacje"),

    CONFERENCE_OR_TRAINING(2, "Konferencje lub szkolenie"),

    SOCIAL_MEDIA(3,"Media społecznościowe"),

    WWWW(4, "Strona WWWW"),

    OTHER(5, "Inne");


    private int id;

    private String name;

    WayOfObtaining(int id, String name){
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
