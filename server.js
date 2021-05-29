const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

//local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'montreal_bakery'
});


dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});


app.all('/*', function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,enctype,authorization');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


var Customer = function (customer) {
  this.fname = customer.fname;
  this.email = customer.email;
  this.pass = customer.pass;
  this.address = customer.address;
  this.phone = customer.phone;
};


var Booking = function (booking) {
  this.start_date = new Date(booking.start_date);
  this.end_date = new Date(booking.end_date);
  this.car_id = booking.car_id;
  this.cust_id = booking.cust_id;
  this.bookingstatus = booking.bookingstatus;
};

var Help = function (help) {
  this.cname = help.cname;
  this.cemail = help.cemail;
  this.cmsg = help.cmsg;
  this.reply = help.reply;
};

var Feedback = function (feedback) {
  this.name = feedback.name;
  this.email = feedback.email;
  this.phone = feedback.phone;
  this.message = feedback.message;
  this.oid = feedback.oid;
  this.status = feedback.status;
};

var Cake = function (cake) {
  this.category = cake.category;
  this.flavour = cake.flavour;
  this.color = cake.color;
  this.size = cake.size;
  this.kg = cake.kg;
  this.toppings = cake.toppings;
  this.price = cake.price;
  this.availability = cake.availability;
  this.images = cake.images;
  this.description = cake.description;
  this.ptype="Cakes"
};

var Orders = function (orders) {
  this.category = orders.category;
  this.flavour = orders.flavour;
  this.color = orders.color;
  this.size = orders.size;
  this.kg = orders.kg;
  this.toppings = orders.toppings;
  this.price = orders.price;
  this.date = orders.date;
  this.tim = orders.tim;
  this.quantity = orders.quantity;
  this.total = orders.total;
  this.email = orders.email;
  this.status = orders.status;
  this.ptype = orders.ptype;
};


// API Call Start from here
//Customer Registration
// sql query
// INSERT INTO `register`(`id`, `fname`, `email`, `pass`, `address`, `phone`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]')
app.post('/register', (req, res) => {
  const new_customer = new Customer(req.body);
  // new_customer.role = 2;
  dbConn.query("INSERT INTO register set ?", new_customer, function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Customer Registration failed" });
    }
    else {
      res.send({ status: 200, message: "Customer Registered successfully" });
    }
  });
});


app.post('/login', (req, res) => {
  dbConn.query("SELECT * FROM register WHERE email = ? and pass = ?", [req.body.username, req.body.password], function (err, result) {
    if (err) {

      res.send({ status: 500, message: "Invalid Details" + JSON.stringify(err) });

    }
    else if (result.length) {
      res.send({ status: 200, data: result });
    } else {
      res.send({ status: 500, message: "Invalid Details" });

    }
  });
});

//Admin Login Code
app.post('/adminlogin', (req, res) => {
  dbConn.query("SELECT * FROM admin WHERE uname = ? and pass = ?", [req.body.username, req.body.password], function (err, result) {
    if (err) {

      res.send({ status: 500, message: "Invalid Details" });

    }
    else if (result.length) {
      res.send({ status: 200, data: result });
    } else {
      res.send({ status: 500, message: "Invalid Details" });
    }
  });
});


