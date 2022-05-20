import { useState } from "react";

function App() {
  const [inputState, setinputState] = useState({
    operacion: "",
    resultado: "",
  });

  const inicioEstado = JSON.parse(localStorage.getItem("historial")) || [];
  const [historial, setHistorial] = useState(inicioEstado);

  const handleInputChange = (event) => {
    setinputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumeroClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.value,
    });
  };

  const handleOperadorClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.textContent,
    });
  };

  const handleResultado = () => {
    var datos = inputState.operacion;
    var res = eval(datos);

    localStorage.setItem(
      "historial",
      JSON.stringify([
        ...historial,
        {
          operacion: datos,
          resultado: res,
        },
      ])
    );
    setHistorial([
      ...historial,
      {
        operacion: datos,
        resultado: res,
      },
    ]);

    setinputState({
      ...inputState,
      operacion: res,
      resultado: "",
    });
  };

  const handleClickLimpiar = () => {
    setinputState({
      ...inputState,
      operacion: "",
      resultado: "",
    });
  };

  const handleResetHistorial = () => {
    setHistorial([]);
    localStorage.setItem("historial", JSON.stringify([]));
  };




  return (
    <div className="App container mt-4">
      
      <center>
    <div className="row card shadow text-center " id="contenedor" >
      
      <div className="row">
         
        <div className="mb-3 text-end">
          <br />
          <center>
          <input 
          style={{background: "#d9ffea"}}
            id="input"
            name="input"
            className="p-2 w-75 text-end shadow"
            disabled={true}
            onChange={handleInputChange}
            value={inputState.operacion}
            >
            </input>
            </center>
        </div>

        <div className="col card-body" style={{width: "200px"}}>
          <h3 className="text-center animate__animated animate__rubberBand">Historial :)</h3>
          {
            historial.length === 0 ?
            "No hay operaciones aun :("
            :
            (
              <ol>
                {historial.map((item,index) => {
                  return(
                    <li key={index} style={{fontSize: "150%"}}>
                      {item.operacion} = {item.resultado} &nbsp;
                    </li>
                  );
                })
                }
              </ol>
            )
          }
          <br />
          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value="+"
            onClick={handleResetHistorial}
            id="colorojo"
          >Borrar</button>
        </div>
            
        <div className="col card-body" style={{width: "640px"}}>
          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value="+"
            onClick={handleOperadorClick}
            id="coloramarillos"
          >+</button>
          <button
            className="btn-lg"
            style={{width: "100px"}}
            value="-"
            onClick={handleOperadorClick}
            id="coloramarillos"
          >-</button>
          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value="*"
            onClick={handleOperadorClick}
            id="coloramarillos"
          >*</button>
          <button
            className="btn-lg"
            style={{width: "100px"}}
            value="/"
            onClick={handleOperadorClick}
            id="coloramarillos"
          >/</button>
          <br />  
          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value={9}
            onClick={handleNumeroClick}
            id="colorazul"
          >9</button>
          <button
            className=" btn-lg"
            style={{width: "100px"}}
            value={8}
            onClick={handleNumeroClick}
            id="colorazul"
          >8</button>
          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value={7}
            onClick={handleNumeroClick}
            id="colorazul"
          >7</button>
           <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value={"."}
            onClick={handleNumeroClick}
            id="coloramarillos"
          >.</button><br />

          <button
            className=" btn-lg m-2"
            style={{width: "100px"}}
            value={6}
            onClick={handleNumeroClick}
            id="colorazul"
          >6</button>
          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value={5}
            onClick={handleNumeroClick}
            id="colorazul"
          >5</button>
          <button
            className="btn-lg "
            style={{width: "100px"}}
            value={4}
            onClick={handleNumeroClick}
            id="colorazul"
          >4</button>

          <button
          className="btn-lg"
          style={{width: "100px"}}
          onClick={handleResultado}
          value="="
          id="coloramarillos"
          >=</button> <br />  

          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value={3}
            onClick={handleNumeroClick}
            id="colorazul"
          >3</button> 
          
          <button
            className=" btn-lg"
            style={{width: "100px"}}
            value={2}
            onClick={handleNumeroClick}
            id="colorazul"
          >2</button> 
          <button
            className="btn-lg m-2"
            style={{width: "100px"}}
            value={1}
            onClick={handleNumeroClick}
            id="colorazul"
          >1</button>
          <button
          className="btn-lg m-2"
          style={{width: "100px"}}
          onClick={{handleClickLimpiar}}
          id="colorojo"
          >Limpiar</button><br />
          <button
            className="btn-lg"
            style={{width: "100px"}}
            value={0}
            onClick={handleNumeroClick}
            id="colorazul"
          >0</button>
          
         
          
          
        </div>
      </div>
      
    </div>
    </center>

    </div>
  );
}

export default App;