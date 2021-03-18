const requireAuth = require("./_require-auth.js");
const { getUser } = require("./_db.js");
const stripe = require("./_stripe.js");

exports.handler = requireAuth(async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const user = event.user;

  try {
    const { stripeCustomerId } = await getUser(user.uid);

    // Create a billing portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: body.returnUrl,
    });

    // Return success response
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: "success", data: session }),
    });
  } catch (error) {
    console.log("stripe-create-billing-session error", error);

    // Return error response
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        code: error.code,
        message: error.message,
      }),
    });
  }
});
