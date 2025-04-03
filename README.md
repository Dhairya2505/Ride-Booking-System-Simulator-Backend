# Ride-Booking-System-Simulator-Backend

The Ride Booking System Simulator Backend is a lightweight service designed to handle ride requests efficiently. It features a single endpoint, /ride, which acts as the entry point for new ride bookings. When a request is made, the backend processes the data and produces a Kafka event, publishing it to a dedicated topic. This event contains crucial ride details such as user ID, source and destination locations. The backend ensures structured event production, making it easy for other services to consume and act upon ride data.

## Live Demo
- [Link]() (coming soon)

## Screenshots

###### Architecture
![https://dhairyasingla-ride-booking-system-simulator-images.s3.ap-south-1.amazonaws.com/architecture.png](https://dhairyasingla-ride-booking-system-simulator-images.s3.ap-south-1.amazonaws.com/blueprint.png)


## Features
1. **Single Ride Endpoint** : Provides a /ride route to handle and process ride requests.

2. **Kafka Event Production** : Publishes ride request data as structured Kafka events for processing.

3. **Efficient Data Handling** : Ensures smooth ride data management for seamless event-driven operations.


## Installation & Setup Instructions

1. Initialize a docker container by running the command in cmd:
   `docker run -p 2181:2181 zookeeper`

2. Initialize another container by the following command and replace `<IP ADDRESS>` by your PC's IP Address:
   `docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<IP ADDRESS>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<IP ADDRESS>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka`

3. Clone the repository to your local machine using the following command:
`git clone https://github.com/Dhairya2505/Ride-Booking-System-Simulator-Backend.git`

4. Navigate to the project directory : `cd Ride-Booking-System-Simulator-Backend`

5. Install the dependencies : `npm install`

6. Start the server : `npm start` or `npm run dev`

The server will start on the default port 8000.

That's it! You can now access the API at `http://localhost:8000`.


## Technologies Used

- **Programming Language**: TypeScript
- **Express**: For creating the server and handling HTTP requests.
- **Node.js**: For running the server-side JavaScript code.
- **Kafka**: For event-driven architecture.
