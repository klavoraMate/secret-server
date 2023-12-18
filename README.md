# 🕵️‍♂️ Secret Server

This is a simple secret server that allows you to store secrets in a database and retrieve them using a hash key. The server is written in Python 3.7 and uses the Django framework. The Frontend is a React Next.js project with TypeScript and uses the Material UI framework. There is a detailed API documentation available in the `api_doc.yaml` Swagger file. The Frontend is deployed on Vercel and the Backend is deployed on Render.

## 🚀 Usage

### 🖥️ Frontend

1. Navigate to [https://secretserver.vercel.app/](https://secretserver.vercel.app/)
2. Navigate to the "Create" page
3. Fill out the Secret form which includes:
    - Secret text (required) - The secret text that you want to store
    - Remaining views (required) - The number of times the secret can be viewed
    - Remaining time (required) - The time in minutes until the secret expires
4. Click on the "Send" button
5. Copy the generated hash
6. Navigate to the "Find" page
7. Paste the hash into the input field
8. Select the response format (JSON or XML)
9. Click on the "Find" button
10. The secret will be displayed

### 📡 Backend API

The backend API is available at [https://server-k1y7.onrender.com/v1](https://server-k1y7.onrender.com/v1).
Read the `api_doc.yaml` Swagger file for detailed API documentation.

## 🔒 Privacy

The secret text is stored in the database in an encrypted form.

## 🛠️ Tech Stack

- Python 3.7
- Django
- Django REST Framework
- React
- Next.js
- TypeScript
- Material UI

## 🧪 Automation Tests

Post and Get request test
![view](https://imgur.com/auN5GS8.png)

Available views test
![view](https://imgur.com/kjgn66f.png)

Available time test
![view](https://imgur.com/fnbbVch.png)