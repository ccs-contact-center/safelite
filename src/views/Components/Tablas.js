import React, { Component } from "react";
// import pc from "../../assets/img/pc.png";
// import { UncontrolledTooltip } from "reactstrap"

class TablaRG1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Valores</th>
                            <th scope="col">oct-20 </th>
                            <th scope="col">nov-20</th>
                            <th scope="col">dic-20</th>
                            <th scope="col">ene-21</th>
                            <th scope="col">feb-21 </th>
                            <th scope="col">mar-21</th>
                            <th scope="col">abr-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="align-middle">Llamadas Atendidas </td>
                            <td className="align-middle">758</td>
                            <td className="align-middle">571</td>
                            <td className="align-middle">641</td>
                            <td className="align-middle">567</td>
                            <td className="align-middle">444</td>
                            <td className="align-middle">518</td>
                            <td className="align-middle">641</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td>Oportunidades</td>
                            <td>272</td>
                            <td>223</td>
                            <td>246</td>
                            <td>189</td>
                            <td>106</td>
                            <td>142</td>
                            <td>153</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td>Citas</td>
                            <td>47</td>
                            <td>52</td>
                            <td>58</td>
                            <td>54</td>
                            <td>35</td>
                            <td>57</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="align-middle">Trabajos Exitosos</td>
                            <td className="align-middle">29</td>
                            <td className="align-middle">40</td>
                            <td className="align-middle">42</td>
                            <td className="align-middle">39</td>
                            <td className="align-middle">27</td>
                            <td className="align-middle">43</td>
                            <td className="align-middle">39</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td>% Citas CCS</td>
                            <td>17.3%</td>
                            <td>23.3%</td>
                            <td>23.6%</td>
                            <td>28.6%</td>
                            <td>33.0%</td>
                            <td>40.1%</td>
                            <td>31.4%</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td>% TNC</td>
                            <td>10.7%</td>
                            <td>17.9%</td>
                            <td>17.1%</td>
                            <td>20.6%</td>
                            <td>25.5%</td>
                            <td>30.3%</td>
                            <td>25.5%</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

