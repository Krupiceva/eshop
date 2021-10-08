import bcrypt from "bcryptjs";

const users = [
    {
        name: "Krupiceva",
        email: "dora.mlinaric94@gmail.com",
        password: bcrypt.hashSync("krupiceva123!", 10),
        isAdmin: true
    },
    {
        name: "John Doe",
        email: "john@johndoe.com",
        password: bcrypt.hashSync("123456", 10)
    },
    {
        name: "Jane Doe",
        email: "jane@janedoe.com",
        password: bcrypt.hashSync("123456", 10)
    },
]

export default users;