const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/login', login);

// 🔒 Ruta protegida
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Acceso permitido',
    user: req.user
  });
});

module.exports = router;
