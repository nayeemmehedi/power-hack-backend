const Power = require("../model/power.model");

module.exports.update_billing = async (req, res, next) => {
    try {

        const { id } = req.params;

        if(id === undefined){
            res.status(404).send({
                message: "Id is required"
            })

        }
     
      //jdi amra name : null dei kono verifation krbe na ..updateone e.

      const result = await Power.updateOne(
        { _id: id },
        { $set: req.body },
        { runValidators: true }
      );

      res.status(200).json({
        status: "Successful",
        message: "update data Successfully",
        result,
        data: req.body,
      });
    } catch (error) {
      res.status(400).json({
        status: "faild",
        message: error.message,
        error: error
      });
    }
  };