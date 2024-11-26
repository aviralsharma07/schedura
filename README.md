# **Schedura**

## **Project Overview**

**Schedura** is an intuitive scheduling application designed to seamlessly integrate with Google services to help users manage their time and commitments effectively. It leverages OAuth 2.0 for secure authentication and access to essential Google APIs, including Google Calendar.

This README details the purpose and functionality of Schedura, focusing on the scopes used, implementation details, and the setup process for the application.

---

## **Key Features**

- **Google Sign-In Integration**: Secure user authentication with Google accounts.
- **Personalized Profile Access**: Fetch and display user profiles for a tailored experience.
- **Calendar Management**: Directly access and manage Google Calendar events.

---

## **OAuth Scopes Used**

Schedura requires the following Google OAuth scopes for its functionality:

1. **`/auth/userinfo.email`**

   - Purpose: To identify the user's email address for secure sign-in and account differentiation.
   - Why Needed: Essential for identifying users and managing personalized data in Schedura.

2. **`/auth/userinfo.profile`**

   - Purpose: To fetch basic profile information such as name and profile picture.
   - Why Needed: Enhances the user experience by personalizing the interface.

3. **`/auth/calendar`**
   - Purpose: To view, create, and manage calendar events.
   - Why Needed: Critical for enabling users to organize schedules and sync event data in real-time.

---

## **How It Works**

1. **User Authentication**

   - Users sign in with their Google account using OAuth 2.0.
   - The application requests permissions for the above-mentioned scopes during the authentication process.

2. **Profile Management**

   - After sign-in, the app retrieves and displays the user's profile information, such as name, email, and profile picture.

3. **Calendar Integration**
   - Users can sync their Google Calendar, create new events, view existing ones, and receive reminders directly through Schedura.