class TablaRG2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr >
                            <th ></th>
                            <th className="bg-danger" scope="col">abr-21 </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row" className="bg-danger">Google</th>
                            <td className="align-middle">55%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Recomendación</th>
                            <td className="align-middle">14%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Cliente frecuente</th>
                            <td className="align-middle">12%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Aseguradora</th>
                            <td className="align-middle">10%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">De pasada por el local</th>
                            <td className="align-middle">6%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Facebook</th>
                            <td className="align-middle">2%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Colgantes</th>
                            <td className="align-middle">1%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Volantes</th>
                            <td className="align-middle">1%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class TablaRG3 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="bg-danger">
                            <th scope="col">Valores</th>
                            <th scope="col">oct-20 </th>
                            <th scope="col">nov-20</th>
                            <th scope="col">dic-20</th>
                            <th scope="col">ene-21</th>
                            <th scope="col">feb-21 </th>
                            <th scope="col">mar-21</th>
                            <th scope="col">abr-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">Recibidas</td>
                            <td className="padding-t-b-t">935</td>
                            <td className="padding-t-b-t">615</td>
                            <td className="padding-t-b-t">694</td>
                            <td className="padding-t-b-t">671</td>
                            <td className="padding-t-b-t">496</td>
                            <td className="padding-t-b-t">612</td>
                            <td className="padding-t-b-t">721</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">Atendidas</td>
                            <td className="padding-t-b-t">766</td>
                            <td className="padding-t-b-t">571</td>
                            <td className="padding-t-b-t">641</td>
                            <td className="padding-t-b-t">567</td>
                            <td className="padding-t-b-t">444</td>
                            <td className="padding-t-b-t">518</td>
                            <td className="padding-t-b-t">641</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">Atendidas &lt;20s</td>
                            <td className="padding-t-b-t">766</td>
                            <td className="padding-t-b-t">544</td>
                            <td className="padding-t-b-t">623</td>
                            <td className="padding-t-b-t">515</td>
                            <td className="padding-t-b-t">427</td>
                            <td className="padding-t-b-t">492</td>
                            <td className="padding-t-b-t">592</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">Abandonadas</td>
                            <td className="padding-t-b-t">168</td>
                            <td className="padding-t-b-t">44</td>
                            <td className="padding-t-b-t">53</td>
                            <td className="padding-t-b-t">104</td>
                            <td className="padding-t-b-t">52</td>
                            <td className="padding-t-b-t">94</td>
                            <td className="padding-t-b-t">80</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">AHT</td>
                            <td className="padding-t-b-t">0:07:12</td>
                            <td className="padding-t-b-t">0:05:59</td>
                            <td className="padding-t-b-t">0:05:47</td>
                            <td className="padding-t-b-t">0:05:44</td>
                            <td className="padding-t-b-t">0:05:53</td>
                            <td className="padding-t-b-t">0:06:19</td>
                            <td className="padding-t-b-t">0:05:57</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">ASA</td>
                            <td className="padding-t-b-t">00:00:04</td>
                            <td className="padding-t-b-t">00:00:04</td>
                            <td className="padding-t-b-t">00:00:05</td>
                            <td className="padding-t-b-t">00:00:02</td>
                            <td className="padding-t-b-t">00:00:02</td>
                            <td className="padding-t-b-t">00:00:02</td>
                            <td className="padding-t-b-t">00:00:02</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">%Abandonadas </td>
                            <td className="padding-t-b-t">18.00%</td>
                            <td className="padding-t-b-t">7.20%</td>
                            <td className="padding-t-b-t">7.60%</td>
                            <td className="padding-t-b-t">15.50%</td>
                            <td className="padding-t-b-t">10.48%</td>
                            <td className="padding-t-b-t">15.36%</td>
                            <td className="padding-t-b-t">11.10%</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">%Nivel de Atención</td>
                            <td className="padding-t-b-t">81.93%</td>
                            <td className="padding-t-b-t">83.50%</td>
                            <td className="padding-t-b-t">82.01%</td>
                            <td className="padding-t-b-t">77.79%</td>
                            <td className="padding-t-b-t">89.52%</td>
                            <td className="padding-t-b-t">84.64%</td>
                            <td className="padding-t-b-t">88.90%</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">%Nivel de Servicio</td>
                            <td className="padding-t-b-t">100.00%</td>
                            <td className="padding-t-b-t">95.30%</td>
                            <td className="padding-t-b-t">99.50%</td>
                            <td className="padding-t-b-t">98.70%</td>
                            <td className="padding-t-b-t">96.17%</td>
                            <td className="padding-t-b-t">94.98%</td>
                            <td className="padding-t-b-t">92.36%</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">Tipificaciones</td>
                            <td className="padding-t-b-t">566</td>
                            <td className="padding-t-b-t">569</td>
                            <td className="padding-t-b-t">638</td>
                            <td className="padding-t-b-t">567</td>
                            <td className="padding-t-b-t">444</td>
                            <td className="padding-t-b-t">518</td>
                            <td className="padding-t-b-t">641</td>
                        </tr>
                        <tr>
                            {/* <th scope="row" className="bg-danger">SVL</th> */}
                            <td className="padding-t-b-t">%Tipificacion</td>
                            <td className="padding-t-b-t">73.90%</td>
                            <td className="padding-t-b-t">99.60%</td>
                            <td className="padding-t-b-t">99.50%</td>
                            <td className="padding-t-b-t">100.00%</td>
                            <td className="padding-t-b-t">100.00%</td>
                            <td className="padding-t-b-t">100.00%</td>
                            <td className="padding-t-b-t">100.00%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


