import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import axios from "axios";

export default function FormProduto () {

    
   const [titulo, setTitulo] = useState();
   const [codigo, setCodigo] = useState();
   const [descricao, setDescricao] = useState();
   const [valorUnitario, setValorUnitario] = useState();
   const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
   const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();


   function salvar() {

    let produtoRequest = {
         titulo: titulo,
         codigo: codigo,
         descricao: descricao,
         valorUnitario: valorUnitario,
         tempoEntregaMaximo: tempoEntregaMaximo,
         tempoEntregaMinimo: tempoEntregaMinimo
    }

    axios.post("http://localhost:8080/api/produto", produtoRequest)
    .then((response) => {
         console.log('Produto cadastrado com sucesso.')
    })
    .catch((error) => {
         console.log('Erro ao incluir o um produto.')
    })
}


    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    placeholder = 'Informe o titulo do produto'
                                    maxLength="100"
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder = 'informe o código do produto'
                                    value={codigo}
			                        onChange={e => setCodigo(e.target.value)}
                                    >
                                 
                                </Form.Input>

                               

                            </Form.Group>

                            <Form.TextArea placeholder='descrição do produto'
                                label = 'Descricao'
                                cols = '400'
                                value={descricao}
			                        onChange={e => setDescricao(e.target.value)}
                               />
                            
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Valor Unitario'
                                    required
                                    width={6}
                                        value={valorUnitario}
                                        onChange={e => setValorUnitario(e.target.value)}
                                >
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maximo em minutos'
                                    width={6}
                                    value={tempoEntregaMaximo}
                                        onChange={e => setTempoEntregaMaximo(e.target.value)}
                                >
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minimo em minutos'
                                    width={6}
                                    value={tempoEntregaMinimo}
                                        onChange={e => setTempoEntregaMinimo(e.target.value)}
                                >
                                    
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}