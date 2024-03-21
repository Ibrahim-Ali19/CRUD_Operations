import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    phone: String
});

// Initialize the auto-increment plugin
autoIncrement.initialize(mongoose.connection);

// Apply the plugin to the schema
userSchema.plugin(autoIncrement.plugin, { model: 'user', field: '_id', startAt: 1 });

// Create the User model
const User = mongoose.model('user', userSchema);

export default User;
