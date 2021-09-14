import axios from "axios";
import {API_PATH, TOKEN} from "../../tools/constans";
import {toast} from "react-toastify"


export function login(event, errors, values, history) {
    return function (dispatch) {
        axios.post(`${API_PATH}auth/login`, values)
            .then((res) => {
                console.log(res)
                localStorage.setItem(TOKEN, res.data.tokenType + " " + res.data.accessToken);
                dispatch({type: ""})
                history.push("/admin/menus");
            })
            .catch((error) => {
                toast.error(error.response.data.message)
            });
    }
}