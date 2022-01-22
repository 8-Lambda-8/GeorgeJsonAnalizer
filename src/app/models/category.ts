export enum cat {
    wohnen = "Wohnen & Energie",
    essen = "Essen & Trinken",
    gesundheit = "Gesundheit & Drogerie",
    bekleidung = "Bekleidung & Schuhe",
    kommunikation = "Kommunikation & Medien",
    freizeit = "Freizeit & Hobby",
    bildung = "Bildung",
    kfz = "KFZ",
    transport = "Öffis & Taxi",
    bar = "Barabhebubng",
    unterhalt = "Unterhalt & Taschengeld",
    online = "Online Shops",
    sparen = "Sparen & Veranlagung",
    steuern = "Steuern",
    zahlung = "Zahlungsverkehr & Gebühren",
    other = "Andere Ausgaben",
    unkategorisiert = ""
}

export enum subcat_wohnen {
    miete = "Miete, Pacht",
    immofinanzierung = "Immpbilienfinanzierung",
    energie = "Energie",
    betriebskosten = "Betriebskosten",
    müll = "Müllentsorgung",
    kanalgebühren = "Kanalgebühren",
    versicherung = "Versicherung",
    einrichtung = "Einrichtung, Verbesserung",
    putzen = "Putzerei",
    haustiere = "Haustiere",
    other = "Wohnen & Energie, Sonstiges"
}

export class Category {
    private _cat: cat;
    private _subcat: subcat_wohnen;

    constructor(cat: cat, subcat: subcat_wohnen) {
        this._cat = cat;
        this._subcat = subcat;
    }


    public get cat(): cat {
        return this._cat
    }
    public get subcat(): subcat_wohnen {
        return this._subcat
    }

}