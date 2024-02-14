import { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/browser";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
  //grab info from body
  const body = await req.json();
  const { name, message, phone, email } = body;

  console.log(name, message, phone, email)

  const service = process.env.SERVICE_KEY;
  const publickey = process.env.NEXT_PUBLIC_KEY;
  const privatekey = process.env.PRIVATE_KEY;

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

    // console.log("Response status:", res.status);
    // console.log("Response headers:", res.headers);
    // console.log("Response body:", await res.text()); // Use .text() to read the response body as text

    if (!res.ok) {
      console.log("bad request");
      return Response.json({ status: 400 });
    }

    return Response.json({ status: 200 });
  } catch (error) {
    console.error("Error sending email:");
    throw error;
  }
}

//   const params = {
//     name: fname,
//     message: message,
//     phone: phone,
//     email: email,
//   };
//   console.log("before");

//   try {
//     emailjs
//       .send("service_wtad81t", "template_jwbblc5", params, "dsnGVaDSR6V73PTwC")
//       .then((res) => {
//         console.log(`${res}`);
//       });

//       console.log(response)

//   } catch (error) {
//     return error;
//   }
// }
//validate. if valid put in an object to send to email js. if not valid, set up and send back errors

//needs at least a phone OR email. so
// if (!phone && !email) {
//   return {
//     errors: {
//       phone: ["Please provide either an email or phone number"],
//       email: ["Please provide either an email or phone number"],
//     },
//   };
// }

// if (!fname) {
//   return {
//     errors: {
//       fname: ["Please provide a name"],
//     },
//   };
// }

// if (email) {
//   const emailPattern = /^\S+@\S+\.\S+$/;
//   const isValidEmail = emailPattern.test(email);
//   if (!isValidEmail) {
//     return {
//       errors: {
//         email: ["Please provide a valid email address"],
//       },
//     };
//   }
// }
// if (!message) {
//   return {
//     errors: {
//       message: ["Please write a message to JPEL"],
//     },
//   };
// }

// try {
//   console.log(`${service}:service`)
//   emailjs
//     .send(
//       `${service}`,
//       "template_jwbblc5",
//       { fname, email, phone, message },
//       `${publickey}`,
//     )
//     .then((result) => {
//       console.log(result.text);
//     });
// } catch (error) {
//   console.log(error);
// }

//send to email.js. if success, return no errors. if an issue, return form error

//return success or failure
