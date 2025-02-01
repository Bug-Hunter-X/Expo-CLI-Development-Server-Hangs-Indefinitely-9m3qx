After extensive debugging, I discovered that a conflict with another application using port 19000 (the default Expo development server port) was causing the hang.  

**Solution 1: Identify and stop conflicting processes**

1. Open Activity Monitor (or Task Manager on Windows).
2. Search for processes using port 19000.
3. Stop any conflicting processes.
4. Run `expo start` again.

**Solution 2: Change the Expo development server port**

1. Run `expo start --port 19001` (or any other available port).

**Solution 3 (If solutions 1 and 2 fail): Check for corrupted Expo CLI installation**

1. Uninstall Expo CLI: `npm uninstall -g expo-cli`
2. Reinstall Expo CLI: `npm install -g expo-cli`
3. Clear npm cache: `npm cache clean --force`
4. Run `expo start` again.

**Example of setting a different port in package.json**
```json
{
  "scripts": {
    "start": "expo start --port 19001"
  }
}
```
By implementing these solutions, the Expo development server should start successfully.