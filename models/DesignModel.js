let mongoose = require('mongoose');
let schema = new mongoose.Schema({
    type: Number,
    rating: Number
//         {
//         type: mongoose.Mixed,
//         1: Number,
//         get: function (r) {
//             let item = Object.entries(r);
//             let total = 0;
//             let sum =0;
//             for (let [key, value] of items) {
//                 total += value;
//                 sum += value * parseInt(key);
//             }
//             return Math.round(sum/total);
//         },
//         set: function (r) {
//             if (!(this instanceof mongoose.Document)) {
//                 if (r instanceof Object) return r;
//                 else {throw new Error('')}
//             } else {
//                 if (r instanceof Object) {
//                     return r;
//                 }
//                 this.get('ratings', null, {getters: false})[r] = 1 + parseInt(this.get('ratings', null, {getters: false})[r])
//                 return this.get('ratings', null, {getters: false})
//             }
//         },
//         validate: {
//           validator: function (i) {
//               let b = [1]
//               let v = Object.keys(i).sort()
//               return b.every((x, j) => (v.length === b.length) && x === parseInt(v[j]))
//           },
//             message: "Invalid Star Level"
//         },
//         default: {1:1}
//     }
// }, {toObject:{getters: true, }, toJSON: {getters: true}});
});
let userModel = new mongoose.model('Design', schema);
module.exports = userModel;