import React, { useEffect, useState } from "react";
import { AppState } from "../../store/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, createUser, findAllUsers } from "../../store/user/actions";
import CreateOrUpdate from "./CreateOrUpdate";
import View from "./View";
import * as yup from "yup";
import Toast from "../../components/alerts/Toast";
import { IErrors, IUser } from "../../store/user/types";
import { toast } from 'react-toastify';
import { Modal } from "../../components/modal";

const UserList = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [user, setUser] = React.useState();
    interface IState {
        showTable: boolean
    }

    const dispatch = useDispatch();

    const [state, setState] = useState<IState>({
        showTable: true
    })
    const handleOpenCloseUserForm = () => setState({ ...state, showTable: !state.showTable })

    const initialState = {
        username: "",
        email: "",
        role: "",
    };

    // rows
    const { users, createdUser, errors }: { users: any[], createdUser: IUser, errors: IErrors } = useSelector(
        (state: AppState) => state.user
    );

    const handleSubmit = (values: any) => {
        dispatch(createUser(values));
    }

    const handleShowModel = (row: any) => {
        if(row.status === "UNVERIFIED"){
            const status = "PENDING_VERIFICATION";
            const info = {...row, status}
            dispatch(changeStatus(info));
            dispatch(findAllUsers());           
        }
        setUser(row);
        setShowModal(true);
    }

    const handleVerify = () =>{
            const status = "VERIFIED";
            const row:any = user;
            const info = {...row, status}
            dispatch(changeStatus(info));
            dispatch(findAllUsers()); 
            setShowModal(true);
    }

    useEffect(() => {
        dispatch(findAllUsers());
        // eslint-disable-next-line 
    }, [dispatch]);

    useEffect(() => {
        if (createdUser) {
            toast.success("user created successfully");
            dispatch(findAllUsers());
            handleOpenCloseUserForm();
        }
        if (errors) {
            toast.error(errors.message);
        }
        // eslint-disable-next-line 
    }, [createdUser, errors]);

    return (
        <div className="flex py-8 px-12 justify-center">
            <Toast />
            <Modal user={user} showModal={showModal} setShowModal={setShowModal} handleVerify={handleVerify} />
            {
                state.showTable ?
                    <View
                        handleShowModel={handleShowModel}
                        rows={users}
                        handleOpenCloseForm={handleOpenCloseUserForm} /> :
                    <CreateOrUpdate
                        handleSubmit={handleSubmit}
                        handleOpenCloseUserForm={handleOpenCloseUserForm}
                        initialState={initialState}
                        validationSchema={yup.object({
                            username: yup.string().required("username is required"),
                            email: yup.string().trim().required("email is required").email("invalid email"),
                            role: yup.string().required("role is required"),
                        })} />
            }
        </div>
    )
}

export default UserList;