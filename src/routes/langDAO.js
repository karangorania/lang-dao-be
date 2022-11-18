const express = require('express');
const router = express.Router();

const dbConnect = require('../db/connection');
const storePropId = require('../models/propId');

const createProposal = '../controller/createProposal.js';

router.post('/proposalId', async (req, res) => {
  const createProposalData = await createProposal();

  const saveProp = new storePropId({
    // prop_id: req.body.prop_id,
    vote: req.body.vote,
    name: req.body.name,
    description: req.body.description,
    forLang: req.body.forLang,
    isComplete: req.body.isComplete,
    proposerAddress: req.body.proposerAddress,
  });
  await saveProp.save();
  res.send(saveProp);
});

module.exports = router;
