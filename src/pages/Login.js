
import LoginForm from "../components/Main/Content/LoginForm";

const Login = () => {
  return <LoginForm />;
};

export default Login;

export const loader=({request,params})=>{
    const query=new URL(request.url).searchParams
    const mode=query.get('mode')
    if(mode==='out'){
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        return ('LOGOUT')
    }
    return ('LOGIN')
}

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
    localStorage.setItem('email',userData.email)
    return ('LOGIN')
  } catch (err) {
    console.log(err);
  }
};
