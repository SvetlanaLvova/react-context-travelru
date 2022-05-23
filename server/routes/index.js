const express = require('express');
const router = express.Router();
const {CountryReact} = require('../db/models');


router.get('/travel', async (req, res) => { //router чтобы вывести все страны на главную
 try {
   const countries = await CountryReact.findAll({raw: true});
   res.json({ countries }) // findeAll вернет вот такое: { countries: [{}, {}, {}] } 
 }
 catch (err) {
   console.log(err);
   res.status(501).end()
 }

})

router.get('/travel/:someCountry', async (req, res) => { //router чтобы вернуть сонкретную страну
  try {
    const {someCountry} = req.params;
    const countries = await CountryReact.findAll({where: {tittle: someCountry}, raw: true});
    res.json({ countries }) 
  }
  catch (err) {
    console.log(err);
    res.status(501).end()
  }
})

router.post('/newTravel', async (req, res) => { //router чтобы добавить страну в базу
const {tittle, description, img} = req.body;
const newCountry = await CountryReact.create({tittle, description, img});
res.json(newCountry);
})

router.delete('/travel/:someCountry', async (req, res) => { //router чтобы удалить страну
  await CountryReact.destroy({where: {id: req.params.someCountry}})
  res.sendStatus(200)
})
 




module.exports = router;
