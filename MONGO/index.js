const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("connection successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

User.deleteMany({name:"bob"}).then((res)=> {
    console.log(res);
})
.catch((err) => {
    console.log(err)
});


// User.findByIdAndUpdate("65c5e24d2c3792fa2fa5062a",{name:"noname"},{new:true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err)
// });

// User.findById("65c5cab2469248bab426367b")
// .then((res) => { 
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });