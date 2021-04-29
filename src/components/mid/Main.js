import React from 'react'
import { Button } from 'react-bootstrap'


function Main(props) {

  return (
    <div>
      <div className='tableResult'>
        <div >
          <div className='nomeAlimento'>{props.food.description}</div>
        </div>
       {props.food.attributes.protein ?  <div className='propNutri'>Proteína {Number(props.food.attributes.protein.qty).toFixed(2)} {props.food.attributes.protein.unit}</div> : null}
       {props.food.attributes.lipid ? <div className='propNutri'>Gorduras {Number(props.food.attributes.lipid.qty).toFixed(2)} {props.food.attributes.lipid.unit}</div> : null}
       {props.food.attributes.carbohydrate ?  <div className='propNutri'>Carboidratos {Number(props.food.attributes.carbohydrate.qty).toFixed(2)} {props.food.attributes.carbohydrate.unit}</div> : null}
       {props.food.attributes.energy ? <div className='propNutri'>Calorias {Number(props.food.attributes.energy.kcal).toFixed(2)} kcal</div> : null}
      </div>
      <div className='buttonAdd aligner'>
        {props.handleAddList ? <Button size="sm" variant="secondary" onClick={() => props.handleAddList(
          { ...props.food })}>Adicionar</Button> : <Button size="sm" variant="danger" onClick={() => props.handleDelete(props.food.description)}> Apagar</Button>}
      </div>
    </div>
  )
}

export default Main

//name country city
