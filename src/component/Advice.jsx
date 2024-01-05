import React, { useState } from 'react'







// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const Currencyconversion = () => {

//     const [amount, setAmount] = useState(1)
//     const [fromCur, setFromCur] = useState('EUR')
//     const [toCur, setToCur] = useState('USD')
//     const [converted, setConverted] = useState('')
//     const [loading, setLoading] = useState(false)


//     // let url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
//     useEffect(function() {
//         async function convert(){
//             setLoading(true)
//            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`)
//             // console.log(res);
         
//             const data = await res.json()
//             console.log(data.rates[toCur]);
//             setConverted(data.rates[toCur]);
//             setLoading(false)
//         }
//         if(fromCur === toCur)
//             return setConverted(amount)
//             convert()
      
//     }, [ amount, fromCur, toCur]
//     );

    
//   return (
//     <div>
//         <input onChange={(e) => setAmount(e.target.value)} type="text" value={amount}  disabled={loading}/>
        
//         <select onChange={(e) => setFromCur(e.target.value)} disabled={loading}>
//         <option value="EUR">EUR</option>
//             <option value="USD">USD</option>
//             <option value="CAD">CAD</option>
//             <option value="IND">IND</option>
//             <option value="NIG">NIG</option>
//         </select>

//         <select onChange={(e) => setToCur(e.target.value)} disabled={loading}>
//             <option value="USD">USD</option>
//             <option value="EUR">EUR</option>
//             <option value="CAD">CAD</option>
//             <option value="IND">IND</option>
//             <option value="NIG">NIG</option>
//         </select>
       
//         <div>{converted} {toCur}</div>
//     </div>
//   )
// }

// export default Currencyconversion









const Advice = () => {
    const [advice, setAdvice] = useState("")
    const [count, setCount] = useState(0)
   async function getAdvice (){
        const res =  await fetch ("https://api.adviceslip.com/advice");
        const data = await res.json()
        console.log(data);
        setAdvice(data.slip.advice)

        setCount((e) => e+ 1)
    }
  return (
    <>
        
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get advice</button>
        <p>You have read <strong>{count}</strong> pieces of advice</p>
    </>
  )
}

export default Advice