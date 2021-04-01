import React, { useState } from 'react';
import dataTaable from '../data/dataTaable.json';
import { Table, Form, Col } from 'react-bootstrap';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import '../styles/TableUser.css';


const TableUser = () => {
    const [data, setData] = useState(dataTaable);
    const [modal, setModal] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [search, setSearch] = useState("");
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        identification: "",
        role: "",
        password: "",
        state: "",
        phone: "",
        email: "",
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }

    function openModal() {
        setModal(true)
    }

    function openModalEdit(registro) {
        setModalEdit(true)
        setForm(registro)
    }

    function closeModal() {
        setModal(false)
    }

    function closeModalEdit() {
        setModalEdit(false)
    }

    function addUser() {
        let valornuevo = form
        let list = data;
        list.push(valornuevo);
        setForm(list);
        setModal(false)
    }

    function editUser(dato) {
        let accountant = 0;
        let list = data;
        list.map((registro) => {
            if (dato.id == registro.id) {
                list[accountant].name = dato.name;
                list[accountant].lastName = dato.lastName;
                list[accountant].identification = dato.identification;
                list[accountant].role = dato.role;
                list[accountant].state = dato.state;
                list[accountant].phone = dato.phone;
                list[accountant].email = dato.email;
            }
            accountant++;
        });

        setForm(list)
        setModalEdit(false)
    }

    function deleteUser(dato) {
        let option = window.confirm(`you really want to delete the user ${dato.name}`)
        if (option) {
            let accountant = 0;
            let list = data;
            list.map((record) => {
                if (record.id == dato.id) {
                    list.splice(accountant, 1);
                }
                accountant++;
            });
            setForm(list)
        }
    }


    return (
        <div >
            <div id="iconUser">
                <i class="fas fa-bars"></i>
            </div>
            <div className="iconSelec">
                <h5 className="users">Prueba Frontend</h5>
            </div>
            <div className="boxTable">
                <div id="iconUser">
                    <i class="fas fa-users"></i>
                </div>
                <div className="iconSelec">
                    <h5 className="users">Usuarios existentes</h5>
                </div>
                <button className="buttonCreate" onClick={() => openModal()}>crear</button>
                <div className="tableUser">
                    <Table id="table" responsive >
                        <thead>
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Identificacion(C.C)</th>
                                <th>Rol Asociado</th>
                                <th>Estado</th>
                                <th>Telefono</th>
                                <th>Correo electronico</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter((val) => {
                                if (search == "") {
                                    return val
                                } else if (val.name.toLocaleLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.lastName.toLocaleLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.identification.toLocaleLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.role.toLocaleLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.state.toLocaleLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.phone.toLocaleLowerCase().includes(search.toLowerCase())) {
                                    return val
                                } else if (val.email.toLocaleLowerCase().includes(search.toLowerCase())) {
                                    return val
                                }
                            }).map((user) => (
                                <tr id="trUser" key={user.id}>
                                    <td >{user.name}</td>
                                    <td >{user.lastName}</td>
                                    <td >{user.identification}</td>
                                    <td >{user.role}</td>
                                    <td >{user.state}</td>
                                    <td >{user.phone}</td>
                                    <td >{user.email}</td>
                                    <td ><button className="buttonEdit" onClick={() => openModalEdit(user)}>
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                        <button className="buttonEdit" onClick={() => deleteUser(user)}>
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <Modal id="modal" isOpen={modal}>
                    <ModalHeader>
                        <div>
                            <h3>Agregar nuevo usuario</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                        placeholder="Names"
                                        name="name"
                                        onChange={handleChange}
                                        value={form.name} /><br />
                                    <Form.Control
                                        placeholder="Identification(C.C)"
                                        name="identification"
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="State"
                                        name="state"
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={handleChange} /><br />
                                </Col>
                                <Col>
                                    <Form.Control
                                        placeholder="Last names"
                                        name="lastName"
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="Role Associated"
                                        name="role"
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChange} /><br />
                                </Col>
                            </Form.Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <button
                            className="acep"
                            onClick={() => addUser()} >Aceptar</button>
                        <button
                            className="cancel"
                            onClick={() => closeModal()} >Cancelar</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalEdit}>
                    <ModalHeader>
                        <div>
                            <h3>Editar usuario</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                        placeholder="Names"
                                        name="name"
                                        onChange={handleChange}
                                        value={form.name} /><br />
                                    <Form.Control
                                        placeholder="Identification(C.C)"
                                        name="identification"
                                        value={form.identification}
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="State" name="state"
                                        value={form.state}
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="Phone"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange} /><br />
                                </Col>
                                <Col>
                                    <Form.Control
                                        placeholder="Last names"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="Role Associated"
                                        name="role"
                                        value={form.role}
                                        onChange={handleChange} /><br />
                                    <Form.Control
                                        placeholder="Email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange} /><br />
                                </Col>
                            </Form.Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <button
                            className="acep"
                            onClick={() => editUser(form)} >Editar usuario</button>
                        <button
                            className="cancel"
                            onClick={() => closeModalEdit()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="boxSearch">
                <div id="iconUser">
                    <i class="fas fa-user"></i>
                </div>
                <div className="iconSelec">
                    <h5 className="users">Filtrar búsqueda</h5>
                </div>
                <Form id="formSearch">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control
                        name="seacrchName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                        name="seacrchLastName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <Form.Label>Identificación(C.C)</Form.Label>
                    <Form.Control
                        name="seacrchLastName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <Form.Label>Rol asociado</Form.Label>
                    <Form.Control
                        name="seacrchLastName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        name="seacrchLastName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="seacrchLastName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                        name="seacrchLastName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                        name="seacrchLastName"
                        onChange={(event) => { setSearch(event.target.value) }} /><br />
                    <button
                        className="acep"  >Filtrar</button> {" "}
                    <button
                        className="cancel" >Limpiar</button>
                </Form>
            </div>
        </div>
    )
}

export default TableUser;