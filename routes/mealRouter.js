// JavaScript Document
const express = require('express')
const axios = require('axios')
//const data = require('../booksJson')

const mealRouter = express.Router()

const APP_ID = 'da3c3fcf'
const APP_KEY = '44d4203540d418e418cd925fb34b5084'


mealRouter.route('/')
 .get(async (req, res) => {
 	const api = 'https://api.edamam.com/search?q=chicken&app_id=da3c3fcf&app_key=44d4203540d418e418cd925fb34b5084'
 
 	try {
 		let resp = await axios.get(api)
 		let result = resp.data.hits
 		res.render('index', {data: result})
	  console.log(result)
 	} catch(error) {
 		console.log(error)
 	}
})
.post(async (req, res) => {
	const {meal} = req.body
	const api = 'https://api.edamam.com/search?q='+ meal +'&app_id=da3c3fcf&app_key=44d4203540d418e418cd925fb34b5084'
	try {
 		let resp = await axios.get(api)
 		let result = resp.data.hits
 		res.render('index2', {data: result})
	  console.log(result)
 	} catch(error) {
 		console.log(error)
 	}
})




module.exports = mealRouter