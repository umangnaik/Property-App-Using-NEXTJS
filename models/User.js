import { Schema, model, models } from "mongoose";
const UserSchemas = new Schema({
    email: {
        type: String,
        unique: [true, 'Email is already exists'],
        required: [true, 'Email is required']
    },
    userName: {
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        }
    ]
}, {
    timestamps: true
});

const User = models.User || model('User', UserSchemas);

export default User;