import { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/browser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { fname, message, phone, email } = body;
  console.log(body)


  const service = process.env.SERVICE_KEY;
  const publickey = process.env.NEXT_PUBLIC_KEY;

  const emailData = {
    service_id: "service_wtad81t",
    template_id: "template_jwbblc5",
    user_id: "dsnGVaDSR6V73PTwC",
    template_params: {
      name: fname,
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

    if (!res.ok) {
   return new NextResponse(JSON.stringify({error:"error with your request"}), {status: 400})
    }

    const data = Response.json(res);

    console.log(data);
    return data;

    // const responseBody = await res.json();

    // const data = await res.json();
    // console.log("Email sent successfully:", data);
    // return data;
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
