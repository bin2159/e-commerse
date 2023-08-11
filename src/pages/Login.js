import { redirect } from "react-router-dom";
import LoginForm from "../components/Main/Content/LoginForm";

const Login = () => {
  return <LoginForm />;
};

export default Login;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
    returnSecureToken: true,
  };
  try {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVKDeD6JKxpasNvpWsByGZYkbCfPDx1J0",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      }
    );
    const resData = await response.json();
    if (!response.ok) {
      return resData.error;
    }
    const token = resData.idToken;
    localStorage.setItem("token", token);
    return redirect('/store')
  } catch (err) {
    console.log(err);
  }
};
