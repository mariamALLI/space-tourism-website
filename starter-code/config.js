tailwind.config = {
    theme: {
        extend: {
            colors: {
                grayish_blue: 'hsl(217, 19%, 38%)',
                dark_grayish_blue: 'hsl(217, 19%, 24%)',
                for_text: '#fff',
                for_number: '#ffffff',
                dark_navy: '#0c0e18',
                line_color: '#4e5a73',
                light_white: '#ffffff0d',
                h1_clr: '#d2d8f9'
            },
            fontFamily: {
                  belle: ["Bellefair", "serif"],
                  barlow_c: ["Barlow Condensed", "sans-serif"],
                  barlow: [ "Barlow", "sans-serif"]
            },
            backgroundImage: {
                body_mobile_hero: 'url("./assets/home/background-home-mobile.jpg")',
                body_desktop_hero: 'url("./assets/home/background-home-desktop.jpg")',
                body_tablet_hero: 'url("./assets/home/background-home-tablet.jpg")',
            }
        }
    }
}