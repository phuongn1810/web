import { Link } from "react-router-dom";
export default function Profile() {
  return (







    <div id="wd-profile-screen">
     
     <h1>Profile</h1>
     <input id="wd-username"
            value="alice"
            className="form-control mb-2"/><br />
     <input id="wd-password"
            value="123" 
            className="form-control mb-2"/><br />

<input id="wd-firstname"
            value="ALICE" 
            className="form-control mb-2"/><br />
<input id="wd-lastname"
            value="Wonderland" 
            className="form-control mb-2"/><br />


<input id="wd-dob"
            value="" type="date"
            className="form-control mb-2"/><br />

<input id="wd-role"
            value="User" type=""
            className="form-control mb-2"/><br />

            
     <Link id="wd-profile-btn"
           to="/Kanbas/Account/Signin"
           className="btn btn-danger w-100">
           Profile </Link><br />



     










     
    </div>
);}
