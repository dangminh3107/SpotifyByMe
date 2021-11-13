let homepage = JSON.parse(localStorage.getItem(HOMEPAGE_STORAGE)) || {}

let listGroupItem1 = [];
home.forEach((item, index) => {
    let groupItem1 = document.createElement('div');
    groupItem1.classList.add('app-content-header-body-item-group')
    let header = `
                <div class="app-content-header-body-item-header">
                    <span class="app-content-header-body-item-heading">${item.name}</span>
                    <div class="app-content-header-body-item-sub-heading">
                        <span class="app-content-header-body-item-sub-heading-description">${item.note}</span>
                        <span class="app-content-header-body-item-sub-heading-view-all">See all</span>
                    </div>
                </div>
            `
    let body = document.createElement('div')
    body.classList.add('app-content-header-body-item-container')
    body.classList.add('row')
    let html = item.group.map((val) => {
        return `<div class="app-content-header-body-item-contain col l-2 l-mod">
                    <div class="app-content-header-body-item">
                        <div class="app-content-header-body-item-box">
                            <div class="app-content-header-body-item-thumb">
                                <img src="${val.image}" alt="" class="app-content-header-body-item-thum-img ${item.isArtist ? 'artist' : ''}">
                                <div class="btn-play-home app-content-header-body-item-btn-play">
                                    <button class="btn-play-home-box">
                                        <i class="fas fa-play btn-play-home-icon-play"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="app-content-header-body-item-info">
                                <span class="app-content-header-body-item-info-heading">${val.title}</span>
                                <p class="app-content-header-body-item-info-description">
                                    ${val.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    body.innerHTML = html.join('');
    groupItem1.innerHTML = header;
    groupItem1.append(body);
    listGroupItem1.push(groupItem1);
})

let homePageBody = document.querySelector('.app-content-page[id="1"] .app-content-header-body')
let temp1 = homePageBody.innerHTML;
homePageBody.innerHTML = '';
listGroupItem1.forEach(item => {
    homePageBody.append(item);
})
homePageBody.innerHTML += temp1;