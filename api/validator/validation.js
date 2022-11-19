import { validationResult } from 'express-validator'

const fieldValidator = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.errors.map(err => {
      return {
        msg: err.msg,
        value: err.value
      }
    })
    
    return res.status(400).json(errs);
  }

  next()
}

export { fieldValidator }
