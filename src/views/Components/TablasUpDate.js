
import {
    Container,
    Row,
    Col,
} from "reactstrap";

import {
    Tabla1,
    Tabla2,
    TablaK1,
    TablaK2,
    TablaK3,
    TablaK4,
    
  
    TablaCalidad8,   TablaCalidad9,
    Tabla8,
} from "./Tablas";
import { BarChart8, BarChart9,BarChartMar9, BarChartMar10, BarChartDoble, BarChartDoble2, } from "./Graphics";
import React, { Component } from "react";


class Kpis extends Component {
    render() {
        return (
            <div >
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>FEBRERO</span> <span>KPI´S</span></h2>
                            </Col>
                            <Col xs="6">
                                <div className="animated animate__backInLeft">
                                    < Tabla1 />

                                </div>
                            </Col>
                            <Col xs="6">
                                <Tabla2 />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>MARZO</span> <span>KPI´S</span></h2>
                            </Col>
                            <Col xs="6">
                                <div className="animated animate__backInLeft">
                                    < TablaK1 />

                                </div>
                            </Col>
                            <Col xs="6">
                                <TablaK2 />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>ABRIL</span> <span>KPI´S</span></h2>
                            </Col>
                            <Col xs="6">
                                <div className="animated animate__backInLeft">
                                   < TablaK3 />

                                </div>
                            </Col>
                            <Col xs="6">
                                <TablaK4 />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

// class IndicadoresAtencion extends Component {
//     render() {
//         return (
//             <div >
//                 <div className="slide">
//                     <Container>
//                         <Row>
//                             <Col xs="12">
//                                 <h2 className="border border-bottom border-danger"><span>Resumen Atención</span></h2>
//                                 <Tabla3 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//                 <div className="slide">
//                     <Container>
//                         <Row>
//                             <Col xs="12">
//                                 <h2 className="border border-bottom border-danger"><span>Resumen Atención</span></h2>
//                                 <TablaI3 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//                 <div className="slide">
//                     <Container>
//                         <Row>
//                             <Col xs="12">
//                                 <h2 className="border border-bottom border-danger centrado-fila"><span>Resumen Atención</span></h2>
//                                 <TablaI4 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </div>
//         )
//     }
// }

// class ResumenVentasNuevas extends Component {
//     render() {
//         return (
//             <div >
//                 <div className="slide">
//                     <Container>
//                         <Row>
//                             <Col xs="12">
//                                 <h2 className="border border-bottom border-danger"><span>Resumen Ventas nuevas</span></h2>
//                                 <Tabla4 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//                 <div className="slide">
//                     <Container>
//                         <Row>
//                             <Col xs="12">
//                                 <h2 className="border border-bottom border-danger"><span>Resumen Ventas nuevas</span></h2>
//                                 <TablaRVN4 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//                 <div className="slide">
//                     <Container>
//                         <Row>
//                             <Col xs="12">
//                                 <h2 className="border border-bottom border-danger"><span>Resumen Ventas nuevas</span></h2>
//                                 <TablaRVN5 />
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </div>
//         )
//     }
// }

class CalidadMarzo1 extends Component {
    render() {
        return (
            <div >
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                                <Tabla8 />
                            </Col>
                            <Col xs="12">
                                <p className="text-lef"><strong>Con un promedio ABC de:</strong> 93.02%.</p>
                                <p className="text-lef"><strong>Clasificando en nivel:</strong> B.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                                <TablaCalidad8 />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                                <TablaCalidad9 />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

class CalidadMarzo2 extends Component {
    render() {
        return (
            <div >
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6"><BarChart8 /></Col>
                            <Col xs="6"><BarChart9 /></Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                                <BarChartMar9 />
                            </Col>
                            <Col xs="12">
                                <p className="text-justify">
                                    Las principales Áreas de oportunidad detectadas son:<br />
                                    <strong>Manejo de objeciones</strong>: Agente no debate las objeciones que
                                    presenta el cliente.
                                    <strong>Voz y vocabulario</strong>: Agente utiliza muletillas durante la
                                     interacción con el cliente.<br />
                                    <strong>Tipificación correcta</strong>: Agente tipifica la llamada de manera
                                    incorrecta seleccionando una opción distinta a lo sucedido en la marcación.

                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                                <BarChartDoble />
                            </Col>
                            <Col xs="4" className="text-left">
                                <p>Con un promedio ABC de:<br />
                                    <ul>
                                        <li>92.08%</li>
                                    </ul>
                                    Clasificando en nivel:<br />
                                    <ul>
                                        <li>B</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col xs="8" className="text-justify">
                                <p>
                                    Acciones:<br />
                                    Refuerzo mediante clínica sobre la importancia de tipificar de forma correcta
                                    la interacción.<br />
                                    Clínica enfocada al manejo para debatir las negativas del cliente y poder colocar
                                     una venta cruzada aprovechando en contacto.<br />
                                     Taller de Voz y vocabulario para erradicar las multillas y extranjerismos para
                                     poder tener una conversación profesional con el cliente.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                                <BarChartMar10 />
                            </Col>
                            <Col xs="12">
                                <p className="text-justify">
                                    Las principales Áreas de oportunidad detectadas son:<br />
                                    <strong>Manejo de objeciones</strong>: Agente no debate las objeciones que
                                    presenta el cliente.
                                    <br />
                                    <strong>Tipificación correcta</strong>: Agente tipifica la llamada de manera
                                    incorrecta seleccionando una opción distinta a lo sucedido en la interacción.

                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="slide">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h2 className="border border-bottom border-danger"><span>Calidad</span></h2>
                                <BarChartDoble2 />
                            </Col>
                            <Col xs="4" className="text-left">
                                <p>Con un promedio ABC de:<br />
                                    <ul>
                                        <li>93.01%</li>
                                    </ul>
                                    Clasificando en nivel:<br />
                                    <ul>
                                        <li>B</li>
                                    </ul>
                                </p>
                            </Col>
                            <Col xs="8" className="text-justify">
                                <p>
                                    Acciones:<br />
                                    Se lleva acabo un reforzamiento sobre la importancia que tiene el tipificar las 
                                    interacciones de forma correcta, seleccionando la opción que corresponde a cada 
                                    interacción .<br />
                                    Clínica enfocada al manejo para debatir las negativas del cliente y poder colocar
                                     una venta cruzada aprovechando el contacto, reforzando la venta generada con 
                                     beneficios y no solo haciendo una labor informativa.

                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export { Kpis,  CalidadMarzo1, CalidadMarzo2 }