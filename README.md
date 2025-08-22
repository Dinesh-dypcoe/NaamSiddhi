# Naam Siddhi 🚓📚

**Advanced Police Record Management System**  
🏆 *Winner of Smart India Hackathon*

- ## 🌐 Live Demo
You can explore the live demo of **Naam Siddhi** here:  
[**Naam Siddhi - Live Demo**](https://naam-siddhi.vercel.app/)

## 📖 Overview
**Naam Siddhi** is an innovative platform designed to overcome the challenges of name-based search mechanisms, especially in the context of Indian languages. The solution combines **modified Soundex** for Indian languages and **Levenshtein distance** to provide accurate string matching across both **Devanagari** and **Roman scripts**. This advanced system enhances police record management with bilingual support, intuitive search, and robust analytics.

By leveraging hybrid algorithms, Naam Siddhi ensures precise name matching, even in complex Indian name variations, making it an essential tool for law enforcement agencies.

## ✨ Features
- **User Profiles**: Seamlessly create and manage user profiles.
- **Case Management**: Create and link cases bidirectionally to user profiles for better tracking.
- **Advanced Search**:
  - Hybrid algorithms for string matching in **Devanagari** and **Roman scripts**.
  - Matches based on additional attributes like **date of birth** and **address** for improved accuracy.
  - **B-Tree Indexing** for optimized search and faster record retrieval.
- **Bilingual Support**: Full support for both **Hindi** and **English** for enhanced accessibility.
- **Voice-to-Text Recognition**: Bilingual voice-to-text recognition for hands-free record creation and search.
- **Analytics Dashboard**: Gain actionable insights through visual record analytics.
- **Responsive Design**: Fully optimized for all screen sizes, ensuring smooth usability on any device.
- **Modern UI/UX**: User-friendly interface designed for ease of use.
- **Sorting and Filtering**: Sort and filter profiles based on search results and various attributes.

## 🔧 Tech Stack
- **Backend**: Node.js with Express.js and **MongoDB Atlas** for data storage.
- **Frontend**: **Tailwind CSS** for responsive styling and **EJS** templates for dynamic content rendering.
- **Algorithms**:
  - **Modified Soundex** for Indian languages.
  - **Levenshtein Distance** for accurate string matching.
  - **B-Tree Indexing** for optimized search performance.
- **Deployment**: Hosted on **Vercel** for fast and scalable access.

## 🎯 Key Functionalities
- **Profile Management**: Efficiently create, edit, and manage user profiles with key details.
- **Case Linking**: Link cases bidirectionally to profiles for better organization and management.
- **Advanced Search**: 
  - Perform string matching across both Devanagari and Roman scripts.
  - Additional attribute matching (e.g., **date of birth**, **address**) for greater accuracy.
  - Automatically sort profiles by matching scores for quick search results.
- **Voice-to-Text**: Bilingual voice recognition for hands-free interaction and search.
- **Analytics Dashboard**: Get valuable insights from your records with an interactive dashboard.



## 📄 Documentation
For detailed usage, setup instructions, and algorithm explanations, visit the [official documentation](#).

## 🚀 Getting Started
To set up **Naam Siddhi** locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/NaamSiddhi.git
    ```

2. Navigate into the project directory:
    ```bash
    cd NaamSiddhi
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables by creating a `.env` file and adding:
    ```
    DB_URI=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    ```

5. Start the application:
    ```bash
    npm start
    ```

## 📞 Contact
For any questions or feedback, feel free to reach out to us at [dineshaher2505@gmail.com](mailto:dineshaher2505@gmail.com).

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
