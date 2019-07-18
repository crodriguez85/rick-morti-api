const express = require('express');
const router =express.Router();

// const characters = require('');

router.get('/characters', characters.getCharacters);

module.exports = router;
