import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AppState } from "../../store/configureStore";
import { IErrors } from "../../store/user/types";
import { GoVerified, GoUnverified } from "react-icons/go";
import { MdPending } from "react-icons/md";

const TopBar = () => {
    const location = useLocation();
    const currentPage = location.pathname.split("/")[1];
    const { user, errors }: { user: any, errors: IErrors } = useSelector(
        (state: AppState) => state?.user
    );
    return (
        <div className="bg-white text-gray-500  w-full py-4 px-12 flex items-center justify-between border-b-1 border-b-gray-200">
            <h2 className="capitalize text-lg font-bold grid grid-cols-4 gap-2">
                <span>
                    {user?.username && currentPage === "profile" ? user?.username : currentPage}
                </span>
                <span>
                    {user?.status === "VERIFIED" ?
                        <GoVerified title="VERIFIED" size={20} className="text-blue-600 font-bold" /> :
                        user?.status === "PENDING_VERIFICATION" ?
                            <MdPending title="PENDING VERIFICATION" size={20} className="text-yellow-600 font-bold" /> :
                            <GoUnverified title="UNVERIFIED" size={20} className="text-gray-600 font-bold" />}
                </span>
            </h2>
            <div className="space-x-5 flex">
                <button className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                    <i className="fas fa-bell text-gray-500 w-5 h-5"></i>
                </button>
                <Link to={"/profile"} className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
                    <i className="fas fa-user text-gray-500 w-5 h-5"></i>
                </Link>
            </div>
        </div>
    )
}
export default TopBar;