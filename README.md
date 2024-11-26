# Schedura

Schedura is a modern scheduling application inspired by Calendly. It enables users to create, manage, and share events for seamless bookings. With Google Calendar integration and a user-friendly interface, Schedura provides a robust solution for efficient scheduling.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Database Model](#database-model)
- [Getting Started](#getting-started)
- [License](#license)
- [Author](#author)

---

## Features

- **User Authentication:** Powered by Clerk for secure and seamless user management.
- **Event Management:** Create events with customizable titles, descriptions, and durations.
- **Google Calendar Integration:** Synchronize events and bookings with Google Calendar for real-time updates.
- **Dynamic Booking System:** Allow clients to book events within predefined availability slots.
- **Availability Management:** Define availability for each day of the week with flexible time gaps.
- **Responsive Design:** Built with **ShadCN UI** and **TailwindCSS** for a beautiful and responsive interface.
- **Secure Data Handling:** Built using **Prisma ORM** with PostgreSQL (via NeonDB).
- **Type Safety:** Developed using **TypeScript** for a safer development experience.
- **Form Validation:** Uses **Zod** for client-side and server-side form validation.

---

## Tech Stack

- **Frontend:** Next.js, TypeScript, TailwindCSS
- **Backend:** Prisma ORM, PostgreSQL (via NeonDB)
- **Authentication:** Clerk
- **Calendar Integration:** Google Calendar API
- **UI Components:** ShadCN UI, Lucid React Icons
- **Validation:** Zod

---

## Prerequisites

To run this project, ensure you have the following:

- Node.js (v16 or above)
- PostgreSQL database (via NeonDB or another provider)
- Google Cloud Console API setup with the following scopes:
  - **Authentication**
  - **User Data**
  - **Calendar API**

---

## Environment Variables

Create a `.env` file in the root directory of the project and configure the following variables:

| Variable                            | Description                              |
| ----------------------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable API key.          |
| `CLERK_SECRET_KEY`                  | Your Clerk secret API key.               |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`     | Path to the sign-in page (`/sign-in`).   |
| `NEXT_PUBLIC_CLERK_SIGN_OUT_URL`    | Path to the sign-out page (`/sign-out`). |
| `DATABASE_URL`                      | Your PostgreSQL database URL.            |

## Database Model

Schedura uses **Prisma ORM** to define and interact with its database. Below is the detailed schema:

![Database Schema](/public/schedura.png)

### User Model

- **Fields**:
  - `id`: Unique identifier for the user.
  - `clerkUserId`: ID associated with the Clerk authentication service.
  - `email`: User's email address.
  - `username`: User's chosen username.
  - `name`: User's full name.
  - `image`: Profile image URL.
  - `events`: List of events created by the user.
  - `bookings`: List of bookings associated with the user.
  - `availability`: Availability details of the user.
  - `createdAt`: Timestamp when the user was created.
  - `updatedAt`: Timestamp when the user was last updated.
- **Relations**: Connected to the `Event`, `Booking`, and `Availability` models.

### Event Model

- **Fields**:
  - `id`: Unique identifier for the event.
  - `title`: Title of the event.
  - `description`: Detailed description of the event.
  - `duration`: Duration of the event (in minutes).
  - `userId`: Reference to the user who created the event.
  - `privacy`: Privacy setting (e.g., public or private).
  - `createdAt`: Timestamp when the event was created.
  - `updatedAt`: Timestamp when the event was last updated.
- **Relations**: Connected to the `User` and `Booking` models.

### Booking Model

- **Fields**:
  - `id`: Unique identifier for the booking.
  - `eventId`: Reference to the associated event.
  - `userId`: Reference to the user who made the booking (if applicable).
  - `name`: Name of the person who booked the event.
  - `email`: Email of the person who booked the event.
  - `additionalInfo`: Additional information provided during booking.
  - `startTime`: Start time of the booking.
  - `endTime`: End time of the booking.
  - `googleEventId`: Event ID for Google Calendar integration.
  - `meetLink`: Google Meet link for the event.
  - `createdAt`: Timestamp when the booking was created.
  - `updatedAt`: Timestamp when the booking was last updated.
- **Relations**: Connected to the `Event` and `User` models.

### Availability Model

- **Fields**:
  - `id`: Unique identifier for the availability entry.
  - `userId`: Reference to the associated user.
  - `days`: Days of the week when the user is available.
  - `timeGap`: Time interval between booking slots (in minutes).
  - `createdAt`: Timestamp when the availability was created.
  - `updatedAt`: Timestamp when the availability was last updated.
- **Relations**: Connected to the `User` model and `DayAvailability` entries.

### Day Availability Model

- **Fields**:
  - `id`: Unique identifier for the day availability entry.
  - `availabilityId`: Reference to the associated availability entry.
  - `day`: Specific day of the week (e.g., MONDAY, TUESDAY).
  - `startTime`: Starting time for the availability on this day.
  - `endTime`: Ending time for the availability on this day.
- **Relations**: Connected to the `Availability` model.

### Enums

#### DayOfWeek

Represents the days of the week:

- `MONDAY`
- `TUESDAY`
- `WEDNESDAY`
- `THURSDAY`
- `FRIDAY`
- `SATURDAY`
- `SUNDAY`

---

## Getting Started

Follow the steps below to set up and run the project:

1. Clone the repository:

   ```bash
   git clone
   ```

2. Install the dependencies:

   ```bash
   cd schedura
   npm install
   ```

3. Create a `.env` file in the root directory and configure the environment variables.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for more information.

---

## Author

- **LinkedIn** - [aviral07](https://www.linkedin.com/in/aviral07/)
- **Twitter** - [\_aviral07](https://twitter.com/_aviral07)
- **Github** - [aviralsharma07](https://github.com/aviralsharma07)
- **Resume** - [Resume](https://flowcv.com/resume/20ntf1waah)
