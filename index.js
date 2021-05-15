const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const MainRouter = require("./routes/mainroute");
const { response } = require("express");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", MainRouter);
app.use("/api/auth", require("./routes/auth"));
app.use("/profile", require("./routes/profile"));
// app.use("/api/posts", require("./routes/posts"));
// app.use("/add-post", require("./routes/mainroute"));
const Mongourl = " mongodb://localhost:27017/mernproject";
mongoose.connect(
	Mongourl,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (!err) console.log("Connected ya mony");
		else console.log("Not connected ya mony");
	}
);

// //! long pull
// const subscribers = {};
// app.get('/msgs/subscriber',(req,res)=>{
//     const id = Math.ceil(Math.random() * 123333);
//     subscribers[id] = res;
   
// }); 

// app.post("/msgs", (req, res) => {
// 	// console.log(req.body);
//     // Object.keys(subscribers).forEach(([id,response]) => {
//     //         response.json(req.body);
//     //         delete subscribers[id];
        
//     Object.keys(subscribers).forEach((k) => {
//         subscribers[k].json(req.body);
//         // console.log("k sent, ",k);
//         console.log("req.body -> ",req.body);
//         // response.json(req.body);
//         delete subscribers[k];
    
//     });
    
//     res.status(204).end();
// });


///////////!
//! Short pull
const msgs = [];

app.post("/msgs", (req, res) => {
	// console.log(req.body);
	msgs.push(req.body);
	let date_ob = new Date();

	// current hours
	let hours = date_ob.getHours();

	// current minutes
	let minutes = date_ob.getMinutes();

	// prints time in HH:MM format
	let now = hours + ":" + minutes;
	// console.log(now);
	// msgs.push(now);
	// msgs.push(req.body,now);
    console.log(msgs);
	res.status(204).end();
});

app.get("/msgs", (req, res) => {

	res.json(msgs);
});













// Object.entries(subscribers.foreach(([id,response]) => {
//     response.json(req.body);
//     delete subscribers[id];
// })
app.listen(5001, () => console.log("Running server on 5001 ya mony"));
