export interface IPartnerAccount {
    iban: string, bic: string, number: string, bankCode: string | null,
    countryCode: string | null, prefix: string | null, secondaryId: string | null
}

export class PartnerAccount {
    private _iban: string;
    private _bic: string;
    private _number: string;
    private _bankCode: string | null;
    private _countryCode: string | null;
    private _prefix: string | null;
    private _secondaryId: string | null;

    constructor(iban: string, bic: string, number: string, bankCode?: string | null, countryCode?: string | null, prefix?: string | null, secondaryId?: string | null) {
        this._iban = iban;
        this._bic = bic;
        this._number = number;
        this._bankCode = bankCode ?? null;
        this._countryCode = countryCode ?? null;
        this._prefix = prefix ?? null;
        this._secondaryId = secondaryId ?? null;
    }

    public get iban(): string {
        return this._iban;
    }

    public get bic(): string {
        return this._bic;
    }

    public get number(): string {
        return this._number;
    }

    public get bankCode(): string | null {
        return this._bankCode;
    }

    public get countryCode(): string | null {
        return this._countryCode;
    }

    public get prefix(): string | null {
        return this._prefix;
    }

    public get secondaryId(): string | null {
        return this._secondaryId;
    }

}

export function objToPartnerAccount(obj: IPartnerAccount): PartnerAccount {
    return new PartnerAccount(obj.iban, obj.bic, obj.number, obj.bankCode, obj.countryCode, obj.prefix, obj.secondaryId);
}