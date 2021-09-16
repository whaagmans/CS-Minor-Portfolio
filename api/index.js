const Speakeasy = require('speakeasy');
const express = require('express');
const JsonDB = require('node-json-db').JsonDB;
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;
const uuid = require('uuid');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: implement firestore instead of node-json-db
const dbConfig = new Config('MyDataBase', true, false, '/');

const db = new JsonDB(dbConfig);

app.post('/register', (req, res) => {
  const id = uuid.v4();
  try {
    const path = `/user/${id}`;
    const tempSecret = Speakeasy.generateSecret({ window: 10 });

    db.push(path, { id, tempSecret });

    res.json({ id, secret: tempSecret.base32 });
  } catch {
    res.status(500).json({ message: 'Error generating secret key' });
  }
});

app.post('/verify', (req, res) => {
  const { userId, token } = req.body;
  try {
    const path = `/user/${userId}`;
    const user = db.getData(path);
    const { base32: secret } = user.tempSecret;
    const verified = Speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
    });
    if (verified) {
      db.push(path, { id: userId, secret: user.tempSecret });
      res.json({ verified });
    } else {
      res.json({
        verified,
      });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving user', error: err });
  }
});

app.post('/validate', (req, res) => {
  const { userId, token } = req.body;
  try {
    const path = `/user/${userId}`;
    const user = db.getData(path);
    const { base32: secret } = user.secret;

    const tokenValidates = Speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
      window: 1,
    });

    if (tokenValidates) {
      res.json({ validated: true });
    } else {
      res.json({ validated: false });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving user', error: err });
  }
});

if (require.main === module) {
  const port = 3001;
  app.listen(port, () => {
    console.log(`API is listening on port ${port}`);
  });
}

module.exports = app;
