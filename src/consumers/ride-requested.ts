import { nanoid } from "nanoid";
import { kafka } from "../utility/client.js";

interface User {
    userId: string
    sourceLocation: string
    destinationLocation: string
}

const riders = [
    {
        id: "100",
        rider_name: "Rakesh Kulfiwala",
        rides_completed: 0
    },
    {
        id: "101",
        rider_name: "Mukesh Barfiwala",
        rides_completed: 0
    },
    {
        id: "102",
        rider_name: "Suresh Mithaiwala",
        rides_completed: 0
    }
]

function getRider() {
    const randomIndex = Math.floor(Math.random() * riders.length);
    return riders[randomIndex];
}


const consumer = async () => {

    const consumer = kafka.consumer({ groupId: "rideRequested" });

    await consumer.connect();

    await consumer.subscribe({ topics: ['ride-requested'] })

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {

            const timer = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

            setTimeout(async () => {

                const rider = getRider()
                const rideId = nanoid()
                const user: User = JSON.parse(message.value?.toString() as string)

                const producer = kafka.producer();
                await producer.connect();

                await producer.send({
                    topic: "ride-accepted",
                    messages: [
                        {
                            key: "ride-accepted", value: JSON.stringify({
                                rideId,
                                rider,
                                user
                            })
                        }
                    ]
                })

                await producer.disconnect();

            }, timer);

        },
    })

}

consumer();