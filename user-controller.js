import User from "../schema/user-schema.js";

export const addUser = async (request, response) => {
    const userData = request.body;

    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        response.status(201).json(savedUser);
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({ error: "Internal Server Error" });
    }
}
