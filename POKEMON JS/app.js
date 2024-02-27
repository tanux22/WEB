//https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/1.png


let base = "https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon";

for (let i = 1; i < 151; i++) {
    const pokemon=document.createElement('div')
    const label=document.createElement('span')
    label.innerText=`#${i}`;
    const x = document.createElement("img");
    x.src = ` ${base}${i}.png`;
    pokemon.append(x);
    pokemon.append(label);
    container.append(pokemon)
}