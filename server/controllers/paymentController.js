import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import braintree from "braintree";

const checkout = async (req, res) => {
  const profileId = req.body.profileId || "";
  console.log(profileId);
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,

    merchantId: "r6jznn8rv5gsv3rp",
    publicKey: "2h9xshzzyh4qpxtw",
    privateKey: "19229c95654903d2044f3926b78dccf1",
  });

  const nonceFromClient = req.body.paymentMethodNonce;
  const amount = req.body.amount;

  const newTransaction = gateway.transaction.sale(
    {
      amount,
      paymentMethodNonce: nonceFromClient,
      options: {
        submitForSettlement: true,
      },
      deviceData: req.body.device_data,
    },
    (err, result) => {
      if (result) {
        res.json({ content: result, message: "Payment success!" });
      } else {
        res.status(500).json({ message: err.message });
      }
    }
  );
};

export { checkout };
