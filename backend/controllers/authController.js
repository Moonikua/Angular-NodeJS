const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// usuario de prueba
const userDB = {
  email: 'admin@admin.com',
  password: bcrypt.hashSync('123456', 8)
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== userDB.email || !bcrypt.compareSync(password, userDB.password)) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ email }, 'CLAVE_SECRETA', { expiresIn: '1h' });

  res.json({ message: 'Login correcto', token });
};
