
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Main = () => {
//     const {loading}=useContext(AuthContext)

//     if (loading) {
//         return (
//           <div className="flex justify-center">
//             <progress className="progress w-56"></progress>
//           </div>
//         );
//       }


//     return (
//         <div>
//             <NavBar></NavBar>
//             <div className="min-h-[calc(100vh-447px)]">
//                 <Outlet></Outlet>
//             </div>
            
//             <Footer></Footer>
//         </div>
//     );
// };


const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-8">
           <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-447px)]">
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Main;