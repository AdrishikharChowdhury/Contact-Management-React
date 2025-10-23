# 📞 Contact Management Application 🚀

## ✨ Description

Welcome to the Contact Management Application! This web app provides a sleek and efficient way to handle all your contact needs. Built with modern web technologies, it offers a seamless user experience for managing your personal and professional connections. Say goodbye to cluttered contact lists! 👋

**Key Features:**

-   **➕ Contact Creation:** Easily add new contacts with essential details like name, phone number, email, and company. 
-   **👀 Contact Viewing:** Browse all your contacts in a clean, organized table.
-   **✍️ Contact Updating:** Keep your contact information current with easy-to-use editing features.
-   **🗑️ Contact Deletion:** Remove outdated or unwanted contacts with a single click.
-   **🔍 Filtering:** Quickly narrow down your contact list by criteria such as Name, Phone, Email, or Company.
-   **⚡ Search Functionality:** Find specific contacts in a flash using the integrated search bar.

## 🛠️ Technologies Used

This project is powered by a robust stack of modern web technologies:

-   **React:** A powerful JavaScript library for building dynamic and interactive user interfaces. ⚛️
-   **Vite:** A blazing-fast build tool that significantly enhances the development experience. ⚡
-   **Tailwind CSS:** A utility-first CSS framework for crafting beautiful and responsive designs with speed. 🎨
-   **Lucide React:** A delightful collection of pixel-perfect icons to enhance the UI. ✨
-   **React Router DOM:** For smooth and declarative navigation within the application. 🛣️
-   **Custom Hooks:** Leverages custom React hooks (`useFetch`, `usePost`, `usePUT`, `useDELETE`, `useForm`, `useFormUpdate`) for streamlined data fetching, form state management, and API interactions. 🎣
-   **JSON Server (implied):** Utilizes a local JSON server for a flexible and easy-to-use mock backend API. 📡

## 🚀 Installation

Get this project up and running on your local machine in a few simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AdrishikharChowdhury/Contact-Management.git # Replace with actual repo URL if different
    cd Contact-Management
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory of the project and add your base API URL. For example:
    ```
    VITE_BASE_URL="http://localhost:5000/contacts"
    ```
    *(💡 Tip: You'll likely need to set up a JSON server or a similar backend at this URL to handle contact data.)*

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Your application will typically launch at `http://localhost:5173` (or another available port). 🌐

## 💡 Usage

Once the application is live, here's how you can interact with it:

-   **View Contacts:** All your contacts are neatly displayed on the home page.
-   **Create Contact:** Click the "Add" button (or navigate to `/create`) to bring up the contact creation form and add new entries.
-   **Update Contact:** Select any contact from the table to go to its dedicated update form and make changes.
-   **Delete Contact:** Look for the delete icon next to each contact in the table to remove it.
-   **Filter Contacts:** Use the "Filter" dropdown to sort your contacts by Name, Phone, Email, or Company.
-   **Search Contacts:** Type into the search bar in the Navbar to instantly find contacts based on your chosen filter criteria.

## 📂 Folder Structure

```
.gitignore
eslint.config.js
index.html
LICENSE
package-lock.json
package.json
README.md
vite.config.js
.git/...
node_modules/...
public/
│   └───vite.svg
└───src/
    ├───App.jsx
    ├───index.css
    ├───main.jsx
    ├───api/
    │   ├───config.js
    │   └───index.js
    ├───assets/
    │   └───react.svg
    ├───components/
    │   ├───Filter.jsx
    │   ├───Navbar.jsx
    │   ├───Form/
    │   │   ├───CreateForm.jsx
    │   │   ├───Message.jsx
    │   │   └───UpdateForm.jsx
    │   └───Table/
    │       ├───Contacts.jsx
    │       ├───ContactSlider.jsx
    │       ├───TableFoot.jsx
    │       ├───TableHead.jsx
    │       └───ThreeDots.jsx
    ├───contexts/
    │   ├───ContactContext.jsx
    │   └───PersonContext.jsx
    ├───data/
    ├───hooks/
    │   ├───useDELETE.jsx
    │   ├───useFetch.jsx
    │   ├───useForm.jsx
    │   ├───useFormUpdate.jsx
    │   ├───usePost.jsx
    │   └───usePUT.jsx
    └───pages/
        ├───Home.jsx
        └───Create/
            ├───CreateContact.jsx
            └───UpdateContact.jsx
```

## 🧑‍💻 Author

-   **Adrishikhar Chowdhury** - [GitHub Profile](https://github.com/AdrishikharChowdhury)

## 🤝 Contributing

Contributions are always welcome! If you have ideas for improvements, new features, or bug fixes, please feel free to submit a pull request or open an issue. Let's make this project even better together! ✨

## 📄 License

This project is licensed under the MIT License. Please see the `LICENSE` file in the repository for full details. (Note: A `LICENSE` file is not provided in the current context, but it's good practice to include one.)
