export interface IPaymentsResponse{
  salary:number;
  product:string;
}

export interface IWiserPayments {
  employeerPayment():IPaymentsResponse
}