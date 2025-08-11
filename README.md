# 📱 iVoluntia Mobile App

iVoluntia is a volunteer management platform designed to connect volunteers with programs, donations, and community opportunities.  
This repository contains the **React Native mobile application** built with **Expo Router (file-based routing)** for a scalable and maintainable architecture.

---

## 🚀 Features
- Volunteer registration & authentication
- Browse and join programs
- Manage donations
- View and update profile
- Push notifications for new opportunities
- Multilingual support (i18n)

---

## 🏗 Architecture Overview
This app follows a **file-based routing** structure powered by **Expo Router**, with modular separation for services, state, components, and utilities.

```
trustesse-ivoluntia-mobile/
├── app/                          # Routes (maps directly to navigation paths)
│   ├── _layout.tsx               # Root layout (global providers, navigation shells)
│   ├── index.tsx                  # Dashboard/Home
│   ├── auth/                      # Authentication flow
│   ├── programs/                  # Volunteer programs
│   ├── donations/                 # Donation screens
│   └── profile/                    # User profile
├── assets/                        # Static resources (images, fonts)
├── components/                    # Reusable UI components
├── constants/                     # Colors, routes, metrics
├── contexts/                      # Global React contexts
├── hooks/                         # Custom React hooks
├── services/                      # API service layer
├── state/                         # Redux store slices
├── types/                         # TypeScript interfaces/types
├── utils/                         # Helper functions
├── i18n/                          # Translations and internationalization setup
└── ...
```


---

## 🛠 Tech Stack
- **React Native + Expo Router** (file-based routing)
- **Redux Toolkit** (state management)
- **Axios** (API calls)
- **React Hook Form + Yup** (form handling & validation)
- **i18next** (internationalization)
- **Expo Notifications** (push notifications)
- **AsyncStorage / SecureStore** (storage & persistence)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js >= 18.x
- Yarn or npm
- Expo CLI (`npm install -g expo-cli`)

### Steps
```bash
# 1️⃣ Clone repository
git clone https://github.com/Trustesse-limited/trustesse-ivoluntia-mobile.git 
cd trustesse-ivoluntia-mobile

# 2️⃣ Install dependencies
yarn install

# 3️⃣ Copy environment variables
cp .env.example .env

# 4️⃣ Run app
yarn start
```

---

## ⚙️ Environment Variables
Create a `.env` file in the root directory with:

```
API_URL=https://api.example.com
SENTRY_DSN=your_sentry_dsn
GOOGLE_CLIENT_ID=your_google_client_id
FIREBASE_API_KEY=your_firebase_api_key
```

Use `.env.dev`, `.env.staging`, `.env.prod` for environment-specific values.

---

## 🧪 Testing
We use **Jest** and **@testing-library/react-native** for unit and integration tests.

```bash
# Run tests
yarn test

# Run with coverage
yarn test --coverage
```

---

## 📜 Coding Standards
- Follow **ESLint + Prettier** rules
- Use meaningful commit messages (`feat(auth): add login screen`)
- Branch naming:
  - `feature/<name>`
  - `bugfix/<name>`
  - `hotfix/<name>`

---

## 📈 CI/CD
We use GitHub Actions for:
- Linting
- Running tests
- Building the app

No direct commits to `main` are allowed — all changes must go through PR review.

---

## 📄 License
This project is proprietary and maintained by **Trustesse**. Unauthorized copying or distribution is prohibited.

---

## 📬 Contact
For technical inquiries, contact the engineering team.
