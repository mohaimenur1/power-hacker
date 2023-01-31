import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   const [data, setData] = useState("");

  const registerSubmit = async (data) => {
    if (data.password === data.cpassword) {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        cpassword: data.cpassword,
      };
      console.log(userData);
      await axios
        .post("http://localhost:5000/api/registration", userData)
        .then((log) => {
          if (log.data.success) {
            alert("User registerd");
          } else {
            alert("This user Already Exist");
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("passwrod doesn't match");
    }
  };

  return (
    <div>
      <h3 className="text-center mt-4">Register Page</h3>
      <div className="container mt-5 mb-4">
        <div className="card shadow">
          <form
            className="mt-4 p-5 mb-4"
            onSubmit={handleSubmit(registerSubmit)}
          >
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example1">
                Name
              </label>
              <input
                type="text"
                id="form2Example1"
                className="form-control"
                required
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-danger mt-1">Name filed is required</p>
              )}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example1">
                Email Address
              </label>
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                required
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
              />
              {errors.email && (
                <p className="text-danger mt-1">Invalid Email</p>
              )}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example2">
                Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/,
                })}
              />
              {errors.password && (
                <div className="text-danger mt-1">
                  <p className="bold">Error:</p>
                  <p>At least 1 upper casae</p>
                  <p>At least 1 lower case</p>
                  <p>1 Specail Charecter</p>
                  <p>1 number</p>
                </div>
              )}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example2">
                Confirm Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
                {...register("cpassword", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/,
                })}
              />
              {errors.cpassword && (
                <div className="text-danger mt-1">
                  <p> password doesnot match</p>
                </div>
              )}
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Register
              </button>
            </div>
            <div className="text-center">
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
