# CLI Project with Google Gemini

This project is a Command Line Interface (CLI) tool built using Node.js that integrates Google Gemini to provide prompt-based outputs directly in the CLI.

## Features

- **Simple CLI Interface**: Easy-to-use command line tool.
- **Google Gemini Integration**: Get responses directly from Google Gemini based on your prompts.
- **Instant Feedback**: Receive real-time responses within the CLI.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Google Gemini API Key**: You will need an API key to access Google Gemini.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Anilkumarbandaru/CliGPT.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up your environment**:
    - Create a `.env` file in the root of your project.
    - Add your Google Gemini API key to the `.env` file:
      ```
      GEMINI_API_KEY=your_api_key_here
      ```

## Usage

1. **Run the CLI**:
    ```bash
    node cli.js prompt "Provide your prompt over here"
    node cli.js p "Provide your prompt over here"
    ```
    Both will works

2. **Enter your prompt**: After running the CLI, type your prompt and press enter to receive a response from Google Gemini.

## Example

```bash
$ node cli.js p  "Give me a brief about Blockchain "
Finding better results for you 😎 ...
## Blockchain: A Simple Explanation

Imagine a shared, public ledger where everyone can see transactions but no one can change them. That's the core concept of **blockchain**.

**Key Features:**

* **Decentralized:** No single authority controls it, making it resistant to censorship and manipulation.
* **Secure:** Transactions are encrypted and linked together in a chain, making them virtually tamper-proof.
* **Transparent:** All transactions are publicly viewable, enhancing accountability and trust.
* **Immutable:** Once a transaction is recorded, it cannot be altered, ensuring its integrity.

**Applications:**

* **Cryptocurrencies:** Bitcoin and Ethereum use blockchain to track and verify transactions.
* **Supply Chain Management:** Track goods from origin to delivery, ensuring transparency and authenticity.
* **Digital Identity:** Store and manage identity data securely and efficiently.
* **Voting Systems:**  Ensure fair and verifiable elections.

**In a nutshell, blockchain is a technology that enables secure, transparent, and verifiable transactions, creating trust and efficiency in various industries.**

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Thanks to the creators of Node.js and the Google Gemini team for their powerful tools and APIs.

