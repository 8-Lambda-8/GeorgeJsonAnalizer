export interface ICategory {
    ident: string,
    name: string,
    id: number | null,
    sub?: ICategory[]
}

export class Category {
    private _categoryId: number = -1;
    private _categoryName: string = "";

    constructor(id: number) {
        this._categoryId = id;
        this._categoryName = subCategoryById(id).name;
    }

    public get categoryId(): number {
        return this._categoryId;
    }
    public get categoryName(): string {
        return this._categoryName;
    }
    public get parrentCategoryId(): number {
        return Math.floor(this._categoryId);
    }
    public get parrentCategoryName(): string {
        return this._categoryName;
    }

}

export var unkategorisiert: ICategory = { ident: "unkategorisiert", name: "Unkategorisiert", id: null }

export var categoryTreeList: ICategory[] = [
    {
        ident: "wohnen",
        name: "Wohnen & Energie",
        id: 0,
        sub: [
            {
                ident: "miete",
                name: "Miete, Pacht",
                id: 0.01
            },
            {
                ident: "immofinanzierung",
                name: "Immpbilienfinanzierung",
                id: 0.02
            },
            {
                ident: "energie",
                name: "Energie",
                id: 0.03
            },
            {
                ident: "betriebskosten",
                name: "Betriebskosten",
                id: 0.04
            },
            {
                ident: "müll",
                name: "Müllentsorgung",
                id: 0.05
            },
            {
                ident: "kanalgebühren",
                name: "Kanalgebühren",
                id: 0.06,
            },
            {
                ident: "versicherung",
                name: "Haushalts Versicherung",
                id: 0.07
            },
            {
                ident: "einrichtung",
                name: "Einrichtung, Verbesserung",
                id: 0.08
            },
            {
                ident: "putzen",
                name: "Putzerei",
                id: 0.09
            },
            {
                ident: "haustiere",
                name: "Haustiere",
                id: 0.10
            },
            {
                ident: "wohnenOther",
                name: "Wohnen & Energie, Sonstiges",
                id: 0.99
            }
        ]
    },
    {
        ident: "essen",
        name: "Essen & Trinken",
        id: 1,
        sub: [
            {
                ident: "einkauf",
                name: "Einkauf",
                id: 1.01
            },
            {
                ident: "restaurant",
                name: "Einkauf",
                id: 1.02
            },
            {
                ident: "essenOther",
                name: "Essen & Trinken, Sonstiges",
                id: 1.99
            }
        ]
    },
    {
        ident: "gesundheit",
        name: "Gesundheit & Drogerie",
        id: 2,
        sub: [
            {
                ident: "drogerie",
                name: "Drogeriemarkt",
                id: 2.01
            },
            {
                ident: "apotheke",
                name: "Apotheke & Gesundheit",
                id: 2.02
            },
            {
                ident: "kosmetik",
                name: "Kosmetik",
                id: 2.03
            },
            {
                ident: "optik",
                name: "Optik",
                id: 2.04
            },
            {
                ident: "arzt",
                name: "Arzt & Spital",
                id: 2.05
            },
            {
                ident: "versicherung",
                name: "Lebens- & Gesundheitsversicherung",
                id: 2.06
            },
            {
                ident: "gesundheitOther",
                name: "Gesundheit & Drogerie, Sonstiges",
                id: 2.99
            }
        ]
    },
    {
        ident: "bekleidung",
        name: "Bekleidung & Schuhe",
        id: 3,
        sub: [
            {
                ident: "bekleidung",
                name: "Bekleidung",
                id: 3.01
            },
            {
                ident: "schuhe",
                name: "Schuhe",
                id: 3.02
            },
            {
                ident: "accessories",
                name: "Accessoires",
                id: 3.03
            },
            {
                ident: "bekleidungOther",
                name: "Bekleidung & Schuhe, Sonstiges",
                id: 3.99
            }
        ]
    },
    {
        ident: "kommunikation",
        name: "Kommunikation & Medien",
        id: 4,
        sub: [
            {
                ident: "telefon",
                name: "Telefon, Handy",
                id: 4.01
            },
            {
                ident: "tv",
                name: "TV",
                id: 4.02
            },
            {
                ident: "internet",
                name: "Elektronische Medien, Internet",
                id: 4.04
            },
            {
                ident: "unterhaltungselektronik",
                name: "Unterhaltungselektronik",
                id: 4.05
            },
            {
                ident: "kommunikationOther",
                name: "Kommunikation & Medien, Sonstiges",
                id: 4.99
            }
        ]
    },
    {
        ident: "freizeit",
        name: "Freizeit & Hobby",
        id: 5,
        sub: [
            {
                ident: "unterhaltung",
                name: "Unterhaltung",
                id: 5.01
            },
            {
                ident: "hobby",
                name: "Hobbies",
                id: 5.02
            },
            {
                ident: "sport",
                name: "Sport",
                id: 5.03
            },
            {
                ident: "lesen",
                name: "Lesen",
                id: 5.04
            },
            {
                ident: "spiel",
                name: "Spielwaren",
                id: 5.05
            },
            {
                ident: "trafik",
                name: "Trafik & Rauchen",
                id: 5.06
            },
            {
                ident: "glücksspiel",
                name: "Glücksspiel",
                id: 5.07
            },
            {
                ident: "freizeitOther",
                name: "Freizeit, Sonstiges",
                id: 5.99
            }
        ]
    },
    {
        ident: "bildung",
        name: "Bildung",
        id: 6,
        sub: [
            {
                ident: "schule",
                name: "Kindergarten, Schule, Studium",
                id: 6.01
            },
            {
                ident: "bücher",
                name: "Bücher, Zubehör",
                id: 6.02
            },
            {
                ident: "nachhilfe",
                name: "Nachhilfe",
                id: 6.03
            },
            {
                ident: "bildungOther",
                name: "Bildung, Sonstiges",
                id: 6.99
            }
        ]
    },
    {
        ident: "kfz",
        name: "KFZ",
        id: 7,
        sub: [
            {
                ident: "anschaffung",
                name: "Anschaffung, Finanzierung, Leasing",
                id: 7.01
            },
            {
                ident: "treibstoff",
                name: "Treibstoff",
                id: 7.02
            },
            {
                ident: "service",
                name: "Wartung, Service",
                id: 7.03
            },
            {
                ident: "versicherung",
                name: "Versicherung",
                id: 7.04
            },
            {
                ident: "parken",
                name: "Parken",
                id: 7.05
            },
            {
                ident: "Maut",
                name: "Maut",
                id: 7.06
            },
            {
                ident: "kfzOther",
                name: "KFZ, Sonstigens",
                id: 7.99
            }
        ]
    },
    {
        ident: "transport",
        name: "Öffis & Taxi",
        id: 8,
        sub: [
            {
                ident: "öffi",
                name: "Öffentliche Verkehrsmittel",
                id: 8.01
            },
            {
                ident: "maut",
                name: "Taxi",
                id: 8.02
            },
            {
                ident: "transportOther",
                name: "Transport, Sonstigens",
                id: 8.99
            }
        ]
    },
    {
        ident: "bar",
        name: "Barabhebubng",
        id: 9,
        sub: [
            {
                ident: "automat",
                name: "Behebung am Automaten",
                id: 9.01
            },
            {
                ident: "filliale",
                name: "Behebung in der Filliale",
                id: 9.02
            },
            {
                ident: "kreditkarte",
                name: "Behebung mit Kreditkarte",
                id: 9.03
            },
            {
                ident: "kreditrechnung",
                name: "Kreditkarten Rechnung",
                id: 9.04
            },
            {
                ident: "quick",
                name: "Quick Aufladung",
                id: 9.05
            },
            {
                ident: "barOther",
                name: "Sonstigens Barabhebung",
                id: 9.99
            }
        ]
    },
    {
        ident: "unterhalt",
        name: "Unterhalt & Taschengeld",
        id: 10,
        sub: [
            {
                ident: "taschengeld",
                name: "Taschengeld",
                id: 10.01
            },
            {
                ident: "alimente",
                name: "Alimente",
                id: 10.02
            },
            {
                ident: "unterhaltOther",
                name: "Unterhalt & Taschengeld, Sonstigens",
                id: 10.99
            }
        ]
    },
    {
        ident: "online",
        name: "Online Shops",
        id: 11,
        sub: [
            {
                ident: "unkategorisiert",
                name: "Unkategorisierte Online Shops",
                id: 11.01
            },
            {
                ident: "amazon",
                name: "Amazon",
                id: 11.02
            },
            {
                ident: "aliexpress",
                name: "Aliexpress",
                id: 11.03
            },
            {
                ident: "ebay",
                name: "Ebay",
                id: 11.04
            },
            {
                ident: "onlineOther",
                name: "Online Shops, Sonstigens",
                id: 11.99
            }
        ]
    },
    {
        ident: "sparen",
        name: "Sparen & Veranlagung",
        id: 12,
        sub: [
            {
                ident: "ansparen",
                name: "Ansparen",
                id: 12.01
            },
            {
                ident: "bausparen",
                name: "Bausparen",
                id: 12.02
            },
            {
                ident: "kapitalsparen",
                name: "Kapitalsparen",
                id: 12.03
            },
            {
                ident: "wertpapiere",
                name: "Wertpapiere",
                id: 12.04
            },
            {
                ident: "sparenOther",
                name: "Sparen, Sonstigens",
                id: 12.99
            }
        ]
    },
    {
        ident: "steuern",
        name: "Steuern",
        id: 13,
        sub: [
            {
                ident: "einkommenssteuer",
                name: "Einkommenssteuer",
                id: 13.01
            },
            {
                ident: "umsatzsteuer",
                name: "Umsatzsteuer",
                id: 13.02
            },
            {
                ident: "steuernOther",
                name: "Sonstige Steuern",
                id: 13.99
            }
        ]
    },
    {
        ident: "zahlung",
        name: "Zahlungsverkehr & Gebühren",
        id: 14,
        sub: [
            {
                ident: "eigenüberträge",
                name: "Eigenüberträge",
                id: 14.01
            },
            {
                ident: "gebühren",
                name: "Gebühren",
                id: 14.02
            },
            {
                ident: "zinsen",
                name: "Zinsen",
                id: 14.03
            },
            {
                ident: "rückzahlungen",
                name: "Rückzahlungen",
                id: 14.04
            },
            {
                ident: "gebührenOther",
                name: "Sonstige Gebühren",
                id: 14.99
            }
        ]
    },
    {
        ident: "other",
        name: "Andere Ausgaben",
        id: 99,
        sub: [
            {
                ident: "finanzierung",
                name: "Finanzierung",
                id: 99.01
            },
            {
                ident: "versicherungsprämien",
                name: "Versicherungsprämien",
                id: 99.02
            },
            {
                ident: "sozialversicherungsbeiträge",
                name: "Sozialversicherungsbeiträge",
                id: 99.03
            },
            {
                ident: "geschenke",
                name: "Geschenke",
                id: 99.04
            },
            {
                ident: "spenden",
                name: "Spenden",
                id: 99.05
            },
            {
                ident: "strafen",
                name: "Strafmandate & Behörden",
                id: 99.06
            },
            {
                ident: "otherOther",
                name: "Abgaben Sonstiges",
                id: 99.99
            }
        ]
    },
    unkategorisiert
];

