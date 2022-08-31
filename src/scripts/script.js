class menuResponse {
    static showMenu() {
        const img = document.querySelector('.img_btn')
        const xClose = document.querySelector('.x_close')
        const section = document.querySelector('.section_menu')

        img.addEventListener('click', () => {
            

            img.classList.add('close_menu')
            xClose.classList.remove('close_menu')
            
            section.classList.remove('close_menu')

            xClose.addEventListener('click', () => {
                

                img.classList.remove('close_menu')
                xClose.classList.add('close_menu')
                
                section.classList.add('close_transition')
                
                setTimeout(()=>{
                    section.classList.add('close_menu')
                }, 300)
              
            })
        })
    }
}

menuResponse.showMenu()