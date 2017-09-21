const grpc = require('grpc');  
const config = require('../config.js');
const services = require('./content_grpc_pb.js')  
 
module.exports = {
  getClient : function(){
    return new services.ContentClient(  
      config.grpc.url,  
      grpc.credentials.createInsecure()  
    ); 
  }
}