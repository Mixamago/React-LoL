let champions_list = []

    fetch("http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json")
    .then(response => response.json())
    .then (data => {
/*         console.log(data.data);
        console.log("---------"); */
        Object.entries(data.data).map(champion => {
            if(champion[1].tags.length == 1){
                let new_champ = {
                    id:champion[1].key,
                    nombre:champion[1].name,
                    titulo:champion[1].title,
                    roleOne:champion[1].tags[0],
                    roleTwo:"none",
                }
                champions_list.push(new_champ)
            }
            else{
                let new_champ = {
                    id:champion[1].key,
                    nombre:champion[1].name,
                    titulo:champion[1].title,
                    roleOne:champion[1].tags[0],
                    roleTwo:champion[1].tags[1],
                }
                champions_list.push(new_champ)
            }
        })
    })
    console.log(champions_list)