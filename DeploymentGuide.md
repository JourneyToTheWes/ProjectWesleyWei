# 🚀 Deployment Guide (Vercel)

> Author: Wesley Wei

This guide walks through deploying both the **frontend** and **backend** of the project using the Vercel CLI, along with configuration details for `vercel.json`, environment variables, and automatic deployments.

---

## 📦 Project Structure

```
root/
  frontend/
  backend/
```

Each folder is deployed **independently** as its own Vercel project.

---

## ⚙️ Prerequisites

* Install Vercel CLI:

  ```bash
  npm install -g vercel
  ```

* Log in:

  ```bash
  vercel login
  ```

---

## 🚀 Deploying with Vercel CLI

### 1. Deploy Frontend

```bash
cd frontend
vercel
```

* Follow prompts (select project name, etc.)
* For production deployment:

  ```bash
  vercel --prod
  ```

---

### 2. Deploy Backend

```bash
cd backend
vercel
```

* For production:

  ```bash
  vercel --prod
  ```

---

## 🔁 Frontend `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://project-wesley-wei-backend.vercel.app/api/:path*"
    },
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ]
}
```

### ✅ What this does:

#### 1. API Proxying

```json
{
  "source": "/api/:path*",
  "destination": "https://project-wesley-wei-backend.vercel.app/api/:path*"
}
```

* Any request to `/api/*` from the frontend:

  ```
  https://www.westway.space/api/...
  ```

  gets **forwarded to the backend deployment**.

This allows the frontend and backend to **share the same domain**, avoiding CORS issues.

---

#### 2. SPA Routing (React / Vite)

```json
{
  "source": "/((?!api/).*)",
  "destination": "/index.html"
}
```

* Ensures all non-API routes load `index.html`
* Required for client-side routing (React Router, etc.)

---

## 🧠 Backend `vercel.json`

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "server.ts" }
  ]
}
```

### ✅ What this does:

#### 1. Build Configuration

```json
{
  "src": "server.ts",
  "use": "@vercel/node"
}
```

* Tells Vercel to treat the backend as a **serverless Node.js function**
* Compiles and runs `server.ts`

---

#### 2. Routing Everything to Express App

```json
{ "src": "/(.*)", "dest": "server.ts" }
```

* All incoming requests are handled by the Express server
* The existing routes (`/api/...`) continue to work as-is

---

## 🔐 Environment Variables (Vercel Dashboard)

You must configure environment variables **in the Vercel UI** (not `.env` files in production).

---

### 🌐 Frontend Environment Variables

| Variable       | Value                       |
| -------------- | --------------------------- |
| `VITE_API_URL` | `https://www.westway.space` |

### ✅ Why this works

Because of the `vercel.json` **rewrite rule**, the frontend can call:

```
/api/...
```

And Vercel automatically routes it to the backend.

So the frontend API base URL is **the same domain**.

---

### 🛠 Backend Environment Variables

| Variable       | Value                          |
| -------------- | ------------------------------ |
| `MONGO_URI`    | Your MongoDB connection string |
| `FRONTEND_URL` | `https://www.westway.space`    |

### ✅ Why `FRONTEND_URL` matters

* Used for:

  * CORS configuration
  * Allowing only the frontend domain to access backend APIs

---

### 🧭 How to Set Environment Variables

1. Go to Vercel Dashboard
2. Select your project (frontend or backend)
3. Navigate to:

   ```
   Settings → Environment Variables
   ```
4. Add each variable
5. Redeploy after changes

---

## 🌿 Automatic Deployments (Git Integration)

You can configure Vercel to auto-deploy on pushes to a specific branch.

### ✅ Steps:

1. Connect your GitHub repo to Vercel
2. During setup, choose:

   * **Production Branch** (e.g., `main`)
3. Configure:

   ```
   Settings → Git → Production Branch
   ```

---

### 🔁 Behavior

* Push to `main` → **Auto production deployment**
* Push to other branches → **Preview deployments**

---

## 🌐 Custom Domain Setup (DNS)

To connect your custom domain (e.g., `westway.space`) to Vercel:

### ✅ Steps:

1. Go to your Vercel project dashboard
2. Navigate to:

   ```
   Settings → Domains
   ```
3. Add your domain (e.g., `westway.space`)
4. Vercel will provide DNS records such as:

   * **A Record**
   * **CNAME Record**

---

### 🔧 Configure DNS at Your Domain Provider

* Go to your domain provider (e.g., GoDaddy, Namecheap, Cloudflare)
* Open **DNS settings**
* Add the records exactly as provided by Vercel:

#### Example:

* **A Record** → points your root domain (`@`) to Vercel
* **CNAME Record** → points `www` to Vercel

---

### ⏳ Propagation

* DNS changes may take a few minutes to several hours to propagate
* Once complete, Vercel will verify and connect your domain

---

### ✅ Result

* Your frontend will be accessible at:

  ```
  https://www.westway.space
  ```
* Because of your frontend rewrites, API requests to `/api/*` will still route correctly to your backend

---

## 🧪 Recommended Workflow

* Use:

  ```bash
  vercel
  ```

  for preview deployments

* Use:

  ```bash
  vercel --prod
  ```

  for production releases

---


## 🧩 Summary

* Deploy frontend and backend **separately**
* Use `vercel.json`:

  * Frontend → routing + API proxy
  * Backend → serverless function setup
* Environment variables must be set in Vercel UI
* Frontend and backend share the same domain via rewrites
* Use Git integration for automatic deployments
* Add custom domain via Vercel and configure DNS using A and CNAME records

---

