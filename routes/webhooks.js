const express = require('express');
const axios = require('axios');
const router = express.Router();
const ipfilter = require('express-ipfilter').IpFilter;

const TELEGRAM_URL = 'https://api.telegram.org';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_TOKEN || 'noop';
const ips = ['149.154.160.0/20', '91.108.4.0/22'];

router.post('/telegram', ipfilter(ips, { mode: 'allow' }), function (req, res, next) {
  const chatId = req.body.message.chat.id;
  const message = req.body.message.text;

  if (message.match(/hello/gi)) {
    axios
      .post(`${TELEGRAM_URL}/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        text: 'Hello there!',
      })
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  } else {
    res.status(200).send({ message: `Echoing back ${message}` });
  }
});

module.exports = router;
