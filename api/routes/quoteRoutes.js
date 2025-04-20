import express from 'express';
import { 
  createQuote, 
  getAllQuotes, 
  getQuoteById, 
  updateQuoteStatus 
} from '../controllers/quoteController.js';
import { auth } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public route
router.post('/', createQuote);

// Protected admin routes
router.get('/', auth, getAllQuotes);
router.get('/:id', auth, getQuoteById);
router.put('/:id/status', auth, updateQuoteStatus);

export default router;