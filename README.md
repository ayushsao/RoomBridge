# RoomBridge

A comprehensive room-sharing platform that connects roommates and simplifies shared living experiences.

## 🏠 About RoomBridge

RoomBridge is a full-stack web application designed to help people find compatible roommates and manage shared living spaces efficiently. The platform includes features for room listings, user matching, expense tracking, and integrated Telegram authentication.

## ✨ Features

- **Room Listings**: Post and browse available rooms
- **Smart Matching**: Find compatible roommates based on preferences
- **Expense Tracking**: Split and manage shared expenses
- **Telegram Integration**: Seamless authentication via Telegram
- **User Reviews**: Rate and review roommates
- **Responsive Design**: Works on all devices
- **GSAP Animations**: Smooth, interactive user interface

## 🚀 Tech Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication

### Deployment
- **Vercel** - Hosting platform

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Clone the repository
```bash
git clone https://github.com/ayushsao/RoomBridge.git
cd RoomBridge
```

### Install dependencies

#### For the server:
```bash
cd server
npm install
```

#### For the client:
```bash
cd client
npm install
```

## 🔧 Configuration

### Environment Variables

Create `.env` files in both `server` and `client` directories:


## 🏃‍♂️ Running the Application

### Development Mode

#### Start the server:
```bash
cd server
npm start
```

#### Start the client:
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
RoomBridge/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── api/            # API utilities
│   │   └── context/        # React context
│   └── public/
├── server/                 # Express backend
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── middlewares/       # Custom middlewares
└── README.md
```

## 🚀 Deployment

The application is configured for deployment on Vercel:

1. **Deploy Frontend**: The client is automatically deployed via Vercel
2. **Deploy Backend**: The server is deployed as Vercel serverless functions

### Deployment Commands
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush Sao** - [GitHub](https://github.com/ayushsao)

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this platform
- Special thanks to the open-source community for the amazing tools and libraries

---

⭐ Star this repository if you found it helpful!