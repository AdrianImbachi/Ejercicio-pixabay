import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerdatos = (e) => {
        e.preventDefault();
        // tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        // lo enviamos al componente principal
        this.props.datosBusqueda(termino);

    }

    render(){
        return (
            <form onSubmit={this.obtenerdatos}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef} type="text" className='form-control form-control-lg' 
                        placeholder='Buscar tu imagen. Ejemplo: Futbol'/>
                    </div>
                    <div className='form-group col-md-4'>
                        <input type="submit" className='btn btn-lg btn-danger btn-block' value="Buscar..."/>
                    </div>
                </div>
            </form>
        );
    }
}
export default Buscador;