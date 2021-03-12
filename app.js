const express = require('express');
const app = express();
const port = 3001;
app.listen(port, () => console.log(`Сервер запущен на порту: ${port}!`))

app.get('/api/healthCheck', (req, res) => {
    let data = {
        'status': 1,
        'msg': 'pong'
    }
    res.json(data);
})