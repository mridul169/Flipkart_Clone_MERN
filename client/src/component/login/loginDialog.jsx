import React, { useState, useContext,useEffect } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { authenticateLogin, authenticateSignup } from '../../service/api.js';
import { LoginContext } from "../../context/DataProvider.jsx";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 79% no-repeat;
  height: 84.4%;
  width: 30%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const pageInitial = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signUp: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const loginInitialValues = {
  username: '',
  password: '',
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  Phonenumber: "",
};

const LoginDialog = ({ openLogin, setOpenLogin }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [page, setPage] = useState(pageInitial.login);
  const [ error, showError] = useState(false);

  const {setAccount} = useContext(LoginContext);

  useEffect(() => {
    showError(false);
}, [login]);

  const togglePage = () => {
    setPage(pageInitial.signUp);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleClose = () => {
    setOpenLogin(false);
    setPage(pageInitial.login);
  };

  const loginUser = async() => {
    let response = await authenticateLogin(login);
    if(!response) 
        showError(true);
    else {
        showError(false);
        handleClose();
        setAccount(response.data.data.firstname);
    }
}

  return (
    <>
      <Dialog
        open={openLogin}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{page.heading}</Typography>
              <Typography style={{ marginTop: 25 }}>
                {" "}
                {page.subHeading}
              </Typography>
            </Image>
            {page.view === "login" ? (
              <Wrapper>
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter username"
                /> 
                { error && <Error>Please enter valid Username or Password</Error> }
                
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name = 'password' label="Enter password" />
                <Text>
                  By continuing, you agree to flipkart's Terms and Conditions
                </Text>
                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={() => togglePage()}>
                  New to flipkart? Create account
                </CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField
                  variant="standard"
                  label="Enter First name"
                  name="firstname"
                  onChange={(e) => {
                    setSignup({ ...signup, [e.target.name]: e.target.value });
                  }}
                />
                <TextField
                  variant="standard"
                  label="Enter Last name"
                  name="lastname"
                  onChange={(e) => {
                    setSignup({ ...signup, [e.target.name]: e.target.value });
                  }}
                />
                <TextField
                  variant="standard"
                  label="Enter username"
                  name="username"
                  onChange={(e) => {
                    setSignup({ ...signup, [e.target.name]: e.target.value });
                  }}
                />
                <TextField
                  variant="standard"
                  label="Enter email"
                  name="email"
                  onChange={(e) => {
                    setSignup({ ...signup, [e.target.name]: e.target.value });
                  }}
                />
                <TextField
                  variant="standard"
                  label="Enter password"
                  name="password"
                  onChange={(e) => {
                    setSignup({ ...signup, [e.target.name]: e.target.value });
                  }}
                />
                <TextField
                  variant="standard"
                  label="Enter Phone Number"
                  name="Phonenumber"
                  onChange={(e) => {
                    setSignup({ ...signup, [e.target.name]: e.target.value });
                  }}
                />
                <LoginButton
                  onClick={async () => {
                    let response = await authenticateSignup(signup);
                    if (!response) return;
                    handleClose();
                    setAccount(signup.username);
                  }}
                >
                  Continue
                </LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
