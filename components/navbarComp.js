function navbar() {
  return `
    <div id="header">
    <nav id="nav">
      <div>
      <a href="./index.html">
      <img
          id="headingimg"
          src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
        /></a>
        
      </div>
      <div id="navsearch" style="display: none">
        <input
          id="newinput"
          type="text"
          value=""
          placeholder="Search for itineraise, destination, hotels or activities"
          value="hii"
        />
        <a href="#">
          <i class="fas fa-search"></i>
        </a>
      </div>
      <div id="link">
       
        <span class="tooltip">
        <a href="#"><p>Inspiration <i class="fa-solid fa-caret-down"></i></p></a>
            <div class="tooltip-popup">
            <a href="./visit_dubai.html"><p>Visit Dubai</p></a>
            <a href="./Beaches/beaches.html"> <p>Beaches</p></a>
            <a href="./packages.html"> <p>Packages</p></a>
            <a href="./MindfulRetreats.html"><p>Mindful Rest</p></a>
            <a href="./tripotoFamily.html"><p>Family</p></a>
            <a href="./explore.html"><p>Explore More</p></a>
            </div>
          </span>
          <a href="#"><p>Forum &nbsp;&nbsp;</p></a>
        <a href="#"><p>Holidays &nbsp;&nbsp;</p></a>
        <span class="tooltip">
            <p>Publish Trip <i class="fa-solid fa-caret-down"></i></p>
            <div class="tooltip-popup">
              <p>Create New</p>
            </div>
          </span>
        <a href="#"  id="remove">Sign in</a>
      </div>
    </nav>
    <div id="login">
      <div id="close" >
        <img src="https://logodix.com/logo/1077363.png" />
      </div>
      <div id="facebook">
        <div id="fbimage">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png"
          />
        </div>
        <div id="text">Log in with Facebook</div>
      </div>
      <div id="google">
        <div id="fbimage">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png"
          />
        </div>
        <div id="text">Log in with Google</div>
      </div>
      <p style="text-align: center">OR</p>
      <input type="text" id="email" placeholder="EMAIL" />
      <input type="password" id="password" placeholder="PASSWORD" />
      <div id="remember">
        <input style="margin-top: 5px" type="checkbox" />
        <label>Remember me</label>
        <a href="#" style="color: blue; float: right; margin-top: 5px"
          >Forgot Password</a
        >
      </div>
      <input
        style="color: white; font-weight: bolder"
        type="button"
        value="LOG IN"
        id="button"
      />
      <div id="signup">
        <p style="text-align: center">
          Don't have an account?
          <a href="#" style="color: blue" id="loginsignup" >Sign Up</a>
        </p>
      </div>
    </div>
    <h1 id="global">The Global Community of Travellers</h1>
    <div id="search">
      <input
        id="input"
        type="text"
        placeholder="Search for itineraise, destination, hotels or activities"
      />
      <a href="#">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <div
      id="parents"
      style="margin-top: 5px; position: absolute; top: 250px; left: 340px"
    ></div>
  </div>
  <div id="signin">
    <div id="close" >
      <img src="https://logodix.com/logo/1077363.png" />
    </div>
    <div id="facebook">
      <div id="fbimage">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png"
        />
      </div>
      <div id="text">Log in with Facebook</div>
    </div>
    <div id="google">
      <div id="fbimage">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/google-152-189813.png"
        />
      </div>
      <div id="text">Log in with Google</div>
    </div>
    <p style="text-align: center">OR</p>
    <input type="text" id="name" placeholder="NAME" />
    <input type="text" id="email1" placeholder="EMAIL" />
    <input type="password" id="password1" placeholder="PASSWORD" />
    <select id="options">
      <option value="">Account Type</option>
      <option value="Personal">Personal</option>
      <option value="Business">Business</option>
      <option value="Blogger">Blogger</option>
      <option value="Indipent Guide">Indipent Guide</option>
    </select>
    <input style="margin-top: 10px; margin-left: 20px" type="checkbox" />
    <label>Subscribe to the newsletter</label>
    <div id="robot">
      <div id="checkbox" ></div>
      <label style="margin-left: 10px; line-height: 50px"
        >I'm not a robot</label
      >
      <div id="captcha">
        <img style="width: 100%; height: 100%" src="captcha.PNG" />
      </div>
    </div>
    <input
      style="color: white; font-weight: bolder"
      type="button"
      value="SIGN UP"
      id="button1"
    />
    <p style="text-align: center">
      <span style="color: blue; cursor: pointer"
        >By signing up, you agree to Tripoto's</span
      >terms and conditions and privacy policy.
    </p>
    <p style="text-align: center">
      Already registered?
      <span>
        <a style="color: blue" href="#" id="loginAgain" >Log in</a>
      </span>
    </p>
  </div>
    `;
}

export { navbar };
