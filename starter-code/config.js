tailwind.config = {
    theme: {
        extend: {
            colors: {
                grayish_blue: 'hsl(217, 19%, 38%)',
                dark_grayish_blue: 'hsl(217, 19%, 24%)',
                for_text: '#afb1c7',
                for_number: '#ffffff',
                dark_navy: '#000a1c',
                line_color: '#4e5a73',
                navy: '#3b4962e6'
            },
            fontFamily: {
                  manrope: ["Manrope", "sans-serif"]  
            },
            backgroundImage: {
                body_mobile_hero: 'url("./assets/home/background-home-mobile.jpg")',
                body_desktop_hero: 'url("./assets/home/background-home-desktop.jpg")',
                body_tablet_hero: 'url("./assets/home/background-home-tablet.jpg")',
            }
        }
    }
}