export var categoryIds = {
    wohnen: {
        id: 0,
        miete: 0.01,
        immofinanzierung: 0.02,
        energie: 0.03,
        betriebskosten: 0.04,
        müll: 0.05,
        kanalgebühren: 0.06,
        versicherung: 0.07,
        einrichtung: 0.08,
        putzen: 0.09,
        haustiere: 0.1,
        wohnenOther: 0.99,
    },
    essen: {
        id: 1,
        einkauf: 1.01,
        restaurant: 1.02,
        essenOther: 1.99,
    },
    gesundheit: {
        id: 2,
        drogerie: 2.01,
        apotheke: 2.02,
        kosmetik: 2.03,
        optik: 2.04,
        arzt: 2.05,
        versicherung: 2.06,
        gesundheitOther: 2.99,
    },
    bekleidung: {
        id: 3,
        bekleidung: 3.01,
        schuhe: 3.02,
        accessories: 3.03,
        bekleidungOther: 3.99,
    },
    kommunikation: {
        id: 4,
        telefon: 4.01,
        tv: 4.02,
        internet: 4.04,
        unterhaltungselektronik: 4.05,
        kommunikationOther: 4.99,
    },
    freizeit: {
        id: 5,
        unterhaltung: 5.01,
        hobby: 5.02,
        sport: 5.03,
        lesen: 5.04,
        spiel: 5.05,
        trafik: 5.06,
        glücksspiel: 5.07,
        freizeitOther: 5.99,
    },
    bildung: {
        id: 6,
        schule: 6.01,
        bücher: 6.02,
        nachhilfe: 6.03,
        bildungOther: 6.99,
    },
    kfz: {
        id: 7,
        anschaffung: 7.01,
        treibstoff: 7.02,
        service: 7.03,
        versicherung: 7.04,
        parken: 7.05,
        Maut: 7.06,
        kfzOther: 7.99,
    },
    transport: {
        id: 8,
        öffi: 8.01,
        maut: 8.02,
        transportOther: 8.99,
    },
    bar: {
        id: 9,
        automat: 9.01,
        filliale: 9.02,
        kreditkarte: 9.03,
        kreditrechnung: 9.04,
        quick: 9.05,
        barOther: 9.99,
    },
    unterhalt: {
        id: 10,
        taschengeld: 10.01,
        alimente: 10.02,
        unterhaltOther: 10.99,
    },
    online: {
        id: 11,
        unkategorisiert: 11.01,
        amazon: 11.02,
        aliexpress: 11.03,
        ebay: 11.04,
        onlineOther: 11.99,
    },
    sparen: {
        id: 12,
        ansparen: 12.01,
        bausparen: 12.02,
        kapitalsparen: 12.03,
        wertpapiere: 12.04,
        sparenOther: 12.99,
    },
    steuern: {
        id: 13,
        einkommenssteuer: 13.01,
        umsatzsteuer: 13.02,
        steuernOther: 13.99,
    },
    zahlung: {
        id: 14,
        eigenüberträge: 14.01,
        gebühren: 14.02,
        zinsen: 14.03,
        rückzahlungen: 14.04,
        zahlungOther: 14.99,
    },
    other: {
        id: 99,
        finanzierung: 99.01,
        versicherungsprämien: 99.02,
        sozialversicherungsbeiträge: 99.03,
        geschenke: 99.04,
        spenden: 99.05,
        strafen: 99.06,
        otherOther: 99.99,
    },
    unkategorisiert: unkategorisiert
};

