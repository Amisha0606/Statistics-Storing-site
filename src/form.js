import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import Image from "./image 1.png";
import logo1 from "./systaldynLogo.png";
import logo2 from "./Logo 2.png";

import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

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

  return (
    <>
      {/* <GlobalStyle /> */}
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <div className="top-bar">
                  <img src={logo1}></img>
                  <img src={logo2}></img>
                </div>
                <h1 className="modal-title">Enroll For Access</h1>
                <form onSubmit={handleSubmit}>
                  {/* NAME */}
                  <div className="division">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="form--input half"
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="form--input half"
                    />
                  </div>
                  {/* EMAIL */}
                  <input
                    type="email"
                    placeholder="Email*"
                    className="form--input"
                  />
                  <div className="division-2-ipfields">
                    {/* PHONE NUMBER */}
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      className="form--input half"
                      onChange={handleChange}
                    />
                    {/* LOCATION  */}
                    <div>
                      <select name="location" className="form--input half">
                        <option selected value="Location">
                          Location*
                        </option>
                          <option value="option 1">Option 1</option> {" "}
                        <option value="option 2">Option 2</option>
                      </select>
                    </div>
                  </div>
                  {/* SELECT A CUSTOMER */}
                  <div>
                    <select
                      name="location"
                      id="location"
                      className="form--input"
                    >
                      <option selected value="Location">
                        Select a Customer*
                      </option>
                        <option value="option 1">Option 1</option> {" "}
                      <option value="option 2">Option 2</option>
                    </select>
                  </div>
                  {/* REASON FOR REQUESTING ACCESS TO MEERKAT */}
                  <div>
                    <textarea
                      placeholder="Reason for requesting access to MEERKAT"
                      rows={5}
                      className="form--input"
                      id="textArea"
                    />
                    <div className="alert">‘*’ signifies a required field</div>
                  </div>
                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Submit Request
                    </button>
                  </div>
                </form>
                <footer>
                  <div className="footer">
                    <Link to="/">Forgot Password?</Link>
                    <Link to="/">Secure Login</Link>
                  </div>
                </footer>
              </div>
              <div className="modal-right">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <Link to="/main">
          <Button variant="contained">
            Enter without Login
            <KeyboardDoubleArrowRightIcon
              sx={{ color: grey[50], fontSize: 20 }}
            />
          </Button>
          </Link>
          </div>
      </Wrapper>
    </>
  );
};

// Its CSS is in app.css
const Wrapper = styled.section`
.App {
  display: flex;
  align-self: flex-start;
  text-align: center;
}
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 80vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    color: #3F5253;
  }
 
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }

   `;


export default Registration;
