
import Login from "../Components/Login";
import loginImg from "../assets/loginside.png";

export default function Home() {
    return (
        <section className="flex h-screen overflow-y-hidden   dark:bg-gray-800">
            <div id="loginImg">
                <img src={loginImg} alt="login img" />
            </div>
            <div className="flex-1">
                <Login />
            </div>
        </section>
    );
}
