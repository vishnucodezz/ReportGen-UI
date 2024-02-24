import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertCard from "./alertCard";


function Login() {
    const [loginLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [showError, setShowError] = useState<boolean>(true);

    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const inputHandler = (value: string, name: string) => {
        setLogin((prev) => ({ ...prev, [name]: value }));
    };

    const clearForm = () => {
        setLogin({
            password: "",
            username: "",
        });
    };

    const closeError = () => {
        setError(null);
        setShowError(true);
    };

    const authLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (login.username === "testing" && login.password === "testing_") {
            setLoading(false);
            clearForm();
            navigate("/dashboard");
        } else {
            setError("Invalid username or password");
            setLoading(false);
        }
    };

    return (
        <section
        id="loginform"
        className="flex justify-center items-center h-screen relative"
    >
        {showError && error !== null && (
            <AlertCard error={error} closeError={closeError} />
        )}
        <form
            id="loginCard"
            className="flex flex-col items-center h-full w-full space-y-4 rounded-md shadow-lg p-8 "
            onSubmit={authLogin}
        >
            <div className="text-center mb-4 mt-11">
                <h1 className="text-5xl py-3.5 italic font-bold text-green-500">
                    ReportGen
                </h1>
                <p className="text-sm text-gray-500 italic font-bold">Generate Your Reports</p>
            </div>
            <div className="space-y-5 w-full max-w-xs">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text italic text-green-500 ">Username</span>
                    </label>
                    <input
                        className="input input-bordered input-accent w-full"
                        value={login.username}
                        onChange={(e) => inputHandler(e.currentTarget.value, "username")}
                        placeholder="Type here"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text italic  text-green-500">Password</span>
                    </label>
                    <input
                        value={login.password}
                        onChange={(e) => inputHandler(e.currentTarget.value, "password")}
                        className="input input-bordered input-accent w-full"
                        type="password"
                        placeholder="Type here"
                    />
                </div>
                <div className="form-control flex justify-center mt-8 items-center">
                    <button
                        disabled={loginLoading}
                        type="submit"
                        className="  btn btn-outline italic btn-accent btn-sm w-4/6 mt-8"
                    >
                        {loginLoading ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 animate-bounce"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 a 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            "Login"
                        )}
                    </button>
                </div>
            </div>
        </form>
    </section>
    );
}

export default Login;
