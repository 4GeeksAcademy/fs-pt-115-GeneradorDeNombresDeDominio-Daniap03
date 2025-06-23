import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon']
  const extensiones = ['.com','.net','.us','.io']

pronoun.map((pronoun) =>{
  adj.map((adj)=>{
    noun.map((noun)=>{
      extensiones.map((extensiones)=>{
        console.log(`${pronoun}${adj}${noun}${extensiones}`)
      })
        
    })

  })

})

};