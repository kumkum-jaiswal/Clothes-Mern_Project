import {Link, Outlet} from "react-router-dom";

const AdminDashboard=()=>{
    return(
        <>            
            <div id="adminHeader">
            <h1 style={{color:"black",textAlign:"center"}}>Welcome To Admin Dashboard</h1>
            </div>
            <div id="adminData">
              <div id="adminMenu">


               <Link to="insertpro" className="menucolor"> Insert Product </Link>
              


                
                
              </div>
              <div id="adminContent">
                
                   <Outlet/>
                
                 </div>
            </div>
        </>
    )
}

export default AdminDashboard;