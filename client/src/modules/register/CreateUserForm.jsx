import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const CreateUserForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate form submission
    setTimeout(() => {
      console.log('Form values:', values);
      setSubmitting(false);
      navigate('/login');
    }, 500);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[!@#$%^&*])/,
        'Password must contain at least one special character'
      ),
      Confirm_Password: Yup.string().required().oneOf([Yup.ref("password"),null],"Enter the same password as before"),
    profile_type: Yup.string().required('Profile type is required'),
    rollNo: Yup.string(),
    institute: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone: '',
        password: '',
        confirm_Password:'',
        profile_type: '',
        rollNo: '',
        institute: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className="register_container">

        <div className="register_box">
        <div className="left_panel">
          <h2>Register Yourself on Aim2Crack!!</h2>
        <Form  className="form_method">
        <fieldset className="form-group bottom_error">   
        <div id="div_id_username" className="input">
          
          <label htmlFor="username"  className="form__label">Username:</label>
          <Field type="text" id="username" name="username"  className="textinput textInput form-control"/>
          
         </div>


         <div class="rules_u">
         <ErrorMessage name="username" component="div" />
                      </div>
        
                      
         



        <div id="div_id_email" className="input">
          <label htmlFor="email" className="form__label"  >Email:</label>
          <Field type="email" id="email" name="email" className="emailinput form-control" />
          
        </div>
        


        <div class="rules_e">
        <ErrorMessage name="email" component="div" />
                      </div>
        




        <div className="input">

          <label htmlFor="phone" className="form__label">Phone:</label>
          <Field type="text" id="phone" name="phone" className="textinput textInput form-control" />
          
        </div>
        

        <div class="rules_ph">
        <ErrorMessage name="phone" component="div" />
                      </div>
        


        <div className="input " id="div_id_password1"  >
          <label htmlFor="password"  className="form__label" id="password_label" >Password:</label>
          <Field type="password" id="password" name="password" className="textinput textInput form-control  id_password1" 
                         placeholder=" " autoComplete="new-password"
                         />
        
        
        
        </div>
        
        <div class="rules_pass">
        <ErrorMessage name="password" component="div" />
                      </div>
        

        <div  id="div_id_password2" className="input">
          <label htmlFor=""  className="form__label" id="password_label2">Confirm Password:</label>
          <Field type="password" id="password" 
                         className="textinput textInput form-control id_password2" 
                          placeholder=" " name="Confirm_Password" />
          




        </div>
        

        <div class="rules_CP">
        <ErrorMessage name="Confirm_Password" component="div" />


                      </div>
        



      



        <div className="input" id="roll">
          <label htmlFor="rollNo" className="form__label">Roll No:</label>
          <Field type="text" id="rollNo" name="rollNo" placeholder=" " className="form-control" />
          
        </div>
        <ErrorMessage name="rollNo" component="div" />
        
       
        
        <div  id="institute" className="input">
          <label htmlFor="institute" className="form__label">Institute:</label>
          <Field type="text" id="institute" name="institute" placeholder=" " className="form-control"/>
         
        </div>
        <ErrorMessage name="institute" component="div" />

        

        <div id="profile_name" className="input-box">
          <label htmlFor="profile_type">Profile Type:</label>
          <Field as="select" id="profile_type" name="profile_type">
            <option id="S" value="">Select profile type</option>
            <option id="S" value="student">Student</option>
            <option id="S" value="faculty">Faculty</option>
          </Field>
         
        </div>
        


        <div class="rules_profile">
        <ErrorMessage name="profile_type" component="div" />

                      </div>
        
      
      
      
      
      
        <div className="sign">
      <button className="btn btn-outline-info" type="submit" disabled={isSubmitting} >Sign Up</button>
                 </div>

      
      
        </fieldset>
      </Form>

        </div>

        <div className="right_panel">

      <img src="/static/users/undraw_maker_launch_crhe.svg" alt=""/>

              <div className="border-top pt-3">
                    <small className="text-muted">
                   <h3> Already have an account ?</h3>
                    <div className="sign_in">

          <a className="ml-2" >Sign In</a>
      </div>
  </small>
</div>
</div>




            </div>

        </div>





      )}
    </Formik>
  );
};

export default CreateUserForm;
