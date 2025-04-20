import Quote from '../models/Quote.js';

export const createQuote = async (req, res) => {
  try {
    const {
      serviceType,
      weight,
      dimensions,
      fromAddress,
      toAddress,
      additionalInfo,
      firstName,
      lastName,
      email,
      phone,
      termsAccepted
    } = req.body;

    const quote = new Quote({
      serviceType,
      packageInfo: {
        weight,
        dimensions
      },
      addresses: {
        from: fromAddress,
        to: toAddress
      },
      additionalInfo,
      contactInfo: {
        firstName,
        lastName,
        email,
        phone
      },
      termsAccepted
    });

    await quote.save();
    res.status(201).json({ message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateQuoteStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!quote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};