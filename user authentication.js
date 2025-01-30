const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send('Error hashing password');
    }

    const newUser = new User({ name, email, password: hashedPassword });
    newUser.save()
      .then(() => res.redirect('/login'))
      .catch((err) => res.status(500).send('Error saving user'));
  });
});