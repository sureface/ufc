import React, {useState} from 'react';
// import {Modal, Button, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation";
import AdminLayout from "../components/adminLayout";
import {updateState} from "../redux/action/menusAction";
import {connect} from "react-redux";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import LiveTime from "../components/liveTime";

const AdminMenus = (props) => {
    // const [openModal, setOpenModal] = useState(false);
    //
    // const toggle = () => setOpenModal(!openModal);

    // const openRmodal = () => {
    //     props.updateState({open: !props.open})
    // }

    return (
        <AdminLayout history={props.history}>
            <div className="conatiner">
                <div className="row justify-content-between">
                    {/*<div></div>*/}
                    {/*<div>*/}
                    {/*    <Button className="btn btn-success" onClick={toggle}>Bos</Button>*/}
                    {/*    <Modal isOpen={openModal} toggle={toggle}>*/}
                    {/*        <ModalBody>*/}
                    {/*            <AvForm>*/}
                    {/*                <AvField*/}
                    {/*                    type='text'*/}
                    {/*                    name="yourName"*/}
                    {/*                    label="Whats your name"*/}
                    {/*                    required*/}
                    {/*                    errorMessage="To'ldirish Majburiy"*/}
                    {/*                />*/}
                    {/*                <AvField*/}
                    {/*                    type="password"*/}
                    {/*                    name="password"*/}
                    {/*                    label="Your password"*/}
                    {/*                    required*/}
                    {/*                    errorMessage="To'ldirish majburiy"*/}
                    {/*                />*/}
                    {/*                <button*/}
                    {/*                    type="submit"*/}
                    {/*                    className="btn btn-success btn-block"*/}
                    {/*                >*/}
                    {/*                    Sign in*/}
                    {/*                </button>*/}
                    {/*            </AvForm>*/}
                    {/*        </ModalBody>*/}
                    {/*        <ModalFooter>*/}
                    {/*            <Button color="secondary" onClick={toggle}>Cancel</Button>*/}
                    {/*        </ModalFooter>*/}
                    {/*    </Modal>*/}
                    {/*</div>*/}
                    <LiveTime />
                    <button type="button" className="btn btn-warning d-block ml-auto"
                            onClick={() => props.updateState({open: !props.open})}>
                        Bos Mani
                    </button>

                    <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
                        <ModalHeader></ModalHeader>
                        <ModalBody>
                            <AvForm>
                                <AvField
                                    type='text'
                                    name="yourName"
                                    label="Whats your name"
                                    required
                                    errorMessage="To'ldirish Majburiy"
                                />
                                <AvField
                                    type="password"
                                    name="password"
                                    label="Your password"
                                    required
                                    errorMessage="To'ldirish majburiy"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-success btn-block"
                                >
                                    Sign in
                                </button>
                            </AvForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.menus.open
    }
}

export default connect(mapStateToProps, {updateState})(AdminMenus);