"use server";

interface sendEmailFormState {
  errors: {
    message?: string[];
    phone?: string[];
    email?: string[];
    name?: string[];
    _form?: string[];
  };
  success?: boolean | null;
}

export async function sendEmail(
  formState: sendEmailFormState,
  formData: FormData,
): Promise<sendEmailFormState> {
  const name = formData.get("name");
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone");
  const message = formData.get("message");

  //needs at least a phone OR email. so
  if (!phone && !email) {
    return {
      errors: {
        phone: ["Please provide either an email or phone number"],
        email: ["Please provide either an email or phone number"],
      },
    };
  }

  if (!name) {
    return {
      errors: {
        name: ["Please provide a name"],
      },
    };
  }

  //check for valid email
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

  const service = process.env.SERVICE_KEY;
  const publickey = process.env.NEXT_PUBLIC_KEY;
  const privatekey = process.env.PRIVATE_KEY;

  //set up object for emailjs
  const emailData = {
    service_id: service,
    template_id: "template_jwbblc5",
    user_id: publickey,
    accessToken: privatekey,
    template_params: {
      name: name,
      message: message,
      phone: phone,
      email: email,
    },
  };

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    //check the data, if it's not 200 add an error to the form
    // const data = await res.json();

    //if there is no response or if status isn't 200, add an error to the form
    if (!res || res.status !== 200) {
      return {
        errors: {
          _form: [
            "Failed to send. Please try again later, or call/email us directly",
          ],
        },
      };
    }
  } catch (err) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong..."],
        },
      };
    }
  }
  //runs if everything is fine
  return {
    errors: {},
    success: true,
  };
}

//return success or failure
//this works from this file
//   const params = {
//   name: fname,
//   message: message,
//   phone: phone,
//   email: email,
// };
// console.log('before')
// try
// {
//   emailjs
//     .send("service_wtad81t", "template_jwbblc5", params, "dsnGVaDSR6V73PTwC")
//     .then((response) => {
//       console.log(`response: ${JSON.stringify(response)}`);
//       return response;
//     });
// } catch (error) {
//   console.log(error);
// }

// const emailData = {
//   service_id: "service_wtad81t",
//   template_id: "template_jwbblc5",
//   user_id: "dsnGVaDSR6V73PTwC",
//   template_params: {
//     name: fname,
//     message: message,
//     phone: phone,
//     email: email,
//   },
// };

// console.log(emailData)
// //works JST fine if i call from this file.
// try {
//       const res = await fetch(
//         "https://api.emailjs.com/api/v1.0/email/send/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(emailData),
//         },
//       )

//   console.log(res)
//   // return Response.json(res)
//       if (!res.ok) {
//         throw new Error("Failed to send email");
//       }

//     // const responseBody = await res.json();

//       // const data = await res.json();
//       // console.log("Email sent successfully:", data);
//       // return data;
//     } catch (error) {
//       console.error("Error sending email:");
//       throw error;
//     }
//     return {
//   errors: {},
//   success: true,
// };

//   }