// get cakes code
app.get('/fetchCakes', (req, res) => {
  dbConn.query("SELECT * FROM cakes", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Something went wrong Please try again!!!" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});



app.get('/fetchCakes/:id', (req, res) => {
  dbConn.query("SELECT * FROM cakes where cid = ?", req.params.id, function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});



// get shakes code
app.get('/fetchShakes', (req, res) => {
  dbConn.query("SELECT * FROM shakes", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Something went wrong Please try again!!!" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});


app.get('/fetchShakes/:id', (req, res) => {
  dbConn.query("SELECT * FROM shakes where sid = ?", req.params.id, function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});




// get crossiants code
app.get('/fetchCross', (req, res) => {
  dbConn.query("SELECT * FROM crossaints", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Something went wrong Please try again!!!" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});




app.get('/fetchCross/:id', (req, res) => {
  dbConn.query("SELECT * FROM crossaints where c_id = ?", req.params.id, function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});







app.get('/getAvailableCakes', (req, res) => {
  dbConn.query("SELECT * FROM cakes where availability = 'Available'", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});



app.post('/fetchCakesss', (req, res) => {
  debugger
  dbConn.query("SELECT * FROM cakes where category = ?", req.body.cat, function (err, result) {
    if (err) {
      debugger
      console.log(JSON.stringify(err));
      res.send({ status: 500, message: "Please try again" });
    } else {
      console.log(JSON.stringify(result));
      console.log(JSON.stringify(req.body.cat));
      res.send({ status: 200, data: result })
    }
  })
});

app.post('/fetchCakesssByPrice', (req, res) => {
  debugger
  dbConn.query("SELECT * FROM cakes where price <= ?", req.body.p, function (err, result) {
    if (err) {
      debugger
      console.log(JSON.stringify(err));
      res.send({ status: 500, message: "Please try again" });
    } else {
      console.log(JSON.stringify(result));
      console.log(JSON.stringify(req.body.cat));
      res.send({ status: 200, data: result })
    }
  })
});






app.post('/myProfile', (req, res) => {
  dbConn.query("SELECT * FROM register WHERE id = ?", parseInt(req.body.id), function (err, result) {
    if (err) {
      console.log(JSON.stringify(err));
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});

//Get Orders Code
app.get('/fetchBookings', (req, res) => {
  dbConn.query("SELECT * FROM orders", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});



app.post('/fetchBookings', (req, res) => {
  dbConn.query("SELECT * from orders where email = ? ", [req.body.id], function (err, result) {
    if (err) {
      console.log(JSON.stringify(err));
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});



app.get('/fetchAllBookings', (req, res) => {
  dbConn.query("SELECT * from Orders", function (err, result) {
    if (err) {
      console.log(JSON.stringify(err));
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});




app.post('/addBooking', (req, res) => {
  const new_booking = new Booking(req.body);

  dbConn.query("INSERT INTO booking set ?", new_booking, function (err, result) {
    if (err) {
      console.log
      res.send({ status: 500, message: "Please try again" });
    }
    else {
      res.send({ status: 200, message: "Vehicle Booking added successfully" });
    }
  });
});


/// Add Orders Code
app.post('/addOrder', (req, res) => {
  console.log("hello world");
 
  // console.log((req.body));
  let data = (req.body);
  // const orders = new Orders(data[0]);
  var temp = 0;
  for (var i = 0; i < data.length; i++) {
    const orders = new Orders(data[i]);
    console.log(orders);
    dbConn.query("INSERT INTO orders set ?", orders, function (err, result) {
      // dbConn.query("INSERT INTO `orders`(`oid`, `category`, `flavour`, `color`, `size`, `kg`, `toppings`, `price`, `date`, `tim`, `quantity`, `total`, `email`, `status`, `ptype`) VALUES  ?", [test], function (err, result) {

      if (err) {
        console.log
        //  res.send({ status: 500, message: "Please try again" });
      }
      else {
        temp++;
        //  res.send({ status: 200, message: "Order Placed successfully" });
      }
    });
  }

  if (temp == data.length) {
    res.send({ status: 200, message: "Order Placed successfully" });
  }
  else {
    res.send({ status: 500, message: "Please try again" });
  }

  // dbConn.query("INSERT INTO orders set ?", data, function (err, result) {
  //   // dbConn.query("INSERT INTO `orders`(`oid`, `category`, `flavour`, `color`, `size`, `kg`, `toppings`, `price`, `date`, `tim`, `quantity`, `total`, `email`, `status`, `ptype`) VALUES  ?", [test], function (err, result) {

  //   if (err) {
  //     console.log
  //     res.send({ status: 500, message: "Please try again" });
  //   }
  //   else {
  //     res.send({ status: 200, message: "Order Placed successfully" });
  //   }
  // });
});

/// Add Feedback Code
app.post('/addReview', (req, res) => {
  const feedback = new Feedback(req.body);
  console.log(feedback);
  dbConn.query("INSERT INTO feedback set ?", feedback, function (err, result) {
    if (err) {
      console.log
      res.send({ status: 500, message: "Please try again" });
    }
    else {
      res.send({ status: 200, message: "Feedback Submitted successfully" });
    }
  });
});



/// Add Help Code
app.post('/addHelp', (req, res) => {
  const help = new Help(req.body);

  dbConn.query("INSERT INTO help set ?", help, function (err, result) {
    if (err) {
      console.log
      res.send({ status: 500, message: "Please try again" });
    }
    else {
      res.send({ status: 200, message: "Feedbook Submitted successfully" });
    }
  });
});




// Add Cake Inventory Code
app.post('/addCake', (req, res) => {
  const new_cake = new Cake(req.body);

  dbConn.query("INSERT INTO cakes set ?", new_cake, function (err, result) {
    if (err) {
      debugger
      console.log
      res.send({ status: 500, message: "Something Went Wrong Please try again!!!!" });
    }
    else {
      res.send({ status: 200, message: "Cake Added successfully" });
    }
  });
});


app.put('/editCake/:id', (req, res) => {
  const cake = new Cake(req.body);

  dbConn.query("UPDATE cakes set category = ?,flavour = ?,color = ?,size = ?,kg = ?,toppings = ?,price = ?,description=?  where cid = ?", [cake.category, cake.flavour, cake.color, cake.size, cake.kg, cake.toppings, cake.price, cake.description, req.params.id], function (err, result) {
    if (err) {
      console.log
      res.send({ status: 500, message: "Please try again" });
    }
    else {
      res.send({ status: 200, message: "Vehicle added successfully" });
    }
  });
});

app.get('/deleteCake/:id', (req, res) => {
  dbConn.query("DELETE FROM cakes WHERE cid = ?", [req.params.id], function (err, result) {
    if (err) {
      console.log("err", err);
      res.send({ status: 500, message: "Please try again" });
    }
    else {
      res.send({ status: 200, message: "Cake Deleted from Inventory Successfully" });
    }
  })
})


// Get Customers Code
app.get('/fetchAllCustomers', (req, res) => {
  dbConn.query("SELECT * FROM register", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
})

app.get('/fetchCustomers', (req, res) => {
  dbConn.query("SELECT * FROM register", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
})

// Get Manage Help Code
app.get('/fetchHelp', (req, res) => {
  dbConn.query("SELECT * FROM help", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
})



// Get Manage Help Code
app.get('/fetchFeedback', (req, res) => {
  dbConn.query("SELECT * FROM feedback", function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
})



app.post('/myProfile', (req, res) => {
  dbConn.query("SELECT * FROM register WHERE id = ?", parseInt(req.body.id), function (err, result) {
    if (err) {
      console.log(JSON.stringify(err));
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});

app.get('/fetchProfile/:id', (req, res) => {
  dbConn.query("SELECT * FROM register where id = ?", req.params.id, function (err, result) {
    if (err) {
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, data: result })
    }
  })
});


app.put('/editProfile/:id', (req, res) => {
  const user = new Customer(req.body);
  //user.password = "123";
  //SELECT `id`, `email`, `pass`, `role`, `name`, `address`, `phone_no`, `license` FROM `user` WHERE 1
  dbConn.query("UPDATE register set fname = ?,email = ?,pass = ?,address = ?,phone = ?  where id = ?", [user.fname, user.email, user.pass, user.address, user.phone, req.params.id], function (err, result) {
    if (err) {
      console.log
      res.send({ status: 500, message: "Please try again" });
    }
    else {
      res.send({ status: 200, message: "Profile Updated successfully" });
    }
  });
});

app.get('/cancelBooking/:id', (req, res) => {
  dbConn.query("UPDATE orders SET status =? WHERE oid = ?", ["Cancelled", req.params.id], function (err, result) {
    if (err) {
      console.log("err", err);
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, message: "Order Cancelled Successfully or Not Available" });
    }
  })
})


app.get('/confirmBooking/:id', (req, res) => {
  dbConn.query("UPDATE orders SET status =? WHERE oid = ?", ["Confirmed", req.params.id], function (err, result) {
    if (err) {
      console.log("err", err);
      res.send({ status: 500, message: "Please try again" });
    } else {
      res.send({ status: 200, message: "Order Confirmed Successfully" });
    }
  })
})



// listen for requests
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
// Non Using below
