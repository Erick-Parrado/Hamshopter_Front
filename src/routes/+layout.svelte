<script lang='ts'>
	import '../app.sass'
</script>

<header>
    <div id='header_titles'>
        <span id='header_title'>Hamshopter</span>
        <span id='slogan'>Amiguitos a tu mano</span>
    </div>
    <img src='/ham_logo.svg' alt='logo'/>
</header>
<main>
    <slot/>
</main>

<style lang='sass'>
    @import src\app.sass

    header
        display: flex
        justify-content: center
        align-items: center

        position: relative
        z-index: 1

        width:100%
        height:9em

        background-color: var(--main-color)

        color: white
        font: 1em Itim-R
        
        span
            width: max-content

        #header_titles
            display: flex
            flex-flow: column

            width: max-content


            #header_title
                font-size: 4em
            
            #slogan
                font-size: 1em

        img
            height: 6em
    main
        position: relative
        top: 0
        left: 0
        z-index: 0


        height: 90vh
        width: 100%
        
        background: #E0E0E0

</style>