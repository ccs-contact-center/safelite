import React, { Component } from "react";
import ReactFullpage, { } from "@fullpage/react-fullpage";
import ReactFitText from "react-fittext";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import "../index.css";
import logo from "../assets/img/brand/logo.png";
import {
  BarChartRGNTC, BarChartRGLLA, BarChartRGTNC, MixCharRG, BarChartRGTNC2, PieChartLlaIn1, BarChartLlIn2, BarChartLlIn3,
  BarChartPA1, BarChartLlSA1, BarChartC1,BarChartH,
} from "./Components/Graphics";
// import MixChar7 from "./Components/MixChart"
// import MixChartRA from "./Components/MixChartRA"
import { TablaRG1, TablaRG2, TablaRG3, TablaLlIn1, TablaLlIn2, TablaLlSA1, TablaLlSA2, TablaC1, } from "./Components/Tablas";
// import { Kpis,  } from "./Components/TablasUpDate"
import { MapInteractionCSS } from 'react-map-interaction';
import 'animate.css';



class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        scale: 1.1,
        translation: { x: 0, y: 0 }
      },
      //     value2: {
      //       scale: 0.8,
      //       translation: { x: 0, y: 0 }
      //     }
    };
  }
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */
          anchors={[
            "kpis",

            "CalidadMarzo1",
          ]}
          verticalCentered={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div
                    style={{
                      padding: "3%",
                      textAlign: "center",
                      width: "50vw"
                    }}
                  >
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />


                    <ReactFitText>

                      <h1 className="transparent animated animate__backInUp">Seguimiento Safelite</h1>
                    </ReactFitText>
                    {/* <ReactFitText>
                      <h1 className="transparent animated animate__backInUp">MENSUAL</h1>
                    </ReactFitText>
                    <ReactFitText>
                      <h1 className="transparent animated  animate__backInRight">ENERO-ABRIL</h1>
                    </ReactFitText> */}
                  </div>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                        <TablaRG1 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                        <p>TNC</p>
                        <BarChartRGNTC />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                        <p>Llamadas Atendidas </p>
                        <BarChartRGLLA />
                        <p>
                          <ul>
                            <li>Tuvimos una incremento del 23% en llamadas recibidas.</li>
                            <li>El TNC tuvo un resultado en marzo del 25.5%.</li>
                            <li>
                              Se realiza un análisis de TODAS las llamadas y confirmar la correcta gestión, esto debido
                              al 73% que no es oportunidad.
                            </li>
                            <li>
                              Se incorpora el proceso de seguimiento a subastas de asegurados a partir del 26/05
                            </li>
                          </ul>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                      </Col>
                      <Col xs="4">
                        <TablaRG2 />
                      </Col>
                      <Col xs="8">
                        <p>¿Cómo se entero?</p>
                        <BarChartH/>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                      </Col>
                      <Col xs="12">
                        <BarChartRGTNC />
                      </Col>
                      <Col xs="12">
                        <p>
                          <ul>
                            <li>
                              El % mayor de los trabajos realizados en el mes de marzo es por que se enteraron mediante
                              Google con un 45%.
                           </li>
                            <li>
                              Se hizo Gestión de descuento, con 4 clientes que por costo no aceptaron el reemplazo
                              (NO ACEPTARON).
                            </li>
                            <li>Se sondea en llamadas costos de la competencia.</li>
                          </ul>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                      </Col>
                      <Col xs="12">
                        <TablaRG3 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                      </Col>
                      <Col xs="12">
                        <MixCharRG />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Resumen general</span>
                        </h2>
                      </Col>
                      <Col xs="12">
                        <p>TNC</p>
                        <BarChartRGTNC2 />
                      </Col>
                      <Col xs="12">
                        <p>
                          <ul>
                            <li>
                              Se mantiene el seguimiento OUT fuera de horarios PICOS.
                            </li>
                            <li>
                              Supervisor valida las citas previo al envío.
                            </li>
                            <li>
                              Calidad continua con el monitoreo del 100% de llamadas y detona hallazgos para las
                              acciones inmediatas.
                            </li>
                            <li>
                              Debido al proceso de subastas, tenemos un incremento en las llamadas entrantes.
                            </li>
                          </ul>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Llamadas IN</span>
                        </h2>
                      </Col>
                    </Row>
                    <Row className="centrado-fila">
                      <Col xs="5">
                        <TablaLlIn1 />
                      </Col>
                      <Col xs="7">
                        <p>% Motivos</p>
                        <PieChartLlaIn1 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Llamadas IN</span>
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <BarChartLlIn2 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Llamadas IN</span>
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <BarChartLlIn3 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Productividad por agente</span>
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <TablaLlIn2 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Productividad por agente</span>
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <p>TNC</p>
                        <BarChartPA1 />
                      </Col>
                      <Col xs="12">
                        <p>
                          <ul>
                            <li>
                              Se realiza un coaching en línea todo momento para accionar con los dos agentes con menor
                              productividad.
                            </li>
                          </ul>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Llamadas Seguimiento Abril </span>
                        </h2>
                      </Col>
                    </Row>
                  </Container>
                  <div style={{ width: "95%", height: "78%" }}>
                    <MapInteractionCSS
                      value={this.state.value}
                      onChange={(value) => this.setState({ value })}
                      className="centrado-fila"
                    >
                      <TablaLlSA1 />
                    </MapInteractionCSS>
                  </div>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Llamadas Seguimiento Abril </span>
                        </h2>
                      </Col>
                      <Col>
                        <TablaLlSA2 />
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Llamadas Seguimiento Abril </span>
                        </h2>
                      </Col>
                      <Col xs="12">
                        <BarChartLlSA1 />
                      </Col>
                      <Col xs="12">
                        <p>
                          <ul>
                            <li>Se da seguimiento a los clientes que están interesados.</li>
                            <li>En promedio a cada registro se les dan 2 toques, esto nos ayuda para que los no contacto
                           y buzones se tenga éxito.</li>
                          </ul>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Calidad </span>
                        </h2>
                      </Col>
                      <Col xs="12">
                        <p>% Historico QA</p>
                        <BarChartC1 />
                      </Col>
                      <Col xs="12">
                        <p>
                          Las principales Áreas de oportunidad detectadas son:
                        <br />
                          <strong>Sondeo</strong>. Agentes no realizan preguntas abiertas o cerradas para detectar el
                         motivo de la llamada de usuario.<br />
                          <strong>Captura</strong>: Se encuentran áreas de oportunidad en la búsqueda de códigos NAGS.
                     </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="section centrado-fila">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2 className="border border-bottom border-danger centrado-fila">
                          <span>Calidad </span>
                        </h2>
                      </Col>
                      <Col xs="12">
                        <TablaC1 />
                      </Col>
                      <Col xs="3">
                        <p className="text-left">
                          Con un promedio ABC de:<br />
                          <ul >
                            <li>91.81</li>
                          </ul>
                        Clasificando en nivel:<br />
                          <ul >
                            <li>B</li>
                          </ul>
                        </p>
                      </Col>
                      <Col xs="9">
                        <p>
                        Acciones:<br/>
                        <ul>
                          <li>Agentes en piso con el monitoreo y coacheo de todas las áreas.</li>
                          <li>Evaluaciones y ejercicios por parte de capacitación.</li>
                          <li>Clínicas de QA sobre el apego completo a proceso y sondeo total.</li>
                          <li>Se enfocan las clínicas, monitoreos y ejercicios a la correcta captura y búsqueda de 
                            códigos NAGS.</li>
                        </ul>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>





                <div className="section">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <h2>
                          <b>Gracias</b> <br />
                          <a href="www.ccscontactcenter.com">www.ccscontactcenter.com</a><br />
                    CDMX<br />
                    Amores 321 1° piso<br />
                    Col. Del Valle<br />
                    C.P. 03100 <br />
                    Tel. +52 (55) 5091.9160
                    <br />
                        </h2>
                      </Col>
                    </Row>
                  </Container>
                </div>

              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
