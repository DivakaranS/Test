



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






module.exports={

	each,
	map,
	sortBy,
	some,
	keys


}