const express = require('express')
const router = express.Router()

 
// Database Configuration
const sql = require('mysql')
const config = sql.createConnection({
    user: 'root',
    password: '',
    server: 'localhost',
    database: 'studentnew2',
})


router.get('/', (req, res)=>{
    res.send("From api route")
});

router.get('/fetchStudent', (req, res)=>{
    let query = "SELECT * FROM student"
    config.connect();
    config.query(query, function(err, result){
        if(err){
            console.error(err)
            res.status(404).send('Not Found')
        }
        else{
            res.status(200).send(result)
        }
    })
});


router.post('/updateStudent', (req, res)=>{
    let enrollno = req.body.enrollno;
    // other editable data to be imported to variables
    let query = "UPDATE QUERY"
    if(enrollno == null){
        res.status(400).send("Bad Request");
        console.error('Bad HTTP request send enroll no. in query')
    }
    else{
        config.connect();
        config.query(query, (err, result)=>{
            if(err){
                console.error(err);
                res.status.send(404).send("Record not found for", enrollno);
            }
            else{
                res.status(200).send(result);
                console.log('Student updated')
            }
        });
    }
});

router.post('/deleteStudent', (req, res)=>{
    let enrollno = req.body.enrollno;
    let query = "DELETE QUERY"
    if(enrollno == null){
        res.status(400).send("Bad Request");
        console.error('Bad HTTP request send enroll no. in query')
    }
    else{
        config.connect();
        config.query(query, (err, result)=>{
            if(err){
                console.error(err);
                res.status.send(404).send("Record not found for", enrollno);
            }
            else{
                res.status(200).send(result);
                console.log('Student deleted')
            }
        });
    }
});


module.exports = router