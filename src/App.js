
import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues ] = useState({
    username : "",
    email : "",
    birthday : "",
    password : "",
    confirmPassword : "",
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
      label:"Username",
      pattern: "^[A-Za-z0-9]{3,16}",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email adress!",
      label:"Email",
      required:true
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"text",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true
    },
    {
      id:5,
      name:"confirmPassword",
      type:"text",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match",
      pattern: values.password,
      label:"Confirm Passowrd",
      
      required:true
    }
    
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  console.log(values);
  return (
    <div className="App">
    
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input)=>(
        <FormInput key={input.id} name="username" {...input} value={values[input.name]} onChange={onChange}/>
      ))}
        
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
