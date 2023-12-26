const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    return next();
  } catch (e) {
    // console.log(e.issues[0].message);
    res.status(400).json({ msg: e.issues[0].message });
  }
};

export { validate };
