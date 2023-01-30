const Power = require("../model/power.model");

module.exports.get_billing = async (req, res) => {
  try {
    const users = await Power.find({}).sort("-createdAt");
    const query = req.query.name;

    let results = [];

    if (query) {
      //localhost:4000/api/billing-list?name=01816108432

      http: results = users.filter(
        (user) =>
          user.fullName.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase()) ||
          user.phone.toLowerCase().includes(query.toLowerCase())
      );
      res.json({ results });
    } else if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;

      const skip = (page - 1) * parseInt(limit);

      const result = await Power.find({})
        .skip(skip)
        .limit(limit)
        .sort("-createdAt");

      res.status(200).send({
        status: "success",
        totalUsers: users.length,
        count: result.length,
        message: result,
      });
    } else {
      const result = await Power.find({}).sort("-createdAt");

      res.status(200).send({
        status: "success",
        message: result,
      });
    }
  } catch (error) {
    res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
};
