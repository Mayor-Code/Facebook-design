import "./loginPage.css";
import logo from './facebook.svg'

function LoginPage(){
    return (
        <div className="login--container">
            <div className="facebook">
                <div><img src={logo} alt="logo" className="facebook-img"/></div>
                <h2 className="facebook-text">Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div className="login--section">
                <div className="login--account">
                    <form className="login--form">
                        <div className="form-field">
                            <input type="text" placeholder="Email address or phone number"/>
                        </div>
                            
                        <div className="form-field">
                            <input type="password" placeholder="Password"/>
                            <div className="vision-icons">
                                <div><i class='bx bxs-show'></i></div>
                            </div>
                        </div>
                        <button id="login-btn" className="btn">Log in</button>
                        <div id="forget-pass">
                            <a href="#">Forgetten password?</a>
                        </div>
                    </form>
                    <hr/>
                    <div className="form-div">
                        <button id="create" className="btn">Create new Account</button>
                    </div>
                </div>
                <div className="create-page"><p><a href="#">Create a Page</a> for a celebrity, brand or business.</p></div>
            <div>

            </div>

            </div>

        </div>
    )
}

export default LoginPage