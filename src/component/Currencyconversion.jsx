import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Currencyconversion = () => {
    const [amount, setAmount] = useState(1);
    const [fromCur, setFromCur] = useState('EUR');
    const [toCur, setToCur] = useState('USD');
    const [converted, setConverted] = useState('');
    const [loading, setLoading] = useState(false);
    const [currencies, setCurrencies] = useState([]);
    const [error, setError] = useState('');

    // Note this api fetch all the countries currency in the api  which are; {
//   "AUD": "Australian Dollar",
//   "BGN": "Bulgarian Lev",
//   "BRL": "Brazilian Real",
//   "CAD": "Canadian Dollar",
//   "CHF": "Swiss Franc",
//   "CNY": "Chinese Renminbi Yuan",
//   "CZK": "Czech Koruna",
//   "DKK": "Danish Krone",
//   "EUR": "Euro",
//   "GBP": "British Pound",
//   "HKD": "Hong Kong Dollar",
//   "HUF": "Hungarian Forint",
//   "IDR": "Indonesian Rupiah",
//   "ILS": "Israeli New Sheqel",
//   "INR": "Indian Rupee",
//   "ISK": "Icelandic Króna",
//   "JPY": "Japanese Yen",
//   "KRW": "South Korean Won",
//   "MXN": "Mexican Peso",
//   "MYR": "Malaysian Ringgit",
//   "NOK": "Norwegian Krone",
//   "NZD": "New Zealand Dollar",
//   "PHP": "Philippine Peso",
//   "PLN": "Polish Złoty",
//   "RON": "Romanian Leu",
//   "SEK": "Swedish Krona",
//   "SGD": "Singapore Dollar",
//   "THB": "Thai Baht",
//   "TRY": "Turkish Lira",
//   "USD": "United States Dollar",
//   "ZAR": "South African Rand"
// }


// {!error && !loading && <div>{currencySymbols[toCur]} {converted}</div>}

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axios.get('https://api.frankfurter.app/currencies');
                const currencyList = Object.keys(response.data).sort();
                setCurrencies(currencyList);
                setLoading(false);
            } catch (error) {
                setError('Error fetching currencies');
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function convert() {
            if (fromCur === toCur) {
                setConverted(amount);
                return;
            }
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
                );
                const conversionRate = response.data.rates[toCur];
                setConverted(conversionRate);
                setLoading(false);
            } catch (error) {
                setError('Error fetching conversion');
                setLoading(false);
            }
        }
        convert();
    }, [amount, fromCur, toCur]);

    const currencySymbols = {
        AUD: 'A$',
        BGN: 'лв',
        BRL: 'R$',
        CAD: 'CA$',
        CHF: 'CHF',
        CNY: '¥',
        CZK: 'Kč',
        DKK: 'kr',
        EUR: '€',
        GBP: '£',
        HKD: 'HK$',
        HUF: 'Ft',
        IDR: 'Rp',
        ILS: '₪',
        INR: '₹',
        ISK: 'kr',
        JPY: '¥',
        KRW: '₩',
        MXN: 'Mex$',
        MYR: 'RM',
        NOK: 'kr',
        NZD: 'NZ$',
        PHP: '₱',
        PLN: 'zł',
        RON: 'lei',
        SEK: 'kr',
        SGD: 'S$',
        THB: '฿',
        TRY: '₺',
        USD: '$',
        ZAR: 'R',
    };
    


    return (
        <div>
            <input onChange={(e) => setAmount(e.target.value)} type="text" value={amount} disabled={loading} />
            <select onChange={(e) => setFromCur(e.target.value)} disabled={loading}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <select onChange={(e) => setToCur(e.target.value)} disabled={loading}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            {error && <div>Error: {error}</div>}
            {!error && !loading && <div>{currencySymbols[toCur]} {converted}</div>}
        </div>
    );
};

export default Currencyconversion;

