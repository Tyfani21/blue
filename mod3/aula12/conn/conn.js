const express = require('express')
const mongoose = require('mongoose')
const teste = require('./models/test')
mongoose.connect('mongodb://localhost:27017/banco-test', {useNewUrlParser: true, useUnifiedTopology:true})