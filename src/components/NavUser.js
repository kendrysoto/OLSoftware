import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/NavUser.css';

const NavUser = () => {
    return (
        <div id="boxNav">
            <Nav className="flex-column">
                <Nav.Link id="linkCircle" >
                    <div id="circle">
                        <i className="fas fa-circle fas fa-2x"></i>
                    </div>
                    <p className="nameOl">OLSoftware</p>
                </Nav.Link>
                <Nav.Link >
                    <div id="icon">
                        <i class="far fa-file fas fa-lg"></i>
                    </div>
                    <div className="iconSelec">
                        <select >
                            <option>Programación</option>
                        </select>
                    </div>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                    <div id="icon">
                        <i class="far fa-file fas fa-lg"></i>
                    </div>
                    <div className="iconSelec">
                        <select >
                            <option>Gestión de Operaciones</option>
                        </select>
                    </div>
                </Nav.Link>
                <Nav.Link eventKey="link-2">
                    <div id="icon">
                        <i class="far fa-file fas fa-lg"></i>
                    </div>
                    <div className="iconSelec">
                        <select >
                            <option>Perfiles</option>
                        </select>
                    </div>
                </Nav.Link>
                <Nav.Link className="optionSelect">
                    <div id="icon">
                        R
                    </div>
                    <div id="rol" className="iconSelec">
                        Roles
                    </div>
                </Nav.Link>
                <Nav.Link className="users">
                    <div id="icon">
                        U
                    </div>
                    <div id="rol" className="iconSelec">
                        Usuarios
                    </div>
                </Nav.Link>
                <Nav.Link eventKey="link-2">
                    <div id="icon">
                        <i class="far fa-file fas fa-lg"></i>
                    </div>
                    <div className="iconSelec">
                        <select >
                            <option>Reportes</option>
                        </select>
                    </div>

                </Nav.Link>
            </Nav>
        </div>
    )
}

export default NavUser;