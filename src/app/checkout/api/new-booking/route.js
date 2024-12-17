import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const booking = await request.json()
    const db = await connectDB()
        const bookingsCollection = db.collection('bookings')
        try {
            const res = await bookingsCollection.insertOne(newBooking);
            return Response.json({message: "Booking Successfull"}, {status: 200})
        } catch (error) {
            return Response.json({message: "Something Wenrt Wrong"}, {status: 400})
        }
};



// import { connectDB } from "@/lib/connectDB";

// export const POST = async (request) => {
//     const booking = await request.json()
//     const db = await connectDB()
//         const bookingsCollection = db.collection('bookings')
//         try {
//             const newBooking = await bookingsCollection.insertOne(booking);
//             return Response.json({message: "Booking Successfull"})
//         } catch (error) {
//             console.log(error);
//         }
// }