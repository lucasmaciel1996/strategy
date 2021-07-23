interface IResponse {
  salary:number
  product:string |null
}

class Wiser {
  static employeerPayment(salary:number,product?:string):IResponse{

    if(product == 'WSP'){
      return {
        product,
        salary: salary * 1.05
      }
    }

    if(product == 'LIVE'){

      if(salary >= 150){
        salary += 10
      }

      return {
        product,
        salary: salary * 1.06
      }
    }

    if(product == 'WOL'){
      return {
        product,
        salary: salary * 1.07
      }
    }

    return{
      product:null,
      salary
    }
  }
}

console.log(Wiser.employeerPayment(100));
console.log(Wiser.employeerPayment(100,'WSP'));
console.log(Wiser.employeerPayment(100,'LIVE'));
console.log(Wiser.employeerPayment(100,'WOL'));

console.log(Wiser.employeerPayment(150,'LIVE'));


