import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';


export default function FormProduto () {

    
   const [titulo, setTitulo] = useState();
   const [codigo, setCodigo] = useState();
   const [descricao, setDescricao] = useState();
   const [valorUnitario, setValorUnitario] = useState();
   const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
   const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();


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
                                    label='titulo'
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
                                    
                                    >
                                 
                                </Form.Input>

                               

                            </Form.Group>

                            <Form.TextArea placeholder='descrição do produto'
                                label = 'Descricao'
                                
                                cols = '400'
                               />
                            
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Valor Usuario'
                                    required
                                    width={6}>
                                
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minimo em minutos'
                                    width={6}
                                >
                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maximo em minutos'
                                    width={6}
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