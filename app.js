function display(data, callback){
 
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt>5? new Error("Error. randInt > 5"): null;
     
    setTimeout(function(){
        callback(err, data);
    }, 0);
}
 
console.log("Start program...");
 
display("Data processing...", function (err, data){
 
    if(err) throw err;
    console.log(data);
});
 
console.log("Close program...");