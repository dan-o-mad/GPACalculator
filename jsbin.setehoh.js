function gpa(){
  
  //console.log("Enter marks for one subject")
  var value = document.getElementById('1').value;
  //console.log(value)
  var qp
  var res =0
  if(value >= 80){
    
     qp=12
   res = 12/3
  }
  
 else if(value >=70 && value <=79){
    
     qp=9
   res = 9/3
  }
  
  else if(value >=60 && value <=69){
    
     qp=6
   res = 6/3
  }
  
  console.log("GPA=" + res)
}

function sgpa(){
  
  
  console.log("Enter marks of all subjects")
}

function cgpa(){
  
  
  
}