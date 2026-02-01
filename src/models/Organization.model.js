const mongoose = require("mongoose")
const BaseSchema = require("./BaseModel")

const OrganizationSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },

    slug: {
        type: String,
        unique: true,
        lowercase: true
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },

    subscriptionPlan: {
        type: String,
        enum: ["FREE", "PRO", "ENTERPRISE"],
        default: "FREE",
    },

    isActive: {
        type: Boolean,
        default: true,
    }
})

OrganizationSchema.plugin(BaseSchema)

module.exports = mongoose.model("organization", OrganizationSchema)