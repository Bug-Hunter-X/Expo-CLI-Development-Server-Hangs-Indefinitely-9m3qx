# Expo CLI Development Server Hang

This repository demonstrates a bug where the Expo CLI development server hangs indefinitely without providing any error messages.  The issue occurs on macOS Monterey with Expo version 47.0.12 and Node.js version 16.17.0.  Standard troubleshooting steps (restarting the computer, reinstalling Node.js and Expo CLI, checking network connectivity) have not resolved the problem.

The `bug.js` file contains a minimal React Native project setup.  The `bugSolution.js` provides potential solutions that may help resolve the issue for others encountering similar behavior.