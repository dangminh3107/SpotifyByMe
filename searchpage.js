let searchpage = JSON.parse(localStorage.getItem(SEARCHPAGE_STORAGE)) || {}


let listGroupItem2 = []
searchpage.forEach((item, index) => {
    let groupItem2 = document.createElement('div')
    groupItem2.classList.add('row')
    groupItem2.classList.add('app-search-body-row')
    let html = item.group.map((value) => {
        return `<div class="app-search-body-item col l-2 m-4 c-6">
                    <div class="app-search-body-item-box" style="background-color: ${value.bColor}">
                        <span class="app-search-body-item-title">${value.title}</span>
                        <img src="${value.image}" alt="" class="app-search-body-item-img">
                    </div>
                </div>
                `
    })
    groupItem2.innerHTML = html.join('');
    listGroupItem2.push(groupItem2);
})

let searchBody = document.querySelector('.app-search-body-container')
let temp2 = searchBody.innerHTML;
searchBody.innerHTML = '';

listGroupItem2.forEach(item => {
    searchBody.append(item);
})

searchBody.innerHTML += temp2;