class TablaLlIn1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr >
                            <th className="bg-danger" scope="col">Rubro </th>
                            <th className="bg-danger" scope="col">#Motivos </th>
                            <th className="bg-danger" scope="col">% </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle">Oportunidades</td>
                            <td className="align-middle">153</td>
                            <td className="align-middle">27%</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle">Otros</td>
                            <td className="align-middle">488</td>
                            <td className="align-middle">73%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Total</th>
                            <th scope="row" className="bg-danger">641</th>
                            <th scope="row" className="bg-danger">100%</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class TablaLlIn2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <td></td>
                            <th colSpan="6" className="bg-danger" scope="col">Acumulado abril </th>
                        </tr>
                        <tr >

                            <th className="bg-danger" scope="col">Agente </th>
                            <th className="bg-danger" scope="col">Total Llamadas Atendidas </th>
                            <th className="bg-danger" scope="col">Oportunidades </th>
                            <th className="bg-danger" scope="col">Citas </th>
                            <th className="bg-danger" scope="col"> Trabajos realizados</th>
                            <th className="bg-danger" scope="col">% Citas </th>
                            <th className="bg-danger" scope="col">TNC </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle">Jesus Angel Monroy Pioquinto</td>
                            <td className="align-middle">179</td>
                            <td className="align-middle">51</td>
                            <td className="align-middle">12</td>
                            <td className="align-middle">7</td>
                            <td className="align-middle">24%</td>
                            <td className="align-middle">13.7%</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle">Jessica Trillo Alatorre</td>
                            <td className="align-middle">108</td>
                            <td className="align-middle">26</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">5</td>
                            <td className="align-middle">19%</td>
                            <td className="align-middle">19.2%</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle">Gabriela Paredes Ledezma</td>
                            <td className="align-middle">220</td>
                            <td className="align-middle">47</td>
                            <td className="align-middle">25</td>
                            <td className="align-middle">23</td>
                            <td className="align-middle">53%</td>
                            <td className="align-middle">48.9%</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle">Mariana Ortega Garcia</td>
                            <td className="align-middle">134</td>
                            <td className="align-middle">29</td>
                            <td className="align-middle">6</td>
                            <td className="align-middle">4</td>
                            <td className="align-middle">21%</td>
                            <td className="align-middle">13.8%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Total general</th>
                            <th scope="row" className="bg-danger">641</th>
                            <th scope="row" className="bg-danger">153</th>
                            <th scope="row" className="bg-danger">48</th>
                            <th scope="row" className="bg-danger">39</th>
                            <th scope="row" className="bg-danger">31.4%</th>
                            <th scope="row" className="bg-danger">25.5%</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


