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
  // console.log(fname, email, phone, message);

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

  //works JST fine if i call from this file.
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

  const emailData = {
    fname,
    message,
    phone: phone || "",
    email: email || "",
  };

  try {
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(emailData),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    // console.log(err);
  }
  return {
    errors: {},
    success: true,
  };
}

//return success or failure
