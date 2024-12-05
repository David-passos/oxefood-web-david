import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";


export default function FormVenda() {
    const { state } = useLocation();
    const [idVenda, setIdVenda] = useState();

    const [cliente, setCliente] = useState();
    const [produto, setProduto] = useState();

    const [dataVenda, setDataVenda] = useState();
    const [valorTotal, setValorTotal] = useState();
    const [observacao, setObservacao] = useState();
    const [retiradaEmLoja, setRetiradaEmLoja] = useState(true);
    const [statusVenda, setStatusVenda] = useState();
    const opcoes = [{ key: '1', text: 'Pedido Cancelado', value: 'Pedido Cancelado' },
        { key: '2', text: 'Aguardando Pagamento', value: 'Pagamento' },
        { key: '3', text: 'Pago', value: 'Pago' },
        { key: '4', text: 'Entregue', value: 'Entregue' }
    ];
    
    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/venda/" + state.id)
                .then((response) => {
                    setIdVenda(response.data.id)
                    setCliente(response.data.cliente)
                    setProduto(response.data.produto)
                    setDataVenda(response.data.dataVenda)
                    setValorTotal(response.data.valorTotal)
                    setObservacao(response.data.observacao)
                    setRetiradaEmLoja(response.data.retiradaEmLoja)
                    setStatusVenda(response.data.statusVenda)
                })
        }
    }, [state])

    function salvar() {

        let vendaRequest = {
            cliente: cliente,
            produto: produto,
            statusVenda: statusVenda,
            dataVenda: dataVenda,
            valorTotal: valorTotal,
            observacao: observacao,
            retiradaEmLoja: retiradaEmLoja

        }

        if (idVenda != null) { //Alteração:
            axios.put("http://localhost:8080/api/venda/" + idVenda, vendaRequest)
                .then((response) => { console.log('venda alterada com sucesso.') })
                .catch((error) => { console.log('Erro ao alter uma venda.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/venda", vendaRequest)
                .then((response) => { console.log('Venda cadastrada com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir a Venda.') })
        }
    }

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    return (

        <div>
            <MenuSistema tela={'venda'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idVenda === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Venda &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idVenda != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Venda &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Cliente'
                                    value={cliente}
                                    onChange={(e) => setCliente(e.target.value)}
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Produto'
                                    width={9}
                                    value={produto}
                                    onChange={(e) => setProduto(e.target.value)}
                                >

                                </Form.Input>

                                <Form.Group widths='equal'>

                                    <Form.Select
                                        required
                                        fluid
                                        label='Status Venda'
                                        options={opcoes}
                                        value={statusVenda}
                                        onChange={(e, { value }) => setStatusVenda(value)}
                                        maxLength="100"
                                    />

                                </Form.Group>

                            </Form.Group>


                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Data Venda'
                                    width={6}
                                    value={dataVenda}
                                    onChange={(e) => setDataVenda(e.target.value)}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={formatarData(dataVenda)}
                                        onChange={(e) => setDataVenda(e.target.value)}
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Observação'
                                    width={6}
                                    value={observacao}
                                    onChange={(e) => setObservacao(e.target.value)}
                                >
                                
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor total'
                                    width={6}
                                    value={valorTotal}
                                    onChange={(e) => setValorTotal(e.target.value)}
                                >
                                
                                </Form.Input>


                            </Form.Group>

                            <Form.Group inline>
                                <label>Retirada em Loja: </label>

                                <Form.Radio
                                    label='Sim'
                                    checked={retiradaEmLoja === true}
                                    onChange={() => setRetiradaEmLoja(true)}
                                />

                                <Form.Radio
                                    label='Não'
                                    checked={retiradaEmLoja === false}
                                    onChange={() => setRetiradaEmLoja(false)}
                                />
                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-venda'}>Voltar</Link>

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