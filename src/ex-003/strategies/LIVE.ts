import { IPaymentsResponse, IWiserPayments } from "../contracts/contracts.interface";

class LIVE implements IWiserPayments {
  
  constructor (private salary:number){}

  employeerPayment(): IPaymentsResponse {
    if(this.salary >= 150){
      this.salary += 10
    }

    return {
      product:'LIVE',
      salary: this.salary * 1.06
    }
  }

}

export {LIVE}