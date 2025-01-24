<script lang="ts">
    import receipt_top from "$lib/images/receipt-top.svg"
    import receipt_bottom from "$lib/images/receipt-bottom.svg"

    let num_orden = 0
    let num_transaccion = 0
</script>
<h1 class="section_title">Resumen de compra</h1>
<div class="receipt">
    <div class="receipt-top" style="background-image: url({receipt_top});"></div>
    <div class="receipt-content">
        <h2>Orden #{num_orden}</h2>
        <h3></h3>
        <h3>Transacción #{num_transaccion}</h3>
    </div>
    <div class="receipt-bottom"  style="background-image: url({receipt_bottom});"></div>

</div>
<style lang="sass" global>
    @import src\app.sass
    
    main
        display: flex
        align-items: center
        flex-flow: column


        .section_title
            font: 2em Itim-R

        .receipt
            height: auto

            
            font: 16px Jaldi-R

            .receipt-top
                position: relative
                top: 0.5em
                height: 2.1em
                width:30em
                z-index: 1

                object-fit: contain
                background-repeat: no-repeat

            .receipt-content

                background: #FFF
                height: auto
                width: 30em

                padding: 1em 2em

                border-left: 2px #24c8a7 dashed 
                border-right: 2px #24c8a7 dashed 

                *
                    margin: 0

                h2
                    text-align: center


            .receipt-bottom
                position: relative
                bottom: 0.5em
                height: 2.1em
                width:30em
                z-index: 1

                object-fit: contain
                background-repeat: no-repeat

</style>