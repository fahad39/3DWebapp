import express from "express";
import * as dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET);

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
      success_url: `http://localhost:5173/`,
      cancel_url: `http://localhost:5173/`,
    });
    res.json({ id: session.id });
  } catch (error) {
    console.log("error is ", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

export default router;
