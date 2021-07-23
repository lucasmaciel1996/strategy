interface IResponse {
  salary:number
  product:string |null
}

class Wiser2 {
  static employeerPayment(salary:number,product?:string):IResponse{
    switch (product) {
      case  'WSP':
        return {
          product,
          salary: salary * 1.05
        }
      case  'LIVE':
        if(salary >= 150){
          salary += 10
        }
  
        return {
          product,
          salary: salary * 1.06
        }
      case  'WOL':
        return {
          product,
          salary: salary * 1.07
        }
      default:
        return{
          product:null,
          salary
        }
    }
  }
}

console.log(Wiser2.employeerPayment(100));
console.log(Wiser2.employeerPayment(100,'WSP'));
console.log(Wiser2.employeerPayment(100,'LIVE'));
console.log(Wiser2.employeerPayment(100,'WOL'));

console.log(Wiser2.employeerPayment(150,'LIVE'));


