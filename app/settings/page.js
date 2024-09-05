'use client'; // Wymagane dla funkcji interaktywnych

import { useState, useEffect } from 'react';

export default function Settings() {
  const [apiKey, setApiKey] = useState('');

  // Odczytanie klucza API z pliku podczas ładowania strony
  useEffect(() => {
    // Pobranie klucza API z pliku za pomocą IPC
    window.ipcRenderer.invoke('get-api-key').then((storedApiKey) => {
      setApiKey(storedApiKey || '');
    });
  }, []);

  // Funkcja do zapisywania klucza API do pliku
  const saveConfig = () => {
    // Zapisanie klucza API przez IPC
    window.ipcRenderer.invoke('set-api-key', apiKey);
    alert('Klucz OpenAI_API zapisany!');
  };

  return (
    <div>
      <h1>Ustawienia</h1>
      <form onSubmit={(e) => { e.preventDefault(); saveConfig(); }}>
        <div>
          <label htmlFor="apiKey">OpenAI API Key:</label>
          <input
            id="apiKey"
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px', width: '300px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '5px 10px' }}>
          Zapisz
        </button>
      </form>
    </div>
  );
}
