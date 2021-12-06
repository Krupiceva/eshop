import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";


// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { 
        orderItems, 
        shippingAddress, 
        paymentMethod, 
        itemsPrice, 
        shppingPrice, 
        withoutTaxPrice, 
        taxPrice, 
        totalPrice 
    } = req.body;

    if(orderItems && orderItems.lenght === 0){
        res.status(400);
        throw new Error("No order items!");
        return;
    } else {
        const order = new Order({
            orderItems, 
            user: req.user._id,
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            shppingPrice, 
            withoutTaxPrice, 
            taxPrice, 
            totalPrice 
        });

        const createdOrder = await order.save();

        //Created
        res.status(201).json(createdOrder);
    }


});

// @desc    GET Order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if(order){
        res.json(order);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});

export { addOrderItems, getOrderById }