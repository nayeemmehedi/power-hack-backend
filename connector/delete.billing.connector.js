const Power = require("../model/power.model");

module.exports.delete_billing = async (req, res, next) => {
    try {
      const { id } = req.params;
      //jdi amra name : null dei kono verifation krbe na ..updateone e.

      const result = await Power.deleteOne({ _id: id });

      res.status(200).json({
        status: "Successful",
        message: "detete data Successfully",
        result,
        data: req.body,
      });
    } catch (error) {
      res.status(400).json({
        status: "faild",
        message: error.message,
      });
    }
  };