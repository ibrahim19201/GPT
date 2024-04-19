import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css";
import logo from "../../assets/logo (2).png";

const Menu = () => (
  <>
  
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // Correct usage of useState hook
  
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" /> {/* Added alt attribute */}
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Navbar;





















































































// import{ RiMenu3Line, RiCloseLine} from 'react-icons/ri';
// import "./navbar.css";
// import logo from "../../assets/logo (2).png";
// import { useState } from "react";


//  const Menu = () => (
//   <>
//    <p>
//             <a href="#home">Home</a>
//           </p>
//           <p>
//             <a href="#wgpt3">What is GPT3?</a>
//           </p>
//           <p>
//             <a href="#possibility">Open AI</a>
//           </p>
//           <p>
//             <a href="#features">Case Studies</a>
//           </p>
//           <p>
//             <a href="#blog">Library</a>
//           </p>
  
//   </>
//  )
// const Navbar = () => {
//   const {toggleMenu,setToggleMenu} = useState(false);
//   return (
//     <div className="gpt3__navbar">
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo">
//           <img src={logo} />
//         </div>
//         <div className="gpt3__navbar-links_container">
//        <Menu/>
//         </div>
//       </div>
//       <div className="gpt3__navbar-sign">
//         <p>Sign in</p>
//         <button type="button">Sign up</button>
//       </div>
//       <div className="gpt3__navbar-menu"></div>
//       {toggleMenu 
//       ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
//       : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
//     }
//     {toggleMenu && (
// <div className="gpt3__navbar-menu_container scale-up-center">
//   <div className="gpt3__navbar-menu_container-links">
//     <Menu/>
//   </div>
// </div>


//     )
//     }
//     </div>
//   );
// };

// export default Navbar;
