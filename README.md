# 🛍️ Shop

**Shop** is a modern React Native e-commerce demo app built with Expo.  
It showcases performance optimization, offline support, secure storage, Redux state management, deep linking, and more — all with an iOS-inspired design.

---

## 📱 Features

- ✅ Optimized rendering of 5,000 products using `FlatList` (pagination + virtualization)
- 🛒 Global cart system via Redux Toolkit
- 📡 Offline support with `AsyncStorage` + `NetInfo`
- 🔐 Secure token storage using `expo-secure-store`
- 🔗 Deep linking support (e.g., `myapp://user/1`)
- 🧾 Clean architecture & reusable components
- 🧠 Modern UI (iOS look & feel) using native components
- 📦 Bottom Tab + Stack navigation for seamless UX

---

## 🏗️ Project Structure

```
Shop/
├── App.tsx
├── app.json
├── /assets
├── /src
│   ├── /components   # Reusable UI components
│   ├── /navigation   # React Navigation setup
│   ├── /screens      # Screen components (Home, Cart, Users, etc.)
│   ├── /store        # Redux store setup
│   ├── /utils        # Helpers & mock data
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js ≥ 16
- Expo CLI

  ```bash
  npm install -g expo-cli
  ```

- Expo Go app (for testing on device)

### 📦 Install Dependencies

```bash
npm install
npx expo install
```

### ▶️ Run the App

```bash
npx expo start
```

Then:

- Press `i` to open the iOS simulator
- Press `a` for Android emulator
- Or scan the QR code using the Expo Go app

---

### 📦 Expo Build & Deployment

1. **Login to Expo**
   ```bash
   npx expo login
   ```

2. **Build Android APK**
   ```bash
   npx expo build:android
   ```

3. **Build iOS (requires Apple account)**
   ```bash
   npx expo build:ios
   ```

#### ⚙️ EAS Build (Recommended)

Follow the prompts and choose:
- Workflow: Managed
- Platform: Android/iOS or both

This generates an `eas.json` file like:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": true
      }
    }
  }
}
```

4. **Build for Android (APK)**
   ```bash
   eas build --platform android --profile production
   ```

5. **Build for iOS (Simulator)**
   ```bash
   eas build --platform ios --profile production
   ```

---

## 🧠 Tech Stack

- React Native + Expo
- Redux Toolkit (cart state)
- AsyncStorage + SecureStore
- React Navigation (Stack + Tabs)
- TypeScript
- Expo Linking
- NetInfo

---

## 👨‍💻 Author

Built by Sushant Dwivedi

[GitHub Repo](#)

---

## 📄 License

This project is licensed under the MIT License.