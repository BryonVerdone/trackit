const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
