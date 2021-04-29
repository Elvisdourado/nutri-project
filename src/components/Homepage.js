import Search from "./extras/Search";


function Homepage() {
  return (

    <div>
      <div>
        <h5 className='d-flex justify-content-center text-center m-4 titleColor'>Busque por seu alimento e adicione<br />para saber a propriedades
      nutricionais<br /> da sua refeição.</h5>
      </div>
      <Search /> 
    </div>

  )
}


export default Homepage