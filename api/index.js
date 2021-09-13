const express = require('express');
const app = express();

const auth = require('./2FA');
app.use(auth);

if(require.main === module){
    const port = 3001;
    app.listen(port, () => {
        console.log(`API is listening on port ${port}`)
    })
}

module.exports = app;