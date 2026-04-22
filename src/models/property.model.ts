import mongoose from "mongoose";

export interface IProperty extends mongoose.Document {
    title: string;
    description: string;
    price: number;
    address: string;
    createdBy: mongoose.Types.ObjectId;
    // New field for multiple images
    images: {
        data: Buffer;
        contentType: string;
    }[];
    // New field for likes (storing User IDs)
    likes: mongoose.Types.ObjectId[];
}

const propertySchema = new mongoose.Schema<IProperty>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        address: { type: String, required: true },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        // Array of images
        images: [
            {
                data: Buffer,
                contentType: String
            }
        ],
        // Array of User IDs who liked this property
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    { timestamps: true }
);

const Property = mongoose.model<IProperty>("Property", propertySchema);
export default Property;
