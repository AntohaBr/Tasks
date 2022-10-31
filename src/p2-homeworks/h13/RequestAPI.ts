
export const successAPI =  (success: boolean) => {
    return  fetch("https://neko-cafe-back.herokuapp.com/auth/test", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            success: success
        })
    })
};