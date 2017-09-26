let APIError = require('../rest').APIError;
let messages = require('../grpc/content_pb.js');  
let contentGrpcClient = require('../grpc/content_grpc_client');

module.exports = {
    /* 'GET /api/products': async (ctx, next) => {
        ctx.rest({
            products: products.getProducts()
        });
    },

    'POST /api/products': async (ctx, next) => {
        var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },

    'DELETE /api/products/:id': async (ctx, next) => {
        console.log(`delete product ${ctx.params.id}...`);
        var p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    }*/

    'GET /api/userPublish': async (ctx, next) => {
        let request = new messages.PublishContent();
        request.setTopicId(1);
        var userPublish = function (result) {
            return new Promise(function (resolve, reject) {
               const client = contentGrpcClient.getClient();
               return client.userPublish(request, function(err,data){  
                    if(err){  
                      console.error(err);  
                    }
                    let jsonp = ctx.request.query.callback+"("+JSON.stringify(new messages.PublishResult(data.array).toObject())+")";
                    ctx.rest(jsonp);
                    client.close();
                    resolve();
                });
            });
        };
        await userPublish();
    }
};
