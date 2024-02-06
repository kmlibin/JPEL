import { Aoboshi_One } from "next/font/google"

interface sendEmailFormState {
    errors: {
        content?: string[],
        _form?: string[]
    }
    success?: boolean
}

export async function sendEmail(formState: sendEmailFormState, formData: FormData): Promise<sendEmailFormState> {
   const name = formData.get('name')
   const email = formData.get('email')?.toString()
   const number = formData.get('number')
   const message = formData.get('message')

   //validate. if valid put in an object to send to email js. if not valid, set up and send back errors

       if (!name) {

    }

    if (!email) {
      
    }

    if (email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValidEmail = emailPattern.test(email);
      if (!isValidEmail) {
    
      }
    }

    if (!number) {

    }

    if (!message) {

    }

    //send to email.js

    //return success or failure
}

// const validateForm = (formData, setFormErrors) => {
//     let errors = {};
//     let formIsValid = true;

//     if (!formData.name) {
//       formIsValid = false;
//       errors["username"] = "*Please enter your name";
//     }

//     if (!formData.email) {
//       formIsValid = false;
//       errors["email"] = "*Please enter your email";
//     }

//     if (formData.email) {
//       const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//       const isValidEmail = emailPattern.test(formData.email);
//       if (!isValidEmail) {
//         formIsValid = false;
//         errors["email"] = "*Please enter a valid email";
//       }
//     }

//     if (!formData.phone) {
//       formIsValid = false;
//       errors["number"] = "*Please enter your phone number";
//     }

//     if (!formData.preferredContactMethod) {
//       formIsValid = false;
//       errors["contactMethod"] = "*Please make a selection";
//     }

//     if (!formData.message) {
//       errors["message"] = "*Please provide information";
//     }

//     setFormErrors(errors);
//     return formIsValid;
//   };

//   export default validateForm