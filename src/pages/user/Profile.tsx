import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser, findAllUsers, update } from "../../store/user/actions";
import { AppState } from "../../store/configureStore";
import { IUser, IErrors } from "../../store/user/types";

const Profile = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<any>({
        id:"",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "CUSTOMER",
        gender: "",
        maritalStatus: "",
        nationality: "",
        dateOfBirth: "",
        identificationNumber: "",
        username: ""

    });
    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const handleUpdate = (event: any) => {
        event.preventDefault();
        dispatch(update(state));
        dispatch(fetchUser(user?.username));
    }

    const { user, errors }: { user: any, errors: IErrors } = useSelector(
        (state: AppState) => state?.user
    );

    useEffect(() => {
        const username = localStorage.getItem("username");
        dispatch(fetchUser(username));
        // eslint-disable-next-line 
    }, [dispatch]);

    useEffect(() => {
        setState({
            ...state, 
            id: user?.id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            role: user?.role,
            gender: user?.gender,
            maritalStatus: user?.maritalStatus,
            nationality: user?.nationality,
            dateOfBirth: user?.dateOfBirth,
            identificationNumber: user?.identification,
            username: user?.username
        })
        // eslint-disable-next-line 
    }, [user]);

    return <div style={{ height: "80vh", background: "#F3F4F6", overflow: "scroll" }} className="flexitems-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
            <div className="rounded border bg-white  lg:w-2/6 ">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mb-6 mx-4">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-6/12 sm:w-4/12 px-4">
                            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                        </div>
                    </div>
                    <form className=" grid grid-cols-2 gap-4" >
                        <div>
                            <label htmlFor="firstName" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={state?.firstName}
                                    onChange={(event: any) => handleChange(event)}
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={state?.lastName}
                                    onChange={(event: any) => handleChange(event)}
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="lastName"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Gender
                            </label>
                            <div className="mt-2">
                                <select
                                    value={state?.gender}
                                    onChange={(event: any) => handleChange(event)}
                                    id="gender"
                                    name="gender"
                                    autoComplete="gender"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
                                    <option selected disabled>select</option>
                                    <option value={"MALE"}>male</option>
                                    <option value={"FEMALE"}>female</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="maritalStatus" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Marital Status
                            </label>
                            <div className="mt-2">
                                <select
                                    value={state?.maritalStatus}
                                    onChange={(event: any) => handleChange(event)}
                                    id="maritalStatus"
                                    name="maritalStatus"
                                    autoComplete="maritalStatus"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" >
                                    <option selected disabled>select</option>
                                    <option value={"SINGLE"}>single</option>
                                    <option value={"MARRIED"}>married</option>
                                    <option value={"DIVORCED"}>divorced</option>
                                    <option value={"WIDOWED"}>widow</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Date of Birth
                            </label>
                            <div className="mt-2">
                                <input
                                    value={state?.maritalStatus}
                                    onChange={(event: any) => handleChange(event)}
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    value={state.email}
                                    onChange={(event: any) => handleChange(event)}
                                    disabled
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    value={state.username}
                                    onChange={(event: any) => handleChange(event)}
                                    disabled
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="nationality" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Nationality
                            </label>
                            <div className="mt-2">
                                <input
                                    value={state.nationality}
                                    onChange={(event: any) => handleChange(event)}
                                    id="nationality"
                                    name="nationality"
                                    type="text"
                                    autoComplete="nationality"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="identificationNumber" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Identification Number (NID or Passport)
                            </label>
                            <div className="mt-2">
                                <input
                                    max={16}
                                    min={16}
                                    value={state.identification}
                                    onChange={(event: any) => handleChange(event)}
                                    id="identificationNumber"
                                    name="identificationNumber"
                                    type="text"
                                    autoComplete="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="identificationDocument" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                Identification Document
                            </label>
                            <div className="mt-2">
                                <input
                                    max={16}
                                    min={16}
                                    value={state.identification}
                                    onChange={(event: any) => handleChange(event)}
                                    id="identificationDocument"
                                    name="identificationDocument"
                                    type="file"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={handleUpdate}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900">
                                Update
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
}
export default Profile;