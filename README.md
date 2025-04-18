# Quick Google Search Extension

<img src="./icons/search.png" alt="Search Icon" width="50" height="50">

This Firefox/Chrome extension enables lightning-fast Google searches from any webpage using a keyboard shortcut. Simply highlight text and press a hotkey—no right-clicking, no extra steps.

## Features

- **Instant Search**: Select any text on a webpage and search it on Google with a single keyboard shortcut.
- **Keyboard Friendly**: No need to open context menus—just select and search.
- **Lightweight**: Minimal permissions, no background bloat.

## Default Shortcut

- **Windows/Linux**: `Ctrl + Shift + I`
- **macOS**: `Command + Shift + I`

## Installation

### 🔗 From Firefox Add-ons Store (Recommended)

You can download and install the extension directly from the [Firefox Add-ons store](https://addons.mozilla.org/firefox/addon/quick-google-search/) *(coming soon)*.

### 🧪 Developer Installation (Temporary)

If you're developing or testing the extension locally:

1. Clone or download this repository.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click **“Load Temporary Add-on…”**.
4. Select the `manifest.json` file in the project folder.

> Note: Temporary add-ons will be removed when you close Firefox. Use the store version for permanent installation.

## Permissions

The extension requests the following permissions:

- `activeTab`: Required to execute scripts in the current tab.
- `tabs`: Needed to open new tabs for Google search results.
- `storage`: To save custom keyboard shortcut preferences.

## Usage

1. Select any text on a webpage.
2. Press your keyboard shortcut (default is `Ctrl + Shift + I` or `Command + Shift + I` on macOS).
3. A new tab will open with a Google search for the selected text.

## Options Page

You can change the keyboard shortcut by:

1. Opening the extension’s Options page.
2. Entering a new shortcut (e.g., `Ctrl+Alt+G`).
3. Saving the shortcut.

Your selection will take effect immediately.

## Screenshot

<img src="./screenshots/screenshot.jpg" alt="Quick Google Search Screenshot" width="600">

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [Google](https://www.google.com/) for their search engine.
- [Mozilla](https://developer.mozilla.org/) for their documentation on Firefox extensions.