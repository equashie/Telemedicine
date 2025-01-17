import React from "react";
import loginimg from "../../login.svg";

export class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return
        <div className="base-contaier">
            <div className="header">Sign in</div>
            <div className="content">
                <div className="image">
                    <img src={loginimg} />
                </div>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username"> Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button"className="btn">
                    Sign in
                </button>
            </div>
        </div>
    }
}

