import React from 'react'



function About(){
  return (
      <div className="container textoAbout d-flex justify-content-center">      
        <div className='col-8 container'>
          <h1 > Projeto produzido para o BootCamp da IronHack</h1>
            <h5 className='textoMid col-12 '> Esse é o segundo projeto do Bootcamp da 
            IronHack, Nesse projeto fomos intruídos a utilizar o framework 
            React JS, bootstrap, Router-Dom e Axios, a Api utilizada é a
            Brazilian Table of Food Composition (TACO) API e pode ser encontrada
            em https://taco-food-api.herokuapp.com/. </h5>
        </div>       
      </div>
  )
}
export default About