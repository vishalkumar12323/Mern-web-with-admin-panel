const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    return next();
  } catch (e) {
    const statusCode = 422;
    const message = "please fill the input properly";
    const extraDeatils = e.issues[0].message;

    const error = {
      statusCode,
      message,
      extraDeatils,
    };
    next(error);
  }
};

export { validate };
