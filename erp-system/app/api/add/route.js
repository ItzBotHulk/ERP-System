// import clientPromise from '@/lib/mongodb'

// export async function POST(rquest) {
//     const body = await rquest.json()
//     console.log(body)
//   return Response.json({ message: 'Hello World' })
// }

// import { dbConnect } from '@/lib/mongoose';
// import Employee from '@/models/employee';
// export async function POST(request) {
//   try {
//     await dbConnect();
//     const body = await request.json();

//     const newEmployee = new Employee({
//       name: body.name,
//       email: body.email,
//       phone: body.phone,
//       jobrole: body.jobrole,
//       dateOfJoining: body.dateOfJoining
//     });

//     const savedEmployee = await newEmployee.save();
//     return Response.json({ message: 'Employee added successfully', employee: savedEmployee });
//   } catch (error) {
//     console.error('Error adding employee:', error);
//     return Response.json({ error: 'Failed to add employee' }, { status: 500 });
//   }
// }
import { dbConnect } from "@/lib/mongoose";
import Employee from "@/models/Employee";

// export async function POST(req) {
//   try {
//     await dbConnect();
//     const body = await req.json();

//     const newEmp = await Employee.create(body);
//     return Response.json({ success: true, data: newEmp }, { status: 201 });
//   } catch (err) {
//     console.error("❌ Employee validation failed:", err);
//     return Response.json({ success: false, error: err.message }, { status: 400 });
//   }
// }

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    const newEmployee = new Employee({
      name: body.name,
      email: body.email,
      phone: body.phone,
      password: body.password,
      role: body.role,
      salary: body.salary,
      joiningDate: new Date(body.joiningDate),
    });

    const savedEmployee = await newEmployee.save();
    return Response.json({ message: 'Employee added successfully', employee: savedEmployee });
  } catch (error) {
    console.error('Error adding employee:', error);
    return Response.json({ error: 'Failed to add employee' }, { status: 500 });
  }
}