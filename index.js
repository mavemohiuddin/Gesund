const select = (type, name) => {
    if (type == 1) {
        return document.querySelector(name);
    } else {
        return document.querySelectorAll(name);
    }
}

const create = (name, id, cls, htm, child) => {
    let New = document.createElement(name);

    if (id != 1) {
        New.setAttribute("id", id);
    }
    if (cls != 1) {
        New.classList.add(cls);
    }
    if (htm != 1) {
        New.innerHTML = htm;
    }
    if (child != 1) {
        New.appendChild(child);
    }
    return New;
}

// Scroll parcentage bar

let scroll_amount = 0;
let scroll_parcentage = "0%";

window.addEventListener("scroll", () => {
    scroll_amount = window.scrollY / (document.body.offsetHeight - screen.height + 130) * 100;
    scroll_parcentage = scroll_amount + "%";
    select(1, ".scroll_node").style.width = scroll_parcentage;
    console.log(scroll_amount);
})

// Switching color profile

select(1, ".profile_red").addEventListener("click", () => {
    select(1, "body").setAttribute("data-profile", "red")
});
select(1, ".profile_green").addEventListener("click", () => {
    select(1, "body").setAttribute("data-profile", "green")
});
select(1, ".profile_blue").addEventListener("click", () => {
    select(1, "body").setAttribute("data-profile", "blue")
});

// Coloring header BG on scroll

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        select(1, ".header").classList.add("header_color");
    } else {
        select(1, ".header").classList.remove("header_color");
    }
});

// Rotating Hero section

const rotate_hero = () => {
    select(2, ".slide").forEach((slide) => {
        let current_number = parseInt(slide.getAttribute("data-order"));
        let next_number = current_number - 1;
        if (next_number <= 0) {
            next_number = 3;
        };
        slide.setAttribute("data-order", next_number);
    });
    select(2, ".slide_image").forEach((item) => {
        setTimeout(() => {
            item.classList.add("grow");
        }, 200);
        setTimeout(() => {
            item.classList.remove("grow");
        }, 9100);
    });
    select(2, ".hero_heading").forEach((item) => {
        item.classList.add("slide_in_left");
        setTimeout(() => {
            item.classList.remove("slide_in_left");
        }, 2000);
    });
    select(2, ".hero_content").forEach((item) => {
        item.classList.add("slide_in_up");
        setTimeout(() => {
            item.classList.remove("slide_in_up");
        }, 2000);
    });
    select(2, ".hover_icon").forEach((item) => {
        item.classList.add("slide_in_up");
        setTimeout(() => {
            item.classList.remove("slide_in_up");
        }, 2000);
    });
    select(2, ".hero_play").forEach((item) => {
        item.classList.add("slide_in_right");
        setTimeout(() => {
            item.classList.remove("slide_in_right");
        }, 2000);
    });
}
rotate_hero();
setInterval(() => {
    rotate_hero();
}, 10000);

// Changing tab content

select(2, ".tab_heading").forEach((heading) => {
    heading.addEventListener("click", () => {
        select(2, "[data-content]").forEach((item) => item.classList.remove("tab_visible"));
        select(2, "[data-heading]").forEach((item) => item.classList.remove("tab_active"));

        heading.classList.add("tab_active");
        let heading_number = heading.getAttribute("data-heading");
        let content_selector = '[data-content="' + heading_number + '"]';
        select(1, content_selector).classList.add("tab_visible");
    })
})