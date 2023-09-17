import { body, validationResult } from "express-validator";

function userRegistrationValidation() {
  return [
    body("username", "Username can't be empty").isLength({ min: 2 }),
    body("email", "Email Is invalid").isEmail(),
    body("phone", "Phone Number Is not valid").isMobilePhone(),
    body("address", "Address cannot be empty").notEmpty().isLength({ min: 5 }),
    body("password", "password has to be strong ")
      .notEmpty()
      .isLength({ min: 8 }),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password Confirmation Does not Match PAssword");
      }
      return true; //Indicates The Success of the Validation
    }),
  ];
}

function errorMiddleware(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ error: errors.array() });
}

/*In summary, the userRegistrationValidation function defines validation rules for user registration fields, and the errorMiddleware function handles validation errors, ensuring that any validation failures are properly reported back to the client with appropriate error messages and status codes.*/

export { errorMiddleware, userRegistrationValidation };
