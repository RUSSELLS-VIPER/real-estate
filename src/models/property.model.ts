import mongoose from "mongoose";

export interface IProperty extends mongoose.Document {
    title: string;
    description: string;
    price: number;
    address: string;
    createdBy: mongoose.Types.ObjectId;
}

const propertySchema = new mongoose.Schema<IProperty>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        address: { type: String, required: true },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
    },
    { timestamps: true }
);

const Property = mongoose.model<IProperty>("Property", propertySchema);
export default Property;
