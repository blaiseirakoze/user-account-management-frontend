import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../store/user/actions";
import { useState } from "react";

const Signup = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<any>({
        firstName: "",
        lastName: "",
        email: "",
        username:"",
        password: "",
        role: "CUSTOMER",
        gender: "",
        maritalStatus: ""
    });
    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const handleSignup = (event: any) => {
        event.preventDefault();
        dispatch(signup(state));
        window.location.href = "/login";
    }

    return (
        <div style={{ height: "100vh", background: "#F3F4F6", overflow: "scroll" }} className="flexitems-center">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
                <div className="rounded border bg-white  lg:w-2/6 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-6 mx-4">
                        <a href="/" className="mt-10 text-center text-x font-bold leading-9 tracking-tight text-gray-500">
                            DEMO
                        </a>
                        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-sky-900">
                            Signup
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mb-6 mx-4">
                        <form className="space-y-6" >
                            <div>
                                <label htmlFor="firstName" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(event: any) => handleChange(event)}
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
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
                                        onChange={(event: any) => handleChange(event)}
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="lastName"
                                        required
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
                                        onChange={(event: any) => handleChange(event)}
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        required
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
                                    <select onChange={(event: any) => handleChange(event)}
                                        id="maritalStatus"
                                        name="maritalStatus"
                                        autoComplete="maritalStatus"
                                        required
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
                                <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(event: any) => handleChange(event)}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                    username
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(event: any) => handleChange(event)}
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        onChange={(event: any) => handleChange(event)}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    onClick={handleSignup}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900">
                                    Sign in
                                </button>
                            </div>
                        </form>


                        {/* <BasicForm
                            onSubmit={() => console.log()}
                            onCancel={() => console.log()}
                            validationSchema={""}
                            initialValues={""}
                            title={""} >
                            <div>
                                <label htmlFor="firstName" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="firstName"
                                        required
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
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="lastName"
                                        required
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
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </BasicForm> */}
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Have an account?{' '}
                            <Link to="/login" className="font-semibold leading-6 text-cyan-500 hover:text-cyan-400">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Signup;
