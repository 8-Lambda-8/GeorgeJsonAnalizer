export interface IAmount {
    value: number, precision: number, currency: string
}

export class Amount {

    private _value: number;
    private _precision: number;
    private _currency: string;

    constructor(value: number, precision?: number, currency?: string) {
        this._value = value;
        this._precision = precision ?? 2;
        this._currency = currency ?? "EUR";
    }

    public get value(): number {
        return this._value;
    }
    public get precision(): number {
        return this._precision;
    }
    public get currency(): string {
        return this._currency;
    }

    public get valueFloat(): number {
        return this._value / (10 ** this._precision);
    }

    getFormated(): string {
        return (this._value / (10 ** this._precision)).toLocaleString('de-DE', { style: 'currency', currency: this._currency });
        //return this.value<0?"-":""+ "€ "+Math.abs(this.value*10**this.precision);
    }

}

export function objToAmount(obj: IAmount): Amount {
    return new Amount(obj.value, obj.precision, obj.currency);
}