const handleErrors = (err, req, res, next) => {
  const statusCode = err.statusCode || 422;
  const message = err.message || "fill the input fields properly";
  const extraDeatils = err.extraDeatils || "Backend Error";

  console.log(extraDeatils);
  res.status(statusCode).json({ message, extraDeatils });
};

export { handleErrors };
