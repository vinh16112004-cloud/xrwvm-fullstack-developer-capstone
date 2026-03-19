// Tìm đến phần return trong file Register.jsx và đảm bảo có cấu trúc:
<div class="register_container" style={{width: "50%", margin: "auto"}}>
    <div class="header" style={{display: "flex",flexDirection: "row", justifyContent: "space-between"}}>
        <span class="text" style={{flexGrow: "1"}}>SignUp</span> 
    </div>
    <hr/>
    <form onSubmit={register}>
        <div class="inputs">
            <div class="input">
              <input type="text" name="username" placeholder="Username" className="input_field" onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div class="input">
              <input type="text" name="first_name" placeholder="First Name" className="input_field" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div class="input">
              <input type="text" name="last_name" placeholder="Last Name" className="input_field" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div class="input">
              <input type="email" name="email" placeholder="Email" className="input_field" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="input">
              <input type="password" name="password" placeholder="Password" className="input_field" onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </div>
        <div class="submit_container">
            <button type="submit" class="status">Register</button>
        </div>
    </form>
</div>
