import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin, signup } from "../../store/user/actions";

const Login = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState<any>({
        username: "",
        password: "",
    });
    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const handleSignin = (event: any) => {
        event.preventDefault();
        dispatch(signin(state));
    }

    return (
        <div style={{ height: "100vh", background: "#F3F4F6" }} className="flexitems-center">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
                <div className="rounded border bg-white  lg:w-2/6 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-6 mx-4">
                        <a href="/" className="mt-10 text-center text-x font-bold leading-9 tracking-tight text-gray-500">
                            DEMO
                        </a>
                        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-sky-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mb-6 mx-4">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={(event: any) => handleChange(event)}
                                        id="usernam"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
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
                                    <div className="text-sm">
                                        <Link to="#" className="font-semibold text-cyan-500 hover:text-cyan-400">
                                            Forgot password?
                                        </Link>
                                    </div>
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
                                    onClick={handleSignin}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900">
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to="/signup" className="font-semibold leading-6 text-cyan-500 hover:text-cyan-400">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login;