class TablaLlSA1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr >
                            <th className="bg-danger" scope="col"> Seguimiento OUT</th>
                            <th className="bg-danger" scope="col">jmonrpio </th>
                            <th className="bg-danger" scope="col"> jtrilala</th>
                            <th className="bg-danger" scope="col"> kpareled</th>
                            <th className="bg-danger" scope="col"> mortegar</th>
                            <th className="bg-danger" scope="col"> Total general</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Se solicita evidencia para cotización </td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 2</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Modificar fecha y hora </td>
                            <td className="align-middle padding-t-b-t">2 </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t">2 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t ">Auto en taller </td>
                            <td className="align-middle padding-t-b-t ">4 </td>
                            <td className="align-middle padding-t-b-t "> </td>
                            <td className="align-middle padding-t-b-t "> </td>
                            <td className="align-middle padding-t-b-t "> </td>
                            <td className="align-middle padding-t-b-t ">4 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t ">Tel no existe </td>
                            <td className="align-middle padding-t-b-t ">1 </td>
                            <td className="align-middle padding-t-b-t "> </td>
                            <td className="align-middle padding-t-b-t ">2 </td>
                            <td className="align-middle padding-t-b-t ">1 </td>
                            <td className="align-middle padding-t-b-t ">4 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Llamar más tarde </td>
                            <td className="align-middle padding-t-b-t"> 3</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t">1 </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 4</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Confirmación de pago </td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t">3 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Cristal no está en sucursal </td>
                            <td className="align-middle padding-t-b-t"> 4</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 4</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Por ubicación </td>
                            <td className="align-middle padding-t-b-t">4 </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t">2 </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t">6 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Cristal ya está en sucursal </td>
                            <td className="align-middle padding-t-b-t"> 3</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t">1 </td>
                            <td className="align-middle padding-t-b-t">5 </td>
                        </tr>

                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Confirmación de envío de evidencias </td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> 3</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> 6</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Esta ocupado </td>
                            <td className="align-middle padding-t-b-t"> 4</td>
                            <td className="align-middle padding-t-b-t"> 3</td>
                            <td className="align-middle padding-t-b-t"> 2</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t">10 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Promesa de pago/ sin stock </td>
                            <td className="align-middle padding-t-b-t">5 </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 8</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 13</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Disponibilidad de inventario con proveedores </td>
                            <td className="align-middle padding-t-b-t"> 14</td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t">3 </td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t">18 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">No se encuentra </td>
                            <td className="align-middle padding-t-b-t"> 10</td>
                            <td className="align-middle padding-t-b-t">2 </td>
                            <td className="align-middle padding-t-b-t">4 </td>
                            <td className="align-middle padding-t-b-t">4 </td>
                            <td className="align-middle padding-t-b-t">20 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Estatus de cotización </td>
                            <td className="align-middle padding-t-b-t"> 5</td>
                            <td className="align-middle padding-t-b-t"> 4</td>
                            <td className="align-middle padding-t-b-t"> 6</td>
                            <td className="align-middle padding-t-b-t"> 3</td>
                            <td className="align-middle padding-t-b-t">18 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Se programa servicio a domicilio </td>
                            <td className="align-middle padding-t-b-t">10 </td>
                            <td className="align-middle padding-t-b-t"> </td>
                            <td className="align-middle padding-t-b-t"> 7</td>
                            <td className="align-middle padding-t-b-t"> 2</td>
                            <td className="align-middle padding-t-b-t"> 19</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Tel equivocado </td>
                            <td className="align-middle padding-t-b-t">11 </td>
                            <td className="align-middle padding-t-b-t">3 </td>
                            <td className="align-middle padding-t-b-t"> 7</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t">22 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Sin convenio con su aseguradora </td>
                            <td className="align-middle padding-t-b-t"> 16</td>
                            <td className="align-middle padding-t-b-t">2 </td>
                            <td className="align-middle padding-t-b-t"> 5</td>
                            <td className="align-middle padding-t-b-t"> 2</td>
                            <td className="align-middle padding-t-b-t"> 25</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Disponibilidad de inventario tienda </td>
                            <td className="align-middle padding-t-b-t"> 19</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> 6</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t">27 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Otros </td>
                            <td className="align-middle padding-t-b-t">21 </td>
                            <td className="align-middle padding-t-b-t">7 </td>
                            <td className="align-middle padding-t-b-t"> 13</td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> 42</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t"> Precio</td>
                            <td className="align-middle padding-t-b-t">35 </td>
                            <td className="align-middle padding-t-b-t"> 1</td>
                            <td className="align-middle padding-t-b-t"> 7</td>
                            <td className="align-middle padding-t-b-t"> 4</td>
                            <td className="align-middle padding-t-b-t">47 </td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Lo consultará </td>
                            <td className="align-middle padding-t-b-t"> 22</td>
                            <td className="align-middle padding-t-b-t">5 </td>
                            <td className="align-middle padding-t-b-t"> 17</td>
                            <td className="align-middle padding-t-b-t"> 8</td>
                            <td className="align-middle padding-t-b-t"> 52</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Manda a buzón </td>
                            <td className="align-middle padding-t-b-t"> 14</td>
                            <td className="align-middle padding-t-b-t"> 6</td>
                            <td className="align-middle padding-t-b-t"> 30</td>
                            <td className="align-middle padding-t-b-t">7 </td>
                            <td className="align-middle padding-t-b-t"> 57</td>
                        </tr>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Ya realizó el servicio con otro taller </td>
                            <td className="align-middle padding-t-b-t">65 </td>
                            <td className="align-middle padding-t-b-t">2 </td>
                            <td className="align-middle padding-t-b-t">21  </td>
                            <td className="align-middle padding-t-b-t"> 11</td>
                            <td className="align-middle padding-t-b-t">99 </td>
                        </tr>

                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">No contesta </td>
                            <td className="align-middle padding-t-b-t"> 61</td>
                            <td className="align-middle padding-t-b-t"> 11</td>
                            <td className="align-middle padding-t-b-t"> 47</td>
                            <td className="align-middle padding-t-b-t"> 23</td>
                            <td className="align-middle padding-t-b-t"> 142</td>
                        </tr>
                       
                       
                       
                       
                        <tr >
                            <th scope="row" className="bg-danger  padding-t-b-t">Total general</th> 
                            <th scope="row" className="bg-danger padding-t-b-t">336</th> 
                            <th scope="row" className="bg-danger padding-t-b-t">49</th> 
                            <th scope="row" className="bg-danger padding-t-b-t">193</th> 
                            <th scope="row" className="bg-danger padding-t-b-t">73</th> 
                            <th scope="row" className="bg-danger padding-t-b-t">651</th> 
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


