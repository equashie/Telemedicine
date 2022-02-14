import React from "react";
import loginimg from "../../login.svg";

export class Register extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return
        <div className="base-container">
            <div className="header">Sign up</div>
            <div className="content">
                <div className="image">
                    <img src={loginimg} />
                </div>

                <div className="form">
                    
                <div className="form-group">
                        <label htmlFor="firstname"> First name</label>
                        <input type="text" name="firstname" placeholder="firstname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastname"> Last name</label>
                        <input type="text" name="lastname" placeholder="lastname" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="username"> Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email</label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button"className="btn">
                    Sign un
                </button>
            </div>
        </div>
    }
}
