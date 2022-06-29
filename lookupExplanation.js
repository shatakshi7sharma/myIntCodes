// //lookup query is used when we have to join two models, it is used in aggregation quey.
// //we use aggregation queries when we want to fetch data from db after some calculation.
// //we shouldn't use aggregation queries unless it required, as they are timetaking, instead 
// //we should use find query to get the data from db and then ,use for loop to calculate it.


// //###============================#####
// //###----------BASIC SYNTAX------#####
// //###============================#####

// // {
// //     $lookup:
// //       {
// //         from: <collection that we want to join>,
// //         localField: <field from the input documents that we want to join>,
// //         foreignField: <field from the documents of the "from" collection>,
// //         as: <output array field>
// //       }
// //  }


// //###============================#####
// //###----------USE CASE------#####
// //###============================#####

// { yourSchemaName }.userInfo.aggregate([
//     {
//         $lookup:
//         {
//             from: "address",
//             localField: "contact_name",
//             foreignField: "name",
//             //if local field and foreign field are matched then will be the table joined.
//             //field no. 2 and 3 doesn't neccesarily to be id, they can be any.
//             as: "address"
//         }
//     }
// ]).pretty();

// //###============================#####
// //###----------OUTPUT------------#####
// //###============================#####
// {
//     "_id" : ObjectId("613594dbb59313217373673e"),
//         "contact_name" : "Bob",
//             "age" : 27,
//                 "sex" : "male",
//                     "citizenship" : "Filipino",
//                         "address" : [
//                             {
//                                 "_id": ObjectId("613594cdb59313217373673c"),
//                                 "name": "Bob",
//                                 "blk_no": 22,
//                                 "street": "dewey street",
//                                 "city": "United States of America"
//                             }
//                         ]
// }

// //###============================#####
// //###----------Pipelines------------#####
// //###============================#####

// ///Pipeline is basically condition to match 
// //for eg:-- this is the pipeline for equality, if '$User_ID' , '$$ID' will be matched , 
// //then only data will be returned.
// // $eq: [
// //     '$User_ID', '$$ID'
// //    ],



// // see the documents from two collections where the 
// // collection1.shopId is equal to the collection2.shopId,
// //  and the collection1 does not contain the shopPosId field.
// //
// db.collection2.aggregate([
//     {
//         "$lookup": {
//             "from": "collection1",
//             "let": { "shopId": "$shopId" },
//             "pipeline": [{
//                 "$match": {
//                     "$and": [
//                         { "$expr": { "$eq": ['$shopId', '$$shopId'] } },
//                         { "shopPosId": { "$exists": false } }
//                     ]
//                 }
//             }],
//             "as": "shopDescription"
//         }
//     }
// ]).pretty();

// //joined data will come in as field which is shopDescription here..
// //Either it will be return [](in case of false) or required data(in case of true), 