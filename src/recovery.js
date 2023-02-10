
import React from "react";
import styled from "styled-components";
// import { GlobalStyle } from "./Styles/globalStyles";
import { useFormik } from "formik";
import Image from "./image 1.png";
import Logo2 from "./Logo 2.png";
import Logo1 from "./systaldynLogo.png";
import Eye from "./eye-slash-fill.png";
// import { signUpSchema } from "./schemas";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber:"",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      // validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>
      {/* <GlobalStyle /> */}
      <Wrapper> 
        {/* <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Secure Login</h1> */}
      
   
      <div class="rectangle4">
    
    <div class="compression-services-inc">COMPRESSION SERVICES INC.</div>
<div class="rectangle1">
<img src={Logo2} width='50px' height='46px'></img>

</div>
    <div class="secure-login">Forget Password</div>
   
    <form onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div class='group4'>
                  <div class='rectangle-username'>
                  <div className="input-block">
                    {/* <label htmlFor="Username" className="input-label">
                      Username
                    </label> */}
                    <input
                      type="username"
                      autoComplete="off"
                      firstName="firstName"
                      id="firstName"
                      class='username'
                      placeholder="Username*"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    </div></div>
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  {/* Last Name */}
                  <div class='group3'>
                  <div class='rectangle6'>
                  <div className="input-block">
                    {/* <label htmlFor="Password" className="input-label">
                      Password
                    </label> */}
                    <input
                      type="email"
                      autoComplete="off"
                      lastName="lastName"
                      id="lastName"
                      class='password'
                      placeholder="Recovery E-mail*"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /></div></div>
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                    <div class="eye-slash-fill"> <img src={Eye} width='25px' height='26px'></img></div>
                  </div>  
                  
                  <div class='group5'>
                  <div class='rectangle5'>
                  <div className="modal-buttons">
                    <button className="input-button" type="submit" class='login'>
                      Submit Request
                    </button>
                  </div></div></div>
                </form>
    <div class="group7">
        <div class="forget-password">Secure Login</div>
        <div class="enroll-for-access">Enroll for Access</div>
    </div>
    <div class="group6">
        <div class="remember-me">'*' signifies a required field</div>
    </div>
    <div class="group2">
    <img src={Logo1} width='110px' height='46px'></img>
       
    </div>
</div>

<div class="rectangle91">
<img
                  src={Image}
                  alt=""
                />
    <div class="group10">
        <div class="meerkat">MEERKAT</div>
        <div class="machine-event-exploration">Machine Event Exploration for Real-Time Kpi Analytics and Trends</div>
        <div class="subtract"></div>
    </div>
</div>
                
                
              {/* </div>
              <div className="modal-right">
                <img
                  src={Image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div> */}
       </Wrapper> 
    </>
  );
};

const Wrapper = styled.section`
.rectangle4{
    position: absolute;
  width: 864px;
  height: 1080px;
  left: 0px;
  top: 0px;
  
  background: #FFFFFF;
  }
  .systaldyn{
    position: absolute;
  width: 137px;
  height: 4px;
  left: 30px;
  top: -5px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 200;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height */
  
  
  color: #0762AB;
  
  }
  
  .rectangle91{
    position: absolute;
  width: 1056px;
  height: 1080px;
  left: 864px;
  top: 0px;
  
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }
  .group10{
    position: absolute;
  width: 706px;
  height: 97.24px;
  left: 1039px;
  top: 933px;
  
  }
  .meerkat{
    position: absolute;
    width: 298px;
    height: 67px;
    left: 1158px;
    top: 938px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 104.5%;
    /* identical to box height, or 67px */
    
    
    color: #FFFFFF;
    
  
  }
  .machine-event-exploration{
    position: absolute;
  width: 587px;
  height: 25px;
  left: 1158px;
  top: 1005px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  
  color: #FFFFFF;
  }
  .subtract{
    position: absolute;
  width: 97.29px;
  height: 97.24px;
  left: 1039px;
  top: 933px;
  
  background: #FFFFFF;
  }
  .compression-services-inc{
    position: absolute;
  width: 145px;
  height: 56px;
  left: 678.55px;
  top: 57px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 50;
  font-size: 18.4116px;
  line-height: 104.5%;
  /* or 28px */
  
  
  color: #3E3E3E;
  }
  .rectangle1{
    position: absolute;
  width: 69.67px;
  height: 79.62px;
  left: 624.77px;
  top: 50.19px;
  
  
  }
  .secure-login{
    position: absolute;
  width: 570px;
  height: 75px;
  left: 75px;
  top: 272px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 75px;
  /* identical to box height */
  
  
  color: #3F5253;
  }
  
  .username{
    position: absolute;
  width: 147px;
  height: 41px;
  left: 45px;
  top: 15px;
  border:none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 41px;
  /* identical to box height */
  border: 2px solid #222222;
  border-radius: 50px;
  width: 584px;
  height: 70px;
  color: #616161;
  left: 75px;
  top: 390px;
  padding-left:40px;
  }
  .group3{
    position: absolute;
  width: 654px;
  height: 79px;
  left: 105px;
  top: 531px;
  
  }
  .eye-slash-fill{
    position: absolute;
  width: 30px;
  height: 30px;
  left: 539px;
  top: 0px;
  }
  
  
  .password{
    position: absolute;
  width: 139px;
  height: 41px;
  left: 45px;
  top: 15px;
  border:none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 41px;
  /* identical to box height */
  width: 584px;
  height: 70px;
  left: -30px;
  top: -30px;
  padding-left:40px;
  border: 2px solid #222222;
  border-radius: 50px;
  
  color: #616161;
  }
  .remember-me{
    position: absolute;
  width: 208px;
  height: 25px;
  left: 522px;
  top: 598px;
  }
  .group5{
    position: absolute;
  width: 634px;
  height: 79px;
  left: 45px;
  top: 0px;
  }
  
  .login{
    position: absolute;
  width: 80px;
  height: 41px;
  left: 250px;
  top: 14px;
  border:none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 41px;
  /* identical to box height */
  box-sizing: border-box;
  
  position: absolute;
  width: 634px;
  height: 79px;
  left: 30px;
  top: 650px;
  
  border: 2px solid #ffffff;
  border-radius: 50px;
  color:#EBD6CD;
  background-color: #D9746F;
  
  }
  .group7{
    position: absolute;
  width: 654px;
  height: 25px;
  left: 45px;
  top: 105px;
  
  }
  .forget-password{
    position: absolute;
  width: 161px;
  height: 25px;
  left: 45px;
  top: 805px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  
  color: #222222;
  
  }
  .enroll-for-access{
    position: absolute;
  width: 189px;
  height: 25px;
  left: 520px;
  top: 805px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: right;
  
  color: #222222;
  }
  .group2{
    position: absolute;
  width: 201px;
  height: 58.5px;
  left: 50px;
  top: 50px;
  }
  .systems-analysis-dynamic{
    position: absolute;
  width: 136px;
  height: 13px;
  left: 32px;
  top: 40.8px;
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 11.3333px;
  line-height: 13px;
  
  color: #000000;
  }
  .group1{
    position: absolute;
  width: 70px;
  height: 54.91px;
  left: 50px;
  top: 53.59px;
  }
   `;

export default Registration;


          
// import React from 'react';

// export default function Form() {
//     return(
//     <form>
//       <label>First Name
//         <input type="text" />
//       </label>
//       <label>Last Name
//         <input type="text" />
//       </label>
//       <label>Email
//         <input type="Email" />
//       </label>
//       <label>Phone Number
//         <input type="Number" />
//       </label>
//     </form>
//   )
// }

