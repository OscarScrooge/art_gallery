


export async function getDepartments() {

    const url = "https://collectionapi.metmuseum.org/public/collection/v1/departments";

    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    };


     let response =await fetch(url, options).then(
            response => {
                if (response.ok) {
                    return  response.json();
                }
                return response.text().then(err => {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText,
                        errorMessage: err,
                    });
                });
            })
            .then(data => {
               // console.log(data);
                return data.departments;
            })
            .catch(err => {
                console.error(err);
            });
    return response;
}
