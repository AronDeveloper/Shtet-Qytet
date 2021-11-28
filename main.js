let shtet = document.getElementById('shtet')
let qytet = document.getElementById('qytet')
let kafsh = document.getElementById('kafsh')
let emer = document.getElementById('emer')




function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
  }
  return result;
}

  let i = alert("Only use capital letters ")

  let y = makeid(1)



  let x = prompt("find a country  that starts with " + y+ ":")
  let h = prompt("find a city  that starts with " + y+ ":")
  let a = prompt("find a animal  that starts with " + y+ ":")
  let b = prompt("find a name  that starts with " + y+ ":")
  
  

  let x1 = x.split().join()
  if (x1[0]  == y) {
    console.log("It is correct")
  }

  let h1 = h.split().join()
  if(h1[0] == y) {
    console.log("it is correct")
  }

  let a1 = a.split().join()
  if (a1[0] == y){
    console.log("It is correct")
  }

  let b1 = b.split().join()
  if(b1[0] == y){
    console.log("it is correct")
  }

