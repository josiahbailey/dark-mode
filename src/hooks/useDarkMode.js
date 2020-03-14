import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

// const useDarkMode = bool => {
//     const [mode, setMode] = useLocalStorage('mode', bool)
//     const body = document.querySelector('body')
//     let dark = 'dark-mode'
    
//     useEffect(()=> {
//         if (mode === true) {
//             body.classList.add(dark)
//         } else {
//             body.classList.forEach(cl => {
//                 if (cl === dark) {
//                     body.classList.remove(dark)
//                 }
//             })
//         }
//     }, [mode])

//     const setValue = value => {
//         setMode(value)
//     }

//     return [setValue]
// }

// export default useDarkMode

const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage('mode', false)
    const body = document.querySelector('body')
    let dark = 'dark-mode'
    
    const setValue = () => {
        setMode(!mode)
        if (mode === true) {
            body.classList.add(dark)
        } else {
            body.classList.remove(dark)
        }
    }

    return [setValue]
}

export default useDarkMode