class TablaLlSA2 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr >
                            <th className="bg-danger" scope="col">Seguimiento OUT</th>
                            <th className="bg-danger" scope="col">Jesus Monroy </th>
                            <th className="bg-danger" scope="col"> Jessica Trillo</th>
                            <th className="bg-danger" scope="col"> Karla Paredes</th>
                            <th className="bg-danger" scope="col"> Mariana Ortega</th>
                            <th className="bg-danger" scope="col"> Total general</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {/* <th scope="row" className="bg-danger">Google</th> */}
                            <td className="align-middle padding-t-b-t">Marcaciones: </td>
                            <td className="align-middle padding-t-b-t"> 336</td>
                            <td className="align-middle padding-t-b-t"> 49</td>
                            <td className="align-middle padding-t-b-t"> 193</td>
                            <td className="align-middle padding-t-b-t"> 73</td>
                            <td className="align-middle padding-t-b-t"> 651</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


class TablaC1 extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered" >
                    <thead>
                        <tr >
                            <th className="bg-danger" scope="col">Calidad ABC</th>
                            <th className="bg-danger" scope="col">oct-20 </th>
                            <th className="bg-danger" scope="col"> nov-20</th>
                            <th className="bg-danger" scope="col"> dic-20</th>
                            <th className="bg-danger" scope="col"> ene-21</th>
                            <th className="bg-danger" scope="col"> feb-21</th>
                            <th className="bg-danger" scope="col"> mar-21</th>
                            <th className="bg-danger" scope="col"> abr-21</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row" className="bg-danger">A</th> 
                            <td className="align-middle padding-t-b-t">20%</td>
                            <td className="align-middle padding-t-b-t"> 0%</td>
                            <td className="align-middle padding-t-b-t"> 0%</td>
                            <td className="align-middle padding-t-b-t"> 0%</td>
                            <td className="align-middle padding-t-b-t"> 0%</td>
                            <td className="align-middle padding-t-b-t"> 0%</td>
                            <td className="align-middle padding-t-b-t"> 0%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">B</th> 
                            <td className="align-middle padding-t-b-t">60%</td>
                            <td className="align-middle padding-t-b-t"> 67%</td>
                            <td className="align-middle padding-t-b-t"> 67%</td>
                            <td className="align-middle padding-t-b-t"> 67%</td>
                            <td className="align-middle padding-t-b-t"> 67%</td>
                            <td className="align-middle padding-t-b-t"> 50%</td>
                            <td className="align-middle padding-t-b-t"> 25%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">C</th> 
                            <td className="align-middle padding-t-b-t">20%</td>
                            <td className="align-middle padding-t-b-t"> 33%</td>
                            <td className="align-middle padding-t-b-t"> 33%</td>
                            <td className="align-middle padding-t-b-t"> 33%</td>
                            <td className="align-middle padding-t-b-t"> 25%</td>
                            <td className="align-middle padding-t-b-t"> 50%</td>
                            <td className="align-middle padding-t-b-t"> 75%</td>
                        </tr>
                        <tr >
                            <th scope="row" className="bg-danger">Total</th> 
                            <td className="align-middle padding-t-b-t">100%</td>
                            <td className="align-middle padding-t-b-t"> 100%</td>
                            <td className="align-middle padding-t-b-t"> 100%</td>
                            <td className="align-middle padding-t-b-t"> 100%</td>
                            <td className="align-middle padding-t-b-t"> 100%</td>
                            <td className="align-middle padding-t-b-t"> 100%</td>
                            <td className="align-middle padding-t-b-t"> 100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}



export {
    TablaRG1, TablaRG2, TablaRG3, TablaLlIn1, TablaLlIn2,TablaLlSA1,TablaLlSA2,TablaC1,
};