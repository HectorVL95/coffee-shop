const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/coffeeShop', {useNewUrlParser: true, useUnifiedTopology: true})



const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique: true, requied: true},
  password:{type: String, require: true}
})

userSchema.pre('save', async function (next) {
  const user = this;
  if(user.isModified('password') || user.isNew) {
    try {
      const hashedPassword = bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      next()
    } catch (error){
      return next(error)
    }
  }else{
    return next()
  }
})

const userModel = mongoose.model('userModel', userSchema, 'users')


//Get route to retieve your existing users
app.get('/getUsers', async (req, res) => {
  try{
    const users = await userModel.find();
    console.log("Users Found:", users);
    res.json(users);
  } catch (error){
    console.error('Error while fetching users:', error);
    res.status(500).json({error: 'Internal Server Error'})
  }
})


//POST route to add a new user
app.post('/addUser', async (req, res) =>{
  try{
    console.log('Request Body:', req.body);

    const newUser = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error){
    console.error('Error while adding a new user:', error
    );
    res.status(500).json({error: 'Internal Server Error'})
  }
})

//DELETE router to delete an user
app.delete('/deleteUser/:id',async(req, res)=>{
  const userId = req.params.userId;

  try{
    //Find user by ID and delete
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if(!deletedUser){
      //If user not found, return a 404 status
      return res.status(404).json({error: 'User not found'})
    }
    res.json({message: 'User deleted successfully', deletedUser})
  } catch (error){
    console.error('Error while deleting user:', error);
    res.status(500).json({error: 'Internal Server Error'})
  }
})

app.listen(5000, () =>{
  console.log('Server is running')
})
