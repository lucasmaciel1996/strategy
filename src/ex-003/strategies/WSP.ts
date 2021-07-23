import { IPaymentsResponse, IWiserPayments } from "../contracts/contracts.interface";

class WSP implements IWiserPayments {
  
  constructor (private salary:number){}

  employeerPayment(): IPaymentsResponse {
    return {
      product:'WOL',
      salary: this.salary * 1.05
    }
  }

}

export {WSP}