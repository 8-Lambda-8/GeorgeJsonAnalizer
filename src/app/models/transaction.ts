import { Amount, IAmount, objToAmount } from "./amount";
import { Category } from "./category";
import {
  IPartnerAccount,
  objToPartnerAccount,
  PartnerAccount,
} from "./partnerAccount";

interface ITransaction {
  booking: Date | string;
  valuation: Date | string;
  partnerName: string | null;
  partnerAccount: IPartnerAccount | null;
  amount: IAmount;
  reference: string;
  referenceNumber: string;
  note: string;
  categories: Category | null;
  favorite: boolean;
  constantSymbol: string | null;
  variableSymbol: string | null;
  specificSymbol: string | null;
  receiverReference: string;
  receiverAddress: string | null;
  receiverName: string | null;
  receiverModeReference: string | null;
  senderReference: string | null;
  senderAddress: string | null;
  senderModeReference: string | null;
  senderOriginator: string | null;
  cardNumber: string | null;
  cardLocation: string | null;
  cardType: string | null;
  cardBrand: string | null;
  investmentInstrumentName: string | null;
  bookingTypeTranslation: string | null;
  e2eReference: string | null;
  virtualCardNumber: string;
  virtualCardDeviceName: string;
  virtualCardMobilePaymentApplicationName: string;
  sepaMandateId: string;
  sepaCreditorId: string;
  sepaPurposeType: string | null;
  instructionName: string | null;
  loanReference: string | null;
  paymentMethod: string | null;
  pinEntry: string | null;
}

export class Transaction {
  private _booking: Date;
  private _valuation: Date;
  private _partnerName: string | null;
  private _partnerAccount: PartnerAccount | null;
  private _amount: Amount;
  private _reference: string;
  private _referenceNumber: string;
  private _note: string;
  private _categories: Category | null;
  private _favorite: boolean;
  private _constantSymbol: string | null;
  private _variableSymbol: string | null;
  private _specificSymbol: string | null;
  private _receiverReference: string;
  private _receiverAddress: string | null;
  private _receiverName: string | null;
  private _receiverModeReference: string | null;
  private _senderReference: string | null;
  private _senderAddress: string | null;
  private _senderModeReference: string | null;
  private _senderOriginator: string | null;
  private _cardNumber: string | null;
  private _cardLocation: string | null;
  private _cardType: string | null;
  private _cardBrand: string | null;
  private _investmentInstrumentName: string | null;
  private _bookingTypeTranslation: string | null;
  private _e2eReference: string | null;
  private _virtualCardNumber: string;
  private _virtualCardDeviceName: string;
  private _virtualCardMobilePaymentApplicationName: string;
  private _sepaMandateId: string;
  private _sepaCreditorId: string;
  private _sepaPurposeType: string | null;
  private _instructionName: string | null;
  private _loanReference: string | null;
  private _paymentMethod: string | null;
  private _pinEntry: string | null;

  constructor(
    booking: Date | string,
    valuation: Date | string,
    partnerName: string | null,
    partnerAccount: PartnerAccount | null,
    amount: Amount,
    reference: string,
    referenceNumber: string,
    note: string,
    categories: Category | null,
    favorite: boolean,
    constantSymbol: string | null,
    variableSymbol: string | null,
    specificSymbol: string | null,
    receiverReference: string,
    receiverAddress: string | null,
    receiverName: string | null,
    receiverModeReference: string | null,
    senderReference: string | null,
    senderAddress: string | null,
    senderModeReference: string | null,
    senderOriginator: string | null,
    cardNumber: string | null,
    cardLocation: string | null,
    cardType: string | null,
    cardBrand: string | null,
    investmentInstrumentName: string | null,
    bookingTypeTranslation: string | null,
    e2eReference: string | null,
    virtualCardNumber: string,
    virtualCardDeviceName: string,
    virtualCardMobilePaymentApplicationName: string,
    sepaMandateId: string,
    sepaCreditorId: string,
    sepaPurposeType: string | null,
    instructionName: string | null,
    loanReference: string | null,
    paymentMethod: string | null,
    pinEntry: string | null
  ) {
    if (booking instanceof Date) this._booking = booking;
    else this._booking = new Date(booking);

    if (valuation instanceof Date) this._valuation = valuation;
    else this._valuation = new Date(valuation);

    this._partnerName = partnerName;
    this._partnerAccount = partnerAccount;
    this._amount = amount;
    this._reference = reference;
    this._referenceNumber = referenceNumber;
    this._note = note;
    this._categories = categories;
    this._favorite = favorite;
    this._constantSymbol = constantSymbol;
    this._variableSymbol = variableSymbol;
    this._specificSymbol = specificSymbol;
    this._receiverReference = receiverReference;
    this._receiverAddress = receiverAddress;
    this._receiverName = receiverName;
    this._receiverModeReference = receiverModeReference;
    this._senderReference = senderReference;
    this._senderAddress = senderAddress;
    this._senderModeReference = senderModeReference;
    this._senderOriginator = senderOriginator;
    this._cardNumber = cardNumber;
    this._cardLocation = cardLocation;
    this._cardType = cardType;
    this._cardBrand = cardBrand;
    this._investmentInstrumentName = investmentInstrumentName;
    this._bookingTypeTranslation = bookingTypeTranslation;
    this._e2eReference = e2eReference;
    this._virtualCardNumber = virtualCardNumber;
    this._virtualCardDeviceName = virtualCardDeviceName;
    this._virtualCardMobilePaymentApplicationName =
      virtualCardMobilePaymentApplicationName;
    this._sepaMandateId = sepaMandateId;
    this._sepaCreditorId = sepaCreditorId;
    this._sepaPurposeType = sepaPurposeType;
    this._instructionName = instructionName;
    this._loanReference = loanReference;
    this._paymentMethod = paymentMethod;
    this._pinEntry = pinEntry;
  }

