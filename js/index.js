document.addEventListener("DOMContentLoaded", () => {
    const monsterContainer = document.getElementById('monster-container')
    const backButton = doucment.getElementById('back')
    const forwardButton = document.getElementById('forward')
    const formContainer = document.getElementById('create-monster')
    // console.log(backButton);
    let pageNum = 21

    const monsterForm = document.createElement("form")
    monsterForm.innerHTML = `
        <label>Name</label>
        <input type="text" id="monster-name"/>
        <label>age</label>
        <input type="number" id="monster-age/>
        <label>Description</label>
        <input type="text" id="monster-description"/>
        <input type="submit" id="monster-submit" value=RAWR (''')(^@^)(''')></input>
    `
    formContainer.append(monsterForm)

    monsterForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let monsterData = {
            name: document.getElementById('monster-name').value 
            age: document.getElementById('monster-age').value
            description: document.getElementById('monster-description').value 
        }
            MonsterAdapter.createMonster(monsterData)
            .then(console.log)
    })

    const inputs = document.querySelectorAll("input")
    console.log(inputs);

    MonsterAdapter.getMonsterOnPage(pageNum)
    .then((monsters) => {
        monsterContainer.innerHTML = `On Page ${pageNum}`
        monsters.forEach((monster) => {
            monsterContainer.append(renderMonster(monster), document.createElement("h4"))
        })
    })

    backButton.addEventListener("click", () => {
        if(pageNum === 1){
            window.alert("No More Monsters Back Here :( ")
        } else {
            pageNum -= 1
            MonsterAdapter.getMonsterOnPage(pageNum)
            .then((monsters) => {
                console.log(monsters);
                monster.Container.innerHTML = `On Page ${pageNum}`
                monsters.forEach((monster) => {
                    monsterContainer.append(renderMonster(monster), document.createElement("hr"))
                })
            })
        }
    })

    forwardButton.addEventListener("click, () => {
        pageNum += 1
        MonsterAdapter.getMonsterOnPage(pageNum)
        .then((monsters) => {
            if (monster.length === 0) {
                pageNum -= 1
                window.alert("No more monsters that way :( ")
            }   else {
                monster.Container.innerHTML = `On Page ${pageNum}`
                monsters.forEach((monster) => {
                    monsterContainer.append(renderMonster(monster), document.createElement("hr"))
                })
            }
            
        })
    })

function renderMonster(monster) {
    const monsterSpan = document.createElement("span")
    monsterSpan.innerHTML = `
        <h1>${monster.name}</h1>
        <h4>Age: ${monster.age}</h4>
        <p>Description: ${monster.description}</p>
    `
    // monsterSpan.dataset.id = monster.id
    monsterSpan.setAttribute("data-id", monster.id)
    monsterSpan.style.color = "firebrick"
    return monsterSpan
}