export function subCategoryById(id: number): ICategory {
    let cats = categoryTreeList.find(x => x.id == Math.floor(id))?.sub;
    if (cats == undefined) return unkategorisiert
    return cats.find(x => x.id == id) ?? unkategorisiert
};

export function addCategory(subOf: number | null, newCategory: ICategory) {
    if (newCategory.id != null) return;

    //check if ident is not used
    let idents = Object.keys(categoryIds);
    for (let subIdents of Object.keys(Object.values(categoryIds))) {
        idents.push(subIdents)
    }
    console.log(idents)
    if (idents.includes(newCategory.ident)) {
        console.error("ident already exists")
        return;
    }
    if (subOf == null) {
        newCategory.id = categoryTreeList[-3].id;
        if (newCategory.id == null) return;
        if (newCategory.id < 50) newCategory.id = 49;
        newCategory.id += 1;
        categoryTreeList.push(newCategory)
    } else if (Number.isInteger(subOf)) {
        let otherSubCats = categoryTreeList[Math.floor(subOf)].sub;
        if (otherSubCats == undefined) {
            console.error("sub category of this parrent not allowed");
            return;
        }
        newCategory.id = otherSubCats[-2].id;
        if (newCategory.id == null) return;
        if (newCategory.id < Math.floor(subOf) + .50) newCategory.id = Math.floor(subOf) + .49;
        newCategory.id += .01;
        categoryTreeList.push(newCategory)
    } else {
        console.error("subOf is sub category")
    }
}