const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel");
const blogModel = require("../models/blogModel");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');

const secret = "secret";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// To Check Ping
router.get("/ping", (req, res) => {
  res.send("pong");
});


// Changed to POST signup
router.post("/signUp", async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    const emailCon = await userModel.findOne({ email: email });
    if (emailCon) {
      return res.json({
        success: false,
        msg: "Email already exists"
      });
    }

    bcrypt.genSalt(12, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;

        let user = await userModel.create({
          username,
          name,
          email,
          password: hash,
        });
        console.log(user);

        return res.json({
          success: true,
          msg: "User created successfully",
        });
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server Error",
    });
  }
});

// Changed to POST login
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if (!user) {
    return res.json({
      success: false,
      msg: "User not found"
    });
  }
  else {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        let token = jwt.sign({ userId: user._id }, secret);
        return res.json({
          success: true,
          msg: "User logged in successfully",
          token: token
        })
      }
      else{
        return res.json({
          success: false,
          msg: "Invalid password"
        })
      }
    })
  }
});

//new router.post login try if this dosnt work delete this and uncomment upper one
//i commented upper one coz it wasnt redirecting me to home page after i successfuly logged in so i commented that and used a lil help from chatgpt and maded a new login router which sucessfully redirected me to login
//butn now on further coding i find upper one usefull with little bit of editing in code both are working fine but now i have commented the 2nd chatgpt one and used my own one both are redirecting me to home page from login page

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await userModel.findOne({ email });

//     if (!user) {
//       return res.json({
//         success: false,
//         msg: "User not found"
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.json({
//         success: false,
//         msg: "Invalid password"
//       });
//     }

//     // No JWT, just return success
//     return res.json({
//       success: true,
//       msg: "Logged in successfully"
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       msg: "Server Error"
//     });
//   }
// });
// this is working fine but i am doing a bit diffrently so i need to change a bit when i code further

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extName = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extName);
  }
})

const upload = multer({ storage: storage });

// Changed to post uploadBlog
router.post("/uploadBlog", upload.single('image'), async (req, res) => {
  try {
    let {token, title, desc, content} = req.body;
    // Decode the token to get the user ID
    let decoded = jwt.verify(token, secret);
    let user = await userModel.findOne({ _id: decoded.userId });
    
    if (!user) {
      return res.json({
        success: false,
        msg: "User not found"
      });
    }
    
    // Retrieve the file name from the uploaded file
    const imageName = req.file ? req.file.filename : null;

    // Create a new blog entry
    let blog = await blogModel.create({
      title: title,
      content: content,
      image: imageName, // Use the image name here
      desc: desc,
      user: user._id
    });

    // Respond with success
    return res.json({
      success: true,
      msg: "Blog created successfully",
      blog: blog
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      msg: "An error occurred"
    });
  }
});

//    getBlog
router.post("/getBlogs", async (req, res) => {
  let {token} = req.body;
  let decoded = jwt.verify(token, secret);
  let user = await userModel.findOne({ _id: decoded.userId });
  if (!user) {
    return res.json({
      success: false,
      msg: "User not found"
    });
  }
  else{
    let blogs = await blogModel.find({});
    return res.json({
      success: true,
      msg: "Blogs featched successfully",
      blogs: blogs
    })
  }
});

router.post("/getBlog", async (req, res) => {
  let {token, blogId} = req.body;
  let decoded = jwt.verify(token, secret);
  let user = await userModel.findOne({ _id: decoded.userId });
  if (!user) {
    return res.json({
      success: false,
      msg: "User not found"
    });
  }
  else{
    let blog = await blogModel.findOne({_id: blogId});
    return res.json({
      success: true,
      msg: "Blog featched successfully",
      blog: blog
    })
  }
})

module.exports = router;
