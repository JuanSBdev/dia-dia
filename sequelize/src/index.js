const app = require('./app');
const PORT = 3001;
const { sequelize } = require("./db");




app.listen( PORT, async ()=>{
   try { await sequelize.sync({force:true});
    console.log(`server listenning on http://localhost:${PORT}`)}
    catch(error){
        console.log(error.message)       
    }
}
)