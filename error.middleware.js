// error.middleware.js
function errorResponder(err, req, res, next) {
   console.error(`Error occurred: ${err.message}`);
   res.status(500).json({ error: err.message });
}

module.exports = { errorResponder };
