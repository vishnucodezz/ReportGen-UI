import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card"

function Dashboard() {
    return (
        <section id="dashboard" className="min-h-screen flex">
            
            <div className="w-50">
            <Sidebar />
            </div>
 
            <div className ="w-3/4">
            <Card />
            </div>    
        </section>
    );
}

export default Dashboard;
