
## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the Project

Commit Message Generator is a CLI tool that helps you generate witty or serious git commit messages using AI. It leverages Google's Generative AI and Inquirer.js to provide an interactive and fun way to create commit messages.

### Built With

- [Google Generative AI](https://developers.google.com/generative-ai)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/commit-msg-gen.git
   ```
2. Navigate to the project directory
   ```sh
   cd commit-msg-gen
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

## Usage

To use the Commit Message Generator, run the following command:

```sh
node index.js
```


You will be prompted to select a mode (Fun or Serious), choose the type of commit, and provide details about the changes. The tool will then generate a commit message based on your inputs.

### Example
```sh
? Choose a mode for the commit message: (Use arrow keys)
❯ Fun Mode
Serious Mode
? What type of change did you make? (Use arrow keys)
❯ Feature
Bug Fix
Improvement
Code Review
Other
? Briefly describe what you worked on: Added a new feature to improve user experience
Generated Commit Message:
"Feature: Enhanced UX with new feature"
? Do you want to use this commit message? (Y/n)
```


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Contact

Rayen ben rhim - [@your_twitter](https://twitter.com/your_twitter) - your_email@example.com

Project Link: [https://github.com/your_username/commit-msg-gen](https://github.com/your_username/commit-msg-gen)

## Acknowledgements

- [Google Generative AI](https://developers.google.com/generative-ai)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [Placeholder.com](https://placeholder.com)
