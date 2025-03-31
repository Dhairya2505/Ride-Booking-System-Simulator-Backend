import { Request, Response } from "express";
import { kafka } from "../utility/client.js";

export const ride = async (req: Request, res: Response) => {

    const { id, source, destination } = req.body;

    if(!(id && source && destination)){
        res.status(400).json({
            msg: "Bad Inputs"
        })
        return;
    }

    const producer = kafka.producer();
    await producer.connect();
    await producer.send({
        topic: 'ride-requested',
        messages: [
            { key: 'ride-requested', value: JSON.stringify({
                userId: "123",
                sourceLocation: "A",
                destinationLocation: "B"
            }) }
        ],
    });

    await producer.disconnect();

    res.json({
        msg: "Success"
    })
    return;

}