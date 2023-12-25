const handleErrors = (err, req, res, next) => {
  const statusCode = err.statusCode || 422;
  const message = err.message || "Error from the backend";
  const extraDeatils = err.extraDeatils || "Backend Error";

  res.status(statusCode).json({ msg: message, extraDeatils: extraDeatils });
};

export { handleErrors };
