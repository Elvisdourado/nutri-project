import React from 'react'
import axios from 'axios'
import Main from '../mid/Main'
import '../assets/App.css'
import Card from 'react-bootstrap/Card'
import result from '../assets/result.png'
import list from '../assets/list.png'



class Search extends React.Component {
  state = {
    searchTerm: '',
    result: [],
    savedList: [],
    totalList: [],
  }



  componentDidMount = async () => {
    try {
      const response = await axios.get("https://taco-food-api.herokuapp.com/api/v1/food")
      this.setState({ totalList: [...response.data] })
    } catch (err) {
      console.error(err)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchTerm !== this.state.searchTerm) {
      const filteredArray = this.state.totalList.filter((food) => {
        return food.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
      this.setState({ result: filteredArray })
      console.log(filteredArray)
    }
  }


  handleChange = (event) => {
    console.log(this.state.searchTerm)
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAddList = (list) => {
    const NewSavedList = [...this.state.savedList, list]
    this.setState({ savedList: NewSavedList })
  }

  handleDelete = (deletar) => {

    const filteredList = [...this.state.savedList.filter(list => list.description !== deletar)]
    this.setState({ savedList: filteredList })
  }


  render() {
    return <div >
      <div className="d-flex justify-content-center " >
        <div>
          <input
            className="form-control"
            style={{ width: 450 }}
            type="search"
            placeholder="Busca rápida"
            aria-label="Search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </div>
      </div>
      <h6 className='subCal'>Os resultados são para 100g de cada alimento</h6>
      <div className='d-flex justify-content-around'>
        <div className=' p-3 col-4'>
          {this.state.result.map((busca) => {
            return (
              <div key={busca.id} className="d-flex border p-2 caixas">

                <Main
                  food={busca}
                  handleAddList={this.handleAddList} />
              </div>)
          })}
        </div>
        <div className='p-3'>
          {this.state.savedList.map((busca) => {
            return (
              <div key={busca.id} className="d-flex border p-2 caixas">
                <div>
                  <div>
                    <Card.Img variant="top" src={list} />
                  </div>
                  <div>
                    <Main
                      food={busca}
                      handleDelete={this.handleDelete} />
                  </div>
                </div>
              </div>)
          })}
        </div>
        {this.state.savedList.length > 0 ? (
          <div className='p-3'>
            <div className="d-flex border p-2 caixas">
              <div>
                <Card.Img variant="top" src={result} />
                <div className='imageMain '>Soma dos nutrientes:</div>
                <div className="textResult">
                  <div className='textInside'>Proteína: {this.state.savedList.reduce((acc, food) => acc + (food.attributes.protein.qty ? food.attributes.protein.qty : 0), 0).toFixed(2)} gramas</div>
                  <div className='textInside'>Lipídeos: {this.state.savedList.reduce((acc, food) => acc + (food.attributes.lipid.qty ? food.attributes.lipid.qty : 0), 0).toFixed(2)} gramas</div>
                  <div>Carboidratos: {this.state.savedList.reduce((acc, food) => acc + (food.attributes.carbohydrate ? food.attributes.carbohydrate.qty : 0), 0).toFixed(2)} gramas</div>
                  {/* <div>Fibras: {this.state.savedList.reduce((acc, food) => acc + (food.attributes.fiber ? food.attributes.fiber.qty : 0), 0).toFixed(2)} gramas</div> */}
                  <div>Calorias: {this.state.savedList.reduce((acc, food) => acc + (food.attributes.energy ? food.attributes.energy.kcal : 0), 0).toFixed(2)} calorias</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  }
}

export default Search
