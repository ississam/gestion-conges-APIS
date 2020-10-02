import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://127.0.0.1:8000/api/register', newUser, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            return response
            console.log('reponse register',response)
        })
        .catch(err => {
            return err.response
            console.log(err)
        })
}

export const login = async (user) => {
    // console.log(user)
    return await axios
        .post(
            'http://127.0.0.1:8000/api/login',
            {
                email: user.email,
                password: user.password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then((res) => {
            const nopre = res.data.user.employe.nom + "  "+ res.data.user.employe.prenom;
            console.log('nom:',nopre)
            localStorage.setItem('userToken', res.data.success.token);
            localStorage.setItem('user_id', res.data.user.id);
            localStorage.setItem('etat', res.data.user.etat);       
            localStorage.setItem('employe', res.data.employe);
            localStorage.setItem('avatar', res.data.user.employe.photo);
            localStorage.setItem('nomprenom',nopre );
            localStorage.setItem('id_employe', res.data.user.employe.id);
            // console.log('employyye idd1:', localStorage.eloye_idd)
            if (localStorage.etat==1){
                console.log('user est responsable') 
            }
            else{
                console.log('user est employe')
            }
                // console.log(localStorage.etat) ///pour recupe id user
            // return response.data.token
            console.log(res);
            return res;

        })
        .catch(err => {
            console.log(err)
        })

}

export const getProfile = () => {
    // console.log(localStorage.getItem('userToken'))
    return axios
        .get('http://127.0.0.1:8000/api/details', {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const getEmploye = () => {
    // console.log(localStorage.getItem('userToken'))
    return axios
        .get('http://127.0.0.1:8000/api/employes/phot/', {
            headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` }
        })
        .then(response => {
            console.log(response)
            // localStorage.setItem('avatar', response.data.user.employe.photo);
            

            return response
        })
        .catch(err => {
            console.log(err.response)
        })
}