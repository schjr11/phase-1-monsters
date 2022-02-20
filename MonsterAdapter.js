class MonsterAdapter {

    static getMonsterOnPage(num){
        return fetch(`http://localhost:3000/monsters/?_limit=50&_page=${num}`)
        .then(resp => resp.json())
    }

    static createMonster(data) {
        return fetch("http://localhost:3000/monsters", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json()) 
    }
}