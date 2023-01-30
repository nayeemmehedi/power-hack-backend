const Power = require("../model/power.model");

module.exports.add_billing =async (req, res) => {

    try {

      const result = await Power.insertMany(req.body, { runValidators: true });

      res.status(200).send({
        status: "success",
        message: result,
      });
    } catch (error) {
      res.status(400).send({
        status: "failed",
        message: error.message,
      });
    }

  };