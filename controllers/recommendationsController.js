const recommendationsService = require("../services/recommendationsService");

exports.surpriseMe = (req, res) => {
  recommendationsService
    .surpriseMe()
    .then((recommendations) => res.status(200).send(recommendations))
    .catch((err) => res.status(500).send(err));
};
