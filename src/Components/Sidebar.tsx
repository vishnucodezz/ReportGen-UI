import { Link } from 'react-router-dom';


function Sidebar() {


  return (
    <section id="logo-sidebar" className=" w-64 h-screen pt-10  bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div className="avatar  ml-5 online placeholder">
    <div className="bg-neutral text-neutral-content rounded-full w-16">
    <span className="text-xl">Vishnu</span>
    </div>
    </div>
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
      <li>
        <Link to="/overview" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="ms-3 mt-10">Overview</span>
        </Link>
      </li>
      <li>
        <Link
          to="/report-templates"
          className="flex items-center  mt-10 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Report Templates</span>
        </Link>
      </li>
      <li>
        <Link to="/logout" className="flex items-center p-2 mt-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
        </Link>
      </li>
    </ul>
      </div>
    </section>
  );
}

export default Sidebar;
