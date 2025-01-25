import express from "express";
import * as dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET);
const devSucessURL = "http://localhost:5173/?payment=success";
const prodSuccessURL = "https://3d-webapp-ebon.vercel.app/?payment=success";
const devCancelURL = "http://localhost:5173/?payment=cancel";
const prodCancelURL = "https://3d-webapp-ebon.vercel.app/?payment=cancel";

router.route("/create-checkout-session").post(async (req, res) => {
  try {
    const { img } = req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `price_1QkVabINt3r69nGPq39kBL3F`,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: prodSuccessURL,
      cancel_url: prodCancelURL,
    });
    res.json({ id: session.id });
  } catch (error) {
    console.log("error is ", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

export default router;
