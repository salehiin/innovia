import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (request, {params}) => {
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings');
    try {
        const resp = await bookingsCollection
        .deleteOne({_id : new ObjectId(params.id)})
        return Response.json({message : "Delete successfull", response: resp});
    } catch (error) {
        return Response.json({message : "Something Went Wrong"});
    }
};

export const PATCH = async (request, {params}) => {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings');
    const updateDoc = await request.json()
    try {
        const resp = await bookingsCollection
        .updateOne(
            {_id : new ObjectId(params.id)},
            {
                $set: {
                    ...updateDoc
                },
            },
            {
                upsert: true
            }
        );
        return Response.json({message : "Booking updated", response: resp});
    } catch (error) {
        return Response.json({message : "Something Went Wrong"});
    }
};

export const GET = async (request, {params}) => {
    const db = await connectDB()
    const bookingsCollection = db.collection('bookings');
    try {
        const resp = await bookingsCollection
        .findeOne({_id : new ObjectId(params.id)});
        return Response.json({message : "Booking found", data: resp});
    } catch (error) {
        return Response.json({message : "Something Went Wrong"});
    }
};