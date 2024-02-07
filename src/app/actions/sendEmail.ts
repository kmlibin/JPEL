import emailjs from "@emailjs/browser";

interface sendEmailFormState {
  errors: {
    message?: string[];
    phone?: string[];
    email?: string[];
    fname?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function sendEmail(
  formState: sendEmailFormState,
  formData: FormData,
): Promise<sendEmailFormState> {
  const fname = formData.get("name");
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone");
  const message = formData.get("message");
  console.log(name, email, phone, message);

  //validate. if valid put in an object to send to email js. if not valid, set up and send back errors

  //needs at least a phone OR email. so
  if (!phone && !email) {
    return {
      errors: {
        phone: ["Please provide either an email or phone number"],
        email: ["Please provide either an email or phone number"],
      },
    };
  }

  if (!fname) {
    return {
      errors: {
        fname: ["Please provide a name"],
      },
    };
  }

  if (email) {
    const emailPattern = /^\S+@\S+\.\S+$/;
    const isValidEmail = emailPattern.test(email);
    if (!isValidEmail) {
      return {
        errors: {
          email: ["Please provide a valid email address"],
        },
      };
    }
  }
  if (!message) {
    return {
      errors: {
        message: ["Please write a message to JPEL"],
      },
    };
  }

  try {
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID!,
      "template_jwbblc5",
      { fname, email, phone, message },
      process.env.REACT_APP_PUBLIC_KEY!,
    );
    console.log("success");
  } catch (error) {
    console.log(error);
  }

  //send to email.js. if success, return no errors. if an issue, return form error

  //return success or failure

  return {
    errors: {},
    success: true,
  };
}

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValid = validateForm(formData, setFormErrors);
//     if (isValid) {
//       try {
//         emailjs
//           .sendForm(
//             process.env.REACT_APP_SERVICE_ID,
//             "template_m2bhs6m",
//             form.current,
//             process.env.REACT_APP_PUBLIC_KEY
//           )
//           .then((result) => {
//             console.log(result.text);
//             setSubmissionStatus({
//               heading: "Success",
//               message:
//                 "Thanks for your email. Christian will respond within the next 24 hours.",
//             });

//             setShowModal(true);
//             setFormData({
//               name: "",
//               lastName: "",
//               email: "",
//               phone: "",
//               preferredContactMethod: "phone",
//               message: "",
//             });
//           });
//       } catch (error) {
//         setSubmissionStatus({
//           heading: "Error",
//           message:
//             "Error sending email. Please try again later or email email@email directly",
//         });
//         setShowModal(true);
//       }
//     } else {
//       setShowModal(true);
//       setSubmissionStatus({
//         heading: "Error",
//         message:
//           "Form Validation Failed. Please make sure information is correct or email email@email.com",
//       });
//     }
//   };
