



const each = (x,y)=>{

	return x.forEach(y);


}


const map = (arr,x) => {

var output=[];
 
// for(var i=0;i<arr.length;i++){
// 	console.log(x);

// 	output.push(x(arr[i]));
// }

arr.forEach(ele=>{

	output.push(x(ele));
})
return output;

}


const sortBy =(arr,con) => {

	var result=[];
	var temp;
    var swap;

for(var i=0;i<arr.length;i++){
	swap=i;
	
	for(var j=i+1;j<arr.length;j++){

		var adorder=con(arr[swap],arr[j]);

        if(adorder<0){

        	swap=swap;
        }else{
        	swap=j;
        }

	}
     temp=arr[i];
     arr[i]=arr[swap];
     arr[swap]=temp;
     result.push(arr[i]);

}
return result;

}

const some = (array,con)=> {


      var count=0;

      for(var i=0;i<array.length;i++){

      	if(con(array[i])==true){

             count++;

      	}
      
      }
      if(count!=0){

      	return true;
      }
      else{
      	return false;
      }

     

}



const keys = (objarr) => {

     let result=Object.keys(objarr);

      return result;
}


const every = (arr,con) => {

       
       let count=0;


       for(var i=0;i<arr.length;i++){

            if(con(arr[i])){
            	count++;

            }


       }

       if(count==arr.length){

           return true;


       }else{

       	return false;
       
       }


}


const atleast2 = (arr,con) => {


     let count=0;

     for(var i=0;i<arr.length;i++){

     	if(con(arr[i])){

     		count++;
     	}
     }

     if(count>=2){

     	return true;
     }else{

     	return false;
     }

}


const everybut1 = (arr,con) => {

	let count=0;

	for(var i=0;i<arr.length;i++){

		if(!con(arr[i])){
			count++;

		}
	}

	if(count==1){

		return true;
	}
	else
	{

		return false;
	}

}


const padding =(string,n) => {

       
       let result="";

for(var i=0;i<n-string.length;i++){
   

   result +=" ";
      
}

return result+string;



}


const choose1 = (obj,str) => {

    var strarr=str.split('.');

    for(var i=0;i<strarr.length;i++){
    

    	var string = obj[strarr[i]];

    	var obj = string;
    }

    return string;

}


const intersection = (arr1,arr2) => {

      let output=[];
    
    for (var i=0;i<arr1.length;i++){

      for (var j=0;j<arr2.length;j++){

           if(arr1[i]==arr2[j]){
            output.push(arr1[i]);
           
           }

      }
    }
   return output;

}


const intersectionBy = (arr1,arr2,con) => {

    let output=[];

  for(var i=0;i<arr1.length;i++){

    for(var j=0;j<arr2.length;j++){

      if(con(arr1[i]) == con(arr2[j])){

        output.push(arr1[i]);
      }
    }
  }
    return output;

}

const zip =(...arrays) => {

  let result=[];

  for(var i=0;i<arrays.length;i++){

    var row=arrays[i];

    var length=arrays[0].length;

    for(var j=0;j<length;j++){

      result[j] = result[j] || [];

      result[j].push(row[j]);

    }
  }
 return result;

}


const reverse =(arr) => {
      
      let array=[];

      for(var i=arr.length-1;i>=0;i--){
        array.push(arr[i]);
      }

return array;

}

const filter = (arr,obj) => {

   let result=[];

   for(var i=0;i<arr.length;i++){

    if(typeof obj =='object'){

      for(var p in arr[i]){
           
           if(arr[i][p] == obj[p]){

            result.push(arr[i]);

            break;
           }

      }


    }
    else if(typeof obj == 'function'){
                
        if(obj(arr[i])==true){

          result.push(arr[i]);
        }        

    }
    

   }

return result;

}


const merge = (obj1,obj2,obj3) => {

  var result = Object.assign(obj1,obj2,obj3);

  return result;
}

const mergeDeep = (obj1,obj2) => {

  var obj={};
  var key = Object.keys(obj1);

  for(var i=0;i<key.length;i++){

    if(obj1[key[i]]==obj2[key[i]]){

      obj[key[i]] = obj1[key[i]];
    }
    else{

      obj[key[i]] = Object.assign(obj1[key[i]],obj2[key[i]]);
    }
  }
  return obj;


}



const superfunction1 = () => {

  return actualfn =() => 100;



}

const superfunction2 = (n) => {

  return (...fn) => n;
}


const superfunction3 = (n) => {


  return (...fn) => n();

}


const superfunction4 =(n) => {

    return function () {
      return n+= 1;
    }

    
}

const godFunction = (arr,exp) => {

  return function (a1,b1,c1){

    var a=a1;
    var b=b1;
    var c=c1;
    

    return eval(exp);
  }  


}


const godFunction2 = (name,arr,exp) => {

  
     const god = 'const '+ name +'= ('+ arr[0] +','+ arr[1] +') => { return '+ exp +' ;}; return ' + name + ';'

     return new Function(god)();

  
}


const split = (string,seperator) => {

  return string.split(seperator);


}


const before = (n,m) => {

     for(var i=0; typeof n=='function';i++){

            n=n(); 
     }
     for(var j=0; typeof m=='function';j++){
 
             m=m();
     }

return n<m;


}


const object1 =(a1,a2) => {

  var object={};

  object.name = a1;
  object.age  = a2;

  return object;
}


