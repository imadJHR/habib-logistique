import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
  console.log('Validation des données:', req.body); // Log pour débogage
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    console.log('Erreurs de validation:', errors.array()); // Log pour débogage
    return res.status(400).json({ 
      success: false,
      message: 'Validation error',
      errors: errors.array() 
    });
  }
  
  next();
};