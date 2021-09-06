import axios from "axios";


export function login(event, errors, values) {
    console.log(values);

    axios.post('https://herekuapp.com/dostlikdon/api/auth/login', values)
        .then((res) => {
            console.log(res)
            return {

            }
        })

    return {}
}