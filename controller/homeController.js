module.exports.Home = function (req, res) {
  return res.render("home", {
    title: "Home",
  });
};

module.exports.SignIn = function (req, res) {
  return res.render("sign-in", {
    title: "Sign-in",
  });
};

module.exports.SignUP = function (req, res) {
  return res.render("sign-up", {
    title: "Sign-up",
  });
};

module.exports.Profile = function (req, res) {
  return res.render("profile", {
    title: "profile",
  });
};
