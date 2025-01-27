<script>
    import HamCard from "$lib/component/hamCard.svelte";
    import SaleModal from "$lib/component/saleModal.svelte";

    let show_form = false
</script>
    <SaleModal show={show_form}/>
<h1 class="section_title">Amiguitos Disponibles</h1>
<section>
    <HamCard/>
</section>
<button id="take_friends" onclick={()=>{show_form=!show_form}}>
    Me lo llevo!
</button>

<style lang="sass" global>
    @import src\app.sass
    
    main
        display: flex
        align-items: center
        flex-flow: column

        .section_title
            font: 2em Itim-R

        section
            height: 35em
            overflow-y: scroll

            padding: 0 1em

            &>*
                margin-bottom: 1em
            
        
        #take_friends
            position: absolute
            bottom: 2em

            height: 2em
            width: 20em

            background: var(--main-color)

            border: none
            border-radius: 5px

            font: 2em Itim-R
            color: #FFF
</style>
