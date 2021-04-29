import React from 'react'
import projects from '../../data.json'
import Card from 'react-bootstrap/Card'
import macro from '../assets/macro.png'
import minerais from '../assets/minerais.png'
import vitaminas from '../assets/vitaminas.png'
import gorduras from '../assets/gorduras.png'






class Detail extends React.Component {
  state = {
    id: "",
    description: "",
    attributes: ""
  };




  componentDidMount() {
    const foundProject = projects.find((detail) => {
      console.log(typeof detail.id)
      return String(detail.id) === this.props.match.params.id; // match é um objeto injetado pelo componente Route automaticamente. Ele contém informações sobre essa rota, inclusive os parâmetros de rota. A propriedade se chama 'id' pois esse nome que escolhemos para o parâmetro de rota no App.js. O valor dela é a porção variável da URL
    });

    console.log(foundProject);

    if (foundProject) {
      this.setState({ ...foundProject });
    }
  }

  render() {
    if (this.state.id) {
      return (
        <div className="">
          <h5 className="d-lg-flex justify-content-center text-center m-4 titleColor">{this.state.description}</h5>
          <div>
            <div className='d-lg-flex container justify-content-center'>
              <div>
                <Card style={{ width: '15rem', minHeight: 343 }}>
                  <Card.Img variant="top" src={macro} />
                  <Card.Body>
                    <Card.Title>Macro nutrientes</Card.Title>
                    <Card.Text>
                      <h6 className="card-subtitle mb-2 ">
                        Proteína: {this.state.attributes.protein.qty.toFixed(2)} {this.state.attributes.protein.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Lipídeos: {this.state.attributes.lipid.qty.toFixed(2)} {this.state.attributes.lipid.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Carboidratos: {this.state.attributes.carbohydrate.qty.toFixed(2)} {this.state.attributes.carbohydrate.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Fibras: {this.state.attributes.fiber.qty.toFixed(2)} {this.state.attributes.fiber.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Calorias: {this.state.attributes.energy.kcal.toFixed(2)} Kcal
                      </h6>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>                
              </div>
              
              <div>
                <Card style={{ width: '15rem', minHeight: 343 }}>
                  <Card.Img variant="top" src={minerais} />
                  <Card.Body>
                    <Card.Title>Minerais</Card.Title>
                    <Card.Text>
                      <h6 className="card-subtitle mb-2 ">
                        Calcio: {this.state.attributes.calcium.qty.toFixed(2)} {this.state.attributes.calcium.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Magnésio: {this.state.attributes.magnesium.qty.toFixed(2)} {this.state.attributes.magnesium.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Fósforo: {this.state.attributes.phosphorus.qty.toFixed(2)} {this.state.attributes.phosphorus.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Ferro: {this.state.attributes.iron.qty.toFixed(2)} {this.state.attributes.iron.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Sódio: {this.state.attributes.sodium.qty.toFixed(2)} {this.state.attributes.sodium.unit}
                      </h6>


                      <h6 className="card-subtitle mb-2 ">
                        Zinco: {this.state.attributes.zinc.qty.toFixed(2)} {this.state.attributes.zinc.unit}
                      </h6>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: '15rem', minHeight: 343 }}>
                  <Card.Img variant="top" src={vitaminas} />
                  <Card.Body>
                    <Card.Title>Vitaminas</Card.Title>
                    <Card.Text>
                      <h6 className="card-subtitle mb-2 ">
                        Vitamina A: {this.state.attributes.retinol.qty.toFixed(2)} {this.state.attributes.retinol.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Vitamina B1: {this.state.attributes.thiamine.qty.toFixed(2)} {this.state.attributes.thiamine.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Vitamina B2: {this.state.attributes.riboflavin.qty.toFixed(2)} {this.state.attributes.riboflavin.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Vitamina B6 : {this.state.attributes.pyridoxine.qty.toFixed(2)} {this.state.attributes.pyridoxine.unit}
                      </h6>

                      {this.state.vitaminC ? <h6 className="card-subtitle mb-2 ">
                        Vitamina C : {this.state.vitaminC.qty.toFixed(2)} {this.state.vitaminC.unit} :
                      </h6> : null}

                      <h6 className="card-subtitle mb-2 ">
                        Vitamina B3: {this.state.attributes.niacin.qty.toFixed(2)} {this.state.attributes.niacin.unit}
                      </h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>


              <div>
                <Card style={{ width: '15rem', minHeight: 343 }}>
                  <Card.Img variant="top" src={gorduras} />
                  <Card.Body>
                    <Card.Title>Ácidos Graxos</Card.Title>
                    <Card.Text>
                      <h6 className="card-subtitle mb-2 ">
                        Saturados: {this.state.attributes.fatty_acids.saturated.qty.toFixed(2)} {this.state.attributes.fatty_acids.saturated.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Monoinsaturados: {this.state.attributes.fatty_acids.monounsaturated.qty.toFixed(2)} {this.state.attributes.fatty_acids.monounsaturated.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Polinsaturados: {this.state.attributes.fatty_acids.polyunsaturated.qty.toFixed(2)} {this.state.attributes.fatty_acids.polyunsaturated.unit}
                      </h6>

                      <h6 className="card-subtitle mb-2 ">
                        Colesterol: {this.state.attributes.cholesterol.qty.toFixed(2)} {this.state.attributes.cholesterol.unit}
                      </h6>
                    </Card.Text>
                  </Card.Body>
                </Card>

              </div>


            </div>
          </div>
          <h6 className='subCal'>Alguns alimentos podem ter valores com numero "0" por não conterem valores significativos.</h6>
        </div>
      );
    } else {
      return <span>Ops! Projeto não encontrado ):</span>;
    }
  }
}

export default Detail;