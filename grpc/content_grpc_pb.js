// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var content_pb = require('./content_pb.js');

function serialize_PublishContent(arg) {
  if (!(arg instanceof content_pb.PublishContent)) {
    throw new Error('Expected argument of type PublishContent');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PublishContent(buffer_arg) {
  return content_pb.PublishContent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PublishResult(arg) {
  if (!(arg instanceof content_pb.PublishResult)) {
    throw new Error('Expected argument of type PublishResult');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PublishResult(buffer_arg) {
  return content_pb.PublishResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContentService = exports.ContentService = {
  // 用户发布
  userPublish: {
    path: '/Content/UserPublish',
    requestStream: false,
    responseStream: false,
    requestType: content_pb.PublishContent,
    responseType: content_pb.PublishResult,
    requestSerialize: serialize_PublishContent,
    requestDeserialize: deserialize_PublishContent,
    responseSerialize: serialize_PublishResult,
    responseDeserialize: deserialize_PublishResult,
  },
};

exports.ContentClient = grpc.makeGenericClientConstructor(ContentService);
