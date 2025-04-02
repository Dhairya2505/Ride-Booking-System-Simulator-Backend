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

    const timer = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

    
    setTimeout( async () => {
        const producer = kafka.producer();
        await producer.connect();

        await producer.send({
            topic: 'ride-requested',
            messages: [
                { key: 'ride-requested', value: JSON.stringify({
                    userId: id,
                    sourceLocation: source,
                    destinationLocation: destination
                }) }
            ],
        });
        await producer.disconnect();
        
    }, timer*1000);
    
    res.json({
        msg: "Success",
        timer
    })
    return;
    
}