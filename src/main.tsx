// index.tsx
import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // Use the non-null assertion operator if you're sure the element exists
root.render(<App />);

