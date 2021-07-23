import { IPaymentsResponse, IWiserPayments } from "../contracts/contracts.interface";

class WOL implements IWiserPayments {
  
  constructor (private salary:number){}

  employeerPayment(): IPaymentsResponse {
    return {
      product:'WOL',
      salary: this.salary * 1.07
    }
  }

}

export {WOL}