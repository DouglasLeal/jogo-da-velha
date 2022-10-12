async function i18n(language) {
    switch (language) {
        case "en":
        case "pt-BR":
            document.querySelector("html").lang = language;
            let res = await fetch(`assets/language/${language}.json`);
            let data = await res.json();

            for (const i in data) {
                let elements = document.querySelectorAll(`[data-language=${i}]`);

                elements.forEach(el => {
                    el.innerText = data[i];
                });
            }
    }
}