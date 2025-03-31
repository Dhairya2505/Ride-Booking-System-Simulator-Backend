import { kafka } from "./client.js";


const init = async () => {

    const admin = kafka.admin();

    await admin.connect();

    await admin.createTopics({
        topics: [
            {
                topic: "ride-requested"
            },
            {
                topic: "ride-accepted"
            },
            {
                topic: "ride-start"
            },
            {
                topic: "ride-update"
            },
            {
                topic: "ride-completed"
            }
        ],
    });

    await admin.disconnect();


}

init();