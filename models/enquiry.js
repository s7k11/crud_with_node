var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var enquiry= new Schema({
	name:String,
	rank:String,
	text:String
});

mongoose.model('enqs',enquiry);   // here 'enqs' is the collection name