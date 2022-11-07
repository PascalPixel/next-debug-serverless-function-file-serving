import Cors from "micro-cors";
import type { NextApiHandler } from "next";

import handleOrder from "../../../utils/handleOrder";

// Stripe requires the raw body to construct the event.
export const config = { api: { bodyParser: false } };

// API endpoint
const handler: NextApiHandler<{ error: unknown | null }> = async (req, res) => {
  try {
    handleOrder("zip");
  } catch (err) {
    // Log for debugger
    console.error("stripe/webhooks", err);

    // Return Internal Server Error
    return res.status(500).json({ error: err });
  }
};

// Wrap method in cors so it works on Vercel
const cors = Cors({ allowMethods: ["POST", "HEAD"] });
export default cors(handler as any);
