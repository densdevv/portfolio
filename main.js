
function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function scrollFunction() {

    var helloAnchor = document.getElementById("hello-anchor");
    var gamesAnchor = document.getElementById("games-anchor");
    var webAnchor = document.getElementById("web-anchor");

    var navbar = document.getElementById("navbar-content");
    var name = document.getElementById("name");

    if (window.scrollY > 80) {
        navbar.style.height = "30px";
        if (isElementVisible(helloAnchor)) {
            navbar.style.backgroundColor = "var(--orange)";
            name.innerHTML = `
                <span style="
                padding: 6px;
                margin: 4px;
                color: var(--orange);
                background-color: #2E2E2E;
                border-radius: 10px;
                margin-right: 141px;
                margin-left: -30px;
                ">
                &nbsp;densdev&nbsp;
                </span>
                `;
        } else if (isElementVisible(gamesAnchor)) {
            navbar.style.backgroundColor = "var(--purple-blur)";
            name.innerHTML = `
                <span style="
                padding: 6px;
                margin: 4px;
                color: var(--purple);
                background-color: #2E2E2E;
                border-radius: 10px;
                margin-right: 141px;
                margin-left: -30px;
                ">
                &nbsp;densdev&nbsp;
                </span>
                `;
        } else if (isElementVisible(webAnchor)) {
            navbar.style.backgroundColor = "var(--green-blur)";
            name.innerHTML = `
                <span style="
                padding: 6px;
                margin: 4px;
                color: var(--green);
                background-color: #2E2E2E;
                border-radius: 10px;
                margin-right: 141px;
                margin-left: -30px;
                ">
                &nbsp;densdev&nbsp;
                </span>
                `;
        }
    } else {
        navbar.style.height = "60px";
        navbar.style.backgroundColor = "var(--orange-blur)";
        name.innerHTML =
            `
      👋 Hi, I'm
      <span style="
      padding: 6px;
      margin: 4px;
      color: #fff;
      background-color: var(--orange);
      border-radius: 10px;
      ">
      &nbsp;densdev&nbsp;
      </span>
      `;
    }
}

window.onscroll = function () {
    scrollFunction();
};

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    var darkFavicon = document.querySelector('link[media="(prefers-color-scheme: dark)"]');
    darkFavicon.href = '/img/favicon-white.png';
}