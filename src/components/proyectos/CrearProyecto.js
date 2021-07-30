import React, { useState } from 'react' 
import "../../App.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";

    const data = [
        { id: 1, Nombre: "Construccion"},
      ];
class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          Nombre: ""
        },
      };
    
      mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
      };
    
      cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
      };
    
      mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
      };
    
      cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
      };
    
      editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo[contador].Nombre = dato.Nombre;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      };
    
      eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion == true) {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id == registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
      };
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
      }
    
      handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
    
      render() {
    
        return (
            <div className="bg-light">
            <Container>
            <br />
              <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Nuevo Proyecto</Button>
              <br />
              <br />
              <Table>
            <thead>
              <tr>
                <th>Nombre</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.Nombre}</td>
                </tr>
              ))}
            </tbody>
          </Table>
            </Container>
    
    
    
            <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader>
               <div><h3>Insertar Proyecto</h3></div>
              </ModalHeader>
    
              <ModalBody>
                <FormGroup>    
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length+1}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Nombre: 
                  </label>
                  <input
                    className="form-control"
                    name="Nombre"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </ModalBody>
    
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.insertar()}
                >
                  Insertar
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => this.cerrarModalInsertar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </div>
    );
}
}
export default  App