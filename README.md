# Currency Converter

This project is a currency converter application built with React and TypeScript.

## Installation

1. Clone the repository: `git clone https://github.com/Santosh-Baliarsingh/currency-converter-app.git`
2. Navigate into the directory: `cd currency-converter-app`
3. Install the dependencies: `npm install`
4. Start the application: `npm run dev`

## Features

- Fetches real-time currency data from an API
- Allows conversion between different currencies
- Displays country flags for visual aid

## Technologies Used

- React
- TypeScript
- Material-UI
- Axios

## API Key

This application uses the Free Currency API for currency conversion. You need to generate your own API key:

1. Visit [Free Currency API](https://freecurrencyapi.com)
2. Click on `Get Free Key`.
3. Register for a new account or sign in if you already have an account.
4. After signing in, you'll be redirected to a dashboard where you can see your API key.

Replace the `apiKey` variable in the `App.tsx` file with your own API key:

```typescript
const apiKey = "your_api_key_here";
```

## Note

Please note that the Free Currency API does not support all currencies. If you encounter an error message stating that a currency is not supported, please select a different currency.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
