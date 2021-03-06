var auth = require('./auth');

module.exports = (app) => {
  app.use("/", require("../routes/home.routes"));
  app.use("/", require("../routes/category.routes"));
  app.use("/", require("../routes/login.routes"));
  app.use("/", require("../routes/post.routes"));
  app.use("/", require("../routes/search.routes"));
  app.use("/", require("../routes/tag.routes"));

  app.use("/dashboard", auth.user, require("../routes/dashboard/index.routes"));
  app.use("/dashboard", auth.user,require("../routes/dashboard/premium.routes"));
  app.use("/dashboard", require("../routes/dashboard/approve.routes"));
  app.use("/dashboard", auth.list_post,require("../routes/dashboard/list-post.routes"));
  app.use("/dashboard", auth.manage,require("../routes/dashboard/card.routes"));
  app.use("/dashboard", auth.manage,require("../routes/dashboard/category.routes"));
  app.use("/dashboard", auth.manage,require("../routes/dashboard/post.routes"));
  app.use("/dashboard", auth.manage,require("../routes/dashboard/tag.routes"));
  app.use("/dashboard", auth.manage,require("../routes/dashboard/user.routes"));
};