const object2 =(a1,a2) => {

  var object ={};

  object.getName = () => a1;
  object.getAge = () =>a2;

  return object; 
}


class Person {

  constructor(a,b,c) {
    
    this.getname = a;
    this.getage = b;
    this.getsex = c;

  }

  getName(){

    return this.getname;
  }
  getAge() {

    return this.getage;
  }
  getSex () {
    return this.getsex;
  }


}

class Woman extends Person {

  constructor(a,b,c) {

    super(a,b,c);

    var c='F';

    this.getname = a;
    this.getage = b;
    this.getsex = c;
  }

}

class Man extends Person {

  constructor(a,b,c) {

    super(a,b,c);

    var c='M';
    this.getname = a;
    this.getage = b;
    this.getsex = c;

  } 
}


const uniquee = (array) => {

  // var unique = [...new Set(array)];
  
  // return unique;

// var unique = array.filter((item,index)=> array.indexOf(item) === index);

// return unique;

 var unique = array.reduce(function(acc,cur) {

  if(acc.indexOf(cur) === -1){

    acc.push(cur);
  }

   return acc;
 },[]);

 return unique;

}


const uniqueeBy = (objarr,fn) => {

     let uniqby = objarr.map(obj => fn(obj))

     .map((obj, i, last) => last.indexOf(obj) === i && i)

     .filter(obj => objarr[obj]).map(obj => objarr[obj]);

      return uniqby;


}



const first = (arr) => {

  var result = arr[0];

return result;


}

const last = (arr) => {

  var result = arr[arr.length-1];

  return result;
}


const reuse1 =(arr,odd) => {


  var result = [];

  arr.map(obj =>{

    var key = Object.keys(obj);

    if(odd(obj[key]) == true){

      result.push(obj[key]);
    }
  });

return result;


}

const reuse2 = (arr,str,odd) => {

  var output =[];

  arr.map(obj => {

    if(odd(obj[str]) == true){

      output.push(obj[str]);

    }
 
  });


return output;


}

const reuse3 = (arr,str,odd) => {

     var result =[];

   arr.map(obj => {

    var val = str.reduce(function(obj,key) {

          return obj[key];

    }, obj)

     if(odd(val) == true){

      result.push(val);

     }
      
  
  });

  return result;

}

const reuse4 = (arr,str,odd) => {

       return arr.filter(obj => {

        var val = str.reduce(function(obj,key){

          return obj[key];
        
        },obj)
         
         if(odd(val)){

          return val;
         }


       })

}

const chain =(arr,funcarr) => {

  var value=arr;

  for(var i=0;i<funcarr.length;i++){
    

    value = funcarr[i][0](value, funcarr[i][1]);
  
  }

return value;

}

const reduce = (arr,con) => {

  var result = arr[0];

  for(var i=1;i < arr.length;i++){

    result = con(result,arr[i]);
  }

return result;

}



const anarray = [];

const anumber = 100;

const afunction = () => {};


const AND = (a,b) => {

  return a&&b;
}

const OR = (a,b) => {

  return a||b;
}


const NAND = (a,b) => {

  return !(a&&b);
}

const NOT = (a) => {

  return !(a);
}


const NOR = (a,b) => {

    return !(a||b);

}

const XOR = (a,b) => {

  if(a == b) {

    return false;
  }
  return true;

}

const XNOR = (a,b) => {

  if(a == b) {

    return true;
  }
  return false;

}


const seek =(str) => {

  let str1=str[0];

  for(var i=1;i<str.length;i++){

    if(str[i]!=str1){
      result = str[i];
      break;
    }

  }

  return result;
}

class Counter {

  constructor (){
    
    this.value=0;

  } 

  get(){
   
   return this.value;
  }

  inc(){
  
   return this.value++;
  }

}

const counter = () => {

  let value = 0;

  function update(val){
    value += val;

  } 

return{

  get : function (){
  
    return value;
    
    },

  inc : function (){

    update(1);
  }

  }

}

const superfunction5 =(arr) => {

  var idx = -1;

  return function(){
      
      idx++;

      return arr[idx];

  }

}

const proxy1 = () => {

  let obj = {};

  var a;

  return Object.defineProperty(obj , 'val',{

    set : (b)=> a = b*2,
    get : () => a
  
  })
}

const proxy2 = () => {

  let obj ={};

  var a;

  return Object.defineProperty(obj , 'val', {

    set : (b) => a = b*2
  }),
 
  Object.defineProperty(obj , 'get', {

    get : () => a

  }),
 
  Object.defineProperty(obj , 'reset',{

    get : () => a=undefined
  
  })

}


module.exports={

	each,
	map,
	sortBy,
	some,
	keys,
	every,
	atleast2,
	everybut1,
	padding,
	choose1,
  intersection,
  intersectionBy,
  zip,
  reverse,
  filter,
  merge,
  mergeDeep,
  superfunction1,
  superfunction2,
  superfunction3,
  superfunction4,
  godFunction,
  godFunction2,
  split,
  before,
  object1,
  object2,
  Person,
  Woman,
  Man,
  uniquee,
  uniqueeBy,
  first,
  last,
  reuse1,
  reuse2,
  reuse3,
  reuse4,
  chain,
  reduce,
  anarray,
  anumber,
  afunction,
  AND,
  OR,
  NAND,
  NOT,
  NOR,
  XOR,
  XNOR,
  seek,
  Counter,
  counter,
  superfunction5,
  proxy1,
  proxy2
  



}