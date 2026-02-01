const mongoose = require("mongoose")

const BaseSchema = mongoose.Schema(
    {
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
)

module.exports = mongoose.model("base", BaseSchema);