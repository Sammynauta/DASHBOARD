import { AlternateEmail, CalendarToday, LocationOn, PersonOutline, Phone } from "@material-ui/icons";
import "./User.css";

export default function User() {
    return (
        <div className='User'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='userShowImg'/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Miller</span>
                            <span className="userShowDetails">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBotton">
                        <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                            <PersonOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">annamiller10</span>
                       </div>
                       <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">11.08.1998</span>
                       </div>
                       <span className="userShowTitle">Contact Details</span>
                       <div className="userShowInfo">
                            <AlternateEmail className='userShowIcon' />
                            <span className="userShowInfoTitle">annamiller@email.com</span>
                       </div>
                       <div className="userShowInfo">
                            <Phone className='userShowIcon' />
                            <span className="userShowInfoTitle">+55 21 123 456 789</span>
                       </div>
                       <div className="userShowInfo">
                            <LocationOn className='userShowIcon' />
                            <span className="userShowInfoTitle">Rio de Janeiro | BRA</span>
                       </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="userUpdateInput" placeholder="annamiller10" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" className="userUpdateInput" placeholder="Anna Miller" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" className="userUpdateInput" placeholder="annamiller@email.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" className="userUpdateInput" placeholder="+55 21 123 456 789" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className="userUpdateInput" placeholder="Rio de Janeiro | BRA" />
                            </div>
                        </div>
                        <div className="userUpdateRight">

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
