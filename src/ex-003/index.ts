import { IWiserPayments } from "./contracts/contracts.interface";
import { LIVE } from "./strategies/LIVE";
import { WOL } from "./strategies/WOL";
import { WSP } from "./strategies/WSP";

class Wiser {
  static paymentProduct(wiserPayments:IWiserPayments){
    return wiserPayments.employeerPayment()
  }
}

const wol = new WOL(100)
const live = new LIVE(100)
const wsp = new WSP(100)

console.log(Wiser.paymentProduct(wol));
console.log(Wiser.paymentProduct(live));
console.log(Wiser.paymentProduct(wsp));

const live2 = new LIVE(150)
console.log(Wiser.paymentProduct(live2));