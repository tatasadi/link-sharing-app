# Link-Sharing App [![CI/CD](https://github.com/tatasadi/link-sharing-app/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/tatasadi/link-sharing-app/actions/workflows/ci-cd.yml)

A full-stack web application built with Next.js, React, and TypeScript for managing and sharing personalized profile links. Users can create, update, and delete links, customize their profiles, and view real-time profile previews. It also supports reordering links through a drag-and-drop interface, enabling full customization of how profiles are displayed.

## Table of Contents

- [Link-Sharing App](#link-sharing-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [Screenshots](#screenshots)
  - [Links](#links)
  - [My Process](#my-process)
    - [Built with](#built-with)
    - [Code Quality with](#code-quality-with)
  - [Author](#author)

## Features

- **Link Management**: Add, edit, delete, and reorder links via drag-and-drop functionality.
- **Profile Customization**: Update profile details, including profile picture, first name, last name, and email.
- **Real-Time Preview**: See live changes to your profile before saving.
- **Form Handling & Validation**: Forms are powered by React Hook Form with schema validation using Zod.
- **State Management**: Application state is managed with Zustand for a clean, scalable architecture.
- **User Authentication**: Secure authentication system using NextAuth.
- **Image Upload**: Upload profile pictures securely to Azure Blob Storage.
- **Clipboard Integration**: Easily copy your profile URL with one click.
- **Public Profile Sharing**: Share your profile link with others, allowing anyone to view your social links and profile information.
- **Responsive Design**: Optimized for all screen sizes with a clean mobile-first layout.

## Tech Stack

- **Frontend**: React, TypeScript, Next.js, Tailwind CSS, Shadcn
- **Forms**: React Hook Form, Zod (for validation)
- **State Management**: Zustand
- **Backend**: Prisma ORM, PostgreSQL
- **Authentication**: NextAuth
- **File Storage**: **Azure Blob Storage**
- **Database**: PostgreSQL
- **Component Documentation**: Storybook

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tatasadi/link-sharing-app.git
   cd link-sharing-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following keys (update values accordingly):

   ```plaintext
   DATABASE_URL=your_postgresql_database_url
   AUTH_SECRET=your_auth_secret

   # Azure Blob Storage Configuration
   AZURE_STORAGE_CONNECTION_STRING=your_azure_storage_connection_string
   AZURE_STORAGE_CONTAINER_NAME=your_azure_container_name
   AZURE_STORAGE_NAME=your_azure_storage_name
   ```

4. **Run the Prisma migrations:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:3000`.

## Deployment

This project can be deployed using [Vercel](https://vercel.com/) or any other hosting provider that supports Next.js. In addition, the project can be containerized and deployed using Azure Container Registry (ACR) and Azure Container Apps via GitHub Actions. Here’s an overview of both approaches:

### Option 1: Deploying with Vercel (or Similar Providers)

1. **Push your project** to a Git repository.
2. **Link your repository to Vercel** (or your preferred hosting provider) and set up the necessary environment variables.
3. **Deploy the app** using Vercel's deployment pipeline.  
   This method leverages Vercel’s serverless infrastructure and automatic previews for every commit.

### Option 2: Containerized Deployment using Azure

1. **Containerize the Project:**
  - Build a Docker image for your app using the provided Dockerfile.
  - Use GitHub Actions to build and push the image to an Azure Container Registry (ACR).

2. **Set Up Azure Container Apps:**
  - Create an Azure Container Apps environment (optionally integrating it with a VNet).
  - Deploy your containerized application by updating the Container App to use the new image from ACR.

3. **GitHub Actions Workflow:**
  - The provided GitHub Actions workflow automates the build, push, and deploy process.
  - Update your workflow and environment variables to include your ACR details and your Azure subscription information.

This containerized approach is just one possibility; you can choose it if you’d like to manage the entire deployment via containers. Alternatively, you can still deploy directly to Vercel or other platforms that support Next.js.

Choose the method that best fits your requirements, infrastructure, and scaling needs.

## Screenshots

![](./preview-1.png)  
![](./preview-2.png)  
![](./preview-3.png)

## Links

- **Solution URL:**  
  [https://github.com/tatasadi/link-sharing-app](https://github.com/tatasadi/link-sharing-app)
- **Live URL:**  
  [https://link-sharing-app.codingforweb.com](https://link-sharing-app.codingforweb.com)

## My Process

### Built with

![](https://img.shields.io/badge/HTML5-fff?style=for-the-badge&logo=HTML5&logoColor=fff&color=E34F26)  
![](https://img.shields.io/badge/CSS3-fff?style=for-the-badge&logo=CSS3&logoColor=fff&color=29a4d9)  
![](https://img.shields.io/badge/TypeScript-fff?style=for-the-badge&logo=TypeScript&logoColor=fff&color=2f74c0)  
![](https://img.shields.io/badge/git-fff?style=for-the-badge&logo=git&logoColor=fff&color=e94e31)  
![](https://img.shields.io/badge/React-fff?style=for-the-badge&logo=React&logoColor=000&color=5ed3f3)  
![](https://img.shields.io/badge/Next.js-fff?style=for-the-badge&logo=next.js&logoColor=fff&color=000)  
![](https://img.shields.io/badge/tailwindcss-fff?style=for-the-badge&logo=tailwindcss&logoColor=fff&color=15b8c5)  
![](https://img.shields.io/badge/Zod-fff?style=for-the-badge&logo=zod&logoColor=fff&color=3068b7)  
![](https://img.shields.io/badge/Storybook-fff?style=for-the-badge&logo=storybook&logoColor=fff&color=ff4785)  
![](https://img.shields.io/badge/React_Hook_Form-fff?style=for-the-badge&logo=react-hook-form&logoColor=fff&color=ec5990)  
![](https://img.shields.io/badge/Zustand-fff?style=for-the-badge&logo=zustand&logoColor=fff&color=ff7e00)  
![](https://img.shields.io/badge/Next_Auth-fff?style=for-the-badge&logo=nextauth&logoColor=fff&color=007acc)  
![](https://img.shields.io/badge/Azure_Blob_Storage-fff?style=for-the-badge&logo=azureblobstorage&logoColor=fff&color=0078d4)  
![](https://img.shields.io/badge/Prisma-fff?style=for-the-badge&logo=prisma&logoColor=fff&color=0c344b)  
![](https://img.shields.io/badge/PostgreSQL-fff?style=for-the-badge&logo=postgresql&logoColor=fff&color=336791)  
![](https://img.shields.io/badge/Shadcn-fff?style=for-the-badge&logo=shadcn&logoColor=fff&color=000)

### Code Quality with

![](https://img.shields.io/badge/eslint-fff?style=for-the-badge&logo=eslint&logoColor=fff&color=4930bd)  
![](https://img.shields.io/badge/prettier-fff?style=for-the-badge&logo=prettier&logoColor=000&color=f3ae42)

## Author

- **Website** - [Ehsan Tatasadi](https://ehsan.tatasadi.com)
- **Frontend Mentor** - [@tatasadi](https://www.frontendmentor.io/profile/tatasadi)
- **GitHub** - [@tatasadi](https://github.com/tatasadi)
- **Linkedin** - [Ehsan Tatasadi](https://www.linkedin.com/in/ehsan-tatasadi-2161a433)
- **X** - [@etatasadi](https://x.com/etatasadi)

