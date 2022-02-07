const mongoose = require("mongoose");
const http = require("http");
const dbname = 'mydb';



//connect to db
const connectToDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/"+dbname, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`connection to db - ${dbname} is success`);
    })
    .catch(() => {
      console.log(`connection to db - ${dbname} is unsuccessful`);
    });
};

//call connectToDb function to connect with database
connectToDb();

const checkDB = () => {
  const db = mongoose.connection;

  db.on("error", () => {
    console.log("Communication error");
  });
  db.once("open", () => {
    console.log("Connecton success");
  });
};

checkDB();

//Create a schema
const studentSchema = mongoose.Schema({
  name: String,
  address: { type: String, require: true },
  contactNo: { type: Number, require: true },
  isGraduted: { type: Boolean, default: true },
});

// define or create model
const studentModel = mongoose.model("students", studentSchema);

//insert a single document in a mongodb db
const insertSingleDocument = () => {
  let document = {
    name: "xyz",
    address: "pune",
    contactNo: 9787845542,
  };

  // studentModel.collection.insertOne(document, (err, result) => {
  //     if (err) throw err;
  //     console.log('Student Added successfully');
  //     console.log(result);
  // })

  const student = new studentModel(document);
  student.save((err, result) => {
    if (err) throw err;
    console.log("Student Added successfully");
  });
};

// insertSingleDocument();

const insertMultipleDocuments = () => {
  let documents = [
    {
      name: "pqr",
      address: "kolkata",
      contactNo: 9787845542,
    },
    {
      name: "klm",
      address: "delhi",
      contactNo: 9787845542,
    },
    {
      name: "asd",
      address: "pune",
      contactNo: 9787845542,
    },
  ];

  studentModel
    .insertMany(documents)
    .then(() => {
      console.log("Students added successfully");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

// insertMultipleDocuments()

//find documents
//find all documents
const getAllStudents = () => {
  studentModel.find({}, (err, students) => {
    if (err) throw err;
    console.log(students);
  });
};

// getAllStudents()

const getStudentsWithAddress = (address) => {
  studentModel.find({ address: address }, (err, students) => {
    if (err) throw err;
    console.log(students);
  });
};

// getStudentsWithAddress("pune")

//get first document of a collection
const getSingleStudent = () => {
  studentModel.findOne({}, (err, student) => {
    if (err) throw err;
    console.log(student);
  });
};

// getSingleStudent();

//get single document with filter
const getSingleStudentwithFilter = (name) => {
  studentModel.findOne({ name: name }, (err, student) => {
      if (err) throw err;
      console.log(student);
  });
};

// getSingleStudentwithFilter('asd');


//updteDocument
const updateStudent = (id) => {
    let updateData = {
        address: "Goa"
    }
    studentModel.findByIdAndUpdate(id, updateData, (err, student) => {
        if (err) throw err;
        console.log('Student Updated');
    })
}

// updateStudent("62012c6b154bbe61e920a926")


//updateallstudents

const updateAllStudents = () => {
    studentModel.updateMany({}, { address: "Kolkata" }, (err, students) => {
        if (err) throw err;
        console.log('Students address updated.!');
    })
}

// updateAllStudents()

//delete document

const deleteStudent = (id) => {
    studentModel.findByIdAndDelete(id, (err) => {
        if (err) throw err;
        console.log('Student deleted');
    })
    
}

// deleteStudent("62012ba03d7692dedcb40bf3");

//sort documents

const sortStudentswithNames = () => {
    studentModel.find().sort({ name: 1 }).exec((err, result) => {
        if (err) throw err;
        console.log(result);
    })
}

// sortStudentswithNames()

//limit method
// get first 5 students

const firstFiveStudents = () => {
    studentModel.find().limit(5).exec((err, students) => {
        if (err) throw err;
        console.log(students);
    })
}

// firstFiveStudents()


// skip method

//get last five students
const lastFiveStudents = () => {
    studentModel.find().skip(995).exec((err, students) => {
        if(err) throw err;
        console.log(students);
    })
}

lastFiveStudents()