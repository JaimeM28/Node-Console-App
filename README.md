# Table Multiplicator - Node.js CLI

A robust Command Line Interface (CLI) application built with **Node.js** and **TypeScript**. This project implements **Clean Architecture** principles to generate and manage multiplication tables efficiently.

---

##  Features

* **Customizable Bases:** Generate tables for any number.
* **Flexible Limits:** Define how far the table should go (default is 10).
* **Terminal Visualization:** Optional flag to display the table directly in the console.
* **File Management:** Custom naming and destination paths for generated files.

---

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/jaimeM28/Node-Console-App.git
cd Node-Console-App
```
2. **Install dependencies**
 ```bash
npm install 
```
## **Usage**
Run the application using ts-node or your configured npm scripts:
```bash
npx ts-node src/app.ts [options]
```
### Available options
| Option | Alias | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `--base` | `-b` | `number` | **Required** | The base number for the multiplication table. |
| `--limit` | `-l` | `number` | `10` | How many rows the table will have. |
| `--show` | `-s` | `boolean` | `false` | Show the table in the console. |
| `--name` | `-n` | `string` | `table` | Custom name for the generated file. |
| `--destination`| `-d` | `string` | `./outputs` | Directory path where the file will be saved. |

---
##  Architecture

This project is built following **Clean Architecture** principles, ensuring that the business logic is decoupled from external tools and frameworks.

###  Directory Structure

* **`src/domain/` (Core Layer):** Contains the enterprise-wide business rules.
    * **`use-cases/`**: Contains pure logic components like `CreateTableUseCase`. This layer doesn't know about `yargs` or the File System.
* **`src/presentation/` (Orchestration Layer):** Responsible for the user interface and flow.
    * **`server-app.ts`**: The main orchestrator that receives the configuration and executes the corresponding Use Cases.
* **`src/config/` (Infrastructure/Plugins):** Handles external dependencies and tool configurations.
    * **`plugins/args.plugin.ts`**: Encapsulates the `yargs` logic to provide a clean interface for the rest of the application.

---