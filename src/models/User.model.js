const mongoose = require("mongoose")
const BaseSchema = require("./BaseModel")

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },

    password: {
        type: String,
        required: true,
        select: false,      // not show password unless call it explicitly
    },

    role: {
        type: String,
        enum: ["SUPER_ADMIN", "ORG_ADMIN", "MANAGER", "PLAYER"],
        default: "PLAYER",
    },

    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization"
    },

    isActive: {
        type: Boolean,
        default: true
    }
})

// merge base schema

UserSchema.add(BaseSchema)

module.exports = mongoose.model("user", UserSchema)