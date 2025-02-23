# 🏢 Princeps Customer Management System

## Description

**A dynamic customer management system built for Princeps Credit Systems Limited. The application features comprehensive customer data management capabilities including viewing, creating, and editing customer information with advanced filtering and search functionalities. 📊**

## Core Features

- Dynamic data fetching with pagination
- Advanced filtering system
- Real-time search functionality
- Customizable column layouts
- Customer creation and editing interface
- Responsive design & data table implementation

## Technologies and Languages

- **Programming Languages:** TypeScript | JavaScript
- **Frontend Framework:** React & Next.js
- **Dev Tools & Libraries:** Mantine component library | Tanstack Query
- **UI Framework:** Tailwind CSS 
- **API Integration:** RESTful API integration

## Known Issues

- Backend validation issue with customer creation/editing (POST/PATCH requests)
- API base URL using HTTP causing limited functionality in production
- Initial data loads via SSR for production stability

## Deployment and Hosting

- **Live Preview:** [Princeps Assessment](https://princeps-assessment.vercel.app/)
- **GitHub Repository:** [GitHub Repo](https://github.com/stephenwayar/princeps-assessment)

## Running Locally

1. Clone the repository
2. Create a `.env` file with the necessary environment variables
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Setup

```env
# Add your environment variables as specified in the provided .env file:

API_URL = 

BEARER_TOKEN = 
```

## API Documentation

Refer to the attached Postman collection for detailed API endpoints and usage examples.

---

## Author

**Name**: Stephen Bulus

**X (formerly Twitter)**: [@stephenwayar](https://x.com/stephenwayar)

**Email**: [stephenbuluswayar@gmail.com](mailto:stephenbuluswayar@gmail.com)