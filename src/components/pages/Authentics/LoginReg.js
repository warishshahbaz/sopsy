import React, { useState } from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import Pic1 from "../../../image/pic1.png";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'
import "../../../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik'
import * as Yup from 'yup';


// getting data from sessionStorage
const getDataFromSession = () => {
  let list = sessionStorage.getItem("regData");
  if (list) {
    return JSON.parse(sessionStorage.getItem("regData"));
  } else {
    return [];
  }
};

function LoginReg({setLogout}) {
  const[toastytoggle,settoastyToggle] = useState(false);

  // ******** registration ***********
  const [data, setData] = useState(getDataFromSession());
  const formik = useFormik({
    initialValues: {
      reg_name:"",
      reg_username: "",
      reg_email: "",
      reg_password: "",
      reg_cpassword: ''
    },
    validationSchema: Yup.object({
      reg_username: Yup.string()
        .required('*required')
        .min(3, ' char length shoude be less then 15'),

        reg_email: Yup.string()
        .email('invalid Email')
        .required('*required'),
        reg_name: Yup.string()
        .required('*required'),
        reg_password: Yup.string()
        .required()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
        reg_cpassword: Yup.string().when('reg_password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('reg_password')]) : field
      ),

    }),
    onSubmit: (values) => {
      setData((preVal)=>{
        return [...preVal,values]
      });
      sessionStorage.setItem("regData", JSON.stringify(data));
      console.log("form submit", values);
      formik.values = ""
    }
    

  });
  console.log(formik.errors);

  // ********* Go to social media **************
  const GoTwitHandle = () => {
    // let tweetData = `https://twitter.com/intent/tweet?text=hello`
    window.open('https://twitter.com/MdshahbazW')
  }

  const GoLinkDinHandle = () => {
    // let tweetData = `https://twitter.com/intent/tweet?text= hii Friends`
    window.open('https://www.linkedin.com/in/md-shahbaz-warish-6a9068170/')
  }
   // ****************** ToastiFy **********************
  const notify = () => {
    if(!toastytoggle){
    return toast("login Fail",{position: 'top-center'});
    }else{
     return toast("login Success",{position:'top-center'});
    }
  }

  const navigate = useNavigate()
  // *****************Login *************************
  const [logEmail, setLgemail] = useState('');
  const [logPassword,setLogpassword] = useState('');
   
  const [logData, setLogData] = useState([]);
  

  const loginubmit = (e) => {
    e.preventDefault();
   
      // authentication 
    let log_record = new Array();
    log_record = JSON.parse(sessionStorage.getItem("regData"))
      ? JSON.parse(sessionStorage.getItem("regData"))
      : [];
      if(log_record.some((v)=>{
        return v.reg_email == logEmail || v.reg_username == logEmail && v.reg_password == logPassword })){
        
          alert('login')
          settoastyToggle(true);
          navigate("/home");

        }else{
          settoastyToggle(false);
          alert('please Register')
        }
        setLogout(false);
    // console.log(log_record);
    setLgemail('');
    setLogpassword('');
  };
  
  // Registration from here*************************

  // const [inputData, setInputData] = useState({
  //   reg_name: "",
  //   reg_username: "",
  //   reg_email: "",
  //   reg_password: "",
  //   reg_cpassword: "",
  // });

  // const [data, setData] = useState(getDataFromSession());
  // const inputHandler = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   // console.log(value);
  //   setInputData((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     };
  //   });
  // };

  // const RegSubmit = (e) => {
  //   e.preventDefault();
  //   setData((preVal) => {
  //     return [...preVal, inputData];
  //   });
    // sessionStorage.setItem("regData", JSON.stringify(data));
    // console.log(data);
    // setInputData({
    //   reg_name: "",
    //   reg_username: "",
    //   reg_email: "",
    //   reg_password: "",
    //   reg_cpassword: "",
    // });
  // };
  // setInputData('');
  return (
    <>
      <div className="login_container">
        {/* <!-- Pills navs --> */}
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="tab-register"
              data-mdb-toggle="pill"
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Register
            </a>
          </li>
        </ul>
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={loginubmit}>
              <div class="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1"onClick={GoLinkDinHandle} >
                  <FaLinkedinIn />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1" onClick={GoTwitHandle} >
                  <AiOutlineTwitter />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <GrFacebookOption />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <AiOutlineInstagram />
                </button>
              </div>

              <p class="text-center">or:</p>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="loginName"
                  // onChange={formik.handleChange}
                  // value={formik.values.reg_username}
                  value={logEmail}
                  name="log_email"
                  onChange={(e)=>setLgemail( e.target.value)}
                 
                  class="form-control"
                />
                <label class="form-label" for="loginName">
                  Email or username
                </label>
              </div>
              {formik.touched.reg_username && formik.errors.reg_username && <p style={{ color: 'red' }}>{formik.errors.reg_username}</p>}
              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  // onChange={formik.handleChange}
                  // value={formik.values.reg_username}
                  value={logPassword}
                  name="log_password"
                  onChange={(e)=>setLogpassword(e.target.value)}
                  autocomplete="new-password"
                  class="form-control"
                />
                <label class="form-label" for="loginPassword">
                  Password
                </label>
              </div>

              {/* <!-- 2 column grid layout --> */}
              <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div class="form-check mb-3 mb-md-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                     
                    />
                    <label class="form-check-label" for="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col-md-6 d-flex justify-content-center">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <span onClick={notify}> <button type="submit"  class="btn btn-primary btn-block mb-4">
                Sign in
              </button></span>
             
              <ToastContainer/>
              {/* <!-- Register buttons --> */}
              <div class="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
              </div>
            </form>
          </div>
          <div
            class="tab-pane fade"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form onSubmit={formik.handleSubmit}>
              <div class="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <FaLinkedinIn />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <AiOutlineTwitter />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <GrFacebookOption />
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <AiOutlineInstagram />
                </button>
              </div>

              <p class="text-center">or:</p>

              {/* <!-- Name input --> */}
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="registerName"
                  onChange={formik.handleChange}
                  value={formik.values.reg_name}
                  // value={inputData.reg_name}
                  name="reg_name"
                  // onChange={inputHandler}
                  class="form-control"
                />
                <label class="form-label" for="registerName">
                  Name
                </label>
              </div>
              {formik.touched.reg_name && formik.errors.reg_name && <p style={{ color: 'red' }}>{formik.errors.reg_name}</p>}

              {/* <!-- Username input --> */}
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  onChange={formik.handleChange}
                  value={formik.values.reg_username}
                  // value={inputData.reg_username}
                  name="reg_username"
                  // onChange={inputHandler}
                  class="form-control"
                />
                <label class="form-label" for="registerUsername">
                  Username
                </label>
              </div>
              {formik.touched.reg_username && formik.errors.reg_username && <p style={{ color: 'red' }}>{formik.errors.reg_username}</p>}

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="registerEmail"
                  onChange={formik.handleChange}
                  value={formik.values.reg_email}
                  // value={inputData.reg_email}
                  name="reg_email"
                  // onChange={inputHandler}
                  class="form-control"
                />
                <label class="form-label" for="registerEmail">
                  Email
                </label>
              </div>
              {formik.touched.reg_email && formik.errors.reg_email && <p style={{ color: 'red' }}>{formik.errors.reg_email}</p>}
              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  autocomplete="new-password"
                  onChange={formik.handleChange}
                  value={formik.values.reg_password}
                  // value={inputData.reg_password}
                  name="reg_password"
                  // onChange={inputHandler}
                  class="form-control"
                />
                <label class="form-label" for="registerPassword">
                  Password
                </label>
              </div>
              {formik.touched.reg_password && formik.errors.reg_password && <p style={{ color: 'red' }}>{formik.errors.reg_password}</p>}
              {/* <!-- Repeat Password input --> */}
              <div class="form-outline mb-4">
                <input
                  type="password"
                  name="reg_cpassword"
                  onChange={formik.handleChange}
                  value={formik.values.reg_cpassword}
                  // value={inputData.reg_cpassword}
                  // onChange={inputHandler}
                  id="registerRepeatPassword"
                  class="form-control"
                />
                <label class="form-label" for="registerRepeatPassword">
                  Repeat password
                </label>
              </div>
              {formik.touched.reg_cpassword && formik.errors.reg_cpassword && <p style={{ color: 'red' }}>{formik.errors.reg_cpassword}</p>}
              {/* <!-- Checkbox --> */}
              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                 
                  aria-describedby="registerCheckHelpText"
                />
                <label class="form-check-label" for="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>
             
              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block mb-3">
                Sign in
              </button>
            </form>
          </div>
        </div>
        {/* <!-- Pills content --> */}
      </div>
     
    </>
  );
}

export default LoginReg;