  public get booking(): Date {
    return this._booking;
  }
  public get valuation(): Date {
    return this._valuation;
  }
  public get partnerName(): string | null {
    return this._partnerName;
  }
  public get partnerAccount(): PartnerAccount | null {
    return this._partnerAccount;
  }
  public get amount(): Amount {
    return this._amount;
  }
  public get reference(): string {
    return this._reference;
  }
  public get referenceNumber(): string {
    return this._referenceNumber;
  }
  public get note(): string {
    return this._note;
  }
  public get categories(): Category | null {
    return this._categories;
  }
  public get favorite(): boolean {
    return this._favorite;
  }
  public get constantSymbol(): string | null {
    return this._constantSymbol;
  }
  public get variableSymbol(): string | null {
    return this._variableSymbol;
  }
  public get specificSymbol(): string | null {
    return this._specificSymbol;
  }
  public get receiverReference(): string {
    return this._receiverReference;
  }
  public get receiverAddress(): string | null {
    return this._receiverAddress;
  }
  public get receiverName(): string | null {
    return this._receiverName;
  }
  public get receiverModeReference(): string | null {
    return this._receiverModeReference;
  }
  public get senderReference(): string | null {
    return this._senderReference;
  }
  public get senderAddress(): string | null {
    return this._senderAddress;
  }
  public get senderModeReference(): string | null {
    return this._senderModeReference;
  }
  public get senderOriginator(): string | null {
    return this._senderOriginator;
  }
  public get cardNumber(): string | null {
    return this._cardNumber;
  }
  public get cardLocation(): string | null {
    return this._cardLocation;
  }
  public get cardType(): string | null {
    return this._cardType;
  }
  public get cardBrand(): string | null {
    return this._cardBrand;
  }
  public get investmentInstrumentName(): string | null {
    return this._investmentInstrumentName;
  }
  public get bookingTypeTranslation(): string | null {
    return this._bookingTypeTranslation;
  }
  public get e2eReference(): string | null {
    return this._e2eReference;
  }
  public get virtualCardNumber(): string {
    return this._virtualCardNumber;
  }
  public get virtualCardDeviceName(): string {
    return this._virtualCardDeviceName;
  }
  public get virtualCardMobilePaymentApplicationName(): string {
    return this._virtualCardMobilePaymentApplicationName;
  }
  public get sepaMandateId(): string {
    return this._sepaMandateId;
  }
  public get sepaCreditorId(): string {
    return this._sepaCreditorId;
  }
  public get sepaPurposeType(): string | null {
    return this._sepaPurposeType;
  }
  public get instructionName(): string | null {
    return this._instructionName;
  }
  public get loanReference(): string | null {
    return this._loanReference;
  }
  public get paymentMethod(): string | null {
    return this._paymentMethod;
  }
  public get pinEntry(): string | null {
    return this._pinEntry;
  }

  public get info(): string {
    const split = this._reference.split(" ", 6);
    split.push(this._reference.split(" ").slice(6).join(" "));
    if (split[0] == "POS") {
      return (
        "Bezahlt mit Karte " + split[3] + " am " + split[4] + " um " + split[5]
      );
    } else if (split[0] == "SB-Eigenerlag") {
      return (
        "Einzahlung mit Karte " +
        split[2] +
        " am " +
        split[3].replace("/", " um ")
      );
    } else {
      return this.reference;
    }
  }

  //SETTER
  public set categories(categories: Category | null) {
    this._categories = categories;
  }
}

export function objToTransaction(obj: ITransaction): Transaction {
  return new Transaction(
    obj.booking,
    obj.valuation,
    obj.partnerName,
    obj.partnerAccount == null ? null : objToPartnerAccount(obj.partnerAccount),
    objToAmount(obj.amount),
    obj.reference,
    obj.referenceNumber,
    obj.note,
    obj.categories,
    obj.favorite,
    obj.constantSymbol,
    obj.variableSymbol,
    obj.specificSymbol,
    obj.receiverReference,
    obj.receiverAddress,
    obj.receiverName,
    obj.receiverModeReference,
    obj.senderReference,
    obj.senderAddress,
    obj.senderModeReference,
    obj.senderOriginator,
    obj.cardNumber,
    obj.cardLocation,
    obj.cardType,
    obj.cardBrand,
    obj.investmentInstrumentName,
    obj.bookingTypeTranslation,
    obj.e2eReference,
    obj.virtualCardNumber,
    obj.virtualCardDeviceName,
    obj.virtualCardMobilePaymentApplicationName,
    obj.sepaMandateId,
    obj.sepaCreditorId,
    obj.sepaPurposeType,
    obj.instructionName,
    obj.loanReference,
    obj.paymentMethod,
    obj.pinEntry
  );
}

export function objArrayToTransactionArray(obj: ITransaction[]) {
  const array: Transaction[] = [];
  for (const o of obj) {
    array.push(objToTransaction(o));
  }
  return array;
}
